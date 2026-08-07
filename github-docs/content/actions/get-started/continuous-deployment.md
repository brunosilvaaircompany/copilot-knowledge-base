# Continuous deployment

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## About continuous deployment

_Continuous deployment_ (CD) is the practice of using automation to publish and deploy software updates. As part of the typical CD process, the code is automatically built and tested before deployment.

Continuous deployment is often coupled with continuous integration. For more information about continuous integration, see [Continuous Integration](https://docs.github.com/en/actions/get-started/continuous-integration).

## About continuous deployment using GitHub Actions

You can set up a GitHub Actions workflow to deploy your software product. To verify that your product works as expected, your workflow can build the code in your repository and run your tests before deploying.

You can configure your CD workflow to run when an event occurs (for example, when new code is pushed to the default branch of your repository), on a set schedule, manually, or when an external event occurs using the repository dispatch webhook. For more information about when your workflow can run, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows).

GitHub Actions provides features that give you more control over deployments. For example, you can use environments to require approval for a job to proceed, restrict which branches can trigger a workflow, or limit access to secrets. You can use concurrency to limit your CD pipeline to a maximum of one in-progress deployment. For more information about these features, see [Control Deployments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments) and [Manage Environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).



> [!TIP]
> You can use agentic workflows for deployment preparation, such as release notes, change analysis, and rollout summaries, while keeping production deployments in deterministic GitHub Actions workflows. For more information, see [Creating GitHub Agentic Workflows](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows).



## Workflow templates and third-party actions

GitHub offers deployment workflow templates for several popular services, such as Azure Web App. To learn how to get started using a workflow template, see [Use Workflow Templates](https://docs.github.com/en/actions/how-tos/write-workflows/use-workflow-templates) or [browse the full list of deployment workflow templates](https://github.com/actions/starter-workflows/tree/main/deployments). You can also check out our more detailed guides for specific deployment workflows, such as [Nodejs To Azure App Service](https://docs.github.com/en/actions/how-tos/deploy/deploy-to-third-party-platforms/nodejs-to-azure-app-service).

Many service providers also offer actions on GitHub Marketplace for deploying to their service. For the full list, see [GitHub Marketplace](https://github.com/marketplace?category=deployment&type=actions).


## Next steps

If your GitHub Actions workflows need to access resources from a cloud provider that supports OpenID Connect (OIDC), you can configure your workflows to authenticate directly to the cloud provider. This will let you stop storing these credentials as long-lived secrets and provide other security benefits. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect).
