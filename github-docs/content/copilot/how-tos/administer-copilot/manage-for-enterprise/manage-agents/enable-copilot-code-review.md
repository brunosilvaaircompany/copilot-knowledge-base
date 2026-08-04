# Enabling GitHub Copilot code review in your enterprise

GitHub Copilot can review pull requests in your enterprise. This can save time for human reviewers by detecting bugs or vulnerabilities and enforcing consistent coding standards.

## Enabling Copilot code review for your Copilot subscribers

The policy for Copilot code review allows your licensed users to request reviews from Copilot and use Copilot to generate pull request summaries.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. Scroll down to "Available Agents", then click **Copilot code review**.
1. Next to "Copilot code review", select a policy.

### Next steps

* If you selected **Enabled everywhere**, tell organization owners that these features are enabled for all members.
* If you selected **Let organizations decide**, discuss member enablement with organization owners.


## Configuring automatic code review

To apply standards consistently, you can configure Copilot code review to run automatically on all pull requests opened across your enterprise or in specific repositories.

1. Create an enterprise-level branch ruleset. See [Enforcing Policies For Code Governance](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance).
1. Target the organizations and repositories where Copilot code review should run automatically. You may want to start with a small selection of repositories and run a trial to collect feedback.
1. Enable the **Automatically request Copilot code review** policy.
1. Optionally, enable the additional settings. By reviewing on every push and reviewing draft pull requests, you will add consistency to the review process. However, you will also create more noise for developers. If you're running a pilot, consider starting with the basic setting to allow developers to get used to the new process first.
1. Click **Create**.

## Customizing reviews

Encourage organization and repository administrators to create custom instructions for Copilot code review so that reviews will be tailored to your coding standards and conventions. See [Customize Code Review](https://docs.github.com/en/copilot/tutorials/customize-code-review).
