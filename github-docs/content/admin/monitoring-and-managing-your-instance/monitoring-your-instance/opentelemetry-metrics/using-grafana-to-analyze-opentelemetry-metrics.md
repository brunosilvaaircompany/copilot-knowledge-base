# Using Grafana to analyze OpenTelemetry metrics

## Prerequisites

OpenTelemetry metrics must be enabled on the instance. For configuration instructions, see [Configuring Opentelemetry For Your Instance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/configuring-opentelemetry-for-your-instance).

## Navigating to the monitor dashboards

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. If you have created multiple Management Console user accounts, select **Root site admin** or **Management Console user**. For more information about Management Console user accounts see, [Managing Access To The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/managing-access-to-the-management-console).
1. Type your Management Console credentials. Then click **Continue**.

1. Click the **Monitor** tab.


### Metric labels

The OpenTelemetry stack exporters automatically attach labels to metrics. Common labels are:

* `job` — the name of the exporter that produced the metric
* `instance` — the instance name from which the metric originated

For some exporters (like `node_exporter` or `haproxy_exporter`), open-source documentation may be available by searching for the `job` label value.

Label availability varies by exporter and metric. Some GitHub application-level metrics may provide fewer labels than infrastructure/exporter metrics, and labels are subject to change from version to version.


## Inspecting panel queries

> [!IMPORTANT] Pre-built dashboards can be opened and edited for inspection, but changes cannot be saved. Create a copy of a dashboard to apply and retain any customizations.

To understand which metrics and queries power a given panel, use the graph panel menu *(3 vertical dots)* when viewing a Grafana dashboard:

* **Edit**: Opens the panel editor. This is the most direct way to review and adjust the queries that power the visualization.  
* **Explore**: Opens Grafana Explore with the panel’s queries pre-populated, allowing interactive analysis.  
* **Metrics Drilldown**: Opens a side panel for discovering related metrics and breaking down the metric by label values.

## Exploring metrics in Grafana

Grafana provides multiple ways to discover and analyze the metrics available on your instance.

### Grafana Drilldown

Grafana Drilldown provides a guided workflow to discover metrics by filtering on metric prefixes, labels, and label values. After selecting a metric, Grafana can break down the series by available label values. For example, `haproxy_backend_response_errors_total` can be grouped by proxy/back-end label values.

### Grafana Explore

Grafana Explore enables interactive analysis using PromQL (Prometheus Query Language), including a query builder that can help users discover available metrics and labels.

Tips for working in Grafana Explore:

* Use **Code mode's Metric browser** to discover metrics and labels. Selecting labels and label values can reveal associated metrics, and selecting a metric can reveal associated labels and label values.
* After selecting a metric, switch to **Builder mode** for suggestions to refine the query.
* Access additional operations via the **+ Operations** button.
* Customize legend labels in the **Options** panel using the **Legend** setting, for example `{{<label_name>}}`. By default, Grafana assigns legend labels based on unique label sets.

## Further reading

* [Advanced Dashboards](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/advanced-dashboards)
* [About The Monitor Dashboards](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards#creating-new-dashboards)
* [Get Started with Explore](https://grafana.com/docs/grafana/latest/visualizations/explore/get-started-with-explore/) in the Grafana documentation 
* [Promql - Querying Basics](https://prometheus.io/docs/prometheus/latest/querying/basics/) in the Prometheus documentation
