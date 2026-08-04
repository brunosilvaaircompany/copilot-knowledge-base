# Enabling encrypted assertions

## About encrypted assertions

If your IdP support encryption of assertions, you can configure encrypted assertions on GitHub Enterprise Server for increased security during the authentication process.

## Prerequisites

To enable encrypted assertions for authentication to GitHub Enterprise Server, you must configure SAML authentication, and your IdP must support encrypted assertions.

## Enabling encrypted assertions

To enable encrypted assertions, you must provide your GitHub Enterprise Server instance's public certificate to your IdP, and configure encryption settings that match your IdP.

> [!NOTE]
> GitHub strongly recommends that you verify any new configuration for authentication in a staging environment. An incorrect configuration could result in downtime for your GitHub Enterprise Server instance. For more information, see [Setting Up A Staging Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).


1. Optionally, enable SAML debugging. SAML debugging records verbose entries in GitHub Enterprise Server's authentication log, and may help you troubleshoot failed authentication attempts. For more information, see [Troubleshooting Saml Authentication](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging).
1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Authentication**.

1. Select **Require encrypted assertions**.
1. To the right of "Encryption Certificate", to save a copy of your GitHub Enterprise Server instance's public certificate on your local machine, click **Download**.
1. Sign into your SAML IdP as an administrator.
1. In the application for your GitHub Enterprise Server instance, enable encrypted assertions.
   * Note the encryption method and key transport method.
   * Provide the public certificate you downloaded in step 7.
1. Return to the management console on your GitHub Enterprise Server instance.
1. To the right of "Encryption Method", select the encryption method for your IdP from step 9.
1. To the right of "Key Transport Method", select the key transport method for your IdP from step 9.
1. Click **Save settings**.
1. Wait for the configuration run to complete.


If you enabled SAML debugging to test authentication with encrypted assertions, disable SAML debugging when you're done testing. For more information, see [Troubleshooting Saml Authentication](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging).

## SAML signing certificate for AuthnRequests

With encrypted assertions, GitHub Enterprise Server relies on the SAML signing certificate private key to decrypt assertions. This certificate is automatically generated when GitHub Enterprise Server is set up, and it is valid for 10 years.

You can find more details about the SAML signing certificate, how long it is valid for, and how to regenerate it if needed in [Saml Configuration Reference](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/saml-configuration-reference#saml-signing-certificate-for-authnrequests).
