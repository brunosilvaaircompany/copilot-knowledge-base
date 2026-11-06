# Configuring OpenTelemetry for your instance

OpenTelemetry metrics are the foundation for monitoring GitHub Enterprise Server, available from version 3.18 onward. This monitoring stack provides enhanced observability and management capabilities compared to the legacy collectd system.



New installations of version 3.19 and later use OpenTelemetry metrics by default. On version 3.18, and on instances upgraded from earlier releases, collectd metrics are still gathered by default and remain supported in this release. Collectd is retired in version 3.23, and upgrading to 3.23 disables it. Migration to OpenTelemetry is recommended before upgrading instances that still use collectd. See [Migration Guidance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).






## Prerequisites

* GitHub Enterprise Server 3.18 or later
* Administrative access to the Management Console
* SSH access to your GitHub Enterprise Server appliance

## Enabling OpenTelemetry metrics



OpenTelemetry metrics are enabled by default for **new installations** of GitHub Enterprise Server 3.19 and later. Instances upgraded from earlier releases still have collectd metrics enabled by default. For the complete migration procedure for instances that still use collectd, including how to disable collectd, see [Migration Guidance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).

### Using the Management Console

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.


1. In the monitoring settings, select **Enable OpenTelemetry**.

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



### Using the command line

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Run the following command to enable OpenTelemetry metrics.

   ```shell
   ghe-config observability.metrics.next-enabled true
   ```

1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.




## Performance considerations

When configuring OpenTelemetry metrics, consider the following performance factors:

* **Collection frequency**: More frequent collection increases system load
* **Data retention**: Longer retention periods require more storage
* **Custom exporters**: Additional exporters may increase CPU and memory usage
* **Network bandwidth**: External metric shipping affects network usage

## Configuring metrics collection

After enabling OpenTelemetry metrics, you can customize various aspects of the metrics collection process.

### Setting collection intervals

The default metrics collection interval is 30 seconds. You can adjust this based on your monitoring needs.

> [!IMPORTANT]
> Setting shorter intervals increases the precision of metrics but also increases storage requirements and system load. Consider your system resources and monitoring requirements before adjusting this setting.

#### Using the Management Console to set intervals

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.


1. In the monitoring settings, under **Metrics scrape interval**, enter the desired interval in seconds (for example, `60`).

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



#### Using the command line to set intervals

SSH into your GitHub Enterprise Server appliance and run the following commands:

```shell
# Set scrape interval to 60 seconds
ghe-config observability.metrics.interval 60
ghe-config-apply
```

### Configuring data retention

By default, metrics data is retained for 30 days. You can modify this setting using either the Management Console or command line.

#### Using the Management Console to configure retention

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.


1. In the monitoring settings, under **Metrics retention**, enter the desired retention period in days (for example, `15`).

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



#### Using the command line to configure retention

SSH into your GitHub Enterprise Server appliance and run the following commands:

```shell
# Set retention to 15 days
ghe-config observability.metrics.retention 15
ghe-config-apply
```

### Configuring the verbosity level for internal telemetry

The OpenTelemetry collector generates its own internal telemetry data for monitoring the health and performance of the collector itself. You can configure the verbosity of this internal telemetry using the command line.

The available telemetry levels are:
* `none`: Disables internal telemetry
* `basic`: Provides essential telemetry data (default)
* `normal`: Provides standard telemetry data
* `detailed`: Provides verbose telemetry data for debugging

SSH into your GitHub Enterprise Server appliance and run the following commands:

```shell
# Set internal telemetry level to normal
ghe-config observability.metrics.internal-otel-telemetry-level normal
ghe-config-apply
```

> [!NOTE]
> Higher telemetry levels provide more detailed information about the collector's internal operations but also increase resource usage. The `basic` level is recommended for production environments unless you need to troubleshoot collector issues.

## Troubleshooting configuration issues

If you encounter problems with OpenTelemetry configuration, the following information can help you identify and resolve common issues.

### Common configuration problems

* **Service startup failures**: Check system logs for error messages
* **Resource constraints**: Monitor system resources when adjusting collection intervals

### Viewing local logs

SSH into the node you want to debug and run the following commands:

View OpenTelemetry collector logs:

```shell
sudo journalctl -u otelcol-contrib -f
```

View VictoriaMetrics logs:

```shell
sudo journalctl -u victoriametrics -f
```

## Next steps

* To enable advanced monitoring dashboards, see [Advanced Dashboards](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/advanced-dashboards)
* To explore OpenTelemetry metrics, see [Using Grafana To Analyze Opentelemetry Metrics](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/using-grafana-to-analyze-opentelemetry-metrics)
* To set up external monitoring, see [Setting Up External Monitoring With Opentelemetry](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/setting-up-external-monitoring-with-opentelemetry).
