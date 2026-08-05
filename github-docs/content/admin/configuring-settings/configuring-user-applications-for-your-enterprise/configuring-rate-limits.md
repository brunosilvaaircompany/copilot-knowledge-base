# Configuring rate limits

## About rate limits for GitHub Enterprise Server

Rate limits help prevent excessive resource use on your GitHub Enterprise Server instance that could affect availability or performance for all users. You can configure rate limits for the GitHub Enterprise Server APIs and GitHub Actions.

Implement rate limits carefully and communicate with your users as you tune them. Start with permissive rate limits and gradually adjust them to suit your environment.

You can also configure rate limits for authentication attempts to the Management Console. For more information, see [Managing Access To The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/managing-access-to-the-management-console#configuring-rate-limits-for-authentication-to-the-management-console).

## Enabling rate limits for the GitHub Enterprise Server APIs

Too many requests to the GitHub Enterprise Server APIs can slow down your instance or make it unavailable. For more information about how API rate limits affect your users, see [Rate Limits For The Rest API](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api).

You can exempt specific users from API rate limits using the `ghe-config` utility in the administrative shell. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config).

> [!NOTE]
> The Management Console lists the time period (per minute or per hour) for each rate limit.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. Under "Rate Limiting", select **Enable HTTP API Rate Limiting**.
1. Enter limits for authenticated and unauthenticated requests for each API, or accept the prefilled default limits.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Enabling secondary rate limits

Secondary rate limits help keep your GitHub Enterprise Server instance stable for all users.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. Under "Rate Limiting", select **Enable Secondary Rate Limiting**.
1. Enter limits for Total Requests, CPU Limit, and CPU Limit for Searching, or accept the prefilled default limits.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Enabling rate limits for Git

If a member of GitHub's staff has recommended it, you can apply Git rate limits per repository network or per user ID. Git rate limits are measured in concurrent operations per minute and adapt to the current CPU load.

> [!WARNING]
> Leave this setting disabled unless directly recommended by GitHub's staff. Git operations are rarely the leading driver of CPU and RAM usage. Enabling this feature can make Git operations more likely to fail under high load but doesn't address the underlying cause.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. Under "Rate Limiting", select **Enable Git Rate Limiting**.
1. Under "Repository Network Limit", type a limit for each repository network.
1. Under "User ID Limit", type a limit for each user ID.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Configuring rate limits for GitHub Actions

You can apply a rate limit to GitHub Actions workflow runs. For more information about GitHub Actions, see [About GitHub Actions For Enterprises](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

### About rate limits for GitHub Actions

Your GitHub Enterprise Server instance assigns each GitHub Actions workflow job to a runner. If your instance can't immediately assign a job to an available runner, the job waits in a queue. If GitHub Actions experiences sustained high load, the queue can back up and the performance of your GitHub Enterprise Server instance may degrade.

To avoid this, you can configure a rate limit for GitHub Actions. This rate limit is measured in job runs per minute. GitHub Enterprise Server applies the rate limit across all job runs on the instance. If runs exceed the rate limit, additional runs fail instead of entering the queue. The following error appears in the run's annotations.

> You've exceeded the rate limit for workflow run requests. Please wait before retrying the run.

A good rate limit protects your GitHub Enterprise Server instance from unusual spikes in GitHub Actions usage without interfering with day-to-day operations. The right threshold depends on your instance's available resources and typical workload. For more information about hardware requirements for GitHub Actions, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements).

By default, the rate limit for GitHub Actions is disabled. GitHub Enterprise Server can handle temporary usage spikes without problems, so this rate limit protects against sustained high load. Leave it disabled unless you experience performance problems. In some cases, GitHub Support may recommend enabling a rate limit for GitHub Actions.

### Enabling or disabling rate limits for GitHub Actions

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. To enable and configure the rate limit, run the following two commands, replacing **RUNS-PER-MINUTE** with the value of your choice.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```

1. To disable the rate limit, run the following command.

   ```shell
   ghe-config actions-rate-limiting.enabled false
   ```

1. To apply the configuration, run the following command.

   ```shell
   ghe-config-apply
   ```

1. Wait for the configuration run to complete.

## Controlling the rate for the live update service

If the number of AJAX requests to your GitHub Enterprise Server instance causes problems, you may need to adjust the rate limit for the WebSockets controller used by these live updates. For details on how to view Alive requests, see [About The Monitor Dashboards](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards).

With primary rate limits enabled, the default limit is 100 requests per minute per IP address. Use the [ghe-config](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config) utility in the administrative shell to set `app.github.web-sockets-rate-limit` to the number of requests allowed per minute per IP address, or to disable this rate limit. Setting the limit to any non-positive-integer value (for example, `0`, `-1`, `disabled`) disables rate limiting on the WebSockets controller.



The `app.github.web-sockets-rate-limit` configuration setting was introduced in **3.17.1**.




After you change these settings, run [ghe-config-apply](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config-apply) to apply them.
