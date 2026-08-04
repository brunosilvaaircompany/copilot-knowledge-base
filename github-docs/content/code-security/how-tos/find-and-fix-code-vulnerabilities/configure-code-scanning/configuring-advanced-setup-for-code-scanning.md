# Configuring advanced setup for code scanning

> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. If you want to use GitHub Actions to scan your code, the site administrator must also enable GitHub Actions and set up the infrastructure required. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).






> [!NOTE]
> This article describes the features available with the version of the CodeQL action and associated CodeQL CLI bundle included in the initial release of this version of GitHub Enterprise Server. If your enterprise uses a more recent version of the CodeQL action, see the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/{{ currentArticle }}) of this article for information on the latest features.
For information on using the latest version, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).




If you do not need a highly customizable code scanning configuration, consider using default setup for code scanning. For more information, see [Setup Types](https://docs.github.com/en/code-security/concepts/code-scanning/setup-types).

## Prerequisites

Your repository is eligible for advanced setup if it meets these requirements.
* It uses CodeQL-supported languages or you plan to generate code scanning results with a third-party tool.
* GitHub Actions is enabled.
* It is publicly visible, or GitHub Code Security is enabled.{%- elsif ghes %}
* GitHub Code Security is enabled.



If the server on which you are running GitHub Enterprise Server is not connected to the internet, your site administrator can enable CodeQL code scanning by making the CodeQL analysis bundle available on the server. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).


## Configuring advanced setup for code scanning with CodeQL

You can customize your CodeQL analysis by creating and editing a workflow file. Selecting advanced setup generates a basic workflow file for you to customize using standard workflow syntax and specifying options for the CodeQL action. See [Workflows](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows) and [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options).

Using actions to run code scanning will use minutes. For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).




  > [!NOTE]
  > You can configure code scanning for any public repository where you have write access.



1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Scroll down to "Code Security", in the "CodeQL analysis" row select **Set up** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %}, then click **Advanced**.

   > [!NOTE]
   > If you are switching from default setup to advanced setup, in the "CodeQL analysis" row, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click **{% octicon "workflow" aria-hidden="true" aria-label="workflow" %} Switch to advanced**. In the pop-up window that appears, click **Disable CodeQL**.

   ![Screenshot of the "Code Security" section of "Advanced Security" settings. The "Advanced setup" button is highlighted with an orange outline.](/assets/images/help/security/advanced-code-scanning-setup-ghas.png)

1. To customize how code scanning scans your code, edit the workflow.

   Generally, you can commit the CodeQL analysis workflow without making any changes to it. However, many of the third-party workflows require additional configuration, so read the comments in the workflow before committing.

   For more information, see [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options) and [Codeql For Compiled Languages](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/codeql-for-compiled-languages).

1. Click **Commit changes...** to display the commit changes form.

   ![Screenshot of the form to create a new file. To the right of the file name, a green button, labeled "Commit changes...", is outlined in dark orange.](/assets/images/help/repository/start-commit-commit-new-file.png)
1. In the commit message field, type a commit message.
1. Choose whether you'd like to commit directly to the default branch, or create a new branch and start a pull request.
1. Click **Commit new file** to commit the workflow file to the default branch or click **Propose new file** to commit the file to a new branch.
1. If you created a new branch, click **Create pull request** and open a pull request to merge your change into the default branch.

In the suggested CodeQL analysis workflow, code scanning is configured to analyze your code each time you either push a change to the default branch or any protected branches, or raise a pull request against the default branch. As a result, code scanning will now commence.

The `on:pull_request` and `on:push` triggers for code scanning are each useful for different purposes. See [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#scan-frequency) and [Trigger A Workflow](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow).

For information on bulk enablement, see [Configuring Advanced Setup For Code Scanning With Codeql At Scale](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/configuring-advanced-setup-for-code-scanning-with-codeql-at-scale).



## Configuring code scanning using third-party actions

GitHub includes workflow templates for third-party actions, as well as the CodeQL action. Using a workflow template is much easier than writing a workflow unaided.

Using actions to run code scanning will use minutes. For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. If the repository has already at least one workflow configured and running, click **New workflow** to display workflow templates. If there are currently no workflows configured for the repository, go to the next step.

   ![Screenshot of the Actions tab for a repository. The "New workflow" button is outlined in dark orange.](/assets/images/help/security/actions-new-workflow-button.png)

1. In the "Choose a workflow" or "Get started with GitHub Actions" view, scroll down to the "Security" category and click **Configure** under the workflow you want to configure. You may need to click **View all** to find the security workflow you want to configure.

   ![Screenshot of the Security category of workflow templates. The Configure button and "View all" link are highlighted with an orange outline.](/assets/images/help/security/actions-workflows-security-section.png)

1. Follow any instructions in the workflow to customize it to your needs. For more general assistance about workflows, click **Documentation** on the right pane of the workflow page.

   ![Screenshot showing a workflow template file open for editing. The "Documentation" button is highlighted with an orange outline.](/assets/images/help/security/actions-workflows-documentation.png)

1. When you have finished defining your configuration, add the new workflow to your default branch.

   For more information, see [Use Workflow Templates](https://docs.github.com/en/actions/how-tos/write-workflows/use-workflow-templates#choosing-and-using-a-workflow-template) and [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options).



## Next steps

After your workflow runs successfully at least once, you are ready to start examining and resolving code scanning alerts. For more information on code scanning alerts, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts) and [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts).

Learn how code scanning runs behave as checks on pull requests, see [Triage Alerts In Pull Requests](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/triage-alerts-in-pull-requests).

You can find detailed information about your code scanning configuration, including timestamps for each scan and the percentage of files scanned, on the tool status page. For more information, see [Use The Tools Status Page For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/use-the-tools-status-page-for-code-scanning).

### Further reading

* [Triage Alerts In Pull Requests](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/triage-alerts-in-pull-requests).
* [Managing GitHub Actions Notifications](https://docs.github.com/en/subscriptions-and-notifications/how-tos/managing-github-actions-notifications).
* [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options).
* [View Code Scanning Logs](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/view-code-scanning-logs).
