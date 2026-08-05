## Introduction

You can create rulesets to control how users can interact with selected branches and tags in a repository. You can control things like who can push commits to a certain branch and how the commits must be formatted, or who can delete or rename a tag. You can also prevent people from renaming repositories.

You can also create push rulesets to block pushes to a private or internal repository and the repository's entire fork network. Push rulesets allow you to block pushes based on file extensions, file path lengths, file and folder paths, and file sizes.


When you create a ruleset, you can allow certain users to bypass the rules in the ruleset.

For more information on rulesets, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

For customers on GitHub Team and GitHub Enterprise plans you can also create rulesets for repositories in an organization. For more information, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization).



## Importing prebuilt rulesets

To import one of the prebuilt rulesets by GitHub, see [`github/ruleset-recipes`](https://github.com/github/ruleset-recipes).

You can import an existing ruleset using a JSON file. This can be useful if you want to apply the same ruleset to multiple repositories or organizations.
 For more information, see [Managing Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#importing-a-ruleset).

## Using `fnmatch` syntax

You can use `fnmatch` syntax to define patterns to target when you create a ruleset.

You can use the `*` wildcard to match any string of characters. Because GitHub uses the `File::FNM_PATHNAME` flag for the `File.fnmatch` syntax, the `*` wildcard does not match directory separators (`/`). For example, `qa/*` will match all branches beginning with `qa/` and containing a single slash, but will not match `qa/foo/bar`. You can include any number of slashes after `qa` with `qa/**/*`, which would match, for example, `qa/foo/bar/foobar/hello-world`. You can also extend the `qa` string with `qa**/**/*` to make the rule more inclusive.

For more information about syntax options, see the [fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).



### Unsupported `fnmatch` syntax

Not all expressions from the `fnmatch` syntax are supported in branch protection rules. Please be aware of the following constraints:

* You cannot use the backslash (`\`) character as a quoting character, as GitHub does not support the use of backslashes in branch protection rules.
* You can specify character sets within square brackets (`[]`), but you cannot currently complement a set with the `^` operator (e.g., `[^charset]`).
* Although GitHub supports `File::FNM_PATHNAME` in `fnmatch` syntax, `File::FNM_EXTGLOB` is not supported.




## Using regular expressions for commit metadata

When you add metadata restrictions for a ruleset that targets branches or tags, you can use regular expression syntax to define patterns that the relevant metadata, such as the commit message or the branch or tag name, must or must not match.

Metadata restrictions do not accept regex patterns by default. To enable this, select the **Must match a given regex pattern** restriction when you are creating the metadata restrictions for your ruleset.

Rulesets support RE2 syntax. For more information, see Google's [syntax guide](https://github.com/google/re2/wiki/Syntax). To validate your expressions, you can use the validator on [regex101.com](https://regex101.com/), selecting the "Golang" flavor in the left sidebar.

By default, regular expressions in metadata restrictions do not consider multiple lines of text. For example, if you have a multiline commit message, the pattern `^ABC` will be a match if the first line of the message starts with `ABC`. To match multiple lines of the message, start your expression with `(?m)`.

The negative lookahead assertion, denoted `?!`, is not supported. However, for cases where you need to look for a given string that is not followed by another given string, you can use the positive lookahead assertion, denoted `?`, combined with the "Must not match a given regex pattern" requirement.

> [!NOTE]
> If you require contributors to sign off on commits, this may interfere with your regular expression patterns. When someone signs off, GitHub adds a string like `Signed-off-by: #AUTHOR-NAME <#AUTHOR-EMAIL>` to the commit message. For more information, see [Managing The Commit Signoff Policy For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization).

#### Useful regular expression patterns

The following examples provide useful patterns for commit metadata. To use these patterns, set **Requirement** to "Must match a given regex pattern".

##### Ensure branch names are compatible with Windows

You can use the following pattern to ensure that branch names only include numbers, lowercase letters, and the characters `-` and `_`. This ensures branch names are compatible with operating systems that do not use case-sensitive file systems by default.

```text copy
\A[0-9a-z-_]$
```

Matches: `my-branch`

Does not match: `myBranch`

##### Ensure tag names use semantic versioning

You can use the following pattern to ensure tag names conform to semantic versioning. For more information, see the documentation on [semver.org](https://semver.org/).

```text copy
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Matches: `1.2.3`, `10.20.30`, `1.1.2-prerelease+meta`

Does not match: `1.2`, `1.2-SNAPSHOT`

##### Limit length of lines in commit messages

The [Pro Git book](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines) recommends limiting the first line of a commit message to around 50 characters.

You can use the following pattern to ensure the first line in a commit message contains 50 characters or fewer.

```text copy
\A.{1,50}$
```

##### Ensure commit messages start with a resolution and issue number

You can use the following pattern to ensure that commit messages contain the word `Resolves:` or `Fixes:`, followed by a string like `#1234`.

```text copy
^(Resolves|Fixes): \#[0-9]+$
```

Matches: `Fixes: #1234`

Does not match: `Add conditional logic to foo.bar`

##### Enforce conventional commits

You can use the following pattern to ensure that commit messages conform to the Conventional Commits specification. For more information, see [conventionalcommits.org](https://www.conventionalcommits.org/).

```text copy
^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(\([\w\-\.]+\))?(!)?: ([\w ])+([\s\S]*)
```

Matches: `feat: allow provided config object to extend other configs`

Does not match: `Add conditional logic to foo.bar`




## Using ruleset enforcement statuses

While creating or editing your ruleset, you can use enforcement statuses to configure how your ruleset will be enforced.

You can select any of the following enforcement statuses for your ruleset.

   * **{% octicon "play" aria-hidden="true" aria-label="play" %} Active:** your ruleset will be enforced upon creation.
   * **{% octicon "meter" aria-hidden="true" aria-label="meter" %} Evaluate:** your ruleset will not be enforced, but you will be able to monitor which actions would or would not violate rules on the "Rule Insights" page.
   * **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled:** your ruleset will not be enforced or evaluated.



Using "Evaluate" mode is a great option for testing your ruleset without enforcing it. You can use the "Rule Insights" page to see if the contribution would have violated the rule.




## Creating a branch or tag ruleset

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**. Alternatively, to create a ruleset targeting tags, click **New tag ruleset**.

1. Under "Ruleset name," type a name for the ruleset.
1. Optionally, to change the default enforcement status, click **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} and select an enforcement status.


### Granting bypass permissions for your branch or tag ruleset

You can grant certain roles, teams, or apps bypass permissions  as well as the ability to approve bypass requests  for your ruleset. The following are eligible for bypass access:

* Repository admins, organization owners, and enterprise owners
* The maintain or write role, or custom repository roles based on the write role
* Teams, excluding secret teams. See [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams#team-visibility).
* Enterprise teams, enterprise apps, and enterprise roles (public preview)

* Deploy keys

* GitHub Apps
* Dependabot. For more information about Dependabot, see [Dependabot Quickstart](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart).

* Copilot cloud agent. For more information about Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent#limitations-in-copilot-cloud-agents-compatibility-with-other-features).


1. To grant bypass permissions for the ruleset, in the "Bypass list" section, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add bypass**.
1. In the "Add bypass" modal dialog that appears, search for the role, team, or app you would like to grant bypass permissions, then select the role, team, or app from the "Suggestions" section and click **Add Selected**.

1. Optionally, to grant bypass to an actor without allowing them to push directly to a repository, to the right of "Always allow," click {% octicon "kebab-horizontal" aria-label="View logs" %}, then click **For pull requests only**.

   The selected actor is now required to open a pull request to make changes to a repository, creating a clear trail of their changes in the pull request and audit log. The actor can then choose to bypass any branch protections and merge that pull request.


### Choosing which branches or tags to target

To target branches or tags, in the "Target branches" or "Target tags" section, select **Add a target**, then select how you want to include or exclude branches or tags. You can use `fnmatch` syntax to include or exclude branches or tags based on a pattern. For more information, see [Using `fnmatch` syntax](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).

You can add multiple targeting criteria to the same ruleset. For example, you could include the default branch, include any branches matching the pattern `*feature*`, and then specifically exclude a branch matching the pattern `not-a-feature`.


### Selecting branch or tag protections

In the "Branch protections" or "Tag protections" section, select the rules you want to include in the ruleset. When you select a rule, you may be able to enter additional settings for the rule. For more information on the rules, see [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

> [!NOTE]
> If you select **Require status checks before merging**, in the "Additional settings" section:
> * You can enter the name of each status check you would like to require. To finish adding the status check as a requirement, you must click {% octicon "plus" aria-label="Add selected status checks" %}.
> * If you select **Require branches to be up to date before merging**, you must define a check for the protection to take effect.


### Adding metadata restrictions

Your metadata restrictions should be intended to increase consistency between commits in your repository. They are not intended to replace security measures such as requiring code review via pull requests.

> [!NOTE]
> If you squash merge a branch, all commits on that branch must meet any metadata requirements for the base branch.
> 
> When using end-of-line anchors in regular expressions, use `\n?$` rather than `$` alone. The optional `\n?` matches a trailing newline that may be present in Git push/CLI flows, while still working for commits created via the web UI and API.


1. To add a rule to control commit metadata or branch names, in the "Restrictions" section when creating or editing a ruleset, click **Restrict commit metadata** or **Restrict branch names**.

1. Configure the settings for the restriction, then click **Add**. You can add multiple restrictions to the same ruleset.
1. To match a given regex pattern, in the "Requirement" dropdown, select **Must match a given regex pattern**.

   For most requirements, such as "Must start with a matching pattern," the pattern you enter is interpreted literally, and wildcards are not supported. For example, the `*` character only represents the literal `*` character.

   For more complex patterns, you can select "Must match a given regex pattern" or "Must not match a given regex pattern," then use regular expression syntax to define the matching pattern. For more information, see [About regular expressions for commit metadata](/enterprise-cloud@latest/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#using-regular-expressions-for-commit-metadata)" in the GitHub Enterprise Cloud documentation.

   Anyone who views the rulesets for a repository will be able to see the description you provide.

1. Optionally, before enacting your ruleset with metadata restrictions, select the "Evaluate" enforcement status for your ruleset to test the effects of any metadata restrictions without impacting contributors. For more information on metadata restrictions, see [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).


### Finalizing your branch or tag ruleset and next steps

To finish creating your ruleset, click **Create**. If the enforcement status of the ruleset is set to "Active", the ruleset takes effect immediately.


You can view insights for the ruleset to see how the rules are affecting your contributors. If the enforcement status is set to "Evaluate", you can see which actions would have passed or failed if the ruleset was active. For more information on insights for rulesets, see [Managing Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets).



## Creating a push ruleset

> [!NOTE]
> This ruleset will enforce push restrictions for a repository's entire fork network.


You can create a push ruleset for private or internal repositories.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New push ruleset**.

1. Under "Ruleset name," type a name for the ruleset.
1. Optionally, to change the default enforcement status, click **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} and select an enforcement status.


### Granting bypass permissions for your push ruleset

>[!NOTE] Bypass permissions for push rulesets in this repository will be inherited by the entire fork network for this repository. This means that the only users who can bypass this ruleset for any repository in this repository's entire fork network are the users who can bypass this ruleset in the root repository.


You can grant certain roles, teams, or apps bypass permissions  as well as the ability to approve bypass requests  for your ruleset. The following are eligible for bypass access:

* Repository admins, organization owners, and enterprise owners
* The maintain or write role, or custom repository roles based on the write role
* Teams, excluding secret teams. See [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams#team-visibility).
* Enterprise teams, enterprise apps, and enterprise roles (public preview)

* Deploy keys

* GitHub Apps
* Dependabot. For more information about Dependabot, see [Dependabot Quickstart](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart).

* Copilot cloud agent. For more information about Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent#limitations-in-copilot-cloud-agents-compatibility-with-other-features).


1. To grant bypass permissions for the ruleset, in the "Bypass list" section, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add bypass**.
1. In the "Add bypass" modal dialog that appears, search for the role, team, or app you would like to grant bypass permissions, then select the role, team, or app from the "Suggestions" section and click **Add Selected**.


### Selecting push protections

You can block pushes to this repository and this repository's entire fork network based on file extensions, file path lengths, file and folder paths, and file sizes.

Any push protections you configure will block pushes in this repository and throughout this repository's entire fork network.

1. Under "Push protections," click the restrictions you want to apply. Then fill in the details for the restrictions you select.

   For file path restrictions, you can use partial or full paths. You can use `fnmatch` syntax for this. For example, a restriction targeting `test/demo/**/*` prevents any pushes to files or folders in the `test/demo/` directory. A restriction targeting `test/docs/pushrules.md` prevents pushes specifically to the `pushrules.md` file in the `test/docs/` directory. For more information, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).



### Finalizing your push ruleset and next steps

To finish creating your ruleset, click **Create**. If the enforcement status of the ruleset is set to "Active", the ruleset takes effect immediately.


You can view insights for the ruleset to see how the rules are affecting your contributors. If the enforcement status is set to "Evaluate", you can see which actions would have passed or failed if the ruleset was active. For more information on insights for rulesets, see [Managing Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets).
