# Removing a collaborator from a repository security advisory

> [!NOTE]
> This article applies to repository-level security advisories in a public repository.
> To edit a global advisory in the GitHub Advisory Database, see [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database).


## Removing a collaborator from a security advisory

If you remove a user from a repository or organization, and the user is also a collaborator on a security advisory, GitHub will automatically remove the user as a collaborator for the security advisory. This prevents any unauthorized access from ex-collaborators.


1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the name of the security advisory you'd like to remove a collaborator from.
1. On the right side of the page, under "Collaborators", find the name of the user or team you'd like to remove from the security advisory.
1. Next to the collaborator you want to remove, click **Remove**.

   ![Screenshot of the "Collaborators" area in the right sidebar of a draft security advisory. The "Remove username" button is outlined in dark orange.](/assets/images/help/security/security-advisory-remove-collaborator.png)

## Further reading

* [Repository Security Advisory](https://docs.github.com/en/code-security/reference/permissions/repository-security-advisory)
* [Add Collaborators](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/add-collaborators)
