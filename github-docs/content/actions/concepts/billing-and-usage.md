# Billing and usage

## About billing for GitHub Actions


GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners. See [Choose The Runner For A Job](https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories). For private repositories, each GitHub account receives a quota of free minutes and storage for use with GitHub-hosted runners, depending on the account's plan. Any usage beyond the included amounts is billed to your account.
 For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).




## Availability

GitHub Actions is available on all GitHub products, but GitHub Actions is not available for private repositories owned by accounts using legacy per-repository plans. See [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans).




## Usage limits and policy

There are several limits on GitHub Actions usage when using GitHub-hosted runners. See [Limits](https://docs.github.com/en/actions/reference/limits).

In addition to the usage limits, you must ensure that you use GitHub Actions within the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service). For more information on GitHub Actions-specific terms, see the [GitHub Additional Product Terms](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#actions).



## GitHub Actions usage metrics

Organization owners and users with the "View organization Actions metrics" permission can view GitHub Actions usage metrics for their organization. These metrics can help you understand how and where your Actions minutes are being used. For more information, see [Viewing GitHub Actions Metrics For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization).

When you view usage metrics, it is important to remember that GitHub Actions usage metrics do not apply minute multipliers to the metrics displayed. While they _can_ help you understand your bill, their primary purpose is to help you understand how and where Actions minutes are being used in your organization.

For more information about minute multipliers, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions#baseline-minute-costs).



## Billing for reusable workflows

If you reuse a workflow, billing is always associated with the caller workflow. Assignment of GitHub-hosted runners is always evaluated using only the caller's context. The caller cannot use GitHub-hosted runners from the called repository.

For more information see, [Reuse Workflows](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows).

## Next steps

You can manage your GitHub Actions usage and retention policies for your repository, organization, or enterprise account. For more information, see:
* [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)
* [Configuring The Retention Period For GitHub Actions Artifacts And Logs In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
* [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)
* [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)
