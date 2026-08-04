# Configuring custom deployment protection rules

> [!NOTE]
> Custom deployment protection rules are currently in public preview and subject to change.


## About custom deployment protection rules

Custom deployment protection rules are powered by GitHub Apps. Once a deployment protection rule is configured and installed in a repository, it can be enabled for any environments in the repository.

After you enable a custom deployment protection rule on an environment, every time a workflow step targets that environment, the deployment protection rule will run automatically. For more information about targeting an environment for deployments, see [Manage Environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).

When a custom deployment protection rule is triggered it will wait for up to 30 days for a webhook event response before it times out and the workflow job fails.

For more information about creating your own custom deployment protection rules, see [Create Custom Protection Rules](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/create-custom-protection-rules).

> [!NOTE]
> Any number of GitHub Apps-based deployment protection rules can be installed on a repository. However, a maximum of 6 deployment protection rules can be enabled on any environment at the same time.


## Using existing custom deployment protection rules

You can choose to create your own custom deployment protection rules or you may use any existing custom deployment protection rules.

The following is a list of official partner implementations for deployment protection rules.

* Datadog: you can enforce protection rules on your GitHub Actions deployment workflows using Datadog monitors. For more information, see [Gating your GitHub Actions Deployments with Datadog Monitors](https://docs.datadoghq.com/continuous_integration/guides/github_gating/) in the Datadog documentation.
* Honeycomb: you can define thresholds to reject or approve deployments based on data you are sending to Honeycomb. For more information, see [the Honeycomb app](https://github.com/apps/honeycomb-io) in the GitHub Marketplace.
* New Relic: for more information, see [the New Relic app](https://github.com/apps/new-relic-gate) in the GitHub Marketplace.
* NCM NodeSource: for more information, see [the NCM NodeSource app](https://github.com/apps/ncm-nodesource) in the GitHub Marketplace.
* ServiceNow: for more information, see [GitHub integration with DevOps Change Velocity](https://www.servicenow.com/docs/bundle/utah-devops/page/product/enterprise-dev-ops/concept/github-integration-dev-ops.html) in the ServiceNow documentation.

## Prerequisites

In order for a custom deployment protection rule to be available to all environments in a repository, you must first install the custom deployment protection rule on the repository. For more information, see [Installing Your Own GitHub App](https://docs.github.com/en/apps/using-github-apps/installing-your-own-github-app).

After a custom deployment protection rule has been installed in a repository, it must be enabled for each environment where you want the rule to apply.

## Enabling custom deployment protection rules for the environment

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, click **Environments**.

1. Select the environment you want to configure.
1. Under "Deployment protection rules," check the box next to each custom deployment protection rule you want to enable for the environment.
1. Click **Save protection rules**.

Once a custom deployment protection rule has been enabled for an environment, it will automatically run whenever a workflow reaches a job that references the environment. You can see the results of an approval or rejection for your deployment by reviewing the details of the deployment. For more information, see [Review Deployments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments).
