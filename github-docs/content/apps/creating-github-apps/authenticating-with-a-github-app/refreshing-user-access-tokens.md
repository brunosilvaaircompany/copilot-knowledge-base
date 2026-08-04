# Refreshing user access tokens

## About user access tokens that expire

> [!NOTE]
> User access tokens that expire are currently an optional feature and are subject to change. For more information, see [Expiring user-to-server access tokens for GitHub Apps](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps).

To enforce regular token rotation and reduce the impact of a compromised token, you can configure your GitHub App to use user access tokens that expire. If your app uses user access tokens that expire, then you will receive a refresh token when you generate a user access token. The user access token expires after eight hours, and the refresh token expires after six months. For more information, see [Generating A User Access Token For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app).

You can use the refresh token to generate a new user access token and a new refresh token. Once you use a refresh token, that refresh token and the old user access token will no longer work.

If your refresh token expires before you use it, you can regenerate a user access token and refresh token by sending users through the web application flow or device flow. For more information, see [Generating A User Access Token For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app).

## Configuring your app to use user access tokens that expire

When you create your app, expiration of user access tokens is enabled unless you opt out. For more information, see [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app). You can also configure this setting after your app has been created.

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

1. Next to the GitHub App that you want to modify, click **Edit**.
1. In the GitHub Apps settings sidebar, click **Optional Features**.
1. Next to "User-to-server token expiration", click **Opt-in** or **Opt-out**. This setting may take a couple of seconds to apply.

   GitHub recommends that you opt in to this feature for improved security.

If you opt into user access tokens that expire after you have already generated user access tokens, the previously generated user access tokens will not expire. You can delete these tokens by using the `DELETE /applications/CLIENT_ID/token` endpoint. For more information, see [OAUTH Applications](https://docs.github.com/en/rest/apps/oauth-applications#delete-an-app-token).

## Refreshing a user access token with a refresh token

1. Make a `POST` request to this URL, along with the following query parameters: `https://github.com/login/oauth/access_token`

   Query parameter | Type | Description
   -----|------|------------
   `client_id` | `string` | **Required.** The client ID for your GitHub App. The client ID is different from the app ID. You can find the client ID on the settings page for your app.
   `client_secret` | `string` | **Required** unless the user access token was generated using the device flow. The client secret for your GitHub App.
   `grant_type` | `string` | **Required.** The value must be "refresh_token".
   `refresh_token` | `string` | **Required.** The refresh token that you received when you generated a user access token.

1. GitHub will give a response that includes the following parameters:

   Response parameter | Type | Description
--- | --- | ---
`access_token` | `string` | The user access token. The token starts with `ghu_`.
`expires_in` | `integer` | The number of seconds until `access_token` expires. If you disabled expiration of user access tokens, this parameter will be omitted. The value will always be `28800` (8 hours).
`refresh_token` | `string` | The refresh token. If you disabled expiration of user access tokens, this parameter will be omitted. The token starts with `ghr_`.
`refresh_token_expires_in` | `integer` | The number of seconds until `refresh_token` expires. If you disabled expiration of user access tokens, this parameter will be omitted. The value will always be `15897600` (6 months).
`scope` | `string` | The scopes that the token has. This value will always be an empty string. Unlike a traditional OAuth token, the user access token is limited to the permissions that both your app and the user have.
`token_type` | `string` | The type of token. The value will always be `bearer`.
