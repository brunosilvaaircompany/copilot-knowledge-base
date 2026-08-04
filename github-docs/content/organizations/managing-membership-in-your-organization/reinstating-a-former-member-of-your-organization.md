# Reinstating a former member of your organization

## About member reinstatement

If a user is removed from your organization in one of the following ways, the user's access privileges and settings are saved for three months.

* You manually removed the user from your organization. For more information, see [Removing A Member From Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization).

* The user was removed via SCIM. For more information, see [About Scim For Organizations](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

* The user was removed from your organization because you've required members and outside collaborators to enable two-factor authentication (2FA). For more information, see [Requiring Two Factor Authentication In Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization).
* The user was removed from your organization because you enforced SAML single sign-on. For more information, see [Enforcing Saml Single Sign On For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" in the GitHub Enterprise Cloud documentation.{% endif %}
* You converted an organization member to an outside collaborator. For more information, see [Converting An Organization Member To An Outside Collaborator](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/converting-an-organization-member-to-an-outside-collaborator).

You can restore the user's privileges if you invite them back to the organization within that time frame.


If your organization has a paid per-user subscription, an unused license must be available before you can reinstate a former organization member. For more information, see [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users).


## Items that are restored for reinstated members

When you reinstate a former organization member, the following items can be restored:

* The user's role in the organization
* Any private forks of repositories owned by the organization
* Membership in the organization's teams
* Previous access and permissions for the organization's repositories
* Stars for organization repositories
* Issue assignments in the organization
* Repository subscriptions (notification settings for watching, not watching, or ignoring a repository's activity)



## Reinstating a former member of your organization

The correct way to reinstate a former member depends on your organization's identity and access management configuration.

* If the user was removed via SCIM because they were unassigned from the GitHub Enterprise Cloud application in your IdP, re-invite the user via SCIM by re-assigning them to the application. The user's organization membership will be reinstated after they sign into GitHub and accept the invitation.
* If your organization uses SAML but not SCIM, ask the user to authenticate via SAML single sign-on, via your IP or by signing into GitHub, navigating to the organization, and clicking the banner to authenticate via SAML single sign-on. The user's organization membership will be reinstated after they successfully authenticate.
* Otherwise, invite the user to rejoin your organization on GitHub, following the steps below.



## Reinstating a former member of your organization on GitHub


If a user was removed from your organization because you required members and outside collaborators to enable 2FA, you can send an invitation to reinstate a user's privileges and access to the organization before they have enabled two-factor authentication, but they must enable 2FA before they can accept your invitation to rejoin the organization.




If an organization member was removed from the organization because they did not use two-factor authentication and your organization still requires members to use 2FA, the former member must enable two-factor authentication before you can reinstate their membership.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)


1. Click **Invite member**.


1. Type the username of the person you want to reinstate and click **Invite**.


1. Select whether to restore that person's previous privileges in the organization or clear their previous privileges and set new access permissions, then click **Invite and reinstate** or **Invite and start fresh**.


1. If you cleared the previous privileges for a former organization member, choose a role for the user, and optionally add them to some teams, then click **Send invitation**.


1. The invited person will receive an email inviting them to the organization. They will need to accept the invitation before becoming a member of the organization.
 
You can [edit or cancel an invitation](/organizations/managing-membership-in-your-organization/canceling-or-editing-an-invitation-to-join-your-organization) any time before the user accepts.
