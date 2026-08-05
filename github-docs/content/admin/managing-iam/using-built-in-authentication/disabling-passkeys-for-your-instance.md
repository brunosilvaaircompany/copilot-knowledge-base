# Disabling passkeys for your instance

Passkeys are enabled by default.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Authentication**.

1. In the "Passkeys" section, deselect **Enable passkeys**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Further reading

* [About Passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys)
