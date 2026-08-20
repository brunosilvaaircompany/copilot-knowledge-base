# Managing custom patterns

Custom patterns are user-defined patterns that you can use to identify secrets that are not detected by the default patterns supported by secret scanning. For more information, see [Define Custom Patterns](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns).

At the enterprise level, only the creator of a custom pattern can edit the pattern, and use it in a dry run. There are no similar restrictions for editing custom patterns at repository and organization level.

## Editing a custom pattern

When you save a change to a custom pattern, this closes all the secret scanning alerts that were created using the previous version of the pattern.

1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.
   * For a repository or organization, display the "Advanced Security" settings for the repository or organization where the custom pattern was created. For more information, see [Defining a custom pattern for a repository](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-a-repository) or [Defining a custom pattern for an organization](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-an-organization).
   * For an enterprise, under "Policies" display the "Advanced Security Code security" area, and then click **Security features**. For more information, see [Defining a custom pattern for an enterprise account](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-an-enterprise-account).

1. Under "Custom patterns", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="Edit pattern" %}.
1. When you're ready to test your edited custom pattern, to identify matches without creating alerts, click **Save and dry run**.
1. When you have reviewed and tested your changes, click **Publish changes**.
1. Optionally, to enable push protection for your custom pattern, click **Enable**.

   > [!NOTE]
   > * Push protection for custom patterns will only apply to repositories that have secret scanning as push protection enabled. For more information about enabling push protection, see [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).
   > * Enabling push protection for commonly found custom patterns can be disruptive to contributors.

   ![Screenshot of custom pattern page with the button to enable push protection emphasized.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

1. Optionally, to disable push protection for your custom pattern, click **Disable**.

   ![Screenshot of the custom pattern page with the button to disable push protection highlighted with a dark orange outline.](/assets/images/help/repository/secret-scanning-disable-push-protection-custom-pattern.png)

## Removing a custom pattern

When you remove a custom pattern, GitHub gives you the option to close the secret scanning alerts relating to the pattern, or keep these alerts.

1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.
   * For a repository or organization, display the "Advanced Security" settings for the repository or organization where the custom pattern was created. For more information, see [Defining a custom pattern for a repository](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-a-repository) or [Defining a custom pattern for an organization](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-an-organization).
   * For an enterprise, under "Policies" display the "Advanced Security Code security" area, and then click **Security features**. For more information, see [Defining a custom pattern for an enterprise account](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-an-enterprise-account).

1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="Remove pattern" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.

If you choose to close the alerts when removing a custom pattern, you need to be aware that the deletion process happens asynchronously in the background. For custom patterns that have generated a high volume of alerts (thousands or more), the deletion process may take several minutes to hours to complete. You can continue working while the process completes.

## Enabling push protection for a custom pattern

You can enable secret scanning as a push protection for custom patterns stored at the enterprise, organization, or repository level.

### Enabling push protection for a custom pattern stored in an enterprise

> [!NOTE]
> * To enable push protection for custom patterns, secret scanning as push protection needs to be enabled at the enterprise level.
> * Enabling push protection for commonly found custom patterns can be disruptive to contributors.


Before enabling push protection for a custom pattern at enterprise level, you must also test your custom patterns using dry runs. You can only perform a dry run on repositories that you have administration access to. If an enterprise owner wants access to perform dry runs on any repository in an organization, they must be assigned the organization owner role. For more information, see [Managing Your Role In An Organization Owned By Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. Under "Advanced Security Code security", click **Security features**.
1. Under "Secret scanning", under "Custom patterns", click {% octicon "pencil" aria-label="Edit custom pattern" %} for the pattern of interest.


   >[!NOTE] At the enterprise level, you can only edit and enable push protection for custom patterns that you created.

1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.

   >[!NOTE] The option to enable push protection is visible for published patterns only.


   ![Screenshot of the custom pattern page with the button to enable push protection highlighted with a dark orange outline.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

### Enabling secret scanning as a push protection in an organization for a custom pattern

Before enabling push protection for a custom pattern at organization level, you must ensure that you enable secret scanning for the repositories that you want to scan in your organization. To enable secret scanning on all repositories in your organization, see [Managing Security And Analysis Settings For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, select the **Advanced Security** dropdown menu, then click **Global settings**.
1. Under "Custom patterns", click {% octicon "pencil" aria-label="Edit custom pattern" %} for the pattern of interest.

1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.
{% indented_data_reference reusables.secret-scanning.push-protection-org-notes spaces=3 %}

   ![Screenshot of the "Push protection" section of the custom pattern page. A button, labeled "Enable", is outlined in dark orange.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

### Enabling secret scanning as a push protection in a repository for a custom pattern

Before enabling push protection for a custom pattern at repository level, you must define the custom pattern for the repository, and test it in the repository. For more information, see [Define Custom Patterns](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-a-repository).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Secret Protection", under "Custom patterns", click {% octicon "pencil" aria-label="Edit custom pattern" %} for the pattern of interest.
1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.

   >[!NOTE] The option to enable push protection is visible for published patterns only.


   ![Screenshot of the "Push protection" section of the custom pattern page. A button, labeled "Enable", is outlined in dark orange.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)
