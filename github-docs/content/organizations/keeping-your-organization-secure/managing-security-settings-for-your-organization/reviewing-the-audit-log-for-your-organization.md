# Reviewing the audit log for your organization

## Accessing the audit log

> [!NOTE]
> Webhooks might be a good alternative to the audit log or API polling for certain use cases. Webhooks are a way for GitHub to notify your server when specific events occur for a repository, organization, or enterprise. Compared to the API or searching the audit log, webhooks can be more efficient if you just want to learn and possibly log when certain events occur on your enterprise, organization, or repository. See [Webhooks](https://docs.github.com/en/webhooks).


The audit log lists events triggered by activities that affect your organization within the last 180 days. Only owners can access an organization's audit log.

By default, only events from the past three months are displayed. To view older events, you must specify a date range with the `created` parameter. See [Understanding The Search Syntax](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Archive" section of the sidebar, click **{% octicon "log" aria-hidden="true" aria-label="log" %} Logs**, then click **Audit log**.


## Searching the audit log

The name for each audit log entry is composed of a category of events, followed by an operation type. For example, the `repo.create` entry refers to the `create` operation on the `repo` category.


Each audit log entry shows applicable information about an event, such as:

* The enterprise or organization an action was performed in
* The user (actor) who performed the action
* The user affected by the action
* Which repository an action was performed in
* The action that was performed
* Which country the action took place in
* The date and time the action occurred

* The SAML SSO and SCIM identity of the user (actor) who performed the action


* For actions outside of the web UI, how the user (actor) authenticated


* Optionally, the source IP address for the user (actor) who performed the action



Note that you cannot search for entries using text. You can, however, construct search queries using a variety of filters. Many operators used when querying the log, such as `-`, `>`, or `<`, match the same format as searching across GitHub. For more information, see [About Searching On GitHub](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/about-searching-on-github).

### Search based on operation

Use the `operation` qualifier to limit actions to specific types of operations. For example:

* `operation:access` finds all events where a resource was accessed.
* `operation:authentication` finds all events where an authentication event was performed.
* `operation:create` finds all events where a resource was created.
* `operation:modify` finds all events where an existing resource was modified.
* `operation:remove` finds all events where an existing resource was removed.
* `operation:restore` finds all events where an existing resource was restored.
* `operation:transfer` finds all events where an existing resource was transferred.


### Search based on repository

Use the `repo` qualifier to limit actions to a specific repository. For example:


* `repo:"my-org/our-repo"` finds all events that occurred for the `our-repo` repository in the `my-org` organization.
* `repo:"my-org/our-repo" repo:"my-org/another-repo"` finds all events that occurred for both the `our-repo` and `another-repo` repositories in the `my-org` organization.
* `-repo:"my-org/not-this-repo"` excludes all events that occurred for the `not-this-repo` repository in the `my-org` organization.

Note that you must include the account name within the `repo` qualifier and put it in quotes or escape the `/` with a `\`; searching for just `repo:our-repo` or `repo:my-org/our-repo` will not work.


* `repo:my-org/our-repo` finds all events that occurred for the `our-repo` repository in the `my-org` organization.
* `repo:my-org/our-repo repo:my-org/another-repo` finds all events that occurred for both the `our-repo` and `another-repo` repositories in the `my-org` organization.
* `-repo:my-org/not-this-repo` excludes all events that occurred for the `not-this-repo` repository in the `my-org` organization.

Note that you must include the account name within the `repo` qualifier; searching for just `repo:our-repo` will not work.


### Search based on the actor

The `actor` qualifier can scope events based on the person or agent that performed the action. For example:

* `actor:octocat` finds all events performed by `octocat`.
* `actor:octocat actor:Copilot` finds all events performed by `octocat` or `Copilot`.
* `-actor:Copilot` excludes all events performed by `Copilot`.

Note that you can only use a GitHub username, not an individual's real name.



### Search based on the action performed

To search for specific events, use the `action` qualifier in your query. Actions listed in the audit log are grouped in different categories. For the full list of events in each category, see [Audit Log Events For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization).

| Category name | Description
|------------------|-------------------
|  |
| `account` | Contains all activities related to your organization account.
| `advisory_credit` | Contains all activities related to crediting a contributor for a security advisory in the GitHub Advisory Database. For more information, see [Repository Security Advisories](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/repository-security-advisories).
|  |
| `auto_approve_personal_access_token_requests` | Contains activities related to your organization's approval policy for fine-grained personal access tokens. For more information, see [Setting A Personal Access Token Policy For Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).
|  |
| `billing` | Contains all activities related to your organization's billing.
| `business` | Contains activities related to business settings for an enterprise. |
|  |
| `code-scanning` | Contains all activities related to your organization's code scanning alerts. |
|  |
| `codespaces` | Contains all activities related to your organization's codespaces. |
| `copilot` | Contains all activities related to your GitHub Copilot Business or GitHub Copilot Enterprise subscription.
|  |
| `dependabot_alerts` | Contains organization-level configuration activities for Dependabot alerts in existing repositories. For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).
| `dependabot_alerts_new_repos` | Contains organization-level configuration activities for Dependabot alerts in new repositories created in the organization.
| `dependabot_security_updates` | Contains organization-level configuration activities for Dependabot security updates in existing repositories. For more information, see [Configure Security Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates).
| `dependabot_security_updates_new_repos` | Contains organization-level configuration activities for Dependabot security updates for new repositories created in the organization.
|  |
| `dependency_graph` | Contains organization-level configuration activities for dependency graphs for repositories. For more information, see [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph).
| `dependency_graph_new_repos` | Contains organization-level configuration activities for new repositories created in the organization.
|  |
| `discussion_post` | Contains all activities related to discussions posted to a team page.
| `discussion_post_reply` | Contains all activities related to replies to discussions posted to a team page.
| `enterprise` | Contains activities related to enterprise settings. |
| `hook` | Contains all activities related to webhooks.
| `integration_installation` | Contains activities related to integrations installed in an account. |
| `integration_installation_request` | Contains all activities related to organization member requests for owners to approve integrations for use in the organization. |
|  |
| `ip_allow_list` | Contains activities related to enabling or disabling the IP allow list for an organization.
| `ip_allow_list_entry` | Contains activities related to the creation, deletion, and editing of an IP allow list entry for an organization.
|  |
| `issue` | Contains activities related to deleting an issue.
|  |
| `marketplace_agreement_signature` | Contains all activities related to signing the GitHub Marketplace Developer Agreement.
| `marketplace_listing` | Contains all activities related to listing apps in GitHub Marketplace. |
|  |
| `members_can_create_pages` | Contains all activities related to managing the publication of GitHub Pages sites for repositories in the organization. For more information, see [Managing The Publication Of GitHub Pages Sites For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization). |
| `org` | Contains activities related to organization membership.
|  |
| `org_credential_authorization` | Contains all activities related to authorizing credentials for use with SAML single sign-on. |
|  |
| `org_secret_scanning_automatic_validity_checks` | Contains organization-level activities related to enabling and disabling automatic validity checks for secret scanning. For more information, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration#creating-a-secret-protection-and-code-security-configuration).
| `org_secret_scanning_custom_pattern` | Contains organization-level activities related to secret scanning custom patterns. For more information, see [Define Custom Patterns](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns).
| `organization_default_label` | Contains all activities related to default labels for repositories in your organization.
| `oauth_application` | Contains all activities related to OAuth apps.
| `packages` | Contains all activities related to GitHub Packages.
|  |
| `payment_method` | Contains all activities related to how your organization pays for GitHub.
|  |
| `personal_access_token` | Contains activities related to fine-grained personal access tokens in your organization. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
| `profile_picture`| Contains all activities related to your organization's profile picture.
| `project` | Contains all activities related to projects.
| `protected_branch` | Contains all activities related to protected branches.
| `repo` | Contains activities related to the repositories owned by your organization.
|  |
| `repository_advisory` | Contains repository-level activities related to security advisories in the GitHub Advisory Database. For more information, see [Repository Security Advisories](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/repository-security-advisories).
| `repository_content_analysis` | Contains all activities related to enabling or disabling data use for a private repository. For more information, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
| `repository_dependency_graph` | Contains repository-level activities related to enabling or disabling the dependency graph for a private repository. For more information, see [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph).
|  |
|  |
| `repository_secret_scanning` | Contains repository-level activities related to secret scanning. For more information, see [Secret Scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning).
|  |
| `repository_secret_scanning_automatic_validity_checks` | Contains repository-level activities related to enabling and disabling automatic validity checks for secret scanning. For more information, see [Enable Secret Scanning](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enable-secret-scanning).
| `repository_secret_scanning_custom_pattern` | Contains repository-level activities related to secret scanning custom patterns. For more information, see [Define Custom Patterns](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns). |
| `repository_secret_scanning_custom_pattern_push_protection`| Contains repository-level activities related to push protection of a custom pattern for secret scanning. For more information, see [Define Custom Patterns](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-a-repository).
| `repository_secret_scanning_push_protection` | Contains repository-level activities related to secret scanning push protection. For more information, see [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).
| `repository_vulnerability_alert` | Contains all activities related to [Dependabot alerts](/code-security/concepts/supply-chain-security/dependabot-alerts).
|  |
| `repository_vulnerability_alerts` | Contains repository-level configuration activities for Dependabot alerts.
|  |
|  |
| `role` | Contains all activities related to [custom repository roles](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization).
|  |
|  |
| `secret_scanning` | Contains organization-level configuration activities for secret scanning in existing repositories. For more information, see [Secret Scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning).
| `secret_scanning_new_repos` | Contains organization-level configuration activities for secret scanning for new repositories created in the organization.
|  |
|  |
| `restore_member` | Triggered when an organization owner reinstates a member. For more information, see [Reinstating A Former Member Of Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).|
| `sponsors`| Contains all events related to sponsor buttons (see [Displaying A Sponsor Button In Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository))
|  |
| `team` | Contains all activities related to teams in your organization.
| `workflows` | Contains activities related to GitHub Actions workflows.

You can search for specific sets of actions using these terms. For example:

* `action:team` finds all events grouped within the team category.
* `-action:hook` excludes all events in the webhook category.

Each category has a set of associated actions that you can filter on. For example:

* `action:team.create` finds all events where a team was created.
* `-action:hook.events_changed` excludes all events where the events on a webhook have been altered.

### Search based on time of action

Use the `created` qualifier to filter events in the audit log based on when they occurred. Date formatting must follow the [ISO8601](http://en.wikipedia.org/wiki/ISO_8601) standard, which is `YYYY-MM-DD` (year-month-day).
 You can also add optional time information `THH:MM:SS+00:00` after the date, to search by the hour, minute, and second. That's `T`, followed by `HH:MM:SS` (hour-minutes-seconds), and a UTC offset (`+00:00`).


When you search for a date, you can use greater than, less than, and range qualifiers to further filter results. For more information, see [Understanding The Search Syntax](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).


For example:

* `created:2014-07-08` finds all events that occurred on July 8th, 2014.
* `created:>=2014-07-08` finds all events that occurred on or after July 8th, 2014.
* `created:<=2014-07-08` finds all events that occurred on or before July 8th, 2014.
* `created:2014-07-01..2014-07-31` finds all events that occurred in the month of July 2014.

> [!NOTE]
> The audit log contains data for the last 180 days.

### Search based on location

Using the qualifier `country`, you can filter events in the audit log based on the originating country. You can use a country's two-letter short code or its full name. Keep in mind that countries with spaces in their name will need to be wrapped in quotation marks. For example:

* `country:de` finds all events that occurred in Germany.
* `country:Mexico` finds all events that occurred in Mexico.
* `country:"United States"` all finds events that occurred in the United States.



### Search based on access token

You can identify all events that were performed by a specific access token. For more information, see [Identifying Audit Log Events Performed By An Access Token](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/identifying-audit-log-events-performed-by-an-access-token).





## Exporting the audit log

You can export the log as JSON data or a comma-separated value (CSV) file with the **Export** dropdown menu.

To filter the results in your export, search by one or more of these supported qualifiers before using the **Export** dropdown menu.

| Qualifier | Example value
|------------|-------------
| `action` | team.create
| `actor` | octocat
| `user` | codertocat
| `org` | octo-org
| `repo` | octo-org/documentation
| `created` | 2019-06-01





> [!NOTE]
> When you export Git events, events that were initiated via the web browser or the REST or GraphQL APIs are not included. For example, when a user merges a pull request in the web browser, changes are pushed to the base branch, but the Git event for that push is not included in the export.




### Export limits



There is a hard limit when exporting the audit logs for your organization. These limits are either:

* **100 MB** compressed file, or
* **10 minutes** export processing time, or
* **both**.

To avoid these limits, we recommend reducing the audit log to a smaller dataset before exporting. For more information, see [Reviewing The Audit Log For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log).

{% ifversion ghec %}
If you intend to review a large dataset of audit logs, we recommend streaming your logs to an external data management system. For more information, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).





### Exported log keys and values

After you export the log, you'll see the following keys and values in the resulting file.

| Key | Example value
|------------|-------------
| `action` | team.create
| `actor` | octocat
| `user` | codertocat
| `actor_location.country_code` | US
| `org` | octo-org
| `repo` | octo-org/documentation
| `created_at` | 1429548104000 (Timestamp shows the time since Epoch with milliseconds.)
| `data.email` | octocat@nowhere.com
| `data.hook_id` | 245
| `data.events` | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]
| `data.events_were` | ["push", "pull_request", "issues"]
| `data.target_login` | octocat
| `data.old_user` | hubot
| `data.team` | octo-org/engineering

{% endif %}

## Using the audit log API



Organizations that use GitHub Enterprise Cloud can interact with the audit log using the GraphQL API and REST API. For more information, see [the GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

. You can use the `read:audit_log` scope to access the audit log via the APIs.



> [!NOTE]
> To use the audit log API, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).


### Using the GraphQL API



To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
* Access to your organization or repository settings
* Changes in permissions
* Added or removed users in an organization, repository, or team
* Users being promoted to admin
* Changes to permissions of a GitHub App
* API requests (must be enabled)



Note that you can't retrieve Git events using the GraphQL API. To retrieve Git events, use the REST API instead. For more information, see [`git` category actions](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#git).


The GraphQL response can include data for up to 90 to 120 days.

For example, you can make a GraphQL request to see all the new organization members added to your organization. For more information, see the [Enterprise Admin](https://docs.github.com/en/graphql/reference/enterprise-admin#interface-auditentry/).



### Using the REST API

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log REST API to keep copies of your audit log data. For more information about the specific events you can access using the REST API, see [Audit Log Events For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization).

The audit log retains Git events for seven days.
 This is shorter than other audit log events, which can be retained for up to seven months.


By default, only events from the past three months are returned. To include older events, you must specify a timestamp in your query.

When you use the REST API to request Git events, events that were initiated via the web browser or the REST or GraphQL APIs are not included. For example, when you merge a pull request in the web browser, changes are pushed to the base branch, but the Git event for that push is not included in the response.

For more information about the audit log REST API, see [Orgs](https://docs.github.com/en/rest/orgs#get-the-audit-log-for-an-organization).


{% endif %}

# Further reading

* [Keeping Your Organization Secure](https://docs.github.com/en/organizations/keeping-your-organization-secure)

* [Exporting Member Information For Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)
