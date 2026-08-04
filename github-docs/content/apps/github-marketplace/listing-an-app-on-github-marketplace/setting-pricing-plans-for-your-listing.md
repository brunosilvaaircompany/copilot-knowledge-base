# Setting pricing plans for your listing

> [!NOTE]
> This article applies to publishing apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see [Publish In GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace).


## About setting pricing plans

GitHub Marketplace offers several different types of pricing plans. For detailed information, see [Pricing Plans For GitHub Marketplace Apps](https://docs.github.com/en/apps/github-marketplace/selling-your-app-on-github-marketplace/pricing-plans-for-github-marketplace-apps).

To offer a paid plan for your app, your app must be owned by an organization that has completed the publisher verification process and met certain criteria. For more information, see [Applying For Publisher Verification For Your Organization](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization) and [Requirements For Listing An App](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app).

If your app is already published with a paid plan and you're a verified publisher, then you can publish a new paid plan from the "Edit a pricing plan" page in your Marketplace app listing settings.

If your app is already published with a paid plan and but you are not a verified publisher, then you can cannot publish a new paid plan until you are a verified publisher. For more information about becoming a verified publisher, see [Applying For Publisher Verification For Your Organization](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization).

## About saving pricing plans

You can save pricing plans in a draft or published state. If you haven't submitted your GitHub Marketplace listing for approval, a published plan will function in the same way as a draft plan until your listing is approved and shown on GitHub Marketplace. Draft plans allow you to create and save new pricing plans without making them available on your GitHub Marketplace listing page. Once you publish a pricing plan on a published listing, it's available for customers to purchase immediately. You can publish up to 10 pricing plans.

For guidelines on billing customers, see [Billing Customers](https://docs.github.com/en/apps/github-marketplace/selling-your-app-on-github-marketplace/billing-customers).

## Creating pricing plans

To create a pricing plan for your GitHub Marketplace listing, click **Plans and pricing** in the left sidebar of your [GitHub Marketplace listing page](https://github.com/marketplace/manage). For more information, see [Drafting A Listing For Your App](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace/drafting-a-listing-for-your-app).

When you click **New draft plan**, you'll see a form that allows you to customize your pricing plan. You'll need to configure the following fields to create a pricing plan:

* **Plan name** - Your pricing plan's name will appear on your GitHub Marketplace app's landing page. You can customize the name of your pricing plan to align with the plan's resources, the size of the company that will use the plan, or anything you'd like.

* **Pricing models** - There are three types of pricing plan: free, flat-rate, and per-unit. All plans require you to process new purchase and cancellation events from the marketplace API. In addition, for paid plans:

  * You must set a price for both monthly and yearly subscriptions in US dollars.
  * Your app must process plan change events.
  * You must request verification to publish a listing with a paid plan.
  * You can offer your app for free for 14 days as a free trial. Free trials automatically convert to a paid subscription after 14 days, unless the customer cancels before the free trial expires. Select "Enable 14 day free trial for this plan" to offer a free trial.


  For detailed information, see [Pricing Plans For GitHub Marketplace Apps](https://docs.github.com/en/apps/github-marketplace/selling-your-app-on-github-marketplace/pricing-plans-for-github-marketplace-apps) and [Using The GitHub Marketplace API In Your App](https://docs.github.com/en/apps/github-marketplace/using-the-github-marketplace-api-in-your-app).

* **Available for** - GitHub Marketplace pricing plans can apply to **Personal accounts and organizations**, **Personal accounts only**, or **Organizations only**. For example, if your pricing plan is per-unit and provides multiple seats, you would select **Organizations only** because there is no way to assign seats to people in an organization from a personal account.

* **Short description** - Write a brief summary of the details of the pricing plan. The description might include the type of customer the plan is intended for or the resources the plan includes.

* **Bullets** - You can write up to four bullets that include more details about your pricing plan. The bullets might include the use cases of your app or list more detailed information about the resources or features included in the plan.

> [!NOTE]
> If you're listing an app on GitHub Marketplace, you can't list your app with a free pricing plan if you offer a paid service outside of GitHub Marketplace.


## Changing a GitHub Marketplace listing's pricing plan

If a pricing plan for your GitHub Marketplace listing is no longer needed, or if you need to adjust pricing details, you can remove it by clicking **Delete** at the bottom of the edit page of the plan.

Once you publish a pricing plan for an app that is already listed in GitHub Marketplace, you can't make changes to the plan. Instead, you'll need to remove the pricing plan and create a new plan. Customers who already purchased the removed pricing plan will continue to use it until they opt out and move onto a new pricing plan. For more on pricing plans, see [Pricing Plans For GitHub Marketplace Apps](https://docs.github.com/en/apps/github-marketplace/selling-your-app-on-github-marketplace/pricing-plans-for-github-marketplace-apps).

Once you remove a pricing plan, users won't be able to purchase your app using that plan. Existing users on the removed pricing plan will continue to stay on the plan until they cancel their plan subscription.

> [!NOTE]
> GitHub can't remove users from a removed pricing plan. You can run a campaign to encourage users to upgrade or downgrade from the removed pricing plan onto a new pricing plan.

You can disable GitHub Marketplace free trials without retiring the pricing plan, but this prevents you from initiating future free trials for that plan. If you choose to disable free trials for a pricing plan, users already signed up can complete their free trial.

After retiring a pricing plan, you can create a new pricing plan with the same name as the removed pricing plan. For instance, if you have a "Pro" pricing plan but need to change the flat rate price, you can remove the "Pro" pricing plan and create a new "Pro" pricing plan with an updated price. Users will be able to purchase the new pricing plan immediately.

If you are not a verified publisher, then you cannot change a pricing plan for your app. For more information about becoming a verified publisher, see [Applying For Publisher Verification For Your Organization](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization).
