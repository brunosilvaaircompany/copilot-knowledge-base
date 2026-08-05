# Deploying with GitHub Actions

## Prerequisites

You should be familiar with the syntax for GitHub Actions. For more information, see [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows).

## Triggering your deployment

You can use a variety of events to trigger your deployment workflow. Some of the most common are: `pull_request`, `push`, and `workflow_dispatch`.

For example, a workflow with the following triggers runs whenever:

* There is a push to the `main` branch.
* A pull request targeting the `main` branch is opened, synchronized, or reopened.
* Someone manually triggers it.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

For more information, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows).

## Using environments

Environments are used to describe a general deployment target like `production`, `staging`, or `development`. When a GitHub Actions workflow deploys to an environment, the environment is displayed on the main page of the repository. You can use environments to require approval for a job to proceed, restrict which branches can trigger a workflow, gate deployments with custom deployment protection rules, or limit access to secrets. For more information about creating environments, see [Manage Environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).


You can configure environments with protection rules and secrets. When a workflow job references an environment, the job won't start until all of the environment's protection rules pass. A job also cannot access secrets that are defined in an environment until all the deployment protection rules pass. To learn more, see [Using custom deployment protection rules](#using-custom-deployment-protection-rules) in this article.

## Using concurrency

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. You can use concurrency so that an environment has a maximum of one deployment in progress at a time. For more information about concurrency, see [Control Workflow Concurrency](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency).



## Using environments without deployments

By default, when a workflow job references an environment, GitHub creates a deployment object to track the deployment. You can opt out of deployment creation by setting `deployment` to `false` in the environment configuration. The valid values are `true` (default) and `false`. You can also use an expression, for example `deployment: {% raw %}${{ github.ref_name == 'main' }}{% endraw %}`.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    environment:
      name: staging
      deployment: false
    steps:
      - name: run tests
        env:
          API_KEY: {% raw %}${{ secrets.API_KEY }}{% endraw %}
        run: echo "Running tests with staging secrets"
```

When `deployment` is set to `false`:

* The job has full access to environment secrets and variables.
* No GitHub deployment object is created—the deployment history for the environment is not updated.
* Wait timer protection rules still apply—the job waits for the configured duration.
* Required reviewers still apply—reviewers must still approve before the job runs.

This is useful when you want to use environments for:

* **Organizing secrets**—group related secrets under an environment name without creating deployment records.
* **Access control**—restrict which branches can use certain secrets via environment branch policies, without deployment tracking.
* **CI and testing jobs**—reference an environment for its configuration without adding noise to the deployment history.

### Interaction with protection rules

The `deployment` property controls which protection rules apply:

| Protection rule | `deployment: true` (default) | `deployment: false` |
|----------------|------------------------------|---------------------|
| **None** | Deployment created, job runs | No deployment, job runs |
| **Wait timer** | Wait timer enforced | Wait timer still enforced |
| **Required reviewers** | Reviewers must approve | Reviewers must approve |
| **Custom deployment protection rule app** | App webhook sent, must approve | **Job fails with error** |

Custom deployment protection rules (GitHub Apps) require a deployment object to function. If you set `deployment: false` on an environment that has custom deployment protection rules, the job will fail immediately with an annotation or error message explaining that the environment's protection rules are incompatible with `deployment: false`. Either remove `deployment: false` from your workflow, or remove the custom deployment protection rules from the environment.

Note that `concurrency` and `environment` are not connected. The concurrency value can be any string; it does not need to be an environment name. Additionally, if another workflow uses the same environment but does not specify concurrency, that workflow will not be subject to any concurrency rules.


For example, when the following workflow runs, it will be paused with the status `pending` if any job or workflow that uses the `production` concurrency group is in progress. It will also cancel any job or workflow that uses the `production` concurrency group and has the status `pending`. This means that there will be a maximum of one running and one pending job or workflow in that uses the `production` concurrency group.

```yaml
name: Deployment

concurrency: production

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

You can also specify concurrency at the job level. This will allow other jobs in the workflow to proceed even if the concurrent job is `pending`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    concurrency: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

You can also use `cancel-in-progress` to cancel any currently running job or workflow in the same concurrency group.

```yaml
name: Deployment

concurrency:
  group: production
  cancel-in-progress: true

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

For guidance on writing deployment-specific steps, see [Finding deployment examples](#finding-deployment-examples).

## Viewing deployment history

When a GitHub Actions workflow deploys to an environment, the environment is displayed on the main page of the repository. For more information about viewing deployments to environments, see [View Deployment History](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/view-deployment-history).



Your organization can collect deployment records for all your builds in a single place by uploading data to the linked artifacts page. See [Linked Artifacts](https://docs.github.com/en/code-security/concepts/supply-chain-security/linked-artifacts).



## Monitoring workflow runs

Every workflow run generates a real-time graph that illustrates the run progress. You can use this graph to monitor and debug deployments. For more information see, [Use The Visualization Graph](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-the-visualization-graph).

You can also view the logs of each workflow run and the history of workflow runs. For more information, see [View Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history).

## Using required reviews in workflows

Jobs that reference an environment configured with required reviewers will wait for an approval before starting. While a job is awaiting approval, it has a status of "Waiting". If a job is not approved within 30 days, it will automatically fail.

For more information about environments and required approvals, see [Manage Environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments). For information about how to review deployments with the REST API, see [Workflow Runs](https://docs.github.com/en/rest/actions/workflow-runs).

## Using custom deployment protection rules

> [!NOTE]
> Custom deployment protection rules are currently in public preview and subject to change.


You can enable your own custom protection rules to gate deployments with third-party services. For example, you can use services such as Datadog, Honeycomb, and ServiceNow to provide automated approvals for deployments to GitHub.


Custom deployment protection rules are powered by GitHub Apps and run based on webhooks and callbacks. Approval or rejection of a workflow job is based on consumption of the `deployment_protection_rule` webhook. For more information, see [Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads#deployment_protection_rule) and [Approving or rejecting deployments](/actions/how-tos/deploy/configure-and-manage-deployments/create-custom-protection-rules#approving-or-rejecting-deployments).

Once you have created a custom deployment protection rule and installed it on your repository, the custom deployment protection rule will automatically be available for all environments in the repository.

Deployments to an environment can be approved or rejected based on the conditions defined in any external service like an approved ticket in an IT Service Management (ITSM) system, vulnerable scan result on dependencies, or stable health metrics of a cloud resource. The decision to approve or reject deployments is at the discretion of the integrating third-party application and the gating conditions you define in them. The following are a few use cases for which you can create a deployment protection rule.

* ITSM & Security Operations: you can check for service readiness by validating quality, security, and compliance processes that verify deployment readiness.
* Observability systems: you can consult monitoring or observability systems (Asset Performance Management Systems and logging aggregators, cloud resource health verification systems, etc.) for verifying the safety and deployment readiness.
* Code quality & testing tools: you can check for automated tests on CI builds which need to be deployed to an environment.

Alternatively, you can write your own protection rules for any of the above use cases or you can define any custom logic to safely approve or reject deployments from pre-production to production environments.

## Tracking deployments through apps


If your personal account or organization on GitHub is integrated with Microsoft Teams or Slack, you can track deployments that use environments through Microsoft Teams or Slack. For example, you can receive notifications through the app when a deployment is pending approval, when a deployment is approved, or when the deployment status changes. For more information about integrating Microsoft Teams or Slack, see [Featured GitHub Integrations](https://docs.github.com/en/integrations/concepts/featured-github-integrations#team-communication-tools).


You can also build an app that uses deployment and deployment status webhooks to track deployments. When a workflow job that references an environment runs, it creates a deployment object with the `environment` property set to the name of your environment. As the workflow progresses, it also creates deployment status objects with the `environment` property set to the name of your environment, the `environment_url` property set to the URL for environment (if specified in the workflow), and the `state` property set to the status of the job.
 For more information, see [Apps](https://docs.github.com/en/apps) and [Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads#deployment).

## Choosing a runner

You can run your deployment workflow on GitHub-hosted runners or on self-hosted runners. Traffic from GitHub-hosted runners can come from a [wide range of network addresses](/rest/meta/meta#get-github-meta-information). If you are deploying to an internal environment and your company restricts external traffic into private networks, GitHub Actions workflows running on GitHub-hosted runners may not be able to communicate with your internal services or resources. To overcome this, you can host your own runners. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners) and [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners).

## Displaying a status badge

You can use a status badge to display the status of your deployment workflow. A status badge shows whether a workflow is currently failing or passing. A common place to add a status badge is in the `README.md` file of your repository, but you can add it to any web page you'd like. By default, badges display the status of your default branch. If there are no workflow runs on your default branch, it will display the status of the most recent run across all branches. You can display the status of a workflow run for a specific branch or event using the `branch` and `event` query parameters in the URL.

![Screenshot of a workflow status badge. From right to left it shows: the GitHub logo, workflow name ("GitHub Actions Demo"), and status ("passing").](/assets/images/help/repository/actions-workflow-status-badge.png)


For more information, see [Add A Status Badge](https://docs.github.com/en/actions/how-tos/monitor-workflows/add-a-status-badge).

## Finding deployment examples

This article demonstrated features of GitHub Actions that you can add to your deployment workflows.

GitHub offers deployment workflow templates for several popular services, such as Azure Web App. To learn how to get started using a workflow template, see [Use Workflow Templates](https://docs.github.com/en/actions/how-tos/write-workflows/use-workflow-templates) or [browse the full list of deployment workflow templates](https://github.com/actions/starter-workflows/tree/main/deployments). You can also check out our more detailed guides for specific deployment workflows, such as [Nodejs To Azure App Service](https://docs.github.com/en/actions/how-tos/deploy/deploy-to-third-party-platforms/nodejs-to-azure-app-service).

Many service providers also offer actions on GitHub Marketplace for deploying to their service. For the full list, see [GitHub Marketplace](https://github.com/marketplace?category=deployment&type=actions).
