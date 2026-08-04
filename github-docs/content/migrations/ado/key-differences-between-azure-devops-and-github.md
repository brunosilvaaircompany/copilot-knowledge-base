# Key differences between Azure DevOps and GitHub

If you're a member of an organization that has migrated from Azure DevOps to GitHub, this guide will explain the changes in your workflows to make the migration as smooth as possible.

## Structure

In Azure DevOps, repositories are nested inside **team projects**, so the structure of your environment looks like this:

* Organization
    * Team project
        * Repositories
    * Team project
        * Repositories

Permissions and visibility flow from the team project.

GitHub is structured differently. Repositories are nested directly inside **organizations**, which also contain teams:

* Enterprise account
    * Organization
        * Teams
        * Repositories
    * Organization
        * Teams
        * Repositories

Permissions and visibility are determined by a combination of organization membership, team membership, and individual permissions.

The concept of a team project, which is used to group repositories in Azure DevOps, does not exist in GitHub and treating organizations in GitHub as the equivalent of team projects is not recommended.

While you may initially find each migrated organization on GitHub has a long unorganized list of repositories, you can grant access and permissions via teams of organization members, which makes navigating the organization's repositories a lot easier.

## Authentication, permissions, and teams

There are two methods for authenticating to GitHub. Which method you use will depend on how the enterprise account is configured.

If your enterprise account uses Enterprise Managed Users, you'll sign in to GitHub via your identity provider (for example, Entra ID) and use a **provisioned** account tied to the enterprise account.

Otherwise, you'll use a **personal** GitHub account. That account will be invited to the enterprise account and any organizations you'll work in. If the enterprise account is configured with additional SAML access restrictions, your personal account will be **linked** to your IdP. You'll be prompted to authenticate with the IdP when you need to access resources within the enterprise account.

In an enterprise on GitHub, repositories can be public, private, or internal. Private repositories are only visible to people and teams with explicit access, and internal repositories are visible to all members of your enterprise but not to people outside the enterprise. Internal repositories are useful when multiple organizations in the same enterprise need to discover and reuse code. If your enterprise uses Enterprise Managed Users, user accounts cannot create public repositories or other public content.

## Using Git

To continue working on your repositories using Git, you'll need to make some changes.

1. Update the remote URLs to point at GitHub. See [Managing Remote Repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories).
1. Update how you authenticate.
    * To use HTTPS authentication, you'll need to create a personal access token. See [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
    * To use SSH authentication, you'll need to either create or add an existing SSH key to GitHub. See [Connecting To GitHub With SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
1. If your enterprise or organization uses SAML single sign-on (SSO), you must authorize your personal access token or SSH key before it can access resources.

## Pull request flow

With your codebase now hosted on GitHub, you'll propose changes using pull requests created in your GitHub repositories.

If your enterprise has integrated Azure Boards and Pipelines, these will both function with GitHub. You can continue to reference work items in your commit messages and pull requests. For example: `Fix login bug (AB#1234)`.

You can continue to view and manage your work items on Azure Boards. You can also link branches, commits, and pull requests to work items from within Azure. See [Link GitHub commits, pull requests, branches, and issues to work items in Azure Boards](https://learn.microsoft.com/en-us/azure/devops/boards/github/link-to-from-github) on Microsoft Learn.

## Branch protections

People with admin access to a repository can configure **branch protection rules** on GitHub. These are similar to **branch policies** on Azure DevOps and set rules such as a minimum number of approving reviewers, successful status checks, and requiring signed commits.

GitHub also supports automatically assigning reviewers based on the file, folder, and glob patterns in a repository's CODEOWNERS file. See [About Code Owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

## Packages and artifacts

In Azure DevOps, you may have used Azure Artifacts to publish and consume packages (for example, NuGet packages, npm packages, or Maven packages) and to store build artifacts produced by Azure Pipelines.

On GitHub, packages are typically published to GitHub Packages and associated with a repository or organization. Depending on how your enterprise completed the migration, you may continue to publish packages to Azure Artifacts, move packages to GitHub Packages, or use a combination of both.

If you can no longer restore dependencies after the migration, check your package source configuration. For example, you may need to update a registry URL or credentials in files like `nuget.config`, `.npmrc`, `settings.xml`, or in your pipeline configuration.

For more information, see [Introduction To GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages).

## GitHub Copilot

Hosting your repositories on GitHub unlocks the full power of Copilot. Your codebase provides Copilot with all the context it needs to answer questions in Copilot Chat, review and make suggestions in your pull requests, and even make changes on your behalf with Copilot cloud agent.

See [Quickstart](https://docs.github.com/en/copilot/get-started/quickstart).
