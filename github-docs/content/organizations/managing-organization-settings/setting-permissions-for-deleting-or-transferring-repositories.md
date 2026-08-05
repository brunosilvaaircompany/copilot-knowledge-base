# Setting permissions for deleting or transferring repositories

Owners can set permissions for deleting or transferring repositories in an organization.

Limiting the ability to delete or transfer repositories helps prevent sensitive information from being exposed. For more information, see [Prevent Data Leaks](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prevent-data-leaks).



## Setting a blanket policy



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Member privileges**.

1. Under "Repository deletion and transfer", select or deselect **Allow members to delete or transfer repositories for this organization**.
1. Click **Save**.



## Setting a more flexible policy (public preview)

You can create a repository policy to govern who can delete or transfer repositories in your organization. Compared to "member privilege" policies, repository policies give you more flexibility over which users the policies apply to and which repositories are targeted. See [Governing How People Use Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/governing-how-people-use-repositories-in-your-organization).
