# Browsing security advisories in the GitHub Advisory Database



## Accessing an advisory in the GitHub Advisory Database

You can access any advisory in the GitHub Advisory Database.

1. Navigate to [https://github.com/advisories](https://github.com/advisories?ref_product=security-advisories&ref_type=engagement&ref_style=text).
1. Optionally, to filter the list of advisories, use the search field or the drop-down menus at the top of the list.

   > [!NOTE]
   > You can use the sidebar on the left to explore GitHub-reviewed and unreviewed advisories separately, or to filter by ecosystem.

1. Click an advisory to view details. By default, you will see GitHub-reviewed advisories for security vulnerabilities. To show malware advisories, use `type:malware` in the search bar.

The database is also accessible using the GraphQL API. By default, queries will return GitHub-reviewed advisories for security vulnerabilities unless you specify `type:malware`. For more information, see the [Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads#security_advisory).

Additionally, you can access the GitHub Advisory Database using the REST API. For more information, see [Global Advisories](https://docs.github.com/en/rest/security-advisories/global-advisories).

## Editing an advisory in the GitHub Advisory Database

You can suggest improvements to any advisory in the GitHub Advisory Database. For more information, see [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database).

## Searching the GitHub Advisory Database

You can search the database, and use qualifiers to narrow your search. For example, you can search for advisories created on a certain date, in a specific ecosystem, or in a particular library.

Date formatting must follow the [ISO8601](http://en.wikipedia.org/wiki/ISO_8601) standard, which is `YYYY-MM-DD` (year-month-day).
 You can also add optional time information `THH:MM:SS+00:00` after the date, to search by the hour, minute, and second. That's `T`, followed by `HH:MM:SS` (hour-minutes-seconds), and a UTC offset (`+00:00`).


When you search for a date, you can use greater than, less than, and range qualifiers to further filter results. For more information, see [Understanding The Search Syntax](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).


| Qualifier  | Example |
| ---------- | ------- |
| `type:reviewed`| [`type:reviewed`](https://github.com/advisories?query=type%3Areviewed) will show GitHub-reviewed advisories for security vulnerabilities. |
| `type:malware` | [`type:malware`](https://github.com/advisories?query=type%3Amalware) will show malware advisories. |
| `type:unreviewed`| [`type:unreviewed`](https://github.com/advisories?query=type%3Aunreviewed) will show unreviewed advisories. |
| `GHSA-ID`| [`GHSA-49wp-qq6x-g2rf`](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this GitHub Advisory Database ID. |
| `CVE-ID`| [`CVE-2020-28482`](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number. |
| `ecosystem:ECOSYSTEM`| [`ecosystem:npm`](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) will show only advisories affecting npm packages. |
| `severity:LEVEL`| [`severity:high`](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) will show only advisories with a high severity level. |
| `affects:LIBRARY`| [`affects:lodash`](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) will show only advisories affecting the lodash library. |
| `cwe:ID`| [`cwe:352`](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number. |
| `credit:USERNAME`| [`credit:octocat`](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account. |
| `sort:created-asc`| [`sort:created-asc`](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) will sort by the oldest advisories first. |
| `sort:created-desc`| [`sort:created-desc`](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) will sort by the newest advisories first. |
| `sort:updated-asc`| [`sort:updated-asc`](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) will sort by the least recently updated first. |
| `sort:updated-desc`| [`sort:updated-desc`](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) will sort by the most recently updated first. |
| `is:withdrawn`| [`is:withdrawn`](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) will show only advisories that have been withdrawn. |
| `created:YYYY-MM-DD`| [`created:2021-01-13`](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) will show only advisories created on this date. |
| `updated:YYYY-MM-DD`| [`updated:2021-01-13`](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) will show only advisories updated on this date. |

A `GHSA-ID` qualifier is a unique ID that we at GitHub automatically assign to every advisory in the GitHub Advisory Database. For more information about these identifiers, see [About the GitHub Advisory Database](/code-security/concepts/vulnerability-reporting-and-management/github-advisory-database#ghsa-ids).

## Viewing your vulnerable repositories

For any GitHub-reviewed advisory in the GitHub Advisory Database, you can see which of your repositories are affected by that security vulnerability or malware. To see a vulnerable repository, you must have access to Dependabot alerts for that repository. For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).

1. Navigate to [https://github.com/advisories](https://github.com/advisories?ref_product=security-advisories&ref_type=engagement&ref_style=text).
1. Click an advisory.
1. At the top of the advisory page, click **Dependabot alerts**.
   ![Screenshot of a "global security advisory". The "Dependabot alerts" button is highlighted with an orange outline.](/assets/images/help/security/advisory-database-dependabot-alerts.png)
1. Optionally, to filter the list, use the search bar or the drop-down menus. The "Organization" drop-down menu allows you to filter the Dependabot alerts per owner (organization or user).
1. For more details about the advisory, and for advice on how to fix the vulnerable repository, click the repository name.



## Accessing the local advisory database on GitHub Enterprise Server

If your site administrator has enabled GitHub Connect for your instance, you can also browse reviewed advisories locally. For more information, see [About GitHub Connect](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/about-github-connect).

You can use your local advisory database to check whether a specific security vulnerability is included, and therefore whether you'd get alerts for vulnerable dependencies. You can also view any vulnerable repositories.

1. Navigate to `https://HOSTNAME/advisories`.
1. Optionally, to filter the list, use any of the drop-down menus.

   > [!NOTE]
   > Only reviewed advisories will be listed. Unreviewed advisories can be viewed in the GitHub Advisory Database on GitHub.com. For more information, see [Accessing an advisory in the GitHub Advisory Database](#accessing-an-advisory-in-the-github-advisory-database).

1. Click an advisory to view details. By default, you will see GitHub-reviewed advisories for security vulnerabilities. To show malware advisories, use `type:malware` in the search bar.

You can also suggest improvements to any advisory directly from your local advisory database. For more information, see [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database#editing-advisories-from-your-github-enterprise-server-instance).

### Viewing vulnerable repositories for your instance


Enterprise owners must enable Dependabot alerts for {% ifversion ghes %}your GitHub Enterprise Server instance before you can use this feature. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).



In the local advisory database, you can see which repositories are affected by each security vulnerability or malware. To see a vulnerable repository, you must have access to Dependabot alerts for that repository. For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).

1. Navigate to `https://HOSTNAME/advisories`.
1. Click an advisory.
1. At the top of the advisory page, click **Dependabot alerts**.
   ![Screenshot of a "global security advisory". The "Dependabot alerts" button is highlighted with an orange outline.](/assets/images/help/security/advisory-database-dependabot-alerts.png)
1. Optionally, to filter the list, use the search bar or the drop-down menus. The "Organization" drop-down menu allows you to filter the Dependabot alerts per owner (organization or user).
1. For more details about the advisory, and for advice on how to fix the vulnerable repository, click the repository name.

{% endif %}
