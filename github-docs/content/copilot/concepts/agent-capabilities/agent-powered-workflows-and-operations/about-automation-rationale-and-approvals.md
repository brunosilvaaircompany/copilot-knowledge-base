# About rationale, confidence, and approvals for issues

> [!NOTE]
> Rationale, confidence, and approvals for automations are in public preview and subject to change.

Automations run an agent to triage issues for you, applying labels, setting types and fields, assigning issues, and closing them, without a person initiating each change. Rationale, confidence, and approvals give you visibility into that automated work and control over when it applies.

This capability is not specific to any one platform. It works the same whether the agent runs through Copilot cloud agent automations, [GitHub Agentic Workflows](https://gh.io/gh-aw), or the REST and GraphQL APIs.

This capability applies only to the changes an automation makes to **issues**. It does not apply to changes people make by hand, and it does not affect other actions an automation can take, such as opening pull requests or pushing code.

Rationale, confidence, and approvals cover changes an automation makes to the following issue attributes: **labels, fields, issue type, closing issues, and assignees**.

## Rationale

Every supported action records the reason behind it, whether the automation applied the change automatically or proposed it as a suggestion. This gives you an audit trail of what changed and why. When a change is waiting for review, you see the reason on the suggestion before you decide.

You can also view the rationale on the issue for changes that took effect, whether they were applied automatically or suggested and then approved. An action with a recorded rationale will have {% octicon "info" aria-label="the info icon" %} next to it. Select the icon to reveal the automation's reasoning for that change.

## Confidence

For each supported action, the automation rates its confidence as high, medium, or low. Your repository has an **automation level** that sets the confidence threshold: changes rated below it are held as suggestions, and changes at or above it apply automatically.

* **Full control**: Every change is held for review. Nothing is applied automatically.
* **Cautious** (default): Only high-confidence changes are applied automatically. Everything else is held for your review.
* **Balanced**: Routine, clear-cut changes are applied automatically. Anything with ambiguity is held for review.
* **Full automation**: Every change is applied automatically. The agent only holds a change back if it's flagged as uncertain.

Because lower-confidence actions are the ones held back, you spend time only on the changes most likely to need a second look.

## Approvals

Whether a change applies directly or waits for your review depends on two things:

* **Your repository's automation level.** Changes rated below the threshold are always held as suggestions, no matter what you prompted the automation to do.
* **An explicit request to suggest.** You can also prompt the automation to suggest a change rather than apply it, and it waits for your review even if its confidence is high.

Suggestions appear in a panel on the issue. From the panel you can:

* **Accept** or **decline** each suggestion individually.
* **Accept all** or **decline all** to act on multiple suggestions at once.

A small team moving quickly might choose **Full automation**, while a busy public repository can choose **Cautious** or **Full control** to hold more changes for review where the stakes are higher.

> [!NOTE]
> Approvals are a workflow convenience, not a security control. They don't enforce a server-side boundary, so an agent with permission to change issues can apply changes directly instead of proposing them, including through the REST and GraphQL APIs. Use repository and agent permissions, not approvals, to control what an automation is allowed to do.

## Next steps

To learn how to configure your repository's automation level and manage suggestions, see [Manage Rationale Confidence Approvals](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/manage-rationale-confidence-approvals).
