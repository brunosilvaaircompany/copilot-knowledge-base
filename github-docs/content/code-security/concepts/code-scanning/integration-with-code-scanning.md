# Integration with code scanning

## About integration with code scanning



> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).
>
> You may not be able to enable or disable code scanning if an enterprise owner has set a GitHub Code Security policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).




As an alternative to running code scanning within GitHub, you can perform analysis elsewhere, using the CodeQL CLI or another static analysis tool, and then upload the results. For more information, see [Use With Existing Ci System](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system).

If you run code scanning using multiple configurations, an alert will sometimes have multiple analysis origins. If an alert has multiple analysis origins, you can view the status of the alert for each analysis origin on the alert page. For more information, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts#about-alerts-from-multiple-configurations).


## Integrations with webhooks

You can use code scanning webhooks to build or configure integrations, such as [GitHub Apps](/apps/creating-github-apps/registering-a-github-app) or [OAuth apps](/apps/oauth-apps/building-oauth-apps), that subscribe to code scanning events in your repository. For example, you could build an integration that creates an issue on GitHub or sends you a Slack notification when a new code scanning alert is added in your repository. For more information, see [Webhooks](https://docs.github.com/en/webhooks) and [Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert).

## Further reading

* [Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning)
* [Use With Existing Ci System](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system)
* [Sarif Support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support)
