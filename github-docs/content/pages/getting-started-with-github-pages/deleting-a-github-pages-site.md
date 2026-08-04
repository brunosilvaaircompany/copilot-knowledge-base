# Deleting a GitHub Pages site

## Deleting your site

You can delete your site in two ways:
* Delete the repository. For more information, see [Deleting A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository).
* Change the source to the `None` branch. For more information, see [Deleting your site by changing the source](#deleting-your-site-by-changing-the-source) below.

If you want to remove the current deployment of your site but do not want to delete the site, you can unpublish your site. For more information, see [Unpublishing A GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).

## Deleting your site by changing the source

1. On GitHub, navigate to your site's repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "browser" aria-hidden="true" aria-label="browser" %} Pages**.

1. Under "Build and deployment", under "Source", select **Deploy from a branch** even if the site is currently using GitHub Actions.
1. Under "Build and deployment", use the branch dropdown menu and select `None` as the publishing source.
   ![Screenshot of Pages settings in a GitHub repository. A menu to select a branch for a publishing source, labeled "None," is outlined in dark orange.](/assets/images/help/pages/publishing-source-drop-down.png)
1. Click **Save**.
