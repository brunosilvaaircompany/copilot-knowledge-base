# Enforcing policies for code security and analysis for your enterprise

## About policies for using security features in your enterprise

You can enforce policies to manage the use of security features within organizations owned by your enterprise. You can allow or disallow people with admin access to a repository to enable or disable the security and analysis features.

Additionally, you can enforce policies for the use of GitHub Secret Protection, GitHub Code Security and GitHub Code Quality (public preview), or GitHub Advanced Security in your enterprise's organizations and repositories.

## Enforcing a policy for the availability of Advanced Security in your enterprise's organizations

You are billed for GitHub Secret Protection, GitHub Code Security, and GitHub Advanced Security products on a per-committer basis. See [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#managing-committers-and-costs).

You can enforce a policy that controls whether repository administrators are allowed to enable features for Advanced Security in an organization's repositories. You can configure a policy for all organizations owned by your enterprise account, or for individual organizations that you choose.

Disallowing GitHub Secret Protection, GitHub Code Security and GitHub Code Quality (public preview), or GitHub Advanced Security for an organization prevents repository administrators from enabling these features for additional repositories, but does not disable the features for repositories where the features are already enabled.

> [!NOTE]
> This policy only impacts repository administrators, specifically. Organization owners and security managers can always enable security features, regardless of how you set this policy. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. On the "Policies" tab of the "Advanced Security" page, select the dropdown menu, then click a policy for the organizations owned by your enterprise.

1. Optionally, if you chose **Allow for selected organizations**, to the right of an organization, select the dropdown menu to define which Advanced Security products are available to the organization.

   ![Screenshot of the dropdown menu to choose a Advanced Security policy for selected organizations in the enterprise. The dropdown is outlined.](/assets/images/help/enterprises/select-advanced-security-individual-organization-policy.png)


> [!NOTE]
> If GitHub Actions is not available for an organization, code scanning and GitHub Code Quality will be unable to run even if they are made available with this policy. See [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#policies).



## Enforcing a policy for visibility of dependency insights

Dependency insights show all open source projects that repositories within your enterprise's organizations depend on. Dependency insights include aggregated information about security advisories and licenses. For more information, see [Viewing Insights For Dependencies In Your Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization).

Across all organizations owned by your enterprise, you can control whether organization members can view dependency insights. You can also allow owners to administer the setting on the organization level. For more information, see [Changing The Visibility Of Your Organizations Dependency Insights](https://docs.github.com/en/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. In the "Policies" section, under "Dependency insights", review the information about changing the setting.
1. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "Dependency insights", select the dropdown menu and click a policy.





## Enforcing a policy to manage the use of Dependabot alerts in your enterprise

Across all organizations owned by your enterprise, you can allow members with admin permissions for repositories to enable or disable Dependabot alerts and change Dependabot alerts settings.

> [!NOTE]
> This policy only impacts repository administrators, specifically. Organization owners and security managers can always enable security features, regardless of how you set this policy. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. In the "Policies" section, under "Enable or disable Dependabot alerts by repository admins", use the dropdown menu to choose a policy.



## Enforcing a policy to manage the use of Advanced Security features in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage the use of Advanced Security features in the repositories.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. In the "Policies" section, under "Repository administrators can enable or disable `PRODUCT`", use the dropdown menu to define whether repository administrators can change the enablement of GitHub Secret Protection, GitHub Code Security and GitHub Code Quality (public preview), or GitHub Advanced Security.





## Enforcing a policy to manage the use of AI detection for secret scanning in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage and configure AI detection in secret scanning for the repositories. This policy only takes effect if repository administrators are also allowed to change enablement of Secret Protection (controlled by the "Repository administrators can enable or disable Secret Protection" policy).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. In the "Policies" section, under "AI detection in secret scanning", select the dropdown menu and click a policy.





## Enforcing a policy to manage the use of Copilot Autofix in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage where Copilot Autofix is enabled for Code Security results. GitHub Code Security must be enabled for the organization for this policy to take effect.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. In the "Policies" section, under "Copilot Autofix", select the dropdown menu and click a policy.

> [!NOTE]
> This policy controls the use of Copilot Autofix on results found by code scanning security queries only. Copilot Autofix is an integral part of GitHub Code Quality and cannot be disabled for that feature.





## Enforcing a policy to manage the use of AI-powered security detections in your enterprise's repositories

As an enterprise owner, you can control whether organization and repository administrators can enable AI-powered security detections for their organizations and repositories. This policy is set to "Not allowed" by default.

Allowing AI-powered security detections at the enterprise level does not enable the feature. Organization administrators must still explicitly enable AI-powered security detections. Repository administrators can opt-out of the feature.

This policy only takes effect if CodeQL default setup is enabled.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. Under "AI Findings", select the dropdown menu and click a policy.
