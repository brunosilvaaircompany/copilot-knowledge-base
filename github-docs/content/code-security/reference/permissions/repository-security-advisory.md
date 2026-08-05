# Repository security advisories

## Permissions overview

Repository owners, organization owners, security managers, and users with the **admin** role can:
   * Create a security advisory for the repository.
   * Access all security advisories for the repository.
   * Add collaborators to the security advisory.

Collaborators have **write** permissions to the security advisory.


Action | Write permissions | Admin permissions |
------ | ----------------- | ----------------- |
See a draft security advisory | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Add collaborators to the security advisory (see [Add Collaborators](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/add-collaborators)) | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
Edit and delete any comments in the security advisory | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Create a temporary private fork in the security advisory (see [Collaborate In A Fork](https://docs.github.com/en/code-security/tutorials/fix-reported-vulnerabilities/collaborate-in-a-fork)) | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
Add changes to a temporary private fork in the security advisory (see [Collaborate In A Fork](https://docs.github.com/en/code-security/tutorials/fix-reported-vulnerabilities/collaborate-in-a-fork)) | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Create pull requests in a temporary private fork (see [Collaborate In A Fork](https://docs.github.com/en/code-security/tutorials/fix-reported-vulnerabilities/collaborate-in-a-fork)) | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Merge changes in the security advisory (see [Collaborate In A Fork](https://docs.github.com/en/code-security/tutorials/fix-reported-vulnerabilities/collaborate-in-a-fork)) | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
Add and edit metadata in the security advisory (see [Publish Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/publish-repository-advisory)) | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Add and remove credits for a security advisory (see [Edit Repository Advisories](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-repository-advisories)) | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Close the draft security advisory | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
Publish the security advisory (see [Publish Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/publish-repository-advisory)) | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |

### Permission differences for global security advisories

Unlike repository security advisories, anyone can contribute to **global security advisories** in the GitHub Advisory Database at [github.com/advisories](https://github.com/advisories). Edits to global advisories will not change or affect how the advisory appears on the repository. See [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database).

## Further reading

* [Add Collaborators](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/add-collaborators)
* [Collaborate In A Fork](https://docs.github.com/en/code-security/tutorials/fix-reported-vulnerabilities/collaborate-in-a-fork)
* [Remove Collaborators](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/remove-collaborators)
* [Delete Repository Advisories](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/delete-repository-advisories)
