# Abilities and restrictions of managed user accounts

With Enterprise Managed Users, you can control the user accounts of your enterprise members through your identity provider (IdP). See [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).

Managed user accounts can contribute only to private and internal repositories within their enterprise and their own private repositories. On GitHub.com, they have read-only access to the wider GitHub community. These visibility and access restrictions apply to all requests, including API requests.

## Authentication

* Managed user accounts authenticate using only your identity provider, and have no password or two-factor authentication methods stored on GitHub. As a result, they do not see the sudo prompt when taking sensitive actions.

## GitHub Actions

* Managed user accounts cannot create workflow templates for GitHub Actions.
* While GitHub-hosted runners can be used in repositories owned by organizations, they are not available for repositories owned by managed user accounts.
* Enterprise Managed Users can trigger workflows in organizations where they are not members by forking the organization repository, then creating a pull request targeting the organization repository.

## GitHub Apps

Managed user accounts:

* Cannot install GitHub Apps on their user accounts, unless the app is an privileged app. See [Privileged GitHub Apps](https://docs.github.com/en/apps/using-github-apps/privileged-github-apps).
* Can install GitHub Apps on a repository if the app doesn't request organization permissions and if the managed user account has admin access to the repository.
* Can install GitHub Apps on an organization if the managed user account is an organization owner.
* Can purchase and install paid GitHub Apps only if the managed user account is an enterprise owner.
* Can create GitHub Apps and OAuth apps.

## GitHub Codespaces

* managed user accounts can only create codespaces that are owned by the enterprise. This means that managed user accounts:
  * Can create codespaces for repositories owned by their organization, or forks of these repositories, provided that the organization can pay for GitHub Codespaces. See [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).
  * Cannot create codespaces for their personal repositories, any repositories outside their organizations, or GitHub's public templates for GitHub Codespaces.
  * Cannot publish a codespace created from a template to a new repository.

## GitHub Copilot

* Managed user accounts cannot sign up for GitHub Copilot Pro or GitHub Copilot Free. To allow a managed user to use Copilot, you must grant the user access to a Copilot Business or Copilot Enterprise subscription. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).
* Copilot cloud agent is not available in personal repositories owned by managed user accounts. This is because Copilot cloud agent runs on GitHub-hosted runners, which are not available to personal repositories owned by managed user accounts. For more information, see [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners).




## GitHub Pages

* Managed user accounts are limited in their use of GitHub Pages. See [GitHub Pages Limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#limits-for-enterprise-managed-users).

## Interactions

* On GitHub.com, managed user accounts can view all public repositories, but cannot interact with repositories outside of the enterprise in any of the following ways:
  * Push code to the repository
  * Create issues or pull requests within the repository
  * Create or comment on discussions within the repository
  * Comment on issues or pull requests, or add reactions to comments
  * Star, watch, or fork the repository
* Managed user accounts cannot follow users outside of the enterprise.

## Repository management

* You can choose whether managed user accounts are able to create repositories owned by their user accounts. See [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation).
* If you allow managed user accounts to create repositories owned by their user accounts, they can only own private repositories and can only invite other enterprise members to collaborate on their user-owned repositories.
* Managed user accounts cannot fork repositories from outside of the enterprise. They can fork private or internal repositories owned by organizations in the enterprise into their user account namespace or other organizations owned by the enterprise, as specified by enterprise policy.

* Only private and internal repositories can be created in organizations owned by an enterprise with managed users, depending on organization and enterprise repository visibility settings.

## Visibility and invitations

Managed user accounts:

* Cannot be invited to organizations or repositories outside of the enterprise, or to other enterprises.
* Are only visible, along with the content they create, to other members of the enterprise.
* Cannot be seen, mentioned, or invited to collaborate by other GitHub users.
* Can be added to organization-owned repositories as repository collaborators, giving them access to repositories in organizations where they are not members
* Can be assigned the guest collaborator role, preventing them from accessing internal repositories in the enterprise except in organizations where they are added as members

## Other restrictions

Managed user accounts:

* Cannot create gists or comment on gists.
* Cannot create personalized profiles.
* Do not have access to the GitHub Certifications program.
* Do not have an individual storage allocation. They can still generate content that counts against the enterprise storage allocation, but cannot create content that consumes storage at a user level, such as by publishing packages.
