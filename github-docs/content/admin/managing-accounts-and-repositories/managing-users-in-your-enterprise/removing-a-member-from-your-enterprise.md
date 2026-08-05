# Removing a member from your enterprise

The recommended offboarding approach for your enterprise depends on whether you use personal accounts or Enterprise Managed Users. To learn more about the effects of offboarding users, see [User Offboarding](https://docs.github.com/en/admin/concepts/identity-and-access-management/user-offboarding).

## Removing a member from an enterprise with personal accounts

When you remove a member from your enterprise, the member is removed from all organizations owned by your enterprise and loses privileges granted through the enterprise, such as roles or licenses.

If the enterprise member you're removing is the last owner of an organization owned by your enterprise, you will become an owner of that organization.

>[!TIP] For automated offboarding, you can also remove users with the GraphQL API. See [Enterprise Admin](https://docs.github.com/en/graphql/reference/enterprise-admin#mutation-removeenterprisemember).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. To the right of the person you want to remove, select the {% octicon "kebab-horizontal" aria-label="Member settings" %} dropdown menu and click **Remove from enterprise**.

   ![Screenshot of a user in the list of enterprise members. A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/business-accounts/remove-member.png)

1. If your enterprise uses SAML SSO, or if any of your organizations use SAML and SCIM provisioning, **remove the user's access to GitHub apps on your identity provider**. A user may be assigned access directly or via an IdP group assigned to the app: make sure to remove the user from both.  For organizations with SCIM provisioning enabled, this should trigger a SCIM deprovisioning call, which ensures that the user's associated SAML and SCIM identities are fully removed from the organization.

   This is a good practice for security, and it also helps ensure that users cannot rejoin the organization using the SAML endpoint when SAML is configured at the organization level (see [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on#adding-members-to-an-organization-using-saml-sso)).

If the user is still listed as an enterprise member, this may be because the user is a member of a GitHub Enterprise Server instance that is linked to your enterprise via GitHub Connect. You will need to remove this user from the GitHub Enterprise Server settings.

## Suspending a user with Enterprise Managed Users

With Enterprise Managed Users, including all enterprises on GHE.com, you manage user access from your identity provider (IdP).

To offboard a user, you will suspend their account rather than removing them from the enterprise completely.

1. Trigger a deprovisioning call for the user. For more information about the types of deprovisioning and the actions that trigger it for different integrations, see [Deprovisioning And Reinstating Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/deprovisioning-and-reinstating-users#triggers-of-soft-deprovisioning).
1. Check if the user's organization membership is managed directly or managed by IdP groups. See [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users).
1. If the user's organization membership is managed directly, remove the user manually from all organizations. See [Removing A Member From Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization).

## Removing an outside collaborator

In enterprises that use personal accounts, you cannot remove outside collaborators using the enterprise settings. However, an organization owner can remove an outside collaborator from all repositories in an organization. See [Removing An Outside Collaborator From An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/removing-an-outside-collaborator-from-an-organization-repository).
