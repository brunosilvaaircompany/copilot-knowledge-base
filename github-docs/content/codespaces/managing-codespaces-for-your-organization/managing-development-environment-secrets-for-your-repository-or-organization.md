# Managing development environment secrets for your repository or organization

## About secrets

Development environment secrets are encrypted environment variables that you create in the GitHub Codespaces settings for an organization, a repository, or a personal account. This article explains how to manage organization secrets and repository secrets. For information on creating user-specific secrets, see [Managing Your Account Specific Secrets For GitHub Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces).

The development environment secrets that you create are available to use in GitHub Codespaces. GitHub uses a [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to encrypt secrets before they reach GitHub and only decrypts them when you use them in a codespace.

Organization secrets let you share secrets between multiple repositories, which reduces the need to create duplicate secrets. You can use access policies to control which repositories can use organization secrets.

Once you have created a secret, it will be available when you create a new codespace or restart the codespace. If you've created a secret on GitHub and you want to use it in a currently running codespace, stop the codespace and then restart it. For information about stopping the codespace, see [Using The Vs Code Command Palette In Codespaces](https://docs.github.com/en/codespaces/reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace).


### Naming secrets

The following rules apply to secret names:

* Secret names can only contain alphanumeric characters (`[a-z]`, `[A-Z]`, `[0-9]`) or underscores (`_`). Spaces are not allowed.
* Secret names must not start with the `GITHUB_` prefix.
* Secret names must not start with a number.
* Secret names are not case-sensitive.
* Secret names must be unique at the level they are created at.
 For example, a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level.

  If a secret with the same name exists at multiple levels, the secret at the lowest level takes precedence. For example, if an organization-level secret has the same name as a repository-level secret, then the repository-level secret takes precedence.


### Limits for secrets

You can store up to 100 secrets per organization and 100 secrets per repository.

Secrets are limited to 48 KB in size.

### Recommended secrets for a repository

Your project may require specific user secrets. For example, to run the application in a codespace, the user may need to supply a personal API key. If this is the case, you can specify recommended secrets in the dev container configuration. The user will then be prompted to supply values for these secrets, if they haven't already created these personal secrets, when they use the advanced options page to create a codespace. If the user supplies a secret value for use in the codespace, this secret is added to their personal settings for Codespaces. They will not have to enter a value for this secret when they create a codespace for this repository in future. For more information, see [Specifying Recommended Secrets For A Repository](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/specifying-recommended-secrets-for-a-repository).

## Adding secrets for a repository

To create development environment secrets for an organization repository, you must have administrator access.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, select **{% octicon "key-asterisk" aria-hidden="true" aria-label="key-asterisk" %} Secrets and variables**, then click **Codespaces**.


1. At the top of the page, click **New repository secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the value for your secret.
1. Click **Add secret**.

## Adding secrets for an organization

When creating a development environment secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

To create secrets at the organization level, you must have `admin` access.


1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select **{% octicon "key-asterisk" aria-hidden="true" aria-label="key-asterisk" %} Secrets and variables**, then click **Codespaces**.


1. At the top of the page, click **New secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. Click **Add secret**.

## Reviewing access to organization-level secrets

You can check which access policies are applied to a development environment secret in your organization.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select **{% octicon "key-asterisk" aria-hidden="true" aria-label="key-asterisk" %} Secrets and variables**, then click **Codespaces**.


1. Optionally, to view or edit the configured permissions for each secret, to the right of the secret, click {% octicon "pencil" aria-label="Edit secret" %}.

## Further reading

* [Managing Your Account Specific Secrets For GitHub Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces)
