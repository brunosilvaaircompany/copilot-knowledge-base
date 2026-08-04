# Provisioning users and groups with SCIM using the REST API

> [!NOTE] GitHub recommends that you test provisioning in an environment that's isolated from the production data on your IdP and GitHub.






## About IAM for Enterprise Managed Users

If your enterprise on GitHub is created for Enterprise Managed Users, you must configure an external identity management system to provision and maintain user accounts. Your identity management system must offer the following functionality:

* Single sign-on authentication implementing one of the following two single sign-on (SSO) standards:
  * Security Assertion Markup Language (SAML) 2.0
  * OpenID Connect (OIDC), which is only supported if you use Microsoft Entra ID (previously known as Azure AD)
* User lifecycle management with System for Cross-domain Identity Management (SCIM)



When you configure authentication and provisioning for your enterprise, you can either use a partner IdP, or you can use another combination of identity management systems.

* [Using a partner identity provider](#using-a-partner-identity-provider)
* [Using other identity management systems](#using-other-identity-management-systems)

### Using a partner identity provider

Each partner IdP provides a "paved-path" application, which implements both SSO and user lifecycle management. To simplify configuration, GitHub recommends that you use a single partner IdP application for both authentication and provisioning. For more information and a list of partner IdPs, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).

For more information about configuring SCIM provisioning using a partner IdP, see [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).

### Using other identity management systems

If you cannot use a single partner IdP for both authentication and provisioning due to migration overhead, licensing costs, or organizational inertia, you can use another identity management system or combination of systems. The systems must provide authentication using SAML and user lifecycle management using SCIM, and must adhere to GitHub's integration guidelines.

GitHub does not expressly support mixing partner IdPs for authentication and provisioning and does not test all identity management systems. **GitHub's support team may not be able to assist you with issues related to mixed or untested systems.** If you need help, you must consult the system's documentation, support team, or other resources.

>[!IMPORTANT] The combination of **Okta and Entra ID** for SSO and SCIM (in either order) is explicitly **not supported**. GitHub's SCIM API will return an error to the identity provider on provisioning attempts if this combination is configured.


## Prerequisites


* When you began using GitHub Enterprise Cloud, you must have chosen to create an enterprise with managed users. For more information, see [Choose An Enterprise Type](https://docs.github.com/en/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type).

* Before you configure provisioning, you must configure authentication for your users. This configuration requires setup on both your identity management system and GitHub. For more information, see [Configuring Authentication For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users).

* You must enable an open SCIM configuration for your enterprise. For more information, see [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#configuring-provisioning-for-other-identity-management-systems).
* To authenticate requests to the REST API endpoints for SCIM, you must use a personal access token (classic) associated with your enterprise's setup user. The token requires the **scim:enterprise** scope. GitHub recommends that you do not configure an expiration date for the token. See [Getting Started With Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users#create-a-personal-access-token).

* To provision users and groups with GitHub's REST API, your identity management system must support the SCIM 2.0 standard. For more information, see the following RFCs on the IETF website.

   * [RFC 7642: Definitions, Overview, Concepts, and Requirements](https://tools.ietf.org/html/rfc7642)
   * [RFC 7643: Core Schema](https://tools.ietf.org/html/rfc7643)
   * [RFC 7644: Protocol](https://tools.ietf.org/html/rfc7644)

* The user records for the systems that you use for authentication and provisioning must share a unique identifier and satisfy GitHub's matching criteria. For more information, see [Scim](https://docs.github.com/en/rest/enterprise-admin/scim#mapping-of-saml-and-scim-data) in the REST API documentation.

## Best practices for SCIM provisioning with GitHub's REST API

When you configure your identity management system to provision users or groups of users on GitHub, GitHub strongly recommends that you adhere to the following guidelines.

* [Ensure your identity management system is the only source of write operations](#ensure-your-identity-management-system-is-the-only-source-of-write-operations)
* [Send valid requests to REST API endpoints](#send-valid-requests-to-rest-api-endpoints)
* [Provision users before you provision groups](#provision-users-before-you-provision-groups)
* [Validate access for groups on GitHub](#validate-access-for-groups-on-github)
* [Understand rate limits on GitHub](#understand-rate-limits-on-github)
* [Configure audit log streaming](#configure-audit-log-streaming)

* [Limit the scope of the SCIM token](#limit-the-scope-of-the-scim-token)

* [Understand the effects of deprovisioning](#understand-the-effects-of-deprovisioning)

### Ensure your identity management system is the only source of write operations

To ensure that your environment has a single source of truth, you should only programmatically write to the REST API for SCIM provisioning from your identity management system. GitHub strongly recommends that only one system sends `POST`, `PUT`, `PATCH`, or `DELETE` requests to the API.

However, you can safely retrieve information from GitHub's APIs with `GET` requests in scripts or ad hoc requests by an enterprise owner.

> [!WARNING]
> If you use a partner IdP for SCIM provisioning, the application on the IdP must be the only system that makes write requests to the API. If you make ad hoc requests using the `POST`, `PUT`, `PATCH`, or `DELETE` methods, subsequent synchronization attempts will fail, and provisioning won't function properly for your enterprise.

### Send valid requests to REST API endpoints

GitHub's REST API endpoints for provisioning users with SCIM require well-formed requests. Bear in mind the following guidelines:

* Requests that don't match the API's expectations will return a `400 Bad Request` error.
* REST API endpoints for provisioning users with SCIM require a `User-Agent` header. GitHub will reject requests without this header.

* If your enterprise is on GHE.com, ensure you send API requests to the endpoint for your enterprise at `api.SUBDOMAIN.ghe.com`.


### Provision users before you provision groups

SCIM groups are effective for the management of user access at scale. For example, you can use groups on your identity management system to manage team and organization membership on GitHub.

To manage team membership with groups on your identity management system, you must sequentially complete the following steps:

1. Provision user accounts on GitHub.
1. Provision a group on GitHub.
1. Update the membership of the group on your identity management system.
1. Create a team on GitHub that's mapped to the group on your identity management system.

### Validate access for groups on GitHub

If you manage access using groups on your identity management system, you can validate that users get the access you intend. You can use the REST API to compare your system's group memberships with GitHub's understanding of those groups. For more information, see [External Groups](https://docs.github.com/en/rest/teams/external-groups#about-external-groups) and [Teams](https://docs.github.com/en/rest/teams/teams#get-a-team-by-name) in the REST API documentation.

### Understand rate limits on GitHub


To ensure the availability and reliability of the platform, GitHub implements rate limits.

Without considering rate limits, large enterprises onboarding with Enterprise Managed Users for the first time are likely to exceed the limits. 
To avoid exceeding GitHub's rate limit, do not assign more than 1,000 users per hour to the SCIM integration on your IdP. If you use groups to assign users to the IdP application, do not add more than 1,000 users to each group per hour. If you exceed these thresholds, attempts to provision users may fail with a "rate limit" error. You can review your IdP logs to confirm if attempted SCIM provisioning or push operations failed due to a rate limit error. The response to a failed provisioning attempt will depend on the IdP.
{% elsif ghes %}
A site administrator may have enabled API rate limits on your instance. If you exceed these thresholds, attempts to provision users may fail with a "rate limit" error. You can review your IdP logs to confirm if attempted SCIM provisioning or push operations failed due to a rate limit error. The response to a failed provisioning attempt will depend on the IdP.




For more information, see [Rate Limits For The Rest API](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api).

### Configure audit log streaming

The audit log for your enterprise displays details about activity in your enterprise. You can use the audit log to support your configuration of SCIM. For more information, see [Audit Log For An Enterprise](https://docs.github.com/en/admin/concepts/security-and-compliance/audit-log-for-an-enterprise).

Due to the volume of events in this log, GitHub retains the data for 180 days. To ensure that you don't lose audit log data, and to view more granular activity in the audit log, GitHub recommends that you configure audit log streaming. When you stream the audit log, you can optionally choose to stream events for API requests, including requests to REST API endpoints for SCIM provisioning. For more information, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).



### Limit the scope of the SCIM token

For a better security posture, we recommend using a personal access token (classic) with only the `scim:enterprise` scope to limit the token's access to the REST API endpoints required to make SCIM calls.

If you currently use a token with the `admin:enterprise` scope, be aware that this token grants access to all actions on the enterprise. You can swap your token for a new token with just the `scim:enterprise` scope without disruption.



### Understand the effects of deprovisioning

To remove a user's access from GitHub, you can send either a "soft deprovision" or a "hard deprovision" request to your SCIM provider. Hard deprovisioning is an irreversible action that permanently suspends a user's GitHub account.

Before implementing an API integration, ensure you understand the types of deprovisioning and the effects they have. To learn about the different types of deprovisioning, their effects, and the audit log events they generate, see [Deprovisioning And Reinstating Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/deprovisioning-and-reinstating-users).

## Provisioning users with the REST API

To provision, list, or manage users, make requests to the following REST API endpoints. You can read about the associated API endpoints in the REST API documentation and see code examples, and you can review audit log events associated with each request.

Before a person with an identity on your identity management system can sign in to your enterprise, you must create the corresponding user. Your enterprise doesn't require an available license to provision a new user account.

* For an overview of the supported attributes for users, see [SCIM](/rest/enterprise-admin/scim#supported-scim-user-attributes) in the REST API documentation.
* You can view provisioned users in the GitHub UI. For more information, see [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise).
* Enterprise administrators with CLI access can export a full CSV of SCIM provisioned user identities using the [ghe-scim-identities-csv](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-scim-identities-csv) tool.


| Action | Method | Endpoint and more information |  Events in the audit log |
| :- | :- | :- | :- |
| List all provisioned users for your enterprise, which includes all users who are soft-deprovisioned by setting `active` to `false`. | `GET` | [`/scim/v2/enterprises/{enterprise}/Users`](/rest/enterprise-admin/scim#list-scim-provisioned-identities-for-an-enterprise) | N/A |
| Create a user. The API's response includes an `id` field for uniquely identifying the user. | `POST` | [`/scim/v2/enterprises/{enterprise}/Users`](/rest/enterprise-admin/scim#provision-a-scim-enterprise-user) | <ul><li>`external_identity.provision`</li><li>`user.create`</li><li>If request adds the `enterprise_owner` role, `business.add_admin`</li><li>If request adds the `billing_manager` role, `business.add_billing_manager`</li><li>If request succeeds, `external_identity.scim_api_success`</li><li>If request fails, `external_identity.scim_api_failure`</li></ul> |
| Retrieve an existing user in your enterprise using the `id` field from the `POST` request that you sent to create the user. | `GET` | [`/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}`](/rest/enterprise-admin/scim#get-scim-provisioning-information-for-an-enterprise-user) | N/A |
| Update all of an existing user's attributes using the `id` field from the `POST` request that you sent to create the user. Update `active` to `false` to soft-deprovision the user, or `true` to reactivate the user. For more information, see [Soft-deprovisioning users with the REST API](#soft-deprovisioning-users-with-the-rest-api) and [Reactivating users with the REST API](#reactivating-users-with-the-rest-api).
  | `PUT` | [`/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}`](/rest/enterprise-admin/scim#set-scim-information-for-a-provisioned-enterprise-user) | <ul><li>`external_identity.update`, unless soft-deprovisioning or reprovisioning</li><li>If request adds the `enterprise_owner` role, `business.add_admin`</li><li>If request adds the `billing_manager`, `business.add_billing_manager`</li><li>If request removes the `enterprise_owner` role, `business.remove_admin`</li><li>If request removes the `billing_manager` role, `business.remove_billing_manager`</li><li>If request succeeds, `external_identity.scim_api_success`</li><li>If request fails, `external_identity.scim_api_failure`</li></ul>
 |
| Update an individual attribute for an existing user using the `id` field from the `POST` request that you sent to create the user. Update `active` to `false` to soft-deprovision the user, or `true` to reactivate the user. For more information, see [Soft-deprovisioning users with the REST API](#soft-deprovisioning-users-with-the-rest-api) and [Reactivating users with the REST API](#reactivating-users-with-the-rest-api).
 | `PATCH` | [`/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}`](/rest/enterprise-admin/scim#update-an-attribute-for-a-scim-enterprise-user) | <ul><li>`external_identity.update`, unless soft-deprovisioning or reprovisioning</li><li>If request adds the `enterprise_owner` role, `business.add_admin`</li><li>If request adds the `billing_manager`, `business.add_billing_manager`</li><li>If request removes the `enterprise_owner` role, `business.remove_admin`</li><li>If request removes the `billing_manager` role, `business.remove_billing_manager`</li><li>If request succeeds, `external_identity.scim_api_success`</li><li>If request fails, `external_identity.scim_api_failure`</li></ul>
 |
| To permanently suspend an existing user, you can hard-deprovision the user. After hard-deprovisioning, you cannot reactivate the user, and you must provision the user as a new user. For more information, see [Hard-deprovisioning users with the REST API](#hard-deprovisioning-users-with-the-rest-api). | `DELETE` | [`/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}`](/rest/enterprise-admin/scim#delete-a-scim-user-from-an-enterprise) | <ul><li>`external_identity.deprovision`</li><li>`user.remove_email`</li><li>If request succeeds, `external_identity.scim_api_success`</li><li>If request fails, `external_identity.scim_api_failure`</li></ul> |

## Soft-deprovisioning users with the REST API

To prevent a user from signing in to access your enterprise, you can soft-deprovision the user by sending a `PUT` or `PATCH` request to update a user's `active` field to `false` to `/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}`. When you soft-deprovision a user, GitHub obfuscates the user record's `login` and `email` fields, and the user is suspended.

## Reactivating users with the REST API

To allow a soft-deprovisioned user to sign in to access your enterprise, unsuspend the user by sending a `PUT` or `PATCH` request to `/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}` that updates the user's `active` field to `true`.

## Hard-deprovisioning users with the REST API

> [!IMPORTANT] Hard deprovisioning is an irreversible action that permanently suspends a user's GitHub account. See [Understand the effects of deprovisioning](#understand-the-effects-of-deprovisioning).

You can hard-deprovision the user by sending a `DELETE` request to `/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}`. Your enterprise will retain any resources and comments created by the user.

## Provisioning groups with the REST API

To control access to repositories in your enterprise, you can use groups on your identity management system to control organization and team membership for users in your enterprise. You can read about the associated API endpoints in the REST API documentation and see code examples, and you can review audit log events associated with each request.

While your enterprise doesn't require an available license to provision a new user account, if you provision a group that results in the addition of users to an organization, you must have available licenses for those users. If your enterprise only uses Visual Studio subscriptions with GitHub Enterprise, the associated user must be assigned to a subscriber. For more information, see [Visual Studio Subs](https://docs.github.com/en/billing/concepts/enterprise-billing/visual-studio-subs#about-licenses-for-visual-studio-subscriptions-with-github-enterprise-cloud).

* For an overview of the supported attributes for groups, see [SCIM](/rest/enterprise-admin/scim#supported-scim-group-attributes) in the REST API documentation.
* For an overview of audit log events related to groups, see [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#external_group).
* You can view provisioned groups in the GitHub UI. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups#viewing-idp-groups-group-membership-and-connected-teams).

| Action | Method | Endpoint and more information | Related events in the audit log |
| :- | :- | :- | :- |
| List all groups defined for your enterprise. | `GET` | [`/scim/v2/enterprises/{enterprise}/Groups`](/rest/enterprise-admin/scim#list-provisioned-scim-groups-for-an-enterprise) | N/A |
| To define a new IdP group for your enterprise, create the group. The API's response includes an `id` field for uniquely identifying the group. | `POST` | [`/scim/v2/enterprises/{enterprise}/Groups`](/rest/enterprise-admin/scim#provision-a-scim-enterprise-group) | <ul><li>`external_group.provision`</li><li>`external_group.update_display_name`</li><li>If the request included a list of users, `external_group.add_member`</li><li>If request succeeds, `external_group.scim_api_success`</li><li>If request fails, `external_group.scim_api_failure`</li></ul> |
| Retrieve an existing group for your enterprise using the `id` from the `POST` request that you sent to create the group. | `GET` | [`/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}`](/rest/enterprise-admin/scim#get-scim-provisioning-information-for-an-enterprise-group) | N/A |
| Update all of the attributes for an existing group. | `PUT` | [`/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}`](/rest/enterprise-admin/scim#set-scim-information-for-a-provisioned-enterprise-group) | <ul><li>`external_group.update`</li><li>If request updates the group's name, `external_group.update_display_name`</li><li>If request adds a user to the group, `external_group.add_member`</li><li>If request removes a user from the group, `external_group.remove_member`</li><li>If request succeeds, `external_group.scim_api_success`</li><li>If request fails, `external_group.scim_api_failure`</li><li>Additional events may appear in the audit log depending on whether the user is already a member of the organization with the team that you linked to the IdP group. For more information, see [Additional audit log events for changes to IdP groups](#additional-audit-log-events-for-changes-to-idp-groups).</li></ul>
 |
| Update an individual attribute for an existing group. | `PATCH` | [`/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}`](/rest/enterprise-admin/scim#update-an-attribute-for-a-scim-enterprise-group) | <ul><li>`external_group.update`</li><li>If request updates the group's name, `external_group.update_display_name`</li><li>If request adds a user to the group, `external_group.add_member`</li><li>If request removes a user from the group, `external_group.remove_member`</li><li>If request succeeds, `external_group.scim_api_success`</li><li>If request fails, `external_group.scim_api_failure`</li><li>Additional events may appear in the audit log depending on whether the user is already a member of the organization with the team that you linked to the IdP group. For more information, see [Additional audit log events for changes to IdP groups](#additional-audit-log-events-for-changes-to-idp-groups).</li></ul>
 |
| Completely delete an existing group. | `DELETE` | [`/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}`](/rest/enterprise-admin/scim#delete-a-scim-group-from-an-enterprise) | <ul><li>`external_group.delete`</li><li>If the request deletes a group linked to a team in an organization where the user has no other team membership, `org.remove_member`</li><li>If the request deletes a group linked to a team in an organization where the user has other team membership, `team.remove_member`</li><li>If request succeeds, `external_group.scim_api_success`</li><li>If request fails, `external_group.scim_api_failure`</li></ul> |

### Additional audit log events for changes to IdP groups

If you update the members of an existing group using a `PUT` or `PATCH` request to `/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}`, GitHub may add the user to the organization or remove the user from the organization depending on the user's current organization membership. If the user is already a member of at least one team in the organization, the user is a member of the organization. If the user is not a member of any teams in the organization, the user may also not already be a member of the organization.

If your request updates a group linked to a team in an organization where a user is not already a member, in addition to `external_group.update`, the following events appear in the audit log:

* `org.add_member`
* If the request adds a user to a group that's linked to a team in an organization where the user is not already a member, `org.add_member`
* If the request adds the user to a group that's linked to a team in an organization, `team.add_member`

If your request updates a group linked to a team in an organization where a user is already a member, in addition to `external_group.update`, the following events appear in the audit log:

* If the request removes the user from a group that's linked to a team in an organization, and the team is not the last team in the organization where the user is a member, `team.remove_member`
* If the request removes a user from a group that's linked to the last team in an organization where the user is already a member, `org.remove_member`



## Migrating to a new SCIM provider

After you configure SCIM provisioning for your enterprise, you may need to migrate to a new SCIM provider. For more information, see [Migrating Your Enterprise To A New Identity Provider Or Tenant](https://docs.github.com/en/admin/managing-iam/reconfiguring-iam-for-enterprise-managed-users/migrating-your-enterprise-to-a-new-identity-provider-or-tenant).



## Troubleshooting SCIM provisioning

* If your requests to the REST API are rate-limited, you can learn more in [Understand rate limits on GitHub](#understand-rate-limits-on-github).

* All SCIM requests that GitHub receives, with the exception of successful HTTP `GET` requests, will generate an [audit log](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#external_identity) event. These logs will contain useful information about the request outcome, payload information, and any errors. These logs can be used to determine whether or not GitHub received a SCIM request, and troubleshoot API failures.
  * To determine if a user has been provisioned, you can use the following audit log query: `action:external_identity.provision  user:USERNAME_SHORTCODE`
  * If you do not find a user using the query above, you can search for `action:external_identity.scim_api_failure` events on the date that you expected to have received the request.

* If a SCIM request fails and you're unable to determine the cause, check the status of your identity management system to ensure that services were available. Additionally, check GitHub's status page. For more information, see [About GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-github-support#about-github-status).

* If a request to provision a user fails with a `400` error, and the error message in your identity management system's log indicates issues with account ownership or username formatting, review [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).

* After successful authentication, GitHub links the user who authenticated to an identity provisioned by SCIM. The unique identifiers for authentication and provisioning must match. For more information, see [Scim](https://docs.github.com/en/rest/enterprise-admin/scim#mapping-of-saml-and-scim-data). You can also view this mapping on GitHub. See [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity).

* If you manage access using groups on your identity management system, you can troubleshoot using the REST API or web UI for GitHub.

   * You can use the REST API to compare your identity management system's group memberships with GitHub's understanding of those groups. See [External Groups](https://docs.github.com/en/rest/teams/external-groups#about-external-groups) and [Teams](https://docs.github.com/en/rest/teams/teams#get-a-team-by-name).
   * For more information about troubleshooting using the web UI, see [Troubleshooting Team Membership With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/troubleshooting-team-membership-with-identity-provider-groups).

For additional troubleshooting suggestions, see [Troubleshooting Identity And Access Management For Your Enterprise](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/troubleshooting-identity-and-access-management-for-your-enterprise#scim-provisioning-errors).
