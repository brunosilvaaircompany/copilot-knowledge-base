# Managing and standardizing pull requests

If you maintain a repository, you can use GitHub features to make pull requests more consistent and easier to review. Standardization helps contributors know what information to provide, helps reviewers focus on the right changes, and helps protect important branches from accidental or risky merges.

## Using pull request templates

Pull request templates help contributors provide the context your project needs for review. A template can prompt authors to explain the purpose of the change, link related issues, include testing notes, or complete a checklist before requesting review.

Templates are useful when many contributors open pull requests or when your project has review expectations that should be visible every time. See [Creating A Pull Request Template For Your Repository](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository), [About Tasklists](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists), and [Linking A Pull Request To An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue).

## Defining code owners

Code owners identify the people or teams responsible for specific files or directories. When a pull request changes owned code, GitHub can automatically request a review from the right owners.

Code owners help route reviews to people with the right context. They are especially useful for sensitive areas such as security files, deployment configuration, or shared libraries. See [About Code Owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

## Using protected branches

Protected branches help keep important branches, such as `main`, stable. They can require conditions such as passing status checks, signed commits, or approving reviews before a pull request can merge.

Use protected branches when a branch represents production code, a release line, or another important source of truth. See [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

## Using rulesets

Rulesets let you enforce repository policies across branches and tags. They can require status checks, workflows, pull request reviews, or other conditions before changes are accepted.

Rulesets are useful when you want consistent rules across multiple branches or when you want to combine review requirements with automated security checks, such as dependency review or code scanning merge protection. See [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets), [Enforce Dependency Review](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/enforce-dependency-review), and [Set Merge Protection](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/set-merge-protection).

## Using push rulesets

With push rulesets, you can block pushes to a private or internal repository and that repository's entire fork network based on file extensions, file path lengths, file and folder paths, and file sizes.

Push rules do not require any branch targeting because they apply to every push to the repository.

Push rulesets allow you to:

* **Restrict file paths:** Prevent commits that include changes in specified file paths from being pushed.

  You can use `fnmatch` syntax for this. For example, a restriction targeting `test/demo/**/*` prevents any pushes to files or folders in the `test/demo/` directory. A restriction targeting `test/docs/pushrules.md` prevents pushes specifically to the `pushrules.md` file in the `test/docs/` directory. For more information, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).

* **Restrict file path length:** Prevent commits that include file paths that exceed a specified character limit from being pushed.
* **Restrict file extensions:** Prevent commits that include files with specified file extensions from being pushed.
* **Restrict file size:** Prevent commits that exceed a specified file size limit from being pushed.

### About push rulesets for forked repositories

Push rules apply to the entire fork network for a repository, ensuring every entry point to the repository is protected. For example, if you fork a repository that has push rulesets enabled, the same push rulesets will also apply to your forked repository.

For a forked repository, the only people who have bypass permissions for a push rule are the people who have bypass permissions in the root repository.



Push rulesets help block risky content before it enters the repository. See [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets).

## Using automated tools to review code styling

Automated tools, such as linters and formatters, help keep code style consistent across pull requests. They can catch small issues automatically so reviewers can focus on design, correctness, and maintainability.

You can run these tools as part of a continuous integration workflow with GitHub Actions. See [Continuous Integration](https://docs.github.com/en/actions/get-started/continuous-integration).
