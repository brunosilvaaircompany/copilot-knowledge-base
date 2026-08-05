# Using GraphQL Clients

> [!WARNING]
> The GraphQL Explorer was removed from the documentation on November 11, 2025. See our [changelog announcement](https://github.blog/changelog/2025-11-07-graphql-explorer-removal-from-api-documentation-on-november-7-2025).

## Using GraphQL client IDEs

There are many open-source GraphQL client IDEs you can use to access GitHub's GraphQL API.

See [Forming Calls With GraphQL](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql) for extensive information on HTTP methods, authentication, and GraphQL call structure.

First, choose a client. Common options include GraphiQL, Insomnia, and Altair (desktop/web/extension). You can see the full list of clients in the [GraphQL organization's tool directory](https://graphql.org/community/tools-and-libraries/?tags=services).

The following generic instructions will work with most GraphQL clients:
1. Point the client at the GraphQL endpoint: `https://api.github.com/graphql{% elsif ghes %}http(s)://HOSTNAME/api/graphql`.
1. Add an `Authorization` header: `Authorization: Bearer TOKEN` (replace `TOKEN` with your GitHub personal access token. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)).
1. Set the request method to `POST` or if it's available, use the client-provided GraphQL mode.
1. Enter your query or mutation in the editor and, if needed, provide variables in the "Variables" panel.

   Example:

   ```graphql
   query {
     viewer {
       login
     }
   }
   ```

1. If your client needs a schema for documentation rendering or autocomplete, fetch it via a GraphQL introspection query. Many clients can do this automatically from the "Docs" panel.

   Minimal introspection query:

   ```graphql
   query IntrospectionQuery {
     __schema {
       types {
         name
       }
     }
   }
   ```

1. Run the request and inspect the JSON response. Query from example should return the login associated with the GitHub personal access token you authenticated with.

Use the client UI to explore docs, run queries, and save requests as needed.

## GitHub CLI

You can also use the command line with GitHub CLI to run GraphQL queries.

1. Install and [authenticate with GitHub CLI](https://cli.github.com/manual/gh_auth_login).
1. Run a query against `https://api.github.com/graphql{% elsif ghes %}http(s)://HOSTNAME/api/graphql` using the GraphQL endpoint with the [`gh api` subcommand](https://cli.github.com/manual/gh_api).

Example:

```shell
gh api graphql -f query='query { viewer { login } }'
```

This should return the login associated with the GitHub personal access token you authenticated with.

## Requesting support

For questions, bug reports, and discussions about GitHub Apps, OAuth apps, and API development, explore the [API and Webhooks category in GitHub's Community Discussions](https://github.com/orgs/community/discussions/categories/api-and-webhooks)
. The discussions are moderated and maintained by GitHub staff, and answered by the GitHub community.

Consider reaching out to [GitHub Support](https://support.github.com/) directly using the contact form for:
* Guaranteed response from GitHub staff
* Support requests involving sensitive data or private concerns
* Feature requests
* Feedback about GitHub products
