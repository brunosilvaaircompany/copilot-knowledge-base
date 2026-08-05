# REST API endpoints for Dependabot secrets

## About Dependabot secrets

You can create, update, delete, and retrieve information about encrypted secrets using the REST API. Secrets allow you to store sensitive information, such as access tokens, in your repository, repository environments, or organization.
 For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#storing-credentials-for-dependabot-to-use).

These endpoints are available for authenticated users, OAuth apps, and GitHub Apps. Access tokens require [`repo` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes) for private repositories and [`public_repo` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes) for public repositories.
 GitHub Apps must have the `dependabot_secrets` permission to use these endpoints. Authenticated users must have collaborator access to a repository to create, update, or read secrets.
