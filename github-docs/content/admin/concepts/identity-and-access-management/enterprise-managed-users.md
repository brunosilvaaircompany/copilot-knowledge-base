# About Enterprise Managed Users

## What are Enterprise Managed Users in GitHub?

With Enterprise Managed Users, you manage the lifecycle and authentication of your users on GitHub.com or GHE.com **from an external identity management system, or IdP**:

* Your IdP **provisions new user accounts** on GitHub, with access to your enterprise.
* Users must **authenticate on your IdP** to access your enterprise's resources on GitHub.
* You control **usernames, profile data, organization membership, and repository access** from your IdP.
* If your enterprise uses OIDC SSO, GitHub will validate access to your enterprise and its resources using your IdP's **Conditional Access Policy (CAP)**. See [About Support For Your Idps Conditional Access Policy](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/about-support-for-your-idps-conditional-access-policy).
* Managed user accounts **cannot create public content** or collaborate outside your enterprise. See [Abilities And Restrictions Of Managed User Accounts](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts).

> [!NOTE] Enterprise Managed Users is not the best solution for every customer. To determine whether it's right for your enterprise, see [Choose An Enterprise Type](https://docs.github.com/en/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type).

## How does EMUs integrate with identity management systems?

GitHub partners with some developers of identity management systems to provide a "paved-path" integration with Enterprise Managed Users. To simplify your configuration and ensure full support, **use a single partner IdP for both authentication and provisioning.**


### What are partner identity providers?

Partner IdPs provide authentication using SAML or OIDC, and provide provisioning with System for Cross-domain Identity Management (SCIM).

{% rowheaders %}

| Partner IdP | SAML | OIDC | SCIM |
| :- | :- | :- | :- |
| Entra ID | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Okta | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| PingFederate | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

When you use a single partner IdP for both authentication and provisioning, GitHub provides support for the application on the partner IdP and the IdP's integration with GitHub.

### Can I use identity management systems other than the supported partners?

If you cannot use a single partner IdP for both authentication and provisioning, you can use another identity management system or combination of systems. The system must:

* Adhere to **GitHub's integration guidelines**
* Provide **authentication using SAML**, adhering to SAML 2.0 specification
* Provide **user lifecycle management using SCIM**, adhering to the SCIM 2.0 specification and communicating with GitHub's REST API (see [Provisioning Users And Groups With Scim Using The Rest API](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api))

GitHub does not expressly support mixing partner IdPs for authentication and provisioning and does not test all identity management systems. **GitHub's support team may not be able to assist you with issues related to mixed or untested systems.** If you need help, you must consult the system's documentation, support team, or other resources.

>[!IMPORTANT] The combination of **Okta and Entra ID** for SSO and SCIM (in either order) is explicitly **not supported**. GitHub's SCIM API will return an error to the identity provider on provisioning attempts if this combination is configured.


## How are usernames and profile information managed for EMUs?

GitHub automatically creates a username for each developer by normalizing an identifier provided by your IdP. If the unique parts of the identifier are removed during normalization, a conflict may occur. See [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication#resolving-username-problems).

The profile name and email address of a managed user account is provided by the IdP:
* Managed user accounts _cannot_ change their profile name or email address on GitHub.
* The IdP can only provide one email address.
* Changing a user's email address in your IdP will unlink the user from the contribution history associated with the old email address.

## How are roles and access managed for EMUs?

In your IdP, you can give each managed user account a **role in your enterprise**, such as member, owner, or guest collaborator. See [Abilities Of Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles).

Organization memberships (and repository access) can be managed manually, or you can **update memberships automatically using IdP groups**. See [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).

## How do managed user accounts authenticate to GitHub?

The locations where managed user accounts can authenticate to GitHub depends on how you configure authentication (SAML or OIDC). See [Authenticating With A Managed User Account](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authenticating-with-a-managed-user-account).

By default, when an unauthenticated user attempts to access your enterprise, GitHub displays a 404 error. You can optionally enable automatic redirects to single sign-on (SSO) instead. See [Enforcing Policies For Security Settings In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users).

## Further reading

* [Getting Started With Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users)
