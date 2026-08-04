# Getting help from GitHub Support about GitHub Actions

You can [contact GitHub Support](/support/contacting-github-support) for assistance with GitHub Actions.

## Providing diagnostic and troubleshooting information

The contents of private and internal repositories are not visible to GitHub Support, so GitHub Support may request additional information to understand the complete context of your inquiry and reproduce any unexpected behavior. You can accelerate the resolution of your inquiry by providing this information when you initially raise a ticket with GitHub Support.

Some information that GitHub Support will request can include, but is not limited to, the following:

* The URL of the workflow run.

  
  For example: `https://DOMAIN/ORG/REPO/actions/runs/0123456789`
  
  
* The workflow `.yml` file(s) attached to the ticket as `.txt` files. For more information about workflows, see [Workflows](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows#about-workflows).
* A copy of your workflow run logs for an example workflow run failure. For more information about workflow run logs, see [Use Workflow Run Logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs#downloading-logs).
* A copy of your runner logs,  which can be found under the `_diag` folder within the runner. For more information about self-hosted runners, see [Monitor And Troubleshoot](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot#reviewing-the-self-hosted-runner-application-log-files).

  Self-hosted runner log file names are formatted: `Runner_YYYY####-xxxxxx-utc.log` and `Worker_YYYY####-xxxxxx-utc.log`.

> [!NOTE]
> Attach files to your support ticket by changing the file's extension to `.txt` or `.zip`. If you include textual data such as log or workflow file snippets inline in your ticket, ensure they are formatted correctly as Markdown code blocks. For more information about proper Markdown formatting, see [Basic Writing And Formatting Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-code).
>
> If the information you provide is unreadable due to the loss of formatting by improper Markdown syntax, GitHub Support may request that resubmit the information either as an attachment or with the correct Markdown formatting.

> [!WARNING]
> Ensure all files and text provided to GitHub Support have been properly redacted to remove sensitive information such as tokens and other secrets.


Depending on the nature of your inquiry, GitHub Support may also request that you generate and upload a support bundle for further review and analysis. For more information about providing data to GitHub Support and support bundles, see [Providing Data To GitHub Support](https://docs.github.com/en/support/contacting-github-support/providing-data-to-github-support).


### Ephemeral Runner Application Log Files

GitHub Support may request the runner application log files from ephemeral runners. GitHub expects and recommends that you have implemented a mechanism to forward and preserve the runner application log files from self-hosted ephemeral runners. For more information about runner application log files and troubleshooting self-hosted runners, see [Monitor And Troubleshoot](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot#reviewing-the-self-hosted-runner-application-log-files).

### Actions Runner Controller

If you are using Actions Runner Controller (ARC), GitHub Support may ask you to submit the complete logs for the controller, listeners, and runner pods. For more information about collecting Actions Runner Controller's logs, see [Troubleshoot](https://docs.github.com/en/actions/tutorials/use-actions-runner-controller/troubleshoot#checking-the-logs-of-the-controller-and-runner-set-listener).

For more information about the scope of support for Actions Runner Controller, see [Support For Arc](https://docs.github.com/en/actions/concepts/runners/support-for-arc).

### CodeQL and GitHub Actions

If you are requesting assistance with a CodeQL analysis workflow, GitHub Support may request a copy of the CodeQL debugging artifacts. For more information about debugging artifacts for a CodeQL analysis workflow, see [Logs Not Detailed Enough](https://docs.github.com/en/code-security/reference/code-scanning/troubleshoot-analysis-errors/logs-not-detailed-enough#creating-codeql-debugging-artifacts).

To provide the debugging artifacts to GitHub Support, please download the CodeQL debugging artifacts from a sample workflow run and attach it to your ticket as a `.zip` file. For more information on downloading workflow artifacts, see [Download Workflow Artifacts](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts).

If the CodeQL debugging artifacts `.zip` file is too large to upload to the ticket, please advise GitHub Support, and we will work with you to determine the next steps.

## Scope of support

If your support request is outside of the scope of what our team can help you with, we may recommend next steps to resolve your issue outside of GitHub Support. Your support request is possibly out of GitHub Support's scope if the request is primarily about:

* Third party integrations, such as Jira
* Hardware setup
* Hypervisor-related issues, such as OS disk detection, network setup, boot failure, VM console access, etc.
* Migration assistance between specific hardware platforms or storage providers
* CI/CD, such as Jenkins
* Azure DevOps (please contact Azure Support)
* Writing scripts
* Configuration of external authentication systems, such as SAML identity providers
* Open source projects
* Writing or debugging new queries for CodeQL
* Cloud provider configurations, such as virtual network setup, custom firewall, or proxy rules
* Container orchestration, such as Kubernetes setup, or networking
* Detailed assistance with workflows and data management
* Comprehensive support for customization and tool installation on GitHub Actions custom images
* Preview features. Public preview, private preview, and technical preview features are out of GitHub Support's scope.
* GitHub Copilot suggestions
* GitHub Copilot consumption questions. GitHub Support does not audit or break down Copilot usage consumption. Support can explain the billing model and point you to available usage-reporting documentation, but cannot determine why usage appears high or why included usage was exhausted sooner than expected.
* Metered billing explanations. GitHub Support does not interpret usage reporting or spending trends for metered GitHub billing products, nor provide recommendations based on that data. For more information, see [Billing Cycles](https://docs.github.com/en/billing/concepts/billing-cycles).

GitHub Copilot provides AI-powered code suggestions and responses. As outlined in our legal terms, you retain full responsibility for your code, including any suggestions you choose to incorporate. The quality, accuracy, relevance, or functionality of Copilot’s responses may not always meet your expectations, and mistakes may occur. It is your decision whether to use Copilot’s suggestions, and GitHub strongly recommends implementing reasonable policies and practices to prevent the use of any suggestion in a way that could violate the rights of others. This includes, but is not limited to, using the filtering features available in Copilot.

Copilot-generated suggestions and outputs are out of scope for support. GitHub Support cannot guarantee the correctness or suitability of Copilot’s responses, and is not responsible for the results produced. If you have concerns about specific suggestions, please review all links and information provided to ensure accuracy and compliance with your requirements. For more information, see [GitHub Copilot Terms](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) and [Best practices for using Copilot](/free-pro-team@latest/copilot/get-started/best-practices).

For support with public preview features, you can contact your account manager on [GitHub's Sales team](https://github.com/enterprise/contact). For support with private preview and technical preview features, contact the group provided during the private preview's onboarding session, or your account manager on [GitHub's Sales team](https://github.com/enterprise/contact).

**GitHub Support does not provide support for discontinued GitHub Enterprise Server releases.** If you're running a discontinued release, please upgrade to a supported version before opening a support ticket so we can help you effectively. See [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).


For assistance with topics outside the scope of support, for guided consulting, workshops, or training for your teams, please consult with [GitHub Expert Services](https://github.com/services/), which offers specialized services to help you optimize your use of our platform.

If you're uncertain if the issue is out of scope, open a ticket and we're happy to help you determine the best way to proceed.
