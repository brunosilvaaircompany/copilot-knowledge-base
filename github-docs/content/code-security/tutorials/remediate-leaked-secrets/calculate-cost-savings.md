# Calculating the cost savings of push protection

## What is the cost savings calculator?

You can use the ROI calculator to estimate the cost avoided by preventing leaked secrets with push protection. This information can help you:

* Determine how widely to enable GitHub Secret Protection in your organization.
* Compare the estimated impact of push protection in different teams or environments.
* Communicate time and cost implications of rollout decisions to stakeholders.

Push protection is a paid feature which is available with GitHub Secret Protection. For more information, see [Protect Your Secrets](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/protect-your-secrets).

## Prerequisites

* You need to have generated a secret risk assessment for your organization. See [Viewing Your Security Risk Assessment Reports](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/viewing-your-security-risk-assessment-reports).
* You have realistic values for:
  * Average remediation time per leaked secret (hours)
  * Average annual developer salary (USD)

## Estimating cost savings from push protection

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Security", click **{% octicon "key" aria-hidden="true" aria-label="key" %} Assessments**.

1. On the top right corner of the banner, click **Get started**.
1. In the dropdown, select **Estimate push protection savings**.
1. Review the non-editable value for "Preventable leaks" (P). If 0, a baseline value (such as 70) is shown for modeling purposes.
1. Enter or adjust the average developer annual compensation (C), in USD.
   * Use blended fully loaded annual compensation (salary + benefits).
   * Keep estimates conservative to avoid overstatement.
1. Enter or adjust the time to remediate each leaked secret (T), in hours. We recommend you use an average remediation time that reflects steps for revoking, rotating, and validating secrets, as well as notifying your teams or customers:
   * T = 1-1.5 hours for simple rotation, minimal coordination
   * T = 2-3 hours to account for a distributed team or extra checks
   * T = 3-4 hours if you work in a regulated / audited environment
1. Review the outputs from the **Return on investment** panel:
   * **Secrets prevented**: The number of preventable secrets detected.
   * **Time saved**: Total hours saved by preventing these secrets, based on your input.
   * **Potential savings with push protection**: The total estimated labor cost avoided.

> **Nota:**

Did you successfully use the ROI calculator to estimate the cost savings of using push protection on your organization?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>



## Understanding your results

Next, review the results to understand their implications and determine the appropriate scope for rolling out push protection in your organization. Keep the following information in mind as you interpret your results.

The calculator **does**:
* Estimate savings for **secrets blocked by push protection** only.
* Base results on your risk assessment and assumptions you provide.
* Provide estimates based on **labor cost avoidance** only.
* Provide a modeled baseline for preventable leaks if no secrets were detected in the current scan window.

The calculator does **not**:
* Include any costs related to data breaches or external impacts. For informational purposes, the cost of a data breach averaged $4.88M in 2024 according to IBM.
* Include time savings from other GitHub Secret Protection features.
* Support currencies other than USD.

## Troubleshooting

If you run into problems using the calculator, use the following table to troubleshoot.

| Issue | Action |
|-------|--------|
| **Preventable secrets = 0** | When no preventable secrets are detected, the calculator displays a default baseline value (such as 70) for modeling purposes.<br> To replace the baseline with real data, enable push protection on more repositories and allow secret scanning to collect more information. |
| **Estimated savings shows $5M+** | The calculator is capped at $5M. If your modeled savings exceed this threshold, the value will be displayed as "$5M+" in the UI. To get the precise amount, export your input values (preventable secrets, time to remediate, and developer salary) and replicate the formula in a spreadsheet:</br>`(Secrets prevented) × (Time to remediate) × (Hourly rate)` where hourly rate is calculated as `Salary ÷ 2080`. |
| **Value seems low** | Review your inputs for time to remediate and average developer compensation. Ensure you have included all steps involved in remediation (such as revoke, rotate, validate, and notify) and that the salary reflects a fully loaded annual cost. |
| **Value seems high** | Double-check your input values for time to remediate and average compensation to make sure they are realistic and not overstated. Remove any outliers that could be skewing the estimate. |

## Further reading

* [Detecting and Preventing Secret Leaks in Code](https://github.com/resources/whitepapers/secret-scanning-a-key-to-your-cybersecurity-strategy) in  GitHub's `resources` repository
