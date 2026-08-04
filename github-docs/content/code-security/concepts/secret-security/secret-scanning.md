# Secret scanning

When credentials like API keys and passwords are committed to repositories as hardcoded secrets, they become targets for unauthorized access. Secret scanning automatically detects credential leaks so you can secure them before they're exploited.



> [!TIP]
> At any time, you can run a free assessment of your organization's code for leaked secrets. 
>
> To generate a report, open the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab for your organization, display the **{% octicon "key" aria-hidden="true" aria-label="key" %} Assessments** page, then click **Scan your organization**
.



## How secret scanning protects your code

Secret scanning scans your entire Git history on all branches of your repository for hardcoded credentials, including API keys, passwords, tokens, and other known secret types. This helps you identify secret sprawl, the uncontrolled proliferation of credentials across repositories, before it becomes a security risk. GitHub also periodically rescans repositories when new secret types are added.

GitHub also automatically scans:

* Descriptions and comments in issues
* Titles, descriptions, and comments, in open and closed _historical_ issues
* Titles, descriptions, and comments in pull requests
* Titles, descriptions, and comments in GitHub Discussions
* Wikis
* Secret gists



### Secret scanning alerts and remediation

When secret scanning detects a credential leak, GitHub generates an alert on your repository's **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab with details about the exposed credential.

When you receive an alert, rotate the affected credential immediately to prevent unauthorized access. While you can also remove secrets from your Git history, this is time-intensive and often unnecessary if you've already revoked the credential.



### Partner integration

GitHub partners with a large variety of service providers to validate detected secrets. When a partner secret is detected, we notify the provider so they can take action, such as revoking the credential. Partner secrets are reported directly to the provider and aren't displayed in your repository alerts. For more information, see [Secret Scanning Partner Program](https://docs.github.com/en/code-security/tutorials/secret-scanning-partner-program).



## Customizability

Beyond the default detection of partner and provider secrets, you can expand and customize secret scanning to fit your needs.

* **Generic patterns.** Expand detection to secrets that aren't tied to a specific service provider, such as private keys, connection strings, and generic API keys.
* **Custom patterns.** Define your own regular expressions to detect organization-specific secrets that aren't covered by default patterns.
* **Validity checks.** Prioritize remediation by checking whether detected secrets are still active.

* **AI-detected secrets.** Use AI to detect unstructured secrets like passwords, or to generate regular expressions for custom patterns.




### About validity checks

Validity checks help you prioritize which secrets to remediate first by verifying whether a detected secret is still active. When you enable validity checks, secret scanning may contact the secret's issuing service to determine if the credential has been revoked.

Validity checks are separate from secret scanning's partner program. While partner secrets are automatically reported to service providers for revocation, validity checks verify the status of secrets you manage in your own alerts. For more information, see [Validity Checks](https://docs.github.com/en/code-security/concepts/secret-security/validity-checks).



## How can I access this feature?

Secret scanning is available for the following repository types:

* **Public repositories**: Secret scanning runs automatically for free.
* **Organization-owned private and internal repositories**: Available with [GitHub Secret Protection](/get-started/learning-about-github/about-github-advanced-security) enabled on GitHub Team or GitHub Enterprise Cloud.
* **User-owned repositories**: Available on GitHub Enterprise Cloud with Enterprise Managed Users. Available on GitHub Enterprise Server when the enterprise has [GitHub Secret Protection](/get-started/learning-about-github/about-github-advanced-security) enabled.




## Public monitoring

In addition to scanning repositories your enterprise owns, you can enable public monitoring to detect secrets leaked by your enterprise members in public repositories across GitHub. This extends secret scanning beyond the repositories your enterprise owns to follow your members' activity across the platform. See [Public Monitoring](https://docs.github.com/en/code-security/concepts/secret-security/public-monitoring).
