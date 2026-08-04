# Adding users to your enterprise

The method of adding users to your enterprise and controlling authentication varies depending on the enterprise type that you chose.

## Personal accounts

If you chose an enterprise with personal accounts, you will invite users to your enterprise with their existing GitHub account.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. On the "Members" page, click **Invite member**.
1. Search for the users you want to invite, then click **Invite**.

After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account. Pending invitations will expire after 7 days.


Later in this onboarding journey, you will add users to teams to grant access to organizations and delegate administrative roles.

### Enabling single sign-on for personal accounts

Single sign-on (SSO) gives organization owners and enterprise owners a way to control and secure access to organization resources like repositories, issues, and pull requests.


1. Check if your SAML service is supported. See [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on#supported-saml-services).
1. Decide whether to configure SAML for your enterprise account or for individual organizations. See [Deciding Whether To Configure Saml For Your Enterprise Or Your Organizations](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations).
1. If you're enabling SAML for the enterprise, you can do so now. See [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

## Enterprise Managed Users

With Enterprise Managed Users, you manage the lifecycle and authentication of your users on GitHub.com or GHE.com from an external identity management system, or IdP:

* Your IdP **provisions new user accounts** on GitHub, with access to your enterprise.
* Users must **authenticate on your IdP** to access your enterprise's resources on GitHub.
* You control **usernames, profile data, organization membership, and repository access** from your IdP.
* If your enterprise uses OIDC SSO, GitHub will validate access to your enterprise and its resources using your IdP's **Conditional Access Policy (CAP)**.
* Managed user accounts **cannot create public content** or collaborate outside your enterprise.

### Get started with managed users

To use Enterprise Managed Users, you will:

* Configure authentication using SAML or OIDC
* Configure SCIM provisioning
* Provision users to your enterprise

To get started, see [Getting Started With Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

## Next steps

Learn about how billing will work when your trial ends. See [Billing For Enterprises](https://docs.github.com/en/billing/concepts/enterprise-billing/billing-for-enterprises).
