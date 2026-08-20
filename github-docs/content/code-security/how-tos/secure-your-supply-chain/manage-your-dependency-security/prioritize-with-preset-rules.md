# Using GitHub preset rules to prioritize Dependabot alerts

## Prerequisites

Before you enable GitHub presets for your repository, you should be familiar with their functionality and purpose. See [Dependabot Auto Triage Rules](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules).

## Enabling GitHub preset rules

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. In the "Dependabot" section, to the right of "Dependabot rules", click {% octicon "gear" aria-label="Configure Dependabot rules" %}.

   ![Screenshot of the "Advanced Security" page for a repository. The gear icon is highlighted with an orange outline.](/assets/images/help/repository/dependabot-rules-page.png)

1. In the "GitHub presets" section, to the right of the rule you want to enable, click {% octicon "pencil" aria-label="Edit rule" %}.
1. In the "State" section, select the dropdown menu, then click **Enabled**.
1. Click **Save rule**.
