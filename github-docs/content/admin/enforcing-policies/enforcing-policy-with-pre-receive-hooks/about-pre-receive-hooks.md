# About pre-receive hooks

## About pre-receive hooks

When a push occurs, each script runs in an isolated environment and can perform checks on the content of the push. The scripts will cause the push to be accepted if the exit status is 0, or rejected if the exit status is non-zero.

Use pre-receive hooks to satisfy business rules, enforce regulatory compliance, and prevent certain common mistakes.

Examples of how you can use pre-receive hooks:

* Require commit messages to follow a specific pattern or format, such as including a valid ticket number or being over a certain length.
* Lock a branch or repository by rejecting all pushes.
* Prevent sensitive data from being added to the repository by blocking keywords, patterns or file types.
* Prevent a PR author from merging their own changes.

You can see examples of pre-receive hooks for GitHub Enterprise Server in the [`github/platform-samples` repository](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).


## Impact on performance and workflows

Impact to developers and their workflows can be significant and must be considered carefully. Pre-receive hooks that are based on business needs and implemented thoughtfully will provide the most benefit to the organization as a whole.

Pre-receive hooks can have unintended effects on the performance of your GitHub Enterprise Server instance and should be carefully implemented and reviewed.

Due to risk of failure and performance impact for all users of your instance, we recommend the following.

* Avoid API requests within a pre-receive hook. In particular, we strongly discourage that you make requests to external services, which may take longer and can compound performance impact.
* Avoid long-running Git operations within a pre-receive hook. If your pre-receive hook performs Git operations within large or busy repositories, your instance's Git and overall performance may be negatively impacted.

> [!NOTE]
> To avoid rejection of a push due to a timeout, all combined pre-receive hooks should run in under five seconds.

## Pre-receive hook timeouts

Pre-receive hooks in GitHub Enterprise Server have a fixed timeout budget of 5 seconds (shared across all hooks). This is intentional design to prevent resource exhaustion from long-running hooks and to prevent runaway scripts from blocking repository operations indefinitely.

All pre-receive hooks for a repository share a **cumulative timeout budget**:
- If hook A takes 3 seconds, hook B gets 2 seconds remaining (from 5 second default)
- If hook A times out at 5 seconds, hook B never executes

> [!IMPORTANT]
> Pre-receive hook timeouts are handled differently from exit codes:
> - **Exit codes**: Enforcement configuration is honored (non-enforced hooks don't block pushes)
> - **Timeouts**: Push may fail regardless of enforcement configuration

### Timeout behavior

Scenario | Enforcement = Enabled | Enforcement = Disabled/Testing
----------|----------------------|--------------------------------
Exit code ≠ 0 | Push rejected | Push continues (warning only)
Timeout exceeded | Push rejected | Warning + push may still fail

## Choosing between push rules and pre-receive hooks
You can use push rules and pre-receive hooks to control what changes users can push to your repository. Both help you enforce policies, but they work in different ways and are designed for different use cases.

Push rules are a built-in way to enforce common policies across repositories. You can use them to block pushes that don’t meet specific conditions, such as updates to specific files and paths, file size, or file type.
You can manage push rules through the UI or API. As they are a type of repository rulesets, push rules support audit logs, and can be used with evaluate mode to preview changes or bypassed when needed.

Use push rules if you want to easily:

* Enforce standard policies without writing scripts.
* Apply policies consistently across organizations and repositories.
* Manage rules through GitHub's UI and APIs.
* Use GitHub native features like audit logging, bypass lists and rule insights.
