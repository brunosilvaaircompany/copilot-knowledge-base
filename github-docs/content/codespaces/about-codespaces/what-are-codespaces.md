# What are GitHub Codespaces?

## Introduction

A codespace is a development environment that's hosted in the cloud. You can customize your project for GitHub Codespaces by committing configuration files to your repository (often known as Configuration-as-Code), which creates a repeatable codespace configuration for all users of your project. See [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

Each codespace you create is hosted by GitHub in a Docker container, running on a virtual machine. You can choose from a selection of virtual machine types, from 2 cores, 8 GB RAM, and 32 GB storage, up to 32 cores, 128 GB RAM, and 128 GB storage.

By default, the codespace development environment is created from an Ubuntu Linux image that includes a selection of popular languages and tools, but you can use an image based on a Linux distribution of your choice and configure it for your particular requirements. Regardless of your local operating system, your codespace will run in a Linux environment. Windows and macOS are not supported operating systems for the remote development container.

You can connect to your codespaces from your browser, from Visual Studio Code, or by using GitHub CLI. When you connect, you are placed within the Docker container. You have limited access to the outer Linux virtual machine host.

![Diagram showing the relationship between a code editor and a codespace running on an Azure virtual machine.](/assets/images/help/codespaces/codespaces-diagram.png)

## Using GitHub Codespaces

To begin developing using cloud-based compute resources, you can create a codespace from a template or from any branch or commit in a repository. When you create a codespace from a template, you can start from a blank template or choose a template suitable for the work you're doing.

To get started with GitHub Codespaces, see [Quickstart](https://docs.github.com/en/codespaces/quickstart). For more information on creating a codespace, see [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository) or [Creating A Codespace From A Template](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template). If you want to return to a codespace you've already created, see [Opening An Existing Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace). To learn more about how GitHub Codespaces works, see [Deep Dive](https://docs.github.com/en/codespaces/about-codespaces/deep-dive).


### Using codespaces owned by your personal account

All personal GitHub accounts have a monthly quota of free use of GitHub Codespaces included in the Free or Pro plan. You can get started using GitHub Codespaces on your personal account without changing any settings or providing payment details.

If you create a codespace from an organization-owned repository, use of the codespace will either be charged to the organization (if the organization is configured for this), or to your personal account.

You can continue using GitHub Codespaces beyond your monthly included storage and compute usage by providing payment details and setting a spending limit. See [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).


### Using organization-owned codespaces

Owners of organizations on GitHub Team and GitHub Enterprise plans can pay for their members' and collaborators' use of GitHub Codespaces. This applies to codespaces created from repositories owned by the organization. See [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization). You can set a spending limit for use of GitHub Codespaces on your organization or enterprise account. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

If use of a codespace will be billed to an organization or enterprise, this is shown when the codespace is created. See [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository). Codespaces that are billed to an organization, or its parent enterprise, are owned by the organization and can be deleted by an organization owner. See [Deleting A Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/deleting-a-codespace#deleting-codespaces-in-your-organization).

Your ability to create codespaces from organization-owned repositories depends on several factors, including the repository's visibility and the settings of the organization or its parent enterprise. For more information, see [Troubleshooting Creation And Deletion Of Codespaces](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-creation-and-deletion-of-codespaces#no-access-to-create-a-codespace).


### Customizing GitHub Codespaces

To customize the runtimes and tools in your codespace, you can create one or more dev container configurations for your repository. Adding dev container configurations to your repository allows you to define a choice of different development environments that are appropriate for the work people will do in your repository.

If you create a codespace from a repository without any dev container configurations, GitHub Codespaces will clone your repository into an environment with the default dev container image that includes many tools, languages, and runtime environments. If you create a codespace from a template, you might start with some initial configuration on top of the default image. See [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

You can personalize aspects of your codespace environment by using a public [dotfiles](https://dotfiles.github.io/tutorials/) repository. You can use dotfiles to set shell aliases and preferences, or to install your personal preference of the tools you like to use. If you use GitHub Codespaces in the browser, or in Visual Studio Code, you can use [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to give your codespace editor the same settings, keyboard shortcuts, snippets, and extensions that you have set up in your local installation of Visual Studio Code.

See [Customizing Your Codespace](https://docs.github.com/en/codespaces/customizing-your-codespace).

## Billing for Codespaces

For information on pricing, storage, and usage for GitHub Codespaces, see [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).

If your account does not have a valid payment method on file, usage is blocked once you use up your quota.

If you have a valid payment method on file, spending may be limited by one or more budgets. Check the budgets set for your account to ensure they are appropriate for your usage needs. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).


Costs for GitHub Codespaces are always billed monthly, even if your account is otherwise billed annually.
 For information on how organizations owners and billing managers can manage the spending limit for GitHub Codespaces for an organization, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).
