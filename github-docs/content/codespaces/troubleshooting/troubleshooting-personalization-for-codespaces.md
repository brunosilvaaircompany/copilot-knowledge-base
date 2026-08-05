# Troubleshooting personalization options for GitHub Codespaces

You can personalize GitHub Codespaces by using a `dotfiles` repository on GitHub or by using Settings Sync. For more information, see [Personalizing GitHub Codespaces For Your Account](https://docs.github.com/en/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account).

## Troubleshooting dotfiles

If your codespace fails to pick up configuration settings from dotfiles, you should work through the following debugging steps.

1. Enable dotfiles by selecting **Automatically install dotfiles** in [your personal GitHub Codespaces settings](https://github.com/settings/codespaces).

   ![Screenshot of the "Dotfiles" section of the codespace settings, with the "Automatically install dotfiles" option cleared.](/assets/images/help/codespaces/install-custom-dotfiles.png)

1. Check `/workspaces/.codespaces/.persistedshare/dotfiles` to see if your dotfiles were cloned.
   * If your dotfiles were cloned, try manually re-running your install script to verify that it is executable.
   * If your dotfiles were not cloned, check `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` to see if there was a problem cloning them.
1. Check `/workspaces/.codespaces/.persistedshare/creation.log` for possible issues. For more information, see [Creation logs](/codespaces/troubleshooting/github-codespaces-logs#creation-logs).

If the configuration from your dotfiles is correctly picked up, but part of the configuration is incompatible with codespaces, use the `$CODESPACES` environment variable to add conditional logic for codespace-specific configuration settings. For more information about configuration that may be incompatible with codespaces, see:
* [Troubleshooting Authentication To A Repository](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-authentication-to-a-repository#authenticating-to-the-repository-you-created-the-codespace-from)
* [Troubleshooting Gpg Verification For GitHub Codespaces](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces#errors-caused-by-conflicting-git-configuration)

## Troubleshooting Settings Sync

You can turn off Settings Sync to stop syncing settings to and from an instance of VS Code.

When you turn off Settings Sync in a codespace, new codespaces continue to use the settings cached from the last time your settings were pushed to the cloud. If you use the VS Code web client for codespaces, and want codespaces to use the default settings instead of your cached settings, you can disable Settings Sync. For more information, see [Managing your preferences for Settings Sync](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#managing-your-preferences-for-settings-sync).

If you want to return to using the default VS Code settings in all instances of VS Code, including the desktop application, you can clear the cache in the cloud when you turn off Settings Sync.

1. If Settings Sync is currently turned off in your instance of VS Code, and you want to clear your cached settings, you must first turn it on. For instructions, see [Personalizing GitHub Codespaces For Your Account](https://docs.github.com/en/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#turning-on-settings-sync-in-a-codespace).
1. At the bottom of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Settings Sync is On**.
1. In the dropdown, click **Settings Sync: Turn Off**.

   ![Screenshot of the dropdown menu with the "Settings Sync: Turn Off" option highlighted with a dark orange outline.](/assets/images/help/codespaces/settings-sync-turn-off.png)

1. To clear your cached settings, in the dialog, select **Turn off sync on all your devices and clear the data from the cloud**.

   ![Screenshot of the "Do you want to turn off sync?" dialog, with the option to clear data from the cloud selected.](/assets/images/help/codespaces/turn-off-sync-dialog.png)

1. Click **Turn off**.
