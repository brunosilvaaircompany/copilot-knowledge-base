# Combined GitHub Enterprise cloud and server use

## About enterprise deployments

GitHub Enterprise offers two deployment options. In addition to GitHub Enterprise Cloud, you can use GitHub Enterprise Server to host development work for your enterprise in your data center or a supported cloud.{% elsif ghes %}In addition to GitHub Enterprise Server, you can use GitHub Enterprise Cloud to host development work for your enterprise on GitHub.com. For more information, see [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans#github-enterprise).


If you use both GitHub Enterprise Cloud and GitHub Enterprise Server, you'll have **an enterprise account for each.** Even if you **only** use GitHub Enterprise Server, we recommend creating an enterprise account on GitHub Enterprise Cloud. This will make it easier to contact GitHub Enterprise Support and share support bundles with them. To create an additional enterprise account, contact [GitHub's Sales team](https://enterprise.github.com/contact).

For most administration options, such as policies, you will manage each enterprise account separately. However, you can use the enterprise account on GitHub Enterprise Cloud to view all license usage across all deployments.

## About licensing for GitHub Enterprise

GitHub uses a unique-user licensing model. With the GitHub Enterprise plan, you're entitled to use both GitHub Enterprise Cloud and GitHub Enterprise Server. Your GitHub Enterprise Cloud allowance includes **one** deployment, on either GitHub.com or GHE.com.

GitHub determines how many licenses you're consuming based on the number of unique users across your deployments. Each user only consumes one license, no matter how many GitHub Enterprise Server instances the user uses, or how many organizations the user is a member of on your GitHub Enterprise Cloud deployment. This model allows each person to use multiple GitHub Enterprise deployments without incurring extra costs.


To use a GitHub Enterprise Server instance, you must upload a license file that GitHub provides. See [Ghes License Files](https://docs.github.com/en/billing/concepts/enterprise-billing/ghes-license-files).

## Syncing licenses

For a person using multiple GitHub Enterprise environments to only consume a single license, you must synchronize license usage between environments. Then, GitHub will deduplicate users based on the email addresses associated with their user accounts. GitHub deduplicates licenses for the GitHub Enterprise plan itself, and if you use GitHub Enterprise Server version 3.12 or later, for GitHub Advanced Security products. See [Sync License Usage](https://docs.github.com/en/billing/how-tos/manage-server-licenses/sync-license-usage).


## Usage-based and volume licensing

There are two types of GitHub Enterprise (GHE) licensing models, with different processes for enabling combined use of GitHub Enterprise Cloud and GitHub Enterprise Server.

* **GHE (Usage-based, also called metered)**: A cloud-first license where users must first be assigned to a GitHub Enterprise Cloud organization.
    * All Cloud users automatically receive a right to use GitHub Enterprise Server.
    * Billing is based on the number of active users each month.
    * Users can generate their own Server license, and the seat count is based on the number of consumed enterprise Cloud licenses at the time of generation. The license is valid for one year.

      You can find your enterprise's consumed Cloud license count on your enterprise's **Billing & Licensing > Licensing** page. Do **not** use the "Total consumed" licenses count on the **People > Members** page: that number will be higher than the Cloud-only count used for license generation.
    * Server-only users will be added to GHE (Metered) billing. These users are de-duplicated with email matching to avoid double billing.

* **GHE (Volume/Subscription, also called GHE Unified)**: A bundled license for both GitHub Enterprise Cloud and GitHub Enterprise Server.
    * One license covers both GitHub Enterprise Cloud and GitHub Enterprise Server, allowing users to work in either or both.
    * Users can access both services via GitHub Connect.
    * This license requires manual setup and is provided by GitHub Sales.



> [!NOTE] If you currently pay for your GitHub Enterprise licenses through a volume, subscription, or prepaid agreement, you will continue to be billed in this way until your agreement expires or you are invited to transition. At renewal, you have the option to switch to the metered billing model.




### Detailed comparison

{% rowheaders %}

| License model                          | Usage-based                        | Volume or subscription                                                                     |
|----------------------------------|-------------------------------------|-----------------------------------------------------------------------------------------------|
| **Cloud vs. Server**             | Cloud-first, with a Server use right for Cloud users | 1 user license covers both Cloud and Server (hybrid, Cloud-only, or Server-only)              |
| **Setup**            | Self-service | Manual setup via GitHub Sales                                    |
| **Server license generation**    | Users generate their own GitHub Enterprise Server license | Enterprise owners download their own GitHub Enterprise Server license |
| **License file scope**        | Covers consumed Cloud licenses at time of generation | Covers all purchased users for both Cloud and Server                                          |
| **License expiration**           | Expires in 12 months | Aligned with volume license term                                                              |
| **License key usage**            | Limits max Server users | Covers all users in the volume subscription                                                   |
| **Required GitHub Enterprise version**        | GitHub Enterprise 3.13+, with GitHub Connect | No specific version required                                                                  |
| **Billing model**                | Invoiced for users not assigned on Cloud via GitHub Connect | Fixed cost based on purchased volume                                                          |

{% endrowheaders %}

## Further reading

* [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users)
* [Pricing](https://github.com/pricing)
* [Billing For Enterprises](https://docs.github.com/en/billing/concepts/enterprise-billing/billing-for-enterprises)
* [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/enterprise-server@latest/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance)
* The [GitHub Enterprise Releases](https://enterprise.github.com/releases/) website
