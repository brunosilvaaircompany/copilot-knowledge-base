# Managing custom properties for repositories in your organization

## About custom properties

Custom properties are structured metadata fields that you can add to repositories and organizations in GitHub to enable better organization, governance, and automation across your environment.
 See [Custom Properties](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/custom-properties).

This article relates to **repository custom properties.**

The **visibility** of custom properties matches the visibility of the repository. Custom properties on public repositories can be viewed by anyone, while custom properties on internal or private repositories can be viewed by accounts with `read` permissions to the repository.

## Allowed characters

Custom property names and values may only contain certain characters:

* Names: `a-z`, `A-Z`, `0-9`, `_`, `-`, `$`, `#`
* Values: All printable ASCII characters except `"`


## Adding custom properties

You can add custom properties to your organization and set values for those properties for repositories in your organization.

You can also use the REST API to create and manage custom properties for an organization. For more information, see [Custom Properties](https://docs.github.com/en/rest/orgs/custom-properties).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Custom properties**.

    ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Custom properties" is outlined in orange.](/assets/images/help/organizations/custom-properties.png)

1. To add a new custom property, click **New property** in the upper right corner.
1. In the "Name" field, type the name you'd like to use for your custom property. The name can't contain spaces, and cannot exceed 75 characters in length.
1. Optionally, in the "Description" field, fill in a description of your custom property.
1. Under "Type", select the type of property you'd like to add. This can either be a text string, a single select field, a multi select field, a URL, or a true/false boolean.
1. Optionally, you can select **Allow repository actors to set this property**. When enabled, repository users and apps with the repository-level "custom properties" fine-grained permission will be able to set and update the property value for their repository.
1. Optionally, you can select **Require this property for all repositories** and add a default value. This means that you require that all repositories in your organization have a value for this property. Repositories that don’t have an explicit value for this property will inherit the default value.


   * Optionally, you can select **Require explicit user-specified values**. When this option is enabled, users and apps with permission to set property values must provide an explicit value when setting properties, creating repositories, or transferring repositories. Repositories that don't yet have an explicit value will still inherit the default value.



1. Click **Save property**.

## Setting values for repositories in your organization

You, and any users with the "Edit custom properties values at the organization level" permission, can set values for custom properties for repositories in your organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Custom properties**.

    ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Custom properties" is outlined in orange.](/assets/images/help/organizations/custom-properties.png)

1. Click the "Set values" tab.
1. Select one or more repositories from the list and click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit properties**.

    ![Screenshot the page to set values for repositories. A button, labeled with a pencil icon and "Edit properties", is highlighted with an orange outline.](/assets/images/help/repository/edit-properties.png)

1. In the modal dialog that appears, select a value for each property you'd like to set for the selected repositories. This value cannot exceed 75 characters in length.
1. Click **Save changes**.

## Viewing values for repositories in your organization

People with read permissions to a repository can view the values of custom properties for that repository, but they can't edit those values.

You can also use the REST API to list the custom properties assigned to a repository by your organization. For more information, see [Custom Properties](https://docs.github.com/en/rest/repos/custom-properties).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "tools" aria-hidden="true" aria-label="tools" %} Custom properties**.

## Searching and filtering repositories by custom properties values

You can search for repositories in your organization by custom properties values.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repositories**.
1. In the search bar, type `prop` to see a list of all custom properties in your organization, and select the property you'd like to search by.
