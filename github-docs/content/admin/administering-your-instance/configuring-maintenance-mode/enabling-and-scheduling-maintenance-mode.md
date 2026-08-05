# Enabling and scheduling maintenance mode

## About maintenance mode

Some types of operations require that you take your GitHub Enterprise Server instance offline and put it into maintenance mode:
* Upgrading to a new version of GitHub Enterprise Server
* Increasing CPU, memory, or storage resources allocated to the virtual machine
* Migrating data from one virtual machine to another
* Restoring data from a GitHub Enterprise Server Backup Utilities snapshot
* Troubleshooting certain types of critical application issues

We recommend that you schedule a maintenance window for at least 30 minutes in the future to give users time to prepare. When a maintenance window is scheduled, all users will see a banner when accessing the site.

When the instance is in maintenance mode, all normal HTTP and Git access is refused. This includes web and API requests, for which the appliance responds with status code `503` (Service Unavailable). Git fetch, clone, and push operations are also rejected with an error message indicating that the site is temporarily unavailable. GitHub Actions jobs will not be executed. Visiting the site in a browser results in a maintenance page.

You can perform initial validation of your maintenance operation by configuring an IP exception list to allow access to your GitHub Enterprise Server instance from only the IP addresses and ranges provided. Attempts to access your GitHub Enterprise Server instance from IP addresses not specified on the IP exception list will receive a response consistent with those sent when the instance is in maintenance mode.

## Enabling maintenance mode immediately or scheduling a maintenance window for a later time

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the top navigation bar, click **Maintenance**.

   ![Screenshot of the header of the Management Console. A tab, labeled "Maintenance", is highlighted with an orange outline.](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Under "Enable and schedule", select **Enable maintenance mode**, then decide whether to enable maintenance mode immediately or to schedule a maintenance window for a future time.
    * To enable maintenance mode immediately, select the dropdown menu and click **now**.
    * To schedule a maintenance window for a future time, select the dropdown menu and click a start time.
1. Optionally, to set a custom message for users to see during the maintenance window, in the "Set a maintenance mode message" field, type a message.

1. When you're satisfied with the timing of the window and the optional message, click **Save**. If you selected "now", your instance will be put into maintenance mode immediately.

## Validating changes in maintenance mode using the IP exception list

The IP exception list provides controlled and restricted access to your GitHub Enterprise Server instance, which is ideal for initial validation of server health following a maintenance operation. Once enabled, your GitHub Enterprise Server instance will be taken out of maintenance mode and available only to the configured IP addresses. The maintenance mode checkbox will be updated to reflect the change in state.

If you re-enable maintenance mode, the IP exception list will be disabled and your GitHub Enterprise Server instance will return to maintenance mode. If you just disable the IP exception list, your GitHub Enterprise Server instance will return to normal operation.

You can also use a command-line utility to configure the IP exception list. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-maintenance) and [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the top navigation bar, click **Maintenance**, then confirm maintenance mode is already enabled.

   ![Screenshot of the header of the Management Console. A tab, labeled "Maintenance", is highlighted with an orange outline.](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Under "Enable and configure IP exception list", select **Enable IP exception list**.
1. To the right of the checkbox for enabling the list, type a valid list of space-separated IP addresses or CIDR blocks that should be allowed to access your GitHub Enterprise Server instance.
1. Optionally, to set a custom message for users to see during the maintenance window, in the "Set a maintenance mode message" field, type a message.

1. Click **Save**.

## Managing maintenance mode using the REST API

You can manage maintenance mode on your GitHub Enterprise Server instance using the REST API. For more information, see [Manage Ghes](https://docs.github.com/en/rest/enterprise-admin/manage-ghes#get-the-status-of-maintenance-mode).

## Managing maintenance mode using the GitHub CLI

You can manage maintenance mode on your GitHub Enterprise Server instance using the GitHub CLI `gh es` extension. For more information, see the GH ES CLI usage documentation for [`gh es maintenance set`](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-maintenance-set) and [`gh es maintenance get`](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-maintenance-get).

For more information, see [Administering Your Instance Using The GitHub CLI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli).

## Managing maintenance mode using SSH

If you have SSH access, you can use the `ghe-maintenance` command line utility to can set or unset maintenance mode for a GitHub Enterprise Server instance with one node, or multiple nodes in a high-availability configuration. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh) and [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-maintenance).

## Managing maintenance mode for a cluster using SSH

If you have SSH access to your GitHub Enterprise Server instance, you can use the `ghe-cluster-maintenance` command line utility to set or unset maintenance mode for every node in a cluster. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh) and [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-cluster-maintenance).

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -s "MESSAGE"
# Sets maintenance mode with a custom message
$ ghe-cluster-maintenance -m "MESSAGE"
# Updates the custom message
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```
