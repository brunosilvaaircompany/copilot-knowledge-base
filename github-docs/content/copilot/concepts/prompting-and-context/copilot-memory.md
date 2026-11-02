# About GitHub Copilot Memory

Any developer starting work on an existing codebase will typically read the repository's README, coding conventions, and other documentation to understand how the project works and how to contribute. This helps them submit good quality pull requests from the start. As they work on the project, the quality of their work will then typically improve, as they become more familiar with the codebase and learn its nuances. In the same way, Copilot Memory allows Copilot to build its own understanding of a repository, and the way you like to work, enabling it to become increasingly effective over time.

## Types of memories

Copilot can store two types of memory:

* **Repository-level facts** describe a codebase and are shared with your collaborators.
* **User-level preferences** describe how you personally like to work and follow you between repositories. They can include how you want responses presented, actions that require your approval, and workflows you want Copilot to follow across projects.

|  | Repository-level facts | User-level preferences |
| --- | --- | --- |
| **What they capture** | Facts about a repository, such as coding conventions, architectural decisions, build and test commands, and project-specific rules. | Your clearly stated, non-sensitive preferences, approval requirements, and reusable workflows that apply across your projects. |
| **Who can see them** | Users with read access to the repository who can use Copilot Memory. Viewing memories in the repository's settings requires write access and user-level preferences enabled for your account. | You, and anyone who can view a shared agent session in which the preference appears. On Copilot Business and Copilot Enterprise plans, an organization or enterprise administrator can also view and export them. |
| **Where they apply** | Only in operations on the same repository. | In your Copilot interactions across all your repositories. |
| **Who can create them** | Users with write access to the repository who have Copilot Memory enabled. | Only you, from your own interactions. |
| **Who can delete them** | Users with write access to the repository who have user-level preferences enabled for their account. See [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-and-deleting-repository-level-facts). | You. On Copilot Business and Copilot Enterprise plans, an organization or enterprise administrator can also delete them. |
| **How they are cited** | With citations pointing to the code that supports the fact. | With citations that may include direct quotes of what you said. |

For example, "this repository uses Vitest for unit tests" is a fact about the codebase that is useful to everyone working in it, so it is stored as a repository-level fact. "Explain your changes before you apply them" is a statement about how you personally want Copilot to behave, so it is stored as a user-level preference and applies wherever you work.

Memories are only created when the applicable settings allow that type of memory.

## Where Copilot Memory is available

Copilot Memory is available on all paid Copilot plans. Whether it is used depends on your plan's settings, repository access, and the surface you use.

Copilot Memory can be used by Copilot in:

* GitHub Copilot app
* Copilot CLI
* Copilot code review
* Copilot cloud agent
* Agentic Autofix
* Copilot in GitHub Mobile
* Copilot in Slack
* Copilot in Microsoft Teams

Facts and preferences captured by one Copilot surface can be used by another Copilot surface. For example, if Copilot cloud agent discovers how your repository handles database connections, Copilot code review can later apply that knowledge to spot inconsistent patterns in a pull request. Similarly, if Copilot code review learns that certain settings must stay synchronized across two files, Copilot cloud agent will know to update both files when changing one.

> [!NOTE]
> Availability in the GitHub Copilot app depends on whether Copilot Memory has been made available for your account. There is no setting in the app to turn on this availability. Where available, personal settings, repository settings, and applicable policies determine which types of memory can be used.
>
> The **Memory** setting for a project in the GitHub Copilot app is a separate feature. It stores preferences for that project across tasks, not the shared repository facts and user-level preferences described in this article. Editing or turning off a project's memory does not edit or turn off Copilot Memory.

## How storage and ownership differ between memory types

The two types of memory are stored separately, and are owned and managed differently.

### Repository-level facts

Each repository-level fact belongs to one specific repository, and can be viewed and deleted in the repository's settings. When Copilot finds a repository-level fact relevant to its current work, it checks the fact's citations against the current branch to judge whether the information is still accurate. Because this is a judgment Copilot makes, rather than a guarantee enforced by the system, a stored fact should not be relied on as a rule that will always be followed. To provide instructions consistently, use custom instructions instead. See [Using custom instructions alongside Copilot Memory](#using-custom-instructions-alongside-copilot-memory).

Repository facts are not pooled across an organization's repositories. Forking a repository does not copy its stored memories to the fork. Your user-level preferences can still apply when you work in the fork.

### User-level preferences

User-level preferences are stored in your user settings. When Copilot finds a preference relevant to its current work, it uses its best judgment to confirm the preference still applies.

#### Copilot Business and Copilot Enterprise plans

On Copilot Business and Copilot Enterprise plans, user-level preferences are owned by the billing entity, which is the organization or enterprise that grants the user their license. When a preference is created, it is stored against the active billing entity for the user's current usage. Then, when Copilot creates context for an agent session, it looks at the user's current active billing entity again and only retrieves preferences that are owned by that billing entity. Users can review their stored user-level preferences, and the owner of each displayed preference, in their [personal settings](https://github.com/settings/copilot/memory?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=memory-doc-memory-settings&utm_medium=docs&utm_campaign=universe-2026).

Users who have multiple licenses from different places must select a default billing entity in their [account settings](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=memory-doc-account-settings&utm_medium=docs&utm_campaign=universe-2026) in order to create new repository-level facts or user-level preferences.

Organization and enterprise owners can export or delete user-level preferences for their members, either in bulk or per user. See [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).

## How memories are created

Copilot creates memories itself, as a byproduct of working with you. As Copilot works, it notices durable facts about a repository, and details of your own personal preferences, that it determines are worth keeping, and it stores these for later use.

You can review the user-level preferences that Copilot has stored for you, and delete any that you don't want Copilot to use. If you have write access to a repository and user-level preferences enabled for your account, you can also review and delete repository-level facts in the repository's settings. You cannot directly create or edit an individual memory in the settings on GitHub.com, but you can influence Copilot to create memories. If you clearly state a personal preference, or fact about a repository—or explicitly ask Copilot to remember something—it is likely to be captured as a memory. You can also use Copilot CLI to import prepared memories in bulk. See [Importing memories with Copilot CLI](/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories#importing-memories-with-copilot-cli). When Copilot creates a memory as a result of something you said, your words are recorded as the citation for the memory.

Copilot chooses whether a memory is a repository-level fact or a user-level preference. It bases that choice on who the memory applies to, rather than on who stated it. Something that would be true for anyone working in the repository becomes a repository-level fact, while something that reflects your own way of working becomes a user-level preference. If your intent is ambiguous, Copilot asks you to clarify the scope rather than guessing. You can avoid ambiguity by explicitly stating whether the memory is for you or for everyone working in the repository.

The type of memory Copilot can create depends on the context. Repository-level facts are only created when Copilot is working in a repository you have write access to, and user-level preferences are only created when Copilot can identify you as the person it is working with.

## Data stored for each memory

Each memory contains data that Copilot requires to determine whether, when, and how to use that memory. Some of this data—for example, the voting details—is for internal use only and is therefore not displayed on the GitHub website or included in audit logs. The following table shows a selection of the data stored for each memory, and indicates which of the fields are displayed in the settings pages on GitHub.com.

| Data | Example | Displayed |
| ---- | ------- | --------- |
| Memory text | `The payments module must never call Stripe directly — route all charges through BillingGateway.` | {% octicon "check" aria-label="Yes" %} |
| Subject area | `architecture` | {% octicon "check" aria-label="Yes" %} |
| Agent | `Copilot cloud agent` | {% octicon "check" aria-label="Yes" %} |
| Model | `claude-sonnet-4` | {% octicon "check" aria-label="Yes" %} |
| Billing entity | `Acme Org` |  {% octicon "check" aria-label="Yes" %} |
| Citations | — | {% octicon "x" aria-label="No" %} |
| Reason for storing | — | {% octicon "x" aria-label="No" %} |
| Repository fact or user preference | — | {% octicon "x" aria-label="No" %} |
| Voting data | — | {% octicon "x" aria-label="No" %} |
| Expiry datetime | — | {% octicon "x" aria-label="No" %} |

> [!NOTE]
> * Data examples have been omitted for fields that are not displayed.
> * Model and billing entity are not always present, so may not be displayed.
> * If the billing entity is an organization, the building icon (🏢) is displayed in the user interface. If it is an enterprise, the globe icon (🌐) is displayed.

## How memories are reinforced and retired

Copilot does not treat a memory as permanently true once it has been stored. Instead, Copilot is instructed to check the citations provided with each memory before using it. Copilot uses an internal voting system to rate the usefulness of each memory, based on whether the memory is still valid. It can upvote a memory that it's able to validate, and downvote a memory if it's found to be wrong or outdated. This reinforces useful memories.

Not all memories from the memory store are sent to a model with your prompt. Upvoted memories are more likely to be sent. So upvoting makes a memory more likely to be applied in future work. Memories that are downvoted past a threshold are no longer used and will be deleted after a period of disuse.

Upvoting and downvoting are carried out automatically by Copilot. Although you can influence Copilot to upvote or downvote a memory—by providing a positive or negative comment about the use of that memory in a session—this is something you can leave to Copilot to manage. The vote count for a memory is intentionally not displayed, but you can see the effect of voting in the order in which memories are listed in the relevant settings page. Upvoted memories rise up the list, while downvoted memories move down.

The settings pages show memories ranked by usefulness. Memories that Copilot has learned not to use are hidden from the list, but can remain stored until they expire. A memory disappearing from the list does not necessarily mean it has been deleted.

If Copilot has used a memory that you don't want it to use again, you should explicitly delete it from the repository settings (for a repository fact) or your personal settings (for a user-level preference). See [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

### Retention and expiry

To prevent stale information from lingering, stored repository facts and user preferences expire after a period without reinforcement. The expiry period starts when a memory is created and resets when Copilot upvotes it. Simply retrieving a memory does not reset this period.

The default expiry period is 90 days. Enterprise and organization owners can configure the expiry period for repository-level facts to any value between 7 and 180 days (inclusive). This setting does not apply to user-level preferences, which always use the default retention period. Changing the retention period does not re-date repository-level facts that are already stored: they adopt the new retention period the next time Copilot reinforces them.

If different expiry periods are set by an organization and by the enterprise to which the organization belongs, the lower of the two values is used.

When Copilot upvotes a memory, the expiry period for that memory is reset to the default, or configured, expiry period. This extends the life of a memory that has been used. Downvoting a memory does not alter the period remaining before that memory expires.

> [!NOTE]
> Repository facts can be captured from pull requests that were closed without merging. Copilot is instructed to check these facts against the current codebase, but this does not guarantee that it will recognize every outdated fact.

## What Copilot does not store

The system prevents some content from being stored, and Copilot is instructed not to store other content:

* Memories are checked for secrets, such as tokens, keys, or credentials. Memories in which a secret is detected are rejected and are not stored.
* The system can reject memories that contain recognized model-control tokens, as a defense against prompt injection.
* Copilot is instructed not to store sensitive personal information, confidential information, or anything shared in confidence.
* Copilot is instructed not to store short-lived or task-specific instructions, because memories are intended to capture things that stay true over time.


## Default settings

User-level preferences and repository-level facts have separate defaults. The following defaults apply where Copilot Memory is available and you or an administrator have not changed the relevant settings. Existing opt-outs remain in effect.

| Plan | Default for user-level preferences |
| --- | --- |
| Copilot Pro, Copilot Pro+, and Copilot Max | Enabled. You can opt out in your [personal settings](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#disabling-or-enabling-copilot-memory). |
| Copilot Business and Copilot Enterprise | Disabled until an [organization owner](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-memory-for-an-organization) or [enterprise owner](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-memory-for-an-enterprise) enables the policy. You can then opt out in your [personal settings](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#disabling-or-enabling-copilot-memory). |

**Repository-level facts have a separate default for all of these plans.** Repository memory access is allowed unless enterprise, organization, or repository settings restrict it. An organization's **Repository access** setting defaults to **All repositories**. Disabling user-level preferences in your personal settings does not disable repository-level facts. See [Managing Copilot Memory for repositories](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories).

### Settings for each surface

Some surfaces have an additional local setting. Turning it on allows the surface to use Copilot Memory only if the settings described above also allow it.

| Surface | Default | More information |
| --- | --- | --- |
| Copilot CLI, interactive sessions | Local setting on. Follows your GitHub settings. | [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-github-copilot-cli) |
| Copilot CLI, programmatic sessions | Off. Use `--enable-memory` for each run. | [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-github-copilot-cli) |
| Visual Studio Code | Off. Enable the local setting. | [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-visual-studio-code) |
| GitHub Copilot app | Follows your GitHub settings, where available for your account. | [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-the-github-copilot-app) |
| Copilot cloud agent | Follows your GitHub settings. | [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#disabling-or-enabling-copilot-memory) and [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories) |
| Copilot code review | Follows repository settings. | [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories) |
| Agentic Autofix | Follows repository settings. | [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories) |

All of these surfaces support repository-level facts. All except Copilot code review and agentic autofix also support user-level preferences. In Copilot CLI, user preferences belong to the user who started the session.

In the Copilot app, and Copilot CLI interactive sessions, Copilot can ask you to approve storing a memory. Copilot cloud agent and Copilot code review do not ask for this approval.

The Copilot cloud agent behavior described here also applies to its sessions started from Slack, or Microsoft Teams. See [Integrate Cloud Agent With Slack](https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack) and [Integrate Cloud Agent With Teams](https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams).

Copilot code review and agentic autofix never apply user-level preferences, so a personal preference will not change how your pull requests are reviewed or security alerts are fixed.

In Copilot CLI, only the root agent can use `store_memory` or `vote_memory`. Subagents can read memories when they have access to `read_memories`, but they cannot change them.

> [!NOTE]
> Applications built with the Copilot SDK can enable Copilot Memory when creating or resuming a session. The SDK does not provide APIs to list, edit, or delete memories. See [Compatibility](https://docs.github.com/en/copilot/how-tos/copilot-sdk/troubleshooting/compatibility).

## What determines whether Copilot Memory is used

User-level preferences and repository-level facts have separate controls. Whether Copilot Memory is used depends on the settings for the relevant type of memory and the client you are using:

1. **Your personal setting.** The Copilot Memory setting in your personal account controls whether user-level preferences can be stored and used in your sessions. It does not control repository-level facts or override administrator restrictions. See [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

   On enterprise- and organization-managed plans, user-level preferences are off until an administrator enables them, after which you can opt out.

1. **Your enterprise or organization policy.** On managed plans, the Copilot Memory policy controls user-level preferences. If you hold licenses from more than one organization, the most restrictive policy applies. Repository access is controlled separately. See [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).
1. **Repository access and settings.** An organization owner can allow repository-level facts for all, selected, or no repositories, subject to enterprise restrictions. A repository administrator can also turn off repository-level facts for an individual repository.

   > [!NOTE]
   > Turning off repository-level facts does not turn off user-level preferences. Similarly, disabling user-level preferences does not by itself disable repository-level facts.

1. **Your client setting.** In an interactive Copilot CLI session, `/memory off` disables both types of memory, even if the other settings allow them. This preference is independent of your setting on GitHub.com and is saved for future interactive sessions on that machine. `/memory on` clears this preference, but cannot override applicable enterprise, organization, or repository restrictions. Non-interactive runs require the separate `--enable-memory` option. Visual Studio Code also has its own setting within the application. See [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

### Summary of when Copilot Memory is used

To use Copilot Memory:

* You must have a supported paid Copilot plan.
* The client you are using must support Copilot Memory, and any local setting must allow it. In Copilot CLI, use `/memory show` to check the local setting.
* If you have multiple Copilot licenses, you must select a default billing entity before new memories can be stored.

For user-level preferences, your personal Copilot Memory setting and any applicable enterprise or organization policy must also allow them.

For repository-level facts:

* You must have access to the repository.
* You must have push permission to the repository for new repository facts to be created.
* Copilot Memory must **not** be disabled for the repository in the repository's Copilot settings.
* If the repository is owned by an organization, the organization's Copilot Memory repository access must include that repository.
* Any applicable enterprise restriction on repository memory access must allow it.

## Usage and billing

Memories included in a model's context count toward token usage and can affect the AI credits consumed by an interaction. The cost depends on the model and the number of tokens used. For more information, see [Models And Pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing).

## Using custom instructions alongside Copilot Memory

Copilot Memory and custom instructions solve similar problems in different ways, and they work well together.

Copilot Memory is built and curated by Copilot. It requires no maintenance from you, it adapts as your codebase and your habits change, and it discards what stops being relevant. Copilot decides what to remember, judges whether a memory still applies, and may not apply a memory in every session.

Custom instructions are written and maintained by you. They provide instructions for Copilot to consider and are visible in your repository or your personal settings, so you can see and review exactly what Copilot has been told.

Use custom instructions to state important rules, such as a security requirement or a mandatory review step, and let Copilot Memory handle the accumulated detail that would otherwise make an instructions file long and hard to maintain. Neither memories nor custom instructions guarantee that Copilot will follow a rule every time, so review its work. For more information, see [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization).

## Further reading

* [Create Memories](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories)
* [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself)
* [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator)
