# About GitHub Marketplace for apps

[GitHub Marketplace](https://github.com/marketplace) connects you to developers who want to extend and improve their GitHub workflows. You can list free and paid tools for developers to use in GitHub Marketplace. GitHub Marketplace offers developers two types of tools: GitHub Actions and Apps, and each tool requires different steps for adding it to GitHub Marketplace.

## GitHub Actions

Anyone can publish an action in GitHub Marketplace. GitHub verifies some partner organizations and these are shown as verified creators.  



If you access GitHub at GHE.com, be aware that actions that include hard-coded API calls to GitHub.com may not work as expected.



To learn about publishing GitHub Actions in GitHub Marketplace, see [Publish In GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace).

## Apps

Anyone can share their apps with other users for free on GitHub Marketplace but only apps owned by organizations can sell their app.


>[!NOTE] Apps from GitHub Marketplace are not currently available on GHE.com.



To publish paid plans for your app and display a marketplace badge, you must complete the publisher verification process. For more information, see [Applying For Publisher Verification For Your Organization](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization) or [Requirements For Listing An App](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app).

Once the organization meets the requirements, someone with owner permissions in the organization can publish paid plans for any of their apps. Each app with a paid plan also goes through a financial onboarding process to enable payments.

To publish apps with free plans, you only need to meet the general requirements for listing any app. For more information, see [Requirements For Listing An App](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings).

### New to apps?

If you're interested in creating an app for GitHub Marketplace, but you're new to GitHub Apps or OAuth apps, see [About Creating GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps) or [Building OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps).

### GitHub Apps vs. OAuth apps

GitHub Apps are the officially recommended way to integrate with GitHub because they offer much more granular permissions to access data
, although you can list both OAuth and GitHub Apps in GitHub Marketplace. For more information, see [Differences Between GitHub Apps And OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps) and [Migrating OAUTH Apps To GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/migrating-oauth-apps-to-github-apps).

## Publishing an app to GitHub Marketplace overview

When you have finished creating your app, you can share it with other users by publishing it to GitHub Marketplace. In summary, the process is:

1. Review your app carefully to ensure that it will behave as expected in other repositories and that it follows best practice guidelines. For more information, see [Security Best Practices For Apps On GitHub Marketplace](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/security-best-practices-for-apps-on-github-marketplace) and [Requirements For Listing An App](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app).

1. Add webhook events to the app to track user billing requests. For more information about the GitHub Marketplace API, webhook events, and billing requests, see [Using The GitHub Marketplace API In Your App](https://docs.github.com/en/apps/github-marketplace/using-the-github-marketplace-api-in-your-app).

1. Create a draft GitHub Marketplace listing. For more information, see [Drafting A Listing For Your App](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace/drafting-a-listing-for-your-app).

1. Add a pricing plan. For more information, see [Setting Pricing Plans For Your Listing](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace/setting-pricing-plans-for-your-listing).

1. Read and accept the terms of the [GitHub Marketplace Developer Agreement](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-marketplace-developer-agreement).

1. Submit your listing for publication in GitHub Marketplace. For more information, see [Submitting Your Listing For Publication](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace/submitting-your-listing-for-publication).

## Seeing how your app is performing

You can access metrics and transactions for your listing. For more information, see:

* [Viewing Metrics For Your Listing](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/viewing-metrics-for-your-listing)
* [Viewing Transactions For Your Listing](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/viewing-transactions-for-your-listing)

## Contacting Support

If you have questions about GitHub Marketplace, please contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.
