# Controlling user offboarding with the unaffiliated users policy

## About the unaffiliated users policy

By default, when a user loses access to all organizations in your enterprise, the user remains in your enterprise as an unaffiliated user. This can happen when you remove a user from organizations explicitly or remove an organization from your enterprise.

Unaffiliated users retain enterprise-level team membership, enterprise roles, and GitHub Copilot licenses granted directly from the enterprise account.

You can set a policy to instead remove users from the enterprise completely when they are removed from every organization. Removed users will lose all privileges and licenses granted from the enterprise. This is useful if your enterprise offboarding process involves removing users from organizations, whether through organization-level SCIM deprovisioning, the GitHub web UI, or a non-SCIM REST API endpoint. For more information, see the link that corresponds to your use case:
- [About Scim For Organizations](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)
- [Revoking the user's membership](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization#revoking-the-users-membership)
- [Remove organization membership for a user](/rest/orgs/members?apiVersion=2022-11-28#remove-organization-membership-for-a-user) in the REST API documentation.

This policy:

* Applies regardless of how users are removed from an organization.
* Does **not** apply to users with the enterprise owner or enterprise billing manager role. These users remain in the enterprise regardless of their organization membership and the policy setting. For more details on how to remove an enterprise owner or enterprise billing manager from the enterprise, see [Removing A Member From Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise#removing-a-member-from-your-enterprise) and [Inviting People To Manage Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account).

## Setting the policy

>[!NOTE] This policy is not available for Enterprise Managed Users.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. In the left sidebar, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Member privileges**.
1. Under "Unaffiliated user", choose your setting for the policy.
