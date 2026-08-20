# Automations in your enterprise

Automation on GitHub typically involves multiple components working together. The most important GitHub native components are:

* **GitHub Actions workflows**, which provide a runtime for executing automation logic. Out of the box, they work within a single repository, but they can be extended to automate across or even outside of repositories.
* **GitHub Apps**, which do not have a runtime. Instead, they provide identity, permissions, and event delivery so your automations, whether external services or workflows, can authenticate and act securely.

Most enterprise automation use GitHub Apps and GitHub Actions together. For example, a workflow running in GitHub Actions may use a GitHub App to obtain a short-lived token that allows it to perform tasks across repositories or organizations.

This guide explains how GitHub Apps, external automations, and GitHub Actions complement each other, and when to use each in your enterprise.

## GitHub Apps

A GitHub App provides the **identity, permissions, and webhook events** required for automation on or across repositories, organizations, or your enterprise. GitHub Apps themselves do **not** execute logic, they enable other systems to do so.

GitHub Apps support enterprise automation by offering:

* **Granular permissions** to follow least-privilege principles
* **Scoped installations** at the enterprise, organization, or repository level
* **Short-lived tokens** for secure access
* **Distinct identities** with full auditability
* **Delegated administration** through the GitHub App manager role
* **Consistency at scale** when owned by the enterprise account

### What do GitHub Apps enable?

GitHub Apps allow **automations you write elsewhere**—such as external services or workflow steps—to act on GitHub APIs within the permissions you grant. For example:

* Receiving webhook events and triggering external services
* Enabling a workflow to act outside its default repository scope
* Integrating GitHub with third-party systems
* Coordinating changes across many repositories
* Running long-lived bots or services that monitor enterprise-level activity



> [!NOTE]
> Enterprise-installed GitHub Apps cannot call every API endpoint. See [Installing A GitHub App On Your Enterprise](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-on-your-enterprise#what-enterprise-installed-apps-can-do).



## GitHub Actions

GitHub Actions provide GitHub’s built-in **runtime** for executing automation logic inside repositories. Workflows run on hosted or self-hosted runners and are ideal for tasks tied to code changes or repository events.

Use GitHub Actions for:

* CI/CD (build, test, deploy)
* Pull request checks and validations
* Repository-level maintenance tasks
* Event-driven workflows responding to pushes, tags, or issue updates
* Scheduled jobs with cron

### How GitHub Actions uses GitHub Apps

GitHub Actions and GitHub Apps are deeply connected:

* Workflow permissions map directly to GitHub App permissions.
* Workflows can authenticate as a specific GitHub App using `actions/create-github-app-token`.
* GitHub Apps can trigger workflows through events such as `repository_dispatch`.

## External automations and services

External automations run outside GitHub on your own infrastructure. These services typically:

* Receive webhook events from a GitHub App
* Use the GitHub App to request short-lived installation tokens
* Execute long-running or cross-enterprise logic
* Integrate with external business systems

Examples include:

* Organization-wide configuration management
* Policy enforcement services
* Multi-repository code or metadata synchronization
* Compliance report generation
* Cross-organization issue or pull request management

All of these rely on GitHub Apps for authentication, identity, and events—**not** for execution.

## How these components work together

Most enterprise automation uses a combination of GitHub Apps, external services, and GitHub Actions to achieve robust, scalable workflows.

For example:

1. An enterprise GitHub App receives a webhook when a new repository is created, and sends the webhook payload to a server where an external service is running.
1. The external service standardizes required settings and provisions resources.
1. The service triggers a GitHub Actions workflow in the repository.
1. The workflow performs CI, deploys templates, or configures scanning.

Each component handles a different layer of automation.

## When to use each type of automation

Use **a GitHub App** when you need:

* Authentication or permission to act across many repositories
* Integration with external systems
* Webhook-driven automations
* Long-lived or enterprise-wide workflows
* Auditability and identity separation

Use **external automations** when you need:

* Logic that runs continuously or outside GitHub
* Integration with internal systems

Use **GitHub Actions** when you need:

* CI/CD pipelines
* Repository-scoped automation
* Automated checks tied to repository events
* Execution of logic using GitHub’s runner infrastructure

Use **GitHub Apps and GitHub Actions together** when:

* A workflow must act beyond the repository’s default permissions
* A GitHub App needs to trigger a workflow
* External logic orchestrates in-repo execution
* Enterprise-wide policies or workflows require both identity and runtime
