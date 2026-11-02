# About GitHub Copilot Dreaming

> [!NOTE]
> Copilot Dreaming is in public preview and is subject to change.

Copilot Dreaming works in the background to keep Copilot's memories and repository guidance up to date. It analyzes eligible Copilot sessions and pull request review feedback to identify useful information, correct outdated guidance, and remove duplicate memories. For example, it can propose an update when your repository's instructions describe an obsolete test command.

Copilot Memory stores repository facts and personal preferences that Copilot can learn and reuse during normal interactions, even when Copilot Dreaming is off. Copilot Dreaming maintains these memories in the background to help keep them relevant and accurate. It updates context, not the underlying AI model. For more information about Copilot Memory, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory).

You do not need to keep a Copilot conversation open for Copilot Dreaming to run.

## What Dreaming can do

| Capability | Information it uses | Output |
| --- | --- | --- |
| Repository customization | Eligible repository sessions, code, memories, and guidance | Updated repository memories and proposed instruction or skill changes |
| Personal memory curation | Your eligible sessions and personal memories | Updated personal memories. No changes to personal instruction or skill files |
| Code review customization | Feedback on merged pull requests and current repository code | Guidance for future Copilot code reviews |

Repository customization can review tracked `.github/copilot-instructions.md`, `.github/instructions/**`, `.github/agents/**`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `REVIEW.md`, and `.github/skills/**` files. It does not necessarily change every file. Which instructions, skills, and memories Copilot uses depends on the Copilot feature.

## How changes are applied

* **Memories:** Copilot Dreaming adds, updates, and deletes memories automatically, without approval for each change.
* **Checked-in instructions and skills:** Copilot Dreaming proposes changes in a pull request. Files remain unchanged until you merge the pull request.
* **Code review guidance:** Copilot Dreaming updates internal code review guidance without a pull request. This guidance complements the checked-in instruction files that Copilot code review also uses.

AI-generated guidance can be incorrect. Review proposed file changes before merging. To review or delete memories, see [Data and controls](#data-and-controls). Not every run makes changes or opens a pull request.

You configure Copilot Dreaming on GitHub.com. To view individual run outputs in the Copilot app, see [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-copilot-dreaming-results-in-the-copilot-app).

## Availability and prerequisites

Copilot Dreaming is available for eligible paid Copilot plans. The initial preview requires access to GPT-6.1 Sol and is not available on Copilot Pro. It does not support GitHub Enterprise Cloud with data residency.

Each capability requires these settings:

| Capability | Memory setting | Dreaming setting | Session syncing | Other required settings |
| --- | --- | --- | --- | --- |
| Repository customization | Repository-level Memory is enabled | Enabled through organization policy or the personally owned repository's settings | Required | GPT-6.1 Sol allowed by policy |
| Personal memory curation | Personal Memory is enabled | Personal Dreaming permitted by managed policies, where applicable, and enabled for the user | Required | GPT-6.1 Sol allowed by policy |
| Code review customization | Repository-level Memory is enabled | Enabled through organization policy or the personally owned repository's settings | Not required | Copilot code review and its preview features enabled. GPT-6.1 Sol allowed by policy |

Code review customization does not currently support self-hosted runners.

All capabilities require an eligible Copilot subscription and permission under applicable enterprise and organization policies. See [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-dreaming).

> [!IMPORTANT]
> Before enabling Copilot Dreaming, complete the prerequisites shown in the table for the capabilities you want to use. If Dreaming is already enabled when you complete additional prerequisites, turn Copilot Dreaming off and on again using the setting that controls the affected personal memories or repositories. Completing the prerequisites alone does not activate additional capabilities.

Each Dreaming setting enables the capabilities whose prerequisites are met within its scope. For repositories, this can include both repository customization and code review customization. You cannot switch these capabilities on or off individually.

### Enabling session syncing

Session syncing saves local sessions to your GitHub account. It is enabled by default for Copilot CLI and the GitHub Copilot app, subject to organization and enterprise policies.

For users who get Copilot from an enterprise or organization, **Store local sessions in the Cloud**, under "Copilot CLI" in the enterprise or organization policy settings, must be set to at least **View from cloud**. If the policy is disabled or unconfigured, sessions remain local. For more information, see [About Remote Control](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-remote-control).

If you previously disabled syncing of your own Copilot CLI and GitHub Copilot app sessions by setting `remoteExport` to `false` in `~/.copilot/settings.json`, remove that setting to restore the default behavior, or set it to `true`. Syncing remains subject to feature availability and applicable enterprise or organization policies.

## Costs and usage

Copilot Dreaming model usage is billed in AI credits as part of your existing Copilot usage, not as a separate item for Copilot Dreaming. Cost depends on processing and the number of enabled users and repositories, including inactive repositories. For more information about billing for GitHub Copilot, see [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing) and [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing).

Every Copilot Dreaming run uses AI credits. This includes runs that make no changes or process inactive repositories. You should review repository coverage and billing controls before enabling Copilot Dreaming.

Administrators can monitor AI credits usage for their enterprise or organization. Total usage includes other features, and app attribution requires a detailed usage report rather than the **AI usage** view. See [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use#analyzing-ai-credits-usage).

Individual users can review their own usage in their personal Copilot settings. See [Monitor Ai Usage](https://docs.github.com/en/copilot/how-tos/manage-and-track-spending/monitor-ai-usage).

Before increasing the number of organizations in an enterprise for which Copilot Dreaming is enabled, make sure to configure spending controls for the relevant billing account. Alerts alone do not stop usage. A per-user budget may not cover repository-level app usage, and separate budgets for individual Copilot Dreaming app installations are not available. For more information, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

## Data and controls

Copilot Dreaming can use previously synced sessions, memories, repository content, and pull request review feedback. Each run may use only some of this information. Turning off session syncing does not delete sessions that have already been synced.

Instructions and skills proposed in pull requests are visible to people with access to the repository. Copilot Dreaming does not change who can access or manage personal memories. See [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory#user-level-preferences).

To stop future runs, disable Copilot Dreaming in the relevant enterprise, organization, personal, or repository settings. At enterprise level, select **Disabled everywhere**. Turning off personal Dreaming does not stop runs for organization-owned repositories. A run already in progress may continue.

Turning off Copilot Dreaming does not undo its changes, delete information it has created, close its pull requests, or restore deleted memories. You can manage existing changes separately:

* Review and delete personal memories in your personal settings. See [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#viewing-and-deleting-your-user-level-preferences).
* Review and delete repository memories in repository settings. See [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-and-deleting-repository-level-facts).
* Review, close, or merge pull requests containing proposed changes to instructions and skills.

Run details in the Copilot app are not a complete activity history and do not include an option to undo a run.

For more information, see [Session Data](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data).

## Further reading

* [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#enabling-copilot-dreaming-for-your-personal-account)
* [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-dreaming)
