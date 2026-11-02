# What's changing with GitHub Enterprise and Copilot billing

"Copilot access" is a new way for eligible enterprises to provide Copilot to their developers. In this model, there is no Copilot seat charge for users with a GitHub Enterprise Cloud license. For users without that license, Copilot Standalone costs $10 USD per user per month. In both cases, metered usage is billed separately.

If you already use Copilot Business or Copilot Enterprise, you can retain your current plan. Transitioning is voluntary.

## Compare billing models

With Copilot Business and Copilot Enterprise, the monthly seat charge includes a usage allowance. With Copilot access, there is no included usage allowance. The seat charge depends on whether each user has a GitHub Enterprise Cloud license:

| Billing model | Per-user seat charge | Included AI credits |
| --- | --- | --- |
| Copilot Business | $19 USD per month | 1,900 per user per month, pooled |
| Copilot Enterprise | $39 USD per month | 3,900 per user per month, pooled |
| Copilot access | $0 seat charge for users with a GitHub Enterprise Cloud license<br><br>$10 USD per user per month as Copilot Standalone for users without a GitHub Enterprise Cloud license | None |

The per-user charge for Copilot Standalone covers identity, access, policy, security, and administration controls. For both Copilot access options, metered usage is billed from the first use.

Copilot access provides the same feature and model eligibility as Copilot Enterprise, subject to administrator policies and spending controls. For capability comparisons, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

### Can I combine the two models?

An eligible enterprise can use both Copilot access options simultaneously, with some developers receiving access through their GitHub Enterprise Cloud license and others using Copilot Standalone.

However, the billing model applies to the whole enterprise. You cannot combine Copilot access with Copilot Business or Copilot Enterprise seats in the same enterprise, including in individual organizations.

### Assigning Copilot seats is still required

With Copilot access, developers do not automatically receive access to Copilot. Enterprise owners must assign Copilot seats to individual members, enterprise teams, or organizations. This also applies to users who have a GitHub Enterprise Cloud license.

## Who is eligible?

Copilot access is becoming available gradually.


**If you work with a GitHub or Microsoft account team:** Available starting October 28, 2026. Talk to your sales team about setting up a new enterprise account on this model, or transitioning an existing enterprise account.

**If you manage your own subscription:** Currently unavailable. We are opening this to self-serve customers in stages and will share dates in the coming weeks. Your current subscription is unaffected.



Copilot access is also unavailable to:

* Organizations on GitHub Free or GitHub Team
* Self-service GitHub Enterprise Cloud trials


Transitioning is voluntary. Enterprises on Copilot Business or Copilot Enterprise do not transition automatically.

## Estimate your monthly costs

Before deciding whether to transition, compare costs using the same monthly period, users, and expected usage:

1. Find your current Copilot license charges and metered usage charges in your billing records. Add them together to establish your current monthly cost.
1. Review total usage in your AI usage dashboard or usage export. Estimate the cost of that usage without an included allowance. Include usage covered by your current pooled allowance, not only your current overage charges. For model rates, see [Models And Pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing).
1. Count users who will receive Copilot Standalone because they do not have a GitHub Enterprise Cloud license. Multiply that number by $10 USD. Users with a GitHub Enterprise Cloud license have a $0 Copilot seat charge.
1. Add the estimated metered usage charges and Copilot Standalone seat charges. Compare the total with your current monthly cost.

Confirm any account-specific pricing and migration terms with your account team.

## Prepare for a voluntary transition

Before your transition takes effect:

1. Set spending controls using your cost estimate as a baseline. Account for any planned increase in users or usage. See [Budgets](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets).
1. Check the **AI credits paid usage** policy in your enterprise's AI Controls settings. It is enabled by default and must remain enabled for users to use features that consume credits.
1. Review your firewall allowlist. On GitHub.com, Copilot access uses the Copilot Enterprise endpoint. This applies both through GitHub Enterprise Cloud and as Copilot Standalone.

   If your allowlist permits only `*.business.githubcopilot.com`, add `*.enterprise.githubcopilot.com` to avoid interrupting access. See [Manage Network Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/manage-network-access).

## Request a voluntary transition

For an existing enterprise with Copilot Business or Copilot Enterprise, contact your GitHub or Microsoft account team. They can confirm eligibility, review the expected access and billing impact, and coordinate an available transition date. Contacting your account team does not itself change access or billing or guarantee a transition date.

Transitions take effect on the first day of a month. Confirm the effective date with your account team.

Don't have a dedicated account team? [Contact sales](https://github.com/enterprise/contact).
