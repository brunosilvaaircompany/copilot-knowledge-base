# Estimating the price of Secret Protection

## What is the pricing calculator?

You can use the pricing calculator on the secret risk assessment page to estimate the monthly cost of GitHub Secret Protection for your organization. This tool allows you to preview costs based on your current repositories and active committers, so you can plan for purchase or rollout decisions.

For more information about Secret Protection, see [Protect Your Secrets](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/protect-your-secrets).

## Prerequisites

You need to have generated a secret risk assessment for your organization. See [Viewing Your Security Risk Assessment Reports](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/viewing-your-security-risk-assessment-reports).

## Estimating the price of Secret Protection

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Security", click **{% octicon "key" aria-hidden="true" aria-label="key" %} Assessments**.

1. On the top right corner of the banner, click **Get started**.
1. In the dropdown, select **Preview cost and enable Secret Protection**.
1. In the calculator dialog, choose whether to estimate the cost for:
   * **All repositories**: Includes every repository in your organization.
   * **Selected repositories**: Choose specific repositories for the estimate.
   Once you've made your choices, the calculator shows:
      * The **estimated monthly cost** for your organization.
      * The **number of Secret Protection licenses required**, based on active committers in the last 90 days for the selected repositories.
      * The **per-committer rate** (for example, $19 per active committer).
1. To proceed with enabling Secret Protection, click **Review and enable**.

> **Nota:**

Did you successfully use the pricing calculator to estimate the cost of using Secret Protection features on your organization?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>



## Understanding your results

* **The pricing calculator only provides an estimate.** Actual billing is based on the number of active committers in the selected private repositories during the billing period.
* The calculator **does not include costs for other GitHub Advanced Security features**.
* The calculator **dynamically calculates active committers** for each repository you select. If two repositories share the same number of committers, adding the second repository shows 0 additional committers, because enabling Secret Protection for one also covers the other. This helps you quickly see the true incremental cost as you select repositories.
* USD is the only supported currency.
