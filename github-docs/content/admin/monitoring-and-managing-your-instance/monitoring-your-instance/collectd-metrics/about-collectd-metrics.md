# About Collectd metrics

Collectd metrics are gathered by default and are fully supported in this release. OpenTelemetry metrics are the future foundation for monitoring, available from GitHub Enterprise Server 3.18 onward.

> [!NOTE]
> Collectd metrics are expected to be closing down and then retired in a future release of GitHub Enterprise Server. We recommend that your long-term monitoring strategy includes a migration to OpenTelemetry metrics. See [About Opentelemetry Metrics](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/about-opentelemetry-metrics).




## About collectd metrics

Collectd is a daemon that collects system performance statistics periodically and stores them in a variety of ways. For GitHub Enterprise Server, collectd gathers metrics from various system components and services, providing insight into system health and performance.

### Key components

The collectd monitoring stack includes the following components:

* **Collectd**: The main daemon that collects system performance statistics
* **Graphite**: Serves as the datasource for dashboard visualizations

### Metrics collection

Collectd gathers metrics from various sources including:

* **System metrics**: CPU usage, memory utilization, disk I/O, network statistics
* **Application metrics**: HAProxy statistics, Resque queue metrics, database performance
* **Custom metrics**: Service-specific metrics through custom plugins and scripts

## Architecture

### Single appliance

In a single appliance deployment, collectd runs locally and stores metrics in RRD (Round Robin Database) files. The Management Console reads these files to display monitoring dashboards.

### Cluster environment

In cluster environments, collectd operates in a distributed manner:

* **Metrics servers**: Designated nodes that collect and store metrics from all cluster nodes
* **Metrics clients**: All other nodes that forward their metrics to the metrics servers
* **Redundancy**: Metrics are duplicated across multiple metrics servers for failover support

## Configuring collectd metrics

Collectd metrics are enabled by default on GitHub Enterprise Server instances.

## External monitoring with collectd

You can set up external monitoring systems to collect and analyze collectd metrics from your GitHub Enterprise Server instance. This enables integration with existing monitoring infrastructure and provides additional visualization and alerting capabilities.

For more information about setting up external monitoring, see [Setting Up External Monitoring With Collectd](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/setting-up-external-monitoring-with-collectd).

## Collectd metrics reference

GitHub Enterprise Server collects various metrics through collectd, covering system resources, application performance, and service health. Understanding these metrics is essential for effective monitoring and troubleshooting.

For a comprehensive list of available metrics, see [Collectd Metrics For GitHub Enterprise Server](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/collectd-metrics-for-github-enterprise-server).



## Migration considerations

As GitHub Enterprise Server transitions to OpenTelemetry metrics, consider the following:

* **Coexistence**: Both collectd and OpenTelemetry metrics can run simultaneously during the transition period
* **Feature parity**: OpenTelemetry metrics provide equivalent and enhanced monitoring capabilities
* **Planning**: Begin evaluating OpenTelemetry metrics for your monitoring workflows
* **Timeline**: Plan for the eventual closing down and then retired of collectd metrics in future releases



## Next steps

* To set up external monitoring, see [Setting Up External Monitoring With Collectd](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/setting-up-external-monitoring-with-collectd).
* To explore available metrics, see [Collectd Metrics For GitHub Enterprise Server](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/collectd-metrics-for-github-enterprise-server).
