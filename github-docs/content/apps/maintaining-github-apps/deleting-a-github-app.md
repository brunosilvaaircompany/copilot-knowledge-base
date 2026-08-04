# Deleting a GitHub App

> [!NOTE]
> If you want to remove a GitHub App that you use but do not own, see [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#blocking-access) instead.

## About deleting GitHub Apps

If you own a GitHub App or are an app manager for a GitHub App, you can delete the GitHub App registration. For more information about GitHub App managers, see [About GitHub App Managers](https://docs.github.com/en/apps/maintaining-github-apps/about-github-app-managers).

When you delete a GitHub App registration, the app will be uninstalled from all accounts that the app is installed on.



> [!NOTE]
> If your GitHub App is published on GitHub Marketplace, you must remove your app from GitHub Marketplace before you can delete your app. For more information, see [Deleting Your App Listing From GitHub Marketplace](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace/deleting-your-app-listing-from-github-marketplace).



## Deleting a GitHub App

1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
   * For an app owned by an enterprise:
     1. If you use Enterprise Managed Users, click **Your enterprise** to go directly to the enterprise account settings.
     1. If you use personal accounts, click **Your enterprises** and then to the right of the enterprise, click **Settings**.{% elsif ghes %}
     1. Click **Enterprise settings**.



1. Navigate to the GitHub App settings.
   * For an app owned by a personal account or organization:
     1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**, then click **GitHub Apps**.
   * For an app owned by an enterprise:
     1. In the left sidebar, under "Settings",{% elsif ghes %} click **Settings**, then click **GitHub Apps**.

1. Select the GitHub App you want to delete.
1. In the left sidebar, click **Advanced**.

1. Click **Delete GitHub App**.
1. In the confirmation box, type the name of the GitHub App to confirm you want to delete it.
1. Click **I understand the consequences, delete this GitHub App**.

These steps only delete your GitHub App registration, and all of the installations it may have. They do not delete any code that you wrote for your app. However, any code that relies on your GitHub App's credentials will no longer function.
