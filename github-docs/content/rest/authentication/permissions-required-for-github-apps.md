# Permissions required for GitHub Apps

## About GitHub App permissions

GitHub Apps are created with a set of permissions. Permissions define what resources the GitHub App can access via the API. For more information, see [Choosing Permissions For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).


To help you choose the correct permissions, you will receive the `X-Accepted-GitHub-Permissions` header in the REST API response. The header will tell you what permissions are required in order to access the endpoint. For more information, see [Troubleshooting The Rest API](https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api#resource-not-accessible).


These permissions are required to access private resources. Some endpoints can also be used to access public resources without these permissions. To see whether an endpoint can access public resources without a permission, see the documentation for that endpoint.


Some endpoints require more than one permission. Other endpoints work with any one permission from a set of permissions. In these cases, the "Additional permissions" column will include a checkmark. For full details about the permissions that are required to use the endpoint, see the documentation for that endpoint.
