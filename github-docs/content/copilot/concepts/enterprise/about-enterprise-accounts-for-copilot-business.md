# About enterprise accounts for Copilot Business

## How can my enterprise use GitHub Copilot only?

To use GitHub Copilot, a user must authenticate to an account on GitHub that has a license for Copilot. You can assign a license to a user through a Copilot Business subscription if they're a member of an organization or enterprise that you administer.

If you don't already manage users through an organization or enterprise, you can create an enterprise account specifically for allocating Copilot Business licenses. This gives you access to enterprise-grade integrations with identity providers for authentication and provisioning, without needing to pay for GitHub Enterprise licenses.

You don't need a special type of enterprise account to do this. In any enterprise account, members who don't belong to an organization don't usually consume a GitHub Enterprise Cloud license, but they can be added to enterprise teams and be assigned a Copilot license directly from the enterprise. See [Abilities Of Roles](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles#unaffiliated-users).

This means that in an enterprise with no organizations, you are only billed for Copilot Business. As soon as a user joins an organization, that user consumes a GitHub Enterprise Cloud license. If your enterprise already contains an organization, its members are already consuming licenses, even if you don't add anyone else. See [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users#organizations-on-github-enterprise-cloud).

> [!NOTE]
> GitHub no longer provisions a special kind of enterprise account for Copilot Business. You can achieve the same result yourself in a standard enterprise account without organizations.

## How will I manage access for users?

When you create your enterprise account, you will choose whether your enterprise members will authenticate using their personal GitHub accounts, or using new accounts that you will create and manage from an external identity management system. The way that you add users to your enterprise and manage license assignment will depend on which you choose.

### Personal accounts

* You'll add users to the enterprise by sending an **invitation** to their personal GitHub account.
* Optionally, you'll **create teams** in the enterprise to scale license management. You can manage membership of the teams on GitHub or with the REST API.
* You'll **assign licenses** to users and teams.
* When users receive a license, they can **authenticate** to GitHub **from their development environment** and gain access to Copilot.
* Optionally, you can configure **SAML single sign-on** (SSO), so that users must authenticate to an external identity system in addition to their personal account.

### Enterprise Managed Users

* You'll add users to the enterprise by **provisioning managed user accounts** from an identity provider (IdP) using SCIM.
* You'll **create teams** in the enterprise to manage which users receive Copilot Business licenses. You can manage membership of the teams from your IdP, on GitHub, or with the REST API.
* When users receive a license, they can use **single sign-on** to authenticate to their GitHub account from **their development environment** and gain access to Copilot.

## Getting started

To get started, see [Set Up A Dedicated Enterprise For Copilot Business](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-a-dedicated-enterprise-for-copilot-business).
