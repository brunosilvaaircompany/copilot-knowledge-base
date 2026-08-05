# Managing a branch protection rule

## About branch protection rules

You can create a branch protection rule in a repository for a specific branch, all branches, or any branch that matches a name pattern you specify with `fnmatch` syntax. For example, to protect any branches containing the word `release`, you can create a branch rule for `*release*`.


You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. Because GitHub uses the `File::FNM_PATHNAME` flag for the `File.fnmatch` syntax, the `*` wildcard does not match directory separators (`/`). For example, `qa/*` will match all branches beginning with `qa/` and containing a single slash, but will not match `qa/foo/bar`. You can include any number of slashes after `qa` with `qa/**/*`, which would match, for example, `qa/foo/bar/foobar/hello-world`. You can also extend the `qa` string with `qa**/**/*` to make the rule more inclusive.

For more information about syntax options, see the [fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).


If a repository has multiple protected branch rules that affect the same branches, the rules that include a specific branch name have the highest priority. If there is more than one protected branch rule that references the same specific branch name, then the branch rule created first will have higher priority.

Protected branch rules that mention a special character, such as `*`, `?`, or `]`, are applied in the order they were created, so older rules with these characters have a higher priority.

To create an exception to an existing branch rule, you can create a new branch protection rule that is higher priority, such as a branch rule for a specific branch name.

For more information about each of the available branch protection settings, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

> [!NOTE]
> Only a single branch protection rule can apply at a time, which means it can be difficult to know how which rule will apply when multiple versions of a rule target the same branch. Additionally, you may want to create a single set of rules that applies to multiple repositories in an organization. For information about an alternative to branch protection rules, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Creating a branch protection rule

When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.

> [!NOTE]
> Actors may only be added to bypass lists when the repository belongs to an organization.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Branches**.

1. Next to "Branch protection rules", click **Add rule.**
1. Under "Branch name pattern", type the branch name or pattern you want to protect.

1. Optionally, enable required pull requests.
{% indented_data_reference reusables.pull_requests.security-changes-mergeability spaces=3 %}
   * Under "Protect matching branches", select **Require a pull request before merging**.
   * Optionally, to require approvals before a pull request can be merged, select **Require approvals**.

      Select the **Required number of approvals before merging** dropdown menu, then click the number of approving reviews you would like to require on the branch.
   * Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select **Dismiss stale pull request approvals when new commits are pushed**.
   * Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select **Require review from Code Owners**. Note that if code has multiple owners, an approval from _any_ of the code owners will be sufficient to meet this requirement. For more information, see [About Code Owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).
   * Optionally, to allow specific actors to push code to the branch without creating pull requests when they're required, select **Allow specified actors to bypass required pull requests**. Then, search for and select the actors who should be allowed to skip creating a pull request.
   * Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews**. Then, in the search field, search for and select the actors who are allowed to dismiss pull request reviews. For more information, see [Dismissing A Pull Request Review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).
   * Optionally, to require someone other than the last person to push to a branch to approve a pull request prior to merging, select **Require approval of the most recent reviewable push**. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging).
1. Optionally, enable required status checks. For more information, see [About Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).
   * Select **Require status checks to pass before merging**.
   * Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select **Require branches to be up to date before merging**.
   * In the search field, search for status checks, selecting the checks you want to require.
1. Optionally, select **Require conversation resolution before merging**.
1. Optionally, select **Require signed commits**.
1. Optionally, select **Require linear history**.
1. Optionally, to merge pull requests using a merge queue, select **Require merge queue**. 
For more information about merge queues, see [Managing A Merge Queue](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue).

1. Optionally, to choose which environments the changes must be successfully deployed to before merging, select **Require deployments to succeed before merging**, then select the environments.
1. Optionally, make the branch read-only.
   * Select **Lock branch**.
   * Optionally, to allow fork syncing, select **Allow fork syncing**.
1. Optionally, select **Do not allow bypassing the above settings**.
1. Optionally, in public repositories owned by a GitHub Free organization and in all repositories owned by an organization using GitHub Team or GitHub Enterprise Cloud, enable branch restrictions.
   * Select **Restrict who can push to matching branches**.
   * Optionally, to also restrict the creation of matching branches, select **Restrict pushes that create matching branches**.
   * In the search field, search for and select the people, teams, or apps who will have permission to push to the protected branch or create a matching branch.
1. Optionally, under "Rules applied to everyone including administrators", select **Allow force pushes**.

   Then, choose who can force push to the branch.
   * Select **Everyone** to allow everyone with at least write permissions to the repository to force push to the branch, including those with admin permissions.
   * Select **Specify who can force push** to allow only specific actors to force push to the branch. Then, search for and select those actors.

    For more information about force pushes, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#allow-force-pushes).
1. Optionally, select **Allow deletions**.
1. Click **Create**.

## Editing a branch protection rule

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Branches**.

1. To the right of the branch protection rule you want to edit, click **Edit**.
1. Make your desired changes to the branch protection rule.
1. Click **Save changes**.

## Deleting a branch protection rule

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Branches**.

1. To the right of the branch protection rule you want to delete, click **Delete**.
