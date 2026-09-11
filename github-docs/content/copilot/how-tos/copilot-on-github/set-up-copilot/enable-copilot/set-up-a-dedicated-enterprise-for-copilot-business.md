# Setting up an enterprise for GitHub Copilot Business only

Before you begin, see [About Enterprise Accounts For Copilot Business](https://docs.github.com/en/copilot/concepts/enterprise/about-enterprise-accounts-for-copilot-business) to understand how to use a standard enterprise account for Copilot Business without consuming GitHub Enterprise Cloud licenses.

## Create an enterprise account

If you will pay by credit card or PayPal, you can create an enterprise account and purchase Copilot Business yourself.

>[!NOTE] For other payment methods, contact [GitHub's Sales team](https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=text) and ask for an enterprise account with Copilot enabled.

1. Start a trial of GitHub Enterprise Cloud.

   <a href="https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of GitHub Enterprise Cloud</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

1. End the trial immediately and add a credit card or PayPal as a payment method. This is required because trial enterprises cannot sign up for Copilot Business. However, with the setup described in this article, you will **not** pay for GitHub Enterprise Cloud licenses even when the trial has ended.

## Add users to your enterprise

Once you have an enterprise account, add the people who will receive Copilot Business licenses. How you add users depends on your enterprise type: invite personal accounts directly to the enterprise, or provision managed user accounts from your identity provider (IdP) through SCIM. For detailed steps, see [Add Users](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/add-users).

Add users **directly to the enterprise** so that they remain unaffiliated. Adding users to an organization assigns GitHub Enterprise licenses, while adding users directly to the enterprise keeps your setup limited to Copilot Business.

Provisioned managed users appear automatically in your enterprise's **People** list. You can then assign Copilot Business licenses directly to these users or to enterprise teams synced with your IdP.

## Create enterprise teams (optional)

Group users to scale license assignment by creating enterprise teams. Unaffiliated users can be members of enterprise teams, so you can assign Copilot Business licenses to a whole team without creating an organization. See [Create Enterprise Teams](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

## Enable Copilot for the enterprise

An enterprise owner must purchase a Copilot Business plan so you can start assigning licenses to users.

If you pay by credit card or PayPal, you can [subscribe to Copilot Business](https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=purchase&ref_style=button&ref_plan=business) yourself.

For other payment methods, [contact GitHub's Sales team](https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=text).

## Assign Copilot licenses

Give people access to Copilot by assigning Copilot Business licenses to users or enterprise teams.

For detailed steps, see [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).

## Govern the use of Copilot in your enterprise

After you assign licenses, you can centrally govern how members use Copilot:

* **Policies**. Control feature availability with policies in AI Controls.
* **Enterprise managed settings**. Distribute client governance and extensibility configuration from a centrally defined source. For example, you can disable bypass mode, restrict plugins, and set the default model for new conversations. See [Get Started](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

To use server-managed settings, you need an organization and a `.github-private` repository, which requires a GitHub Enterprise license for the user who creates them. Alternatively, you can deploy managed settings through MDM or a file-based deployment without creating an organization.

## If your enterprise already contains an organization

If you only need Copilot Business, but your enterprise already contains an organization, you are consuming GitHub Enterprise Cloud licenses and will be billed for them.

### Step 1: Check your unaffiliated users policy

If your enterprise uses personal accounts and the unaffiliated users policy is set to remove users, people who no longer have access to any organizations will be removed from the enterprise and lose all privileges and licenses granted from the enterprise, including Copilot licenses. Enterprise owners and billing managers are not affected by this policy. Before you remove any organizations, make sure this policy is set to **Remain in the enterprise**. See [Control Offboarding](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/control-offboarding).

### Step 2: Remove the organization

> [!IMPORTANT]
> Before taking action, make sure you review the effects of removing or deleting an organization in the linked documentation.

* If your enterprise uses personal accounts, remove the organization from your enterprise. See [Removing Organizations From Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise).
* If you use Enterprise Managed Users, you can delete the organization. See [Deleting An Organization Account](https://docs.github.com/en/organizations/managing-organization-settings/deleting-an-organization-account).

If removal or deletion is not an option, you can reduce license consumption by removing most of the organization's members. However, at least one organization owner will need to remain, and some non-members may continue consuming a license. See [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users#organizations-on-github-enterprise-cloud).

### Step 3: Confirm your members are unaffiliated

On your enterprise's **People** page, confirm that the people who need Copilot Business are still in the enterprise and are now listed as unaffiliated users, and that they still hold their Copilot licenses.

### Step 4: Update your license count

Depending on how you are billed, reducing license consumption may not reduce your bill on its own.

* **Usage-based license billing**: no action needed. You are billed for the licenses you consume. To monitor spending, you can set budgets and alerts. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).
* **Volume license billing**: you must reduce your paid license count yourself. See [Manage User Licenses](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/manage-user-licenses#self-serve-customers-with-volume-licenses).
* **Invoiced billing**: contact your account manager in [GitHub's Sales team](https://github.com/enterprise/contact).

If you have already been charged for GitHub Enterprise Cloud licenses that you did not intend to use, contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.

## Next steps

Help your developers start using Copilot and measure its impact. See [Drive Adoption](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption).
