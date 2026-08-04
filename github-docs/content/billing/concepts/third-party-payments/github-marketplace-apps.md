# GitHub Marketplace app subscriptions

GitHub Marketplace includes apps with free and paid pricing plans. After you purchase and install an app, you can upgrade, downgrade, or cancel **at any time**. This article explains the billing model, that is, what happens when you start, trial, change, or cancel a paid app subscription.

> [!NOTE]
> This article applies to installing and purchasing apps from GitHub Marketplace only. For more information on apps purchased from integrators, see [About Integrations](https://docs.github.com/en/integrations/concepts/about-integrations).


## Core billing model

All paid GitHub Marketplace app subscriptions for a personal account or organization share:
* The existing payment method on file.
* The same monthly or yearly billing date.
* Consolidated receipts listing all paid GitHub products and app subscriptions.

**If no payment method exists when you first choose a paid plan**:

* You must define a payment method for the account.
* The billing cycle for your account starts immediately and that day is the billing date for the account.
* The full plan amount is charged.
* The receipt is sent to the primary or billing email address on file for your personal account or organization.

**If a payment method already exists**:

* The payment method on file is immediately charged a prorated amount based on the time remaining until your next billing date.
* The monthly or yearly billing date for your app subscription is the same as the account or organization's regular billing date.
* On your next billing date, your receipt lists charges for your paid GitHub plan and your app subscription.

## Free trials

**When you select a paid plan that includes a free trial:**
* You must have an existing payment method or add a new payment method for your personal account or the organization in which you want to install the app.
* If this is your only paid subscription, the first full charge occurs after the 14‑day trial ends.
* If you already have other paid subscriptions, the end of the 14‑day trial triggers an immediate prorated charge for the remainder of the current cycle, then the plan renews on the shared billing date.
* On your next billing date, your receipt will list charges for your paid GitHub plan and your app subscription.

You must manage billing settings and paid features for each of your accounts separately.

You can switch between settings for your personal account, organization accounts, and enterprise accounts using the context switcher on each settings page. See [Accessing the billing pages](/enterprise-cloud@latest/billing/get-started/introduction-to-billing#accessing-the-billing-pages) in the GitHub Enterprise Cloud docs.


> [!NOTE]
> When you transfer an organization with paid GitHub Marketplace apps into an enterprise account, you may receive a second receipt but you will not be charged twice.

## Unit plan limits

For plans that charge per unit (for example, per user), exceeding the purchased units can lead the developer to restrict or disable app access until you move to a plan that covers the higher usage. For more information, see [Upgrade Marketplace App](https://docs.github.com/en/billing/how-tos/pay-third-parties/upgrade-marketplace-app).

## Plan changes and cancellation

* **Upgrading or adding capacity** takes effect immediately; a prorated amount may be charged for the rest of the cycle (if applicable).
* **Downgrading a paid plan or canceling a paid app** takes effect at the end of the current billing cycle; access continues until then. Your subscription will be moved to your new plan on your next billing date.
  To learn how to downgrade a paid plan or cancel a paid app, see [Downgrade Marketplace App](https://docs.github.com/en/billing/how-tos/pay-third-parties/downgrade-marketplace-app) and [Cancel Marketplace App](https://docs.github.com/en/billing/how-tos/pay-third-parties/cancel-marketplace-app).
* **Cancelling a free plan** ends the subscription immediately with loss of access.
* **Canceling a free trial** on a paid plan ends the trial immediately and access stops.

Canceling an app or downgrading an app to free does not affect your [other paid subscriptions](/billing/get-started/how-billing-works) on GitHub. If you want to cease all of your paid subscriptions on GitHub, you must downgrade each paid subscription separately.


## Privacy

Publishers get only what they need to provision service, such as purchaser context (user or organization), plan identifier, effective dates, seat or unit counts, required usage metrics.

Publishers don't see your full payment details, other product invoices, or unrelated account data.

GitHub processes payments and issues receipts. Publishers cannot directly charge your payment method outside the standard plan billing flow.

## Further reading

* [Using GitHub Apps](https://docs.github.com/en/apps/using-github-apps)
* [GitHub Marketplace Support](https://docs.github.com/en/support/learning-about-github-support/github-marketplace-support)
