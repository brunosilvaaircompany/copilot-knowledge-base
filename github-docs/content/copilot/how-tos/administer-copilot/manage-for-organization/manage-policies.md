# Managing policies and features for GitHub Copilot in your organization

Copilot policies are also managed at the enterprise level. If your enterprise owner has selected a specific policy, such as enabling a feature everywhere, disabling it everywhere, or enabling it for selected organizations only, you cannot override that setting at the organization level. For information on how policies combine, see [Policies](https://docs.github.com/en/copilot/concepts/policies).


## Enabling Copilot features and models in your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.
   * Click **Policies** to edit the policies that control privacy and availability of features.
   * Click **Models** to edit the policies that control availability of models beyond the basic models provided with Copilot, which may incur additional costs.
1. For each policy you want to configure, click the dropdown menu and select an enforcement option.

> [!NOTE]
> The **MCP servers in Copilot** policy controls use where MCP server support is generally available (GA). This policy does not control access and permissions for the GitHub MCP server in third-party host applications (like Cursor, Windsurf or Claude). For more information on controlling access to the GitHub MCP server, see the [Policies and Governance](https://github.com/github/github-mcp-server/blob/main/docs/policies-and-governance.md#control-mechanisms) documentation in the GitHub MCP Server repository.


## Enabling or disabling third-party coding agents in your repositories

> [!NOTE]
> * Available for all paid [Copilot plans](/copilot/get-started/plans).
> * If your organization is owned by an enterprise, these settings are only visible if an enterprise admin has enabled third-party coding agents at the enterprise level. See [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).
>   * Agent apps are not enabled here. They are controlled separately by a single "agent apps" policy. For more information, see [Agent Apps](https://docs.github.com/en/copilot/concepts/agents/agent-apps).

You can choose whether to allow the following coding agents to be enabled in your organization:

* Anthropic Claude
* OpenAI Codex

Coding agents have access to the same repositories that Copilot cloud agent has been enabled in.

To enable coding agents:

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Cloud agent**.

1. In the sidebar, under **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, click **Cloud agent**.
1. On the Copilot cloud agent page, under "Partner agents", click the toggle to enable the third-party agent you want to use.

## Opting in to previews or feedback

If your organization has a Copilot Business or Copilot Enterprise plan and you enable "Copilot in GitHub.com", two additional options are displayed:

* **Opt in to user feedback collection:** If enabled, users will see options to provide feedback on selected Copilot features.
* **Opt in to preview features:** If enabled, users can test new Copilot features that are not yet generally available. Be aware that previews of features may have flaws, and the features may be changed or discontinued at any time.


## Further reading

* [Manage Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models)
* [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models)
* [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies)
