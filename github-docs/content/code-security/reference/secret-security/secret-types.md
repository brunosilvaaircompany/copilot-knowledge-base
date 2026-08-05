# Understanding GitHub secret types

## How GitHub stores secrets

GitHub uses [Libsodium sealed boxes](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to encrypt secrets. A secret is encrypted before reaching GitHub and remains encrypted until it's used by Dependabot, GitHub Actions, or Codespaces.



## Dependabot secrets

Dependabot secrets are used to store credentials and sensitive information for use within Dependabot.

Dependabot secrets are referenced in a repository's `dependabot.yml` file.

### Usage

Dependabot secrets are typically used by Dependabot to authenticate to private package registries. This allows Dependabot to open pull requests to update vulnerable or outdated dependencies in private repositories. Used for authentication, these Dependabot secrets are referenced in a repository's `dependabot.yml` file.

Dependabot secrets can also include secrets required for workflows initiated by Dependabot. For example, Dependabot can trigger GitHub Actions workflows when it creates pull requests to update dependencies, or comments on pull requests. In this case, Dependabot secrets can be referenced from workflow files (`.github/workflows/*.yml`) as long as the workflow is triggered by a Dependabot event.

### Scope

You can define Dependabot secrets at:

* Repository level
* Organization level

Dependabot secrets can be shared across repositories when set at the organization-level. You must specify which repositories in the organization can access the secret.

### Access permissions

Dependabot secrets are accessed by Dependabot when authenticating to private registries to update dependencies.

Dependabot secrets are accessed by GitHub Actions workflows when the trigger event for the workflow is initiated by Dependabot. This is because when a workflow is initiated by Dependabot, only Dependabot secrets are available - Actions secrets are not accessible. Therefore, any secrets required for these workflows must be stored as Dependabot secrets, rather than Actions secrets. There are additional security restrictions for the `pull_request_target` event. See [Limitations and restrictions](#limitations-and-restrictions).

#### User access permissions

Repository-level secrets:
* Users with **admin access** to the repository can create and manage Dependabot secrets.
* Users with **collaborator access** to the repository can use the secret for Dependabot.

Organization-level secrets:
* **Organization owners** can create and manage Dependabot secrets.
* Users with **collaborator access** to the repositories with access to each secret can use the secret for Dependabot.

### Limitations and restrictions

For workflows initiated by Dependabot, the `pull_request_target` event is treated differently to other events. For this event, if the base ref of the pull request was created by Dependabot (`github.event.pull_request.user.login == 'dependabot[bot]'`):

   * The workflow receives a read-only `GITHUB_TOKEN`.
   * Secrets are **not** available to the workflow.

This extra restriction helps prevent potential security risks that could arise from pull requests created by Dependabot.

Dependabot secrets are not passed to forks.

## Actions secrets

Actions secrets are used to store sensitive information such as API keys, authentication tokens, and other credentials in workflows.

### Usage

Actions secrets are referenced in workflow files (`.github/workflows/*.yml`).

### Scope

You can define Actions secrets at:

* Repository level
* Environment level
* Organization level

Environment-level secrets are specific to a particular environment, such as production or staging.
Actions secrets can be shared across repositories if set at the organization-level. You can use access policies to control which repositories have access to the secret.

### Access permissions

Actions secrets are only available within GitHub Actions workflows. Despite running on Actions, Dependabot does not have access to Actions secrets.

For workflows initiated by Dependabot, Actions secrets are not available. These workflow secrets must be stored as Dependabot secrets in order to be accessible to the workflow.

The location where you store the Actions secret determines its accessibility:

* Repository secret: all workflows in the repository can access the secret.
* Environment secret: secret is limited to jobs referencing that particular environment.
* Organization secret: all workflows in the repositories that have been granted access by the organization can access the organization secrets.

#### User access permissions

Repository-level and environment secrets:
* Users with **admin access** to the repository can create and manage Actions secrets.
* Users with **collaborator access** to the repository can use the secret.

Organization-level secrets:
* **Organization owners** can create and manage Actions secrets.
* Users with **collaborator access** to the repositories with access to each secret can use the secret.

### Limitations and restrictions

* Actions secrets are not available to workflows initiated by Dependabot.
* Actions secrets are not passed to workflows that are triggered by a pull request from a fork.
* GitHub Actions automatically redacts the contents of all GitHub secrets that are printed to workflow logs.
* You can store up to 1,000 organization secrets, 100 repository secrets, and 100 environment secrets. Secrets are limited to 48 KB in size. For more information, see [Limits for secrets](/actions/reference/security/secrets#limits-for-secrets).



## Codespaces secrets

Codespaces secrets store credentials and sensitive information, such as API tokens and SSH keys, for use within GitHub Codespaces, allowing you to configure secure development environments.

### Usage

Codespaces secrets are referenced within the Codespaces development container configuration (`devcontainer.json`).

### Scope

You can define Codespaces secrets at:

* User account level
* Repository level
* Organization level

For user account level secrets, you can choose which repositories have access to the secret.
Codespaces secrets can be shared across repositories if set at the organization-level. You can use access policies to control which repositories have access to the secret.

### Access permissions

Codespaces secrets are only accessible in Codespaces.

GitHub Actions cannot access Codespaces secrets.

#### User access permissions

User account-level secrets:
* Codespaces secrets are available to any codespace you create using repositories with access to that secret.

Repository-level secrets:
* Users with **admin access** to the repository can create and manage Codespaces secrets.
* Users with **collaborator access** to the repository can use the secret.

Organization-level secrets:
* **Organization owners** can create and manage Codespaces secrets.
* Users with **collaborator access** to the repositories with access to each secret can use the secret.

### Limitations and restrictions

* You can store up to 100 secrets for GitHub Codespaces.
* Secrets are limited to 48 KB in size.
* Codespaces secrets are not passed to forks.



## Further reading

* [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#storing-credentials-for-dependabot-to-use)
* [Secrets](https://docs.github.com/en/actions/reference/security/secrets#limits-for-secrets)
* [Managing Development Environment Secrets For Your Repository Or Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/managing-development-environment-secrets-for-your-repository-or-organization)
* [Managing Your Account Specific Secrets For GitHub Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces)
