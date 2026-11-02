# Managing GitHub Copilot in the cloud for your organization

Copilot in the cloud is a connected experience that lets users start and resume cloud sessions across the GitHub website, GitHub Mobile, Copilot CLI, and the Copilot app. See [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github).

The **Copilot in the cloud** policy determines:

* Whether users can access the chat interface or assign work to Copilot on the GitHub website and GitHub Mobile
* Whether users can start sessions in cloud sandboxes from local clients (Copilot CLI and the Copilot app)

This feature is enabled by default. To ensure data security, chat sessions are scoped by default to either a single organization or the user's personal repositories. If you have enabled single sign-on (SSO), users will need to authenticate with SSO to access session data from a repository associated with that organization.


## Enabling Copilot in the cloud for your members

> [!NOTE]
> Copilot policies are also managed at the enterprise level. If your enterprise owner has selected a specific policy, such as enabling a feature everywhere, disabling it everywhere, or enabling it for selected organizations only, you cannot override that setting at the organization level. For information on how policies combine, see [Policies](https://docs.github.com/en/copilot/concepts/enterprise/policies).


Copilot in the cloud is enabled by default for organization members assigned a GitHub Copilot Enterprise or Copilot Business license by your organization.

Organizations with Copilot Enterprise or Copilot Business can enable or disable these features for members on the Copilot policies page for their organization. See [Enabling Copilot features in your organization](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization).

* For the "Copilot in the cloud" policy, select "Enabled".
* Optionally, for the "MCP servers on GitHub.com" policy, select "Enabled".

## Disabling the cloud agent in your repositories

By default, GitHub's cloud agent is available in all repositories in an organization where **Copilot in the cloud** is enabled. However, you can block the agent from being used in some or all repositories owned by your organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Cloud**.

1. Use the "Repository access" control to define which repositories allow the agent.
1. If you choose "Selected repositories", in the "Select repositories" dialog, select the repositories that allow Copilot cloud agent, then click **Select**.

Once the agent is enabled for a repository, any user with access to Copilot and write permission for the repository can delegate work to Copilot.

## Controlling automations in your repositories

Automations let users run Copilot sessions automatically, on a schedule or in response to events. See [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations).

Automations are allowed by default in repositories where Copilot in the cloud is available. You can control whether automations are allowed in repositories owned by your organization, separately from the Copilot in the cloud policy.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Cloud**.

1. To allow or block automations, update the **Allow automations** setting.

## Managing the agent firewall for your organization

Organization owners can configure the firewall for their organization to determine which external hosts and URLs the cloud agent can access. For more information, see [Customize The Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

## Next steps

* Tell the members of repositories where Copilot in the cloud is available that they can start cloud sessions and delegate work to Copilot on GitHub.
* Encourage members to educate themselves about setting up their repository to get the most from Copilot. Useful resources:

   * [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)
   * [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
   * [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations)
