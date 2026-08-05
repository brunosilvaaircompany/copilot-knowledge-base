# Managing Copilot Memory for your personal account

> [!NOTE] This feature is currently in public preview and is subject to change.

Copilot Memory lets Copilot learn about your codebase and your personal preferences, helping Copilot agents work more effectively. For more information, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory).


Copilot Memory is enabled for your account by default if:

* You are on a paid, individual Copilot plan.
* Your plan is managed by an enterprise or organization that has allowed you to use Copilot Memory.

In either case, you can disable or re-enable Copilot Memory at any time in your personal Copilot settings.

## Disabling or enabling Copilot Memory

When enabled, Copilot Memory will be used in any repository in which you use a supported Copilot feature. Both repository-level facts and user-level preferences will be saved.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. Under "Features", scroll down to the setting for **Copilot Memory**.
1. Click the dropdown button and select **Enabled** or **Disabled**.

## Selecting a default billing entity

If you receive Copilot access through multiple enterprises or organizations, you **must** select a default billing entity in order to generate user-level preferences with Copilot Memory. The billing entity determines which account "owns" (can manage and delete) preferences that are generated for your account. Do this in your [account settings](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text).

## Viewing and deleting repository-level facts

As an owner of a repository in which Copilot Memory is in use, you can review the currently stored repository-level facts. If you think any are inappropriate, misleading, or incorrect, you can delete them.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click Copilot, then click **Memory**.
1. You will see a list of repository-level facts, which you can delete as needed.


## Viewing and deleting your user-level preferences

Copilot Memory stores preferences for your personal use of Copilot.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. In the sidebar, under **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, click **Memory**.
1. You will see a list of your user-level preferences, which you can delete as needed.

## Further reading

* [Manage As Administrator](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator)
