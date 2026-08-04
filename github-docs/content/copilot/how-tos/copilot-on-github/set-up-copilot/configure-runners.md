# Configuring runners for GitHub Copilot code review

## About GitHub Actions usage for code review tools

Copilot code review uses GitHub Actions to run the agentic capabilities, including full project context gathering and any capabilities in public preview. By default, Copilot code review uses GitHub-hosted runners. Actions minutes are consumed from your account or organization's existing plan entitlement for reviews on private repositories, with any usage beyond your included minutes billed at standard GitHub Actions rates.

If your organization has disabled GitHub-hosted runners, the agentic capabilities will not be available. In this case, code reviews will fall back to a more limited review.
 Organizations in this situation can use self-hosted runners.

You can also upgrade to larger GitHub-hosted runners for better performance.

## Configure self-hosted runners for code review

Run Copilot code review using self-hosted GitHub Actions runners with ARC (Actions Runner Controller). You must first set up ARC-managed scale sets in your environment. For more information on ARC, see [Actions Runner Controller](https://docs.github.com/en/actions/concepts/runners/actions-runner-controller).

> [!WARNING]
> ARC is the only officially supported solution for self-hosting Copilot code review. For security reasons, do not use non-ARC self-hosted runners.

Copilot code review is only compatible with Ubuntu x64 Linux runners.

To configure self-hosted runners for Copilot code review:
1. Configure network security controls for your GitHub Actions runners to ensure that Copilot code review does not have open access to your network or the public internet.

    You must configure your firewall to allow connections to the [standard hosts required for GitHub Actions self-hosted runners](/actions/reference/runners/self-hosted-runners#accessible-domains-by-function), plus the following hosts:

    * `api.githubcopilot.com`
    * `uploads.github.com`
    * `user-images.githubusercontent.com`
1. In your repository's `.github/workflows/copilot-code-review.yml` file, set the `runs-on` attribute to your ARC-managed scale set name.

   ```yaml
   # ...

   jobs:
     copilot-setup-steps:
       runs-on: arc-scale-set-name
       # ...
   ```

> [!NOTE]
> If your repository does not have a `copilot-code-review.yml` file, Copilot code review will use the `copilot-setup-steps.yml` file instead. For more information about `copilot-setup-steps.yml`, see [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment#preinstalling-tools-or-dependencies-in-copilots-environment).

## Upgrade to larger GitHub-hosted GitHub Actions runners

By default, Copilot code review runs on a standard GitHub Actions runner. Larger runners provide better performance (CPU and memory), more disk space, and advanced features like Azure private networking. See [Larger Runners](https://docs.github.com/en/actions/concepts/runners/larger-runners).

> [!NOTE]
> Usage of larger GitHub-hosted runners is billed at a higher per-minute rate. For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).

1. Set up larger runners for your organization. See [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners).
1. If you are using larger runners with Azure private networking, configure your Azure private network to allow outbound access to the following hosts:

    * `api.githubcopilot.com`
    * `uploads.github.com`
    * `user-images.githubusercontent.com`

1. In your repository's `copilot-code-review.yml` file, set the `runs-on` attribute to the label for the larger runners you want Copilot code review to use. See [Use Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/use-larger-runners).

   ```yaml
   # ...

   jobs:
     copilot-setup-steps:
       runs-on: ubuntu-4-core
       # ...
   ```

   > [!NOTE]
   > If your repository does not have a `copilot-code-review.yml` file, Copilot code review will use the `copilot-setup-steps.yml` file instead.

## Configure runners at the organization level

Organization owners can set a default runner type for Copilot code review and Copilot cloud agent across all repositories in the organization, and control whether individual repositories can override this default.

> [!NOTE]
> The organization-level runner type applies to both Copilot code review and Copilot cloud agent. Repositories can still override the organization default for code review using `copilot-code-review.yml` (or `copilot-setup-steps.yml`) unless you disable **Allow repositories to customize the runner type**. For more information, see [Configure Runner For Coding Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent#preventing-repositories-from-customizing-the-runner-type).

This is useful if your organization requires all code reviews and cloud agent tasks to run on specific runners, for example, to use larger runners for better performance or self-hosted runners that have access to internal resources.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Runner type**.
1. Next to "Runner type configuration," click {% octicon "pencil" aria-label="Edit" %}.
1. In the "Edit runner type" dialog, select the runner type to use by default across your organization, then click **Save runner selection**.
   * **Standard GitHub runner**: Copilot code review and Copilot cloud agent will use the standard GitHub-hosted runner.
   * **Labeled runner**: Copilot code review and Copilot cloud agent will use a runner matching the label you specify.
1. Optionally, to prevent individual repositories from overriding the organization-level runner configuration using their `copilot-code-review.yml` or `copilot-setup-steps.yml` file, disable **Allow repositories to customize the runner type**.
