# About Enterprise-Managed Authorization for apps

> [!NOTE]
> Enterprise-Managed Authorization is in public preview and subject to change. Only select apps can use EMA, and only with OIDC-backed Enterprise Managed Users. To use EMA in your enterprise, you must enable it in both GitHub and Microsoft Entra.

Enterprise-Managed Authorization (EMA) is an emerging [identity standard](https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization) that allows an app to access a resource using their IdP sign-in instead of requiring the user to sign in to the resource directly. EMA is also known as ID JAG, cross-app access (XAA), or Agentic SSO depending on which platform you are using. It's most popular in the MCP ecosystem, but useful for any federated setup.

The benefits of EMA apply to both developers and administrators:

* Developers get easier access to GitHub from compatible clients. They don't need to configure MCP JSON or complete a separate OAuth flow.
* Administrators get to see and control the access between apps and GitHub, providing additional security and auditability support.
* Client apps receive short-lived, rotating tokens instead of long-lived OAuth app tokens or personal access tokens.

## Enabling Enterprise-Managed Authorization in your enterprise

Before your users can use EMA, it needs to be enabled in your enterprise. When enabled, it allows your users to access GitHub from the Copilot CLI and VS Code after signing in to Microsoft Entra, rather than performing an OAuth sign-in against GitHub. Your enterprise must use Enterprise Managed Users with OpenID Connect (OIDC) single sign-on.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **Identity provider**.

1. Select **Enterprise-Managed Authorization** under the **Single sign-on** section.
1. Set the default access policy to **Enabled** or **Disabled**.
1. If you want to enable or disable EMA selectively for an enterprise team, user, or role, select **Add override** and pick the target that should receive a different outcome. Then set the policy for the override, either **Enabled** or **Disabled**.

In case of multiple overrides applying to a user (for example because they belong to two different teams, each with an override, and are targeted with one directly), the following logic applies:

1. If a user is targeted directly with an override, that outcome applies.
1. Assuming no override directly targets the user, then any applicable override that disables the feature applies, and the user cannot use EMA.
1. If all applicable overrides enable the feature for the user, they can use EMA.
1. Finally, if no overrides apply, they are subject to the default policy.

## Supported applications

Copilot CLI and VS Code support EMA with GitHub. The latest versions of each app support EMA, but may require configuration to enable the feature in the app. Both apps require configuration in Microsoft Entra to allow the connection to GitHub.

### Enabling sign-in within Microsoft Entra

To enable SSO between an app and GitHub within Microsoft Entra, you must ensure that the client application (VS Code or Copilot CLI) is present in your tenant and allowed to access the **GitHub Enterprise Managed User (OIDC)** application.

As a tenant administrator, you must provide admin consent for each application to support the connection.

Using your tenant ID or domain name in place of `<TENANT_IDENTIFIER>`, visit each of these URLs and approve the application's access to GitHub:

* For VS Code: `https://login.microsoftonline.com/<TENANT_IDENTIFIER>/v2.0/adminconsent?client_id=aebc6443-996d-45c2-90f0-388ff96faa56&scope=12f6db80-0741-4a7e-b9c5-b85d737b3a31/user_impersonation`
* For Copilot CLI: `https://login.microsoftonline.com/<TENANT_IDENTIFIER>/v2.0/adminconsent?client_id=5ecc71bb-0fa6-4d6b-a31b-de12184c4b1a&scope=12f6db80-0741-4a7e-b9c5-b85d737b3a31/user_impersonation`

The `12f6db80-0741-4a7e-b9c5-b85d737b3a31` GUID included in the scope query parameter is the application ID for the GitHub Enterprise Managed User (OIDC) application. `user_impersonation` is the standard scope that indicates you are signing in as the user. Once within GitHub, the application's permissions are still enforced and actions are still attributed to the application.

When you go through the admin consent flow you'll be asked for two approvals each time: once for the client application accessing GitHub (called `SPN-GITHUB_MANAGED_USER_OIDC` in the consent dialog), and once for GitHub having access to your user's data. The user data access was already granted when you first approved the application. This is just Entra running the approval process for all involved applications.

You can validate whether the apps were created and approved in your tenant by navigating to the **Enterprise apps** tab of your Entra tenant in the Azure Portal. There, search for each of the applications by name or application ID, using the **Application ID starts with** filter. Be sure to remove the **Application type** filter or set it to **Microsoft applications** so that the apps appear. The application IDs for each app are:

* VS Code: `aebc6443-996d-45c2-90f0-388ff96faa56`
* Copilot CLI: `5ecc71bb-0fa6-4d6b-a31b-de12184c4b1a`

When you have found the apps, open the **Permissions** page in the **Security** section. If the application is present and has been granted access to GitHub, you should see an entry in the table for **GitHub Enterprise Managed User (OIDC)** and `user_impersonation`, granted through admin consent. If you'd like to remove this access, you can click the three dots to the right of the entry and select **Revoke permission**.

### Copilot CLI

To use Enterprise-Managed Authorization with the Copilot CLI, see [Authenticate Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli#authenticating-with-microsoft-entra). EMA is enabled in version 1.0.113 and later when you run `/login`.

### VS Code

Starting with version 1.141.0 of VS Code, users may see the option to sign in with their Microsoft Entra account. If you do, and your Entra account is linked to an OIDC managed user account, you'll get immediate access to GitHub and your GitHub Copilot entitlements. When you select the Microsoft option, VS Code will attempt to sign in using your on-device broker in order to SSO into an Entra account. If it is unable to, you can sign in to Entra via your web browser.

#### Enabling Microsoft authentication in VS Code

VS Code may not show the **Continue with Microsoft** option when you are asked to sign in. This may be because the feature is disabled on your VS Code instance, or because VS Code was unable to detect an existing Microsoft Entra account on the device. To force the feature to be enabled, change the setting.

The feature is controlled by the `chat.microsoftAuthentication.enabled` setting, which has one of three values:

| Value | Behavior |
| --- | --- |
| `"auto"` | Checks whether a Microsoft Entra account is detectable before showing the option. |
| `"always"` | Always shows the Microsoft sign-in option. |
| `"never"` | Hides the Microsoft sign-in option. |

For example, to always show the option, add this to your `settings.json`:

```json
{
  "chat.microsoftAuthentication.enabled": "always"
}
```

For help finding and opening `settings.json` in VS Code, see ["User and workspace settings" in the VS Code documentation](https://code.visualstudio.com/docs/configure/settings#_settings-json-file).

The default in version 1.141.0 depends on your telemetry setting:

* If telemetry, and therefore A/B experimentation, is enabled, the default is `"auto"`.
* If telemetry is disabled, the default is `"never"`. Set the value to `"auto"` or `"always"` to opt in manually.

In future releases, this setting will default to `"auto"`.

### EMA support for other apps and IdPs

GitHub plans to expand EMA support for the full range of client applications and IdPs that implement the protocol, including Okta, Ping, Claude, and Cursor. If your enterprise with managed users uses one of these IdPs, then compatible applications will be able to access GitHub on your users' behalf.

To learn more about Enterprise-Managed Authorization, see the [MCP standard documentation](https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization) and the [ID JAG specification](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-identity-assertion-authz-grant). You can follow the [roadmap item](https://github.com/github/roadmap/issues/1338) and [changelog](https://github.blog/changelog/) for updates on this work.
