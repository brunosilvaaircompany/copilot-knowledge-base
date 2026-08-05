# Transferring ownership of a GitHub App

## About transferring GitHub Apps

The owner of a GitHub App registration can transfer ownership of the GitHub App registration to another account. App managers can also transfer ownership of the GitHub App registration. For more information about app managers, see [About GitHub App Managers](https://docs.github.com/en/apps/maintaining-github-apps/about-github-app-managers).

You can transfer apps from a user or organization to another account. You cannot transfer ownership to a team.


You can also transfer ownership of a **private** or **internal** app from a user or organization to an enterprise account that the owner belongs to. When you do this:

* The app's visibility becomes **internal** if it was not previously, making it available to install in any organization in the enterprise. The app is not uninstalled from any organization.
* The app is uninstalled from all user accounts. Because transfers are limited to private and internal apps, this will only ever be your own user account.

For more information about app visibility, see [Making A GitHub App Public Or Private](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/making-a-github-app-public-or-private).



## Transferring a GitHub App registration

1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.

1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**.

1. In the left sidebar, click **GitHub Apps**.

1. Select the GitHub App whose ownership you want to transfer.
1. In the left sidebar, click **Advanced**.

1. Click **Transfer ownership**.
1. Under "New owner's GitHub username, organization, or enterprise name", type the name of the account you want to transfer the GitHub App to.

1. Select the account from the dropdown that you wish to transfer to. Be aware that enterprises and organizations can have the same name, so check that you are transferring to the correct account type.
1. If transferring the app would uninstall it from your account, a warning will appear.

1. Click **Transfer this GitHub App**.
