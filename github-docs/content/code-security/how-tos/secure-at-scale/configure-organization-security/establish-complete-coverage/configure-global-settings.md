# Configuring global security settings for your organization

## Accessing the global settings page for your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **Advanced Security** dropdown menu, then click **Global settings**.

## Configuring global Dependabot settings

You can customize several global settings for Dependabot:

* [Creating and managing Dependabot auto-triage rules](#creating-and-managing-dependabot-auto-triage-rules)
* [Grouping Dependabot security updates](#grouping-dependabot-security-updates)
* [Enabling dependency updates on GitHub Actions runners](#enabling-dependency-updates-on-github-actions-runners)
* [Configuring the runner type for Dependabot](#configuring-the-runner-type-for-dependabot)
* [Granting Dependabot access to private repositories](#granting-dependabot-access-to-private-repositories)

### Creating and managing Dependabot auto-triage rules

You can create and manage Dependabot auto-triage rules to instruct Dependabot to automatically dismiss or snooze Dependabot alerts, and even open pull requests to attempt to resolve them. To configure Dependabot auto-triage rules, click {% octicon "gear" aria-label="Configure Dependabot rules" %}, then create or edit a rule:
  * You can create a new rule by clicking **New rule**, then entering the details for your rule and clicking **Create rule**.
  * You can edit an existing rule by clicking {% octicon "pencil" aria-label="Edit CURATED-OR-CUSTOM rule" %}, then making the desired changes and clicking **Save rule**.

For more information on Dependabot auto-triage rules, see [Dependabot Auto Triage Rules](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules) and [Auto Triage Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/auto-triage-dependabot-alerts#adding-custom-auto-triage-rules-to-your-organization).

### Grouping Dependabot security updates

Dependabot can group all automatically suggested security updates into a single pull request. To enable grouped security updates, select **Grouped security updates**. For more information about grouped updates and customization options, see [Configure Security Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates#grouping-dependabot-security-updates-into-a-single-pull-request).



### Enabling dependency updates on GitHub Actions runners

If both Dependabot and GitHub Actions are enabled for existing repositories in your organization, GitHub will automatically use GitHub-hosted runners to run dependency updates for those repositories.

Otherwise, to allow Dependabot to use GitHub Actions runners to perform dependency updates for all existing repositories in the organization, select "Dependabot on Actions runners".

For more information, see [Dependabot On Actions](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-on-actions).





### Configuring the runner type for Dependabot

You can configure which type of runner Dependabot uses to scan for version and security updates. By default, Dependabot uses standard **GitHub-hosted runners**. You can configure Dependabot to use **self-hosted runners** with custom labels, which allows you to integrate with existing runner infrastructure such as Actions Runner Controller (ARC).

> [!NOTE]
> * For security reasons, Dependabot uses GitHub-hosted runners for public repositories, even when you configure labeled runners.
> * Labeled runners **do not work** for public repositories.

To configure the runner type:

1. Under "Dependabot", next to "Runner type", select {% octicon "pencil" aria-label="Edit runner type" %}.
1. In the "Edit runner type for Dependabot" dialog, select the runner type you want Dependabot to use:
   * **Standard GitHub runner**.
   * **Labeled runner**: If you select this option, Dependabot will use self-hosted runners that match the label you specify.
1. If you selected **Labeled runner**:
   * In "Runner label", enter the label assigned to your self-hosted runners. Dependabot will use runners with this label. By default, the `dependabot` label is used, but you can specify a custom label to match your existing runner infrastructure.
   * Optionally, in "Runner group name", enter the name of a runner group if you want to target a specific group of runners.
1. Click **Save runner selection**.





For more information about configuring self-hosted runners for Dependabot, see [Configure On Self Hosted Runners](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-on-self-hosted-runners).



### Granting Dependabot access to private and internal repositories

To update private dependencies of repositories in your organization, Dependabot needs access to those repositories. To grant Dependabot access to the desired private or internal repository, scroll down to the "Grant Dependabot access to private repositories" section, then use the search bar to find and select the desired repository. Be aware that granting Dependabot access to a repository means all users in your organization will have access to the contents of that repository through Dependabot updates. For more information about the supported ecosystems for private repositories, see [Supported Ecosystems And Repositories](https://docs.github.com/en/code-security/reference/supply-chain-security/supported-ecosystems-and-repositories).

## Configuring global code scanning settings

Code scanning is a feature that you use to analyze the code in a GitHub repository to find security vulnerabilities and coding errors. Any problems identified by the analysis are shown in your repository.





You can recommend that repositories in your organization use the "Extended" query suite instead of the "Default" query suite for broader code scanning coverage across your organization. See [Recommending the extended query suite for default setup](#recommending-the-extended-query-suite-for-default-setup).



* [Enabling AI-powered security detections](#enabling-ai-powered-security-detections)

* [Expanding CodeQL analysis](#expanding-codeql-analysis)

* [Continuing scans on inactive repositories](#continuing-scans-on-inactive-repositories)


{% endif %}

### Recommending the extended query suite for default setup

Code scanning offers specific groups of CodeQL queries, called CodeQL query suites, to run against your code. By default, the "Default" query suite is run. GitHub also offers the "Extended" query suite, which contains all the queries in the "Default" query suite, plus additional queries with lower precision and severity. To suggest the "Extended" query suite across your organization, select **Recommend the extended query suite for repositories enabling default setup**. For more information on built-in query suites for CodeQL default setup, see [Codeql Query Suites](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites).



### Enabling Copilot Autofix for CodeQL

You can select **Copilot Autofix** to enable Copilot Autofix for all the repositories in your organization that use CodeQL default setup or CodeQL advanced setup. Copilot Autofix is an expansion of code scanning that suggests fixes for code scanning alerts. For more information, see [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features).





### Enabling AI-powered security detections

You can select **AI-powered security detections** to enable AI-powered security detections for all repositories in your organization that use CodeQL default setup. See [Ai Powered Security Detections](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections).



### Expanding CodeQL analysis

You can expand CodeQL analysis coverage for all repositories in your organization that use default setup by configuring CodeQL model packs. Model packs extend the CodeQL analysis to recognize additional frameworks and libraries that are not included in the standard CodeQL libraries. This global configuration applies to repositories using default setup and allows you to specify model packs published via the container registry. For more information, see [Edit Default Setup](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/edit-default-setup#extending-coverage-for-all-repositories-in-an-organization).



### Continuing scans on inactive repositories

By default, code scanning default setup pauses weekly scheduled scans on repositories that have had no commits pushed or pull requests opened for 180 days.
 You can select **Keep scheduled scans running every 30 days for inactive repositories** to override this behavior in an organization. The scan period is not configurable.



## Configuring global secret scanning settings

Secret scanning is a security tool that scans the entire Git history of repositories, as well as issues, pull requests, discussions, and wikis{% elsif ghes < 3.19 %}, pull requests, and discussions in those repositories, for leaked secrets that have been accidentally committed, such as tokens or private keys.


You can customize several global settings for secret scanning:

* [Adding a resource link for blocked commits](#adding-a-resource-link-for-blocked-commits)
* [Defining custom patterns](#defining-custom-patterns)
* [Specifying patterns to include in push protection](#specifying-patterns-to-include-in-push-protection)

### Adding a resource link for blocked commits

To provide context for developers when secret scanning blocks a commit, you can display a link with more information on why the commit was blocked. To include a link, select **Add a resource link in the CLI and the web UI when a commit is blocked**. In the text box, type the link to the desired resource, then click **Save Link**.

### Defining custom patterns

You can define custom patterns for secret scanning with regular expressions. Custom patterns can identify secrets that are not detected by the default patterns supported by secret scanning. To create a custom pattern, click **New pattern**, then enter the details for your pattern and click **Save and dry run**. For more information on custom patterns, see [Define Custom Patterns](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns).



### Specifying patterns to include in push protection

> [!NOTE]
> The configuration of patterns for push protection at enterprise and organization level is currently in public preview and subject to change.


You can customize which secret patterns are included in push protection, giving security teams greater control over what types of secrets are blocked in the repositories in your organization.

1. Under "Additional settings", in the "Secret scanning" section and to the right of "Pattern configurations", click **{% octicon "gear" aria-label="The Gear icon" %}**.
1. In the page that gets displayed, make the desired changes in the "Organization setting" column.

   You can enable or disable push protection for individual patterns by using the toggle in the relevant column: "Enterprise setting" at the enterprise level, and "Organization setting" at the organization level.

   The data is limited to the scope, therefore the alert volume, false positives, bypass rate, or availability of custom patterns is reflective of user / alert activity within the _enterprise_ or _organization_.

   The GitHub default may change over time as we increase precision and promote patterns.

   > [!NOTE] Organization administrators and security teams can override settings configured at the enterprise level.



For more information on how to read data on the secret scanning pattern configuration page, see [Secret Pattern Data](https://docs.github.com/en/code-security/reference/secret-security/secret-pattern-data).



## Creating security managers for your organization

The security manager role grants members of your organization the ability to manage security settings and alerts across your organization. Security managers can view data for all repositories in your organization through security overview.

To learn more about the security manager role, see [Managing Security Managers In Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

To assign the security manager role, see [Using Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).
