# About GitHub Copilot Memory

> [!NOTE] This feature is currently in public preview and is subject to change.

As a developer joining an existing codebase, you typically read the repository's README, coding conventions, and other documentation to understand how the project works and how to contribute. This helps you submit good quality pull requests from the start. Even so, the quality of your work steadily improves as you spend more time in the codebase and learn its nuances. In the same way, allowing Copilot to build its own understanding of your repository enables it to become increasingly effective over time.

## Types of memories

Copilot can use Copilot Memory to store important facts about a repository and your personal preferences.

Copilot Memory stores:

* **Repository-level facts**
  * Facts about a repository, such as coding conventions, architectural decisions, build commands, and project-specific rules.
  * Available to all users with access to Copilot Memory for that repository.
* **User-level preferences**
  * Implied or stated personal preferences about how a user wants to interact with Copilot.
  * Available only to that user's Copilot interactions across repositories.
  * For Copilot Business and Copilot Enterprise plans, they can be viewed and deleted by an organization or enterprise administrator.

We typically refer to these repository-level facts and user-level preferences as "memories," and they are only created in response to Copilot activity initiated by users who have Copilot Memory enabled.

## Feature availability

Copilot Memory is currently used by Copilot cloud agent, Copilot code review, and Copilot CLI.

Facts and preferences captured by one Copilot feature can be used by another. For example, if Copilot cloud agent discovers how your repository handles database connections, Copilot code review can later apply that knowledge to spot inconsistent patterns in a pull request. Similarly, if Copilot code review learns that certain settings must stay synchronized across two files, Copilot cloud agent will know to update both files when changing one.

A few feature-specific limits apply:

* Copilot CLI applies repository-level facts and the user-level preferences of the user who initiated the operation.
* Copilot code review uses repository-level facts only. User-level preferences are not applied during code review.

## Benefits of using Copilot Memory

Stateless AI doesn't retain an understanding of a codebase between interactions. This forces you to either repeatedly explain coding conventions and code-specific details in your prompts, or maintain detailed custom instructions files.

Copilot Memory:

* Reduces the burden of repeatedly providing the same details in your prompts.
* Reduces the need for regular, manual maintenance of custom instruction files.

By capturing and applying repository-level facts and user-level preferences, Copilot builds its own knowledge of your codebases and personal workflow, adapts to your coding requirements, and delivers more value over time.

## How Copilot Memory stores, retains, and uses information

### Repository-level facts

Repository-level facts are stored with citations pointing to the code that supports them. When Copilot finds a fact relevant to its current work, it checks those citations against the current branch to confirm the information is still accurate. Only validated facts are used.

Copilot only creates repository-level facts in response to actions by users with write access to the repository who have Copilot Memory enabled. Once stored, those facts are available to any user who has access to Copilot Memory in that repository, but those facts can only be used in operations on the same repository. This keeps what Copilot learns about a repository scoped to that repository, preserving privacy and security.

Repository owners can review and manually delete the repository-level facts stored for their repository.

### User-level preferences

User-level preferences are stored with citations that may include direct user quotes. When Copilot finds a preference relevant to its current work, it uses its best judgment to confirm the preference still applies.

Copilot only creates user-level preferences in response to interactions initiated by a specific user, and those preferences are only available in that same user's later interactions. They capture an individual's coding style and workflow patterns, and stay tied to the user who created them.

Users can view and delete their own user-level preferences regardless of their Copilot plan.

#### Copilot Business and Copilot Enterprise plans

On Copilot Business and Copilot Enterprise plans, user-level preferences can also be exported or deleted by an organization or enterprise administrator, either in bulk or per user.

Preferences are owned by the billing entity, which is the organization or enterprise that grants the user their license. When a memory is created, it is stored against the active billing entity for the user's current usage. Then, when Copilot creates context for an agent session, it looks at the user's current active billing entity again and only retrieves memories that are owned by that billing entity. Users can view all their stored preferences and corresponding owners in their [personal settings](https://github.com/settings/copilot/memory?ref_product=copilot&ref_type=engagement&ref_style=text).

Users who have multiple licenses from different places must select a default billing entity in their [account settings](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text) in order to generate user-level preferences.

### Retention and validation

To prevent stale information from lingering, any stored fact or preference that goes unused is automatically deleted after 28 days. The 28-day timer may reset whenever Copilot successfully validates and uses an entry.

Facts can also be captured from pull requests that were closed without merging. In those cases, the validation step ensures that Copilot's behavior is unaffected unless the current codebase still substantiates the information.

## Enabling Copilot Memory

Copilot Memory is enabled per user, not per repository. Once enabled, it applies in any repository where that user works with GitHub Copilot. For individual plans, it's on by default. For enterprise- and organization-managed plans, an administrator must enable the policy first, and then individual users can opt out.

For more information, see [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself) or [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).
