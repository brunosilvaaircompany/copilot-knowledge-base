# Using CAS

## About CAS authentication for GitHub Enterprise Server

CAS is a single sign-on (SSO) protocol that centralizes authentication to multiple web applications. For more information, see [Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service) on Wikipedia.

After you configure CAS, people who use your GitHub Enterprise Server instance must use a personal access token to authenticate API or Git requests over HTTP(S). CAS credentials cannot be used to authenticate these requests. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

If you configure CAS, people with accounts on your identity provider (IdP) do not consume a user license until the person signs into your GitHub Enterprise Server instance.

If you want to allow authentication for some people who don't have an account on your external authentication provider, you can allow fallback authentication to local accounts on your GitHub Enterprise Server instance. For more information, see [Allowing Built In Authentication For Users Outside Your Provider](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/allowing-built-in-authentication-for-users-outside-your-provider).


## Username considerations with CAS

GitHub normalizes a value from your IdP{% elsif ghes %}external authentication provider to determine the username for each new personal account in your enterprise on GitHub{% elsif ghes %}on your GitHub Enterprise Server instance.
 For more information, see [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).

## CAS attributes

The `username` attribute is required and should be set to the GitHub Enterprise Server username.

No other attributes are available.

## Configuring CAS

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Authentication**.

1. Under "Authentication", select **CAS**.
1. Optionally, to allow people without an account on your external authentication system to sign in with built-in authentication, select **Allow built-in authentication**. For more information, see [Allowing Built In Authentication For Users Outside Your Provider](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/allowing-built-in-authentication-for-users-outside-your-provider).

1. In the **Server URL** field, type the full URL of your CAS server. If your CAS server uses a certificate that can't be validated by GitHub Enterprise Server, you can use the `ghe-ssl-ca-certificate-install` command to install it as a trusted certificate. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-ssl-ca-certificate-install).
1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.
