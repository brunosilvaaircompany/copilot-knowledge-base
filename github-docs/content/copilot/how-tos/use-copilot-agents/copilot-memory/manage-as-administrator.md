# Managing Copilot Memory for an organization or enterprise

> [!NOTE] This feature is currently in public preview and is subject to change.

Copilot Memory lets Copilot learn about your codebase and your personal preferences, helping Copilot agents work more effectively. For more information, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory).


## Enabling Copilot Memory

For enterprise- and organization-managed Copilot subscriptions, Copilot Memory is off by default and must be enabled in the enterprise or organization settings.

Once Copilot Memory is enabled, the feature is on for users by default. Copilot Memory will be used in any repository in which users use supported Copilot features, and it will save both repository-level facts and user-level preferences. Individual users can opt out of Copilot Memory in their account settings.

> [!NOTE]
> If a user is assigned a Copilot subscription by more than one organization, the most restrictive setting applies—that is, Copilot Memory will not be used unless all of those organizations have enabled this feature.

### Enabling Copilot Memory for an enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.
1. Under "Features", scroll down to the **Copilot Memory** setting and select a policy from the dropdown.

### Enabling Copilot Memory for an organization

Organization owners can enable or disable Copilot Memory for all members of the organization with a Copilot license.

If the organization belongs to an enterprise, the ability for organization owners to enable or disable Copilot Memory may be controlled by the enterprise-level policy.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Policies**.
1. Under "Features", scroll down to the setting for **Copilot Memory**.
1. Click the dropdown button and select **Enabled**.

   Copilot Memory is enabled for all members of the organization who have a Copilot license.

## Managing repository-level facts

As an administrator of a repository in which Copilot Memory is in use, you can review the currently stored repository-level facts. If you think any are inappropriate, misleading, or incorrect, you can delete them.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click Copilot, then click **Memory**.
1. You will see a list of repository-level facts, which you can delete as needed.


## Managing user-level preferences for an organization

As an administrator, you can export or delete all user-level preferences that were generated with your organization as the active billing entity. For more information on the ownership model, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory#user-level-preferences).

### Exporting user-level preferences

You can export user-level preferences in JSONL format. You can do this for everyone at once or for individual users.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Access**.
1. From here, you can export preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Export Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Download user memories**.

Existing exports are reused for a two-hour window, so if someone else has requested a bulk export or an export for the same user within the last two hours, you may find the results are slightly out of date. Exports are limited to 10 per hour.


### Deleting user-level preferences

You can delete user-level preferences in bulk or for individual users.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Access**.
1. From here, you can delete preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Delete Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Delete user memories**.

## Managing user-level preferences for an enterprise

As an administrator, you can export or delete all user-level preferences that were generated with your enterprise as the active billing entity. For more information on the ownership model, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory#user-level-preferences).

### Exporting user-level preferences

You can export user-level preferences in JSONL format. You can do this for everyone at once or for individual users.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. In the "Billing and licensing" sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
1. In the "Copilot" section, click **Manage**.

1. From here, you can export preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Export Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Download user memories**.

Existing exports are reused for a two-hour window, so if someone else has requested a bulk export or an export for the same user within the last two hours, you may find the results are slightly out of date. Exports are limited to 10 per hour.


### Deleting user-level preferences

You can delete user-level preferences in bulk or for individual users.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. In the "Billing and licensing" sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
1. In the "Copilot" section, click **Manage**.

1. From here, you can delete preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Delete Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Delete user memories**.

## Auditing Copilot Memory

Events appear in your organization or enterprise's audit log when an administrator exports or deletes memories, and when a user opts out of Copilot Memory. See [Review Audit Logs](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs).

## Further reading

* [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself)
