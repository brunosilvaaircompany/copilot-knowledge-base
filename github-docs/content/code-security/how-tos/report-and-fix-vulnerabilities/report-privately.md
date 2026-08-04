# Privately reporting a security vulnerability

Owners and administrators of public repositories can enable private vulnerability reporting on their repositories. See [Configure For A Repository](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configure-for-a-repository).


> [!NOTE]
> * If you have admin or security permissions for a public repository, you don’t need to submit a vulnerability report. Instead, create a draft security advisory directly. See [Create Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/create-repository-advisory).
> * Private vulnerability reporting is separate from a repository’s `SECURITY.md` file. You can only report vulnerabilities privately for repositories where this feature is enabled, and you don’t need to follow the instructions in `SECURITY.md`.

If a public repository has private vulnerability reporting enabled, anyone can submit a private vulnerability report to the repository maintainers.

If the repository doesn't have private vulnerability reporting enabled, you need to initiate the reporting process by following the instructions in the security policy for the repository, or by creating an issue asking the maintainers for a preferred security contact. See [Coordinated Disclosure](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/coordinated-disclosure#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github).

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. Click **Report a vulnerability** to open the advisory form.
1. Fill in the advisory details form.

   > [!TIP]
   > In this form, only the title and description are mandatory. (In the general draft security advisory form, which the repository maintainer initiates, specifying the ecosystem is also required.) However, we recommend security researchers provide as much information as possible on the form so that the maintainers can make an informed decision about the submitted report. You can adopt the template used by our security researchers from the GitHub Security Lab, which is available on the [`github/securitylab` repository](https://github.com/github/securitylab/blob/main/docs/report-template.md).

   For more information about the fields available and guidance on filling in the form, see [Create Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/create-repository-advisory) and [Write Security Advisories](https://docs.github.com/en/code-security/tutorials/fix-reported-vulnerabilities/write-security-advisories).

1. At the bottom of the form, click **Submit report**. GitHub will display a message letting you know that maintainers have been notified and that you have a pending credit for this security advisory.

   > [!TIP]
   > When the report is submitted, GitHub automatically adds the reporter of the vulnerability as a collaborator and as a credited user on the proposed advisory.

1. Optionally, click **Start a temporary private fork** if you want to start to fix the issue. Note that only the repository maintainer can merge changes from that private fork into the parent repository.

   ![Screenshot of the bottom of a security advisory. A button, labeled "Start a temporary fork" is outlined in dark orange.](/assets/images/help/security/advisory-start-a-temporary-private-fork-button.png)


The next steps depend on the action taken by the repository maintainer. See [Manage Vulnerability Reports](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/manage-vulnerability-reports).
