# Viewing push logs

Push log entries show:

* Who initiated the push
* Whether it was a force push or not
* The branch someone pushed to
* The protocol used to push
* The originating IP address
* The Git client used to push
* The SHA hashes from before and after the operation

If you want to see a detailed history of changes to a repository, you can use the activity view. The activity view displays all pushes, merges, force pushes, and branch changes, and associates these changes with commits and authenticated users.

For more information, see [Using The Activity View To See Changes To A Repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/using-the-activity-view-to-see-changes-to-a-repository).

## Viewing a repository's push logs

1. Sign into GitHub Enterprise Server as a site administrator.
1. Navigate to a repository.
1. In the upper-right corner of the repository's page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the upper-right corner of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the left sidebar, click **Push Log**.

## Viewing a repository's push logs on the command-line

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. In the appropriate Git repository, open the audit log file:

   ```shell
   ghe-spokesctl ssh --primary OWNER/REPOSITORY -- cat audit_log
   ```
