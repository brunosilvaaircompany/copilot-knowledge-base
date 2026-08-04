# License reports reference

Each license report shows information about license users in your enterprise account, for Copilot, or for Advanced Security.

**Cloud users** can download license reports from the {% octicon "law" aria-hidden="true" aria-label="law" %} **Licensing** page under {% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} **Billing & licensing** or using the REST API.



* Enterprise and Advanced Security license users, see [Download License Use](https://docs.github.com/en/billing/how-tos/products/download-license-use)
* GitHub Copilot license users, see [Download Activity Report](https://docs.github.com/en/copilot/how-tos/administer-copilot/download-activity-report)
* Report using the REST API, see [Automate Usage Reporting](https://docs.github.com/en/billing/tutorials/automate-usage-reporting)

If you want to generate a more detailed usage report, see [Gather Insights](https://docs.github.com/en/billing/tutorials/gather-insights).



**GitHub Enterprise Server users** can download license reports for Advanced Security from the **License** page under enterprise settings, see [Download License Use](https://docs.github.com/en/billing/how-tos/products/download-license-use).

## Advanced Security license report

The CSV file contains information about each user who is currently consuming a license. The most recent commit by each of these users to repositories with paid security features enabled is reported.

| Field                     | Description                |
|---------------------------|----------------------------|
| User login                | The GitHub handle of the user. |
| Organization / repository | A repository with paid security features that the user contributed to within the last 90 days. |
| Last pushed date          | The most recent author date of a commit pushed by the user to the repository. |
| Last pushed email         | The email address associated with that commit. |

Data in the "Organization / repository" field will also include `USERNAME/REPOSITORY` data in some situations:

* Your GitHub Enterprise Cloud has Enterprise Managed Users
* Your report is for GitHub Enterprise Server



## Copilot license report

See [Metrics Data](https://docs.github.com/en/copilot/reference/metrics-data)



## GitHub Enterprise Cloud license report

The license usage report for your enterprise is a CSV file that contains the following information about members of your enterprise. Some fields are specific to your GitHub Enterprise Cloud (GHEC) deployment, GitHub Enterprise Server (GHES) connected environments, or your Visual Studio subscriptions (VSS) with GitHub Enterprise.

Reports generated on instances of GitHub Enterprise Cloud with data residency will see `GitHub` in place of `GitHub com`. The `Ghe license active` field will be marked true.

| Field | Description |
|-------|-------------|
| GitHub com login | The username for the user's GHEC account |
| GitHub com name | The display name for the user's GHEC account |
| Enterprise server user ids | For each of the user's GHES accounts, the account's user ID |
| GitHub com user | Whether or not the user has an account on GHEC |
| Enterprise server user | Whether or not the user has at least one account on GHES |
| Visual studio subscription user | Whether or not the user is a Visual Studio subscriber |
| License type | Can be one of: `Visual Studio subscription` or `Enterprise` |
| GitHub com profile | The URL for the user's profile page on GHEC |
| GitHub com member roles | For each of the organizations the user belongs to on GHEC, the organization name and the user's role in that organization (`Owner` or `Member`) separated by a colon. Organizations are delimited by commas.<br><br> For outside collaborators on private repositories, the value will appear as `ORG/REPO:Collaborator`, specifying which organization and repository the collaborator has access to.|
| GitHub com enterprise roles | Can be one of: `Owner`, `Member`, `Outside collaborator` (for an enterprise with personal accounts on GitHub.com), or `Repository collaborator` (for an enterprise that uses managed user accounts) |
| GitHub com verified domain emails | All email addresses associated with the user's GHEC account that match your enterprise's verified domains |
| GitHub com saml name | The SAML username |
| GitHub com orgs with pending invites | All pending invitations for the user's GHEC account to join organizations within your enterprise |
| GitHub com two factor auth | Whether the user has two-factor authentication enabled (true/false) |
| GitHub com two factor auth required by date | The date by which the user is required to enable two-factor authentication |
| GitHub com cost center | The cost center associated with the user for billing purposes |
| GitHub com code security license user | Whether the user consumes a code security license (true/false) |
| GitHub com secret protection license user | Whether the user consumes a secret protection license (true/false) |
| Ghe license active | Whether the user has an active license on GHE.com (true/false) |
| Ghe license start date | The start date of the user's license on GHE.com |
| Ghe license end date | The end date of the user's license on GHE.com |
| Enterprise server primary emails | The primary email addresses associated with each of the user's GHES accounts |
| Enterprise server advanced security user ids | User identifiers for advanced security features on GitHub Enterprise Server |
| Enterprise server code security user ids | User identifiers for code security features on GitHub Enterprise Server |
| Enterprise server secret protection user ids | User identifiers for secret protection features on GitHub Enterprise Server |
| Visual studio license status | Whether the Visual Studio license has been matched to a GitHub user |
| Visual studio subscription email | The email address associated with the user's VSS |
| Total user accounts | The total number of accounts the person has across both GHEC and GHES |

## GitHub Enterprise Server exported license usage (JSON file)

Your GitHub Enterprise Server license usage is a JSON file that is typically used when performing a manual sync of user licenses between GitHub Enterprise Server and GitHub Enterprise Cloud deployments. The file contains the following information specific to your GitHub Enterprise Server environment.

| Field | Description
| ----- | -----------
| Features | The GitHub Connect features that are enabled on your GitHub Enterprise Server instance, and the date and time of enablement.
| Host name | The hostname of your GitHub Enterprise Server instance.
| HTTP only | Whether Transport Layer Security (TLS) is enabled and configured on your GitHub Enterprise Server instance. Can be one of: `True` or `False`.
| License | A hash of your GitHub Enterprise Server license.
| Public key | The public key portion of your GitHub Enterprise Server license.
| Server ID | UUID generated for your GitHub Enterprise Server instance.
| Version | The version of your GitHub Enterprise Server instance.
