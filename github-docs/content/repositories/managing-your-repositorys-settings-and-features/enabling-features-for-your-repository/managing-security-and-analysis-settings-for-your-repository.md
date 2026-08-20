# Managing security and analysis settings for your repository

> [!NOTE]
> When Dependabot alerts are enabled or disabled at the enterprise level, it overrides the repository level settings for Dependabot alerts. For more information, see [Configure Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts#managing-dependabot-alerts-for-your-enterprise).



## About security and analysis settings for your repository

GitHub offers a number of different security features that you can enable for your repository to
protect your code from vulnerabilities, unauthorized access, and other potential security threats. Many of these features are available for **free for public repositories**.



## Enabling or disabling security and analysis features for public repositories

You can manage a subset of security and analysis features for public repositories.

At a minimum, you should enable the following for your public repository:

* **Dependabot alerts** notify you of security vulnerabilities in your project's dependency network, so that you can update the affected dependency to a more secure version.
* **Secret scanning** scans your repository for secrets (such as API keys and tokens) and alerts you if a secret is found, so that you can remove the secret from your repository.
* **Push protection** prevents you (and your collaborators) from introducing secrets to the repository in the first place, by blocking pushes containing supported secrets.
* **Code scanning** identifies vulnerabilities and errors in your repository's code, so that you can fix these issues early and prevent a vulnerability or error being exploited by malicious actors.

Other features are permanently enabled for public repositories, such as the dependency graph, which shows you all the libraries and packages that your repository depends upon.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Advanced Security", to the right of the feature, click **Disable** or **Enable**.



## Enabling or disabling security and analysis features for private repositories

You can manage the security and analysis features for your private or internal repository. If your enterprise or organization has a license for GitHub Code Security or GitHub Secret Protection, then extra options are available. For more information, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).



If you enable security and analysis features, GitHub performs read-only analysis on your repository.



1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Advanced Security", to the right of the feature, click **Disable** or **Enable**. The control for "Secret Protection and Code Security" is disabled if your organization{% elsif ghec or ghes %}enterprise has no available licenses.

   > [!NOTE]
   > If you disable Secret Protection and Code Security, dependency review, secret scanning alerts for users and code scanning are disabled. Any workflows, SARIF uploads, or API calls for code scanning will fail. If Code Security is re-enabled, code scanning will return to its previous state.

## Granting access to security alerts

GitHub security alerts are automated notifications that inform you when vulnerabilities are found in your repository's dependencies or code. They prompt you to review and remediate these issues, helping to keep your project secure.

You can find security alerts from Dependabot, Secret scanning, and Code scanning under your repository's **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

Security alerts for a repository are visible to people with write, maintain, or admin access to the repository and, when the repository is owned by an organization, organization owners. You can give additional teams and people access to the alerts.

> [!NOTE]
> Organization owners and repository administrators can only grant access to view security alerts, such as secret scanning alerts, to people or teams who have write access to the repo.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Access to alerts", in the search field, start typing the name of the person or team you'd like to find, then click a name in the list of matches.
1. Click **Save changes**.

## Removing access to security alerts

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Access to alerts", to the right of the person or team whose access you'd like to remove, click {% octicon "x" aria-label="Revoke USER's vulnerability access " %}.

     ![Screenshot of the list of users with access to alerts. To the right of @octocat, an x icon is outlined in dark orange.](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
1. Click **Save changes**.

## Further reading

* [Quickstart For Securing Your Repository](https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository)
* [Managing Security And Analysis Settings For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)
