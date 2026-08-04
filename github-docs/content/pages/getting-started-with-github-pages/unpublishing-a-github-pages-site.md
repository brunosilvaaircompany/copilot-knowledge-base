# Unpublishing a GitHub Pages site

When you unpublish your site, your current deployment is removed and the site will no longer be available. Any existing repository settings or content will not be affected.

Unpublishing a site does not permanently delete the site. For information on deleting a site, see [Deleting A GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/deleting-a-github-pages-site).

1. On GitHub, navigate to the main page of the repository.

1. Under **GitHub Pages**, next to the **Your site is live at** message, click {% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %}.
1. In the menu that appears, select **Unpublish site**.
   ![Screenshot of GitHub Pages settings with the URL of a live site. On the right under a kebab icon, the "Unpublish site" option is outlined in orange.](/assets/images/help/pages/unpublish-site.png)

## Re-enabling a site that has been unpublished

Unpublishing your GitHub Pages site removes your current deployment. To make your site available again, you can create a new deployment.

### Re-enable using GitHub Actions

A successful workflow run in the repository for your site will create a new deployment. Trigger a workflow run to redeploy your site.

### Re-enabling your site when publishing from a branch

1. Configure your publishing source to publish from a branch of your choosing. For more information, see [Configuring A Publishing Source For Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
1. Commit to your publishing source to create a new deployment.
