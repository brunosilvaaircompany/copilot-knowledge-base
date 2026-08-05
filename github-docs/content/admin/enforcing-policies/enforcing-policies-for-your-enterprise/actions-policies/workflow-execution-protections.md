# Workflow execution protections

> [!NOTE]
> Workflow execution protections are in public preview and subject to change.


## About workflow execution protections

Workflow execution protections let you define an allow list that controls who can trigger GitHub Actions workflows and which events are permitted to run them. Previously, a workflow ran based on the workflow file in the commit that triggered it, and an attacker with repository access could modify that file to run malicious code. Workflow execution protections close that gap. Administrators define the rules, and GitHub Actions evaluates them before a workflow runs, so an unauthorized actor or event never reaches execution.

Workflow execution protections are available at the enterprise, organization, and repository levels.

## Backed by rulesets

Workflow execution protections are built on the GitHub rulesets framework, so the targeting you already know from rulesets works here too. You can apply protections with rulesets and scope them to specific repositories using repository custom properties. This means you can enforce broad protections from one place rather than configuring each workflow file individually. For more information about rulesets, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

You can also use evaluate mode to run your rules without enforcing them. Evaluate mode shows you exactly what a rule would block before you enforce it, so you can roll out policies without breaking existing workflows.

## Available rules

Event and actor are the first two rules, and GitHub plans to add more rules over time.

* **Actor rules** control who can trigger workflows, including individual users, repository roles such as Read, Maintain, and Admin, GitHub Apps, Copilot, and Dependabot.
* **Event rules** control which events are permitted, such as `push`, `pull_request`, `pull_request_target`, and `workflow_dispatch`.

By default, every user with write access to a repository can trigger workflows. Actor rules let you separate who contributes code from who runs your CI, so you can grant a contributor write access without granting them the ability to execute workflows.

## Stop common attacker techniques

Workflow execution protections disrupt several real-world attack patterns:

* **Poisoned pipeline execution from pull requests.** Restrict or prohibit `pull_request_target`, including in public repositories where it is most often exploited.
* **Manual-trigger abuse.** Limit `workflow_dispatch` to maintainers so untrusted identities cannot start workflows.
* **Untrusted-actor execution.** Block low-trust identities from triggering workflows entirely.
* **Misconfiguration exploitation.** Apply central policy that overrides any single misconfigured workflow file.


## Configuring workflow execution protections

You configure workflow execution protections in the new **Policies** section of your GitHub Actions settings. This **Policies** section is separate from your existing **General** settings.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click **Policies**.
1. Create a ruleset, then add your event and actor rules.
1. Choose whether the ruleset is active or in evaluate mode, then save your changes.
