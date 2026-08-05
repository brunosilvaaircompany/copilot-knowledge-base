# Reviewing and modifying installed GitHub Apps

## About installed GitHub Apps

GitHub users can install GitHub Apps on their personal account or accounts they own. When you install a GitHub App, you grant the app the enterprise or organization and repository permissions that it requested. If the app requested repository permissions, you also specify which repositories the GitHub App can access. Installing an app on an enterprise only grants enterprise permissions. To grant organization and repository permissions, install the app on an organization.

You should periodically review the GitHub Apps that you have installed. You can review the permissions that you granted and change the repositories that the GitHub App can access. If you no longer use an app, consider suspending or deleting the GitHub App to block its access to resources owned by the account where it is installed.

In addition to reviewing GitHub Apps that you have installed, you can review GitHub Apps that you have authorized to act on your behalf. For more information, see [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).

## Navigating to the GitHub App you want to review or modify

* For a GitHub App installed on an enterprise:
   1. In the top right corner of GitHub, click your profile picture, then click **Your enterprises**.
   1. Next to your enterprise name, click **Settings**.
   1. In the top navigation bar, click **Settings**.
   1. In the side bar, click **GitHub Apps**. A list of the GitHub Apps owned by your enterprise will be displayed.
   1. Switch to the **Installed Apps** tab to see a list of the apps installed on your enterprise.
   1. Next to the GitHub App you want to review or modify, click **Configure**.

* For a GitHub App installed on an organization:
   1. In the top right corner of GitHub, click your profile picture, then click **Your organizations**.
   1. Next to your organization name, click **Settings**.
   1. In the side bar, under "Third-party Access," click **GitHub Apps**. A list of the GitHub Apps installed on your organization will be displayed.
   1. Next to the GitHub App you want to review or modify, click **Configure**.

* For a GitHub App installed on your personal account:
   1. In the upper-right corner of any page, click your profile picture, then click **Settings**.
   1. Under "Integrations," click **Applications**.
   1. Click **Installed GitHub Apps**. A list of the GitHub Apps installed on your personal account will be displayed.
   1. Next to the GitHub App you want to review or modify, click **Configure**.

* For a repository where a GitHub App was granted access:

   > [!NOTE]
   > In the following steps, you will be taken to the account settings for the organization or personal account where the GitHub App is installed. The settings will affect all repositories where the app is installed under that account, not just the repository where you navigated from.

   1. Navigate to the main page of the organization or repository.
   1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
   1. Under "Integrations," click **GitHub Apps**. A list of the GitHub Apps that have been granted access to your repository will be displayed.

   1. Next to the GitHub App you want to review or modify, click **Configure**.

## Reviewing permissions

1. Navigate to the GitHub App you want to modify. For more information, see [Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify).
1. Under "Permissions," review the permissions that the GitHub App has. For more information about what different permissions enable a GitHub App to do, see [Choosing Permissions For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).

## Modifying repository access

1. Navigate to the GitHub App you want to modify. For more information, see [Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify).
1. Under "Repository access," select **All repositories** or **Only select repositories**.
1. If you selected **Only select repositories** in the previous step, under the **Select repositories** dropdown, select the repositories that you want the GitHub App to access.

   If the GitHub App creates any repositories later, the app will automatically be granted access to those repositories as well.
1. Click **Save**.

## Blocking access

1. Navigate to the GitHub App you want to modify. For more information, see [Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify).
1. To keep the GitHub App installed for future use but temporarily block it from accessing resources owned by your account, click **Suspend**.

   When you suspend a GitHub App, your authorization of the app (if the app is installed on your personal account) or the authorization of the app by members of your account (if the app is installed on an organization or enterprise) will not be affected. For more information, see [Authorizing GitHub Apps](https://docs.github.com/en/apps/using-github-apps/authorizing-github-apps).

   If the GitHub App was previously suspended, you can unsuspend the app by clicking **Unsuspend**. If the GitHub App was suspended by the GitHub App owner, then you cannot unsuspend the app.
1. To uninstall a GitHub App and block it from accessing resources owned by your account, click **Uninstall**.

   When you uninstall a GitHub App from an account, the app will lose access to the resources in just that account. The app might still be authorized to access other accounts on your behalf, if it has installations in those accounts.

   If you want to stop an app from acting on your behalf anywhere on GitHub, also de-authorize the app in the "Authorized GitHub Apps" tab of your user account. This will fully deactivate any tokens issued to the app on your behalf. For more information, see [Authorizing GitHub Apps](https://docs.github.com/en/apps/using-github-apps/authorizing-github-apps).

## Further reading

* [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)
* [Privileged GitHub Apps](https://docs.github.com/en/apps/using-github-apps/privileged-github-apps)
