# About programmatic access in your organization

## About programmatic access

GitHub Apps, OAuth apps, and personal access tokens can be used to make API requests that read or write resources owned by an organization. As an organization owner, you can control access to your organization by GitHub Apps, OAuth apps, and personal access tokens.

## GitHub Apps

Organization owners can install GitHub Apps on their organization. Repository admins can also install a GitHub App on the organization if the app does not request organization resources and if they only grant the app access to repositories where they are an admin. Organization members and outside collaborators can submit a request for their organization owner to install a GitHub App on the organization. For more information, see [Installing A GitHub App From GitHub Marketplace For Your Organizations](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations).

Organization owners can restrict GitHub App installation to only organization owners. When this restriction is enabled, repository admins cannot install GitHub Apps for their repositories and must instead use the request flow to ask organization owners to install apps.

Organization owners can prevent users from requesting GitHub Apps or from installing a GitHub App even if they are a repository admin. For more information, see [Limiting OAUTH App And GitHub App Access Requests And Installations](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests-and-installations).

Organization owners can review the GitHub Apps that are installed on their organization and modify the repositories that each app can access. For more information, see [Reviewing GitHub Apps Installed In Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-github-apps-installed-in-your-organization).

To help maintain GitHub Apps owned by their organization, organization owners can designate other users in their organization as GitHub App managers. GitHub App managers can manage the settings of some or all of the GitHub Apps that are owned by the organization. The GitHub App manager role does not grant users permission to install GitHub Apps on an organization. For more information, see [Adding And Removing GitHub App Managers In Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization).



## OAuth apps

Organization managers must approve OAuth apps that users would like to use in their organization. When this requirement is enabled, organization members and outside collaborators must request approval for individual OAuth apps. For more information, see [About OAUTH App Access Restrictions](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions) and [Limiting OAUTH App And GitHub App Access Requests And Installations](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests-and-installations).



## Personal access tokens

Organization owners can prevent fine-grained personal access tokens and personal access tokens (classic) from accessing resources owned by the organization. Organization owners can also require approval for each fine-grained personal access token that can access the organization. For more information, see [Setting A Personal Access Token Policy For Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

Organization owners can view all fine-grained personal access tokens that can access resources owned by the organization. Organization owners can also revoke access by fine-grained personal access tokens. For more information, see [Reviewing And Revoking Personal Access Tokens In Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization).



If their organization uses SAML, organization owners can see each personal access token that a member of their organization authorized. For more information, see [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-authorized-credentials).





Site administrators can use the REST API to manage personal access tokens in their enterprise. For more information, see [Users](https://docs.github.com/en/rest/enterprise-admin/users).
