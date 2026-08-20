# Defining custom patterns for secret scanning

## Defining a custom pattern with Copilot

You can use AI to generate regular expressions based on a text description of the type of pattern you would like to detect, including optional example strings that should be detected. See [Generating Regular Expressions For Custom Patterns With Ai](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/generating-regular-expressions-for-custom-patterns-with-ai).



## Defining a custom pattern for a repository

Before defining a custom pattern, you must ensure that Secret Protection is enabled on your repository. For more information, see [Enable Secret Scanning](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enable-secret-scanning).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Secret Protection", to the right of "Custom patterns", click **New pattern**.
1. Enter the details for your new custom pattern. You must at least provide the name for your pattern, and a regular expression for the format of your secret pattern.
   1. In the "Pattern name" field, type a name for your pattern.
   1. In the "Secret format" field, type a regular expression for the format of your secret pattern.
   1. You can click **More options {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %}** to provide other surrounding content or additional match requirements for the secret format. See [Custom Patterns](https://docs.github.com/en/code-security/reference/secret-security/custom-patterns#syntax-for-manually-defining-custom-patterns).
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.



   ![Screenshot of a filled custom secret scanning pattern form.](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)

{% elsif ghes %}

   ![Screenshot of a filled custom secret scanning pattern form.](/assets/images/help/repository/secret-scanning-create-custom-pattern-ghes17.png)



1. When you're ready to test your new custom pattern, to identify matches in the repository without creating alerts, click **Save and dry run**.
1. When the dry run finishes, you'll see a sample of results (up to 1000). Review the results and identify any false positive results.
   ![Screenshot showing results from dry run.](/assets/images/help/repository/secret-scanning-publish-pattern.png)
1. Edit the new custom pattern to fix any problems with the results, then, to test your changes, click **Save and dry run**.

1. When you're satisfied with your new custom pattern, click **Publish pattern**.

1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).

   > [!NOTE]
   > The "Enable" button isn't available until after the dry run succeeds and you publish the pattern.

After your pattern is created, secret scanning scans for any secrets in your entire Git history on all branches present in your GitHub repository.
 For more information on viewing secret scanning alerts, see [Manage Secret Scanning Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts).

## Defining a custom pattern for an organization

Before defining a custom pattern, you must ensure that you enable secret scanning for the repositories that you want to scan in your organization.  You can use security configurations to enable secret scanning on all repositories in your organization. For more information, see [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, select the **Advanced Security** dropdown menu, then click **Global settings**.

1. Under "Custom patterns", click **New pattern**.

1. Enter the details for your new custom pattern. You must at least provide the name for your pattern, and a regular expression for the format of your secret pattern.
   1. In the "Pattern name" field, type a name for your pattern.
   1. In the "Secret format" field, type a regular expression for the format of your secret pattern.
   1. You can click **More options {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %}** to provide other surrounding content or additional match requirements for the secret format. See [Custom Patterns](https://docs.github.com/en/code-security/reference/secret-security/custom-patterns#syntax-for-manually-defining-custom-patterns).
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.



   ![Screenshot of a filled custom secret scanning pattern form.](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)

{% elsif ghes %}

   ![Screenshot of a filled custom secret scanning pattern form.](/assets/images/help/repository/secret-scanning-create-custom-pattern-ghes17.png)



1. When you're ready to test your new custom pattern, to identify matches in select repositories without creating alerts, click **Save and dry run**.
1. Select the repositories where you want to perform the dry run.
   * To perform the dry run across the entire organization, select **All repositories in the organization**.
   * To specify the repositories where you want to perform the dry run, select **Selected repositories**, then search for and select up to 10 repositories.
1. When you're ready to test your new custom pattern, click **Run**.

1. When the dry run finishes, you'll see a sample of results (up to 1000). Review the results and identify any false positive results.
   ![Screenshot showing results from dry run.](/assets/images/help/repository/secret-scanning-publish-pattern.png)
1. Edit the new custom pattern to fix any problems with the results, then, to test your changes, click **Save and dry run**.

1. When you're satisfied with your new custom pattern, click **Publish pattern**.

1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection#customization).

{% indented_data_reference reusables.secret-scanning.push-protection-org-notes spaces=3 %}

After your pattern is created, secret scanning scans for any secrets in repositories in your organization, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found and can review the alert in the repository where the secret is found. For more information on viewing secret scanning alerts, see [Manage Secret Scanning Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts).

## Defining a custom pattern for an enterprise account



Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see [Enabling GitHub Advanced Security For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/enabling-github-advanced-security-for-your-enterprise).



> [!NOTE]
> * At the enterprise level, only the creator of a custom pattern can edit the pattern, and use it in a dry run.
> * You can only perform a dry run on repositories that you have administration access to. If an enterprise owner wants access to perform dry runs on any repository in an organization, they must be assigned the organization owner role. For more information, see [Managing Your Role In An Organization Owned By Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. Under "Advanced Security Code security", click **Security features**.
1. Under "Secret scanning custom patterns", click **New pattern**.
1. Enter the details for your new custom pattern. You must at least provide the name for your pattern, and a regular expression for the format of your secret pattern.
   1. In the "Pattern name" field, type a name for your pattern.
   1. In the "Secret format" field, type a regular expression for the format of your secret pattern.
   1. You can click **More options {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %}** to provide other surrounding content or additional match requirements for the secret format. See [Custom Patterns](https://docs.github.com/en/code-security/reference/secret-security/custom-patterns#syntax-for-manually-defining-custom-patterns).
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.



   ![Screenshot of a filled custom secret scanning pattern form.](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)

{% elsif ghes %}

   ![Screenshot of a filled custom secret scanning pattern form.](/assets/images/help/repository/secret-scanning-create-custom-pattern-ghes17.png)



1. When you're ready to test your new custom pattern, to identify matches in the enterprise without creating alerts, click **Save and dry run**.
1. Search for and select up to 10 repositories where you want to perform the dry run.
1. When you're ready to test your new custom pattern, click **Run**.

1. When the dry run finishes, you'll see a sample of results (up to 1000). Review the results and identify any false positive results.
   ![Screenshot showing results from dry run.](/assets/images/help/repository/secret-scanning-publish-pattern.png)
1. Edit the new custom pattern to fix any problems with the results, then, to test your changes, click **Save and dry run**.

1. When you're satisfied with your new custom pattern, click **Publish pattern**.

1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).
{% indented_data_reference reusables.secret-scanning.push-protection-enterprise-note spaces=3 %}

After your pattern is created, secret scanning scans for any secrets in repositories within your organizations with GitHub Secret Protection enabled, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found, and can review the alert in the repository where the secret is found. For more information on viewing secret scanning alerts, see [Manage Secret Scanning Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts).
