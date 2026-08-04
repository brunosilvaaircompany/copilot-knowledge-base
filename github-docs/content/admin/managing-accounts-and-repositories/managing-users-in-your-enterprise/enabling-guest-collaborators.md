# Enabling guest collaborators

## About guest collaborators

>[!NOTE] The guest collaborator role is only available with Enterprise Managed Users.


You can use the guest collaborator role to grant limited access to vendors and contractors. Guest collaborators:

* Are provisioned by your IdP, like all managed user accounts.
* Can be added as organization members or as collaborators in repositories.
* Cannot access internal repositories in the enterprise, except in organizations where they're added as a member.

The difference between a guest collaborator and a regular user is that when a regular user is added to one organization, they can automatically access **all** internal repositories in the enterprise.


## Enabling guest collaborators in your IdP

If you use **Microsoft Entra ID** (previously known as Azure AD) or **Okta** for authentication, you may need update the Enterprise Managed Users application in your IdP.

* [Enabling guest collaborators with Entra ID](#enabling-guest-collaborators-with-entra-id)
* [Enabling guest collaborators with Okta](#enabling-guest-collaborators-with-okta)

### Enabling guest collaborators with Entra ID

1. Sign into the Microsoft Azure portal.
1. Click **Identity**.
1. Click **Applications**.
1. Click **Enterprise applications**.
1. Click **All applications**.
1. View the details for your Enterprise Managed Users application.
1. In the left sidebar, click **Users and Groups**.
1. View the application registration.

   * If the application registration displays the "Restricted User" or "Guest Collaborator" roles, you're ready to invite guest collaborators to your enterprise.
   * If the application registration does not display the roles, proceed to the next step.
1. In the Azure portal, click **App registrations**.
1. Click **All applications**, then use the search bar to find your application for Enterprise Managed Users.
1. Click your SAML or OIDC application.
1. In the left sidebar, click **Manifest**.
1. Search for the following `id`: `1ebc4a02-e56c-43a6-92a5-02ee09b90824` within the Manifest file:

    * If the `id` is not present, proceed to the next step.
    * If the `id` is present, review the `description` and `displayName` values. If the values are not set to `Guest Collaborator`, you can rename both to be so, and proceed to step 15.

1. Under the `appRoles` object, add the following block:

   ```json
   {
     "allowedMemberTypes": [
       "User"
     ],
     "description": "Guest Collaborator",
     "displayName": "Guest Collaborator",
     "id": "1ebc4a02-e56c-43a6-92a5-02ee09b90824",
     "isEnabled": true,
     "lang": null,
     "origin": "Application",
     "value": null
   },
   ```

   > [!NOTE]
   > The `id` value is critical. If another `id` value is present, the update will fail.

1. Click **Save**.

### Enabling guest collaborators with Okta

To add the guest collaborator role to your Okta application:

1. Navigate to your application for Enterprise Managed Users on Okta.
1. Click **Provisioning**.
1. Click **Go to Profile Editor**.
1. Find "Roles" at the bottom of the profile editor and click the edit icon.
1. Add a new role.

   * For "Display name", type `Guest Collaborator`.
   * For "Value", type `guest_collaborator`.
1. Click **Save**.

## Adding guest collaborators to your enterprise

When guest collaborators are enabled in your IdP, you can use SCIM to provision users with the `guest_collaborator` role.

* If you use a partner IdP, use the "Roles" attribute in the Enterprise Managed Users application.
* If you use the SCIM endpoints of GitHub's REST API to provision users, use the `roles` user attribute.

For more information about partner IdPs and other identity management systems, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users#identity-management-systems).

## Giving guest collaborators access to resources

When you have added a guest collaborator to your enterprise, you can add the user to specific organizations or repositories.

### Add the user to an organization

To give the user access to repositories in an organization, add the user as a **member of the organization**.

* As for all members, the base permission policy for the organization determines whether the user has access to internal and private repositories by default. See [Setting Base Permissions For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization).
* Guest collaborators can be members of IdP groups that are connected to GitHub teams, and will be added to the organization via SCIM, just like other enterprise members. See [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).

### Add the user to a repository

To give the user access to specific repositories, add the user to the repositories as a **repository collaborator**.

This gives the user access to the repository without giving them access to other internal or private repositories in the same organization. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).

## Further reading

* [Tutorial: Configure GitHub Enterprise Managed User for automatic user provisioning](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-provisioning-tutorial) in the Entra ID documentation
* [Configure PingFederate for provisioning and SSO](https://docs.pingidentity.com/integrations/github/github_emu_provisioner/pf_gh_emu_configure_pf_for_provisioning_and_sso.html) in the PingIdentity documentation
* [Configuring Scim Provisioning With Okta](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-with-okta)
* [Provisioning Users And Groups With Scim Using The Rest API](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api)
