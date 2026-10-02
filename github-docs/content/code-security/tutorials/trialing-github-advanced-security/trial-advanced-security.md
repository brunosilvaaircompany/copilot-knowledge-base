# Setting up a trial of GitHub Advanced Security

## Prerequisites



To start a self-serve trial for an organization on GitHub Team, all of the following must be true:

* You are an owner of the organization.
* The organization does not currently have, and has not previously had, a paid license for GitHub Advanced Security.
* The organization is not already using metered billing for GitHub Advanced Security.
* If the organization has previously had a GitHub Advanced Security trial, it has had no more than one previous trial. That trial ended at least 180 days ago.

Your payment method does not affect whether you can start a trial. However, you can purchase GitHub Advanced Security through the trial checkout flow only if your organization pays by credit card, PayPal, or Azure.



## What the trial includes

The trial gives you access to GitHub Code Security and GitHub Secret Protection for private repositories. You can evaluate capabilities such as:

* Code scanning, Copilot Autofix, dependency review, and security campaigns
* Secret scanning, push protection, custom patterns, validity checks, and delegated bypass

Use the trial on a sample of repositories so you can assess the results, developer experience, and controls before you purchase.

## Start your trial



An organization owner can start a trial from the organization's "Licensing" page.

1. In the upper-right corner of GitHub, click your profile picture, then click **Your organizations**.
1. Next to the organization, click **Settings**.
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**, then click **Licensing**.
1. To the right of "GitHub Advanced Security", click **Try free for 30 days**, then follow the prompts to start your trial.



## Evaluate features during your trial

After you start the trial, enable the features you want to evaluate on a sample of repositories. See [Enable Security Features Trial](https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/enable-security-features-trial).

As you evaluate the features, compare the results with the goals and success criteria you defined when planning the trial.

## Billing during your trial

During the trial, you do not pay license fees for GitHub Secret Protection or GitHub Code Security.



Usage-based billing applies for features that consume GitHub Actions minutes or AI credits. For private repositories, GitHub Actions minutes used by GitHub Advanced Security workflows count toward your organization's included usage. This includes code scanning workflows. Usage beyond the included amount is billed at the standard rate. For more information, see [Product Usage Included](https://docs.github.com/en/billing/reference/product-usage-included).

{% elsif ghec %}

Usage-based billing applies for features that consume GitHub Actions minutes or AI credits.

For private repositories, minutes used by GitHub Advanced Security workflows on standard GitHub-hosted runners count toward the 50,000 minutes included each month with your GitHub Enterprise Cloud plan. This includes code scanning workflows. Workflows in public repositories or on self-hosted runners do not consume included minutes. larger runners are billed separately. Usage beyond the included amount is billed at the standard rate. For more information, see [Product Usage Included](https://docs.github.com/en/billing/reference/product-usage-included).



## Managing and finishing your trial

Your trial lasts 30 days. You can review the expiration date and current usage on the "Licensing" page for your organization or enterprise.



To purchase during the trial:

1. Access the "Licensing" page for the organization.
1. In the GitHub Advanced Security trial banner, click **Buy Advanced Security**.
1. Review the estimated monthly usage, billing information, and payment method.
1. Click **Purchase Advanced Security**.

If you do not purchase by the end of the trial, it expires automatically, and GitHub Secret Protection and GitHub Code Security features are disabled for private repositories.
