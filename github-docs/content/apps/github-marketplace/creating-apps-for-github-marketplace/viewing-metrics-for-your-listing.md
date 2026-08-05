# Viewing metrics for your listing

> [!NOTE]
> This article applies to publishing apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see [Publish In GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace).


You can view metrics for the past day (24 hours), week, month, or for the entire duration of time that your GitHub App has been listed.

> [!NOTE]
> Because it takes time to aggregate data, you'll notice a slight delay in the dates shown. When you select a time period, you can see exact dates for the metrics at the top of the page.

## Performance metrics

The Insights page displays these performance metrics, for the selected time period:

* **Subscription value:** Total possible revenue (in US dollars) for subscriptions. This value represents the possible revenue if no plans or free trials are cancelled and all credit transactions are successful. The subscription value includes the full value for plans that begin with a free trial in the selected time period, even when there are no financial transactions in that time period. The subscription value also includes the full value of upgraded plans in the selected time period but does not include the prorated amount. To see and download individual transactions, see [Viewing Transactions For Your Listing](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/viewing-transactions-for-your-listing).
* **Visitors:** Number of people that have viewed a page in your GitHub Apps listing. This number includes both logged in and logged out visitors.
* **Pageviews:** Number of views the pages in your GitHub App's listing received. A single visitor can generate more than one page view.

> [!NOTE]
> Your estimated subscription value could be much higher than the transactions processed for this period.

### Conversion performance

* **Unique visitors to landing page:** Number of people who viewed your GitHub App's landing page.
* **Unique visitors to checkout page:** Number of people who viewed one of your GitHub App's checkout pages.
* **Checkout page to new subscriptions:** Total number of paid subscriptions, free trials, and free subscriptions. See the "Breakdown of total subscriptions" for the specific number of each type of subscription.

![Screenshot of the GitHub Marketplace Insights for a GitHub App.](/assets/images/marketplace/marketplace-insights.png)

To access GitHub Marketplace Insights:

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**.


1. In the left sidebar, click either **OAuth Apps** or **GitHub Apps** depending on the GitHub Marketplace listing you'd like to manage.

   > [!NOTE]
   > You can also manage your listing by navigating to https://github.com/marketplace/manage.

   ![Screenshot of the sidebar on the "Developer Settings" page of GitHub. Options labeled "GitHub Apps" and "OAuth apps" are outlined in dark orange.](/assets/images/settings/apps-choose-app.png)



1. To select the GitHub App that you'd like to view Insights for, click **Edit**.
1. On the app settings landing page, scroll down to the Marketplace section and click **List in Marketplace**. If you already have a Marketplace draft listing, click **Edit Marketplace listing**. The Marketplace section is only visible if you allowed your app to be installed by any user or organization when registering the app. For more information, see the list of [Marketplace requirements](/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app).

1. Click the **Insights** tab.
1. Optionally, select a different time period by clicking the Period dropdown in the upper-right corner of the Insights page.
