The permissions for packages can be scoped either to a user or an organization or to a repository.

## Granular permissions for user/organization-scoped packages

Packages with granular permissions are scoped to a personal account or organization. You can change the access control and visibility of the package separately from a repository that is connected (or linked) to a package.

The following GitHub Packages registries support granular permissions.

* Container registry

* npm registry 


* NuGet registry


* RubyGems registry


## Permissions for repository-scoped packages

A repository-scoped package inherits the permissions and visibility of the repository in which the package is published. You can find a package scoped to a repository by going to the main page of the repository and clicking the **Packages** link to the right of the page. For more information, see [Connecting A Repository To A Package](https://docs.github.com/en/packages/learn-github-packages/connecting-a-repository-to-a-package).

The following GitHub Packages registries **only** support repository-scoped permissions.


* Docker registry (`docker.pkg.github.com`)


* Apache Maven registry
* Gradle registry



For the Container registry, you can choose to allow packages to be scoped to a user or an organization, or linked to a repository. For information about migration to the Container registry, see [Migrating To The Container Registry From The Docker Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry).


> [!NOTE]
> Maven and Gradle are currently only supported for public and private repository visibilities. Internal repository visibility is not supported.



## Visibility and access permissions for packages

If a package belongs to a registry that supports granular permissions, anyone with admin permissions to the package can set the package to private or public, and can grant access permissions for the package that are separate from the permissions set at the organization and repository levels. For the list of registries that support granular permissions, see [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

In most registries, to pull a package, you must authenticate with a personal access token or `GITHUB_TOKEN`, regardless of whether the package is public or private. However, in the Container registry, public packages allow anonymous access and can be pulled without authentication or signing in via the CLI.



> [!NOTE]
> If you publish a package that is linked to a repository, the package inherits its permissions from the linked repository by default. To access the package's granular permissions settings, you must remove the package's inherited permissions. If you're the owner of an organization, you can disable the automatic inheritance of permissions for all new packages scoped to your organization. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#selecting-whether-a-package-inherits-permissions-from-a-repository) and [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#disabling-automatic-inheritance-of-access-permissions-in-an-organization).



When you publish a package, you automatically get admin permissions to the package. If you publish a package to an organization, anyone with the `owner` role in the organization also gets admin permissions to the package.

For packages scoped to a personal account, you can give any person an access role. For packages scoped to an organization, you can give any person or team in the organization an access role.

If you are using a GitHub Actions workflow to manage your packages, you can grant an access role to the repository the workflow is stored in through the **Actions access** menu option. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).

| Permission | Access description |
|------------|--------------------|
| Read       | Can download package. <br> Can read package metadata. |
| Write      | Can upload and download this package. <br> Can read and write package metadata. |
| Admin      | Can upload, download, delete, and manage this package. <br> Can read and write package metadata. <br> Can grant package permissions.

> [!NOTE]
> The ability for GitHub Actions workflows to delete and restore packages using the REST API is currently in public preview and subject to change.



For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

## About scopes and permissions for package registries

> [!NOTE]
> GitHub Packages only supports authentication using a personal access token (classic). For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


To use or manage a package hosted by a package registry, you must use a personal access token (classic) with the appropriate scope, and your personal account must have appropriate permissions.

For example:
* To download and install packages from a repository, your personal access token (classic) must have the `read:packages` scope, and your user account must have read permission.
* To delete a package, your personal access token (classic) must at least have the `delete:packages` and `read:packages` scope. For more information, see [Deleting And Restoring A Package](https://docs.github.com/en/packages/learn-github-packages/deleting-and-restoring-a-package).

| Scope | Description | Required permission |
| --- | --- | --- |
| `read:packages` | Download and install packages from GitHub Packages | read |
| `write:packages` | Upload and publish packages to GitHub Packages | write |
| `delete:packages` | Delete packages from GitHub Packages | admin |

> [!NOTE]
> The ability for GitHub Actions workflows to delete and restore packages using the REST API is currently in public preview and subject to change.


When you create a GitHub Actions workflow, you can use the `GITHUB_TOKEN` to publish, install, delete, and restore packages in GitHub Packages without needing to store and manage a personal access token.

For more information, see:
* [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)
* [Publishing And Installing A Package With GitHub Actions](https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)
* [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
* [Scopes For OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)

## About repository transfers

You can transfer a repository to another personal account or organization. For more information, see [Transferring A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository).

When you transfer a repository, GitHub may transfer the packages associated with the repository, depending on the registry the packages belong to.

* For registries that support granular permissions, packages are scoped to a personal account or organization, and the account associated with the package does not change when you transfer a repository. If you have linked a package to a repository, the link is removed when you transfer the repository to another user. Any codespaces or GitHub Actions workflows associated with the repository will lose access to the package. If the package inherited its access permissions from the linked repository, users will lose access to the package. For the list of these registries, see [Granular permissions for user/organization-scoped packages](#granular-permissions-for-userorganization-scoped-packages) above.
* For registries that only support repository-scoped permissions, packages are published directly to repositories, and GitHub transfers the packages associated with a repository as part of the repository transfer. All billable usage associated with the packages will subsequently be billed to the new owner of the repository. If the previous repository owner is removed as a collaborator on the repository, they may no longer be able to access the packages associated with the repository. For the list of these registries, see [Permissions for repository-scoped packages](#permissions-for-repository-scoped-packages) above.

## Maintaining access to packages in GitHub Actions workflows

To ensure your workflows will maintain access to your packages, ensure that you're using the right access token in your workflow and that you've enabled GitHub Actions access to your package.

For more conceptual background on GitHub Actions or examples of using packages in workflows, see [Managing GitHub Packages Using GitHub Actions Workflows](https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows).

### Access tokens

> [!NOTE]
> The ability for GitHub Actions workflows to delete and restore packages using the REST API is currently in public preview and subject to change.


* To publish, install, delete, and restore packages associated with the workflow repository, use `GITHUB_TOKEN`.
* To install packages associated with other private repositories that `GITHUB_TOKEN` can't access, use a personal access token (classic)

For more information about `GITHUB_TOKEN` used in GitHub Actions workflows, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token#using-the-github_token-in-a-workflow).



### GitHub Actions access for packages with granular permissions

To ensure your workflows have access to packages stored in registries that support granular permissions, you must give GitHub Actions access to the repositories where your workflow is run. You can find this setting on your package's settings page. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).
