# Dependabot pull requests

## Pull requests for security updates

If you've enabled security updates, pull requests for security updates are triggered by a Dependabot alert for a dependency on your default branch. Dependabot automatically raises a pull request to update the vulnerable dependency.

Each pull request contains everything you need to quickly and safely review and merge a proposed fix into your project. This includes information about the vulnerability like release notes, changelog entries, and commit details. Details of which vulnerability a pull request resolves are hidden from anyone who does not have access to Dependabot alerts for the repository.

When you merge a pull request that contains a security update, the corresponding Dependabot alert is marked as resolved for your repository. For more information about Dependabot pull requests, see [Manage Dependabot Prs](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/manage-dependabot-prs).

> [!NOTE]
> It's good practice to have automated tests and acceptance processes in place so that checks are carried out before the pull request is merged. This is particularly important if the suggested version to upgrade to contains additional functionality, or a change that breaks your project's code. For more information about continuous integration, see [Continuous Integration](https://docs.github.com/en/actions/get-started/continuous-integration).


### Customizing pull requests for security updates

You can customize how Dependabot raises pull requests for security updates, so that they best fit your project's security priorities and processes. For example:
* **Optimize Dependabot pull requests to prioritize meaningful updates** by grouping multiple updates into a single pull request.
* Apply custom labels to **integrate Dependabot's pull requests** into your existing workflows.

Similar to version updates, customization options for security updates are defined in the `dependabot.yml` file. If you have already customized the `dependabot.yml` for version updates, then many of the configuration options that you have defined could automatically apply to security updates, too. However, there are a couple of important points to note:
* Dependabot security updates are **always triggered by a security advisory**, rather than running according to the `schedule` you have set in the `dependabot.yml` for version updates.
* Dependabot raises pull requests for security updates against the **default branch only**. If your configuration sets a value for `target-branch`, then the customization for that package ecosystem will only apply to version updates by default.

For more information, see [Customizing Dependabot Security Prs](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/customizing-dependabot-security-prs).

## Pull requests for version updates

For version updates, you specify how often to check each ecosystem for new versions in the configuration file: daily, weekly, or monthly.

When you first enable version updates, you may have many dependencies that are outdated and some may be many versions behind the latest version. Dependabot checks for outdated dependencies as soon as it's enabled. You may see new pull requests for version updates within minutes of adding the configuration file, depending on the number of manifest files for which you configure updates. Dependabot will also run an update on subsequent changes to the configuration file.

To keep pull requests manageable and easy to review, Dependabot raises a maximum of five pull requests to start bringing dependencies up to the latest version. If you merge some of these first pull requests before the next scheduled update, remaining pull requests will be opened on the next update, up to that maximum. You can change the maximum number of open pull requests by setting the [`open-pull-requests-limit` configuration option](/code-security/reference/supply-chain-security/dependabot-options-reference#open-pull-requests-limit-).

To further reduce the number of pull requests you may be seeing, you can use the [`groups`](/code-security/reference/supply-chain-security/dependabot-options-reference#groups--) configuration option to group sets of dependencies together (per package ecosystem). Dependabot then raises a single pull request to update as many dependencies as possible in the group to the latest versions at the same time.
 For more information, see [Optimizing Pr Creation Version Updates](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates).

## Commands for Dependabot pull requests

Dependabot responds to simple commands in comments. Each pull request contains details of the commands you can use to process the pull request (for example: to merge, squash, reopen, close, or rebase the pull request) under the "Dependabot commands and options" section. The aim is to make it as easy as possible for you to triage these automatically generated pull requests. For more information, see [Dependabot Pull Request Comment Commands](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-pull-request-comment-commands).
