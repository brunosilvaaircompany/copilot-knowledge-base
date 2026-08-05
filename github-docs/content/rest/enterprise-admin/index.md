# REST API endpoints for GitHub Enterprise administration

> [!NOTE]
> This information applies to GitHub Enterprise Cloud. To see the GitHub Enterprise Server version, use the **{% data ui.pages.article_version %}** drop-down menu.



> [!NOTE]
> These endpoints only support authentication using a personal access token (classic). For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).


## Endpoint URLs

These endpoints, except the Manage GitHub Enterprise Server API, are prefixed with the following URL:

```shell
https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3
```


When endpoints include `{enterprise}`, replace `{enterprise}` with the handle for your enterprise account, which is included in the URL for your enterprise settings. For example, if your enterprise account is located at `https://github.com/enterprises/octo-enterprise`, replace `{enterprise}` with `octo-enterprise`.




Endpoints for the  Manage GitHub Enterprise Server API are only prefixed with a hostname and administration port:

```shell
http(s)://HOSTNAME:ADMINISTRATION-PORT/
```




## Authentication

Your GitHub Enterprise Server installation's API endpoints accept the same authentication methods as the GitHub API. For more information, see [Authenticating To The Rest API](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api).

OAuth tokens must have the `site_admin` [OAuth scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes) when used with these endpoints.

These endpoints are only accessible to authenticated GitHub Enterprise Server site administrators, except for endpoints of the [Manage Ghes](https://docs.github.com/en/rest/enterprise-admin/manage-ghes) API, which allow authentication as a Management Console user. See [Administering Your Instance From The Web UI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui).



> [!NOTE]
> The Management Console endpoints will be closing down in a future version of GitHub Enterprise Server. You can access the same functionality using the Manage GitHub Enterprise Server endpoints. For more information, see [Manage Ghes](https://docs.github.com/en/rest/enterprise-admin/manage-ghes).








## Version information

The current version of your enterprise is returned in the REST API response header:
`X-GitHub-Enterprise-Version: {{currentVersion}}.0`
You can also read the current version by calling `GET /meta`. For more information, see [Meta](https://docs.github.com/en/rest/meta).



## Endpoints
