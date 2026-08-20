# Adding GitHub Copilot cloud agent to your organization

> [!NOTE]
> For an introduction to Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Enabling Copilot cloud agent for your members

> [!NOTE]
> Copilot policies are also managed at the enterprise level. If your enterprise owner has selected a specific policy, such as enabling a feature everywhere, disabling it everywhere, or enabling it for selected organizations only, you cannot override that setting at the organization level. For information on how policies combine, see [Policies](https://docs.github.com/en/copilot/concepts/policies).


Copilot cloud agent and use of third-party MCP servers are disabled by default for organization members assigned a GitHub Copilot Enterprise or Copilot Business license by your organization.

Organizations with Copilot Enterprise or Copilot Business can enable these features for members on the Copilot policies page for their organization. See [Enabling Copilot features in your organization](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization).

* For the "Copilot cloud agent" policy, select "Enabled".
* For the "MCP servers on GitHub.com" policy, select "Enabled".

## Disabling or enabling Copilot cloud agent in your repositories

By default, Copilot cloud agent is available in all repositories for users who have access to the agent, but you can block it from being used in some or all repositories owned by your organization. You can manage repository availability using the following instructions, or programmatically using the [REST API](/rest/copilot/copilot-cloud-agent-management).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Cloud agent**.

1. Use the "Repository access" control to define which repositories allow Copilot cloud agent.
1. If you choose "Selected repositories", in the "Select repositories" dialog, select the repositories that allow Copilot cloud agent, then click **Select**.

Once Copilot cloud agent is enabled for a repository, any user with access to Copilot cloud agent and write permission for the repository can delegate work to Copilot.

## Controlling automations in your repositories

Automations let users run Copilot cloud agent automatically, on a schedule or in response to events. See [About Automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations).

Automations are allowed by default in repositories where Copilot cloud agent is available. You can control whether automations are allowed in repositories owned by your organization, separately from the Copilot cloud agent policy.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Cloud agent**.

1. To allow or block automations, toggle the **Allow automations** setting.

## Managing the agent firewall for your organization

Organization owners can configure the Copilot cloud agent firewall for their organization, including whether it is enabled for the organization and which external hosts and URLs the agent can access. For more information, see [Customize The Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

## Next steps

* Tell the members of repositories where Copilot cloud agent is available that they can delegate work to the cloud agent.
* Configure the default runner type for Copilot cloud agent in your organization. For more information, see [Configure Runner For Coding Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent).
* Encourage members to educate themselves about setting up their repository to get the most from Copilot cloud agent. Useful resources:

   * [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)
   * [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
   * [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations)
