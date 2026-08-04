# Getting started with GitHub Actions for GitHub Enterprise Cloud

## About GitHub Actions on GitHub Enterprise Cloud

GitHub Actions is enabled for your enterprise by default. To get started using GitHub Actions within your enterprise, you can manage the policies that control how enterprise members use GitHub Actions and optionally add self-hosted runners to run workflows.

Before you get started, you should make a plan for how you'll introduce GitHub Actions to your enterprise. For more information, see [Introducing GitHub Actions To Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise).


If you're migrating your enterprise to GitHub Actions from another provider, there are additional considerations. For more information, see [Migrating Your Enterprise To GitHub Actions](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/migrating-your-enterprise-to-github-actions).


## Managing policies for GitHub Actions

You can use policies to control how enterprise members use GitHub Actions. For example, you can restrict which actions are allowed and configure artifact and log retention. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

## Adding runners

To run GitHub Actions workflows, you need to use runners. A runner is a server that runs your workflows when they're triggered.
 If you use GitHub-hosted runners, you will be billed based on consumption after exhausting the minutes included in your plan, whereas self-hosted runners are free. For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).

If you choose self-hosted runners, you can add runners at the enterprise, organization, or repository levels. For more information, see [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).



## Provisioning fine-grained permissions for GitHub Actions

Organization owners and users with the "Manage custom organization roles" permission can provision fine-grained permissions for users and teams in your organization. Provisioning fine-grained permissions for GitHub Actions allows you to practice the principle of least privilege to secure settings in your GitHub Actions CI/CD pipeline.

For GitHub Actions, you can enable any of the following permissions for individuals or teams in your organization.

* **Manage organization Actions policies:** Access to manage all settings on the "Actions General" settings page, except for self-hosted runners settings.
* **Manage organization runners and runner groups:** Access to create and manage GitHub-hosted runners, self-hosted runners, and runner groups, and control where self-hosted runners can be created.
* **Manage organization Actions secrets:** Access to create and manage Actions organization secrets.
* **Manage organization Actions variables:** Access to create and manage Actions organization variables.


For more information, see [Managing Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles).



## General security hardening for GitHub Actions

If you want to learn more about security practices for GitHub Actions, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).
