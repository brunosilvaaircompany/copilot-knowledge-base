# Configuring Dependabot alerts

When Dependabot detects vulnerable dependencies in a repository, it generates alerts. For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).

You can enable or disable Dependabot alerts for:
* Your personal account
* Your repository
* Your organization
* Your enterprise


> [!NOTE]
> An enterprise owner must first set up Dependabot for your enterprise before you can configure Dependabot alerts. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).


## Managing Dependabot alerts for your personal account



You can enable or disable Dependabot alerts for all repositories owned by your personal account.

<a href="https://github.com/settings/security_analysis?ref_product=github&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Go to your security settings</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### Enabling or disabling Dependabot alerts for existing repositories

1. Under "Advanced Security", to the right of Dependabot alerts, click **Disable all** or **Enable all**.
1. Optionally, to enable Dependabot alerts by default for new repositories that you create, in the dialog box, select "Enable by default for new repositories".
1. Click **Disable Dependabot alerts** or **Enable Dependabot alerts** to disable or enable Dependabot alerts for all the repositories you own.

When you enable Dependabot alerts for existing repositories, you will see any results displayed on GitHub within minutes.

### Enabling or disabling Dependabot alerts for new repositories

1. Under "Advanced Security", to the right of Dependabot alerts, select **Automatically enable for new repositories**.



## Managing Dependabot alerts for your repository

You can manage Dependabot alerts for your public, private or internal repository.

By default, we notify people with write, maintain, or admin permissions in the affected repositories about new Dependabot alerts. GitHub never publicly discloses insecure dependencies for any repository. You can also make Dependabot alerts visible to additional people or teams working on repositories that you own or have admin permissions for.


If you enable security and analysis features, GitHub performs read-only analysis on your repository.




An enterprise owner must first set up Dependabot for your enterprise before you can manage Dependabot alerts for your repository. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

### Enabling or disabling Dependabot alerts for a repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Advanced Security", to the right of Dependabot alerts, click **Enable** to enable alerts or **Disable** to disable alerts.

## Managing Dependabot alerts for your organization

You can enable Dependabot alerts for all eligible repositories in your organization. For more information, see [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security).



## Managing Dependabot alerts for your enterprise

{% ifversion security-configuration-enterprise-level %}

Security configurations, which are collections of security settings, allow you to manage Dependabot alerts for your enterprise. You can configure your own custom security configuration to have the enablement settings to meet the specific security needs of your enterprise. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration).



{% endif %}

## Managing Dependabot alerts at scale with rules

Additionally, you can use Dependabot auto-triage rules to manage your alerts at scale, so you can auto-dismiss or snooze alerts, and specify which alerts you want Dependabot to open pull requests for. For information about the different types of auto-triage rules, and whether your repositories are eligible, see [Dependabot Auto Triage Rules](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules).
