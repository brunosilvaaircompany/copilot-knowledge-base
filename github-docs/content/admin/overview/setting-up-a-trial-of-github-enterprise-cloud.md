# Setting up a trial of GitHub Enterprise Cloud

After you've decided which type of enterprise is right for you (see [Choose An Enterprise Type](https://docs.github.com/en/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type)), you can set up your trial.

If you choose an enterprise with managed users, you'll also choose whether to create your trial on GitHub.com or GHE.com. Trials on GitHub.com include GitHub Advanced Security features. Trials on GHE.com support regional data residency, but some features are not available. See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).

<a href="https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of GitHub Enterprise Cloud</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## Features included in the trial?

The trial lasts for **30
 days** and includes the following features.

* Access to **most** GitHub Enterprise Cloud features.
* An **enterprise account**, which allows you to manage multiple organizations. See [Types Of GitHub Accounts](https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/types-of-github-accounts).
* Up to **50 licenses** to grant access to users.
* GitHub Secret Protection and GitHub Code Security (GitHub.com trials only)
* Up to 3,000 minutes of standard GitHub-hosted runners.

## Features not included in the trial

* GitHub Codespaces
* GitHub Copilot Enterprise
* GitHub Copilot Business
* GitHub Sponsors
* Paid GitHub Marketplace apps
* GitHub Connect
* Git Large File Storage
* For GitHub Actions, increased minutes, job concurrency, and larger runners
* Access to GitHub Enterprise Server. To test this, contact [GitHub's Sales team](https://github.com/enterprise/contact).

If you invite an existing organization into your trial enterprise, **all of these features will be disabled**. If you remove the organization from the enterprise, the features will be re-enabled.

## Do I need to provide a payment method?

You do not need to provide a payment method to start a trial.

## During the trial

After you set up your trial, you can explore GitHub Enterprise Cloud by following the suggested tasks on the "Getting started" tab of your enterprise account.

### Organizations in your trial

You can create up to **three new organizations** in the trial enterprise, or transfer any number of existing organizations.

When transferring existing organizations, keep in mind these restrictions:

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

### If you cancel your trial

You can cancel your trial anytime in the "Danger zone" section of your enterprise settings.

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members lose access to the enterprise account and any organizations that you created during the trial.

### If your trial expires

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members retain access to the enterprise account and organizations created during the trial in a downgraded state, allowing you to either upgrade to GitHub Enterprise or move assets elsewhere.
* You can delete an expired trial to remove people's access to the enterprise and organizations created during the trial.
