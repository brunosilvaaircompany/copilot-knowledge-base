# Manage GitHub Apps that use your organization's Copilot

> [!NOTE]
> Authentication to Copilot with organization installation access tokens is in public preview and subject to change.


A GitHub App installed on an organization can use its own installation access token to make Copilot requests without a user signing in. The organization that owns the installation pays for the usage.

## Understand access and billing

The app must have the organization **Copilot Requests** permission set to **Read-only**. In this context, **Read-only** does not mean that the app cannot incur costs. The permission authorizes the app to make requests that consume your organization’s AI credits.

This authentication method has the following boundaries:

* It applies to apps installed on an organization. Personal account and enterprise installations cannot use this authentication method.
* The app can use only models allowed by your organization’s Copilot policies.
* Your organization’s Copilot billing and spending controls apply. You cannot create a budget for an individual app or installation.
* You do not need to enable the **Allow use of Copilot CLI billed to the organization** policy. That policy applies to a different authentication path.

This method differs from user authorization, where requests use a user’s identity and are attributed according to that user’s Copilot access. It also differs from GitHub Actions, where workflows use the built-in `GITHUB_TOKEN` and GitHub Actions-specific policies and budgets.

## Review an app before approving access

Only approve apps that you trust to spend your organization’s Copilot usage.

1. Confirm the app’s owner, purpose, and expected usage with the team requesting access.
1. Review all requested organization and repository permissions. Confirm that **Copilot Requests** is an organization permission set to **Read-only**.
1. Review your organization’s model policies and spending controls. If a budget must stop additional usage, make sure **Stop usage when budget limit is reached** is enabled.
1. Install the app or approve its updated permissions.

For instructions on installing an app, see [Installing A GitHub App From A Third Party](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party). If an installed app adds the permission, see [Approving Updated Permissions For A GitHub App](https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app).

## Identify app usage

App attribution is available in CSV exports, not in the **AI usage** view on GitHub.

1. Download an AI usage report. See [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use#downloading-usage-reports).
1. Find rows with your organization in the `organization` column and a value in `app_client_id`.
1. Use the “List app installations for an organization” REST API endpoint and match `app_client_id` from the report to `client_id` in the response. The `app_slug` value identifies the app. See [Orgs](https://docs.github.com/en/rest/orgs/orgs#list-app-installations-for-an-organization).

The `app_client_id` field is empty for usage attributed to a user, GitHub Actions, other GitHub-owned apps, and historical usage from before app attribution was available. For full field definitions, see [Billing Reports](https://docs.github.com/en/billing/reference/billing-reports#usage-report-fields).

## Control app spending

Usage from an organization-installed app counts against the organization’s Copilot budget. A budget that only sends alerts does not stop spending. To block requests after the limit is reached, enable **Stop usage when budget limit is reached**.

You cannot create a budget for one app or installation. For more information about organization-level controls, see [Budgets](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets).

## Block an app's access

To stop requests from one app installation, suspend or uninstall it for your organization. This also blocks the installation's access to other organization resources. See [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#blocking-access).
