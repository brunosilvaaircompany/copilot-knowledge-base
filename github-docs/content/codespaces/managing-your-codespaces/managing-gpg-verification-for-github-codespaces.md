# Managing GPG verification for GitHub Codespaces

## About GPG verification in GitHub Codespaces

After you enable GPG verification, GitHub will automatically sign commits you make in GitHub Codespaces, and the commits will have a verified status on GitHub. For more information about GitHub-signed commits, see [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).

By default, GPG verification is disabled for codespaces you create. If you enable GPG verification, your commits are signed in repositories that you trust.

Your list of trusted repositories for GitHub Codespaces is shared between the GPG verification and Settings Sync features. Assuming you have both features enabled, if you have added a selected list of trusted repositories for GPG verification, Settings Sync is turned on in codespaces created from these repositories. If you trust a new repository for Settings Sync, GPG verification is enabled for the same repository. Although the features share the same list of trusted repositories, you can enable or disable GPG verification and Settings Sync independently.

> [!NOTE]
> If you have previously enabled GPG verification for all repositories, we recommend changing your preferences to use a selected list of trusted repositories. For more information, see [Security In GitHub Codespaces](https://docs.github.com/en/codespaces/reference/security-in-github-codespaces#using-settings-sync).


For more information about managing your preferences for Settings Sync, see [Personalizing GitHub Codespaces For Your Account](https://docs.github.com/en/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#managing-your-preferences-for-settings-sync).

> [!NOTE]
> If you have linked a dotfiles repository with GitHub Codespaces, the Git configuration in your dotfiles may conflict with the configuration that GitHub Codespaces requires to sign commits. For more information, see [Troubleshooting Gpg Verification For GitHub Codespaces](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces).

## Enabling or disabling GPG verification

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**.

1. On the page that's displayed, under "GPG verification," enable or disable GPG verification by selecting or deselecting **Enable**.
1. To change your trusted repositories for GPG verification and Settings Sync, under "Trusted repositories," either select **All repositories**, or select **Selected repositories** and use the "Select repositories" dropdown to add repositories you trust.

   > [!NOTE]
   > We recommend using a selected list of trusted repositories. For more information, see [Security In GitHub Codespaces](https://docs.github.com/en/codespaces/reference/security-in-github-codespaces#using-settings-sync).


Once you enable GPG verification, it will automatically take effect in any new codespaces you create from the relevant repositories. To have GPG verification take effect in an existing active codespace, you will need to stop and restart the codespace. For more information, see [Stopping And Starting A Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace).


## Further reading

* [Setting Your User Preferences](https://docs.github.com/en/codespaces/setting-your-user-preferences)
* [Customizing Your Codespace](https://docs.github.com/en/codespaces/customizing-your-codespace)
