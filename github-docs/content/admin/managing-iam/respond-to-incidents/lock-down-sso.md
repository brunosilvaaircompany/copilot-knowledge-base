# Locking down single sign-on in your enterprise

When your enterprise is affected by a major security incident, you can temporarily block single sign-on for all users except enterprise owners. This allows you to lock down access to your enterprise in order to investigate the incident within a more isolated surface area.

The outcome of this action depends on your enterprise type:

* **Enterprise Managed Users**: Prevents users from signing in to their managed user account entirely.
* **Enterprise with personal accounts**: Prevents users from authenticating to access SSO-protected resources or authorize tokens for SSO, but does not prevent them from signing in to their account and accessing non-protected resources.

In either case, all existing active SSO sessions are terminated, including for enterprise owners, who can reauthenticate with SSO to access the enterprise during the lockdown.

## Locking down single sign-on


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Find the correct page for your enterprise type:
   * **Enterprise Managed Users**: At the top of the page, click **Identity provider**.
   * **Personal accounts**: Click **Settings** at the top of the page, then click **Authentication security** in the left sidebar.
1. Scroll down to the "Danger zone" section and, next to "Single sign-on lockdown", click **Enable**.

   >[!IMPORTANT] If you have the "Manage enterprise single sign-on configuration" permission but are **not** an enterprise owner, you can enable the lockdown, but you will be unable to authenticate with SSO while the lockdown is active. If your enterprise uses Enterprise Managed Users or has enabled SAML at the enterprise level, this means you will not be able to authenticate to disable the lockdown later.

1. If you are an enterprise owner, reauthenticate with SSO.
1. Once the investigation is complete and you are confident in resuming SSO authentication, come back to this section and disable the lockdown.
