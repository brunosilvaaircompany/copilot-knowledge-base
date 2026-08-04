# Publishing a repository security advisory



> [!NOTE]
> This article applies to repository-level security advisories in a public repository.
> To edit a global advisory in the GitHub Advisory Database, see [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database).


## Prerequisites

Before you can publish a security advisory or request a CVE identification number, you must create a draft security advisory and provide information about the versions of your project affected by the security vulnerability. See [Create Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/create-repository-advisory) and [Edit Repository Advisories](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-repository-advisories).

## Publishing a security advisory

> [!WARNING]
> Whenever possible, you should add a fix version to a security advisory prior to publishing the advisory. If you don't, the advisory will be published without a fixed version, and Dependabot will alert your users about the issue without offering any safe version to update to.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the name of the security advisory you'd like to publish.
1. Scroll to the bottom of the advisory form and click **Publish advisory**.
    * If you selected "Request CVE ID later", you will see a **Request CVE** button in place of the **Publish advisory** button.

   ![Screenshot of the "Required advisory information has been provided" area of the page. The "Publish advisory" button is outlined in orange.](/assets/images/help/security/publish-advisory-button.png)

  > [!NOTE]
  > Publishing a security advisory deletes the temporary private fork for the security advisory.

## Requesting a CVE identification number (Optional)

If you don't already have a CVE identification number for a security vulnerability in your project, you can request one from GitHub.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the name of the security advisory you'd like to request a CVE identification number for.
1. Scroll to the bottom of the advisory form and click **Request CVE**.

   ![Screenshot of the "Required advisory information has been provided" area of the page. The "Request CVE" button is outlined in dark orange.](/assets/images/help/security/security-advisory-request-cve-button.png)

## Further reading

* [Delete Repository Advisories](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/delete-repository-advisories)
