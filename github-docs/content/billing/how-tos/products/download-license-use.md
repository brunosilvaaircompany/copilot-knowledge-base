# Downloading license use for your enterprise or organization

You can download CSV files with details of paid license use through the GitHub user interface or the REST API.

For more detailed reports on usage of all paid products, see [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use).

## On GitHub Enterprise Cloud

1. Navigate to your enterprise. For example, from [https://github.com/settings/enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text).

1. From the list of "Billing & licensing" pages, click **Licensing**.


1. In the license area of interest, click **Download CSV report**. If offered a choice, choose your preferred report.

The report will be emailed to the default email address associated with your GitHub account. For information about the fields, see [License Reports](https://docs.github.com/en/billing/reference/license-reports).

## On GitHub Enterprise Server


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Licensing{% elsif ghes %}License**.


The page shows a summary of the licenses your enterprise is using for GitHub Enterprise and GitHub Advanced Security. Use links on the page to view more detailed information.

To download a license usage report for GitHub Advanced Security:

   * **Enterprise**: In "GitHub Advanced Security", click {% octicon "download" aria-hidden="true" aria-label="download" %} **CSV report**.
   * **Organization**: In the "ORGANIZATION" table, click {% octicon "download" aria-label="Download CSV report" %} associated with the organization that you want to download a CSV report for.
   * **User namespace**: In the "USER NAMESPACED" table, click {% octicon "download" aria-label="Download CSV report" %} associated with the user that you want to download a CSV report for.
   * **Repository**: In the "ORGANIZATION" table, click the name of an organization to show a settings page for the organization. In the GitHub Advanced Security repositories table, click {% octicon "kebab-horizontal" aria-label="GHAS repository actions" %} and select **Download CSV report**.

For details of the fields included in the report, see [License Reports](https://docs.github.com/en/billing/reference/license-reports).

## Using the REST API

You can retrieve information on paid use of Advanced Security with the billing API.

* Organization-level data (cloud only), use the `/organizations/{org}/settings/billing/usage` endpoint. For more information, see [Usage?Apiversion=2022 11 28](https://docs.github.com/en/rest/billing/usage?apiVersion=2022-11-28#get-billing-usage-report-for-an-organization).

* Enterprise-level data, use the `/enterprises/{enterprise}/settings/billing/usage` endpoint. For more information, see [Usage?Apiversion=2022 11 28](https://docs.github.com/en/enterprise-cloud@latest/rest/billing/usage?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise) in the GitHub Enterprise Cloud documentation.
