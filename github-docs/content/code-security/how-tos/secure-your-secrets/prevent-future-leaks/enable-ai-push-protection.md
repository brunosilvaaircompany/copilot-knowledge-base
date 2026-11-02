# Enabling push protection for AI-detected secrets

> [!NOTE]
> Push protection for AI-detected secrets is in public preview and subject to change.


When you enable push protection for AI-detected secrets, GitHub uses AI to find and block generic secrets, such as passwords, that do not match any pattern. 

Push protection for AI-detected secrets consumes AI credits in addition to your GitHub Secret Protection or GitHub Advanced Security license. See [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection#generic-secrets-found-with-ai) and [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#secret-protection-ai-credits).

## Prerequisites

* Your repository must have GitHub Secret Protection or GitHub Advanced Security enabled.
* Push protection must be enabled. See [Enable Push Protection](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/prevent-future-leaks/enable-push-protection).
* Scanning for AI-detected secrets must be enabled. See [Enabling Secret Scanning For Ai Detected Secrets](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-ai-detected-secrets).



To use scanning for AI-detected secrets, an enterprise owner must first set a policy at the enterprise level that controls whether the feature can be enabled and disabled for repositories in an organization. This policy is set to "allowed" by default.




## Enabling push protection for AI-detected secrets for your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Secret Protection", to the right of "Push protection for AI-detected secrets", toggle the setting to **On**.

## Enabling push protection for AI-detected secrets for your organization

You can enable push protection for AI-detected secrets for repositories in your organization with a custom security configuration. Security configurations are collections of security settings that you can customize and apply at scale. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).
