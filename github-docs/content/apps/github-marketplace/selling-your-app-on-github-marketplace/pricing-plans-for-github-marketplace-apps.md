# Pricing plans for GitHub Marketplace apps

> [!NOTE]
> This article applies to publishing apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see [Publish In GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace).


GitHub Marketplace pricing plans can be free, flat rate, or per-unit. Prices are set, displayed, and processed in US dollars. Paid plans are restricted to apps published by verified publishers. For more information about becoming a verified publisher, see [Applying For Publisher Verification For Your Organization](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization).

Customers purchase your app using a payment method attached to their account on GitHub. You don't have to write code to perform billing transactions, but you will have to handle events from the GitHub Marketplace API. For more information, see [Using The GitHub Marketplace API In Your App](https://docs.github.com/en/apps/github-marketplace/using-the-github-marketplace-api-in-your-app).

If the app you're listing on GitHub Marketplace has multiple plan options, you can set up corresponding pricing plans. For example, if your app has two plan options, an open source plan and a pro plan, you can set up a free pricing plan for your open source plan and a flat pricing plan for your pro plan. Each GitHub Marketplace listing must have an annual and a monthly price for every plan that's listed.

For more information on how to create a pricing plan, see [Setting Pricing Plans For Your Listing](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace/setting-pricing-plans-for-your-listing).

> [!NOTE]
> If you're listing an app on GitHub Marketplace, you can't list your app with a free pricing plan if you offer a paid service outside of GitHub Marketplace.


## Types of pricing plans

### Free pricing plans

Free apps are encouraged in GitHub Marketplace and are a great way to offer open source services. If you list a paid version of your app outside of GitHub Marketplace then, after a free listing of your app in the marketplace meets the [requirements for paid apps](/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app#requirements-for-paid-apps), you must offer at least one paid plan for the app in GitHub Marketplace.


Free plans are completely free for users. If you set up a free pricing plan, you cannot charge users that choose the free pricing plan for the use of your app. You can create both free and paid plans for your listing.

All apps need to handle events for new purchases and cancellations. Apps that only have free plans do not need to handle events for free trials, upgrades, and downgrades. For more information, see: [Using The GitHub Marketplace API In Your App](https://docs.github.com/en/apps/github-marketplace/using-the-github-marketplace-api-in-your-app).

If you add a paid plan to an app that you've already listed in GitHub Marketplace as a free service, you'll need to request verification for the app and go through financial onboarding.

### Paid pricing plans

There are two types of paid pricing plan:

* Flat rate pricing plans charge a set fee on a monthly and yearly basis.

* Per-unit pricing plans charge a set fee on either a monthly or yearly basis for each user in an organization.

You may also want to offer free trials. These provide free, 14-day trials of OAuth or GitHub Apps to customers. When you set up a Marketplace pricing plan, you can select the option to provide a free trial for flat-rate or per-unit pricing plans.

## Free trials

Customers can start a free trial for any paid plan on a Marketplace listing that includes free trials. However, customers cannot create more than one free trial per marketplace product.

Free trials have a fixed length of 14 days. Customers are notified 4 days before the end of their trial period (on day 11 of the free trial) that their plan will be upgraded. At the end of a free trial, customers will be auto-enrolled into the plan they are trialing if they do not cancel.

For more information, see: [Handling New Purchases And Free Trials](https://docs.github.com/en/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/handling-new-purchases-and-free-trials).

> [!NOTE]
> GitHub expects you to delete any private customer data within 30 days of a canceled trial, beginning at the receipt of the cancellation event.
