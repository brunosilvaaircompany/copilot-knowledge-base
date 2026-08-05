# Reinstating a former outside collaborator's access to your organization

>[!NOTE] If your enterprise uses managed user accounts, the outside collaborator role is called "repository collaborator." Generally, the documentation for outside collaborators also applies to repository collaborators. For the distinctions that apply, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).



When an outside collaborator's access to your organization's private repositories is removed, the user's access privileges and settings are saved for three months. You can restore the user's privileges if you invite them back to the organization within that time frame.


If a user was removed from your organization because you required members and outside collaborators to enable 2FA, you can send an invitation to reinstate a user's privileges and access to the organization before they have enabled two-factor authentication, but they must enable 2FA before they can accept your invitation to rejoin the organization.



When you reinstate a former outside collaborator, you can restore:

* The user's former access to organization repositories
* Any private forks of repositories owned by the organization
* Previous access and permissions for the organization's repositories
* Stars for organization repositories
* Issue assignments in the organization
* Repository subscriptions (notification settings for watching, not watching, or ignoring a repository's activity)

> [!TIP]
> * Only organization owners can reinstate outside collaborators' access to an organization. Enterprise owners may further restrict the ability to reinstate outside collaborators' access to enterprise owners only. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).
> * The reinstating a member flow on your GitHub Enterprise Server instance may use the term "member" to describe reinstating an outside collaborator but if you reinstate this person and keep their previous privileges, they will only have their previous [outside collaborator permissions](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).
> * If your organization has a paid per-user subscription, an unused license must be available before you can invite a new member to join the organization or reinstate a former organization member. For more information, see [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)


1. Click **Invite member**.


1. Type the username of the person you want to reinstate and click **Invite**.



1. Select whether to restore the outside collaborator's previous privileges in the organization by clicking **Invite and reinstate** or choose to clear their previous privileges and set new access permissions by clicking **Invite and start fresh**.

   > [!WARNING]
   > If you want to upgrade the outside collaborator to a member of your organization, then choose **Invite and start fresh** and choose a new role for this person. Note, however, that this person's private forks of your organization's repositories will be lost if you choose to start fresh. To make the former outside collaborator a member of your organization _and_ keep their private forks, choose **Invite and reinstate** instead. Once this person accepts the invitation, you can convert them to an organization member by [inviting them to join the organization as a member](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/converting-an-outside-collaborator-to-an-organization-member).



1. If you cleared the previous privileges for a former outside collaborator, choose a role for the user and optionally add them to some teams, then click **Send invitation**.


1. The invited person will receive an email inviting them to the organization. They will need to accept the invitation before becoming an outside collaborator in the organization. 
You can [edit or cancel an invitation](/organizations/managing-membership-in-your-organization/canceling-or-editing-an-invitation-to-join-your-organization) any time before the user accepts.




## Further reading

* [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
