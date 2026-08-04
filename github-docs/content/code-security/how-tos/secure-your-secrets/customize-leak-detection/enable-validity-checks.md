# Enabling validity checks for your repository

You can enable validity checks for individual repositories through repository settings. Validity checks verify whether detected secrets are still active, helping you prioritize remediation efforts. For information about what validity checks are and how they work, see [Validity Checks](https://docs.github.com/en/code-security/concepts/secret-security/validity-checks).

For a list of which secret patterns support validity checks, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).



Before you can enable validity checks for your repository, your site administrator must enable the feature for the whole instance. See [Configure Secret Scanning](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configure-secret-scanning).



## Enabling validity checks

To enable validity checks from the UI:

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Secret Protection", to the right of "Validity checks", click **Enable**.

1. Scroll to the bottom of the page and click **Save changes**.

> [!NOTE]
> You can also use the REST API to enable validity checks for partner patterns for your repository. For more information, see [Repos](https://docs.github.com/en/rest/repos/repos#update-a-repository).

Alternatively, organization owners and enterprise administrators can enable the feature for all repositories in the organization or enterprise. For more information, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration) and [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration).

## Further reading

* [Manage Secret Scanning Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts)
