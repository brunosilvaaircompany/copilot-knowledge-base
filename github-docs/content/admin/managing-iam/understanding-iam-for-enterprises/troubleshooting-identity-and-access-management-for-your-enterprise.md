# Troubleshooting identity and access management for your enterprise

## Viewing external identity information for a user

If a user is unable to successfully authenticate using SAML, it may be helpful to view information about the single sign-on identity that's linked to the user's account on GitHub. For more information, see [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity).



## Username conflicts

If your enterprise uses Enterprise Managed Users, GitHub normalizes the SCIM `userName` attribute value that is sent by an identity provider (IdP) in a SCIM API call to create each person's username on GitHub. If multiple accounts are normalized into the same GitHub username, a username conflict occurs, and only the first user account is created. For more information, see [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).



## Errors when switching authentication configurations

If you're experiencing problems while switching between different authentication configurations, such as changing your SAML SSO configuration from an organization to an enterprise account or migrating from SAML to OIDC for Enterprise Managed Users, ensure you're following our best practices for the change.

* [Switching Your Saml Configuration From An Organization To An Enterprise Account](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)
* [Migrating From Saml To Oidc](https://docs.github.com/en/admin/managing-iam/reconfiguring-iam-for-enterprise-managed-users/migrating-from-saml-to-oidc)
* [Migrating Your Enterprise To A New Identity Provider Or Tenant](https://docs.github.com/en/admin/managing-iam/reconfiguring-iam-for-enterprise-managed-users/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)



## Accessing your enterprise when SSO is not available

When a configuration error or an issue with your identity provider IdP prevents you from using SSO, you can use a recovery code to access your enterprise. For more information, see [Accessing Your Enterprise Account If Your Identity Provider Is Unavailable](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).

## SCIM provisioning errors



To avoid exceeding GitHub's rate limit, do not assign more than 1,000 users per hour to the SCIM integration on your IdP. If you use groups to assign users to the IdP application, do not add more than 1,000 users to each group per hour. If you exceed these thresholds, attempts to provision users may fail with a "rate limit" error. You can review your IdP logs to confirm if attempted SCIM provisioning or push operations failed due to a rate limit error. The response to a failed provisioning attempt will depend on the IdP.
{% elsif ghes %}
A site administrator may have enabled API rate limits on your instance. If you exceed these thresholds, attempts to provision users may fail with a "rate limit" error. You can review your IdP logs to confirm if attempted SCIM provisioning or push operations failed due to a rate limit error. The response to a failed provisioning attempt will depend on the IdP.




Microsoft Entra ID (previously known as Azure AD) will retry SCIM provisioning attempts automatically during the next Entra ID sync cycle. The default SCIM provisioning interval for Entra ID is 40 minutes. For more information about this retry behavior, see the [Microsoft documentation](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#errors-and-retries) or contact Microsoft support if you need additional assistance.

Okta will retry failed SCIM provisioning attempts with manual Okta admin intervention. For more information about how an Okta admin can retry a failed task for a specific application, see the [Okta documentation](https://support.okta.com/help/s/article/How-to-retry-failed-tasks-for-a-specific-application?language=en_US) or contact Okta support.

In an enterprise with managed users where SCIM is generally functioning properly, individual user SCIM provisioning attempts sometimes fail. Users will be unable to sign in until their account is provisioned to GitHub. These individual SCIM user provisioning failures result in an HTTP 400 range status code and are typically caused by issues with username normalization or username conflicts, where another user with the same normalized username already exists in the enterprise. See [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).

## SAML authentication errors

If users are experiencing errors when attempting to authenticate with SAML, see [Troubleshooting Saml Authentication](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication).



## SAML and SCIM data mapping errors

If you use SAML with SCIM on your GitHub Enterprise Server instance, and a user's SAML data does not match to an existing SCIM provisioned identity, GitHub will return an error.

For Entra ID, the error will look like:

![Screenshot of an Entra ID SAML and SCIM data mapping error.](/assets/images/help/saml/entra-id-saml-scim-mapping-error.png)

For all other identity providers, the error will look like:

![Screenshot of an Okta SAML and SCIM data mapping error.](/assets/images/help/saml/okta-saml-scim-mapping-error.png)

When this error occurs, please follow the steps below:

1. Ensure that a SCIM identity has been provisioned for the user by searching through the users on your instance. For more information on how to find SCIM provisioned users on your instance, please see [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-account-type-saml-and-scim).
    * If the user has not been provisioned yet, it is either because the identity provider has not yet sent a provisioning request, or the provisioning request failed. Enterprise administrators can use their [audit log](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#external_identity) events to determine which of these two scenarios they are impacted by. For more information, please see [Provisioning Users And Groups With Scim Using The Rest API](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api#troubleshooting-scim-provisioning).
1. If the user has been successfully provisioned on your instance, you will need to ensure that the value for the SAML attribute listed in the error message matches the value of the listed SCIM attribute. To find the value for the SCIM attribute, please see [Viewing And Managing A Users Saml Access To Your Enterprise?Search Overlay Input=Saml+Identity&Search Overlay Ask Ai=True](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise?search-overlay-input=saml+identity&search-overlay-ask-ai=true#viewing-a-linked-identity).
    * For example, to troubleshoot the screenshot above, we would look at the user's SCIM "External ID" value. Using that value, we would ensure that the user has the correct value set with the Identity Provider.

For more information on how GitHub maps SAML and SCIM data for users, please see [Scim?Apiversion=2022 11 28](https://docs.github.com/en/rest/enterprise-admin/scim?apiVersion=2022-11-28#mapping-of-saml-and-scim-data).





## Conflicting SAML identity errors

When users attempt to authenticate with your SAML identity provider (IdP) to access a GitHub organization or enterprise for the first time, they may encounter the following error message.

> Your GitHub user account [GitHub username] is currently unlinked. However, you are attempting to authenticate with your Identity Provider using [IdP user account] SAML identity which is already linked to a different GitHub user account in the [organization/enterprise]. Please reach out to one of your GitHub [organization/enterprise] owners for assistance.

If the IdP is Entra ID, the error message will include the `User Object ID` of the linked identity in Entra ID, which GitHub refers to as the `External ID`.

This error message occurs because an external identity can only be linked to a single GitHub user account within an organization or enterprise.

### Identifying the user with a conflicting identity

When users contact you with this error, you can run through the following steps to identify the conflicting accounts.

1. Use the GitHub GraphQL API to determine which user is linked to the conflicting external identity.
   * If SAML is configured at the GitHub **organization** level: an organization owner must query the existing external identities at the organization level and filter them by the SAML `NameID` of the IdP account that the user is authenticating with when this error occurs. See the [org-saml-identities-filtered-by-nameid-username.graphql](https://github.com/github/platform-samples/blob/master/graphql/queries/org-saml-identities-filtered-by-nameid-username.graphql) sample in the `platform-samples` repository.
   * If SAML is configured at the GitHub **enterprise** level: an enterprise owner must query the existing external identities at the enterprise level and filter them by the SAML `NameID` of the IdP account that the user is authenticating with when this error occurs. See the [enterprise-saml-identities-filtered-by-nameid.graphql](https://github.com/github/platform-samples/blob/master/graphql/queries/enterprise-saml-identities-filtered-by-nameid.graphql) sample in the `platform-samples` repository.
1. If you identified a GitHub user associated with the conflicting external identity, to confirm if the user is still active in the enterprise and any organizations within it, an enterprise owner can follow the steps in [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members).

### Resolving the conflict

When you have followed the steps to identify conflicting accounts, there are various resolution options depending on your findings. If you encounter issues when attempting to follow these steps or have questions, you can open a GitHub support ticket using the GitHub Support portal.

* [Conflicting GitHub user no longer needs access](#conflicting-github-user-no-longer-needs-access)
* [Conflicting GitHub user still needs access](#conflicting-github-user-still-needs-access)
* [No conflicting GitHub user found](#no-conflicting-github-user-found)

#### Conflicting GitHub user no longer needs access

If there is a GitHub user account associated with the conflicting external identity that **no longer needs access** to the GitHub organization or enterprise, remove them as a member. If the user is removed properly, this should also remove their linked SAML identity, and linked SCIM identity if this exists at the organization level.
* If you **use SCIM provisioning** to manage organization membership, you must deprovision the user from your IdP via SCIM, rather than following the steps on GitHub. Otherwise, the user's linked SAML and SCIM identity will remain in the organization, which may continue to cause the error.
* If **don't use SCIM provisioning** to manage organization membership, see [Removing A Member From Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization) or [Removing A Member From Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise). Make sure to also remove the user's access from the GitHub app for the organization or enterprise in your IdP.

To confirm that a SAML or SCIM identity has been successfully removed from a GitHub organization for a user, see [Troubleshooting Identity And Access Management For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization#auditing-organization-members-on-github).

#### Conflicting GitHub user still needs access

If there is a GitHub user account associated with the conflicting external identity and this user **still needs access** to the organization or enterprise, you will need to either **change the linked identity** for the user account or have the user who is receiving the error **authenticate with a different IdP identity**.
* If you **use SCIM provisioning** to manage membership of an organization and you need to change the external identity that is linked to the member's GitHub account, deprovision then reprovision the user from your IdP (for example, unassign and reassign the user to the app).
  * When the IdP user is deprovisioned, their GitHub account and linked SAML/SCIM identity will be removed from the GitHub organization.
  * When the IdP user is reprovisioned to the GitHub organization, a new pending organization invitation and new unlinked SCIM identity will be created. This will allow the user to sign in with this GitHub user account, authenticate via SAML, and link the new IdP identity to their account. These steps will help ensure that both the new SAML and SCIM identity are properly linked to the GitHub user account in the organization.
* If you **don't use SCIM provisioning** to manage organization membership, or if SAML is configured at the enterprise level, you can revoke the linked external identity for the user by following the steps in one of the following articles:
  * [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)
  * [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)

#### No conflicting GitHub user found

If there is no GitHub user account associated with the conflicting external identity, you can revoke the external identity.

* If you **use SCIM provisioning** to manage membership of the organization, remove the stale, unlinked identity from your IdP (for example, unassign the user from the IdP app).
  * If the IdP does not send the appropriate SCIM API call to GitHub, the identity will remain in the organization, which may continue to cause the error.
  * To confirm that a SAML or SCIM identity has been successfully removed from a GitHub organization for a user, see [Troubleshooting Identity And Access Management For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization#auditing-organization-members-on-github).
* If you **don't use SCIM provisioning** to manage membership of the organization, to revoke the linked external identity, navigate to one of the following URLs below to revoke the external identity. Replace `USERNAME` with the GitHub username of the user who cannot sign in, and `ORGANIZATION` or `ENTERPRISE` with the appropriate value.
  * `https://github.com/orgs/ORGANIZATION/people/USERNAME/sso`
  * `https://github.com/enterprises/ENTERPRISE/people/USERNAME/sso`




## Further reading


* [Troubleshooting Team Membership With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/troubleshooting-team-membership-with-identity-provider-groups)
{% elsif ghec %}
* [Troubleshooting Team Membership With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/troubleshooting-team-membership-with-identity-provider-groups)
* [Troubleshooting Identity And Access Management For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)
