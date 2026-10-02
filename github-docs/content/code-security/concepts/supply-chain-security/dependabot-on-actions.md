# Dependabot on GitHub Actions runners

## About Dependabot on GitHub Actions runners

> [!IMPORTANT]
> If Dependabot is enabled for a repository, it will always run on GitHub Actions, **bypassing both Actions policy checks and disablement at the repository or organization level**. This ensures that security and version update workflows always run when Dependabot is enabled.

Using GitHub Actions runners allows you to more easily identify Dependabot job errors and manually detect and troubleshoot failed runs. You can also integrate Dependabot into your CI/CD pipelines by using GitHub Actions APIs and webhooks to detect Dependabot job status such as failed runs, and perform downstream processing. For more information, see [Actions](https://docs.github.com/en/rest/actions) and [Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads).

New repositories that you create in your user account or in your organization will automatically be configured to run Dependabot on GitHub Actions using standard GitHub-hosted runners if any of the following is true:
* Dependabot is installed and enabled, and GitHub Actions is enabled and in use.
* The "Dependabot on GitHub Actions runners" setting for your organization is enabled.

Future releases of GitHub will remove the ability to disable running Dependabot on GitHub Actions.

> [!NOTE] Enabling Dependabot on GitHub Actions may increase the number of concurrent jobs run in your account. If required, customers on enterprise plans can request a higher limit for concurrent jobs. For more information, contact us through the [GitHub Support portal](https://support.github.com/), or contact your sales representative.

## Dynamic workflows

To run Dependabot jobs on GitHub Actions, GitHub creates a dynamic workflow for each job. Unlike standard GitHub Actions workflows, dynamic workflows are generated for a specific run and are not stored in your repository's `.github/workflows` directory.

You may see workflow runs named `dynamic/dependabot/dependabot-updates` or check runs with `(dynamic)` appended to their names. To troubleshoot errors or configuration problems, on the repository's **Actions** tab, filter the workflow runs to show only Dependabot update jobs, then open a workflow run to view the logs.

## Runner options

You can run Dependabot on GitHub Actions using:
* **Standard GitHub-hosted runners.** These are the default runners used by GitHub to execute GitHub Actions jobs.
* **Larger runners.** These are GitHub-hosted runners with advanced features like more RAM, CPU, and disk space. For more information, see [Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners).
* **Self-hosted runners.** These runners grant you greater control over Dependabot access to your private registries and internal network resources. Be aware that for security reasons, Dependabot updates on self-hosted runners will not run on public repositories. For more information on assigning labels to self-hosted runners, see [Configure On Self Hosted Runners](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-on-self-hosted-runners).

Running Dependabot on standard GitHub-hosted or self-hosted runners **does not** count towards your included GitHub Actions minutes. For Dependabot on larger runners, GitHub will bill your organization at the regular rate. See [Actions Runner Pricing](https://docs.github.com/en/billing/reference/actions-runner-pricing).


>[!NOTE]
> Private networking is supported with either an Azure Virtual Network (VNET) or the Actions Runner Controller (ARC) for Dependabot on GitHub Actions. See [Setting Dependabot To Run On Self Hosted Runners Using Arc](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/setting-dependabot-to-run-on-self-hosted-runners-using-arc) and [Setting Dependabot To Run On GitHub Hosted Runners Using Vnet](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/setting-dependabot-to-run-on-github-hosted-runners-using-vnet).


## How runner settings interact



You can select a runner type for Dependabot at the organization or repository level:

* **Standard GitHub runner** uses the default GitHub-hosted environment.
* **Labeled runner** sends jobs to self-hosted or larger runners that match the configured label. If you do not specify a label, Dependabot uses the `dependabot` label. You can also specify a runner group to limit jobs to matching runners in that group.

> [!WARNING]
> If the specified runner group does not exist, Dependabot reports an error immediately. If the group exists but no online runner in the group matches the configured label, the job remains queued until a matching runner is available. Make sure the repository can access the specified runner group.

Labeled runners are not available for public repositories. These repositories use standard GitHub-hosted runners.



## Access and permissions

If you are transitioning to using Dependabot on GitHub Actions runners and you restrict access to your organization's or repository's private resources, you may need to update your list of allowed IP addresses. For example, if you currently limit access to your private resources to the IP addresses that Dependabot uses, you should update your allowlist to use the GitHub-hosted runners IP addresses sourced from the meta API endpoint. For more information, see [Meta](https://docs.github.com/en/rest/meta).


When you enforce a policy to only allow actions and reusable workflows from your enterprise, and you enable Dependabot on GitHub Actions, Dependabot will not run. To enable Dependabot to run with your enterprise actions and reusable workflows, you should choose either to allow actions created by GitHub, or allow specified actions and reusable workflows. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#controlling-access-to-public-actions-and-reusable-workflows).



## Next steps

To enable Dependabot on GitHub Actions runners, see [Configure On GitHub Hosted Runners](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-on-github-hosted-runners) and [Configure On Self Hosted Runners](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-on-self-hosted-runners).
