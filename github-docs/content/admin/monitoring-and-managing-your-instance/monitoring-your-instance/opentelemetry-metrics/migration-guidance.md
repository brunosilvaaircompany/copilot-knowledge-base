# Migrating from collectd to OpenTelemetry

GitHub Enterprise Server is transitioning from the collectd metrics stack to OpenTelemetry. Collectd is retired in version 3.23, and upgrading to 3.23 disables it.

## Migration timeline

| Version | Default for new installations | Behavior when upgrading | Notes |
| :- | :- | :- | :- |
| 3.18 | Collectd | Collectd | OpenTelemetry is opt-in. |
| 3.19 to 3.20 | OpenTelemetry | Existing metrics settings are preserved. | Instances using collectd can opt in to OpenTelemetry. |
| 3.21 to 3.22 | OpenTelemetry | Upgrades from versions earlier than 3.21 enable OpenTelemetry and disable collectd. Upgrades from 3.21 or later preserve existing metrics settings. | Collectd can still be re-enabled. |
| 3.23 and later | OpenTelemetry | OpenTelemetry is enabled and collectd is disabled. | Collectd is retired and cannot be re-enabled. |

## Preparing to migrate

Before you migrate, complete the following preparations:

* Test the migration on a staging instance before applying it in production.
* Identify the monitoring integrations that depend on collectd metrics, such as external dashboards and alerts.
* If you plan to run both metrics stacks during a transition period, review the caveats in [Running both metrics stacks](#running-both-metrics-stacks).

## Migrating to OpenTelemetry

You can manually migrate to OpenTelemetry on instances running versions 3.18 to 3.22. If your instance still uses collectd, we recommend migrating before upgrading to 3.21 or later so that you can verify your monitoring setup in advance.

Upgrading from a version earlier than 3.21 to 3.21 or 3.22 automatically enables OpenTelemetry and disables collectd, but you can re-enable collectd after the upgrade. Upgrading to 3.23 or later enables OpenTelemetry and disables collectd permanently.

Migration requires enabling OpenTelemetry metrics and disabling collectd. Both settings are available through the Management Console or the command line.

### Using the Management Console

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.


1. In the monitoring settings, select **Enable OpenTelemetry**.
1. Under **Metrics - Collectd**, select **Disable collectd metrics**.

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



### Using the command line

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. To enable OpenTelemetry metrics and disable collectd, run the following commands.

   ```shell
   ghe-config observability.metrics.next-enabled true
   ghe-config observability.metrics.legacy-disabled true
   ```

1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.


### Running both metrics stacks

On version 3.18 to 3.22, running the collectd and OpenTelemetry stacks at the same time is possible but **not recommended**. This configuration has the following caveats:

* Some metric names may differ to remain compatible with the collectd format.
* Some OpenTelemetry metrics do not include labels.
* Increased resource utilization to deliver metrics to both solutions.

Collectd is retired in version 3.23, so running both stacks is not possible after upgrading.

## Post-upgrade checks

After the configuration run completes, whether you migrated manually or an upgrade switched your instance to OpenTelemetry:

* Verify that the metrics are visible and collected in the **Monitoring** tab of the Management Console.
* Update monitoring integrations that depend on collectd metrics. For information about connecting external tools, see [Setting Up External Monitoring With Opentelemetry](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/setting-up-external-monitoring-with-opentelemetry).
* For information about analyzing metrics, see [Using Grafana To Analyze Opentelemetry Metrics](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/using-grafana-to-analyze-opentelemetry-metrics).

### Viewing historical collectd data

Since patches 3.22.3, 3.21.8, 3.20.10, and 3.19.14, the **Monitoring** tab includes collectd dashboards for viewing historical data. These dashboards display collectd metrics recorded up to the time the collectd stack was disabled.
