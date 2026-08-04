# Setting up a trial of GitHub Enterprise Cloud

GitHub Enterprise Cloud is designed for large businesses or teams who collaborate on GitHub.
 See [About GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud).

To set up a trial, you must be signed in to a personal account. If you don't have a personal account, see [Creating An Account On GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github).

<a href="https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of GitHub Enterprise Cloud</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## About enterprise types

While setting up your trial of GitHub Enterprise Cloud, you'll choose an enterprise type.

* Enterprise with personal accounts
* Enterprise with managed users

To help you decide which choice is best for your enterprise, see [Choosing An Enterprise Type For GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud) in the GitHub Enterprise Cloud documentation.


### Enterprises with managed users

If you choose an enterprise with managed users, you will also choose whether to create an enterprise on GitHub.com or in a specific data residency region on GHE.com.

* Trials on **GitHub.com** include free access to GitHub Advanced Security features. Your enterprise will be hosted in the US.
* Trials on **GHE.com** allow you to meet specific regulatory requirements and choose a unique subdomain for your enterprise. However, there are some features that are not included in the trial. See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).


## What is included in the trial?

The trial lasts for **30
 days** and includes the following features.

* Access to **most** GitHub Enterprise Cloud features.
* GitHub Secret Protection and GitHub Code Security (GitHub.com trials only)
* Access to the **new billing platform**. See [Introduction To Billing](https://docs.github.com/en/billing/get-started/introduction-to-billing).
* An **enterprise account**, which allows you to manage multiple organizations. See [Types Of GitHub Accounts](https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/types-of-github-accounts).
* Up to **50 licenses** to grant access to users.
* Up to 3,000 minutes of standard GitHub-hosted runners.

Your trial **won't** include access to GitHub Enterprise Server. To test this, contact [GitHub's Sales team](https://github.com/enterprise/contact).

## Features not included in the trial

* GitHub Codespaces
* GitHub Copilot Enterprise
* GitHub Copilot Business
* GitHub Sponsors
* Paid GitHub Marketplace apps
* GitHub Connect
* Git Large File Storage
* For GitHub Actions, increased minutes, job concurrency, and larger runners

If you invite an existing organization into your trial enterprise, **all of these features will be disabled**. If you remove the organization from the enterprise, the features will be re-enabled.

## Do I need to provide a payment method?

You do not need to provide a payment method to start a trial.

## During the trial

After you set up your trial, you can explore GitHub Enterprise Cloud by following the suggested tasks on the "Getting started" tab of your enterprise account.

You can create up to **three new organizations** in the trial enterprise, or transfer any number of existing organizations.

* You cannot transfer organizations if you selected an enterprise with managed users.
* You cannot transfer organizations that have free or paid GitHub Marketplace apps. Free apps are supported for new organizations in the trial.
* You cannot transfer organizations that are already owned by another enterprise.
* Billing for transferred organizations is paused during the trial and any coupons are removed. To reapply a coupon, contact [GitHub Support](https://support.github.com).
* Organizations created during the trial cannot be removed from the enterprise account until you purchase GitHub Enterprise.

For help setting up the included features, once you've started your trial, see [Getting Started With The GitHub Enterprise Cloud Trial](https://docs.github.com/en/enterprise-cloud@latest/get-started/onboarding/getting-started-with-the-github-enterprise-cloud-trial).

## What happens when the trial ends?

You can end your trial at any time by purchasing GitHub Enterprise or canceling the trial. Otherwise, after 30
 days, your trial will expire.

GitHub Enterprise trial accounts are automatically deleted 90 days after the trial period ends if the account has not been converted to a paid account.

If you **purchase GitHub Enterprise**:

* You can use usage-based billing for GitHub Enterprise Cloud and GitHub Advanced Security products, which means you pay monthly for the number of licenses you use. You will not need to buy a predefined number of licenses in advance. See [Usage Based Licenses](https://docs.github.com/en/billing/concepts/enterprise-billing/usage-based-licenses).

  If you did not set up a free trial and you want to use usage-based billing to pay for GitHub Advanced Security products after the GitHub Enterprise Cloud trial ends, contact [GitHub's Sales team](https://enterprise.github.com/contact).

* You can generate a GitHub Enterprise Server license file for the same quantity of users who are consuming a GitHub Enterprise Cloud license.

If you **cancel your trial**:

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members lose access to the enterprise account and any organizations that you created during the trial.

If your **trial expires**:

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members retain access to the enterprise account and organizations created during the trial in a downgraded state, allowing you to either upgrade to GitHub Enterprise or move assets elsewhere.
* You can delete an expired trial to remove people's access to the enterprise and organizations created during the trial.

For more information about the effects of downgrading an organization, see [Downgrade Plan](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/manage-plan-and-licenses/downgrade-plan#downgrading-your-organizations-plan).

## Ending your trial

You can end a trial by purchasing GitHub Enterprise or by canceling the trial. If a trial has expired, you can delete the trial.

### Purchasing GitHub Enterprise

You can purchase GitHub Enterprise at any time during the trial.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. To end the trial period and purchase GitHub Enterprise, click **Activate Enterprise** in the blue banner at the top of the page.

### Canceling or deleting a trial

You can cancel a trial at any time. Once the trial has expired, you can delete the trial.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **General**.
1. At the bottom of the page, in the "Danger zone" section, click **Cancel trial** or **Delete trial**.

## Further reading

* [Organize Work](https://docs.github.com/en/admin/concepts/enterprise-best-practices/organize-work)
* [GitHub public roadmap](https://github.com/github/roadmap#github-public-roadmap)
