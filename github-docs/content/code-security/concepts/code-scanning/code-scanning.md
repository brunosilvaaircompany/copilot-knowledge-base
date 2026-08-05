# Code scanning

> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).
>
> You may not be able to enable or disable code scanning if an enterprise owner has set a GitHub Code Security policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).




Code scanning is a feature that you use to analyze the code in a GitHub repository to find security vulnerabilities and coding errors. Any problems identified by the analysis are shown in your repository.


You can use code scanning to find, triage, and prioritize fixes for existing problems in your code. Code scanning also prevents developers from introducing new problems. You can schedule scans for specific days and times, or trigger scans when a specific event occurs in the repository, such as a push.

If code scanning finds a potential vulnerability or error in your code, GitHub displays an alert in the repository. After you fix the code that triggered the alert, GitHub closes the alert. For more information, see [Resolve Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts).



GitHub Copilot Autofix will suggest fixes for alerts from code scanning analysis, allowing developers to prevent and reduce vulnerabilities with less effort. For more information, see [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features).



To monitor results from code scanning across your repositories or your organization, you can use webhooks and the code scanning API. For information about the webhooks for code scanning, see
[Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert). For information about API endpoints, see [Code Scanning](https://docs.github.com/en/rest/code-scanning/code-scanning).



Code scanning uses GitHub Actions, with each workflow run consuming GitHub Actions minutes. If you want to use code scanning on private repositories, you need a GitHub Code Security license. For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions). For information about how you can try GitHub Advanced Security for free, see [Trial Advanced Security](https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/trial-advanced-security).
{% elsif fpt %}For information about how you can try GitHub Enterprise with GitHub Advanced Security for free, see [Setting Up A Trial Of GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud) and [Trial Advanced Security](https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/trialing-github-advanced-security/trial-advanced-security#setting-up-your-trial-of-github-advanced-security) in the GitHub Enterprise Cloud documentation.


If you want to assess your organization's exposure to vulnerabilities before purchasing a license, you can run a free code security risk assessment. See [Risk Assessment](https://docs.github.com/en/code-security/concepts/code-scanning/risk-assessment).



To get started with code scanning, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).

## About tools for code scanning

You can configure code scanning to use the CodeQL product maintained by GitHub or a third-party code scanning tool.

### About CodeQL analysis

CodeQL is the code analysis engine developed by GitHub to automate security checks. You can analyze your code using CodeQL and display the results as code scanning alerts.
 For more information about CodeQL, see [Codeql Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning).

### About third-party code scanning tools

Code scanning is interoperable with third-party code scanning tools that output Static Analysis Results Interchange Format (SARIF) data. SARIF is an open standard. For more information, see [Sarif Support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support).


You can run third-party analysis tools within GitHub using actions or within an external CI system. For more information, see [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-third-party-actions) or [Upload Sarif File](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file).

## About the tool status page

The tool status page shows useful information about all of your code scanning tools. If code scanning is not working as you'd expect, the tool status page is a good starting point for debugging problems. For more information, see [Use The Tools Status Page For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/use-the-tools-status-page-for-code-scanning).
