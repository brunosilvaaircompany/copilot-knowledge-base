# Choosing an enterprise type for GitHub Enterprise Cloud

**Before** you create your enterprise account, you must choose an enterprise type:

* Enterprise with personal accounts
* Enterprise with managed users

To decide which is best for your enterprise, ask yourself the following questions.

## Do you want to control users' accounts?

Enterprise Managed Users may be right for your enterprise if you **don't want enterprise members to use their own personal accounts** to access your enterprise's resources.

### Managed users

Enterprise Managed Users provides a true SSO experience for users:
* You provision the accounts for your users.
* You ensure that user accounts conform with your company identity, by controlling usernames and email addresses.
* Users must authenticate with your identity management system, using SAML or OIDC.

If you currently require your users to create a new personal account on GitHub.com to contribute to your company's resources, Enterprise Managed Users might be a better alternative.

### Personal accounts

If you do not choose Enterprise Managed Users:
* Each user must create, manage, and sign in to a **personal account** on GitHub.com.
* You can configure SAML authentication so that users must **also** authenticate to your external identity management system. GitHub links the user's personal account to an external identity on the identity management system.
* User provisioning is not available. You can use System for Cross-domain Identity Management (SCIM) to provision **access** to individual organizations.

Consider personal accounts if using your external identity management system as the source of truth for user and access management would add too much complexity. For example, you do not have an established process for onboarding new users in the system.

## Do you need to choose where your data is stored?

To help you meet compliance requirements, GitHub Enterprise Cloud includes the option to store your enterprise's code and data in a specific region, on your own subdomain of GHE.com. See [About GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency).

If you adopt GitHub Enterprise Cloud with data residency, you **must** use Enterprise Managed Users.

## Is your external identity management system supported?

Consider whether you already use, or can adopt, a supported identity management system.

### Managed users

GitHub partners with some developers of identity management systems to provide a "paved-path" integration with Enterprise Managed Users, which includes both authentication and provisioning.

If you cannot use a paved-path integration, you can use another identity management system that **meets our guidelines**.

For full details, see [Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users#identity-management-systems).

### Personal accounts

You can use any external identity management system that adheres to the **SAML 2.0** standard.

GitHub officially supports and tests some systems. See [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#supported-identity-providers).

## Do you need public repositories, gists, or GitHub Pages sites?

To prevent enterprise members from accidentally leaking corporate-owned content to the public, Enterprise Managed Users imposes **strong restrictions** on what users can do.
* Managed user accounts cannot create public repositories, gists of any visibility, or GitHub Pages sites that are visible outside the enterprise.
* For a full list of restrictions, see [Abilities And Restrictions Of Managed User Accounts](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts).

Review the restrictions with your users, and confirm whether they will hinder your existing workflows. If so, an enterprise with personal accounts may be a better choice.

## Do you require collaboration outside of your enterprise?

Managed user accounts can only contribute to repositories within your enterprise. If your developers must contribute to repositories outside of your enterprise (including private repositories), Enterprise Managed Users may not be right for you.

For a managed user to collaborate outside your enterprise, they must also maintain a separate, personal account. The complexity of regularly switching between accounts can increase the risk of mistakenly leaking internal code to the public. For details of the required workflow, see [Getting Started With Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users#support-developers-with-multiple-user-accounts).

## Can your enterprise tolerate migration costs?

If you already have an enterprise that uses personal accounts on GitHub.com, adoption of Enterprise Managed Users requires **migration to a new enterprise account**. To discuss this process, contact [GitHub's Sales team](https://enterprise.github.com/contact).

The migration process may require time or cost from your team. Confirm that this migration process is acceptable to your business and your users. If not, an enterprise with personal accounts may be the better choice.

## Next steps

When you have chosen an enterprise type, you're ready to create an enterprise account by starting a trial. See [Setting Up A Trial Of GitHub Enterprise Cloud](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).
