# Installing a GitHub App from a third party

## About installing GitHub Apps



This article describes how to install a GitHub App directly from the app owner instead of from GitHub Marketplace. For more information on installing GitHub Apps from GitHub Marketplace, see [Installing A GitHub App From GitHub Marketplace For Your Personal Account](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-personal-account) and [Installing A GitHub App From GitHub Marketplace For Your Organizations](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations). For more information about installing GitHub Apps that you own, see [Installing Your Own GitHub App](https://docs.github.com/en/apps/using-github-apps/installing-your-own-github-app).


>[!NOTE] This installation flow applies to any GitHub App, whether it’s a third-party app or an app owned by your enterprise. You can install the app manually using the link provided by the app owner.


In order to use a GitHub App on your resources, you must install the app on your enterprise, organization or personal account. You can install the same GitHub App on multiple accounts. For example, if you install the app on your personal account and on a few organizations that you own, you'll be able to use the app on your personal repositories, on the organizations where you installed the app, and on repositories owned by those organizations.

When you install an app, you grant the app permission to access the enterprise or organization and repository resources that it requested. During the installation process, GitHub will tell you which permissions the GitHub App requested. For more information about the REST API requests the GitHub App can make with those permissions, see [Permissions Required For GitHub Apps](https://docs.github.com/en/rest/authentication/permissions-required-for-github-apps).

When you install an app that requests repository permissions, you will also choose which repositories to grant the GitHub App access to.

Before installing a GitHub App, you should ensure you trust the owner of the GitHub App. You should also review the permissions that the GitHub App is requesting and make sure you are comfortable granting those permissions. For more information about the REST API requests the GitHub App can make with those permissions, see [Permissions Required For GitHub Apps](https://docs.github.com/en/rest/authentication/permissions-required-for-github-apps).

There is no limit to how many apps you can install.


### Difference between installation and authorization

After you install a GitHub App, you may also be asked to authorize the app.

When you **install** a GitHub App on your account or organization, you grant the app permission to access the organization and repository resources that it requested. You also specify which repositories the app can access. During the installation process, the GitHub App will indicate which repository and organization permissions you are granting. For more information about what different permissions enable a GitHub App to do, see [Choosing Permissions For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).

For example, you might grant the GitHub App permission to read repository metadata and write issues, and you might grant the GitHub App access to all of your repositories.

![Screenshot of the page to install a GitHub App. The app requests read access to metadata and write access to issues.](/assets/images/github-apps/install-app.png)

When you **authorize** a GitHub App, you grant the app access to your GitHub account, based on the account permissions the app requested. During the authorization process, the app will indicate which resources the app can access on your account. When you authorize a GitHub App, you also grant the app permission to act on your behalf.

For example, you might grant the GitHub App permission to read your email addresses and write gists.

![Screenshot of the page to authorize a GitHub App. The app is requesting read access to email and write access to gists.](/assets/images/github-apps/authorize-app.png)

You can install a GitHub App without authorizing the app. Similarly, you can authorize the app without installing the app.


For more information about authorizing GitHub Apps, see [Authorizing GitHub Apps](https://docs.github.com/en/apps/using-github-apps/authorizing-github-apps).

## Requirements to install a GitHub App

Anyone can install GitHub Apps on their personal account, unless they are an Enterprise Managed User.

Organization owners can install GitHub Apps on their organization.

Enterprise owners can install GitHub Apps on their enterprise accounts, if the application requests enterprise permissions. The app can be owned by the enterprise, an organization within the enterprise, or a third-party developer. Third-party apps must be public and cannot request the "Enterprise organization installations" or "Enterprise organization installation repositories" permissions.


Repository admins can install GitHub Apps in the organization that owns the repository if the app does not request any organization permissions nor the "repository administration" permission. When doing so, they can only install the app with access to the repositories that they admin. Organization owners can restrict GitHub App installation by repository admins. When this restriction is enabled, repository admins cannot install GitHub Apps and must instead request that organization owners install the desired app. For more information, see [Limiting OAUTH App And GitHub App Access Requests And Installations](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests-and-installations).


Organization members and outside collaborators that cannot install an app on the organization can still select the organization during the install process. Instead of installing the app, GitHub will send a notification to the organization owner to request the organization owner to install the app. The ability to make these requests can be controlled using app access request policies. See [Limiting OAUTH App And GitHub App Access Requests And Installations](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests-and-installations).

The "app manager" role does not give a person the ability to install a GitHub App on the organization  or enterprise. See [About GitHub App Managers](https://docs.github.com/en/apps/maintaining-github-apps/about-github-app-managers).

## Installing a GitHub App

During the installation process, the app owner will direct you to a GitHub URL to install the GitHub App. The URL will look something like `https://github.com/github-apps/APP-NAME/installations/new`, where `APP-NAME` is the name of the GitHub App.

1. Select the location where you want to install the GitHub App. You can select your personal account or an organization that you are a member of. If you are an enterprise owner, you can also choose to install the app on your enterprise, if the app supports enterprises.

   

   > [!NOTE]
   > If your organization uses SAML SSO and you do not see your organization listed, you may need to start an active SAML session for your organization. For more information, see [Saml And GitHub Apps](https://docs.github.com/en/apps/using-github-apps/saml-and-github-apps).


   

1. If the app requires repository permissions, select **All repositories** or **Only select repositories**. The app will always have at least read-only access to all public repositories on GitHub.

   If the app does not require repository permissions, these options will be omitted.
1. If you selected **Only select repositories** in the previous step, under the **Select repositories** dropdown, select the repositories that you want the app to access.

   If the app creates any repositories, the app will automatically be granted access to those repositories as well.
1. Review the permissions that the app is requesting. For more information about the REST API requests the GitHub App can make with those permissions, see [Permissions Required For GitHub Apps](https://docs.github.com/en/rest/authentication/permissions-required-for-github-apps).
1. Click **Install**, **Install and request**, or **Request**. The button that is presented depends on whether your organization owner must approve none, some, or all of the requested access for the app. Enterprise installations cannot be requested—the enterprise owner must install the app directly. For more information, see [Requirements to install a GitHub App](#requirements-to-install-a-github-app).
