# Installing a GitHub App on your enterprise

> [!NOTE]
> Enterprise-installed GitHub Apps are in public preview and subject to change.

## About installing GitHub Apps on your enterprise

Enterprise-installed GitHub Apps are apps that request enterprise-level permissions and can perform operations on your enterprise account. Unlike organization or user installations, they do not have access to any organization or repository permissions—they only manage the enterprise itself.

When an enterprise owner installs a GitHub App on your enterprise, the app will be granted the enterprise permissions it requested. These permissions allow the app to perform operations such as creating organizations in the enterprise, installing applications across organizations, and managing SCIM provisioning.

## Requirements to install a GitHub App on your enterprise

The GitHub App must request enterprise-level permissions. It can request other permissions as well, but only the enterprise permissions will be granted during installation.

The app can be owned by your enterprise, by an organization within your enterprise, or by a third-party developer. To install a public app from a third party, use the installation link that the app's developer provides. You cannot install a private app that is owned by an account outside your enterprise.

> [!NOTE]
> There is one exception to installing a third-party app across enterprises. If an app requests the "Enterprise organization installations" permission, it can only be installed on the enterprise that owns the app. You cannot install this app on your enterprise if it is owned outside your enterprise. In EMU enterprises and GHES, enterprise's users count as being within the enterprise, so their apps can be installed on the enterprise.

## Installing a GitHub App on your enterprise

To install an app on your enterprise, navigate to the GitHub App installation page. This may be provided by the app developer as an installation link, or you can find it in the app's registration. The URL will look something like `https://github.com/apps/APP-NAME/installations/new`, where `APP-NAME` is the name of the GitHub App.

If the app can be installed, the list of available installation locations will include your enterprise. You can select your enterprise to install the app.

After installation, the app will be able to create an installation token for your enterprise or sign in enterprise members in order to act on their behalf at the enterprise level. Acting on a user's behalf requires the user to be able to perform the desired operations within the enterprise. For example, if the app needs to invite a user to an enterprise, the user must have permission to invite members to the enterprise as well.

## What enterprise-installed apps can do

Enterprise-installed GitHub Apps cannot call every enterprise API, but several APIs have already been updated to support GitHub Apps. These APIs and GraphQL mutations include:

* [List and create organizations in your enterprise](/graphql/reference/enterprise-admin#mutation-createenterpriseorganization)
* [Manage users in your enterprise](/graphql/reference/enterprise-admin#object-enterprise)
* Create and manage GitHub App installations in your organizations
* Manage enterprise custom repository properties
* Call the enterprise SCIM APIs

Check the [changelog](https://github.blog/changelog/) for updates on new APIs and permissions for GitHub Apps.


For more information about available permissions and API endpoints, see [Permissions Required For GitHub Apps](https://docs.github.com/en/rest/authentication/permissions-required-for-github-apps).



## Rate limits for enterprise-installed GitHub Apps

The installation token for an enterprise-installed GitHub Apps has the same rate limit as a GitHub Enterprise Cloud organization. Rate limits are per installation. For example, if an app is installed on an enterprise and two organizations, it will require 3 installation tokens to access them and have a full, independent rate limit budget for each installation. For more information, see [Rate Limits For The Rest API](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) and [Rate Limits And Query Limits For The GraphQL API](https://docs.github.com/en/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api).


## Current limitations

Enterprise-installed GitHub Apps are currently in public preview with the following limitations.

### API support

Not all APIs support enterprise-installed GitHub Apps yet. As more permissions are built and APIs updated, support will become broader. For more information about the APIs and permissions that support enterprise-installed GitHub Apps, see [Permissions Required For GitHub Apps](https://docs.github.com/en/rest/authentication/permissions-required-for-github-apps).

### Webhook support

Enterprise installations do not currently support webhooks. Apps installed at the enterprise level cannot receive webhook events for enterprise-level activities. Install them on organizations or repositories to receive webhook events for those resources.

### Organization access

Enterprise installations are not granted access to organizations or repositories within your enterprise, with the exception of the organization installations API. To access organization or repository resources, you must install the app separately on each organization where access is needed.

If you need to install the same app in many organizations, you can automate this with an API. See [Automate Installations](https://docs.github.com/en/admin/managing-github-apps-for-your-enterprise/automate-installations).

## Next steps

* To grant the app access to specific organizations, install it on those organizations. For more information, see [Installing A GitHub App From A Third Party](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party).
* Learn about managing apps installed in your organizations. For more information, see [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).
