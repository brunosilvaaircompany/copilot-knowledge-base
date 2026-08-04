# Inviting users to join your organization

> [!NOTE] This article does not apply to Enterprise Managed Users. Managed user accounts are provisioned using SCIM, not invited.

## About organization invitations

 When you invite someone to become a member of your organization, the person receives an email with an invitation link. To join the organization, the invitee clicks the invitation link in the email.

 You can use a person's GitHub username or email address for the invitation.

> [!NOTE]
> If you use an email address for the invitation, the invitee will only be able to accept the invitation if the email address matches with a verified email address associated with the invitee's personal account on GitHub. For more information, see [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).
>
> If an invitee's personal account has been flagged, the invitee won't be able to accept any new or pending invitations to join organizations.

If your organization has a paid per-user subscription, an unused license must be available before you can invite a new member to join the organization or reinstate a former organization member. For more information, see [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users).

If an invitee does not accept the invitation within seven days, the pending invitation expires automatically. If a SCIM request from your identity provider (IdP) generates the invitation, the invitation will not expire.


If your organization requires members to use two-factor authentication, users that you invite must enable two-factor authentication before accepting the invitation. For more information, see [Requiring Two Factor Authentication In Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and [Securing Your Account With Two Factor Authentication 2Fa](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa).

Organizations that use GitHub Enterprise Cloud can implement SCIM to add, manage, and remove organization members' access to GitHub through an identity provider (IdP). For more information, see [About Scim For Organizations](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)" in the GitHub Enterprise Cloud documentation.

To prevent abuse, you can only create 50 organization invitations within a 24-hour period. If your organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.  This limit does not apply to invitations created via SCIM provisioning.

## Inviting a user to join your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)


1. Click **Invite member**.


1. In the search field, type the username, full name, or email address of the person you want to invite and click **Invite**.


1. If the person you're inviting was an organization member within the last three months, select whether to restore their privileges or start fresh, then click **Invite and reinstate** or **Invite and start fresh**.


1. If the person you're inviting has never been a member of the organization or if you cleared their privileges, under "Role in the organization," select an organization role for the user.

1. Optionally, to add the user to a team in the organization, select the team.

1. Click **Send invitation**.

1. The invited person will receive an email inviting them to the organization. They will need to accept the invitation before becoming a member of the organization.
 
You can [edit or cancel an invitation](/organizations/managing-membership-in-your-organization/canceling-or-editing-an-invitation-to-join-your-organization) any time before the user accepts.





## Retrying or canceling expired invitations

Invitations expire after 7 days. You can retry or cancel expired invitations, either one by one or in bulk. Failed invitations to outside collaborators can also be found in this view.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. In the "Organization permissions" sidebar, click **Failed invitations**.
1. Next to an invitation, select the {% octicon "kebab-horizontal" aria-label="Member settings" %} dropdown menu, then click **Retry invitation** or **Cancel invitation**.

   ![Screenshot of the list of failed invitations for an organization. To the right of the first entry, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/retry-or-cancel-invitation.png)

1. To confirm, click **Retry invitation** or **Cancel invitation**.



## Further reading

* [Adding Organization Members To A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)
