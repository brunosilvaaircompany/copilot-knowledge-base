# About the setup URL

When you register a GitHub App, you can specify a setup URL. When users install your GitHub App, they are redirected to the setup URL. If additional setup is required after installation, you can use this URL to tell users what steps to take next.

If you specify a setup URL, you can also select **Redirect on update** to specify that users should be redirected to the setup URL after they update an installation. An update includes adding or removing access to a repository for an installation.

> [!WARNING]
> When GitHub redirects users to the setup URL, it includes an `installation_id` query parameter. Bad actors can hit this URL with a spoofed `installation_id`. Therefore, you should not rely on the validity of the `installation_id` parameter. Instead, you should generate a user access token for the user who installed the GitHub App and then check that the installation is associated with that user. For more information, see [Generating A User Access Token For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app).


Although the setup URL is optional during GitHub App registration, it is required if you want to allow users to purchase your app in GitHub Marketplace. For more information, see [Handling New Purchases And Free Trials](https://docs.github.com/en/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/handling-new-purchases-and-free-trials).


The setup URL is different from the callback URL. Users are redirected to the setup URL after they install a GitHub App. Users are redirected to the callback URL when they authorize a GitHub App via the web application flow. For more information, see [About The User Authorization Callback URL](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/about-the-user-authorization-callback-url).

For more information about registering a GitHub App, see [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app). For more information about modifying a GitHub App registration, see [Modifying A GitHub App Registration](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration).
