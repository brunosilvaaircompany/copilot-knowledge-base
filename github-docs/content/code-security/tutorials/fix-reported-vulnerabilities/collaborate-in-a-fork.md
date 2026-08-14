# Collaborating in a temporary private fork to resolve a repository security vulnerability

> [!NOTE]
> This article applies to repository-level security advisories in a public repository.
> To edit a global advisory in the GitHub Advisory Database, see [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database).


## Prerequisites

Before you can collaborate in a temporary private fork, you must create a draft security advisory. For more information, see [Create Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/create-repository-advisory).

## Creating a temporary private fork

To keep information about vulnerabilities secure, integrations, including CI, cannot access temporary private forks.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the name of the security advisory you'd like to create a temporary private fork in.
1. Scroll to the bottom of the advisory form and click **Start a temporary private fork**.

   ![Screenshot of the "Collaborate on a patch in private" area of the form. The "Start a temporary private fork" button is outlined in dark orange.](/assets/images/help/security/new-temporary-private-fork-button.png)

   A private fork of the repository is created and shown on the advisory page.

   The naming convention for the private fork is very similar to the convention used for advisories in the GitHub Advisory Database and follows this format: `repo-ghsa-xxxx-xxxx-xxxx`, where:
    * `repo` is the name of the repository. To stay under the 100 character limit on repository names, we truncate the original repository's name to 80 characters.
    * `xxxx-xxxx-xxxx` is the unique identifier of the draft security advisory:
       * `x` is a letter or a number from the following set: `23456789cfghjmpqrvwx`.
       * The numbers and letters are randomly assigned.
       * All letters and numbers are lowercase.

For example, if you create a temporary private fork in a repository called `octocat-repo`, and the automatically generated ID for the draft advisory is `GHSA-x854-cvjg-vx26`, the temporary fork will be called `octocat-repo-ghsa-x854-cvjg-vx26`.

You can also use the REST API to create temporary private forks. For more information, see [Create a temporary private fork](/rest/security-advisories/repository-advisories#create-a-temporary-private-fork) in the REST API documentation.

## Adding collaborators to a temporary private fork

Anyone with admin permissions to a security advisory can add additional collaborators to the security advisory, and collaborators on the security advisory can access the temporary private fork. For more information, see [Add Collaborators](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/add-collaborators).

## Adding changes to a temporary private fork

Anyone with write permissions to a security advisory can collaborate on a patch by committing changes to a temporary private fork.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the name of the security advisory you'd like to work on.
1. You can make your changes on GitHub or locally:
   * To make your changes on GitHub, under "Collaborate on a patch", click **the temporary private fork**. Then, create a new branch and edit files. For more information, see [Creating And Deleting Branches Within Your Repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) and [Editing Files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).
   * To add changes locally, follow the instructions under "Clone and create a new branch" and "Make your changes, then push."

   ![Screenshot of the "Collaborate on a patch" area of a draft security advisory. The "the temporary private fork" link is outlined in dark orange.](/assets/images/help/security/add-changes-to-this-advisory-box.png)

## Creating a pull request from a temporary private fork

Anyone with write permissions to a security advisory can create a pull request from a temporary private fork.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the name of the security advisory you'd like to create a pull request in.
1. Scroll to the bottom of the advisory form. Then, under "Collaborate on a patch", click **Compare & pull request** to create a pull request for the associated branch.

   ![Screenshot of the "Collaborate on a patch" area of a draft security advisory. The "Compare & pull request" button is outlined in dark orange.](/assets/images/help/security/security-advisory-compare-and-pr.png)
   The "Open a pull request" includes a header showing the branches that will be compared in a three-dot Git diff comparison when the pull request is created. For more information, see [About Comparing Branches In Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons).
1. To create a pull request that is ready for review, click **Create Pull Request**.
To create a draft pull request, use the drop-down and select **Create Draft Pull Request**, then click **Draft Pull Request**. If you are the member of an organization, you may need to request access to draft pull requests from an organization owner. See [Pull Requests](https://docs.github.com/en/pull-requests/reference/pull-requests#draft-pull-requests).


You cannot merge individual pull requests in a temporary private fork. Instead, you merge all open pull requests at once, in the corresponding security advisory.
 For more information, see [Merging changes in a security advisory](#merging-changes-in-a-security-advisory).

## Merging changes in a security advisory

Anyone with admin permissions to a security advisory can merge changes in a security advisory.

You cannot merge individual pull requests in a temporary private fork. Instead, you merge all open pull requests at once, in the corresponding security advisory.


Before you can merge changes in a security advisory, every open pull request in the temporary private fork must be mergeable. To keep information about vulnerabilities secure, status checks do not run on pull requests in temporary private forks. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

Additionally, there can be no merge conflicts, and GitHub won't enforce any of the protection rules that you may have set up for the branch you're trying to merge the changes in to.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Reporting", click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Advisories**.

1. In the "Security Advisories" list, click the name of the security advisory with changes that you'd like to merge.
1. Scroll to the bottom of the advisory form. Then, under "This advisory is ready to be merged", click **Merge pull request(s)** to merge all open pull requests in the temporary private fork.

  ![Screenshot of the "Collaborate on a patch" area of a draft security advisory. The "Merge pull requests" button is outlined in dark orange.](/assets/images/help/security/merge-pull-requests-button.png)

  > [!NOTE]
  > You can only merge one pull request into the `main` branch of a temporary private fork. If more than one pull request targets the `main` branch, merging is blocked.

After you merge changes in a security advisory, you can publish the security advisory to alert your community about the security vulnerability in previous versions of your project. For more information, see [Publish Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/publish-repository-advisory).

## Further reading

* [Repository Security Advisory](https://docs.github.com/en/code-security/reference/permissions/repository-security-advisory)
* [Publish Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/publish-repository-advisory)
