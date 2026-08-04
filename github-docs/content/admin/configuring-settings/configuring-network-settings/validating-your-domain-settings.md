# Validating your domain settings

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Hostname**.

1. To test your appliance's DNS and SSL settings, under "Hostname", click **Test domain settings**.
1. If you don't receive a green checkmark next to all entries, review your configuration for the setting that failed. For more information, see [Configuring Dns Nameservers](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-dns-nameservers).

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.
