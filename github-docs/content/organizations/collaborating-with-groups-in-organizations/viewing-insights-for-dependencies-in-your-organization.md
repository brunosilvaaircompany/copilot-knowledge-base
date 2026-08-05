# Viewing insights for dependencies in your organization

> [!IMPORTANT]
> Dependency insights is in maintenance mode. It won't receive new features or improvements, and it may show incomplete data for organizations that use dependency submission. For dependency analysis across your organization, GitHub recommends the [GitHub SBOM Toolkit](https://github.com/advanced-security/github-sbom-toolkit).


Dependency insights can help you track, report, and act on your organization's open source usage.

> [!NOTE]
> To view organization dependency insights, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).

>
> On GHE.com, dependency insights and license and package metadata in the dependency graph are not currently available. The dependency graph itself remains available at the repository level. See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).



## Viewing organization dependency insights

> [!NOTE]
> Please make sure you have enabled the [dependency graph](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/enable-dependency-graph).

With dependency insights you can view vulnerabilities, licenses, and other important information for the open source projects your organization depends on.

> [!NOTE]
> Dependency insights don't include information for private dependencies.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a graph icon and "Insights," is outlined in dark orange.](/assets/images/help/organizations/org-nav-insights-tab.png)

1. Optionally, to view dependency insights for all your organizations, click **My organizations**.

   ![Screenshot of the "Dependency insights" page. A button, labeled "My organizations," is outlined in dark orange.](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
1. To filter by a vulnerability status, a license, or a combination of the two, click the results in the **Open security advisories** and **Licenses** graphs.
1. To see which dependents in your organization are using each library, next to a vulnerability, click **{% octicon "package" aria-hidden-"true" aria-label="package" %} X dependents**.

## Further reading

* [About Organizations](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations)
* [Explore Dependencies](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/explore-dependencies)
* [Changing The Visibility Of Your Organizations Dependency Insights](https://docs.github.com/en/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)
* [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-for-visibility-of-dependency-insights)
