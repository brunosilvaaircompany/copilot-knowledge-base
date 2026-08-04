# Creating a GitHub Pages site with Jekyll

> [!NOTE] While the `github-pages` gem remains supported for some workflows, GitHub Actions is now the recommended approach for deploying and automating GitHub Pages sites.


## Prerequisites

Before you can use Jekyll to create a GitHub Pages site, you must install Jekyll and Git. For more information, see [Installation](https://jekyllrb.com/docs/installation/) in the Jekyll documentation and [Set Up Git](https://docs.github.com/en/get-started/git-basics/set-up-git).

We recommend using [Bundler](https://bundler.io/) to install and run Jekyll. Bundler manages Ruby gem dependencies, reduces Jekyll build errors, and prevents environment-related bugs. To install Bundler:

 1. Install Ruby. For more information, see [Installing Ruby](https://www.ruby-lang.org/en/documentation/installation/) in the Ruby documentation.
 1. Install Bundler. For more information, see [Bundler](https://bundler.io/).


{% mac %}

> [!TIP]
> If you see a Ruby error when you try to install Jekyll using Bundler, you may need to use a package manager, such as [RVM](https://rvm.io/) or [Homebrew](https://brew.sh/), to manage your Ruby installation. For more information, see [Troubleshooting](https://jekyllrb.com/docs/troubleshooting/#jekyll--macos) in the Jekyll documentation.

{% endmac %}


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


## Creating your site

Before you can create your site, you must have a repository for your site on GitHub. If you're not creating your site in an existing repository, see [Creating a repository for your site](#creating-a-repository-for-your-site).


> [!WARNING]
> GitHub Pages sites are publicly available on the internet, even if the repository for the site is private (if your plan or organization allows it). If you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).
{% elsif ghec %}> Unless your enterprise uses Enterprise Managed Users, GitHub Pages sites are publicly available on the internet by default, even if the repository for the site is private or internal. You can publish a site privately by managing access control for the site. Otherwise, if you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) and [Changing The Visibility Of Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
{% elsif ghes %}> If your site administrator has enabled Public Pages, GitHub Pages sites are publicly available on the internet, even if the repository for the site is private or internal. If you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see [Configuring GitHub Pages For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages) and [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).



1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. If you don't already have a local copy of your repository, navigate to the location where you want to store your site's source files, replacing PARENT-FOLDER with the folder you want to contain the folder for your repository.

   ```shell
   cd PARENT-FOLDER
   ```

1. If you haven't already, initialize a local Git repository, replacing REPOSITORY-NAME with the name of your repository.

   ```shell
   git init REPOSITORY-NAME
   > Initialized empty Git repository in /REPOSITORY-NAME/.git/
   # Creates a new folder on your computer, initialized as a Git repository
   ```

1. Change directories to the repository.

   ```shell
   cd REPOSITORY-NAME
   # Changes the working directory
   ```

1. Decide which publishing source you want to use. For more information, see [Configuring A Publishing Source For Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

1. Navigate to the publishing source for your site. For more information, see [Configuring A Publishing Source For Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

  For example, if you chose to publish your site from the `docs` folder on the default branch, create and change directories to the `docs` folder.

    ```shell
    mkdir docs
    # Creates a new folder called docs
    cd docs
    ```

    If you chose to publish your site from the `gh-pages` branch, create and checkout the `gh-pages` branch.

    ```shell
    git checkout --orphan gh-pages
    # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
    git rm -rf .
    # Removes the contents from your default branch from the working directory
    ```

1. To create a new Jekyll site, use the `jekyll new` command in your repository's root directory:

   ```shell
   jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```

1. Open the Gemfile that Jekyll created.
1. Add "#" to the beginning of the line that starts with `gem "jekyll"` to comment out this line.
1. Add the `github-pages` gem by editing the line starting with `# gem "github-pages"`. Change this line to:

   ```ruby
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Replace GITHUB-PAGES-VERSION with the latest supported version of the `github-pages` gem. You can find this version here: [Dependency versions](https://pages.github.com/versions.json).

   The correct version Jekyll will be installed as a dependency of the `github-pages` gem.
1. Save and close the Gemfile.
1. From the command line, run `bundle install`.
1. Open the `.gitignore` file that Jekyll created and ignore the gems lock file by adding this line:

   ```shell
   Gemfile.lock
   ```

1. Optionally, make any necessary edits to the `_config.yml` file. This is required for relative paths when the repository is hosted in a subdirectory. For more information, see [Splitting A Subfolder Out Into A New Repository](https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository).

   ```yaml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
   ```

1. Optionally, test your site locally. For more information, see [Testing Your GitHub Pages Site Locally With Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).
1. Add and commit your work.

   ```shell
   git add .
   git commit -m 'Initial GitHub pages site with Jekyll'
   ```

1. Add your repository on your GitHub Enterprise Server instance as a remote, replacing HOSTNAME with your enterprise's hostname, USER with the account that owns the repository, and REPOSITORY with the name of the repository.

   ```shell
   
   git remote add origin https://github.com/USER/REPOSITORY.git
   
   ```

1. Push the repository to GitHub, replacing BRANCH with the name of the branch you're working on.

   ```shell
   git push -u origin BRANCH
   ```

1. Configure your publishing source. For more information, see [Configuring A Publishing Source For Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

1. On GitHub, navigate to your site's repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "browser" aria-hidden="true" aria-label="browser" %} Pages**.


1. Optionally, if you're publishing a project site from a private or internal repository, choose the visibility for your site. Under "GitHub Pages", select the visibility dropdown menu, then select public or private.
   ![Screenshot of Pages settings for a repository. The visibility dropdown, currently set to "Private," is outlined in dark orange.](/assets/images/help/pages/public-or-private-visibility.png)
   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3 %}


1. To see your published site, under "GitHub Pages", click **{% octicon "link-external" aria-hidden="true" aria-label="link-external" %} Visit site**.
![Screenshot of a confirmation message for GitHub Pages listing the site's URL. The gray "Visit site" button is outlined in orange.](/assets/images/help/pages/click-pages-url-to-preview.png)

   > [!NOTE]
> It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub. If you don't see your GitHub Pages site changes reflected in your browser after an hour, see [About Jekyll Build Errors For GitHub Pages Sites](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites).



1. Your GitHub Pages site is built and deployed with a GitHub Actions workflow. For more information, see [View Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history).

   > [!NOTE]
   > GitHub Actions is free for public repositories. Usage charges apply for private and internal repositories that go beyond the monthly allotment of free minutes. For more information, see [Billing And Usage](https://docs.github.com/en/actions/concepts/billing-and-usage).




> [!NOTE]
> * If you are publishing from a branch and your site has not published automatically, make sure someone with admin permissions and a verified email address has pushed to the publishing source.
> * Commits pushed by a GitHub Actions workflow that uses the `GITHUB_TOKEN` do not trigger a GitHub Pages build.



## Next steps

To add a new page or post to your site, see [Adding Content To Your GitHub Pages Site Using Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll).

You can add a Jekyll theme to your GitHub Pages site to customize the look and feel of your site.
 For more information, see [Adding A Theme To Your GitHub Pages Site Using Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).
