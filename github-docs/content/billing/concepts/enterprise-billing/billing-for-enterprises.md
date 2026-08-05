# Billing for GitHub Enterprise

## What's included in my GitHub Enterprise Cloud bill?

Each month, you're billed for:

* The number of GitHub Enterprise licenses you use, determined by the number of unique users in your enterprise
* Any usage of features like GitHub Actions or GitHub Codespaces, beyond the allowances included in your GitHub Enterprise plan
* Any extra features you purchase, such as GitHub Copilot or Advanced Security licenses

For prices and monthly allowances, see [GitHub Pricing](https://github.com/pricing).

## What's included in my GitHub Enterprise Server bill?

Your bill includes the cost of GitHub Enterprise licenses used, as well as any extra features you purchase, such as GitHub Copilot or Advanced Security licenses.

>[!TIP] GitHub Enterprise Server customers with no enterprise account on GitHub.com can view invoices and payment history on the [GitHub Enterprise website](https://enterprise.github.com/login).

## Paying for your enterprise

For the available payment methods for your enterprise, see [Supported Payment Methods](https://docs.github.com/en/billing/reference/supported-payment-methods).

## Invoiced customers

If you created your enterprise account with help from GitHub's Sales team, you may have agreed to pay by invoice instead.

For invoiced customers, each invoice includes a single bill that covers the cost of GitHub Enterprise licenses used, as well as your use of paid services. For example, in addition to your usage for GitHub Enterprise, you may also use GitHub Secret Protection.

## License costs

The following sections describe the GitHub Enterprise license component of your bill specifically.

Each member of your enterprise uses a license (previously known as a seat). The license portion of your bill is based on the number of licenses consumed by your enterprise. To learn which people consume a license in your enterprise, see [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users).

### Billing models for GitHub Enterprise licenses

There are two billing models for GitHub Enterprise licenses: **usage-based** and **volume**.

You are already enrolled in usage-based billing if you created a trial of GitHub Enterprise Cloud on or after August 1, 2024.

If you currently pay for your GitHub Enterprise licenses by invoice with a volume, subscription, or prepaid agreement, you will continue to be billed in this way until your agreement expires. At renewal, you have the option to switch to the metered billing model.


### License usage across deployments

GitHub uses a unique-user licensing model. With the GitHub Enterprise plan, you're entitled to use both GitHub Enterprise Cloud and GitHub Enterprise Server. Your GitHub Enterprise Cloud allowance includes **one** deployment, on either GitHub.com or GHE.com.

GitHub determines how many licenses you're consuming based on the number of unique users across your deployments. Each user only consumes one license, no matter how many GitHub Enterprise Server instances the user uses, or how many organizations the user is a member of on your GitHub Enterprise Cloud deployment. This model allows each person to use multiple GitHub Enterprise deployments without incurring extra costs.


To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you synchronize license usage between your GitHub Enterprise Server and GitHub Enterprise Cloud environments. See [Combined Enterprise Use](https://docs.github.com/en/billing/concepts/enterprise-billing/combined-enterprise-use).

## Further reading

* [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users)
* [View Enterprise Usage](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage)
