# Automatic Dependabot access to GitHub-hosted registries

## About automatic access to GitHub-hosted registries
 
Dependabot can authenticate to private GitHub Packages and Container registry packages using the same access grants that GitHub Actions workflows use. If a package has granted your repository **Read** access in the package settings on GitHub, Dependabot can access that package automatically.
 
This eliminates the need to:
 
* Create and manage personal access tokens for registry access
* Manually configure access to GitHub-hosted registries in your `dependabot.yml` file 
* Rotate credentials when tokens expire
 
## How automatic access works
 
Dependabot uses its `GITHUB_TOKEN` to request `packages: read` permission when pulling from `*.pkg.github.com` and `ghcr.io`{% elsif ghes %}<code>containers.<em>HOSTNAME</em></code>. Any package that has granted your repository access through "Manage Actions access" accepts this token, the same way it would for a regular GitHub Actions workflow.

Automatic GitHub Packages credentials are used only as fallback authentication. Explicit registry credentials and normal registry routing take precedence.
 
This works for every GitHub Packages ecosystem that Dependabot supports.
 
## When to use automatic access
 
Use automatic access to GitHub-hosted registries when:
 
* Your repositories depend on private packages stored in GitHub Packages or Container registry.
* You want to reduce credential management overhead.
* You want to avoid silent update failures caused by expired personal access tokens.
 
For third-party registries (such as Artifactory, Azure Artifacts, or Nexus), you can only use the `dependabot.yml` registry configuration or organization-level private registry settings. See [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).
 
## How to enable automatic access
 
For each package that Dependabot needs to read, you need to go to the package's settings page and add the repository that runs Dependabot with **Read** access. See [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#configuring-private-github-hosted-registries).
 
Once the repository has been granted access, Dependabot can pull from that package automatically. You do not need to configure the `dependabot.yml` file, and you can remove any existing personal access token-based registry entries you previously added for these packages.
 
For more information about configuring package access, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).
