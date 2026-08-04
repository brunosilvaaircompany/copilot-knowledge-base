# REST API endpoints for deploy keys

## About deploy keys

You can launch projects from a repository on your GitHub Enterprise Server instance to your server by using a deploy key, which is an SSH key that grants access to a single repository. GitHub attaches the public part of the key directly to your repository instead of a personal account, and the private part of the key remains on your server. For more information, see [Delivering Deployments](https://docs.github.com/en/rest/guides/delivering-deployments).


Deploy keys can either be set up using the following API endpoints, or by using the GitHub web interface. To learn how to set deploy keys up in the web interface, see [Managing Deploy Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys).



You may be unable to create deploy keys if your organization or enterprise owner has set a policy to restrict their use. Furthermore, if this policy is enabled at the organization or enterprise level, existing deploy keys may be disabled. For more information, see [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deploy-keys) and [Restricting Deploy Keys In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/restricting-deploy-keys-in-your-organization).


There are a few cases when a deploy key will be deleted by other activity:

* If the deploy key is created with a personal access token, deleting the personal access token will also delete the deploy key. Regenerating the personal access token will not delete the deploy key.
* If the deploy key is created with an OAuth app token, revoking the token will also delete the deploy key.

Conversely, these activities will not delete a deploy key:

* If the deploy key is created with a GitHub App user access token, revoking the token will not delete the deploy key.
* If the deploy key is created with a GitHub App installation access token, uninstalling or deleting the app will not delete the deploy key.
* If the deploy key is created with a personal access token, regenerating the personal access token will not delete the deploy key.
