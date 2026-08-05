# Viewing and managing a member's SAML access to your organization

## About SAML access to your organization

When you enable SAML single sign-on for your organization, each organization member can link their external identity on your identity provider (IdP) to their existing account on GitHub. To access your organization's resources on GitHub, the member must have an active SAML session in their browser. To access your organization's resources using the API or Git, the member must use a personal access token or SSH key that the member has authorized for use with your organization.

You can view and revoke each member's linked identity, active sessions, and authorized credentials on the same page.

## Viewing and revoking a linked identity

You can view the single sign-on identity that a member has linked to their account on GitHub.

If a member links the wrong identity to their account on GitHub, you can revoke the linked identity to allow the member to try again.


When available, the entry will include SCIM data. For more information, see [About Scim For Organizations](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

> [!WARNING]
> For organizations using SCIM:
> * Revoking a linked user identity on GitHub will also remove the SAML and SCIM metadata. As a result, the identity provider will not be able to synchronize or deprovision the linked user identity.
> * An admin must revoke a linked identity through the identity provider.
> * To revoke a linked identity and link a different account through the identity provider, an admin can remove and re-assign the user to the GitHub Enterprise Cloud application. For more information, see your identity provider's documentation.

> [!WARNING]
> If your organization uses team synchronization, revoking a person's SSO identity will remove that person from any teams mapped to IdP groups. For more information, see [Synchronizing A Team With An Identity Provider Group](https://docs.github.com/en/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. Click on the name of the member whose linked identity you'd like to view or revoke.

1. In the left sidebar, click **SAML identity linked**.

   ![Screenshot of the people summary for @octocat. A link, labeled "SAML identity linked", is highlighted with an orange outline.](/assets/images/help/saml/saml-identity-linked.png)

1. Under "Linked SSO identity", view the linked SSO identity for the member.

1. To revoke the linked identity, to the right of the identity, click **Revoke**.

1. Read the information, then click **Revoke external identity**.


## Viewing and revoking an active SAML session

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. Click on the name of the member whose SAML session you'd like to view or revoke.

1. In the left sidebar, click **SAML identity linked**.

   ![Screenshot of the people summary for @octocat. A link, labeled "SAML identity linked", is highlighted with an orange outline.](/assets/images/help/saml/saml-identity-linked.png)

1. Under "Active SAML sessions", view the active SAML sessions for the member.

1. To revoke a session, to the right of the session you'd like to revoke, click **Revoke**.


## Viewing and revoking authorized credentials

You can see each personal access token and SSH key that a member has authorized for API and Git access. Only the last several characters of each token or key are visible. If necessary, work with the member to determine which credentials you should revoke. Be aware that revoking a credential only removes the SAML authorization. It does not delete the underlying token or SSH key.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. Click on the name of the member whose authorized credentials you'd like to view or revoke.

1. In the left sidebar, click **SAML identity linked**.

   ![Screenshot of the people summary for @octocat. A link, labeled "SAML identity linked", is highlighted with an orange outline.](/assets/images/help/saml/saml-identity-linked.png)

1. Under "Authorized credentials", view the authorized credentials for the member.

1. To revoke credentials, to the right of the credentials you'd like to revoke, click **Revoke**.

1. Read the information, then click **I understand, revoke access for this token.**


## Further reading

* [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)
* [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)
