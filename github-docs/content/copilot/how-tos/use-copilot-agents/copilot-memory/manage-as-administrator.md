# Managing Copilot Memory for an enterprise, organization, or repository

Copilot Memory lets Copilot learn about your codebase and your personal preferences, helping Copilot agents work more effectively. For more information, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory).


## Enabling Copilot Memory

For enterprise-managed and organization-managed Copilot subscriptions, user-level preferences are off by default. An administrator must enable the Copilot Memory policy before members can use user-level preferences.

Once this policy is enabled, storage and use of user-level preferences is on by default for members who have not opted out. Members can still opt out individually. Enabling the policy does not clear an existing personal or local application opt-out.

Repository-level facts are controlled separately through repository access settings, which default to **All repositories** for an organization. An organization can allow user-level preferences without repository-level facts, or allow repository-level facts without user-level preferences, subject to enterprise restrictions. See [Managing Copilot Memory for repositories](#managing-copilot-memory-for-repositories).

> [!NOTE]
> If a user is assigned a Copilot subscription by more than one organization, the most restrictive user-memory policy applies. User-level preferences will not be used unless all of those organizations allow them.

For defaults by plan and surface, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory#default-settings).

Users on supported paid plans can opt out of user-level preferences in their personal Copilot settings. This affects only their sessions. It does not disable repository-level facts or change other users' sessions.

Local client settings, such as `/memory off` in Copilot CLI, can disable both types of memory for that client. See [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

### Enabling Copilot Memory for an enterprise

The procedure below sets the enterprise policy for **user-level preferences**—the memories about how individual members want Copilot to work with them. As an enterprise owner, you can allow or block these preferences across all organizations, or let organization owners decide. This is an enterprise-wide policy, not a change to an individual member's personal settings.

**Repository-level facts have separate access controls.** To disable both types of Copilot Memory for your enterprise, you need to disable user-level preferences and repository memory access. For repository-level controls, see [Managing Copilot Memory for repositories](#managing-copilot-memory-for-repositories).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.
1. Under "Features & clients", click **Configure features & clients**.

1. Scroll down to "Features", find the **Copilot Memory** setting and select a policy from the dropdown.

   * **Let organizations decide**: User-level preferences are off by default for all organizations in the enterprise. Organization owners can enable them for their organization if they choose.
   * **Enabled everywhere**: User-level preferences are enabled for all organizations in the enterprise and cannot be disabled at the organization level. Individual users can still opt out.
   * **Disabled everywhere**: User-level preferences are disabled for all organizations in the enterprise and cannot be enabled at the organization level.

### Enabling Copilot Memory for an organization

Organization owners can enable or disable Copilot Memory for storing and using user-level preferences, for all members of the organization with a Copilot license.

If the organization belongs to an enterprise, the ability for organization owners to enable or disable Copilot Memory may be controlled by the enterprise-level policy.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Policies**.
1. Under "Features", scroll down to the setting for **Copilot Memory**.
1. Click the dropdown button and select **Enabled**.

   User-level preferences are enabled for all members of the organization who have a Copilot license.

   Configure repository-level facts separately with the **Repository access** controls. See [Managing Copilot Memory for repositories from an organization's settings](#managing-copilot-memory-for-repositories-from-an-organizations-settings) later in this article.

## Enabling Copilot Dreaming

Copilot Dreaming is disabled by default. Enterprise owners and organization owners can control Copilot Dreaming for their organization-owned repositories, and whether users who receive Copilot access from their enterprise or organization can enable personal Dreaming. For more information, see [Copilot Dreaming](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming).

Allowing Copilot Dreaming through an enterprise or organization policy does not automatically enable personal Dreaming. Users must also enable Copilot Memory and Copilot Dreaming in their personal Copilot settings—see [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#enabling-copilot-dreaming-for-your-personal-account). Users cannot override an applicable managed policy that disables Copilot Dreaming.

> [!NOTE]
> Copilot Dreaming is in public preview and is subject to change.

### Enabling Copilot Dreaming for an enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.
1. Under "Features & clients", click **Configure features & clients**.

1. Find the "Memory" section.
1. Make sure the policy for Copilot Memory is set to either **Let organizations decide** or **Enabled everywhere**. Enabling Copilot Memory does not, by itself, enable Copilot Dreaming.
1. Set the policy for Copilot Dreaming:

   | Policy | Effect |
   | --- | --- |
   | **Let organizations decide** | Initially Copilot Dreaming is disabled for all organizations, but organization owners can enable, and then disable, Dreaming. |
   | **Enabled everywhere** | Within the Copilot Memory scope, organizations inherit an enabled policy and cannot disable it at the organization level. |
   | **Disabled everywhere** | Organizations cannot enable Copilot Dreaming. |

   For a pilot, select **Let organizations decide**, then configure only the intended organizations.

   Changing a policy from **Enabled everywhere** to **Let organizations decide** leaves Copilot Dreaming enabled for all organizations, but allows organization owners to disable it.

### Enabling Copilot Dreaming for an organization

If your organization belongs to an enterprise, the enterprise must select **Let organizations decide** before an organization owner can change its Copilot Dreaming policy. A locked setting indicates that the enterprise controls the policy.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Policies**.
1. Find the "Memory" section.
1. Review the **Repository access** setting before enabling Copilot Dreaming. When you enable Copilot Dreaming, it will be enabled for all of the repositories covered by the current repository access setting.
1. In the **Dreaming** dropdown, select **Enabled**.

   The **Enabled** option only applies to repositories in the Copilot Memory repository selection. Removing a repository from this selection disables both Copilot Memory and Copilot Dreaming for that repository.

## Viewing Copilot Dreaming results in the Copilot app

The settings on GitHub.com control whether Copilot Dreaming is enabled, but do not display individual run results for Dreaming. To see what a run produced, use the Copilot app.

Sign in with the GitHub.com account whose personal runs you want to view, or an account with access to the relevant repositories.

### Adding a repository to the Copilot app

Repository runs are displayed for repositories you have added to the Copilot app. If the repository is already listed in the sidebar, you can skip this procedure. You do not need to add a repository to view personal dream runs.

1. In the Copilot app sidebar, to the right of the "Sessions" heading, click the new session plus sign.
1. Click **Add GitHub repository**.
1. Search for the repository by its `OWNER/REPOSITORY` name, then select it from the search results.
1. Repeat for each repository whose runs you want to view.

### Opening a run and reviewing its output

1. In the app sidebar, click **Automations**.
1. Click the **Dreaming** tab.

   If this is not displayed, update your version of the Copilot.

1. Find your run under **Personal Dream runs** or **Repository Dream runs**.

   > [!NOTE]
   > Copilot Dreaming runs automatically on a schedule managed by GitHub. A run might not appear immediately after you enable Copilot Dreaming.

1. Click a run to open its details.
1. Review the details:

   * Review the run's status (for example, "Running", "Completed", or "Failed") and, when available, the short summary of the run. Check for any warnings or failure details.
   * For a memory curation run, review the available **Memory updates**, labeled **Added**, **Updated**, or **Removed**. Updated memories show **Before** and **After** text when available.
   * If the run includes a pull request link, open the pull request to review the proposed instruction or skill changes on GitHub.com.

1. To reload the list of runs, return to the **Dreaming** tab and click **Refresh runs**.

   **Refresh runs** reloads the list. It does not start runs. You can't start runs manually or edit their schedules, prompts, or the model used by Copilot Dreaming.

## Managing Copilot Memory retention

By default, repository-level facts and user-level preferences expire 90 days after they are created or last upvoted by Copilot. Simply retrieving a memory does not extend this period. Enterprise and organization owners can configure the retention period for repository-level facts to be between 7 and 180 days.

> [!NOTE]
> * The configurable retention period applies to repository-level facts only. User-level preferences always use the default retention period.
> * If both an organization and an enterprise set a retention period, the shorter of the two applies.
> * Changing the retention period does not re-date facts that are already stored. An existing fact only adopts the new period the next time Copilot reinforces it.

### Managing Copilot Memory retention for an enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.
1. Under "Features & clients", click **Configure features & clients**.

1. Scroll down to "Features" and find the **Copilot Memory** settings.
1. Edit the number of days in the **Copilot Memory retention** setting and click **Save**.

### Managing Copilot Memory retention for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Policies**.
1. Under "Features", scroll down to the **Copilot Memory** settings.
1. Edit the number of days in the **Copilot Memory retention** setting and click **Save retention period**.

## Managing user-level preferences

Enterprise and organization owners can manage user-level preferences for users whose Copilot seats are currently billed to their enterprise or organization. Users can also manage their own preferences. See [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

### Managing user-level preferences for an enterprise

As an administrator, you can export or delete all user-level preferences that were generated with your organization or enterprise as the active billing entity. For more information on the ownership model, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory#user-level-preferences).

#### Downloading user-level preferences for an enterprise

You can export user-level preferences in JSONL format. You can do this for everyone at once or for individual users.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. In the "Billing and licensing" sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
1. In the "Copilot" section, click **Manage**.

1. From here, you can export preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Export Copilot memories**.
   * For everyone: Click the **Get reports** dropdown near the top of the page, then click **Download user memories**.

     > [!NOTE]
     > You can also download all user-level preferences from the "Features & clients" page on the "AI Controls" tab (**AI Controls** > **Copilot** > **Configure features & clients**).

1. In the confirmation dialog, click **Download memories**. This confirms that you have permission to access the users' memories. The download starts when the export is ready.

Exports are reusable for up to two hours, so a repeated download may not reflect recent changes. Only the administrator who requested an export can check its status or download it. Another administrator cannot request the same bulk or per-user export while that reusable export exists. Creating new exports is limited to 10 per hour per enterprise, but reused exports don't count toward this limit.


#### Deleting user-level preferences for an enterprise

You can delete user-level preferences in bulk or for individual users.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. In the "Billing and licensing" sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
1. In the "Copilot" section, click **Manage**.

1. From here, you can delete preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Delete Copilot memories**.
   * For everyone: Click the **Get reports** dropdown near the top of the page, then click **Delete user memories**.

1. Review the users included in the confirmation dialog, then click **Delete memories**. Deletion is permanent and cannot be undone.

### Managing user-level preferences for an organization

As an organization owner, you can export or delete these users' preferences that were generated with your organization as the active billing entity. For more information on the ownership model, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory#user-level-preferences).

The owner of a user-level preference is set when the preference is created by Copilot Memory and it does not change afterwards. If a user's license moves to a different organization or enterprise, the preferences they generated previously remain associated with the account that owned them at the time.

> [!NOTE]
> Repository-level facts are not owned by a billing entity. They belong to the repository they were created in, and are managed there regardless of any change to an individual user's license.

#### Exporting user-level preferences for an organization

You can export user-level preferences in JSONL format. You can do this for everyone at once or for individual users.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Access**.
1. From here, you can export preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Export Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Download user memories**.

1. In the confirmation dialog, click **Download memories**. This confirms that you have permission to access the users' memories. The download starts when the export is ready.

Exports are reusable for up to two hours, so a repeated download may not reflect recent changes. Only the administrator who requested an export can check its status or download it. Another administrator cannot request the same bulk or per-user export while that reusable export exists. Creating new exports is limited to 10 per hour per organization, but reused exports don't count toward this limit.

#### Deleting user-level preferences for an organization

You can delete user-level preferences in bulk or for individual users.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Access**.
1. From here, you can delete preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Delete Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Delete user memories**.

1. Review the users included in the confirmation dialog, then click **Delete memories**. Deletion is permanent and cannot be undone.

## Managing Copilot Memory for repositories

Organization owners can manage access to Copilot Memory for selected, or all, repositories in the organization. Repository administrators can manage Copilot Memory for their repository.

### Managing Copilot Memory for repositories from an organization's settings

Organization owners can allow storage and use of repository-level facts for all, selected, or no repositories owned by the organization, subject to enterprise restrictions. The default repository access setting is **All repositories**. This control is independent of the policy for user-level preferences.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Policies**.
1. Under "Features", scroll down to the setting for **Copilot Memory**.

1. Click the dropdown button for "Repository access" and choose one of the options:

   * **No repositories**: Repository-level facts are not stored or used for any repositories owned by this organization.
   * **All repositories**: Repository-level facts are stored and used for all repositories owned by this organization.
   * **Selected repositories**: Repository-level facts are only stored and used for the repositories you select.

1. If you chose **Selected repositories**, click the button beside "Selected repositories" and choose the repositories for which you want to enable repository-level facts.

### Managing Copilot Memory from a repository's settings

Repository administrators can manage Copilot Memory for their repository.

#### Disabling Copilot Memory for the repository

As a repository administrator, you can turn off Copilot Memory for your repository.

When you disable Copilot Memory for a repository, Copilot stops creating and applying repository-level facts in that repository. Facts that were already stored are no longer used, but are not deleted by disabling the setting.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click Copilot, then click **Memory**.
1. Click the **Allow Copilot to store and retrieve repository facts** switch to change it from **On** to **Off**.

> [!NOTE]
> Disabling Copilot Memory for a repository does not affect user-level preferences. Preferences describe how an individual likes to work rather than anything about a particular codebase, so they follow the user and still apply in that repository. If you need to prevent user-level preferences entirely, disable Copilot Memory at the organization or enterprise level instead.

#### Viewing and deleting repository-level facts

To view or delete repository-level facts in the repository's settings, you must have write access to the repository and user-level preferences enabled for your account, including permission from any applicable enterprise or organization policy. This requirement applies to the settings page. Whether agents can use repository-level facts is controlled separately by repository access settings and applicable client settings.

You can review the stored facts and delete any that are inappropriate, misleading, or incorrect. Only repository administrators can change the repository's Copilot Memory setting.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click Copilot, then click **Memory**.
1. To delete a memory, click **{% octicon "trash" aria-label="Delete memory" %}** next to it. To delete several memories at once, select their checkboxes, then click **Delete**.

## Auditing Copilot Memory

Memory lifecycle entries are added to your organization or enterprise's audit log when a memory is created or deleted.

Administrator exports also generate audit log entries when they are requested, completed, and downloaded. Changes to Copilot Memory settings and repository access can also appear in the audit log.

Audit log entries record that an event happened, along with metadata such as who performed the action and when. They never contain the content of a memory, its citations, or the reason it was created or deleted.

To find when repository memories were created and which user initiated the activity, search for `action:copilot.memory_created repo:ORG/REPO`. Replace `ORG/REPO` with the repository's owner and name.

Retrieving a memory, voting on it, or its automatic expiry does not create a memory lifecycle audit event.

### Viewing audit log entries for an enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Enter one of the following in the search field.

   * `action:copilot.memory` for user-level activity
   * `action:org.copilot_memory` for organization-owner-level activity
   * `action:business.copilot_memory` for enterprise-owner-level activity

   The available audit types are displayed in a dropdown.

1. Select an audit type from the dropdown then press <kbd>Enter</kbd> to display audit logs for that type of activity.

### Viewing audit log entries for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Archive" section of the sidebar, click **{% octicon "log" aria-hidden="true" aria-label="log" %} Logs**, then click **Audit log**.

1. Enter one of the following in the search field.

   * `action:copilot.memory` for user-level activity
   * `action:org.copilot_memory` for organization-owner-level activity

   The available audit types are displayed in a dropdown.

1. Select an audit type from the dropdown then press <kbd>Enter</kbd> to display audit logs for that type of activity.

## Further reading

* [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory)
* [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself)
