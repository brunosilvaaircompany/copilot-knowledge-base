# Managing the availability of models in an organization

> [!IMPORTANT] If your enterprise has opted in to the **enterprise teams model access** preview, your organization will not be able to access model settings. See [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models).

## Which models can I configure?

If your organization is part of an enterprise, the enterprise owner controls which Copilot models are available and how they can be configured at the organization level.




When viewing the model settings for your organization, you may see the following statuses:

* **Enabled** or **Disabled** with a {% octicon "shield" aria-label="shield" %} icon: The enterprise owner has enforced this setting. You cannot change the availability of this model.
* **Enabled**, **Disabled**, or **Unconfigured** in a dropdown menu: The enterprise owner has made this model optional. You can configure the availability for your organization.

> [!IMPORTANT] 

On Copilot Business and Copilot Enterprise plans, a new policy will control whether unconfigured generally available (GA) models default to enabled or disabled. For more information, see [Default Availability](https://docs.github.com/en/copilot/concepts/models/default-availability).






## Configuring model availability for your organization

If the enterprise owner has set a model to **Optional**, you can enable or disable it for your organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.
1. Click **Models**.
1. Next to a model in the list, click the dropdown menu and select an option:
   * **Enabled**: The model is available to members of your organization.
   * **Disabled**: The model is not available to members of your organization.

On this page, you can also configure the **Default availability for released models** policy to choose the default setting for unconfigured models.

## Further reading

* [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies)
