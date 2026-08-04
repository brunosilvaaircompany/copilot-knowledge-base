# Troubleshooting SAML authentication

## About problems with SAML authentication

GitHub Enterprise Server logs error messages for failed SAML authentication in the systemd journal logs for the `github-unicorn` container. You can review responses in this log, and you can also configure more verbose logging.

For more information about SAML response requirements, see [Saml Configuration Reference](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/saml-configuration-reference#saml-response-requirements).

## Configuring SAML debugging

You can configure GitHub Enterprise Server to write verbose debug logs for every SAML authentication attempt. You may be able to troubleshoot failed authentication attempts with this extra output.

> [!WARNING]
>
> * Only enable SAML debugging temporarily, and disable debugging immediately after you finish troubleshooting. If you leave debugging enabled, the size of the logs increases much faster than usual, which can negatively impact the performance of GitHub Enterprise Server.
> * Test new authentication settings for {% ifversion ghes %}your GitHub Enterprise Server instance in a staging environment before you apply the settings in your production environment. For more information, see [Setting Up A Staging Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.


1. Under "SAML debugging", select the drop-down and click **Enabled**.
1. Attempt to sign in to your GitHub Enterprise Server instance through your SAML IdP.
1. Review the debug output in the `systemd` journal for `github-unicorn` on your GitHub Enterprise Server instance. For more information, see [About System Logs](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs#system-logs-in-the-systemd-journal-for-github-enterprise-server).
1. When you're done troubleshooting, select the drop-down and click **Disabled**.

## Decoding responses

Some output in the `systemd` journal for `github-unicorn` may be Base64-encoded. You can access the administrative shell and use the `base64` utility on your GitHub Enterprise Server instance to decode these responses. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

To decode the output, run the following command, replacing `ENCODED_OUTPUT` with the encoded output from the log.

```shell
base64 --decode ENCODED_OUTPUT
```

## Error: "Another user already owns the account"

When a user signs into your GitHub Enterprise Server instance for the first time with SAML authentication, GitHub creates a user account on the instance and maps the SAML `NameID` and `nameid-format` to the account.

When the user signs in again, GitHub Enterprise Server compares the account's `NameID` and `nameid-format` mapping to the IdP's response. If the `NameID` or `nameid-format` in the IdP's response no longer matches the values that GitHub expects for the user, the sign-in will fail. The user will see the following message.

> Another user already owns the account. Please have your administrator check the authentication log.

The message typically indicates that the person's username or email address has changed on the IdP. Ensure that the `NameID` and `nameid-format` mapping for the user account on GitHub Enterprise Server matches the user's `NameID` and `nameid-format` on your IdP. For more information, see [Updating A Users Saml Nameid](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/updating-a-users-saml-nameid).

## Error: Recipient in SAML response was blank or not valid

If the `Recipient` does not match the ACS URL for your GitHub Enterprise Server instance, one of the following two error messages will appear in the authentication log when a user attempts to authenticate.

```text
Recipient in the SAML response must not be blank.
```

```text
Recipient in the SAML response was not valid.
```

Ensure that you set the value for `Recipient` on your IdP to the full ACS URL for your GitHub Enterprise Server instance. For example, `https://ghe.corp.example.com/saml/consume`.

## Error: "SAML Response is not signed or has been modified"

If your IdP does not sign the SAML response, or the signature does not match the contents, the following error message will appear in the authentication log.

```text
SAML Response is not signed or has been modified.
```

Ensure that you configure signed assertions for the GitHub application on your IdP.

## Error: "Audience is invalid" or "No assertion found"

If the IdP's response has a missing or incorrect value for `Audience`, the following error message will appear in the authentication log.

```text
Audience is invalid. Audience attribute does not match https://YOUR-INSTANCE-URL
```

Ensure that you set the value for `Audience` on your IdP to the `EntityId` for your GitHub Enterprise Server instance, which is the full URL to your instance. For example, `https://ghe.corp.example.com`.
{% endif %}

## Error: "Current time is earlier than NotBefore condition"

This error can occur when there's too large of a time difference between your IdP and GitHub, which commonly occurs with self-hosted IdPs.

To prevent this problem, we recommend pointing your appliance to the same Network Time Protocol (NTP) source as your IdP, if possible. If you encounter this error, make sure the time on your appliance is properly synced with your NTP server. You can use the `chronyc` command on the administrative shell to synchronize time immediately. For more information, see [Configuring Time Synchronization](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-time-synchronization#correcting-a-large-time-drift).

If you use ADFS as your IdP, also set `NotBeforeSkew` in ADFS to 1 minute for GitHub. If `NotBeforeSkew` is set to 0, even very small time differences, including milliseconds, can cause authentication problems.




## Error: "failure - Updated SAML validation returned an invalid result"

This error can occur in version 3.17.0 or later of {% ifversion ghes %}your GitHub Enterprise Server instance. It indicates that GitHub is unable to properly process the SAML response it received from the identity provider. Please open a GitHub support ticket so that the GitHub Support and Engineering teams can investigate and address the issue.

{% endif %}


## Users are repeatedly redirected to authenticate

If users are repeatedly redirected to the SAML authentication prompt in a loop, you may need to increase the SAML session duration in your IdP settings.

The `SessionNotOnOrAfter` value sent in a SAML response determines when a user will be redirected back to the IdP to authenticate. If a SAML session duration is configured for 2 hours or less, GitHub will refresh a SAML session 5 minutes before it expires. If your session duration is configured as 5 minutes or less, users can get stuck in a SAML authentication loop.

To fix this problem, we recommend configuring a minimum SAML session duration of 4 hours. For more information, see [Saml Configuration Reference](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/saml-configuration-reference#session-duration-and-timeout).



## Error: Digest mismatch

A "Digest mismatch" error indicates that your SAML IdP is using a different SAML signing certificate than the one you have uploaded to GitHub or that the **Signature Method** or **Digest Method** configured on GitHub differs from what your IdP is using.

Re-download this SAML certificate from your IdP and validate it using an online tool, such as the [Format a x509 cert](https://www.samltool.com/format_x509cert.php) tool from OneLogin. Then upload the SAML certificate again in the "Authentication" section in your GitHub Enterprise Server management console. See [Accessing The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/accessing-the-management-console#accessing-the-as-an-unauthenticated-user).

Re-download this SAML certificate from your IdP and validate it using a tool such as the [Format a x509 cert](https://www.samltool.com/format_x509cert.php) tool from OneLogin. Then update the certificate saved in the GitHub SAML settings.
