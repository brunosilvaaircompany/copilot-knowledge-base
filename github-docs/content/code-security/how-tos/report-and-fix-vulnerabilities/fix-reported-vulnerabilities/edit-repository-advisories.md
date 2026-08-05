# Editing a repository security advisory

> [!NOTE]
> This article applies to repository-level security advisories in a public repository.
> To edit a global advisory in the GitHub Advisory Database, see [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database).


## Editing a security advisory


You can also use the REST API to edit repository security advisories. For more information, see [Repository Advisories](https://docs.github.com/en/rest/security-advisories/repository-advisories).


1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the name of the security advisory you'd like to edit.
1. In the upper-right corner of the details for the security advisory, click **Edit advisory**. This will open the security advisory form in edit mode.
1. Use the **CVE identifier** dropdown menu to specify whether you already have a CVE identifier or plan to request one from GitHub later. If you have an existing CVE identifier, select **I have an existing CVE identifier** to display an **Existing CVE** field, and type the CVE identifier in the field. For more information, see [Repository Security Advisories](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/repository-security-advisories#cve-identification-numbers).

1. In the **Description** field, type a description of the security vulnerability including its impact, any patches or workarounds available, and any references.

1. Under "Affected products", define the ecosystem, package name, affected/patched versions, and vulnerable functions for the security vulnerability that this security advisory describes. If applicable, you can add multiple affected products to the same advisory by clicking **Add another affected product**.

   For information about how to specify information on the form, including affected versions, see [Write Security Advisories](https://docs.github.com/en/code-security/tutorials/fix-reported-vulnerabilities/write-security-advisories).

1. Define the severity of the security vulnerability using the **Severity** dropdown menu. If you want to calculate a CVSS score, select **Assess severity using CVSS** and then select the appropriate values in the **Calculator**. GitHub calculates the score according to the [Common Vulnerability Scoring System Calculator](https://www.first.org/cvss/calculator).

1. Under "Weaknesses", in the **Common weakness enumerator** field, type common weakness enumerators (CWEs) that describe the kinds of security weaknesses that this security advisory reports. For a full list of CWEs, see the [Common Weakness Enumeration](https://cwe.mitre.org/index.html) from MITRE.

1. Optionally, under "Credits", remove existing credits, or use the search box to find additional people you want to credit on the security advisory, then click their username to add them.

   * Use the dropdown menu next to the name of the person you're crediting to assign a credit type. For more information about credit types, see [Create Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/create-repository-advisory#about-credits-for-repository-security-advisories).

     ![Screenshot of a draft security advisory. A dropdown menu, labeled "Choose a credit type," is highlighted with an orange outline.](/assets/images/help/security/security-advisories-choose-credit-type.png)

   * Optionally, to remove someone, click the {% octicon "x" aria-label="The icon to remove a credit to someone" %} next to the credit type.
1. Click **Update security advisory**.

The people listed in the "Credits" section will receive an email or web notification inviting them to accept credit. If a person accepts, their username will be publicly visible once the security advisory is published.


## Further reading

* [Delete Repository Advisories](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/delete-repository-advisories)
