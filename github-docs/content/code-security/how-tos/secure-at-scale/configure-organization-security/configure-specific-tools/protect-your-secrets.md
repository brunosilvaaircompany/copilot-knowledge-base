# Pricing and enabling GitHub Secret Protection

## Prerequisites

Before you configure GitHub Secret Protection:

* Run the free secret risk assessment to inform your enablement strategy. See [Assess Your Secret Risk](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk).
* Review best practices for choosing pilot repositories. See [Select Pilot Repositories](https://docs.github.com/en/code-security/concepts/security-at-scale/select-pilot-repositories).

## Configuring GitHub Secret Protection

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Security", click **{% octicon "key" aria-hidden="true" aria-label="key" %} Assessments**.

1. In the banner display, select the **Get started** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click one of following enablement options:
   * **For public repositories for free**: Click to enable for _only_ public repositories in your organization.
   * **For all repositories**: Click to see an estimated cost for GitHub Secret Protection for all repositories in your organization.
     * If you are satisfied with the pricing estimate, to enable secret scanning alerts and push protection across your organization, click **Enable Secret Protection**.
     * Alternatively, click **Configure in settings** to customize which repositories you want to enable Secret Protection for. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).



> [!TIP]
> To extend secret detection beyond repositories your enterprise owns, enterprise owners can enable public monitoring. Public monitoring detects secrets leaked by enterprise members in public repositories across GitHub. For more information, see [Enabling Public Monitoring For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/manage-your-coverage/enabling-public-monitoring-for-your-enterprise).
