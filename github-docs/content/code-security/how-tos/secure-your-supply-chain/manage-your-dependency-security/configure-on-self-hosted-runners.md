# Configuring Dependabot on self-hosted runners

## Prerequisites

* Dependabot is installed and enabled.
* GitHub Actions is enabled and in use.


When you enforce a policy to only allow actions and reusable workflows from your enterprise, and you enable Dependabot on GitHub Actions, Dependabot will not run. To enable Dependabot to run with your enterprise actions and reusable workflows, you should choose either to allow actions created by GitHub, or allow specified actions and reusable workflows. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-and-reusable-workflows-to-run).



## Adding self-hosted runners for Dependabot updates

1. Provision self-hosted runners, at the repository or organization level. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners) and [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).
1. Configure your environment and runners to meet the requirements for Dependabot. See [Requirements for using Dependabot with self-hosted runners](/code-security/reference/supply-chain-security/dependabot-on-actions#requirements-for-using-dependabot-with-self-hosted-runners).
1. If you are configuring self-hosted runners for your organization, you can create and assign a custom label for your runners. Otherwise, if you are configuring self-hosted runners for a standalone repository, you need to apply the `dependabot` label. See [Apply Labels](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/apply-labels).
1. Optionally, enable workflows triggered by Dependabot to use more than read-only permissions and to have access to any secrets that are normally available. For more information, see [Dependabot On Actions](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-on-actions).

## Enabling self-hosted runners for Dependabot updates

> [!WARNING]
> Before enabling "Dependabot on self-hosted runners", ensure that your self-hosted runners or larger runners are configured with the runner label used by Dependabot (by default, `dependabot`). When this setting is enabled, Dependabot jobs will only run on runners with this label. If no runners with this label are available, jobs will remain queued indefinitely. See [Dependabot On Actions](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-on-actions#how-runner-settings-interact).

Once you have configured self-hosted runners for Dependabot updates, you can enable or disable Dependabot updates on self-hosted runners at the organization or repository level.

> [!NOTE]
> Disabling and re-enabling the "Dependabot on self-hosted runners" setting does not trigger a new Dependabot run.

### For your private or internal repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Dependabot", to the right of "Dependabot on self-hosted runners", click **Enable** to enable the feature or **Disable** to disable it.

    > [!NOTE] If you do not see the option to enable Dependabot on self-hosted runners, your organization may have configured a policy to restrict actions and self-hosted runners from running in specific repositories. Contact your organization owner for more information.

### For your organization

You can enable Dependabot on self-hosted runners for all existing private or internal repositories in an organization. Only repositories already configured to run Dependabot on GitHub Actions will be updated to run Dependabot on self-hosted runners the next time a Dependabot job is triggered.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** then **Global settings**.

1. In the "Dependabot" section, next to "Runner type", click {% octicon "pencil" aria-label="Edit runner type" %}.
1. Select the "Runner type" dropdown menu, then click **Labeled runner** and provide any additional information. If you applied a custom label to your self-hosted runners, type that label in the "Runner label" text box.
1. To enable the feature for all new repositories in the organization, click **Save runner selection**.
