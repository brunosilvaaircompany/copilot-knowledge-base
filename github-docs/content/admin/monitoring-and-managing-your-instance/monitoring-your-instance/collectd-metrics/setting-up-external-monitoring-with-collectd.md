# Setting up external monitoring with collectd

Collectd metrics are gathered by default and are fully supported in this release. OpenTelemetry metrics are the future foundation for monitoring, available from GitHub Enterprise Server 3.18 onward.

> [!NOTE]
> Collectd metrics are expected to be closing down and then retired in a future release of GitHub Enterprise Server. We recommend that your long-term monitoring strategy includes a migration to OpenTelemetry metrics. See [About Opentelemetry Metrics](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/about-opentelemetry-metrics).




## Set up an external `collectd` server

If you haven't already set up an external `collectd` server, you will need to do so before enabling `collectd` forwarding on your GitHub Enterprise Server instance. Your `collectd` server must be running `collectd` version 5.x or higher.

1. Log into your `collectd` server.
1. Create or edit the `collectd` configuration file to load the network plugin and populate the server and port directives with the proper values. On most distributions, this is located at `/etc/collectd/collectd.conf`

An example _collectd.conf_ to run a `collectd` server:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## Enabling collectd forwarding on GitHub Enterprise

By default, `collectd` forwarding is disabled on GitHub Enterprise. Follow the steps below to enable and configure `collectd` forwarding:

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. Below the log forwarding settings, select **Enable collectd forwarding**.
1. In the **Server address** field, type the address of the `collectd` server to which you'd like to forward GitHub Enterprise appliance statistics.
1. In the **Port** field, type the port used to connect to the `collectd` server. (Defaults to 25826)
1. In the **Cryptographic setup** dropdown menu, select the security level of communications with the `collectd` server. (None, signed packets, or encrypted packets.)
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Troubleshooting

### Central collectd server receives no data

GitHub Enterprise ships with `collectd` version 5.x. `collectd` 5.x is not backwards compatible with the 4.x release series. Your central `collectd` server needs to be at least version 5.x to accept data sent from your GitHub Enterprise Server instance.

For help with further questions or issues, visit [GitHub Enterprise Support](https://support.github.com).
