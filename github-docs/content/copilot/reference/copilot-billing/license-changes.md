# Making changes to your GitHub Copilot license

License changes can affect access immediately or at the end of a billing cycle, depending on the plan and the action taken. Use the sections below for your account type and plan.

## Personal accounts

What you need to know about the following actions:

* **Upgrading:** If you upgrade your plan (for example, from Copilot Pro to Copilot Pro+), the change is **immediate**. You are charged the full price of the new plan, minus the amount you already paid for your current plan.
* **Downgrading/canceling:** Access remains until the end of the current billing cycle. **No refund for unused time**.

### Included monthly allowance reset

Paying for, renewing, upgrading, downgrading, converting from a trial, or resuming a plan after a lapse does not grant a fresh AI credits allowance immediately. Your included monthly allowance resets at 00:00:00 UTC on the first day of each calendar month, regardless of your subscription billing date.

For example, if you exhaust your AI credits on May 28 and renew or upgrade your plan on May 30, your allowance does not reset until June 1.

Any additional usage beyond the included allowance is charged separately and is unaffected by this monthly reset. See [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing) and [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets#managing-budgets-for-your-personal-account).

## Organizations

These rules apply to Copilot Business and Copilot Enterprise seats assigned through organizations.

### Adding seats

* **Billing:** Additional Copilot seats are billed for the remainder of the current billing cycle. Charges are prorated based on the date seats are added. If you pay by credit card or PayPal, you will need to pay the prorated amount for new seats upfront.
* **Ability to use Copilot:** Users assigned to new seats get access **immediately** after assignment.

### Removing seats

* **Billing:**
  * Billing for that user stops at the end of the cycle.
  * Reduced seat count takes effect at the start of the **next billing cycle**.
  * **No refunds are issued for unused time in the current cycle.**
* **Ability to use Copilot:**
  * If a seat is unassigned during a billing cycle, the affected user can still access Copilot until the end of the cycle.
  * If a seat is revoked, users lose access **immediately.**

Additionally:

* If **Copilot is disabled at the organization level or licensed users are removed from the organization**: Affected users lose access to Copilot immediately. Billing for affected users stops at the end of the cycle. If a user is restored to the organization or Copilot is reenabled during the billing cycle, the users regain access to Copilot **immediately**.

## Enterprises

Enterprise owners can change seat assignments. Billing and access effects depend on how the enterprise pays for Copilot.

<a name="copilot-access"></a>

### Copilot access billing model

This billing model is available through GitHub Enterprise Cloud or as Copilot Standalone.

#### Removing seats

The member-level **Remove access** action removes the member's Copilot seat, including assignments inherited from default, enterprise team, or organization settings. You do not need to remove the member from those teams or organizations.

* **Billing:** For a user with a GitHub Enterprise Cloud license, there is no change to the $0 Copilot seat charge.
* **Ability to use Copilot:** The member can still use Copilot until the end of the billing cycle.

#### Losing a GitHub Enterprise Cloud license

Removing a member from all organizations in the enterprise causes them to lose their underlying GitHub Enterprise Cloud license.

* **Billing:** The GitHub Enterprise Cloud license charge continues for the current month. The user is not automatically converted to Copilot Standalone.
* **Ability to use Copilot:** The user's seat is removed, and their ability to use Copilot ends immediately.

> [!WARNING]
> If a user loses their GitHub Enterprise Cloud license, their Copilot seat is removed and their included access is revoked immediately. Restoring access through Copilot Standalone requires an administrator's explicit agreement to the $10 USD per-user monthly charge. Conversion is not automatic.


#### Receiving a GitHub Enterprise Cloud license

When a Copilot Standalone user receives a GitHub Enterprise Cloud license:

* **Billing:** The Copilot seat charge changes from $10 USD per month to $0 immediately. GitHub Enterprise Cloud license billing applies.
* **Ability to use Copilot:** The user's seat is retained and reclassified as included access. They can continue using Copilot without interruption.

#### Leaving the enterprise

* **Billing:** Charges continue through the end of the month.
* **Ability to use Copilot:** The user's seat is removed, and their ability to use Copilot ends immediately.

### Copilot Business and Copilot Enterprise

These plans charge per assigned seat and include a monthly usage allowance.

#### Adding seats

* **Billing:** Additional seats are billed on a prorated basis for the remainder of the current billing cycle. Included AI credits may also be prorated. If you pay by credit card or PayPal, you will need to pay the prorated amount for new seats upfront.
* **Ability to use Copilot:** Assigned users gain **immediate access** to Copilot.

#### Removing seats

* **Billing:**
  * Billing for that user stops at the end of the cycle.
  * Reduced seat count takes effect at the start of the **next billing cycle.**
  * **No refunds are issued for unused time in the current cycle.**
* **Ability to use Copilot:**
  * If a seat is unassigned during a billing cycle, the affected user can still access Copilot until the end of the cycle.
  * If a seat is revoked, users lose access **immediately.**

Additionally:

* **If an organization with Copilot seats is removed from an enterprise**: Billing for those seats will stop at the end of the billing cycle. The users who had seats assigned by the removed organization will lose access to Copilot unless they receive a seat through another organization.

* **If Copilot is disabled at the enterprise level**: Any user with a Copilot license will lose access to Copilot immediately. Billing for that user stops at the end of the cycle. If Copilot is reenabled, users regain access to Copilot immediately.

## Summary for personal plans, Copilot Business, and Copilot Enterprise

For personal, Copilot Business, and Copilot Enterprise plans:

* **Proration:** Applies when adding seats/licenses. You pay only for the portion of the billing cycle remaining. Included AI credits may also be prorated.
* **Upgrading a personal plan:** You are charged the full price of the new plan, minus the amount you already paid for your current plan.
* **Ability to use Copilot:** Assignments and upgrades are effective immediately for affected users. Downgrades take effect at the end of the billing cycle.
* **Removing or canceling:** No refunds are issued for unused time; access continues until the end of the cycle paid for, unless a seat/license is revoked.

| Scenario                        | Plan                | When is billing affected? | Is proration applied? | When does access change? | Refund for unused time? |
|----------------------------------|---------------------|--------------------------|----------------------|--------------------------|-------------------------|
| Add seat/license                 | Copilot Business, Copilot Enterprise| Immediately (upfront payment for credit card or PayPal)             | Yes                  | Immediately  (AI credits may be prorated)            | N/A                     |
| Remove seat/license              | Copilot Business, Copilot Enterprise| End of cycle             | N/A                  | End of cycle (immediately if revoked) | No                      |
| Cancel subscription              | Personal, Copilot Business, and Copilot Enterprise plans           | End of cycle            | N/A                  | End of cycle            | No                      |
| Upgrade plan    | Copilot Pro, Copilot Pro+, and Copilot Max           | Immediate                | No                  | Immediately              | N/A |
| Downgrade plan  | Personal, Copilot Business, and Copilot Enterprise plans           | End of cycle                | No                  | End of cycle              | No |
