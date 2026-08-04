# Enforcing code governance in your enterprise with rulesets

## Introduction

You can create rulesets to control how users can interact with code in repositories across your enterprise. You can:

* Create a **branch or tag ruleset** to control things like who can push commits to a certain branch, how commits must be formatted, or who can delete or rename a tag.
* Create a **push ruleset** to block pushes to a private or internal repository and the repository's entire fork network. Push rulesets allow you to block pushes based on file extensions, file path lengths, file and folder paths, and file sizes.


To learn more, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Importing rulesets

To import a prebuilt ruleset created by GitHub, see [`github/ruleset-recipes`](https://github.com/github/ruleset-recipes).

You can import an existing ruleset using a JSON file. This can be useful if you want to apply the same ruleset to multiple repositories or organizations.
 For more information, see [Managing Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#using-ruleset-history).

## How will I define where my ruleset applies?

Rulesets allow you to flexibly target the organizations, repositories, and branches where you want rules to apply.

* To target **organizations**, you can select all, choose from a list, define a dynamic pattern for organization names using `fnmatch` syntax, or use organization custom properties to dynamically target organizations based on metadata. For syntax details, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax). For information on custom properties, see [Custom Properties](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/custom-properties).

* Within those organizations, you can target all **repositories**, or target a dynamic list by custom property or deployment context.
* Within the repositories, you can target certain **branches or tags**: all branches, the default branch, or a dynamic list using `fnmatch` syntax.

## How can I control the format of commits?

In branch or tag rulesets, you can add a rule that restricts the format of commit metadata such as commit message or author email.

If you select **Must match a given regex pattern restriction**, you can use regular expression syntax to define patterns that the metadata must or must not match. For syntax details and examples, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-regular-expressions-for-commit-metadata).

## Using ruleset enforcement statuses

While creating or editing your ruleset, you can use enforcement statuses to configure how your ruleset will be enforced.

You can select any of the following enforcement statuses for your ruleset.

   * **{% octicon "play" aria-hidden="true" aria-label="play" %} Active:** your ruleset will be enforced upon creation.
   * **{% octicon "meter" aria-hidden="true" aria-label="meter" %} Evaluate:** your ruleset will not be enforced, but you will be able to monitor which actions would or would not violate rules on the "Rule Insights" page.
   * **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled:** your ruleset will not be enforced or evaluated.



Using "Evaluate" mode is a great option for testing your ruleset without enforcing it. You can use the "Rule Insights" page to see if the contribution would have violated the rule.




## Creating a branch or tag ruleset


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "Policies", click **Code**.
1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**. Alternatively, to create a ruleset targeting tags, click **New tag ruleset**.

1. Under "Ruleset name," type a name for the ruleset.
1. Optionally, to change the default enforcement status, click **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} and select an enforcement status.


### Granting bypass permissions for your branch or tag ruleset

You can grant certain roles, teams, or apps bypass permissions as well as the ability to approve bypass requests for your ruleset.

The following are eligible for bypass access:
* Enterprise teams, enterprise apps, and enterprise roles (public preview)
* Repository admins, organization owners, and enterprise owners
* The maintain or write role, or deploy keys.

* Copilot cloud agent. For more information about Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent#limitations-in-copilot-cloud-agents-compatibility-with-other-features).


1. To grant bypass permissions for the ruleset, in the "Bypass list" section, click **Add bypass**.

1. In the "Add bypass" modal dialog that appears, search for the role, team, or app you would like to grant bypass permissions, then select the role, team, or app from the "Suggestions" section and click Add Selected.

1. Optionally, to grant bypass to an actor without allowing them to push directly to a repository, to the right of "Always allow," click {% octicon "kebab-horizontal" aria-label="View logs" %}, then click **For pull requests only**.

   The selected actor is now required to open a pull request to make changes to a repository, creating a clear trail of their changes in the pull request and audit log. The actor can then choose to bypass any branch protections and merge that pull request.


### Choosing which organizations to target in your enterprise

Select all organizations, choose a selection of existing organizations, or set a dynamic list by name. If you use Enterprise Managed Users, you can also choose to target all repositories owned by users in your enterprise.

If you set a dynamic list, you'll add one or more naming patterns using `fnmatch` syntax. For example, the string `*open-source` would match any organization with a name that ends with `open-source`. For syntax details, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).

### Choosing which repositories to target in your enterprise

Within the selected organizations, you can target all repositories or target a dynamic list based on a filter:

* You can filter by custom property. See [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

* If your organization has added records to the linked artifacts page, you can target repositories that are **deployable** (have an active storage record) or **deployed** (have an active deployment record). See [Linked Artifacts](https://docs.github.com/en/code-security/concepts/supply-chain-security/linked-artifacts).



### Choosing which branches or tags to target

To target branches or tags, in the "Target branches" or "Target tags" section, select **Add a target**, then select how you want to include or exclude branches or tags. You can use `fnmatch` syntax to include or exclude branches or tags based on a pattern. For more information, see [Using `fnmatch` syntax](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).

You can add multiple targeting criteria to the same ruleset. For example, you could include the default branch, include any branches matching the pattern `*feature*`, and then specifically exclude a branch matching the pattern `not-a-feature`.


### Selecting branch or tag protections

In the "Branch protections" or "Tag protections" section, select the rules you want to include in the ruleset. When you select a rule, you may be able to enter additional settings for the rule. For more information on the rules, see [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

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


You can create a push ruleset for private or internal repositories in your enterprise.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. In the left sidebar, in the "Policies" section, click **Code**.
1. Click **New ruleset**.
1. Click **New push ruleset**.
1. Under "Ruleset name," type a name for the ruleset.
1. Optionally, to change the default enforcement status, click **Disabled** and select an enforcement status. For more information about enforcement statuses, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)

### Granting bypass permissions for your push ruleset

>[!NOTE] Bypass permissions for push rulesets that target a repository will be inherited by the entire fork network for this repository. This means that the only users who can bypass this ruleset for any repository in this repository's entire fork network are the users who can bypass this ruleset in the root repository.


You can grant certain roles, teams, or apps bypass permissions as well as the ability to approve bypass requests for your ruleset. The following are eligible for bypass access:

* Enterprise teams, enterprise apps, and enterprise roles (public preview)
* Repository admins, organization owners, and enterprise owners
* The maintain or write role, or deploy keys

* Copilot cloud agent. For more information about Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent#limitations-in-copilot-cloud-agents-compatibility-with-other-features).


1. To grant bypass permissions for the ruleset, in the "Bypass list" section, click **Add bypass**.
1. In the "Add bypass" modal dialog that appears, search for the role, team, or app you would like to grant bypass permissions, then select the role, team, or app from the "Suggestions" section and click Add Selected.

### Choosing which organizations to target in your enterprise

Select all organizations, choose a selection of existing organizations, or set a dynamic list by name. If you use Enterprise Managed Users, you can also choose to target all repositories owned by users in your enterprise.

If you set a dynamic list, you'll add one or more naming patterns using `fnmatch` syntax. For example, the string `*open-source` would match any organization with a name that ends with `open-source`. For syntax details, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).

### Choosing which repositories to target in your enterprise

Within your chosen organizations, you can target all repositories, or target a dynamic list using custom properties. See [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

### Selecting push protections

You can block pushes to this repository and this repository's entire fork network based on file extensions, file path lengths, file and folder paths, and file sizes.

Any push protections you configure will block pushes in this repository and throughout this repository's entire fork network.

1. Under "Push protections," click the restrictions you want to apply. Then fill in the details for the restrictions you select.

   For file path restrictions, you can use partial or full paths. You can use `fnmatch` syntax for this. For example, a restriction targeting `test/demo/**/*` prevents any pushes to files or folders in the `test/demo/` directory. A restriction targeting `test/docs/pushrules.md` prevents pushes specifically to the `pushrules.md` file in the `test/docs/` directory. For more information, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).



### Finalizing your push ruleset and next steps

To finish creating your ruleset, click **Create**. If the enforcement status of the ruleset is set to "Active", the ruleset takes effect immediately.


You can view insights for the ruleset to see how the rules are affecting your contributors. If the enforcement status is set to "Evaluate", you can see which actions would have passed or failed if the ruleset was active. For more information on insights for rulesets, see [Managing Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets).
