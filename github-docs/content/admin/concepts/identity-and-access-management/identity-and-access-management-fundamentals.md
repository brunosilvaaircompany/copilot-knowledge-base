# Identity and access management fundamentals

## What is IAM for GitHub?



To control access to your enterprise's resources, you can allow people to use a personal account on GitHub.com and optionally configure additional SAML access restrictions, or you can provision and control the accounts for your enterprise using your identity provider (IdP) with Enterprise Managed Users.


After learning more about authentication and provisioning for each of these options, to determine which method is best for your enterprise, see [Choose An Enterprise Type](https://docs.github.com/en/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type).

{% elsif ghes %}

Administrators who configure a GitHub Enterprise Server instance can use local accounts and built-in authentication on the instance. Alternatively, to centralize identity and access for an enterprise's web applications, administrators can configure an external authentication method. If you use SAML, you can optionally provision user accounts on the instance from your identity provider (IdP) using System for Cross-domain Identity Management (SCIM).



## Which authentication method are available to me?



When you create an enterprise on GitHub, you can decide how people authenticate to access your resources and who controls the user accounts.

* [Authentication through {% ifversion ghes %}your GitHub Enterprise Server instance](#authentication-through-githubcom)
* [Authentication through your GitHub Enterprise Server instance with additional SAML access restriction](#authentication-through-githubcom-with-additional-saml-access-restriction)
* [Authentication with Enterprise Managed Users and federation](#authentication-with-enterprise-managed-users-and-federation)

### Authentication through your GitHub Enterprise Server instance

With authentication solely through your GitHub Enterprise Server instance, each person you want to grant access to your enterprise must create and manage a personal account on your GitHub Enterprise Server instance. After you grant access to your enterprise, the member can access your enterprise's resources after signing into the account on your GitHub Enterprise Server instance. The member manages the account, and can contribute to other enterprises, organizations, and repositories on your GitHub Enterprise Server instance. For more information about personal accounts, see [Creating An Account On GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github).

### Authentication through your GitHub Enterprise Server instance with additional SAML access restriction

If you configure additional SAML access restriction, each person you want to grant access to your enterprise must create and manage a personal account on your GitHub Enterprise Server instance. After you grant access to your enterprise, the member can access your enterprise's resources only after authenticating successfully for both the account on your GitHub Enterprise Server instance and for an account on your SAML identity provider (IdP). The member can contribute to other enterprises, organizations, and repositories on your GitHub Enterprise Server instance using their personal account. For more information about requiring SAML authentication for all access your enterprise's resources, see [About Saml For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/about-saml-for-enterprise-iam).

You can choose between configuring SAML at the enterprise level, which applies the same SAML configuration to all organizations within the enterprise, and configuring SAML separately for individual organizations. For more information, see [Deciding Whether To Configure Saml For Your Enterprise Or Your Organizations](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations).

### Authentication with Enterprise Managed Users and federation

If you need more control of the accounts for your enterprise members on GitHub, you can use Enterprise Managed Users. With Enterprise Managed Users, you provision and manage accounts for your enterprise members on GitHub using your IdP. Each member signs into an account that you create, and your enterprise manages the account. Contributions outside the enterprise are restricted. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).

{% elsif ghes %}

The following authentication methods are available for GitHub Enterprise Server.

* [Built-in authentication](#built-in-authentication)
* [External authentication](#external-authentication)

### Built-in authentication

When you use built-in authentication for your GitHub Enterprise Server instance, each person creates a personal account from an invitation or by signing up.
 To access your instance, people authenticate with the credentials for the account. For more information, see [Configuring Built In Authentication](https://docs.github.com/en/admin/managing-iam/using-built-in-authentication/configuring-built-in-authentication).

### External authentication

If you use an external directory or identity provider (IdP) to centralize access to multiple web applications, you may be able to configure external authentication for your GitHub Enterprise Server instance. For more information, see the following articles.

* [Using Cas For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/using-cas-for-enterprise-iam)
* [Using Ldap For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/using-ldap-for-enterprise-iam)
* [Using Saml For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam)

> [!NOTE]
> You can use either SAML or LDAP, but not both.


If you choose to use external authentication, you can also configure fallback authentication for people who don't have an account on your external authentication provider. For example, you may want to grant access to a contractor or machine user. For more information, see [Allowing Built In Authentication For Users Outside Your Provider](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/allowing-built-in-authentication-for-users-outside-your-provider).

{% endif %}

## How does provisioning work?



If you use [authentication through {% ifversion ghes %}your GitHub Enterprise Server instance with additional SAML access restriction](#authentication-through-githubcom-with-additional-saml-access-restriction), people create personal accounts on GitHub.com, and you can grant those personal accounts access to resources in your enterprise. You do not provision accounts.

Alternatively, if you use [Enterprise Managed Users](#authentication-with-enterprise-managed-users-and-federation), you must configure your IdP to provision user accounts within your enterprise on your GitHub Enterprise Server instance using System for Cross-domain Identity Management (SCIM). For more information, see [Provisioning User Accounts With Scim](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim).

{% elsif ghes %}

If you configure built-in authentication, CAS, LDAP, or SAML, GitHub Enterprise Server creates a user account when an authorized person signs into the instance, or "just in time" (JIT). Optionally, if you use SAML, you can provision user accounts from your identity provider (IdP) using SCIM. For more information, see [User Provisioning With Scim On Ghes](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes).

{% endif %}



## Which IdPs are supported?

If you choose to create an enterprise that uses personal accounts on GitHub.com, you can configure additional authentication with an external identity management system that adheres to the SAML 2.0 standard. GitHub also officially supports and tests some identity management systems. For more information, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#supported-identity-providers).

GitHub partners with some developers of identity management systems to provide a "paved-path" integration with Enterprise Managed Users. To simplify your configuration and ensure full support, **use a single partner IdP for both authentication and provisioning.**
 If you use a partner identity provider (IdP), you can configure one application on your IdP to provide authentication and provisioning. The IdP must support the SAML 2.0 standard. Alternatively, if you use Entra ID (previously known as Azure AD), you can configure OpenID Connect (OIDC) authentication. If you don't use a partner IdP, or if you only use a partner IdP for authentication, you can integrate IdPs that implement the SAML 2.0 and System for Cross-domain Identity Management (SCIM) 2.0 standards. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users#about-authentication-and-user-provisioning).




## Further reading

* [Enterprise Accounts](https://docs.github.com/en/admin/concepts/enterprise-fundamentals/enterprise-accounts)

* [Can I Create Accounts For People In My Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)
