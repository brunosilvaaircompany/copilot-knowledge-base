>[!NOTE] Container registry is currently in public preview for GitHub Enterprise Server and subject to change.

Both GitHub Packages and subdomain isolation must be enabled to use Container registry. For more information, see [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).




## About the Container registry

The Container registry stores container images within your organization or personal account, and allows you to associate an image with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository. You can also access public container images anonymously.
 For more information, see [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

## About migration from the Docker registry

The Container registry replaces GitHub's Docker registry.
 If you've stored Docker images in the Docker registry, an enterprise owner will gradually migrate the images to the Container registry. No action is required on your part.



> [!NOTE]
> GitHub Enterprise Server 3.6 supports migration for Docker images stored in organizations. A future release will support migration of user-owned images.
 For more information about finding the version of GitHub Enterprise Server that you use, see [About Versions Of GitHub Docs](https://docs.github.com/en/get-started/using-github-docs/about-versions-of-github-docs#github-enterprise-server).



After a Docker image has been migrated to the Container registry, you'll see the following changes to the details for the package.

* The package icon will be the Container registry logo (a {% octicon "container" aria-label="The container icon" %} icon) instead of the Docker logo.
* The domain in the pull URL will be `ghcr.io`{% elsif ghes %}<code>containers.<em>HOSTNAME</em></code> instead of `docker.pkg.github.com`{% elsif ghes %}<code>docker.<em>HOSTNAME</em></code>.

Any scripts or GitHub Actions workflows that use the namespace for the Docker registry, `docker.pkg.github.com`{% elsif ghes %}<code>docker.<em>HOSTNAME</em></code>, will continue to work after migration to the Container registry at `ghcr.io`{% elsif ghes %}<code>containers.<em>HOSTNAME</em></code>.


After migration, you'll no longer be able to use the GraphQL API to query for packages with a `PackageType` of "DOCKER". Instead, you can use the REST API to query for packages with a `package_type` of "container". For more information, see [Packages](https://docs.github.com/en/rest/packages).



## About billing for Container registry

For more information about billing for the Container registry, see [GitHub Packages](https://docs.github.com/en/billing/concepts/product-billing/github-packages).
