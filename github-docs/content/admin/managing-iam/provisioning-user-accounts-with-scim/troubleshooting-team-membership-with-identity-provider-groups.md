# Troubleshooting team membership with identity provider groups

## About management of team membership with IdP groups

With Enterprise Managed Users, you can manage team and organization membership within your enterprise through your IdP by connecting teams on GitHub with groups on your IdP.
 You can review a list of teams that you've synchronized to IdP groups from your enterprise's settings. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups#viewing-idp-groups-group-membership-and-connected-teams).

GitHub also runs a reconciliation job once per day, which synchronizes team membership with IdP group membership that is stored on GitHub, based on information previously sent from the IdP via SCIM. If this job finds that a user is a member of an IdP group in the enterprise, but they are not a member of the mapped team or its organization, the job will attempt to add the user to the organization and team.

If GitHub is unable to synchronize team membership with a group on your IdP, you can view an error message and troubleshoot the problem.

## Viewing errors for team synchronization with an IdP group


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. In the list of enterprises, click the enterprise you want to view.
1. To review a list of IdP groups, in the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Identity provider**.

1. Under **Identity provider**, click **Groups**.
1. If synchronization for a group is experiencing problems, you'll see a message that reads "Some groups are failing to synchronize to teams. Check that you have available licenses."
1. In the list of IdP groups, click the group you'd like to review.
1. To review the synchronization error for the group, under the name of the group, click **Teams**.

   If a team is unable to sync membership with a group on your IdP, you'll see a description of the problem under the team's name and membership count.



### Error: "Out of sync due to insufficient licenses"

GitHub stores IdP group membership data for {% ifversion ghes %}SCIM-provisioned users at the enterprise level. This data is populated and updated through Group SCIM API calls from your identity provider (IdP).

For IdP groups that are mapped to teams, GitHub runs a **daily reconciliation job** to synchronize team membership with the stored enterprise-level IdP group data. The reconciliation also runs whenever a Group SCIM API call updates group membership, or when an admin links or unlinks a team to a stored group on GitHub.

If your enterprise does not have enough licenses available, GitHub may be unable to complete this synchronization. When this occurs, you’ll see the message:
> "Out of sync due to insufficient licenses"

As a result, the affected team or organization may be missing members.

![Screenshot of the IdP group page. A warning that a team is out of sync due to insufficient licenses is outlined in dark orange.](/assets/images/help/enterprises/emu-group-team-not-synced-missing-licenses.png)

To investigate this issue, review your enterprise's total available licenses, as well as detailed information about which users are consuming licenses and why. For more information, see [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users#organizations-on-github-enterprise-cloud) and [View Enterprise Usage](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage).

#### Resolving the issue

To allow synchronization to complete successfully, make additional enterprise licenses available using one of the following approaches:

* **Free up existing licenses**  
  * Identify which users are consuming licenses and whether they still need access.  
  * Remove users from organizations or IdP groups as needed, depending on how you manage organization and team membership (see [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users)):
    * If you manage your organization's membership via IdP groups, remove users from the relevant group(s).
  * Monitor these enterprise audit log events to track SCIM API calls that update group membership or managed user accounts (see [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise):  
    * `external_group.scim_api_failure` / `external_group.scim_api_success`  
    * `external_identity.scim_api_failure` / `external_identity.scim_api_success`

* **Purchase additional licenses**  
  * If all current users require access, purchase more licenses for your enterprise. For more information, see [Manage User Licenses](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/manage-user-licenses#enterprises-on-github-enterprise-cloud).

{% endif %}

### Error: "Out of sync"

If synchronization of team membership with a group on your IdP fails due to a problem other than licensing, you'll see a message that reads "Out of sync".

![Screenshot of the IdP group page. A warning that a team is out of sync is outlined in dark orange.](/assets/images/help/enterprises/emu-group-team-not-synced-generic.png)

GitHub will try to resolve this problem automatically during the next sync, which occurs at least once daily. You may be able to resolve the problem by unlinking the impacted team from the IdP group and then linking it to the same group again. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups#managing-the-connection-between-an-existing-organization-team-and-an-idp-group).

If the problem persists, contact [GitHub Enterprise Support](https://support.github.com) and provide details about the organization, team, and the IdP group you're experiencing problems with.

## SCIM API incomplete events

If you see an `external_identity.scim_api_incomplete` or `external_group.scim_api_incomplete` event in your enterprise audit log, a SCIM request from your identity provider was received by GitHub but did not complete successfully. No response was sent back to your identity provider, which may report the operation as failed or timed out.

### Resolving the issue

Re-trigger provisioning from your identity provider for the affected user or group. SCIM operations are idempotent, so re-provisioning will not create duplicates.

* **Entra ID:** In the Microsoft Entra admin center, go to **Enterprise Applications** > your SCIM app > **Provisioning**, and use **Provision on demand** for the affected user or group, or **Restart provisioning** for a full sync. For more information, see [On-demand provisioning in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/provision-on-demand) in the Microsoft documentation.
* **Okta:** Re-push the affected group from **Push Groups**, or re-assign the app to the affected user. For more information, see [Push Groups](https://help.okta.com/en-us/content/topics/users-groups/usgr-push-groups.htm) in the Okta documentation.
* **Other identity providers:** Consult your identity provider's documentation for how to re-trigger SCIM provisioning for a specific user or group.

### Checking if the change was applied

If you have audit log streaming configured, you can search your streamed logs for other events with the same `request_id` value from the `scim_api_incomplete` event. For more information, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

A single group SCIM API call can trigger any of the following events during processing:

| Audit log event | Description |
| --- | --- |
| `external_group.provision` | Group was created |
| `external_group.delete` | Group was deleted |
| `external_group.update` | Group metadata was updated |
| `external_group.update_display_name` | Display name was changed |
| `external_group.add_member` | A specific member was added |
| `external_group.remove_member` | A specific member was removed |

To determine which member changes were applied before the interruption, the `add_member` and `remove_member` events are the most useful. They identify the specific member affected. If you find fewer member events than the request intended, the remaining members were not processed.

> [!NOTE]
> The enterprise audit log UI and REST API do not currently support filtering by `request_id`. Audit log streaming to a SIEM or log platform is required for this step.

### Common causes

### Common causes of incomplete events

* Processing time exceeds the connection timeout, often because of large groups.
* A network interruption occurs between the identity provider and GitHub.
* A transient issue occurs on GitHub's infrastructure.
* Your network environment, such as corporate proxies, firewalls, or CASB solutions, interferes with the connection.
* The identity provider's SCIM client timeout settings are too restrictive.

If this event recurs for the same group or user, contact [GitHub Enterprise Support](https://support.github.com) with the `request_id` values from the affected events.

## Large group timeouts

A single SCIM `PUT` or `PATCH` request for a group with a large number of members can exceed the request timeout. When this happens, your identity provider may report the operation as failed, and you may see an `external_group.scim_api_incomplete` event in your enterprise audit log.

The SCIM provisioning rate limits describe a limit of 1,000 users per group per hour, but a single `PUT` or `PATCH` request that changes membership for a large group can also exceed the request timeout before all members are processed. For more information, see [Provisioning Users And Groups With Scim Using The Rest API](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api#understand-rate-limits-on-github).

### Preventing timeouts

* **Break large groups into smaller groups.** If your identity provider supports it, consider splitting groups that frequently time out into multiple smaller groups. This reduces the processing time per SCIM request.
* **Use incremental updates.** Where possible, use `PATCH` requests to add or remove individual members rather than `PUT` requests that replace the entire membership list.
* **Monitor for incomplete events.** Set up audit log streaming and alert on `scim_api_incomplete` events so you can re-trigger provisioning promptly.
