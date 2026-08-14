# About the user authorization callback URL

When you register a GitHub App, you can specify a callback URL. When you use the web application flow to generate a user access token in order to act on behalf of a user, users will be redirected to the callback URL after they authorize the GitHub App.

You can specify up to 10 callback URLs. If you specify multiple callback URLs, you should use the `redirect_uri` parameter when you prompt the user to authorize your GitHub App, to indicate which callback URL the user should be redirected to. If you do not specify a `redirect_uri`, the first callback URL will be used. For more information about using the `redirect_uri` parameter, see [Generating A User Access Token For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app).

The callback URL is different from the setup URL. Users are redirected to the setup URL after they install a GitHub App. Users are redirected to the callback URL when they authorize a GitHub App via the web application flow. For more information, see [About The Setup URL](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/about-the-setup-url).

For more information about generating user access tokens, see [Generating A User Access Token For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app). For more information about registering a GitHub App, see [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app). For more information about modifying a GitHub App registration, see [Modifying A GitHub App Registration](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration).


## Wildcard matching for callback URLs

If required, you may enable wildcard matching for a callback URL. When wildcard matching is enabled, the redirect URL's host (excluding subdomains) and port must exactly match the callback URL, and the redirect URL's path must reference a subdirectory of the callback URL. This means that any subdomain or subdirectory of the callback URL will match and be allowed as a callback URL. For example, if wildcard matching is enabled for the callback URL `https://example.com/path`:

    CALLBACK: https://example.com/path

    MATCH: https://example.com/path
    MATCH: https://example.com/path/subdir/other
    MATCH: https://oauth.example.com/path
    MATCH: https://oauth.example.com/path/subdir/other
    FAIL:  https://example.com/bar
    FAIL:  https://example.com/
    FAIL:  https://example.com:8080/path
    FAIL:  https://oauth.example.com:8080/path
    FAIL:  https://example.org

When wildcard matching is disabled, the redirect URL must exactly match the callback URL. You can enable or disable wildcard matching for each callback URL in your app's settings.

> [!WARNING]
> Enabling wildcard matching can expose your app to security risks, because it allows an attacker to send authorization codes to any subdomain or subdirectory of the callback URL. Only enable wildcard matching if you absolutely need it and you are entirely certain that you control all possible subdomains and paths of the callback URL. For more information, see the [OAuth 2.0 Security Best Current Practice](https://www.rfc-editor.org/info/rfc9700/#section-4.1.1-11).


Apps that had a single callback URL enabled prior to August 3, 2026 have wildcard matching enabled for that callback URL. This preserves the redirect behavior that existed before wildcard matching became a configurable setting, and is why all OAuth apps and some GitHub Apps created before that date have wildcard matching enabled. If your app does not need wildcard matching, we recommend that you disable it.
