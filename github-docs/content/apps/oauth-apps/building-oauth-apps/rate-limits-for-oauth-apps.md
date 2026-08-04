# Rate limits for OAuth apps

> [!NOTE]
> Consider building a GitHub App instead of an OAuth app. The rate limit for GitHub Apps using an installation access token scales with the number of repositories and number of organization users. Conversely, OAuth apps have lower rate limits and do not scale. For more information, see [Differences Between GitHub Apps And OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps) and [About Creating GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps).

> [!WARNING]
> OAuth apps are subject to a rate limit of **2,000 access token requests per hour**. If your application exceeds this limit, further requests to generate new access tokens will be temporarily blocked, and you may receive error responses. **This can lead to temporary outages**. Please plan your implementation accordingly to avoid potential service interruptions.

## About rate limits for OAuth apps

OAuth apps act on behalf of a user, by making requests with a user access token after the user authorizes the app. For more information, see [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps).

The generation of these user access tokens is subject to a rate limit. Additionally, API requests made with these user access tokens are subject to rate limits.

## Rate limits for signing in users

OAuth apps should always cache their tokens, and only rarely need to sign in a user. Repeatedly signing in a user can indicate a bug, most frequently seen as an infinite loop between the app and GitHub. If an app signs the user in ten times within one hour, the next sign in within the same hour will require re-authorization of the application. This ensures the user is aware that the app is minting so many tokens, and provides a break in what may be an infinite loop otherwise. This ten _sign in_ rate limit is distinct from the ten _token_ limit also enforced for OAuth apps. For information about the ten token limit, see [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#creating-multiple-tokens-for-oauth-apps).

## Rate limits for the API



API rate limits are disabled by default for GitHub Enterprise Server. Contact your site administrator to confirm the rate limits for your instance.

If you are a site administrator, you can set rate limits for your instance. For more information, see [Configuring Rate Limits](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-rate-limits).

If you are developing an app for users or organizations outside of your instance, the standard GitHub rate limits apply. For more information, see [Rate Limits For The Rest API](https://docs.github.com/en/free-pro-team@latest/rest/using-the-rest-api/rate-limits-for-the-rest-api) and [Rate Limits And Query Limits For The GraphQL API](https://docs.github.com/en/free-pro-team@latest/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api) in the GitHub Free documentation.



## Further reading

* [Rate Limits For The Rest API](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)
* [Rate Limits And Query Limits For The GraphQL API](https://docs.github.com/en/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api)
* [Rate Limits For GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/rate-limits-for-github-apps)
