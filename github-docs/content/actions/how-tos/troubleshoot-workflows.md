# Troubleshooting workflows

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Initial troubleshooting suggestions

There are several ways you can troubleshoot failed workflow runs.



>[!NOTE] If you are on a GitHub Copilot Free subscription, this will count towards your monthly chat message limit.

### Using GitHub Copilot

To open a chat with GitHub Copilot about a failed workflow run, you can either:

* Next to the failed check in the merge box, click **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}**, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Explain error**.
* In the merge box, click on the failed check. At the top of the workflow run summary page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Explain error**.

This opens a chat window with GitHub Copilot, where it will provide instructions to resolve the issue.



### Using workflow run logs

Each workflow run generates activity logs that you can view, search, and download. For more information, see [Use Workflow Run Logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs).

### Enabling debug logging

If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging. For more information, see [Enable Debug Logging](https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging).

If your workflow uses specific tools or actions, enabling their debug or verbose logging options can help generate more detailed output for troubleshooting.
For example, you can use `npm install --verbose` for npm or `GIT_TRACE=1 GIT_CURL_VERBOSE=1 git ...` for git.



## Reviewing billing errors

Actions usage includes runner minutes and storage for [workflow artifacts](/actions/tutorials/store-and-share-data). For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).

### Setting a budget

Setting an Actions budget may help immediately unblock workflows failing due to billing or storage errors. It will allow further minutes and storage usage to be billed up to the set budget amount. To learn more, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).





## Reviewing GitHub Actions activity with metrics

To analyze the efficiency and reliability of your workflows using metrics, see [View Metrics](https://docs.github.com/en/actions/how-tos/administer/view-metrics).


## Troubleshooting workflow triggers

First, make sure that your workflow wasn't disabled manually, see [Disable And Enable Workflows](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows). A disabled workflow does not respond to its triggers.

You can review your workflow's `on:` field to understand what is expected to trigger the workflow. For more information, see [Trigger A Workflow](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow).

For a full list of available events, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows).

### Triggering event conditions

Some triggering events only run from the default branch (i.e. `issues`, `schedule`). Workflow file versions that exist outside of the default branch will not trigger on these events.

Workflows will not run on `pull_request` activity if the pull request has a merge conflict.

Workflows that would otherwise be triggered on `push` or `pull_request` activity will be skipped if the commit message contains a skip annotation. For more information, see [Skip Workflow Runs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs).

### Scheduled workflows running at unexpected times

Scheduled events can be delayed during periods of high loads of GitHub Actions workflow runs.

High load times include the start of every hour. If the load is sufficiently high enough, some queued jobs may be dropped. To decrease the chance of delay, schedule your workflow to run at a different time of the hour. For more information, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).

### Filtering and diff limits

Specific events allow for filtering by branch, tag, and/or paths you can customize. Workflow run creation will be skipped if the filter conditions apply to filter out the workflow.

You can use special characters with filters. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#filter-pattern-cheat-sheet).

For path filtering, evaluating diffs is limited to the first 300 files. If there are files changed that are not matched in the first 300 files returned by the filter, the workflow will not be run. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#git-diff-comparisons).

## Troubleshoot workflow execution

Workflow execution involves any issues seen after the workflow was triggered and a workflow run has been created.



### Debugging job conditions

If a job was skipped unexpectedly, or ran when you expected it to be skipped, you can view the expression evaluation to understand why:

1. Click on the job in the workflow run.
1. Download the log archive from the job's menu.
1. Open the `JOB-NAME/system.txt` file.
1. Look for the `Evaluating`, `Expanded`, and `Result` lines.

The `Expanded` line shows the actual runtime values that were substituted into your `if` condition, making it clear why the expression evaluated to `true` or `false`.

For more information, see [View Job Condition Logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-job-condition-logs).



### Canceling Workflows

If standard cancellation through the [UI](/actions/reference/workflows-and-actions/workflow-cancellation) or [API](/rest/actions/workflow-runs?apiVersion=2022-11-28#cancel-a-workflow-run) does not process as expected, there may be a conditional statement configured for your running workflow job(s) that causes it to not cancel.

In these cases, you can leverage the API to force cancel the run. For more information, see [Workflow Runs?Apiversion=2022 11 28](https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#force-cancel-a-workflow-run).

A common cause can be using the `always()` [status check function](/actions/reference/workflows-and-actions/expressions#status-check-functions) which returns `true`, even on cancellation. An alternative is to use the inverse of the `cancelled()` function, `{% raw %}${{ !cancelled() }}{% endraw %}`.

For more information, see [Control Jobs With Conditions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-jobs-with-conditions) and [Cancel A Workflow Run](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/cancel-a-workflow-run).

## Troubleshooting runners

### Defining runner labels

GitHub-hosted runners leverage [preset labels](/actions/reference/runners/github-hosted-runners#standard-github-hosted-runners-for-public-repositories) maintained through the [`actions/runner-images`](https://github.com/actions/runner-images?tab=readme-ov-file#available-images) repository.

We recommend using unique label names for larger and self-hosted runners. If a label matches to any of the existing preset labels, there can be runner assignment issues where there is no guarantee on which matching runner option the job will run on.

### Self-hosted runners

If you use self-hosted runners, you can view their activity and diagnose common issues.

For more information, see [Monitor And Troubleshoot](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot).



### Runner IP addresses flagged by security scanners

GitHub-hosted runners use dynamically assigned IP addresses from shared infrastructure. These IP addresses are published via the Meta API (for example, the `actions` and `actions_macos` keys). For more information, see [Meta](https://docs.github.com/en/rest/meta/meta#get-github-meta-information).

Third-party threat intelligence services, IP reputation scanners, or firewall vendors may flag these IP addresses as "malicious" or "suspicious." Because the underlying infrastructure is shared, activity from other users of the same infrastructure can influence the reputation scores assigned to these addresses.

GitHub does not control third-party IP reputation lists and cannot comment on their accuracy or update frequency. To verify whether an IP address belongs to GitHub-hosted runners, check the IP ranges returned by the Meta API.

If you have a security concern about a Microsoft-owned IP address, report it to the [Microsoft Security Response Center (MSRC)](https://msrc.microsoft.com/report/).




## Networking troubleshooting suggestions

Our support is limited for network issues that involve:

* Your networks
* External networks
* Third-party systems
* General internet connectivity

To view GitHub's realtime platform status, check [GitHub Status](https://githubstatus.com/).

For other network-related issues, review your organization's network settings and verify the status of any third-party services you're accessing. If problems persist, consider reaching out to your network administrators for further assistance.

If you're unsure about the issue, contact GitHub Support. For details on how to contact support, see [Contacting GitHub Support](https://docs.github.com/en/support/contacting-github-support).

### DNS

Issues may occur from Domain Name System (DNS) configuration, resolution, or resolver problems. We recommend you review available logs, vendor documentation, or consult with your administrators for additional assistance.

### Firewalls

Activities may become blocked by firewalls. If this occurs, you may want to review available logs, vendor documentation, or consult with your administrators for additional assistance.

### Proxies

Activities could fail when using a proxy for communications. It's good practice to review available logs, vendor documentation, or consult with your administrators for additional assistance.

Refer to [Use Proxy Servers](https://docs.github.com/en/actions/how-tos/manage-runners/use-proxy-servers) for information about configuring the runner application to utilize a proxy.

### Subnets

It is possible to encounter issues with subnets in use or overlaps with an existing network, such as within virtual cloud provider or Docker networks. In such cases, we recommend you review your network topology and subnets in use.

### Certificates

Issues may occur from self-signed or custom certificate chains and certificate stores. You can check that a certificate in use has not expired and is currently trusted. Certificates may be inspected with `curl` or similar tools. You can also review available logs, vendor documentation, or consult with your administrators for additional assistance.

### IP lists

IP allow or deny lists may disrupt expected communications. If there is a problem, you should review available logs, vendor documentation, or consult with your administrators for additional assistance.


If your GitHub account is configured with an IP allowlist, workflows will fail if a runner uses an IP address that isn’t included in the allowlist. To resolve this, verify that the runner's IP addresses are added to your organization's or enterprise's allowlist. For more details, see [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) and/or [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).



For information on GitHub's IP addresses, such as those used by GitHub-hosted runners, see [About Githubs Ip Addresses](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

Static IP addresses are available for use with GitHub-hosted larger runners. See [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners) for more information.


### Operating systems and software applications

In addition to firewalls or proxies, customizations performed to GitHub-hosted runners, such as installing additional software packages, may result in communication disruptions. For information about available customization options, see [Customize Runners](https://docs.github.com/en/actions/how-tos/manage-runners/github-hosted-runners/customize-runners).

* For self-hosted runners, learn more about necessary endpoints in [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners).

* For help configuring WireGuard, see [Connect With Wireguard](https://docs.github.com/en/actions/how-tos/manage-runners/github-hosted-runners/connect-to-a-private-network/connect-with-wireguard).

* For details about configuring OpenID Connect (OIDC), see [Connect With Oidc](https://docs.github.com/en/actions/how-tos/manage-runners/github-hosted-runners/connect-to-a-private-network/connect-with-oidc).


### Azure private networking for GitHub-hosted runners

Issues may arise from the use of GitHub-hosted runners within your configured Azure Virtual Networks (VNETs) settings.

For troubleshooting advice, see [Troubleshooting Azure Private Network Configurations For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/troubleshooting-azure-private-network-configurations-for-github-hosted-runners-in-your-organization) or {% ifversion ghec %}[Troubleshooting Azure Private Network Configurations For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/troubleshooting-azure-private-network-configurations-for-github-hosted-runners-in-your-enterprise).

{% endif %}
