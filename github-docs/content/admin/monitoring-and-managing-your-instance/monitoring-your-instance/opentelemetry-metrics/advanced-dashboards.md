# Advanced dashboards of OpenTelemetry metrics

OpenTelemetry metrics are the foundation for monitoring GitHub Enterprise Server, available from version 3.18 onward. This monitoring stack provides enhanced observability and management capabilities compared to the legacy collectd system.



New installations of version 3.19 and later use OpenTelemetry metrics by default. On version 3.18, and on instances upgraded from earlier releases, collectd metrics are still gathered by default and remain supported in this release. Collectd is retired in version 3.23, and upgrading to 3.23 disables it. Migration to OpenTelemetry is recommended before upgrading instances that still use collectd. See [Migration Guidance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).






## Prerequisites

* OpenTelemetry metrics are enabled for your GitHub Enterprise Server instance


## Additional dashboards

When OpenTelemetry metrics are enabled, you will have access to advanced Grafana dashboards with enhanced visualization and monitoring capabilities.

* **Elasticsearch** - Detailed metrics for search performance, indexing operations, and cluster health
* **Nomad** - In-depth monitoring of job scheduling, resource allocation, and service orchestration
* **HAProxy** - Load balancer performance metrics, connection statistics, and request routing information
* **Node Exporter** - System-level metrics including CPU, memory, disk, and network statistics for each node
* **Process Exporter** - Detailed process-level metrics for monitoring individual service performance

These dashboards provide more granular insights into your GitHub Enterprise Server instance's performance and can help with advanced troubleshooting and capacity planning.
