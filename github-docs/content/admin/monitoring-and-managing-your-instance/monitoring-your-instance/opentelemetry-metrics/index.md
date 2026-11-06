# OpenTelemetry metrics

OpenTelemetry metrics are the foundation for monitoring GitHub Enterprise Server, available from version 3.18 onward. This monitoring stack provides enhanced observability and management capabilities compared to the legacy collectd system.



New installations of version 3.19 and later use OpenTelemetry metrics by default. On version 3.18, and on instances upgraded from earlier releases, collectd metrics are still gathered by default and remain supported in this release. Collectd is retired in version 3.23, and upgrading to 3.23 disables it. Migration to OpenTelemetry is recommended before upgrading instances that still use collectd. See [Migration Guidance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).
