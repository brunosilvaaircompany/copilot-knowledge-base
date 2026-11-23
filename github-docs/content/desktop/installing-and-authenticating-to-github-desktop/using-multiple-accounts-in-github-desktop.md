# Using multiple accounts in GitHub Desktop

## About multiple accounts

You can sign in to GitHub Desktop with more than one account on the same host. For example, you can use a personal account and a work account on GitHub.com, or several accounts on GitHub Enterprise Server or GHE.com. You don't need to sign out of one account to use another.

A repository in GitHub Desktop can be assigned to one account on the repository's host. GitHub Desktop uses the assigned account for GitHub API requests and for HTTPS authentication when Git pushes, pulls, or fetches.

Copilot features in GitHub Desktop, such as generating commit messages, use the repository's account if it has access to Copilot. Otherwise, they use another signed-in account that does.

If you used GitHub Desktop before multiple accounts were supported, each of your existing repositories is assigned to the account you were signed in to on that host. If you only use one account, nothing changes.

> [!NOTE]
> The account assigned to a repository doesn't change the name and email address that Git uses as the author of your commits. For more information, see [Configuring Git For GitHub Desktop](https://docs.github.com/en/desktop/configuring-and-customizing-github-desktop/configuring-git-for-github-desktop).

## Adding another account

{% mac %}

1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)


1. In the "Settings" window, on the **Accounts** pane, click **Add GitHub.com account**. To sign in to GitHub Enterprise Server or GHE.com, click **Add GitHub Enterprise account** instead.

   ![Screenshot of the "Accounts" pane in "Settings" on a Mac. Two GitHub.com accounts are listed. "Add GitHub.com account" is outlined in dark orange.](/assets/images/help/desktop/mac-accounts-multiple-accounts.png)

1. Follow the prompts to sign in. See [Authenticating To GitHub In GitHub Desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop).

   > [!TIP]
   > Your browser might ask which GitHub account to use, even if you're already signed in. Choose the account you want to add, or sign in to a different account.

{% endmac %}

{% windows %}

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is outlined in orange.](/assets/images/help/desktop/windows-choose-options.png)


1. In the "Options" window, on the **Accounts** pane, click **Add GitHub.com account**. To sign in to GitHub Enterprise Server or GHE.com, click **Add GitHub Enterprise account** instead.

   ![Screenshot of the "Accounts" pane in "Options" on Windows. Two GitHub.com accounts are listed. "Add GitHub.com account" is outlined in dark orange.](/assets/images/help/desktop/windows-accounts-multiple-accounts.png)

1. Follow the prompts to sign in. For more information, see [Authenticating To GitHub In GitHub Desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop).

   > [!TIP]
   > Your browser might ask which GitHub account to use, even if you're already signed in. Choose the account you want to add, or sign in to a different account.

{% endwindows %}

The "Accounts" pane lists your GitHub.com accounts under "GitHub.com". Your GitHub Enterprise Server and GHE.com accounts are listed under "GitHub Enterprise", grouped by hostname.

## How GitHub Desktop chooses an account for a repository

GitHub Desktop assigns an account to a repository when you clone, add, or publish it.

* **Cloning from the "GitHub" tab:** Choose an account from the **Account** dropdown menu at the top of the "Clone a Repository" window. This dropdown menu only appears if you're signed in to more than one account. The list shows the repositories that account can access. When you clone, the repository is assigned to that account. For more information, see [Cloning And Forking Repositories From GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop).
* **Cloning from the "URL" tab, or adding a local repository:** GitHub Desktop checks which of your accounts on the repository's host can access the repository.
  * If one account can access it, the repository is assigned to that account.
  * If more than one account can access it, GitHub Desktop asks you to choose. Every account can access a public repository, so you're always asked to choose if you're signed in to more than one account on its host.
  * If none of your accounts can access it, the repository is added without an assigned account. If you're cloning a private repository over HTTPS, the clone fails.
* **Publishing a repository:** Choose an account from the **Account** dropdown menu in the "Publish Repository" window. If the repository's assigned account is signed in, that account is selected. For more information, see [Adding An Existing Project To GitHub Using GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-an-existing-project-to-github-using-github-desktop).

### Choosing an account when GitHub Desktop asks

If a repository doesn't have an assigned account, the "Repository account" window opens when GitHub Desktop needs one. For example:

* Git needs HTTPS credentials to push or pull.
* GitHub Desktop refreshes pull requests or creates a fork.

Background fetches never open this window. If you aren't signed in to any account on the repository's host, GitHub Desktop asks you to sign in instead.

If the repository's assigned account is signed out, the "Repository account" window asks you to sign in to that account. Click **Sign in** to sign in again. If you're signed in to another account on the same host, you can click **Choose another account** to assign that account to the repository instead.

To choose an account for a repository that doesn't have one:

1. In the "Repository account" window, select the **Account** dropdown menu, then click the account you want to use for this repository. The list only shows accounts on the repository's host.

   If the account you want isn't listed, click **Cancel**, sign in to the account, then try again. For more information, see [Adding another account](#adding-another-account).

   {% mac %}

   ![Screenshot of the "Repository account" window on a Mac. It asks which account to use for Spoon-Knife on GitHub.com, with an "Account" dropdown.](/assets/images/help/desktop/mac-repository-account-dialog.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "Repository account" window on Windows. It asks which account to use for Spoon-Knife on GitHub.com, with an "Account" dropdown.](/assets/images/help/desktop/windows-repository-account-dialog.png)

   {% endwindows %}

1. Click **Use account**.

## Changing the account for a repository

You can change the account for any repository that has a remote on GitHub.com, GitHub Enterprise Server, or GHE.com. You can only choose accounts that are signed in to the repository's host.

### Using repository settings

1. In the menu bar, select **Repository**, then click **Repository settings...**.

   {% mac %}

   ![Screenshot of the menu bar on a Mac. In the expanded "Repository" dropdown menu, a cursor hovers over "Repository Settings", highlighted in blue.](/assets/images/help/desktop/repository-settings-mac.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the open "Repository" dropdown menu, the "Repository Settings" option is outlined.](/assets/images/help/desktop/repository-settings-win.png)

   {% endwindows %}

1. In the "Repository Settings" window, on the **Remote** pane, select the **Account** dropdown menu, then click the account you want to use.

   To remove the repository's account, click **None (unassigned)**.

   {% mac %}

   ![Screenshot of the "Remote" pane in the "Repository Settings" window on a Mac. The "Account" dropdown is outlined in dark orange.](/assets/images/help/desktop/mac-repository-settings-account.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "Remote" pane in the "Repository settings" window on Windows. The "Account" dropdown is outlined in dark orange.](/assets/images/help/desktop/windows-repository-settings-account.png)

   {% endwindows %}

1. Click **Save**.

### Using the repository list

If a repository has a remote on a GitHub host and there's more than one account to choose from, you can switch the repository's account from the repository list.

1. In the repository bar, click **Current Repository**.
1. Right-click the repository, select **Account**, then click the account you want to use.

   The current account has a checkmark. If the current account is signed out, it's listed as "@USERNAME (Signed out)".

   {% mac %}

   ![Screenshot of a repository's context menu in the repository list on a Mac. The "Account" submenu is open and shows two accounts.](/assets/images/help/desktop/mac-repository-list-account-submenu.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of a repository's context menu in the repository list on Windows. The "Account" submenu is open and shows two accounts.](/assets/images/help/desktop/windows-repository-list-account-submenu.png)

   {% endwindows %}

You can also open a repository's settings from the same context menu. Right-click the repository, then click **Repository Settings…**.

## Signing out of an account

When you sign out of an account that has repositories assigned to it, GitHub Desktop asks whether to keep those assignments.

{% mac %}

1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)


1. In the "Settings" window, on the **Accounts** pane, next to the account you want to sign out of, click **Sign Out**.
1. If repositories are assigned to the account, choose what happens to them in the "Sign out of @USERNAME?" window.
   * To keep the assignments, leave **Clear repository account assignments** deselected. When you sign in to the account again, GitHub Desktop uses it for these repositories again.
   * To remove the assignments, select **Clear repository account assignments**. GitHub Desktop asks you to choose an account the next time it needs credentials for these repositories.

   ![Screenshot of the "Sign out of @octocat?" window on a Mac, with a "Clear repository account assignments" checkbox.](/assets/images/help/desktop/mac-sign-out-account-dialog.png)

1. Click **Sign out**.

{% endmac %}

{% windows %}

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is outlined in orange.](/assets/images/help/desktop/windows-choose-options.png)


1. In the "Options" window, on the **Accounts** pane, next to the account you want to sign out of, click **Sign out**.
1. If repositories are assigned to the account, choose what happens to them in the "Sign out of @USERNAME?" window.
   * To keep the assignments, leave **Clear repository account assignments** deselected. When you sign in to the account again, GitHub Desktop uses it for these repositories again.
   * To remove the assignments, select **Clear repository account assignments**. GitHub Desktop asks you to choose an account the next time it needs credentials for these repositories.

   ![Screenshot of the "Sign out of @octocat?" window on Windows, with a "Clear repository account assignments" checkbox.](/assets/images/help/desktop/windows-sign-out-account-dialog.png)

1. Click **Sign out**.

{% endwindows %}

If the account’s token is no longer valid and GitHub Desktop removes the account, the repository assignments are kept.

## Further reading

* [About Connections To GitHub In GitHub Desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/about-connections-to-github-in-github-desktop)
