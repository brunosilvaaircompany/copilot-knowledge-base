# Enabling Dependabot for your enterprise

## About Dependabot for GitHub Enterprise Server

Dependabot helps users find and fix vulnerabilities in their dependencies. You must first set up Dependabot for your enterprise, and then you can enable Dependabot alerts to notify users about vulnerable dependencies and Dependabot updates to fix the vulnerabilities and keep dependencies updated to the latest version.

Dependabot is just one of many features available to harden supply chain security for GitHub. For more information about the other features, see [Supply Chain Security](https://docs.github.com/en/code-security/concepts/security-at-scale/supply-chain-security).

### About Dependabot alerts

With Dependabot alerts, GitHub identifies insecure dependencies in repositories and creates alerts on GitHub Enterprise Server, using data from the GitHub Advisory Database and the dependency graph service.

We add advisories to the GitHub Advisory Database from the following sources:
* Security advisories reported on GitHub
* The [National Vulnerability database](https://nvd.nist.gov/)
* The [npm Security advisories database](https://github.com/advisories?query=type%3Areviewed+ecosystem%3Anpm)
* The [FriendsOfPHP database](https://github.com/FriendsOfPHP/security-advisories)
* The [Go Vulncheck database](https://pkg.go.dev/vuln/)
* The [Python Packaging Advisory database](https://github.com/pypa/advisory-database)
* The [Ruby Advisory database](https://rubysec.com/)
* The [RustSec Advisory database](https://rustsec.org/)
* Community contributions. For more information, see [https://github.com/github/advisory-database/pulls](https://github.com/github/advisory-database/pulls).

If you know of another database we should be importing advisories from, tell us about it by opening an issue in [https://github.com/github/advisory-database](https://github.com/github/advisory-database).


After you set up Dependabot for your enterprise, vulnerability data is synced from the GitHub Advisory Database to your instance once every hour. Only GitHub-reviewed advisories are synchronized. For more information, see [Browse Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/browse-advisory-database).


You can also choose to manually sync vulnerability data at any time. For more information, see [View Vulnerability Data](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/view-vulnerability-data).

> [!NOTE]
> When you enable Dependabot alerts, no code or information about code from GitHub Enterprise Server is uploaded to GitHub.com or GHE.com.

When GitHub Enterprise Server receives information about a vulnerability, it identifies repositories that use the affected version of the dependency and generates Dependabot alerts. You can choose whether or not to notify users automatically about new Dependabot alerts.

For repositories with Dependabot alerts enabled, scanning is triggered on any push to the default branch that contains a manifest file or lock file. Additionally, when a new vulnerability record is added, GitHub Enterprise Server scans all existing repositories and generates alerts for any repository that is vulnerable. For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).



#### Dependabot malware alerts

Dependabot can also use data from the GitHub Advisory Database to raise alerts for malicious packages. These packages are identified using data from GitHub-reviewed advisories, which sync to your instance every hour. Dependabot scans for malicious packages:
* When the GitHub Advisory Database syncs to your instance
* When a push to the default branch contains a manifest file or lock file

> [!NOTE]
> When you enable Dependabot malware alerts, no code or information about code from GitHub Enterprise Server is uploaded to GitHub.com or GHE.com.



### About Dependabot updates

After you enable Dependabot alerts, you can choose to enable Dependabot updates. When Dependabot updates are enabled for GitHub Enterprise Server, users can configure repositories so that their dependencies are updated and kept secure automatically.

> [!NOTE]
> Dependabot updates on GitHub Enterprise Server requires GitHub Actions with self-hosted runners.

By default, GitHub Actions runners used by Dependabot need access to the internet, to download updated packages from upstream package managers. For Dependabot updates powered by GitHub Connect, internet access provides your runners with a token that allows access to dependencies and advisories hosted on GitHub.com.

You can enable Dependabot updates for specific private registries on GitHub Enterprise Server instances with limited, or no, internet access. For more information, see [Configure Limited Internet Access](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configure-limited-internet-access).

With Dependabot updates, GitHub automatically creates pull requests to update dependencies in two ways.

* **Dependabot version updates:** Users add a Dependabot configuration file to the repository to enable Dependabot to create pull requests when a new version of a tracked dependency is released. For more information, see [Dependabot Version Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates).
* **Dependabot security updates:** Users toggle a repository setting to enable Dependabot to create pull requests when GitHub detects a vulnerability in one of the dependencies of the dependency graph for the repository. For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts) and [Dependabot Security Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates).

## Enabling Dependabot alerts

Before you can enable Dependabot alerts, you must first set up Dependabot for your enterprise:
* You must enable GitHub Connect. For more information, see [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).
* You must enable the dependency graph. For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "plug" aria-hidden="true" aria-label="plug" %} GitHub Connect**.

1. Under "Dependabot", to the right of "Periodically download the GitHub Advisory Database so that users can receive vulnerability alerts for open source code dependencies", select the dropdown menu and click **Enabled without notifications**. Optionally, to enable alerts with notifications, click **Enabled with notifications**.

   ![Screenshot of the "Enable" dropdown menu for Dependabot alerts, showing the available options.](/assets/images/enterprise/site-admin-settings/dependabot-alerts-setup-dropdown.png)

   > [!NOTE]
   > This setting controls realtime email and web notifications only. Command line interface (CLI) warnings and email digests will still be delivered regardless of which option is selected.

    > [!TIP]
   > We recommend configuring Dependabot alerts without notifications for the first few days to avoid an overload of realtime notifications. After a few days, you can enable notifications to receive Dependabot alerts as usual.

You can now enable Dependabot alerts for all existing or new private and internal repositories in the enterprise settings page for "Advanced Security Code security." Alternatively, repository administrators and organization owners can enable Dependabot alerts for each repository and organization. Public repositories are always enabled by default. For more information, see [Configure Dependabot Alerts](https://docs.github.com/en/enterprise-server@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts).

## Enabling Dependabot updates

Before you can enable Dependabot updates:
* You must enable Dependabot alerts for your enterprise. For more information, see "Enabling Dependabot alerts" above.
* You must enable TLS. Dependabot updates run on self-hosted runners, which need to have TLS enabled. For more information, see [Getting Started With Self Hosted Runners For Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise#prerequisites).
* You must configure GitHub Enterprise Server to use GitHub Actions with self-hosted runners. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

Dependabot updates are not supported on GitHub Enterprise Server if your enterprise uses clustering.

> [!NOTE]
> After you enable the dependency graph, you can use the [Dependabot action](https://github.com/github/dependabot-action). The action will raise an error if any vulnerabilities or invalid licenses are being introduced. For more information about the action, and for instructions about how to download the most recent version, see [Using The Latest Version Of The Official Bundled Actions](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/using-the-latest-version-of-the-official-bundled-actions).


1. Sign in to your GitHub Enterprise Server instance at `http(s)://HOSTNAME/login`.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Security**.

1. Under "Security", select **Dependabot updates**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.


1. Click **Visit your instance**.
1. Configure dedicated self-hosted runners to create the pull requests that will update dependencies. This is required because the workflows use a specific runner label. For more information, see [Managing Self Hosted Runners For Dependabot Updates](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates).

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "plug" aria-hidden="true" aria-label="plug" %} GitHub Connect**.

1. Under "Dependabot", to the right of "Users can easily upgrade to non-vulnerable open source code dependencies", click **Enable**.

When you enable Dependabot alerts, you should consider also setting up GitHub Actions for Dependabot security updates. This feature allows developers to fix vulnerabilities in their dependencies. For more information, see [Managing Self Hosted Runners For Dependabot Updates](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates).

If you need enhanced security, we recommend configuring Dependabot to use private registries. For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#configuring-private-registries).
