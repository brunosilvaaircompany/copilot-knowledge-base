# About Actions policies

## About Actions policies

Actions policies let you govern how GitHub Actions workflows run. You can configure them in the **Policies** section of your GitHub Actions settings (separate from the **General** settings).

Actions policies are available at the enterprise, organization, and repository levels. They currently contain one type of policy: workflow execution protections. GitHub plans to add more policies over time.

## About workflow execution protections

With workflow execution protections, you can define an allowlist that controls who can trigger GitHub Actions workflows and which events are permitted to run them.
 These protections can disrupt several real-world attack patterns:

* **Poisoned pipeline execution from pull requests.** Restrict or prohibit `pull_request_target`, including in public repositories where it is most often exploited.
* **Manual-trigger abuse.** Limit `workflow_dispatch` so untrusted identities cannot start workflows.
* **Untrusted-actor execution.** Block low-trust identities from triggering workflows entirely.
* **Misconfiguration exploitation.** Apply central policy that overrides any single misconfigured workflow file.

When enforced, disallowed workflow runs will fail with an error. For example:

``` text
Event 'workflow_dispatch' is not allowed to trigger Actions workflows. Workflow file: '.github/workflows/0-welcome.yml'.
```





> [!NOTE] GitHub has added a default policy that will block the `pull_request_target` event in public repositories. This policy will be enforced on November 2, 2026. See [Securely Using Pull_Request_Target](https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target#default-policy-for-pull_request_target).






### Available rules

* **Actor rules** control who can trigger workflows, including individual users, repository roles, GitHub Apps, Copilot, and Dependabot. By default, every user with write access to a repository can trigger workflows. Actor rules let you separate who contributes code from who runs your CI, so you can grant a contributor write access without granting them the ability to execute workflows.
* **Event rules** control which events are permitted, such as `push`, `pull_request`, `pull_request_target`, and `workflow_dispatch`.

GitHub plans to add more rules over time.

## Next steps

To configure workflow execution protections, see [Control Workflow Execution](https://docs.github.com/en/actions/how-tos/administer/control-workflow-execution).

To manage policies programmatically, see [Policies](https://docs.github.com/en/rest/actions/policies).
