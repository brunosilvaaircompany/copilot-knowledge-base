# Creating an OAuth app

> [!NOTE]
> Consider building a GitHub App instead of an OAuth app.
>
> Both OAuth apps and GitHub Apps use OAuth 2.0.
>
> OAuth apps can only act on behalf of a user while GitHub Apps can either act on behalf of a user or independently of a user.
>
> GitHub Apps use fine-grained permissions, give the user more control over which repositories the app can access, and use short-lived tokens.
>
> For more information, see [Differences Between GitHub Apps And OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps) and [About Creating GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps).



> [!NOTE]
> A user or organization can own up to 100 OAuth apps.




1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**.

1. In the left sidebar, click **OAuth apps**.

1. Click **New OAuth App**.

   > [!NOTE]
   > If you haven't created an app before, this button will say, **Register a new application**.

1. In "Application name", type the name of your app.

   > [!WARNING]
   > Only use information in your OAuth app that you consider public. Avoid using sensitive data, such as internal URLs, when creating an OAuth app.

1. In "Homepage URL", type the full URL to your app's website.
1. Optionally, in "Application description", type a description of your app that users will see.
1. In "Authorization callback URL", type the callback URL of your app.

   

   You can enter up to 10 callback URLs. To add additional callback URLs, click **Add callback URL**.

   

1. If your OAuth app will use the device flow to identify and authorize users, click **Enable Device Flow**. For more information about the device flow, see [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow).
1. **Expire user access tokens** is enabled by default. If your app's authentication code hasn't been updated to support short-lived tokens, uncheck the box until support is added. For more information about expiring tokens, see [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#expiring-access-tokens).
1. Click **Register application**.

## Further reading

* [Modifying An OAUTH App](https://docs.github.com/en/apps/oauth-apps/maintaining-oauth-apps/modifying-an-oauth-app)
