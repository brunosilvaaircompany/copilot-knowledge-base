# Configuring runners for GitHub Copilot cloud agent in your organization

## About organization-level runner controls

By default, Copilot cloud agent runs on a standard GitHub-hosted GitHub Actions runner (`ubuntu-latest`). As an organization owner, you can change the default runner type for all repositories in your organization, and choose whether individual repositories are allowed to override this default.

This is useful if your organization requires all Copilot cloud agent sessions to run on specific runners—for example, to use larger runners for better performance, or to use self-hosted runners that have access to internal resources.

You can configure:

* **Runner type**: Choose between a standard GitHub-hosted runner or a labeled runner from a specific runner group.
* **Allow repositories to customize the runner type**: Control whether repositories can override the organization default using a Copilot setup steps workflow defined at `.github/workflows/copilot-setup-steps.yml`.

## Configuring the default runner type

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Cloud agent**.

1. Next to "Runner type," click the pencil icon ({% octicon "pencil" aria-label="Edit" %}).
1. Select the runner type to use by default for Copilot cloud agent across your organization.
   * **Standard GitHub runner**: Copilot cloud agent will use `ubuntu-latest`.
   * **Labeled runner**: Copilot cloud agent will use a runner matching the group name and/or label you specify. Enter values in the **Runner group name** and/or **Runner label** fields.
1. Click **Save runner selection**.

## Preventing repositories from customizing the runner type

By default, repositories can override the organization-level runner configuration using a Copilot setup steps workflow located at `.github/workflows/copilot-setup-steps.yml`. If you want to enforce a consistent runner type across all repositories, you can disable this option.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Cloud agent**.

1. Under "Allow repositories to customize the runner type," toggle the setting to enable or disable repository-level customization.
   * When enabled, repositories can override the default runner by setting the `runs-on` field in the `copilot-setup-steps` job of `copilot-setup-steps.yml`. See [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).
   * When disabled, all repositories in your organization will use the organization-level runner type.
1. Click **Save**.

## Further reading

* [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
* [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent)
