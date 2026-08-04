# Disabling GitHub Advanced Security for your enterprise

If you want to immediately disable GitHub Advanced Security in all repositories, prevent organizations from re-enabling it and avoid unexpected billing charges, you can use the **Disable Advanced Security** option available in the enterprise licensing page. This is different from canceling your Advanced Security subscription:

* **Canceling your subscription** stops future billing but does not disable GitHub Advanced Security in repositories or prevent re-enablement.
* **Disabling Advanced Security** immediately disables GitHub Advanced Security in all private and internal repositories and sets a policy to prevent future paid adoption.

## Disabling GitHub Advanced Security across your enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.

1. From the list of "Billing & licensing" pages, click **Licensing**.

1. To the right of "Advanced Security," click **Manage** and select the **Disable Advanced Security** option.
1. In the modal dialog that is displayed, click **Disable Advanced Security** to confirm.

   To re-enable GitHub Advanced Security, you'll need to update the policies for this feature in the **Policies** tab of your enterprise.

## What happens to my bill?

Once you have disabled GitHub Advanced Security:

* If you use **volume billing**, you agreed to a number of licenses and billing period upfront. You'll continue to pay for the rest of this period.
* If you use **metered billing**, you pay based on usage, and your billing will stop from next month. However, you _will_ continue paying for any licenses you've already consumed this month until the end of the month.

  For example, if you had 10 licenses in use and disabled GitHub Advanced Security on the second day of the month, you will still be billed for your 10 licenses for the full month instead of just for the two days.
