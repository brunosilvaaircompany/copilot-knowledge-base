# Disabling Copilot for organizations in your enterprise

This procedure applies to Copilot Business and Copilot Enterprise. When you disable access for organizations, organization owners cannot assign licenses to their members. Enterprise owners can still assign Copilot Business seats directly to users and teams in the enterprise settings.

For how seat assignment works with Copilot access, see [Seats And Billing Cycles](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/seats-and-billing-cycles#seat-assignment).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. In the "Billing and licensing" sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
1. In the "Copilot" section, click **Manage**.

1. Next to "Organization access", choose whether to disable Copilot for all organizations or allow for specific organizations.

   ![Screenshot of the "Organization access" section, with the dropdown menu highlighted.](/assets/images/help/copilot/organization-access-menu.png)

1. If you selected **Allow for specific organizations**:

   1. Click the **Organizations** tab.
   1. Locate the organization for which you want to disable Copilot.
   1. To the right of the organization name, select the **Copilot** dropdown menu.
       * If your enterprise has a Copilot Business plan, click **Disabled**.
       * If your enterprise has a Copilot Enterprise plan, click **Remove access**.

Once Copilot is disabled, licenses that are currently granted through the organization will be revoked at the end of the billing period. You will **not** be double-billed if a user also receives a license from your enterprise during this period.

## Further reading

* [GitHub Copilot Licenses](https://docs.github.com/en/billing/concepts/product-billing/github-copilot-licenses)
* [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies)
