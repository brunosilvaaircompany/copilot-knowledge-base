# Deciding whether to configure SAML for your enterprise or your organizations

You can allow people to use a personal account on GitHub to access your enterprise's resources and optionally configure additional SAML access restriction, or you can provision and control the accounts for your enterprise using your identity provider (IdP) with Enterprise Managed Users.
 For more information, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals).

If you decide to use SAML instead of Enterprise Managed Users, you must choose whether to configure SAML at the enterprise level or the organization level.

If some groups within your enterprise must use different SAML authentication providers to grant access to your resources on GitHub, configure SAML for individual organizations. You can implement SAML for your organizations over time by allowing users to gradually authenticate using SAML, or you can require SAML authentication by a certain date. Organization members who do not authenticate using SAML by this date will be removed. For more information about organization-level SAML, see [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

If you configure SAML at the organization level, members are not required to authenticate via SAML to access internal repositories. For more information about internal repositories, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).

If you need to protect internal repositories or enforce a consistent authentication experience for every organization in your enterprise, you can configure SAML authentication for your enterprise account instead. The SAML configuration for your enterprise overrides any SAML configuration for individual organizations, and organizations cannot override the enterprise configuration. After you configure SAML for your enterprise, organization members must authenticate with SAML before accessing organization resources, including internal repositories.

SCIM is not available for enterprise accounts without Enterprise Managed Users, and team synchronization is only available for SAML at the enterprise level if you use Microsoft Entra ID (previously known as Azure AD) as an IdP. For more information, see [Managing Team Synchronization For Organizations In Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise).

Regardless of the SAML implementation you choose, you cannot add external collaborators to organizations or teams. You can only add external collaborators to individual repositories.
