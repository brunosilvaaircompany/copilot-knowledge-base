# Setting repository visibility

## About repository visibility changes

> [!NOTE]
> If you can't change a repository's visibility, the organization owner may have restricted the ability to change repository visibility to organization owners only. For more information, see [Restricting Repository Visibility Changes In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization).



Members of an enterprise with managed users can only set the visibility of repositories owned by their personal account to private, and repositories in their enterprise's organizations can only be private or internal. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).



We recommend reviewing the following caveats before you change the visibility of a repository.



> [!WARNING]
> Changes to the visibility of a large repository or repository network may affect data integrity. Visibility changes can also have unintended effects on forks. GitHub recommends the following before changing the visibility of a repository network.
>
> * Wait for a period of reduced activity on {% ifversion ghes %}your GitHub Enterprise Server instance.
> * Contact your site administrator before proceeding. Your site administrator can contact us for further assistance by visiting [GitHub Enterprise Support](https://support.github.com).

{% endif %}

### Making a repository private

* GitHub will detach public forks of the public repository and put them into a new network. Public forks are not made private.

* If you change a repository's visibility from internal to private, GitHub will remove forks that belong to any user without access to the newly private repository. The visibility of any forks will also change to private. For more information, see [Forks](https://docs.github.com/en/pull-requests/reference/forks#what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)


* If you're using GitHub Free for personal accounts or organizations, some features won't be available in the repository after you change the visibility to private. Any published GitHub Pages site will be automatically unpublished. If you added a custom domain to the GitHub Pages site, you should remove or update your DNS records before making the repository private, to avoid the risk of a domain takeover. For more information, see [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans) and [Managing A Custom Domain For Your GitHub Pages Site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).


* GitHub will no longer include the repository in the GitHub Archive Program. For more information, see [About Archiving Content And Data On GitHub](https://docs.github.com/en/repositories/archiving-a-github-repository/about-archiving-content-and-data-on-github#about-the-github-archive-program).
* GitHub Advanced Security features, such as code scanning, will stop working unless the repository is owned by an organization that has access to the feature in private repositories with a GitHub Advanced Security, GitHub Code Security, or GitHub Secret Protection license and sufficient spare seats. For more information, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).



* Anonymous Git read access is no longer available. For more information, see [Enabling Anonymous Git Read Access For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository).




### Making a repository internal

* Any forks of the repository will remain in the repository network, and GitHub maintains the relationship between the root repository and the fork. For more information, see [Forks](https://docs.github.com/en/pull-requests/reference/forks#what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)



### Making a repository public

* GitHub will detach private forks and turn them into a standalone private repository. For more information, see [Forks](https://docs.github.com/en/pull-requests/reference/forks#what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)
* If you're converting your private repository to a public repository as part of a move toward creating an open source project, see the [Open Source Guides](http://opensource.guide) for helpful tips and guidelines. You can also take a free course on managing an open source project with [GitHub Skills](https://skills.github.com/). Once your repository is public, you can also view your repository's community profile to see whether your project meets best practices for supporting contributors. For more information, see [About Community Profiles For Public Repositories](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories).
* The repository will automatically gain access to GitHub Advanced Security features.
* Actions history and logs will be visible to everyone. If your repository had reusable or required workflows that were shared from a different repository in your organization, the workflow file path including the repository name will be visible in the logs. For more information on how to remove workflow runs and artifacts see [Manage Workflow Runs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs) and [Workflow Runs](https://docs.github.com/en/rest/actions/workflow-runs).

For information about improving repository security, see [Quickstart For Securing Your Repository](https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository).

## Consequences of changing a repository's visibility

>[!CAUTION]Before you change your repository's visibility, understand the consequences of this change.

### Changing from public to private

* Stars and watchers for this repository will be erased, which will affect repository rankings.
* Custom Dependabot alert rules will be disabled unless GitHub Code Security is enabled for this repository. Dependency graph and Dependabot alerts will remain enabled with permission to perform read-only analysis on this repository.
> * Code scanning will become unavailable unless Code Security is enabled for this repository.
* Current forks will remain public and will be detached from this repository.

### Changing from private to public

* The code will be visible to everyone who can visit your GitHub Enterprise Server instance.
* Anyone can fork your repository.
* All push rulesets will be disabled.
* Your changes will be published as activity.
* Actions history and logs will be visible to everyone.
* Stars and watchers for this repository will be erased.

### Changing from private to internal

* All members of the enterprise will be given read access.
* Outside collaborators can no longer be added to forks unless they're added to the root.
* Stars and watchers for this repository will be erased.

### Changing from internal to private

* Stars and watchers for this repository will be erased, which will affect repository rankings.
* Custom Dependabot alert rules will be disabled unless GitHub Code Security is enabled for this repository. Dependency graph and Dependabot alerts will remain enabled with permission to perform read-only analysis on this repository.
> * Code scanning will become unavailable unless Code Security is enabled for this repository.
* Current forks will remain public and will be detached from this repository.

### Changing from internal to public

* The code will be visible to everyone who can visit your GitHub Enterprise Server instance.
* Anyone can fork your repository.
* All push rulesets will be disabled.
* Your changes will be published as activity.
* Actions history and logs will be visible to everyone.
* Stars and watchers for this repository will be erased.

### Changing from public to internal

* All members of the enterprise will be given read access.
* Outside collaborators can no longer be added to forks unless they're added to the root.
* Stars and watchers for this repository will be erased.

## Changing a repository's visibility

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Danger Zone" section, to the right of to "Change repository visibility", click **Change visibility**.
1. Select a visibility.
1. Click to confirm that you are changing the visibility of the correct repository.
1. Click **I have read and understand these effects**.
1. Click **Make this repository public** or **Make this repository private**.

## Further reading

* [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)
