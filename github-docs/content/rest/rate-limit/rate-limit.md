# REST API endpoints for rate limits

## About rate limits

You can check your current rate limit status at any time. For more information about rate limit rules, see [Rate Limits For The Rest API](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api).

The REST API for searching items has a custom rate limit that is separate from the rate limit governing the other REST API endpoints. For more information, see [Search](https://docs.github.com/en/rest/search/search). The GraphQL API also has a custom rate limit that is separate from and calculated differently than rate limits in the REST API. For more information, see [Rate Limits And Query Limits For The GraphQL API](https://docs.github.com/en/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api#primary-rate-limit). For these reasons, the API response categorizes your rate limit. Under `resources`, you'll see objects relating to different categories:

* The `core` object provides your rate limit status for all non-search-related resources in the REST API.

* The `search` object provides your rate limit status for the REST API for searching (excluding code searches). For more information, see [Search](https://docs.github.com/en/rest/search/search).

* The `code_search` object provides your rate limit status for the REST API for searching code. For more information, see [Search](https://docs.github.com/en/rest/search/search#search-code).

* The `graphql` object provides your rate limit status for the GraphQL API.

* The `integration_manifest` object provides your rate limit status for the `POST /app-manifests/{code}/conversions` operation. For more information, see [Registering A GitHub App From A Manifest](https://docs.github.com/en/apps/sharing-github-apps/registering-a-github-app-from-a-manifest#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

* The `dependency_snapshots` object provides your rate limit status for submitting snapshots to the dependency graph. For more information, see [Dependency Graph](https://docs.github.com/en/rest/dependency-graph).

* The `code_scanning_upload` object provides your rate limit status for uploading SARIF results to code scanning. For more information, see [Upload Sarif File](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file).

* The `actions_runner_registration` object provides your rate limit status for registering self-hosted runners in GitHub Actions. For more information, see [Self Hosted Runners](https://docs.github.com/en/rest/actions/self-hosted-runners).

For more information on the headers and values in the rate limit response, see [Rate Limits For The Rest API](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api).
