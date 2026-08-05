# Exporting membership information for your enterprise

## About export of membership information

You can export aggregated information about your enterprise's members as a membership information report. For example, you may want to perform an audit of your enterprise's current members. You can generate a file containing the report from GitHub's web UI.

The membership information report includes the following information.

* Username and display name details
* Whether the user has two-factor authentication enabled and how secure their 2FA configuration is
* Whether the user is an organization owner or member
* Organizations with pending invitations
* Optionally, additional information that depends on the enterprise's configuration:
  * The user's email addresses for a verified domain
  * The user's SAML `NameID`
  * Username and primary email addresses on any GitHub Enterprise Server instances where GitHub Connect is configured
  * User, subscription email address, and license status for Visual Studio subscriptions with GitHub Enterprise

You can also use GitHub's APIs to retrieve information about your enterprise's members. For more information, see the [GraphQL API](/graphql/reference/users#object-user) and [REST API](/rest/users) documentation.

Organization owners can also export membership information for an organization. For more information, see [Exporting Member Information For Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization).

The membership information report includes everyone associated with the enterprise, regardless of whether they consume a license. This report is useful for reviewing current enterprise membership, permissions, and roles for all individuals currently associated with the enterprise. For information about current and billable licenses, see [View Enterprise Usage](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage).

## Exporting a membership information report

You can download a CSV file containing the membership information report for your enterprise.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. To the right of "Members", click **{% octicon "download" aria-hidden="true" aria-label="download" %} CSV Report**.

   * If your enterprise has less than 1,000 members, the report will download immediately.
   * If your enterprise has 1,000 or more members, you'll soon receive an email with a link to download the report.
