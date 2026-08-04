# Setting permissions for adding outside collaborators

>[!NOTE] If your enterprise uses managed user accounts, the outside collaborator role is called "repository collaborator." Generally, the documentation for outside collaborators also applies to repository collaborators. For the distinctions that apply, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).



An outside collaborator is a person who is not a member of your organization, but has access to one or more of your organization's repositories.
 For more information, see [Adding Outside Collaborators To Repositories In Your Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization).

By default, anyone with admin access to a repository can invite outside collaborators to work on the repository. You can choose to restrict the ability to add outside collaborators to organization owners only.



> [!NOTE]
> Only organizations that use GitHub Enterprise Cloud can restrict the ability to invite outside collaborators to organization owners. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).




If your organization is owned by an enterprise account, you may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing repository management policies in your enterprise](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories).

 Unless you are on a free plan, adding an outside collaborator to a private or internal repository will use one of your paid licenses. For more information, see "[About per-user pricing](/billing/reference/github-license-users){% elsif ghes %}[About billing for your enterprise](/billing/concepts/enterprise-billing/billing-for-enterprises)."


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Member privileges**.

1. Under "Repository outside collaborators", deselect **Allow repository administrators to invite outside collaborators to repositories for this organization**.
1. Click **Save**.
