> [!NOTE]
> This package type may not be available for your instance, because site administrators can enable or disable each supported package type. For more information, see [Configuring Package Ecosystem Support For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/configuring-package-ecosystem-support-for-your-enterprise).






## URL for the RubyGems registry

If you access GitHub at GitHub.com, you will publish packages to https://rubygems.pkg.github.com. Examples in this article use this URL.

If you access GitHub at another domain, such as `octocorp.ghe.com`, replace "https://rubygems.pkg.github.com" with `https://rubygems.SUBDOMAIN.ghe.com`, where `SUBDOMAIN` is your enterprise's unique subdomain.



## Prerequisites

* You must have RubyGems 2.4.1 or higher. To find your RubyGems version:

  ```shell
  gem --version
  ```

* You must have bundler 1.6.4 or higher. To find your Bundler version:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## Authenticating to GitHub Packages

> [!NOTE]
> GitHub Packages only supports authentication using a personal access token (classic). For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


You need an access token to publish, install, and delete private, internal, and public packages.

You can use a personal access token (classic) to authenticate to GitHub Packages or the GitHub API. When you create a personal access token (classic), you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a personal access token (classic), see [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:
* `GITHUB_TOKEN` to publish packages associated with the workflow repository.
* A personal access token (classic) with at least `read:packages` scope to install packages associated with other private repositories (`GITHUB_TOKEN` can be used if the repository is granted read access to the package. See [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)).




### Authenticating in a GitHub Actions workflow

This registry supports granular permissions. For registries that support granular permissions, if your GitHub Actions workflow is using a personal access token to authenticate to a registry, we highly recommend you update your workflow to use the `GITHUB_TOKEN`. For guidance on updating your workflows that authenticate to a registry with a personal access token, see [Publishing And Installing A Package With GitHub Actions](https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token).

> [!NOTE]
> The ability for GitHub Actions workflows to delete and restore packages using the REST API is currently in public preview and subject to change.


You can use a `GITHUB_TOKEN` in a GitHub Actions workflow to delete or restore a package using the REST API, if the token has `admin` permission to the package. Repositories that publish packages using a workflow, and repositories that you have explicitly connected to packages, are automatically granted `admin` permission to packages in the repository.

For more information about the `GITHUB_TOKEN`, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token#using-the-github_token-in-a-workflow). For more information about the best practices when using a registry in actions, see [Compromised Runners](https://docs.github.com/en/actions/concepts/security/compromised-runners#cross-repository-access).


You can also choose to give access permissions to packages independently for GitHub Codespaces and GitHub Actions. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-github-codespaces-access-to-your-package) and [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).




### Authenticating with a personal access token

You must use a personal access token (classic) with the appropriate scopes to publish and install packages in GitHub Packages. For more information, see [Introduction To GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages).


To publish and install gems, you can configure RubyGems or Bundler to authenticate to GitHub Packages using your personal access token.

To publish new gems, you need to authenticate to GitHub Packages with RubyGems by editing your _~/.gem/credentials_ file to include your personal access token (classic). Create a new _~/.gem/credentials_ file if this file doesn't exist.

For example, you would create or edit a _~/.gem/credentials_ to include the following, replacing TOKEN with your personal access token.

```shell
---
:github: Bearer TOKEN
```

To install gems, you need to authenticate to GitHub Packages by updating your gem sources to include `https://USERNAME:TOKEN@rubygems.pkg.github.com/NAMESPACE/`. You must replace:
* `USERNAME` with your GitHub username.
* `TOKEN` with your personal access token (classic).
* `NAMESPACE` with the name of the personal account or organization to which the gem is scoped.
* `REGISTRY_URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace HOSTNAME with the hostname of your GitHub Enterprise Server instance.


If you would like your package to be available globally, you can run the following command to add your registry as a source.

```shell
gem sources --add https://USERNAME:TOKEN@rubygems.pkg.github.com/NAMESPACE/
```

To authenticate with Bundler, configure Bundler to use your personal access token (classic), replacing USERNAME with your GitHub username, TOKEN with your personal access token, and NAMESPACE with the name of the personal account or organization to which the gem is scoped. Replace `REGISTRY_URL` with the URL for your instance's RubyGems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace HOSTNAME with the hostname of your GitHub Enterprise Server instance.

```shell
bundle config https://rubygems.pkg.github.com/NAMESPACE USERNAME:TOKEN
```

## Publishing a package

When you first publish a package, the default visibility is private. To change the visibility or set access permissions, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).
 For more information on creating your gem, see [Make your own gem](http://guides.rubygems.org/make-your-own-gem/) in the RubyGems documentation.



> [!NOTE]
> If you publish a package that is linked to a repository, the package automatically inherits the access permissions of the linked repository, and GitHub Actions workflows in the linked repository automatically get access to the package, unless your organization has disabled automatic inheritance of access permissions. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#about-inheritance-of-access-permissions).




1. Authenticate to GitHub Packages. For more information, see [Authenticating to GitHub Packages](#authenticating-to-github-packages).


1. Build the package from the _gemspec_ to create the _.gem_ package. Replace `GEM_NAME` with the name of your gem.

   ```shell
   gem build GEM_NAME.gemspec
   ```

1. Publish a package to GitHub Packages, replacing `NAMESPACE` with the name of the personal account or organization to which the package will be scoped and `GEM_NAME` with the name of your gem package. Replace `REGISTRY_URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace `HOSTNAME` with the host name of your GitHub Enterprise Server instance.

   > [!NOTE]
   > The maximum uncompressed size of a gem's `metadata.gz` file must be less than 2 MB. Requests to push gems that exceed that limit will fail.

   ```shell
   $ gem push --key github \
   --host https://rubygems.pkg.github.com/NAMESPACE \
   GEM_NAME-0.0.1.gem
   ```



## Connecting a package to a repository

The RubyGems registry stores packages within your organization or personal account, and allows you to associate packages with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository.

You can ensure gems will be linked to a repository as soon as they are published by including the URL of the GitHub repository in the `github_repo` field in `gem.metadata`. You can link multiple gems to the same repository. {% ifversion ghes %} In the following example, replace HOSTNAME with the host name of {% ifversion ghes %}your GitHub Enterprise Server instance.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://github.com/OWNER/REPOSITORY" }
```

For information on linking a published package with a repository, see [Connecting A Repository To A Package](https://docs.github.com/en/packages/learn-github-packages/connecting-a-repository-to-a-package).

{% else %}

## Publishing multiple packages to the same repository

To publish multiple gems to the same repository, you can include the URL to the GitHub repository in the `github_repo` field in `gem.metadata`. If you include this field, GitHub matches the repository based on this value, instead of using the gem name. Replace HOSTNAME with the host name of your GitHub Enterprise Server instance.

```ruby
gem.metadata = { "github_repo" => "ssh://HOSTNAME/OWNER/REPOSITORY" }
```

{% endif %}

## Installing a package

You can use gems from GitHub Packages much like you use gems from _rubygems.org_. You need to authenticate to GitHub Packages by adding your GitHub user or organization as a source in the _~/.gemrc_ file or by using Bundler and editing your _Gemfile_.

1. Authenticate to GitHub Packages. For more information, see [Authenticating to GitHub Packages](#authenticating-to-github-packages).

1. For Bundler, add your GitHub user or organization as a source in your _Gemfile_ to fetch gems from this new source. For example, you can add a new `source` block to your _Gemfile_ that uses GitHub Packages only for the packages you specify, replacing `GEM_NAME` with the package you want to install from GitHub Packages and `NAMESPACE` with the personal account or organization to which the gem you want to install is scoped. Replace `REGISTRY_URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace `HOSTNAME` with the host name of your GitHub Enterprise Server instance.

   ```ruby
   source "https://rubygems.org"

   gem "rails"

   source "https://rubygems.pkg.github.com/NAMESPACE" do
     gem "GEM_NAME"
   end
   ```

1. For Bundler versions earlier than 1.7.0, you need to add a new global `source`. For more information on using Bundler, see the [bundler.io documentation](https://bundler.io/gemfile.html).

   ```ruby
   source "https://rubygems.pkg.github.com/NAMESPACE"
   source "https://rubygems.org"

   gem "rails"
   gem "GEM_NAME"
   ```

1. Install the package:

   ```shell
   gem install GEM_NAME --version "0.1.1"
   ```

## Further reading

* [Deleting And Restoring A Package](https://docs.github.com/en/packages/learn-github-packages/deleting-and-restoring-a-package)
