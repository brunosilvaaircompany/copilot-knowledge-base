# GitHub Advanced Security license billing

## Licenses for GitHub Advanced Security

The Advanced Security product has two license SKUs (stock keeping units):

{% data reusables.advanced-security.ghas-products-bullets+ghas %}

For more information, see [feature summary and pricing information](https://github.com/enterprise/advanced-security#pricing) and [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).

## How usage of GitHub Advanced Security licenses is measured

A subset of Advanced Security features are available to **all public repositories** on GitHub.com **free of charge**. If you change the visibility of a public repository to private and don't pay for Advanced Security, Advanced Security features will be disabled for that repository.

Use of Advanced Security features in **all other repositories requires a license**. Your license usage is calculated based on the number of **unique, active committers** to repositories with GitHub Secret Protection or GitHub Code Security features enabled. GitHub App bots are ignored. For information about differences between bot and machine accounts, see [Differences Between GitHub Apps And OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts).

### Active and unique committers

Each **active committer** to at least one repository with an Advanced Security feature enabled uses **one license**. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

* **Active committers** are committers who contributed to at least one repository  and have a GitHub Team or GitHub Enterprise license with your organization or enterprise. That is, they are also a member, an enterprise-managed user, an external collaborator, or have a pending invitation to join your organization or enterprise.
* **Unique committers** is the number of active committers who contributed only to one repository, or only to repositories in one organization. You can free up this number of licenses by disabling GitHub Secret Protection or GitHub Code Security for that repository or organization.

> [!NOTE] When a repository is migrated to GitHub using GitHub Enterprise Importer, GitHub Advanced Security only consumes licenses for commits and pushes made _after_ migration. Historic contributions from _before_ the migration are not considered. For more information, see [About GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer).

You can see the active and unique committers to an organization on the Global settings page for Advanced Security. Under "Secret Protection repositories" and "Code Security repositories", summaries and repository-level details are reported. See [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings).

## Free use of GitHub Advanced Security features

GitHub makes some Advanced Security features available free of charge on GitHub.com.

* **All public repositories** have access to code scanning, secret scanning, and dependency review.
* **Secret risk assessment** is available for organizations on GitHub.com. See [Viewing Your Security Risk Assessment Reports](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/viewing-your-security-risk-assessment-reports){% elsif ghes %}[Viewing Your Security Risk Assessment Reports](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/viewing-your-security-risk-assessment-reports) in the GitHub Enterprise Cloud documentation.
* **Code security risk assessment** is available for organizations on  GitHub.com. See [Risk Assessment](https://docs.github.com/en/code-security/concepts/code-scanning/risk-assessment).

For full details of available features, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).

You need to **pay** to use Advanced Security features in **private repositories** on GitHub.com, and in all repositories hosted by GHE.com and GitHub Enterprise Server.

## Using more than your planned licenses

Your account may have a limit on the number of licenses you can use. For example, volume billing specifies a set number of licenses.

If your number of unique, active committers exceeds your license limit, features controlled by Advanced Security licensing continue to work on all repositories where they are already enabled.

However, you will not be able to enable GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security on any additional repositories. Any new repositories created in organizations where GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security are configured to be enabled automatically will be created with the products disabled.

## Paying for GitHub Advanced Security licenses

You pay for additional licenses using the payment method set up for your GitHub account. See [Manage Payment Info](https://docs.github.com/en/billing/how-tos/set-up-payment/manage-payment-info).

There are two different ways to pay for licenses.

* **Metered billing** available for GitHub Enterprise Cloud and from GitHub Enterprise Server 3.13 onward with GitHub Connect

  * Users can enable GitHub Secret Protection or GitHub Code Security independently.
  * Monthly bill for the number of licenses used by active committers.
  * No pre-defined license limit.
  * No overage state, you pay only for what you use.
  > [!NOTE]
  > On GitHub Enterprise Server, metered use of Advanced Security products is billed through the linked enterprise account on GitHub Enterprise Cloud.

* **Volume/subscription billing** available for GitHub Enterprise plans only

  * Purchase a specific number of GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security licenses that last for a defined period, typically at least a year, see [Buy Advanced Security](https://docs.github.com/en/billing/how-tos/products/buy-advanced-security){% elsif ghes %}[Buy Advanced Security](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/products/buy-advanced-security) in the GitHub Enterprise Cloud documentation.
  * If the usage of Advanced Security by active committers exceeds the number of licenses purchased, you need to purchase additional licenses to cover this overage usage.

To view your current license usage, see [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use).

### Understanding usage

Users can contribute to multiple repositories or organizations. Usage is measured across the whole organization or enterprise to ensure that each member uses one license regardless of how many repositories or organizations the user contributes to.

When you enable or disable GitHub Secret Protection or GitHub Code Security for one or more repositories, GitHub displays an overview of how this will change your usage.

* Metered billing, showing an increase or reduction in the number of active committers using licenses.
* Volume/subscription billing, showing the number of licenses used or freed by unique active committers.

### Example showing how the active committer count changes over time

The following example timeline demonstrates how the unique, active committer count for Advanced Security licenses could change over time in an organization or enterprise. For each month, you will find events, along with the resulting committer count and the effect on usage-based billing.

| Date | Events during the month | Unique, active committers | Effect on usage-based billing |
| :- | :- | -: | :- |
| <span style="white-space: nowrap;">April 15</span> | A member of your enterprise enables GitHub Secret Protection and GitHub Code Security for repository **X**. Repository **X** has 50 committers over the past 90 days. | **50** | Billing begins for 50 committers. |
| <span style="white-space: nowrap;">May 1</span> | Developer **A** switches teams and stops committing to repository **X**. Developer **A**'s contributions continue to count for 90 days. | **50** | No immediate change. Developer **A** continues to be billed until their contributions are inactive for 90 days. |
| <span style="white-space: nowrap;">August 1</span> | Developer **A**'s contributions no longer count towards the licenses required, because 90 days have passed. | 50 - 1 =<br>**49** | Developer **A** is removed from the billing count, reducing the billable committers to 49. |
| <span style="white-space: nowrap;">August 15</span> | A member of your enterprise enables GitHub Secret Protection and GitHub Code Security for a second repository, repository **Y**. In the last 90 days, a total of 20 developers contributed to that repository. Of those 20 developers, 10 also recently worked on repo **X** and do not require additional licenses. | 49 + 10 =<br>**59** | Billing increases to 59 committers, accounting for the 10 additional unique contributors. |
| <span style="white-space: nowrap;">August 16</span> | A member of your enterprise disables GitHub Secret Protection and GitHub Code Security for repository **X**. Of the 49 developers who were working on repository **X**, 10 still also work on repository **Y**, which has a total of 20 developers contributing in the last 90 days. | 49 - 29 =<br>**20** | Billing for repository **X** continues until the end of the monthly billing cycle, but the overall billing count decreases to 20 committers for the next cycle. |

## Managing your budget for Advanced Security

The options available for managing committers and costs depend on your billing model.

### Metered billing

You can control usage and costs with budgets and alerts. If you use GitHub Enterprise Cloud, then you can also use cost centers and policies to control costs.
See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets) and [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)
{% elsif ghes %}[Set Up Budgets](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-budgets) in the GitHub Enterprise Cloud docs

.



#### Hard budgets for GitHub Advanced Security SKUs

SKU-level budgets for Advanced Security products (Secret Protection and Code Security) support the **Limit usage when budget limit is reached** option. For Advanced Security, this option prevents new enablement. It does **not** disable Advanced Security on repositories where it is already active.

When the budget limit is reached:

* Repositories where Advanced Security is already enabled continue to function normally. Active committers in those repositories are still counted and billed.
* Advanced Security cannot be enabled on any additional repositories until the budget is increased or a new billing cycle begins.

There are two scenarios where usage may exceed the budget:

* A new committer becomes active in a repository where Advanced Security is already enabled. You are billed for the additional license cost.
* When you enable Advanced Security on a repository with more active committers than the remaining budget allows, the enablement succeeds but you are billed for any usage beyond the budget limit.

For more information about budgets, see [Budgets And Alerts](https://docs.github.com/en/billing/concepts/budgets-and-alerts).



> [!NOTE] When you enable GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security, there is a delay of up to two hours before the change is shown in the usage data on the "Billing and licensing" tab.


If your enterprise uses Advanced Security on both GitHub Enterprise Server and GitHub Enterprise Cloud, you can ensure users don't consume multiple licenses unnecessarily by synchronizing license usage between environments. See [Sync License Usage](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/manage-server-licenses/sync-license-usage).

### Volume/subscription billing

Each license specifies a maximum number of accounts that can use Advanced Security. Each active committer to at least one repository with the product enabled consumes one license. When you remove a user from your organization{% elsif ghec or ghes %}enterprise account, the user's license is freed within 24 hours.

As soon as you make licenses available, by disabling GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security in some repositories, or by increasing your license size, the options for enabling GitHub Secret Protection, GitHub Code Security, and GitHub Advanced Security will work again as normal.

You can enforce policies to allow or disallow the use of Advanced Security by organizations owned by your enterprise account. See [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).

> [!TIP]
> All standalone instances of GitHub Enterprise Server use volume/subscription licenses. Contact [GitHub's Sales team](https://enterprise.github.com/contact) if you want to make changes to your license.



## Disabling GitHub Advanced Security in an enterprise

To disable GitHub Advanced Security and prevent accidental re-enablement across your enterprise, enterprise owners can use the **Disable Advanced Security** option available in the enterprise licensing page. This is particularly useful for metered users who want to ensure GitHub Advanced Security is completely disabled and cannot be re-enabled without explicit approval.

The **Disable Advanced Security** option:
* Disables GitHub Advanced Security in all private and internal repositories
* Sets a policy to prevent future paid adoption
* Stops billing for future usage (metered billing only)

See [Disable Ghas For Enterprise](https://docs.github.com/en/billing/how-tos/products/disable-ghas-for-enterprise).



## Further reading

* [Planning A Trial Of Ghas](https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas)
* [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security)

* [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)
