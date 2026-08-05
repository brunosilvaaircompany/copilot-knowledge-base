# Configuring Git for GitHub Desktop

## About Git configuration for GitHub Desktop

GitHub Desktop uses your local Git configuration settings and provides the option to configure some of these settings, such as the global author information and the default branch that is used when creating a new repository.

GitHub Desktop allows you to set the name and email address you would like associated with the commits you make in your repositories. If your name and email address have already been set in the global Git configuration for your computer, GitHub Desktop will detect and use those values. GitHub Desktop also allows you to set a different name and email address for an individual repository. This is useful when you need to use a separate work email address for a specific repository.

If the email address that has been set in your Git configuration does not match an email address associated with the GitHub account you are currently logged in to, GitHub Desktop will show a warning prior to committing.

GitHub Desktop also allows you to change the default branch name that you would like to use when creating new repositories. By default, GitHub Desktop uses `main` as the default branch name in any new repositories you create.

> [!TIP]
> Anyone will be able to see the email address in your Git configuration if you make public commits. For more information, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

## Configuring your global author information

Configuring your global author information in GitHub Desktop will update the name and email address in your global Git configuration. This will be the default name and email address for all new local repositories you create in GitHub Desktop.

{% mac %}

1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)

1. In the "Settings" window, click **Git**.

   ![Screenshot of the "Git" pane in the "Settings" window. In the left sidebar, an option labeled "Git" is highlighted in blue and outlined in orange.](/assets/images/help/desktop/mac-select-git-pane.png)

1. In the "Name" field, type the name you'd like to use for your Git configuration.

1. In the "Email" dropdown menu, select the email address you would like to use for your commits. You can select an email address associated with your GitHub account, or select "Other" and enter another email address.

1. Click **Save**.


{% endmac %}

{% windows %}

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is outlined in orange.](/assets/images/help/desktop/windows-choose-options.png)

1. In the "Options" window, click **Git**.

   ![Screenshot of the "Git" pane in the "Options" window. In the left sidebar, an option labeled "Git" is highlighted in blue.](/assets/images/help/desktop/windows-select-git-pane.png)

1. In the "Name" field, type the name you'd like to use for your Git configuration.

1. In the "Email" dropdown menu, select the email address you would like to use for your commits. You can select an email address associated with your GitHub account, or select "Other" and enter another email address.

1. Click **Save**.


{% endwindows %}

## Configuring different author information for an individual repository

You can change the name and email address used to author commits in a specific repository. This local Git configuration will override your global Git configuration settings for this one repository only.

{% mac %}

1. To switch to the repository for which you want to set specific configuration, use the "Current Repository" dropdown menu.

   ![Screenshot of the repository bar in GitHub Desktop. Next to "Current Repository", a dropdown icon is highlighted with an orange outline.](/assets/images/help/desktop/current-repo-dropdown.png)

1. In the "GitHub Desktop" menu bar, select **Repository** and click **Repository Settings...**.

   ![Screenshot of the menu bar on a Mac. In the open "Repository" dropdown menu, a cursor hovers over "Repository Settings", highlighted in blue.](/assets/images/help/desktop/repository-settings-mac.png)

1. In the "Repository Settings" window, in the left sidebar, click **Git Config**.

1. Under "For this repository I wish to", select **Use a local Git config**.
![Screenshot of the "Git Config" pane in the "Repository Settings" window. The "Use a local Git config" radio button is selected and outlined in orange.](/assets/images/help/desktop/use-local-git-config.png)

1. In the "Name" field, type the name you'd like to use for your local Git configuration.

1. In the "Email" dropdown menu, select the email address you would like to use for your commits. You can select an email address associated with your GitHub account, or select "Other" and enter another email address.

1. Click **Save**.


{% endmac %}

{% windows %}

1. In the **Repository** menu, click **Repository settings...**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the open "Repository" dropdown menu, "Repository Settings" is outlined in orange.](/assets/images/help/desktop/repository-settings-win.png)

1. In the "Repository Settings" window, in the left sidebar, click **Git Config**.

1. Under "For this repository I wish to", select **Use a local Git config**.
![Screenshot of the "Git Config" pane in the "Repository Settings" window. The "Use a local Git config" radio button is selected and outlined in orange.](/assets/images/help/desktop/use-local-git-config.png)

1. In the "Name" field, type the name you'd like to use for your local Git configuration.

1. In the "Email" dropdown menu, select the email address you would like to use for your commits. You can select an email address associated with your GitHub account, or select "Other" and enter another email address.

1. Click **Save**.


{% endwindows %}

## Configuring your default branch for new repositories

You can configure the default branch that will be used when you create a new repository in GitHub Desktop. For more information about the default branch, see [About Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch).

{% mac %}

1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)

1. In the "Settings" window, click **Git**.

   ![Screenshot of the "Git" pane in the "Settings" window. In the left sidebar, an option labeled "Git" is highlighted in blue and outlined in orange.](/assets/images/help/desktop/mac-select-git-pane.png)

1. Click the **Default branch** tab.
1. Edit the name of the default branch as needed.
1. Click **Save**.


{% endmac %}

{% windows %}

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is outlined in orange.](/assets/images/help/desktop/windows-choose-options.png)

1. In the "Options" window, click **Git**.

  ![Screenshot of the "Git" pane in the "Options" window. In the left sidebar, an option labeled "Git" is highlighted in blue.](/assets/images/help/desktop/windows-select-git-pane.png)

1. Click the **Default branch** tab.
1. Edit the name of the default branch as needed.
1. Click **Save**.


{% endwindows %}

## Configuring your shell environment for Git hooks

GitHub Desktop runs Git hooks in your configured shell environment. This means hooks have access to the same environment variables, shell configuration files (such as `.bash_profile` or `.zshrc`), and tools as when you run Git from the command line. Tools installed via version managers, such as `nvm` or `rbenv`, will also be available to your hooks.

You can configure hook environment settings in the **Hooks** tab of the **Git** settings pane.

{% mac %}

1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)

1. In the "Settings" window, click **Git**.

   ![Screenshot of the "Git" pane in the "Settings" window. In the left sidebar, an option labeled "Git" is highlighted in blue and outlined in orange.](/assets/images/help/desktop/mac-select-git-pane.png)

1. Click the **Hooks** tab.

{% endmac %}

{% windows %}

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is outlined in orange.](/assets/images/help/desktop/windows-choose-options.png)

1. In the "Options" window, click **Git**.

  ![Screenshot of the "Git" pane in the "Options" window. In the left sidebar, an option labeled "Git" is highlighted in blue.](/assets/images/help/desktop/windows-select-git-pane.png)

1. Click the **Hooks** tab.

{% endwindows %}

The following settings are available:

* **Load Git hook environment variables from shell**: When enabled, GitHub Desktop loads environment variables from your shell when executing Git hooks. Enable this if your hooks depend on tools installed via version managers such as `nvm`, `rbenv`, or `asdf`.

{% mac %}

* **Cache Git hook environment variables**: Caches hook environment variables to improve performance. Disable this if your hooks rely on frequently changing environment variables.

{% endmac %}

For more information about Git hooks in GitHub Desktop, see [Working With Git Hooks In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/working-with-git-hooks-in-github-desktop).

## Further reading

* [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account)
* [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
* [About Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
* [Git Basics](https://docs.github.com/en/get-started/git-basics)
