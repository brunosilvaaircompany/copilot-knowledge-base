# Restricting repository creation in your organization

## Setting a blanket policy



You can choose whether members and GitHub Apps can create repositories in your organization. If you allow members and GitHub Apps to create repositories, you can choose which types of repositories they can create.{% elsif fpt %}If you allow members and GitHub Apps to create repositories, you can choose whether they can create both public and private repositories or public repositories only. Organization owners can always create any type of repository.


Organizations using GitHub Enterprise Cloud can also restrict members to creating private repositories only. For more information, see [the GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).



Enterprise owners can restrict the options you have available for your organization's repository creation policy. For more information, see [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation).


Organization owners can restrict the type of repositories members can create to private or internal to help prevent sensitive information from being exposed. For more information, see [Prevent Data Leaks](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prevent-data-leaks).

> [!WARNING]
> This setting restricts the visibility options available when repositories are _created_, but does not prevent changing the visibility of _existing_ repositories. For more information about restricting changes to existing repositories' visibilities, see [Restricting Repository Visibility Changes In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Member privileges**.

1. Under "Repository creation", select one or more options. <br><br>

   

   > [!NOTE]
   > To restrict members to creating private repositories only, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).


   

1. Click **Save**.



## Setting a more flexible policy (public preview)

You can create a repository policy to govern who can create repositories in your organization, how new repositories must be named, and which visibilities are available. Compared to "member privilege" policies, repository policies give you more flexibility over which users are affected and which repositories are targeted. See [Governing How People Use Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/governing-how-people-use-repositories-in-your-organization).
