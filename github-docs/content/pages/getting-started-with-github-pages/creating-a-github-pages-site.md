# Creating a GitHub Pages site

## Creating a repository for your site

You can either create a repository or choose an existing repository for your site.

If you want to create a GitHub Pages site for a repository where not all of the files in the repository are related to the site, you will be able to configure a publishing source for your site. For example, you can have a dedicated branch and folder to hold your site source files, or you can use a custom GitHub Actions workflow to build and deploy your site source files. To use GitHub Actions as a publishing source for GitHub Pages, a site administrator must enable GitHub Actions for GitHub Enterprise Server. For more information, see [Enabling GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/enabling-github-actions-for-github-enterprise-server).


If the account that owns the repository uses GitHub Free or GitHub Free for organizations, the repository must be public.

 If you want to create a site in an existing repository, skip to the [Creating your site](#creating-your-site) section.


1. In the upper-right corner of any page, select {% octicon "plus" aria-label="Create something new" %}, then click **New repository**.

   ![Screenshot of a GitHub dropdown menu showing options to create new items. The menu item "New repository" is outlined in dark orange.](/assets/images/help/repository/repo-create-global-nav-update.png)

1. Use the **Owner** dropdown menu to select the account you want to own the repository.
   ![Screenshot of the owner menu for a new GitHub repository. The menu shows two options, octocat and github.](/assets/images/help/repository/create-repository-owner.png)

{% indented_data_reference reusables.pages.emu-org-only spaces=3 %}
1. Type a name for your repository and an optional description. If you're creating a user or organization site, your repository must be named `<user>.github.io` or `<organization>.github.io`. If your user or organization name contains uppercase letters, you must lowercase the letters.
For more information, see [What Is GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites).
   ![Screenshot of GitHub Pages settings in a repository. The repository name field contains the text "octocat.github.io" and is outlined in dark orange.](/assets/images/help/pages/create-repository-name-pages.png)

1. Choose a repository visibility. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

1. Toggle **Add README** to **On**.

1. Click **Create repository**.


## Creating your site

Before you can create your site, you must have a repository for your site on GitHub. If you're not creating your site in an existing repository, see [Creating a repository for your site](#creating-a-repository-for-your-site).

> [!WARNING]
> GitHub Pages sites are publicly available on the internet, even if the repository for the site is private (if your plan or organization allows it). If you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).
{% elsif ghec %}> Unless your enterprise uses Enterprise Managed Users, GitHub Pages sites are publicly available on the internet by default, even if the repository for the site is private or internal. You can publish a site privately by managing access control for the site. Otherwise, if you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) and [Changing The Visibility Of Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
{% elsif ghes %}> If your site administrator has enabled Public Pages, GitHub Pages sites are publicly available on the internet, even if the repository for the site is private or internal. If you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see [Configuring GitHub Pages For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages) and [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).


1. On GitHub, navigate to your site's repository.

1. Decide which publishing source you want to use. See [Configuring A Publishing Source For Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
1. Create the entry file for your site. GitHub Pages will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site.

   If your publishing source is a branch and folder, the entry file must be at the top level of the source folder on the source branch. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.

   If your publishing source is a GitHub Actions workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your GitHub Actions workflow generate your entry file when the workflow runs.
1. Configure your publishing source. See [Configuring A Publishing Source For Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

1. Your GitHub Pages site is built and deployed with a GitHub Actions workflow. For more information, see [View Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history).

   > [!NOTE]
   > GitHub Actions is free for public repositories. Usage charges apply for private and internal repositories that go beyond the monthly allotment of free minutes. For more information, see [Billing And Usage](https://docs.github.com/en/actions/concepts/billing-and-usage).




## Viewing your published site

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "browser" aria-hidden="true" aria-label="browser" %} Pages**.


1. Optionally, if you're publishing a project site from a private or internal repository, choose the visibility for your site. Under "GitHub Pages," select the visibility dropdown menu, then select public or private.
   ![Screenshot of Pages settings for a repository. The visibility dropdown, currently set to "Private," is outlined in dark orange.](/assets/images/help/pages/public-or-private-visibility.png)
   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3 %}

1. To see your published site, under "GitHub Pages," click **{% octicon "link-external" aria-hidden="true" aria-label="link-external" %} Visit site**.

> [!NOTE]
> It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub. If you don't see your GitHub Pages site changes reflected in your browser after an hour, see [About Jekyll Build Errors For GitHub Pages Sites](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites).

> [!NOTE]
> * If you are publishing from a branch and your site has not published automatically, make sure someone with admin permissions and a verified email address has pushed to the publishing source.
> * Commits pushed by a GitHub Actions workflow that uses the `GITHUB_TOKEN` do not trigger a GitHub Pages build.



## Static site generators

GitHub Pages publishes any static files that you push to your repository. You can create your own static files or use a static site generator to build your site for you. You can also customize your own build process locally or on another server.

If you use a custom build process or a static site generator other than Jekyll, you can write a GitHub Actions workflow to build and publish your site. GitHub provides workflow templates for several static site generators. For more information, see [Configuring A Publishing Source For Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

If you publish your site from a source branch, GitHub Pages will use Jekyll to build your site by default. If you want to use a static site generator other than Jekyll, we recommend that you write a GitHub Actions to build and publish your site instead. Otherwise, disable the Jekyll build process by creating an empty file called `.nojekyll` in the root of your publishing source, then follow your static site generator's instructions to build your site locally.

>[!NOTE] GitHub Pages does not support server-side languages such as PHP, Ruby, or Python.

## MIME types on GitHub Pages

A MIME type is a header that a server sends to a browser, providing information about the nature and format of the files the browser requested. GitHub Pages supports more than 750 MIME types across thousands of file extensions. The list of supported MIME types is generated from the [mime-db project](https://github.com/jshttp/mime-db).

While you can't specify custom MIME types on a per-file or per-repository basis, you can add or modify MIME types for use on GitHub Pages. For more information, see [the mime-db contributing guidelines](https://github.com/jshttp/mime-db#adding-custom-media-types).

## Next steps

You can add more pages to your site by creating more new files. Each file will be available on your site in the same directory structure as your publishing source. For example, if the publishing source for your project site is the `gh-pages` branch, and you create a new file called `/about/contact-us.md` on the `gh-pages` branch, the file will be available at `https://<user>.github.io/<repository>/about/contact-us.html`.

You can also add a theme to customize your site’s look and feel. For more information, see [Adding A Theme To Your GitHub Pages Site Using Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).

## Further reading

* [About GitHub Pages And Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).
* [Troubleshooting Jekyll Build Errors For GitHub Pages Sites](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)
* [Creating And Deleting Branches Within Your Repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)
* [Creating New Files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files)
* [Troubleshooting 404 Errors For GitHub Pages Sites](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
