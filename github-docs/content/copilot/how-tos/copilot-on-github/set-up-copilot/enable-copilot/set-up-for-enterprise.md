# Setting up GitHub Copilot for your enterprise

## Choose a billing model

Before enabling Copilot, choose the billing model that fits your enterprise's needs. Copilot Business and Copilot Enterprise include a usage allowance, while Copilot access for eligible enterprises bills metered usage from the first use. See [Plans](https://docs.github.com/en/copilot/get-started/plans).

## Enable GitHub Copilot

**Enterprise owners** can set up Copilot and control access across their enterprise. Activation depends on the plan:

* For **Copilot access**, your enterprise must work with a GitHub or Microsoft account team. Check eligibility and activation or transition options in [Whats Changing With GitHub Enterprise And Copilot](https://docs.github.com/en/copilot/get-started/whats-changing-with-github-enterprise-and-copilot). Contact your account team to activate a new enterprise or transition an existing enterprise.

* For **Copilot Business or Copilot Enterprise on GitHub.com**, if you pay by credit card or PayPal, you can [subscribe here](https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=reusable-subscribe-enterprise-doc-purchase&utm_medium=docs&utm_campaign=universe-2026).

   >[!NOTE] If you are currently in a trial of GitHub Enterprise Cloud, you must convert to a paid enterprise before you can purchase GitHub Copilot.

* For **Copilot Business or Copilot Enterprise with any other payment method or on GHE.com**, [contact GitHub's Sales team](https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=reusable-subscribe-enterprise-contact-sales&utm_medium=docs&utm_campaign=universe-2026).


## Set policies

You will use enterprise policies to manage two aspects of governance:

* **Availability**: Which Copilot features, models, and MCP servers are available in your enterprise?
* **Controls**: What restrictions apply to these features? For example, will you exclude certain files or block suggestions matching public code?

Generally, enterprise owners can either set each policy for the whole enterprise or "let organizations decide." With the latter option, users are subject to the policy of the organization where they receive their Copilot license or to the default defined in your "Policies for enterprise-assigned users" setting.

To manage policies, see [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Set spending controls

Before users begin consuming AI credits, set per-user budgets and spending limits. Per-user budgets govern total consumption. Spending limits govern metered charges, which begin after pool exhaustion on Copilot Business and Copilot Enterprise, or from first use with Copilot access.

Enable **Stop usage when budget limit is reached** on spending limits to enforce them. See [Getting Started With Budget Controls](https://docs.github.com/en/copilot/tutorials/budgets/getting-started-with-budget-controls).

The **AI credits paid usage** policy in your enterprise's AI Controls settings is enabled by default for all billing models. With Copilot access through GitHub Enterprise Cloud or as Copilot Standalone, it must remain enabled for features that consume credits because all credit-consuming usage is paid usage.

## Configure networking

If your corporate network restricts users' traffic, add the required URLs to the allowlist for your firewall or proxy. See [Copilot Allowlist Reference](https://docs.github.com/en/copilot/reference/copilot-allowlist-reference).

If you route traffic via a proxy server, you may need to ask users to configure proxy settings in their environment. You may also need to install custom certificates on your users' machines. For more information, see [Network Settings](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/network-settings).

If your enterprise is on GHE.com, users will also need to configure their environment to authenticate from their development environment. See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/set-up-copilot/authenticate-to-ghecom).

## Assign licenses

Each user needs an assigned Copilot seat, even when access has no incremental charge. GitHub Enterprise Cloud and Copilot assignments remain separate.

Choose an assignment route for your enterprise's plan:

* **Copilot access**: Enterprise owners assign access to individuals, enterprise teams, or organizations. This applies for users who receive access through GitHub Enterprise Cloud and as Copilot Standalone.
* **Copilot Business**: Enterprise owners can assign licenses directly to users or enterprise teams.
* **Copilot Business or Copilot Enterprise through organizations**: Enterprise owners enable organizations, then organization owners assign licenses to members. Enterprise owners choose the plan for each organization.


For instructions, see [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access).

## Help developers get started

Ask developers to sign in to their IDE with the account that has enterprise-provided access, then complete their first task. They can follow [Quickstart For Using GitHub Copilot In Your Ide](https://docs.github.com/en/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide).

## Review usage and spending

After rollout, check your AI usage dashboard at least monthly:

* Compare consumption with your approved spending limits.
* Identify users who are blocked or need different budgets.
* Adjust controls as usage changes.

For guidance on tuning budgets using historical consumption, see [Optimizing Your Budget Configuration](https://docs.github.com/en/copilot/tutorials/budgets/optimizing-your-budget-configuration).
