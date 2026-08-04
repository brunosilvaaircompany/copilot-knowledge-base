# Enabling generic secret detection for AI-detected secrets

## Enabling generic secret detection



To use generic secret detection, an enterprise owner must first set a policy at the enterprise level that controls whether the feature can be enabled and disabled for repositories in an organization. This policy is set to "allowed" by default.




You can enable generic secret detection in the security settings page of your repository or organization.



> [!NOTE]
> You do not need a subscription to GitHub Copilot to use AI-powered generic secret detection. AI-detected secrets features are available to repositories owned by organizations and enterprises with GitHub Secret Protection enabled.




### Enabling generic secret detection for your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Secret Protection", to the right of "Scan for AI-detected secrets", click **Enable**.

### Enabling generic secret detection for your organization

You must configure generic secret detection for your organization using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your organization.

1. Create a new custom security configuration, or edit an existing one. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).
1. When creating the custom security configuration, ensure that "Secret Protection" is set to **Enabled**, and that the dropdown menu for "Scan for AI-detected secrets" is also set to **Enabled**.
1. Apply the custom security configuration to one or more repositories. For more information, see [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).

For information on how to view alerts for generic secrets that have been detected with AI, see [Viewing Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/viewing-alerts).

## Further reading

* [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features)
