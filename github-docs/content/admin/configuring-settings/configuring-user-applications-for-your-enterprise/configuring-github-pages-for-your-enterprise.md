# Configuring GitHub Pages for your enterprise

## Enabling public sites for GitHub Pages

If private mode is enabled on your enterprise, the public cannot access GitHub Pages sites hosted by your enterprise unless you enable public sites.

> [!WARNING]
> If you enable public sites for GitHub Pages, every site in every repository on your enterprise will be accessible to the public.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings"" sidebar, click **Pages**.

1. Select **Public Pages**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Disabling GitHub Pages for your enterprise

If subdomain isolation is disabled for your enterprise, you should also disable GitHub Pages to protect yourself from potential security vulnerabilities. For more information, see [Enabling Subdomain Isolation](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/enabling-subdomain-isolation).

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings"" sidebar, click **Pages**.

1. Deselect **Enable Pages**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Configuring GitHub Pages response headers for your enterprise

You can add or override response headers for GitHub Pages sites hosted by your GitHub Enterprise Server instance.

> [!WARNING]
> Ensure that your response headers are properly configured before saving. Improper configurations may negatively impact the security of your GitHub Enterprise Server instance.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings"" sidebar, click **Pages**.

1. Under "Http Header Name," type the header name. The length of header name should less than 128 characters.
1. Under "Http Header Value," type the header value. The length of header value should less than 300 characters.
1. Click **Add headers**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Further reading

* [Enabling Private Mode](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/enabling-private-mode)
