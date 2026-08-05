# Making changes to your GitHub Copilot license

Copilot follows the same billing rules as other license-based products on GitHub.
For the general concepts, see:

* [Impact Of Plan Changes](https://docs.github.com/en/billing/concepts/impact-of-plan-changes) – explains how upgrades, downgrades, and seat changes are billed.
* [Usage Based Licenses](https://docs.github.com/en/billing/concepts/enterprise-billing/usage-based-licenses) – explains how usage-based billing works compared to volume licensing.

This article focuses on how those rules apply specifically to Copilot, including:

* **What** happens to billing and access when you add, remove, or change seats
* **When** billing changes take effect
* **How** partial billing cycles are handled
* **Copilot-only scenarios** such as revoking seats, disabling Copilot at the organization or enterprise level, or removing organizations from an enterprise

## Personal accounts

What you need to know about the following actions:

* **Upgrading:** If you upgrade your plan (for example, from Copilot Pro to Copilot Pro+), the change is **immediate**. You are charged a prorated amount for the new plan.
* **Downgrading/canceling:** Access remains until the end of the current billing cycle. **No refund for unused time**.

### Included monthly allowance reset

Paying for, renewing, upgrading, downgrading, converting from a trial, or resuming a plan after a lapse does not grant a fresh AI credits allowance immediately. Your included monthly allowance resets at 00:00:00 UTC on the first day of each calendar month, regardless of your subscription billing date.

For example, if you exhaust your AI credits on May 28 and renew or upgrade your plan on May 30, your allowance does not reset until June 1.

Any additional usage beyond the included allowance is charged separately and is unaffected by this monthly reset. See [Usage Based Billing For Individuals](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals) and [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets#managing-budgets-for-your-personal-account).

## Organizations

What you need to know about the following actions:

### Adding seats

* **Billing:** Additional Copilot seats are billed for the remainder of the current billing cycle. Charges are prorated based on the date seats are added.
* **Access:** Users assigned to new seats get access **immediately** after assignment.

### Removing seats

* **Billing:**
  * Billing for that user stops at the end of the cycle.
  * Reduced seat count takes effect at the start of the **next billing cycle**.
  * **No refunds are issued for unused time in the current cycle.**
* **Access:**
  * If a seat is unassigned during a billing cycle, the affected user can still access Copilot until the end of the cycle.
  * If a seat is revoked, users lose access **immediately.**

Additionally:

* If **Copilot is disabled at the organization level or licensed users are removed from the organization**: Affected users lose access to Copilot immediately. Billing for affected users stops at the end of the cycle. If a user is restored to the organization or Copilot is reenabled during the billing cycle, the users regain access to Copilot **immediately**.

## Enterprises

What you need to know about the following actions:

### Adding seats

* **Billing:** Additional seats are billed on a prorated basis for the remainder of the current billing cycle.
* **Access:** Assigned users gain **immediate access** to Copilot.

### Removing seats

* **Billing:**
  * Billing for that user stops at the end of the cycle.
  * Reduced seat count takes effect at the start of the **next billing cycle.**
  * **No refunds are issued for unused time in the current cycle.**
* **Access:**
  * If a seat is unassigned during a billing cycle, the affected user can still access Copilot until the end of the cycle.
  * If a seat is revoked, users lose access **immediately.**

Additionally:

* **If an organization with Copilot seats is removed from an enterprise**: Billing for those seats will stop at the end of the billing cycle. The users who had seats assigned by the removed organization will lose access to Copilot unless they receive a seat through another organization.

* **If Copilot is disabled at the enterprise level**: Any user with a Copilot license will lose access to Copilot immediately. Billing for that user stops at the end of the cycle. If Copilot is reenabled, users regain access to Copilot immediately.

## In summary

* **Proration:** Applies when adding seats/licenses or upgrading plans. You pay only for the portion of the billing cycle remaining.
* **Access:** Assignments and upgrades are effective immediately for affected users. Downgrades take effect at the end of the billing cycle.
* **Removing or canceling:** No refunds are issued for unused time; access continues until the end of the cycle paid for, unless a seat/license is revoked.

| Scenario                        | Plan                | When is billing affected? | Is proration applied? | When does access change? | Refund for unused time? |
|----------------------------------|---------------------|--------------------------|----------------------|--------------------------|-------------------------|
| Add seat/license                 | Copilot Business, Copilot Enterprise| Immediately             | Yes                  | Immediately              | N/A                     |
| Remove seat/license              | Copilot Business, Copilot Enterprise| End of cycle             | N/A                  | End of cycle (immediately if revoked) | No                      |
| Cancel subscription              | All plans           | End of cycle            | N/A                  | End of cycle            | No                      |
| Upgrade plan    | All plans           | Immediate                | Yes                  | Immediately              | N/A (proration instead) |
| Downgrade plan  | All plans           | End of cycle                | No                  | End of cycle              | No |
