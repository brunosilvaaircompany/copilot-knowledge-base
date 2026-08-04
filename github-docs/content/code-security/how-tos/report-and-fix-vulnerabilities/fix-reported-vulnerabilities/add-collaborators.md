# Adding a collaborator to a repository security advisory

This article applies to repository-level security advisories in a public repository. To edit a global advisory in the GitHub Advisory Database, see [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database).

Collaborators have write permissions to the security advisory. For more information, see [Repository Security Advisory](https://docs.github.com/en/code-security/reference/permissions/repository-security-advisory).

> [!NOTE]
> If you remove a user from a repository or organization, and the user is also a collaborator on a security advisory, GitHub will automatically remove the user as a collaborator for the security advisory. This prevents any unauthorized access from ex-collaborators.
 For more information about removing a collaborator on a security advisory, see [Remove Collaborators](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/remove-collaborators).

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the security advisory you'd like to add a collaborator to.
1. On the right side of the page, under "Collaborators", type the name of the user or team you'd like to add to the security advisory.
1. Click **{% octicon "plus" aria-label="Add Collaborator" %}** to add the selected user or team as a collaborator.
   ![Screenshot of the "Collaborators" area in the sidebar of a draft security advisory. The "Add collaborator" button, a plus icon, is outlined in orange.](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## Further reading

* [Collaborate In A Fork](https://docs.github.com/en/code-security/tutorials/fix-reported-vulnerabilities/collaborate-in-a-fork)
