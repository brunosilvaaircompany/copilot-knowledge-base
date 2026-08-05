# REST API endpoints for team synchronization

## About team synchronization

To use these endpoints, the authenticated user must be a team maintainer or an owner of the organization associated with the team. The token you use to authenticate will also need to be authorized for use with your IdP (SSO) provider. For more information, see [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on).

You can manage GitHub team members through your IdP with team synchronization. Team synchronization must be enabled to use these endpoints. For more information, see [Managing Team Synchronization For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

> [!NOTE]
> These endpoints cannot be used with Enterprise Managed Users. To learn more about managing an organization with managed users, see [External Groups](https://docs.github.com/en/enterprise-cloud@latest/rest/teams/external-groups).
