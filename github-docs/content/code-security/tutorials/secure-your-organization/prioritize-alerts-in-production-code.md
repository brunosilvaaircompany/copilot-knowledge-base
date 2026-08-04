# Prioritizing Dependabot and code scanning alerts using production context

Application Security (AppSec) managers are often overwhelmed by a high volume of alerts, many of which may not represent real risk because the affected code never makes it to production. By associating production context with your alerts, you can filter and prioritize vulnerabilities that impact artifacts actually approved for production environments. This enables your team to focus remediation efforts on the vulnerabilities that matter most, reducing noise and improving your security posture.

## 1. Associate artifacts with production context

GitHub's linked artifacts page allows you to provide production context for your company's builds using the REST API or a partner integration. Teams can then use this context to prioritize Dependabot and code scanning alerts. For more information, see [Linked Artifacts](https://docs.github.com/en/code-security/concepts/supply-chain-security/linked-artifacts).

To provide production context, you should configure your system to:

* Update **storage records** in the linked artifacts page whenever an artifact is promoted to a production-approved package repository.
* Update **deployment records** when an artifact is deployed to a production environment.

GitHub processes this metadata and uses it to power alert filters, such as `artifact-registry-url` and `artifact-registry` from storage records, and `has:deployment` and `runtime-risk` from deployment records. Runtime risks from deployment records are also visible as properties on individual code scanning and Dependabot alert pages.

For more information on updating records, see [Upload Linked Artifacts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/upload-linked-artifacts).

## 2. Use production context filters

Production context filters are made available in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

* **Dependabot view**: See [View Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts#viewing-and-prioritizing-dependabot-alerts).
* **Code scanning view**: See [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts).
* **Security campaign view**: See [Creating Managing Security Campaigns](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/creating-managing-security-campaigns).

Once the alert list is displayed, use the `artifact-registry-url` or `artifact-registry` filters in organization views to focus on vulnerabilities affecting artifacts present in production.

* For your own artifact repository that is hosted at `my-registry.example.com`, you would use:

    ```text copy
    artifact-registry-url:my-registry.example.com
    ```

* If you use JFrog Artifactory, you can use `artifact-registry` with no further setup in GitHub:

    ```text copy
    artifact-registry:jfrog-artifactory
    ```

You can also use the `has:deployment` and `runtime-risk` filters to focus on vulnerabilites that deployment metadata shows as in deployment or at risk of runtime vulnerabilities. This data is populated automatically if you have connected MDC. For example:

* To focus on alerts in deployed code that is exposed to the internet, you would use:

    ```text copy
    has:deployment AND runtime-risk:internet-exposed
    ```

You can also combine these production context filters with other filters, such as EPSS:

```text copy
epss > 0.5 AND artifact-registry-url:my-registry.example.com
```

## 3. Remediate alerts in production code

Now you have identified the alerts that put your production code at risk of exploitation, you need to remediate them as a matter of urgency. Where possible use automation to lower the barrier to remediation.

* **Dependabot alerts:** Use automated pull requests for security fixes. See [Configure Security Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates).
* **Code scanning alerts:** Create targeted campaigns with Copilot Autofix. See [Creating Managing Security Campaigns](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/creating-managing-security-campaigns).

## Further reading

* [Prioritizing Dependabot Alerts Using Metrics](https://docs.github.com/en/code-security/tutorials/manage-security-alerts/prioritizing-dependabot-alerts-using-metrics)
