# Finding repositories with security alerts using security overview

> [!NOTE]
> The information shown by security overview varies according to your access to repositories and organizations, and according to whether Advanced Security features are used by those repositories and organizations. For more information, see [Security Overview](https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview).


1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. By default, security overview shows alerts for all native GitHub tools. To display alerts for a specific tool, replace `tool:github` in the filter text box:
    * `tool:dependabot` shows only alerts for dependencies identified by Dependabot
    * `tool:secret-scanning` shows only alerts for secrets identified by secret scanning
    * `tool:codeql` shows only alerts for potential security vulnerabilities identified by CodeQL code scanning
1. You can add further filters to show only the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
1. Optionally, use the sidebar on the left to explore alerts for a specific security feature in greater detail. On each page, you can use filters that are specific to that feature to refine your search.
