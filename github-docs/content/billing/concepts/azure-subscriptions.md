# Azure subscription payments

## Payment using an Azure subscription

You can pay for GitHub use through an Azure subscription by connecting the subscription to GitHub. See [Connect Azure Sub](https://docs.github.com/en/billing/how-tos/set-up-payment/connect-azure-sub).

GitHub installs a Subscription Permission Validation app (SPV app) on the Azure tenant, which it uses to get a list of available subscriptions from active directory. Installing the SPV app requires tenant-wide admin consent. You must sign into an Azure account that can provide tenant-wide admin consent, or work with an Azure administrator to configure the admin consent workflow.

* [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/azure/active-directory/manage-apps/grant-admin-consent) in Microsoft Docs
* [User and admin consent in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/user-admin-consent-overview#admin-consent-workflow) in Microsoft Docs.

>[!TIP] If your tenant provides user consent settings, users included in those settings might not require admin consent to install the GitHub SPV app. See [User consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/user-admin-consent-overview#user-consent) in Microsoft Docs.

## Billing cycle for Azure

If you link your GitHub account to Azure, any usage-based costs starting from that point will be billed through Azure and charged on the 1st of each month. However, any remaining GitHub charges, for example, charges for your GitHub plan, will still be billed on your usual billing date.

Prepaid usage is not currently available for usage-based billing through Azure.

### Calculation example

You link your Azure subscription to your organization or enterprise account on **June 16th** and you also have a GitHub Copilot Business subscription.

* From that June 16th onwards, any usage costs for Copilot Business, with any costs for metered use over the included amounts, is included in your Azure bill and charged on **July 1st** and on the first of every month.
* Any charges incurred before June 16th are billed separately through GitHub on your account's usual billing date.

## Use of GitHub Enterprise Cloud through a Microsoft Enterprise Agreement

If you use GitHub Enterprise Cloud through a Microsoft Enterprise Agreement, connecting an Azure subscription is the only way to use GitHub Advanced Security, GitHub Codespaces, or GitHub Copilot, or to use GitHub Actions, Git Large File Storage (LFS), or GitHub Packages beyond your plan's included amounts.

## Next steps

For instructions on connecting your Azure subscription, see [Connect Azure Sub](https://docs.github.com/en/billing/how-tos/set-up-payment/connect-azure-sub).

For reference information, see [Azure Subscription](https://docs.github.com/en/billing/reference/azure-subscription).
