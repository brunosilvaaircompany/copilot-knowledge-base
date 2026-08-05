# Renaming a repository

When you rename a repository, all existing information, with the exception of project site URLs, is automatically redirected to the new name, including:

* Issues
* Wikis
* Stars
* Followers

For more information on project sites, see [What Is GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites).

In addition to redirecting web traffic, all `git clone`, `git fetch`, or `git push` operations targeting the previous location will continue to function as if made on the new location. However, to reduce confusion, we strongly recommend updating any existing local clones to point to the new repository URL. You can do this by using `git remote` on the command line:

```shell
git remote set-url origin NEW_URL
```

For more information, see [Managing Remote Repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories).



If you plan to rename a repository that has a GitHub Pages site, we recommend using a custom domain for your site. This ensures that the site's URL isn't impacted by renaming the repository. For more information, see [About Custom Domains And GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages).



> [!NOTE]
> GitHub will not redirect calls to an action hosted by a renamed repository. Any workflow that uses that action will fail with the error `repository not found`. Instead, create a new repository and action with the new name and archive the old repository. For more information, see [Archiving Repositories](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories).

> [!WARNING]
> If you create a new repository under your account in the future, do not reuse the original name of the renamed repository. If you do, redirects to the renamed repository will no longer work.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the **Repository Name** field, type the new name of your repository.
1. Click **Rename**.
