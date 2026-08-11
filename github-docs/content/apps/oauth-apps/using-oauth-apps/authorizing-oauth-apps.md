# Authorizing OAuth apps

When an OAuth app wants to identify you by your account on GitHub, you'll see a page with the app's developer contact information and a list of the specific data that's being requested.



> [!TIP]
> You must [verify your email address](/account-and-profile/how-tos/email-preferences/verifying-your-email-address) before you can authorize an OAuth app.



## OAuth app access

OAuth apps can have _read_ or _write_ access to your GitHub data.

* **Read access** only allows an app to _look at_ your data.
* **Write access** allows an app to _change_ your data.

> [!TIP]
> We recommend that you regularly review your authorized integrations. Remove any applications and tokens that haven't been used in a while. For more information, see [Reviewing Your Authorized OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps).


### About OAuth scopes

_Scopes_ are named groups of permissions that an OAuth app can request to access both public and non-public data.

When you want to use an OAuth app that integrates with GitHub, that app lets you know what type of access to your data will be required. If you grant access to the app, then the app will be able to perform actions on your behalf, such as reading or modifying data. For example, if you want to use an app that requests `user:email` scope, the app will have read-only access to your private email addresses. For more information, see [Scopes For OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps).

> [!NOTE]
> Currently, you can't scope source code access to read-only.

A token has the same capabilities to access resources and perform actions on those resources that the owner of the token has, and is further limited by any scopes or permissions granted to the token. A token cannot grant additional access capabilities to a user.
 For example, an application can create an access token that is configured with an `admin:org` scope, but if the user of the application is not an organization owner, the application will not be granted administrative access to the organization.

There is a limit of ten tokens that are issued per user/application/scope combination, and a rate limit of ten tokens created per hour. If an application creates more than ten tokens for the same user and the same scopes, GitHub revokes one of the existing tokens with the same user/application/scope combination, chosen in this order:



1. The oldest token that has never been used and that was created more than one minute ago. Tokens created within the last minute are usually protected, so that an application has time to use a token it has just created.
1. If there is no such token, but at least one token has been used, the token that was least recently used.
1. If no token has ever been used, the oldest token, even if it was created within the last minute.



Hitting the hourly rate limit will not revoke your oldest token. Instead, it will trigger a re-authorization prompt within the browser, asking the user to double check the permissions they're granting your app. This prompt is intended to give a break to any potential infinite loop the app is stuck in, since there's little to no reason for an app to request ten tokens from the user within an hour.


### Types of requested data

OAuth apps can request several types of data.

| Type of data | Description |
| --- | --- |
| Commit status | You can grant access for an app to report your commit status. Commit status access allows apps to determine if a build is a successful against a specific commit. Apps won't have access to your code, but they can read and write status information against a specific commit. |
| Deployments | Deployment status access allows apps to determine if a deployment is successful against a specific commit for public and private repositories. Apps won't have access to your code. |
| Gists | [Gist](https://gist.github.com) access allows apps to read or write to both your public and secret Gists. |
| Hooks | [Webhooks](/webhooks/about-webhooks) access allows apps to read or write hook configurations on repositories you manage. |
| Notifications | Notification access allows apps to read your GitHub notifications, such as comments on issues and pull requests. However, apps remain unable to access anything in your repositories. |
| Organizations and teams | Organization and teams access allows apps to access and manage organization and team membership. |
| Personal user data | User data includes information found in your user profile, like your name, e-mail address, and location. |
| Repositories | Repository information includes the names of contributors, the branches you've created, and the actual files within your repository. Apps can request access for either public or private repositories on a user-wide level. |
| Repository delete | Apps can request to delete repositories that you administer, but they won't have access to your code. |
|  |
| Projects | Access to user and organization projects. Apps can request either read/write or read only access. |
|  |

## Requesting updated permissions

When OAuth apps request new access permissions, they will notify you of the differences between their current permissions and the new permissions.



## OAuth apps and organizations

When you authorize an OAuth app for your personal account, you'll also see how the authorization will affect each organization you're a member of.

* **For organizations _with_ OAuth app access restrictions, you can request that organization owners approve the application for use in that organization.** If the organization does not approve the application, then the application will only be able to access the organization's public resources. If you're an organization owner, you can [approve the application](/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization) yourself.

* **For organizations _without_ OAuth app access restrictions, the application will automatically be authorized for access to that organization's resources.** For this reason, you should be careful about which OAuth apps you approve for access to your personal account resources as well as any organization resources.

If you belong to any organizations with SAML single sign-on (SSO) enabled, and you have created a linked identity for that organization by authenticating via SAML in the past, you must have an active SAML session for each organization each time you authorize an OAuth app.

> [!NOTE]
> If you're encountering issues with an authorized OAuth app or GitHub App accessing an organization that is protected by SAML, you may need to revoke the app from your [Authorized GitHub Apps](https://github.com/settings/applications) or [Authorized OAuth apps](https://github.com/settings/apps/authorizations) page, visit the organization to authenticate and establish an active SAML session, and then attempt to reauthorize the app by accessing it.

## Further reading

* [About OAUTH App Access Restrictions](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)
* [Authorizing GitHub Apps](https://docs.github.com/en/apps/using-github-apps/authorizing-github-apps)
* [GitHub Marketplace Support](https://docs.github.com/en/support/learning-about-github-support/github-marketplace-support)
