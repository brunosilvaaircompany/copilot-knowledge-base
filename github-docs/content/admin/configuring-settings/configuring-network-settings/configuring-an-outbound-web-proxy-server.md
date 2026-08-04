# Configuring an outbound web proxy server

## About configuration of a proxy for GitHub Enterprise Server

When a proxy server is enabled for your GitHub Enterprise Server instance, outbound messages sent by GitHub Enterprise Server are first sent through the proxy server, unless the destination host is added as an HTTP proxy exclusion. Types of outbound messages include outgoing webhooks, uploading bundles, and fetching legacy avatars. The proxy server's URL is the protocol, domain or IP address, plus the port number, for example `http://127.0.0.1:8123`.

> [!NOTE]
> To connect your GitHub Enterprise Server instance to GitHub.com, your proxy configuration must allow connectivity to `github.com` and `api.github.com`. For more information, see [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).

If GitHub Actions is enabled for your enterprise, only HTTP proxies are supported. SOCKS5 and HTTPS proxies are not supported.
 For more information about using GitHub Actions with GitHub Enterprise Server, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

## Configuring an outbound web proxy server

You can configure an outbound proxy server your GitHub Enterprise Server instance, and you can configure exceptions for connections to specific domains.

Your instance validates the hostnames for proxy exclusion using the list of IANA's registered top-level domains (TLDs). For more information, see the [list of TLDs](https://data.iana.org/TLD/tlds-alpha-by-domain.txt) on the IANA website.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Privacy** and uncheck **Private mode**.

1. Under **HTTP Proxy Server**, type the URL of your proxy server.
1. Optionally, under **HTTP Proxy Exclusion**, type any hosts that do not require proxy access, separating hosts with commas. The following rules apply to top-level domains (TLDs) and IP addresses that you exclude from the proxy.

   * When you exclude a TLD, you can exclude all hosts in a domain from requiring proxy access using `.` as a wildcard prefix, such as `.octo-org.tentacle`.
   * Your instance validates the hostnames you exclude using the list of IANA's registered TLDs. For more information, see the [list of TLDs](https://data.iana.org/TLD/tlds-alpha-by-domain.txt) on the IANA website. If you want to exclude an unregistered TLD, see [Excluding additional unregistered TLDs from the proxy](#excluding-additional-unregistered-tlds-from-the-proxy).
   * You can exclude a full, valid IPv4 or IPv6 address.
   * You cannot exclude an IPv4 or IPv6 address using a preceding or trailing dot as a wildcard.

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Excluding additional unregistered TLDs from the proxy

You can configure your instance's proxy settings to exclude unregistered TLDs that aren't specified in the [list of TLDs](https://data.iana.org/TLD/tlds-alpha-by-domain.txt) on the IANA website.

When you exclude additional unregistered TLDs, you must use `.` as a wildcard prefix. If the TLD is `tentacle`, you must exclude `.tentacle`. You cannot exclude an unregistered TLD without the preceding `.`.

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Enter the following command, replacing `COMMA-SEPARATED-TLD-LIST` with a comma-separated list of TLDs, each prefixed by a `.` wildcard.

   ```shell
   ghe-config noproxy.exception-tld-list "COMMA-SEPARATED-TLD-LIST"
   ```

   For example:

   ```shell
   ghe-config noproxy.exception-tld-list ".example,.internal"
   ```

1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.
