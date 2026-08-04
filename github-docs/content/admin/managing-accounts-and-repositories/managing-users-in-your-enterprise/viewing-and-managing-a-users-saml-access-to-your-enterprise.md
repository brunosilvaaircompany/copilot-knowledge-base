# Viewing and managing a user's SAML access to your enterprise

## About SAML access to your enterprise account

When you enable SAML single sign-on for your enterprise account, each enterprise member can link their external identity on your identity provider (IdP) to their existing account on your GitHub Enterprise Server instance. To access each organization's resources on GitHub, the member must have an active SAML session in their browser. To access each organization's protected resources using the API and Git, the member must use a personal access token or SSH key that the member has authorized for use with the organization. Enterprise owners can view and revoke a member's linked identity, active sessions, or authorized credentials at any time.


>[!NOTE]
> This view is only enabled when SAML with SCIM is enabled.





If your enterprise uses Enterprise Managed Users, your members will use accounts provisioned through your IdP. Managed user accounts will not use their existing user account on GitHub. For more information, see [Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users).





## Viewing and revoking a linked identity

You can view the single sign-on identity that a member has linked to their account on GitHub.

If a member links the wrong identity to their account on GitHub, you can revoke the linked identity to allow the member to try again.


If your enterprise uses Enterprise Managed Users, you will not be able to deprovision or remove user accounts from the enterprise via GitHub. Any changes you need to make to your enterprise's managed user accounts should be made through your IdP.

> [!WARNING]
> If your organization uses team synchronization, revoking a person's SSO identity will remove that person from any teams mapped to IdP groups. For more information, see [Synchronizing A Team With An Identity Provider Group](https://docs.github.com/en/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Click on the name of the member whose linked identity you'd like to view or revoke.

1. In the left sidebar, click **SAML identity linked**.

   ![Screenshot of the people summary for @octocat. A link, labeled "SAML identity linked", is highlighted with an orange outline.](/assets/images/help/saml/saml-identity-linked.png)

1. Under "Linked SSO identity", view the linked SSO identity for the member.

1. To revoke the linked identity, to the right of the identity, click **Revoke**.

1. Read the information, then click **Revoke external identity**.


{% elsif scim-for-ghes-public-beta %}

## Viewing a linked identity

You can view the single sign-on identity that a member has linked to their account on GitHub.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Click on the name of the member whose linked identity you'd like to view or revoke.

1. In the left sidebar, click **SAML identity linked**.

   ![Screenshot of the people summary for @octocat. A link, labeled "SAML identity linked", is highlighted with an orange outline.](/assets/images/help/saml/saml-identity-linked.png)

1. Under "Linked SSO identity", view the linked SSO identity for the member.


The identity data on this page will include the SCIM data that was sent to GitHub during user provisioning. This SCIM data is what GitHub uses when matching a SAML SSO request to the provisioned user. Note that GitHub does not use SAML mappings when SCIM is enabled. For more information on how GitHub maps SAML and SCIM data for users, please see [Scim?Apiversion=2022 11 28](https://docs.github.com/en/rest/enterprise-admin/scim?apiVersion=2022-11-28#mapping-of-saml-and-scim-data).



## Viewing and revoking an active SAML session


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Click on the name of the member whose SAML session you'd like to view or revoke.

1. In the left sidebar, click **SAML identity linked**.

   ![Screenshot of the people summary for @octocat. A link, labeled "SAML identity linked", is highlighted with an orange outline.](/assets/images/help/saml/saml-identity-linked.png)

1. Under "Active SAML sessions", view the active SAML sessions for the member.

1. To revoke a session, to the right of the session you'd like to revoke, click **Revoke**.




## Viewing and revoking authorized credentials

You can see each personal access token and SSH key that a member has authorized for API and Git access. Only the last several characters of each token or key are visible. If necessary, work with the member to determine which credentials you should revoke. Be aware that revoking a credential only removes the SAML authorization. It does not delete the underlying token or SSH key.


{% ifversion single_user_cred_revocation %}

You can also revoke SSO authorizations for individual users or all users. For enterprises with Enterprise Managed Users, you can delete credentials entirely. This is useful for responding to security incidents. For more information, see [Revoke Authorizations Or Tokens](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).




1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Click on the name of the member whose authorized credentials you'd like to view or revoke.

1. In the left sidebar, click **SAML identity linked**.

   ![Screenshot of the people summary for @octocat. A link, labeled "SAML identity linked", is highlighted with an orange outline.](/assets/images/help/saml/saml-identity-linked.png)

1. Under "Authorized credentials", view the authorized credentials for the member.

1. To revoke credentials, to the right of the credentials you'd like to revoke, click **Revoke**.

1. Read the information, then click **I understand, revoke access for this token.**


## Further reading

* [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)

{% endif %}
