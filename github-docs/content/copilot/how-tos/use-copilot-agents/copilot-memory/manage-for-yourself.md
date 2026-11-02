# Managing Copilot Memory for your personal account

Copilot Memory lets Copilot learn about your codebase and your personal preferences, helping Copilot agents work more effectively. For more information, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory).


Your personal setting controls whether Copilot can store and use user-level preferences in your sessions. Repository-level facts have separate controls.

On Copilot Business and Copilot Enterprise plans, an administrator must allow user-level preferences before you can use them. Enabling the policy does not undo a choice you previously made to disable user-level preferences. For more information, see [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).

Settings in individual applications can further restrict Copilot Memory, but cannot override your GitHub settings or policies.

This article covers reviewing and deleting the memories that Copilot has already stored. For guidance on getting a specific fact or preference remembered in the first place, see [Create Memories](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories).

## Disabling or enabling Copilot Memory

The Copilot Memory setting in your personal account controls user-level preferences in your own Copilot sessions. It does not control repository-level facts or change other users' sessions.

The dropdown shows your saved setting. Enterprise or organization policies can still prevent you from using user-level preferences. For repository-level controls, see [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories).

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. Under "Features", scroll down to the setting for **Copilot Memory**.
1. Click the dropdown button and choose whether to enable or disable user-level preferences.

Disabling user-level preferences does not disable repository-level facts or delete stored memories. If you want to delete your user-level preferences, review and delete them before turning them off.

### Copilot Memory in GitHub Copilot CLI

In interactive sessions, the CLI's local Copilot Memory setting is on by default, so it follows your GitHub settings and policies. Use `/memory off` to disable both types of memory in the CLI, or `/memory on` to remove that local opt-out. The choice takes effect in the current session and is saved for future interactive sessions on that machine. Changing your personal setting on GitHub.com does not clear a CLI opt-out. You can also disable Copilot Memory in your Copilot CLI user settings with `"memory": false`. The CLI setting cannot override applicable enterprise, organization, or repository restrictions.

To check the CLI setting, enter `/memory` or `/memory show`. The command displays the client setting and a link to manage your stored memories on GitHub. An enabled status does not mean that your account or repository policies allow both types of memory.

In non-interactive runs, such as `copilot -p "YOUR PROMPT"`, Copilot Memory is disabled by default, even if it is enabled for interactive sessions. Add `--enable-memory` to enable it for that run. This option takes precedence over a saved `"memory": false` setting, but account, repository, and tool-permission restrictions still apply. It does not change your saved setting.

> [!NOTE]
> Turning off Copilot Memory in the CLI stops further storage and retrieval, but memories already supplied to an existing conversation can remain in its context. To continue without that earlier context, turn memory off and start a new session.

### Copilot Memory in Visual Studio Code

For Copilot sessions that run in its **Local Agent Host**, Visual Studio Code has its own Copilot Memory setting. It is off by default, even when your GitHub settings allow memory. These sessions can use repository-level facts and user-level preferences when the applicable settings allow them.

1. Open **Settings** in Visual Studio Code.
1. Search for `chat.copilot.memory.enabled`.
1. Select the checkbox to enable Copilot Memory, or clear it to disable the feature in Visual Studio Code.

Enabling this setting does not override your GitHub settings or policies. On Copilot Business and Copilot Enterprise plans, an [organization owner](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-memory-for-an-organization) or [enterprise owner](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-memory-for-an-enterprise) must also allow user-level preferences. Repository-level facts follow the separate [repository access controls](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories).

This setting does not affect VS Code's memory tool for local memory files. See [Use memory with agents in VS Code](https://code.visualstudio.com/docs/agents/run/memory) in the VS Code documentation.

### Copilot Memory in the GitHub Copilot app

Copilot Memory must be available for your account in the app. The app does not provide a separate toggle to make it available or a screen for managing these shared memories.

Where are the settings for Copilot Memory:

* **User-level preferences** — as an individual users, you can enable or disable Copilot Memory in your personal settings on GitHub.com. See [Disabling or enabling Copilot memory](#disabling-or-enabling-copilot-memory). On Copilot Business and Copilot Enterprise plans, an organization owner or enterprise owner must first allow you to enable Copilot Memory. See [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).
* **Repository-level facts** — the repository's settings and applicable repository access policies must allow these. If access is blocked by a policy, ask the relevant administrator to check the [repository controls](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories).

The **Memory** setting in a project's settings controls a separate set of preferences that the project remembers across tasks. You can edit those preferences there, but this does not change your shared Copilot Memory facts or preferences. Use the personal or repository settings on GitHub.com to view and delete those.

## Selecting a default billing entity

If you receive Copilot access through multiple enterprises or organizations, you **must** select a default billing entity in order to create new repository-level facts or user-level preferences with Copilot Memory. The billing entity determines which account "owns" (can manage and delete) user-level preferences that are generated for your account. Do this in your [account settings](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=manage-memory-individual-settings&utm_medium=docs&utm_campaign=universe-2026).

Until you select a default, Copilot cannot create new memories for you, and will tell you to choose one.

The owner of a user-level preference is set when the preference is created by Copilot Memory and it does not change afterwards. If you later move to a different license, the preferences you have already generated stay with the organization or enterprise that owned them, and Copilot will no longer retrieve them for you. Existing repository-level facts remain associated with their repository and are not restricted to your active billing entity.

## Viewing and deleting your user-level preferences

Copilot Memory stores preferences for your personal use of Copilot.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. In the sidebar, under **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, click **Memory**.
1. To delete a memory, click **{% octicon "trash" aria-label="Delete memory" %}** next to it. To delete several memories at once, select their checkboxes, then click **Delete**.

Memories are ranked by usefulness. Memories that Copilot has learned not to use are hidden from the list, but can remain stored until they expire.

> [!NOTE]
> If you have write access to a repository and user-level preferences enabled for your account, you can also view and delete repository-level facts in the repository's settings. See [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-and-deleting-repository-level-facts).

## Enabling Copilot Dreaming for your personal account

Copilot Dreaming for personal memories, and for your personally owned repositories, is disabled by default. You can enable Copilot Dreaming in your personal Copilot settings.

If you get access to Copilot through an organization or enterprise, your ability to enable Copilot Dreaming may be limited by policies set by the organization or enterprise. For more information, see [Copilot Dreaming](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming).

> [!NOTE]
> Copilot Dreaming is in public preview and is subject to change.

### Enabling Copilot Dreaming for your personal memories

1. In the upper-right corner of GitHub.com, click your profile picture, then click **Settings**.
1. In the sidebar, under "Code, planning, and automation",
 click **Copilot** then click **Features**.
1. Under **Features**, locate **Copilot Memory**.
1. Make sure Copilot Memory is enabled. If Copilot Memory is disabled, the personal Copilot Dreaming setting is hidden.
1. In the **Dreaming** dropdown, select **Enabled**.

This setting controls Copilot Dreaming for your personal memories only. It does not enable Copilot Dreaming for repositories you own.  If an organization or enterprise provides your Copilot access, you can select **Disabled** to opt out when Copilot Dreaming is permitted. You cannot override a policy that disables Dreaming in any organization or enterprise that provides you with Copilot access, even if you also have an individual subscription.

To review the results, see [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-copilot-dreaming-results-in-the-copilot-app).

### Enabling Copilot Dreaming for a personally owned repository

These steps apply if you have an eligible individual Copilot subscription and do not receive Copilot access from an organization or enterprise. You must have administrator access to the repository. You cannot enable Copilot Dreaming for an archived repository.

Organization and enterprise policies control Copilot Dreaming for organization-owned repositories. See [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-dreaming).

1. On GitHub.com, open the personally owned repository where you want to enable Copilot Dreaming.
1. Under the repository name, click **Settings**.
1. In the sidebar, under "Code, planning, and automation",
 click **Copilot**, then **Memory**.

   Make sure **Allow Copilot to store and retrieve repository facts** is enabled.

1. In the sidebar, click Dreaming.
1. Enable **Dreaming**.
1. Repeat for each of your personally owned repositories where you want to enable Copilot Dreaming.

## Further reading

* [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory)
* [Create Memories](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories)
* [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator)
