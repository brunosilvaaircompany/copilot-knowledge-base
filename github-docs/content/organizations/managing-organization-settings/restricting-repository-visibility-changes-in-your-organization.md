# Restricting repository visibility changes in your organization

You can restrict who has the ability to change the visibility of repositories in your organization, such as changing a repository from private to public. For more information about repository visibility, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

Restricting who has the ability to change the visibility of repositories in your organization helps prevent sensitive information from being exposed. For more information, see [Prevent Data Leaks](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prevent-data-leaks).



## Setting a blanket policy



You can restrict the ability to change repository visibility to organization owners only, or you can allow anyone with admin access to a repository to change visibility.

> [!WARNING]
> If this setting is enabled, individuals or GitHub Apps with admin access can _modify_ the visibility of an existing repository even if the ability to _create_ a repository with that specific visibility has been disabled. For more information about restricting the visibility of repositories during creation, see [Restricting Repository Creation In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Member privileges**.

1. Under "Repository visibility change", deselect **Allow members to change repository visibilities for this organization**.
1. Click **Save**.



## Setting a more flexible policy (public preview)

You can create a repository policy to govern who can create repositories in your organization, how new repositories must be named, and which visibilities are available. Compared to "member privilege" policies, repository policies give you more flexibility over which users are affected and which repositories are targeted. See [Governing How People Use Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/governing-how-people-use-repositories-in-your-organization).
