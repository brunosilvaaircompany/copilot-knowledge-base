# REST API endpoints for self-hosted runner groups

## About self-hosted runner groups in GitHub Actions

You can use the REST API to manage groups of self-hosted runners in GitHub Actions. For more information, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access).

These endpoints are available for authenticated users, OAuth apps, and GitHub Apps. Access tokens require [`repo` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes) for private repositories and [`public_repo` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes) for public repositories.
 GitHub Apps must have the `administration` permission for repositories or the `organization_self_hosted_runners` permission for organizations. Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises to use these endpoints.
