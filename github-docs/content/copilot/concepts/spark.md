# About GitHub Spark

## Overview

With GitHub Spark, you can describe what you want in natural language and get a fullstack web app with data storage, AI features, and GitHub authentication built in. You can iterate using prompts, visual tools, or code, and then deploy with a click to a fully managed runtime.

Spark is seamlessly integrated with GitHub so you can develop your spark via a synced GitHub codespace with Copilot for advanced editing. You can also create a repository for team collaboration, and leverage GitHub's ecosystem of tools and integrations.


## Benefits of using Spark

Spark can provide a wide range of benefits at all stages of app development.

### Build apps with natural language or code

You don't need to know how to code to build an app with Spark. You can describe what you want your app to do in natural language, and Spark will generate all the necessary code for you, along with a live, interactive preview of the app.

If you do want to explore and edit the code, you can simply open the code panel in Spark, or go further and open your app in a GitHub codespace (a cloud-based development environment).

See [What Are Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces).

### Leverage AI capabilities

Spark is natively integrated with GitHub Models, so you can add AI features to your app (for example, summarizing text or suggesting image tags) simply by prompting Spark. Spark will add the required inference components automatically, and you can edit the system prompts that control those capabilities yourself.

### Managed data store

If Spark detects the need to store data in your app, it will automatically set up a managed key-value store, so you don't need to worry about setting up and managing a database. The data store runs on Azure (Cosmos DB) and it's intended for small records (up to 512 KB per entry).

### Built-in security protections

Spark has built-in authentication, since users need to sign in with their GitHub account to access your app. You control who has access to your app by setting visibility and data access options.

### One-click deployment

Spark comes with a fully integrated runtime environment that allows you to deploy your app in one click. All necessary infrastructure is provisioned automatically, so you don't have to worry about setting up servers or managing deployments.

All sparks are hosted and deployed by Azure Container Apps (ACA).

### Fully integrated with GitHub

Spark is fully integrated with GitHub, so you can use familiar tools and workflows to build and manage your app.

#### Work in GitHub Codespaces

* You can open a GitHub codespace (a cloud-based development environment) directly from Spark, so you can continue building your app there, with access to Copilot and all your usual development tools.

* There's automatic syncing between the codespace and Spark, so you can seamlessly switch between the two environments.

#### Create a repository with two-way syncing

* You can create a repository for your spark in one click, allowing you to manage your app's code and collaborate with others using standard GitHub workflows.

* There's a two-way sync between your spark and the repository, so changes made in either Spark or the main branch of your repository are automatically reflected in both places. Any changes made to your spark prior to repository creation will be added to your repository so you have a full record of all changes and commits made to your spark since its creation.

#### Invite collaborators

* If you want to invite others to contribute to building your spark, you can add them as collaborators to your repository.

#### Leverage standard GitHub features

* Once you've created a repository for your spark, you can use all the standard GitHub features such as pull requests, issues, and project boards to manage your spark development process, as well as leverage GitHub Actions for CI/CD workflows.

## Enterprise considerations

If you’re an enterprise admin evaluating Spark, there are specific benefits and controls available at the enterprise level.

For details about enabling Spark for your enterprise, see [Manage Spark](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-spark).

### Why enable Spark for your enterprise?

Enabling Spark empowers your teams to move faster from idea to production while maintaining the security, governance, and cost controls that enterprise admins expect.

Benefits include:

* **Centralized control**. Spark is included in the Copilot license and respects existing enterprise access policies.
* **Governance and security**. Built on GitHub and Azure, sparks inherit enterprise-grade reliability, authentication, and compliance.
* **Transparency and cost management**. Spark consumption draws from AI credits, which you can monitor through the GitHub billing platform.
* **Accelerated innovation**. Teams can validate ideas in hours instead of months, without relying on fragmented toolchains.

### Billing

Each prompt to Spark consumes AI credits. See [GitHub Spark](https://docs.github.com/en/billing/concepts/product-billing/github-spark).

### Infrastructure

The Spark development environment is powered by GitHub Codespaces. If your enterprise disables Codespaces, users can still access the Spark interface but won’t be able to open the underlying codespace.

All sparks are deployed to Azure Container Apps (ACA).

## Develop your spark with Copilot

You can combine the functionality of GitHub Spark with GitHub Copilot to support your app development.

### Copilot agent mode

When you open your spark in a GitHub codespace, you have access to all of Copilot's capabilities, including Copilot Chat and Copilot agent mode.

Agent mode is useful when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete. You can take your app's development to the next level, as well as leveraging Copilot to debug and troubleshoot issues in your code.

See [Copilot agent mode](/copilot/how-tos/chat-with-copilot/chat-in-ide#agent-mode).

### Copilot cloud agent

Once your spark is connected to a GitHub repository, you can use Copilot cloud agent to help you to continue to build and maintain your app, while you focus on other things.

With the cloud agent, you delegate specific tasks to Copilot (either by assigning an issue to Copilot, or prompting Copilot to create a pull request), and Copilot will autonomously work in the background to complete the task. Copilot cloud agent can fix bugs, refactor code, improve test coverage and more.

See [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Sharing your spark

When you're ready to publish your spark, you can choose from the following visibility options:

* Private to you only
* Visible to members of a specific organization on GitHub
* Visible to all GitHub users (may be disabled for certain managed user accounts based on admin configuration)

You can then share your spark with others, so they can view and interact with your app. The link to your spark remains undiscoverable except for those who have the link.

Optionally, you can publish your spark as "read-only", meaning you can showcase your app to others without them being able to edit or delete app contents.

## Limitations of Spark

Spark uses an opinionated stack (React, TypeScript) for reliability. For best results, you should work within Spark's SDK and core framework.

You can add external libraries, but compatibility with Spark's SDK isn’t guaranteed. You should always test your spark thoroughly after adding any external libraries.

By default, your spark's data store is shared for all users of the published spark. You should make sure to delete any private or sensitive data from your app prior to making it visible to other users. You can optionally publish your spark as "read-only", meaning you can showcase your app to others without them being able to edit or delete app contents.

## Further reading

* [Agents](https://docs.github.com/en/copilot/responsible-use/agents)
* [Build Apps With Spark](https://docs.github.com/en/copilot/tutorials/spark/build-apps-with-spark)
* [Troubleshoot Spark](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-spark)
