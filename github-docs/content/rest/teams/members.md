# REST API endpoints for team members

## About team members

These endpoints are only available to authenticated members of the team's [organization](/rest/orgs). OAuth access tokens require the `read:org` [scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps). GitHub generates the team's `slug` from the team `name`.

Where `pull` and `push` permissions are accepted, these will map to the **Read** and **Write** roles for an organization repository. For more information about repository roles, see [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).


> [!NOTE]
> When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API to make changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see [Managing Team Synchronization For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).
