# Changing the visibility of your GitHub Pages site

> [!NOTE]
> To publish a GitHub Pages site privately, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).



For information about who can access a privately published site, how its subdomain works, and what happens to it if your organization stops using GitHub Enterprise Cloud, see [About Privately Published GitHub Pages Sites](https://docs.github.com/en/pages/getting-started-with-github-pages/about-privately-published-github-pages-sites).

## Changing the visibility of your GitHub Pages site

1. On GitHub, navigate to your site's repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code, planning, and automation"{% elsif ghes %} "Code and automation" section of the sidebar, click **{% octicon "browser" aria-hidden="true" aria-label="browser" %} Pages**.

1. Under "GitHub Pages", select the **GitHub Pages visibility** dropdown menu, then select a visibility.
1. To see your published site, under "GitHub Pages", click **{% octicon "link-external" aria-hidden="true" aria-label="link-external" %} Visit site**.

   ![Screenshot of a confirmation message for GitHub Pages listing the site's URL. On the right, the "Visit site" button is outlined in orange.](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  > [!NOTE]
> It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub. If you don't see your GitHub Pages site changes reflected in your browser after an hour, see [About Jekyll Build Errors For GitHub Pages Sites](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites).
