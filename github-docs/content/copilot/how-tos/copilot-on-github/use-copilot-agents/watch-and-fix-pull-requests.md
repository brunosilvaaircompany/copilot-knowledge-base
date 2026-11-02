# Getting pull requests ready to merge with Agent Merge

## About Agent Merge

Agent Merge is part of Copilot in the cloud. It watches a pull request for blockers you choose and starts work automatically when it finds one. You can allow Copilot to fix failed GitHub Actions workflows, resolve merge conflicts, or both.

Agent Merge helps get a pull request ready to merge and keep it there. It does not replace your review of the changes or the repository's merge requirements.

## Prerequisites and limitations

To use Agent Merge, you must have access to Copilot in the cloud through a paid Copilot plan. If your organization or enterprise provides your Copilot access, its policies must allow you to use Copilot in the cloud.

The repository's **Enable automations** Copilot policy must also be enabled.

Agent Merge does not support stacked pull requests or pull requests opened from a fork.

## Enabling Agent Merge for a pull request

1. On GitHub, open the pull request you want Copilot to watch.
1. In the merge box of the pull request, click **Watch and fix**.
1. Choose the actions you want Copilot to perform:

   * **Fix failed Actions workflows**: Allow Copilot to investigate and fix failing GitHub Actions workflows.
   * **Resolve merge conflicts**: Allow Copilot to resolve conflicts between the pull request's branch and its base branch.

When one of the blockers you selected appears, Copilot starts working in a cloud development environment to fix it.

## Following Agent Merge's work

As Copilot watches your pull request, you'll see updates in the Agent Merge section of the merge box.

When Copilot starts work, an update appears as a pull request timeline event. The update explains why it started, such as a failed workflow or a merge conflict.

Review the changes Copilot makes and check the workflow results before merging. Agent Merge does not remove the need for human review.

## Enabling Agent Merge automatically

You can enable Agent Merge by default for pull requests you create.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the sidebar, under **Copilot**, click **Cloud**.
1. Select **Enable Agent Merge automatically for pull requests I create**.
1. Use the **Fix failed Actions workflows** and **Resolve merge conflicts** switches to choose which actions Copilot can perform when Agent Merge is automatically enabled for your pull requests. You can enable either action or both.

## Disabling Agent Merge for a pull request

You can disable Agent Merge for a pull request if you enabled it or if you have write access to the repository.

1. On GitHub, open the pull request.
1. In the merge box at the bottom of the pull request, click **Unassign Copilot**.

## Using Agent Merge with auto-merge

Agent Merge fixes blockers, while auto-merge merges a pull request after all required reviews and status checks pass. Enabling Agent Merge does not enable auto-merge.

You can combine the two to let Copilot get the pull request ready and keep it ready, while GitHub merges it as soon as all requirements are met. For setup guidance, see [Automatically Merging A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/automatically-merging-a-pull-request).

## Customizing Agent Merge's environment

Although Agent Merge is part of Copilot in the cloud, its fixes run in an GitHub Actions-based development environment, not a cloud sandbox. It uses the same repository customizations as other Copilot tasks that run on GitHub Actions, including:

* Setup steps in `.github/workflows/copilot-setup-steps.yml`. See [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).
* Repository custom instructions. See [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
* Repository agent skills. See [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).

## Usage and billing

The AI credits used by Agent Merge are charged to the user who enables it for the pull request, not necessarily the pull request's author. For more information about usage and allowances, see [Billing And Usage](https://docs.github.com/en/copilot/concepts/billing-and-usage).
