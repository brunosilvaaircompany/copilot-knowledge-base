# GitHub's plans

## About GitHub's plans

GitHub offers free and paid plans for storing and collaborating on code. Some plans are available only to personal accounts, while other plans are available only to organization and enterprise accounts. For more information about accounts, see [Types Of GitHub Accounts](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts).

See costs and features for each plan at [GitHub Pricing](https://github.com/pricing). For information on planned features and products, see the [GitHub public roadmap](https://github.com/github/roadmap#github-public-roadmap).


When you read GitHub Docs, make sure to select the version that reflects your plan. For more information, see [About Versions Of GitHub Docs](https://docs.github.com/en/get-started/using-github-docs/about-versions-of-github-docs).

## GitHub Free for personal accounts

With GitHub Free for personal accounts, you can work with unlimited collaborators on unlimited public repositories with a full feature set, and on unlimited private repositories with a limited feature set.

With GitHub Free, your personal account includes:
* GitHub Community Support
* Dependabot alerts
* Deployment protection rules for public repositories
* Two-factor authentication enforcement
* 500 MB GitHub Packages storage 
* 120 GitHub Codespaces core hours per month
* 15 GB GitHub Codespaces storage per month 
* GitHub Actions features:
  * 2,000 minutes per month
  * Deployment protection rules for public repositories
* GitHub Pages in public repositories

## GitHub Pro

In addition to the features available with GitHub Free for personal accounts, GitHub Pro includes:
* GitHub Support via email
* 3,000 GitHub Actions minutes per month
* 2 GB GitHub Packages storage 
* 180 GitHub Codespaces core hours per month
* 20 GB GitHub Codespaces storage per month 
* Advanced tools and insights in private repositories:
  * Required pull request reviewers
  * Multiple pull request reviewers
  * Protected branches
  * Code owners
  * Auto-linked references
  * GitHub Pages

    > [!NOTE]
    > To publish a GitHub Pages site privately, you need to have an organization account. Additionally, your organization must use GitHub Enterprise Cloud.

  * Wikis
  * Repository insights graphs: Pulse, contributors, traffic, commits, code frequency, network, and forks
    

> [!NOTE]
> Certain contributor, commit, and code frequency insights are only available for repositories that have fewer than 10,000 commits.




## GitHub Free for organizations

With GitHub Free for organizations, you can work with unlimited collaborators on unlimited public repositories with a full feature set, or unlimited private repositories with a limited feature set.

In addition to the features available with GitHub Free for personal accounts, GitHub Free for organizations includes:
* GitHub Community Support
* Team access controls for managing groups
* 2,000 GitHub Actions minutes per month

## GitHub Team

In addition to the features available with GitHub Free for organizations, GitHub Team includes:
* GitHub Support via email
* 3,000 GitHub Actions minutes per month
* 2 GB GitHub Packages storage
* The option to purchase GitHub Advanced Security products:
  * GitHub Code Security
  * GitHub Secret Protection

  For more information, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).

* Advanced tools and insights in private repositories:
  * Required pull request reviewers
  * Multiple pull request reviewers
  * Team pull request reviewers
  * Protected branches
  * Code owners
  * Scheduled reminders
  * GitHub Pages

    > [!NOTE]
    > To publish a GitHub Pages site privately, you need to have an organization account. Additionally, your organization must use GitHub Enterprise Cloud.

  * Wikis
  * Security overview
  * Repository insights graphs: Pulse, contributors, traffic, commits, code frequency, network, and forks
    

> [!NOTE]
> Certain contributor, commit, and code frequency insights are only available for repositories that have fewer than 10,000 commits.




* The option to enable or disable GitHub Codespaces
  * Organization owners can choose to enable or disable GitHub Codespaces for the organization's private {% ifversion ghec %}and internal repositories, and can pay for the usage of members and collaborators. For more information, see [Enabling Or Disabling GitHub Codespaces For Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization) and [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).
{%- endif %}

GitHub bills for GitHub Team on a per-user basis. For more information, see [About per-user pricing](/free-pro-team@latest/billing/managing-the-plan-for-your-github-account/about-per-user-pricing).

GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners. See [Choose The Runner For A Job](https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories). For private repositories, each GitHub account receives a quota of free minutes and storage for use with GitHub-hosted runners, depending on the account's plan. Any usage beyond the included amounts is billed to your account.


## GitHub Enterprise

GitHub Enterprise includes two deployment options: GitHub Enterprise Cloud, which is hosted by GitHub in the cloud, and GitHub Enterprise Server, which is self-hosted. For more information, see [About GitHub for enterprises](/enterprise-cloud@latest/admin/overview/about-github-for-enterprises) in the GitHub Enterprise Cloud documentation.

In addition to the features available with GitHub Team, GitHub Enterprise includes:

* GitHub Enterprise Support
* Additional security, compliance, and deployment controls
* Authentication with SAML single sign-on
* Access provisioning with SAML or SCIM
* Deployment protection rules with GitHub Actions for private or internal repositories
* GitHub Connect
* Additional features such as internal repositories and repository rules.

GitHub Enterprise Cloud specifically includes:
* 50,000 GitHub Actions minutes per month
  * Included minutes can be used with standard GitHub-hosted runners only. For more information about billing for larger runners, see [Larger Runners](https://docs.github.com/en/enterprise-cloud@latest/actions/concepts/runners/larger-runners#billing).
* 50 GB GitHub Packages storage
* A service level agreement for 99.9% monthly uptime
* The option to centrally manage policy and billing for multiple GitHub organizations with an enterprise account. For more information, see [Enterprise Accounts](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/enterprise-accounts).

  * If you upgrade an existing organization to GitHub Enterprise Cloud, your enterprise account will contain your organization. For more information, see [Upgrading Your Accounts Plan](https://docs.github.com/en/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan#upgrading-your-organizations-plan) and [Creating An Enterprise Account](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-your-enterprise-account/creating-an-enterprise-account) in the GitHub Enterprise Cloud documentation.
* The option to provision and manage the user accounts for your developers, by using Enterprise Managed Users. For more information, see [Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users).
* Additional features such as audit log streaming and IP allow list. For more information, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) and [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) in the GitHub Enterprise Cloud documentation.
* The option to host your company's data in a specific region, on a unique subdomain

For a detailed list of the features available with GitHub Enterprise, see our [Pricing](https://github.com/pricing) page.

To see how GitHub compares to GitLab, Bitbucket, and Jenkins, see [Comparing GitHub to other DevOps solutions](https://github.com/resources/articles/devops-tools-comparison).

You can set up trials to evaluate GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see [Setting Up A Trial Of GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud) and [Setting Up A Trial Of GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@latest/admin/overview/setting-up-a-trial-of-github-enterprise-server).

## Further reading

* [About per-user pricing](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/about-per-user-pricing) in the GitHub Enterprise Cloud documentation
