# Transferring a repository

## About repository transfers

When you transfer a repository to a new owner, they can immediately administer the repository's contents, issues, pull requests, releases, projects, and settings. You can also change the repository name while transferring a repository. See [Renaming A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository).

Prerequisites for repository transfers:
* When you transfer a repository that you own to another personal account, the new owner will receive a confirmation email. The confirmation email includes instructions for accepting the transfer. If the new owner doesn't accept the transfer within one day, the invitation will expire.
* To transfer a repository you must have administrator access to the repository.

* Repositories on GitHub.com can only be transferred to other owners on GitHub.com.
{%- ifversion ghec %}
* Repositories cannot be transferred into an enterprise with managed users from outside the enterprise, or vice versa.

{%- elsif ghes %}
* Repositories can only be transferred to an owner within the same GitHub Enterprise Server instance. For more information about moving a repository from GitHub Enterprise Server to GitHub Enterprise Cloud, see [Migrating Repositories From GitHub Enterprise Server To GitHub Enterprise Cloud](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-repositories-from-github-enterprise-server-to-github-enterprise-cloud).
{%- endif %}
* To transfer a repository that you own to an organization, you must have permission to create a repository in the target organization.
* The target account must not have a repository with the same name, or a fork in the same network.
* The original owner of the repository is added as a collaborator on the transferred repository. Other collaborators to the transferred repository remain intact.
* Single repositories forked from a private  or internal  upstream network cannot be transferred.

* Internal repositories can only be transferred to an organization in the enterprise. You cannot transfer an internal repository from an organization owned by one enterprise account to an organization owned by a different enterprise account.


If you transfer a private repository to a GitHub Free user or organization account, the repository will lose access to features like protected branches and GitHub Pages. See [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans).


If the transferred repository contains an action listed on GitHub Marketplace, or had more than 100 clones or more than 100 uses of GitHub Actions in the week prior to the transfer, GitHub permanently retires the owner name and repository name combination (`OWNER/REPOSITORY-NAME`) when you transfer the repository. If you try to create a repository using a retired owner name and repository name combination, you will see the error: "The repository `REPOSITORY_NAME` has been retired and cannot be reused."

### What's transferred with a repository?

When you transfer a repository, its issues, pull requests, wiki, stars, and watchers are also transferred. If the transferred repository contains webhooks, services, secrets, or deploy keys, they will remain associated after the transfer is complete. Git information about commits, including contributions, is preserved. In addition:

* If the transferred repository is a fork, then it remains associated with the upstream repository.
* If the transferred repository has any forks, then those forks will remain associated with the repository after the transfer is complete.
* If the transferred repository uses Git Large File Storage, all Git LFS objects are automatically moved. This transfer occurs in the background, so if you have a large number of Git LFS objects or if the Git LFS objects themselves are large, it may take some time for the transfer to occur.
* When a repository is transferred between two personal accounts, issue assignments are left intact. When you transfer a repository from a personal account to an organization, issues assigned to members in the organization remain intact, and all other issue assignees are cleared. Only owners in the organization are allowed to create new issue assignments. When you transfer a repository from an organization to a personal account, only issues assigned to the repository's owner are kept, and all other issue assignees are removed.
* When you transfer a repository from an organization to another organization, issue types on issues are left intact if the new organization has a matching issue type, and all other issue types are removed from issues.
* When you transfer a repository from an organization to a personal account, all issue types are removed from issues.
* If the transferred repository contains a GitHub Pages site, then links to the Git repository on the Web and through Git activity are redirected. However, we don't redirect GitHub Pages associated with the repository.
* All links to the previous repository location are automatically redirected to the new location. When you use `git clone`, `git fetch`, or `git push` on a transferred repository, these commands will redirect to the new repository location or URL. However, to avoid confusion, we strongly recommend updating any existing local clones to point to the new repository URL. You can do this by using `git remote` on the command line:

  ```shell
  git remote set-url origin NEW_URL
  ```

  > [!WARNING]
  > If you create a new repository or fork at the previous repository location, the redirects to the transferred repository will be permanently deleted.
* When you transfer a repository from an organization to a personal account, the repository's read-only collaborators will not be transferred. This is because collaborators can't have read-only access to repositories owned by a personal account. For more information about repository permission levels, see [Permission Levels For A Personal Account Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository) and [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).
* Sponsors who have access to the repository through a sponsorship tier may be affected. See [Managing Your Sponsorship Tiers](https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier).
* Packages associated with the repository may be transferred, or may lose their link to the repository, depending on the registry they belong to. See [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-repository-transfers).

See [Managing Remote Repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories).

### Repository transfers and organizations

To transfer repositories to an organization, you must have permission to create repositories in the receiving organization, and to transfer repositories out of the origin organization. An organization or enterprise owner may have set a policy that prevents certain users from doing these things.

Once a repository is transferred to an organization, the organization's default repository permission settings and default membership privileges will apply to the transferred repository.

## Transferring a repository owned by your personal account

You can transfer your repository to any personal account that accepts your repository transfer. When a repository is transferred between two personal accounts, the original repository owner and collaborators are automatically added as collaborators to the new repository.

If you published a GitHub Pages site in a private repository and added a custom domain, before transferring the repository, you may want to remove or update your DNS records to avoid the risk of a domain takeover. See [Managing A Custom Domain For Your GitHub Pages Site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. At the bottom of the page, in the "Danger Zone" section, click **Transfer**.
1. Read the information about transferring a repository, then, under "New owner", choose how to specify the new owner.
   * To choose one of your organizations, select **Select one of my organizations**.

     * Select the dropdown menu and click an organization.
     * Optionally, in the "Repository name" field, type a new name for the repository.

       > [!NOTE]
       > You must be an owner of the target organization to rename the repository.

   * To specify an organization or username, select **Specify an organization or username**, then type the organization name or the new owner's username.
1. Read the warnings about potential loss of features depending on the new owner's GitHub subscription.
1. Following **Type REPOSITORY NAME to confirm**, type the name of the repository you'd like to transfer, then click **I understand, transfer this repository**.


## Transferring a repository owned by your organization

If you have owner permissions in an organization or admin permissions to one of its repositories, you can transfer a repository owned by your organization to your personal account or to another organization. Internal repositories cannot be transferred to a personal account, only to another organization. To transfer an internal repository, change the repository's visibility to "private" or "public". See [Setting Repository Visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)

1. Sign into your personal account that has admin or owner permissions in the organization that owns the repository.
1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. At the bottom of the page, in the "Danger Zone" section, click **Transfer**.
1. Read the information about transferring a repository, then, under "New owner", choose how to specify the new owner.
   * To choose one of your organizations, select **Select one of my organizations**.

     * Select the dropdown menu and click an organization.
     * Optionally, in the "Repository name" field, type a new name for the repository.

       > [!NOTE]
       > You must be an owner of the target organization to rename the repository.

   * To specify an organization or username, select **Specify an organization or username**, then type the organization name or the new owner's username.
1. Read the warnings about potential loss of features depending on the new owner's GitHub subscription.
1. Following **Type REPOSITORY NAME to confirm**, type the name of the repository you'd like to transfer, then click **I understand, transfer this repository**.
