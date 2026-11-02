# Advanced dashboards of OpenTelemetry metrics

OpenTelemetry metrics are the foundation for monitoring GitHub Enterprise Server, available from version 3.18 onward. This monitoring stack provides enhanced observability and management capabilities compared to the legacy collectd system.



New installations of version 3.19 and later use OpenTelemetry metrics by default. On version 3.18, and on instances upgraded from earlier releases, collectd metrics are still gathered by default and remain supported in this release. Collectd is retired in version 3.23, and upgrading to 3.23 disables it. Migration to OpenTelemetry is recommended before upgrading instances that still use collectd. See [Migration Guidance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).










> [!NOTE]
> OpenTelemetry metrics are in public preview and subject to change. We would love to hear your feedback on the preview. You can share it with your customer success team, or leave a comment in the [community discussion post](https://github.com/orgs/community/discussions/176826).






## Prerequisites

* OpenTelemetry metrics are enabled for your GitHub Enterprise Server instance


## Additional dashboards


When OpenTelemetry metrics are enabled, you can turn on advanced Grafana dashboards with enhanced visualization and monitoring capabilities.


* **Elasticsearch** - Detailed metrics for search performance, indexing operations, and cluster health
* **Nomad** - In-depth monitoring of job scheduling, resource allocation, and service orchestration
* **HAProxy** - Load balancer performance metrics, connection statistics, and request routing information
* **Node Exporter** - System-level metrics including CPU, memory, disk, and network statistics for each node
* **Process Exporter** - Detailed process-level metrics for monitoring individual service performance

These dashboards provide more granular insights into your GitHub Enterprise Server instance's performance and can help with advanced troubleshooting and capacity planning.


## Enabling advanced dashboards

### Prerequisites

* SSH access to your GitHub Enterprise Server instance

---


1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Run the following command to enable advanced dashboards:

   ```shell
   ghe-config observability.metrics.advanced-dashboards-enabled true
   ```

1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.


After running these commands, your external Grafana instance will have access to additional pre-configured dashboards.
