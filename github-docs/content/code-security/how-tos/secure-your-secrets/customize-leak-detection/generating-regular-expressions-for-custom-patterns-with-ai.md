# Generating regular expressions for custom patterns with AI

## Generating a regular expression for a repository with AI



> [!NOTE]
> You do not need a subscription to GitHub Copilot to use the AI-powered regular expression generator. AI-detected secrets features are available to repositories owned by organizations and enterprises with GitHub Secret Protection enabled.




1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Secret Protection", under "Custom patterns", click **New pattern**.
1. In the "Pattern name" field, type a name for your pattern.
1. On the top right, click **Generate with AI**.

   > [!NOTE]
   > You can enter a regular expression manually instead of using the generator, by typing a regular expression for the format of your secret pattern in the "Secret format" field. For more information, see [Defining a custom pattern for a repository](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-a-repository) or [Defining a custom pattern for an organization](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-an-organization).

1. In the sliding panel that is displayed:
   * Complete the "I want a regular expression that" field, describing, ideally in plain English, what patterns you want your regular expression to capture. You can use other natural languages, but the performance may not be as good as with English.
   * Complete the "Examples of what I'm looking for" field, giving an example of a pattern you want to scan for.
   * Click **Generate suggestions**.
   * Optionally, click on a suggestion to view a description of the regular expression.
   * Click **Use results** in the Results section that appears, for the result you want to use.

     ![Screenshot of a filled custom secret scanning pattern form for the generator to use.](/assets/images/help/repository/secret-scanning-use-regular-expression-generator.png)

1. You can click **More options {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %}** to provide other surrounding content or additional match requirements for the secret format. GitHub will add the examples you typed in the sliding panel to the **Test string** field.

1. When you're ready to test your new custom pattern, to identify matches in the repository without creating alerts, click **Save and dry run**.
1. When the dry run finishes, you'll see a sample of results (up to 1000). Review the results and identify any false positive results.
   ![Screenshot showing results from dry run.](/assets/images/help/repository/secret-scanning-publish-pattern.png)
1. Edit the new custom pattern to fix any problems with the results, then, to test your changes, click **Save and dry run**.

1. When you're satisfied with your new custom pattern, click **Publish pattern**.


You can configure secret scanning to check pushes for custom patterns before commits are merged into the default branch. For more information, see [Enabling push protection for a custom pattern](/code-security/how-tos/secure-your-secrets/customize-leak-detection/manage-custom-patterns#enabling-push-protection-for-a-custom-pattern).


## Generating a regular expression for an organization with AI

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** then **Global settings**.

1. Under "Custom patterns", click **New pattern**.

1. In the "Pattern name" field, type a name for your pattern.
1. On the top right, click **Generate with AI**.

   > [!NOTE]
   > You can enter a regular expression manually instead of using the generator, by typing a regular expression for the format of your secret pattern in the "Secret format" field. For more information, see [Defining a custom pattern for a repository](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-a-repository) or [Defining a custom pattern for an organization](/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns#defining-a-custom-pattern-for-an-organization).

1. In the sliding panel that is displayed:
   * Complete the "I want a regular expression that" field, describing, ideally in plain English, what patterns you want your regular expression to capture. You can use other natural languages, but the performance may not be as good as with English.
   * Complete the "Examples of what I'm looking for" field, giving an example of a pattern you want to scan for.
   * Click **Generate suggestions**.
   * Optionally, click on a suggestion to view a description of the regular expression.
   * Click **Use results** in the Results section that appears, for the result you want to use.

     ![Screenshot of a filled custom secret scanning pattern form for the generator to use.](/assets/images/help/repository/secret-scanning-use-regular-expression-generator.png)

1. You can click **More options {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %}** to provide other surrounding content or additional match requirements for the secret format. GitHub will add the examples you typed in the sliding panel to the **Test string** field.

1. When you're ready to test your new custom pattern, to identify matches in selected repositories without creating alerts, click **Save and dry run**.
1. Select the repositories where you want to perform the dry run.
   * To perform the dry run across the entire organization, select **All repositories in the organization**.
   * To specify the repositories where you want to perform the dry run, select **Selected repositories**, then search for and select up to 10 repositories.
1. When you're ready to test your new custom pattern, click **Run**.

1. When the dry run finishes, you'll see a sample of results (up to 1000). Review the results and identify any false positive results.
   ![Screenshot showing results from dry run.](/assets/images/help/repository/secret-scanning-publish-pattern.png)
1. Edit the new custom pattern to fix any problems with the results, then, to test your changes, click **Save and dry run**.

1. When you're satisfied with your new custom pattern, click **Publish pattern**.


You can configure secret scanning to check pushes for custom patterns before commits are merged into the default branch. For more information, see [Enabling push protection for a custom pattern](/code-security/how-tos/secure-your-secrets/customize-leak-detection/manage-custom-patterns#enabling-push-protection-for-a-custom-pattern).


## Further reading

* [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features)
