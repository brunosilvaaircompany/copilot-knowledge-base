# Error: "GitHub Code Security or GitHub Advanced Security must be enabled for this repository to use code scanning"

## About this error

```text
GitHub Code Security or GitHub Advanced Security must be enabled for this repository to use code scanning
403: GitHub Code Security or GitHub Advanced Security is not enabled
```

This error is reported if you try to run code scanning in a repository where GitHub Code Security is not enabled or where use of this feature is blocked by a policy.

You will only see this error for repositories with private or internal visibility. GitHub Code Security is enabled by default for all public repositories.


If you are on a **GitHub Free** or **GitHub Pro** plan, you can only use code scanning on repositories that are publicly available. To enable code scanning for private or internal repositories, you must upgrade to GitHub Team or GitHub Enterprise with GitHub Code Security and enable Code Security for the repository. For more information, see [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans#github-team) and [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).


## Confirming the cause of the error

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. On the settings page, scroll down to "Code Security."
1. If there is an associated and active **Enable** button, GitHub Code Security is available for this repository but not yet enabled.
1. If use of GitHub Code Security is blocked by a policy, "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Disabled" is shown in place of the **Enable** button.

   !["Screenshot of the Advanced Security" setting. The disabled option is highlighted in dark orange.](/assets/images/help/repository/ghas-enterprise-policy-block.png)

## Fixing the problem

If GitHub Code Security is available to your repository, you can enable it on the settings page.

If GitHub Code Security is blocked by a policy, you first need to request access.

### Requesting access to GitHub Code Security

1. In the "Advanced Security" settings, click the enterprise name to display a list of users with access to edit the policy that controls access to Code Security products. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-for-the-availability-of-advanced-security-in-your-enterprises-organizations).
1. Follow your company's policy for requesting access to additional features.

### Enabling GitHub Code Security

1. Open the "Code security" settings page.
1. Next to the "Code Security" feature, click **Enable**.
1. Rerun code scanning.
