# Two CodeQL workflows

> [!NOTE]
> This article describes the features available with the version of the CodeQL action and associated CodeQL CLI bundle included in the initial release of this version of GitHub Enterprise Server. If your enterprise uses a more recent version of the CodeQL action, see the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/{{ currentArticle }}) of this article for information on the latest features.
For information on using the latest version, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).




Default setup overrides existing CodeQL setups by disabling any existing CodeQL workflows, and blocking any CodeQL analysis API uploads. This behavior stops you using GitHub Actions minutes to run workflows for CodeQL advanced setup when only the results from default setup will be used. For more information about switching between advanced and default setups, see [Results Different Than Expected](https://docs.github.com/en/code-security/reference/code-scanning/troubleshoot-analysis-errors/results-different-than-expected).

Optionally, if you are certain you no longer need the pre-existing workflow file, you can delete the file from your repository. For more information, see [Deleting Files In A Repository](https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository).

In some cases, your repository may use multiple code scanning configurations. These configurations can generate duplicate alerts. Additionally, stale configurations that no longer run will display outdated alert statuses, and the stale alerts will stay open indefinitely. To avoid outdated alerts, you should remove stale code scanning configurations from a branch. For more information on multiple configurations and deleting stale configurations, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts#about-alerts-from-multiple-configurations) and [Resolve Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts#removing-stale-configurations-and-alerts-from-a-branch).
