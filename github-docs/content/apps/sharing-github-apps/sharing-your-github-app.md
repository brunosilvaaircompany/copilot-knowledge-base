# Sharing your GitHub App

## Sharing your GitHub App on GitHub Marketplace

If your GitHub App is public, you can choose to publish it to GitHub Marketplace. For more information, see [About GitHub Marketplace For Apps](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-github-marketplace-for-apps).

{% ifversion ghec %}If you are an Enterprise Managed User, then you cannot share your app on GitHub Marketplace.

For more information about how users can install your app from GitHub Marketplace, see [Installing A GitHub App From GitHub Marketplace For Your Organizations](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations) and [Installing A GitHub App From GitHub Marketplace For Your Personal Account](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-personal-account).

{% endif %}

## Sharing your GitHub App via an install link


If your GitHub App is public, other users and organizations can install your app. For more information about making your app public, see [Making A GitHub App Public Or Private](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/making-a-github-app-public-or-private).

{% ifversion ghec %}If you are an Enterprise Managed User{% ifversion enterprise-apps-public-beta %} or your app is owned by your enterprise account, you can only share your app with accounts within your enterprise.{% endif %}

{% else %}
{% endif %}

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

1. Next to the GitHub App that you want to share, click **Edit**.
1. Click **Public page**. GitHub will bring you to the public page for your GitHub App.
1. Click **Install**. GitHub will bring you to the installation URL for your GitHub App. The URL will look something like `https://github.com/github-apps/APP-NAME/installations/new`, where `APP-NAME` is the name of the GitHub App.
1. Share the installation URL with other users. For more information about how users can install your app from this URL, see [Installing A GitHub App From A Third Party](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party).

   When you share the URL, you can include a `state` query parameter in the installation URL to preserve the state of the application page and return people back to that state after they install, authenticate, or accept updates to your GitHub App. For example, you could use the `state` to correlate an installation to a user or account.

   To preserve a state, add it to the installation URL: `https://github.com/github-apps/<app name>/installations/new?state=AB12t`

## Sharing your GitHub App with GitHub Enterprise Server instances

If you want to share your GitHub App with GitHub Enterprise Server instances that you are not part of, you need to take additional steps. For more information, see [Making Your GitHub App Available For GitHub Enterprise Server](https://docs.github.com/en/apps/sharing-github-apps/making-your-github-app-available-for-github-enterprise-server).
