# Configuring time synchronization

## Default NTP servers

We recommend configuring your own preferred NTP servers. The default NTP server values on GitHub Enterprise Server are the following:


AWS
* Primary Server: 169.254.169.123 prefer iburst minpoll 4 maxpoll 4
* NTP Pool: time.aws.com iburst

Other (non-AWS)

* Primary Server: 0.github.pool.ntp.org
* Secondary Server: 1.github.pool.ntp.org

You must ensure that the NTP servers (configured or default) are reachable on UDP port 123. For more details on the network ports that need to be open, see [Network Ports](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/network-ports#administrative-ports).

## Changing the default NTP servers

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Time**.
1. Under "Primary NTP server", type the hostname of the primary NTP server.
1. Under "Secondary NTP server (optional)", type the hostname of the secondary NTP server.
1. Under "NTP pool (optional)", type the NTP pool.
1. Under the "Settings" sidebar, click **Save settings**.
1. Wait for the configuration run to complete.

## Correcting a large time drift

The NTP protocol continuously corrects small time synchronization discrepancies. You can use the administrative shell to synchronize time immediately.

> [!NOTE]
> * You can't modify the Coordinated Universal Time (UTC) zone.
> * You should prevent your hypervisor from trying to set the virtual machine's clock. For more information, see the documentation provided by the virtualization provider.

* Use the `chronyc` command to synchronize the server with the configured NTP server. For example:

```shell
sudo chronyc -a makestep
```
