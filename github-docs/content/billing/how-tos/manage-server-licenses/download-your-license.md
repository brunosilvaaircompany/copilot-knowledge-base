# Downloading your license for GitHub Enterprise

> [!NOTE] If you currently pay for your GitHub Enterprise licenses through a volume, subscription, or prepaid agreement, you will continue to be billed in this way until your agreement expires or you are invited to transition. At renewal, you have the option to switch to the metered billing model.




## About license files for GitHub Enterprise

After you purchase or upgrade a license for GitHub Enterprise from [GitHub's Sales team](https://github.com/enterprise/contact), you must download your new license file. For more information about licenses for GitHub Enterprise, see [Ghes License Files](https://docs.github.com/en/billing/concepts/enterprise-billing/ghes-license-files).

If you'd like to renew or add user licenses to GitHub Enterprise, or if you have questions about your license, contact [GitHub's Sales team](https://github.com/enterprise/contact). Your new license file will be available for download immediately after you complete your order.


## Downloading your license file

There are two possible ways to download a license file for GitHub Enterprise Server.

1. If you are using a trial of GitHub Enterprise Server, if you do not have an enterprise account on GitHub Enterprise Cloud, if you have GHE.com with volume license billing, or if you are not sure, you may be able to download your license file from the [GitHub Enterprise website](https://enterprise.github.com/download).

1. If you are an existing GitHub Enterprise customer with an enterprise account on GitHub Enterprise Cloud, or if you have GHE.com with metered license billing, you can download your license file from GitHub.com or GHE.com using the following instructions.

If you have any questions about downloading your license, contact [GitHub's Sales team](https://github.com/enterprise/contact). For more information about enterprise accounts, see [Enterprise Accounts](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/enterprise-accounts) in the GitHub Enterprise Cloud documentation.{% elsif ghec %}.

1. Navigate to GitHub Enterprise Cloud.
1. In the top-right corner of GitHub, click your profile picture.
1. Depending on your environment, click **Enterprise**, or click **Enterprises** then click the enterprise you want to view.

1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. Click **Licensing** to show detailed information on license use.

1. Optionally, if a yellow banner appears, click **Generate new license** to generate a new license key. A yellow banner appears in either of the following situations:
   * Your license usage for GitHub Enterprise Cloud has changed. For metered billing enterprises, this means the consumed Cloud license count has increased, and you can generate a new license with updated seat capacity.
   * Your current server license key expires within 30 days.

   > [!NOTE]
   > If your enterprise uses metered (usage-based) billing, the seat count in your generated Server license is based on the number of **consumed Cloud licenses** at the time of generation. The license is valid for one year. For more information about how Cloud and Server license usage work together, see [Combined Enterprise Use](https://docs.github.com/en/billing/concepts/enterprise-billing/combined-enterprise-use).

1. Scroll down to "Enterprise Server licenses". Next to the license you want to download, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Download**.

After you download your license file, you can upload the file to GitHub Enterprise Server to validate your application. For more information, see [Upload New License](https://docs.github.com/en/enterprise-server@latest/billing/how-tos/manage-server-licenses/upload-new-license) in the GitHub Enterprise Server documentation.{% elsif ghes %}[Upload New License](https://docs.github.com/en/enterprise-server@latest/billing/how-tos/manage-server-licenses/upload-new-license).
