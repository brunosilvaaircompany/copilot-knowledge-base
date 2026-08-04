# Can I create accounts for people in my organization?

## About personal accounts

Because you access an organization by logging in to a personal account, each of your team members needs to create their own personal account. After you have usernames for each person you'd like to add to your organization, you can add the users to teams.

Organizations that use GitHub Enterprise Cloud can use SAML single sign-on to centrally manage the access that personal accounts have to the organization's resources through an identity provider (IdP). For more information, see [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" in the GitHub Enterprise Cloud documentation.

You can also consider Enterprise Managed Users. If you choose to use Enterprise Managed Users, you have increased control over your enterprise's members and resources. With Enterprise Managed Users, all members are provisioned and managed through your identity provider (IdP) instead of users creating their own accounts on GitHub. Organization and team membership can be managed using groups on your IdP. Managed user accounts are restricted to their enterprise and are unable to push code, collaborate, or interact with users, repositories, and organizations outside of their enterprise. For more information, see [Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users) in the GitHub Enterprise Cloud documentation.


## Adding users to your organization

1. Provide each person instructions to [create a personal account](/account-and-profile/how-tos/account-management/creating-an-account-on-github).
1. Ask for the username of each person you want to give organization membership to.
1. [Invite the new personal accounts to join](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization) your organization. Use [organization roles](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) and [repository permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) to limit the access of each account.
