# Connecting an Azure subscription

You can pay for metered usage of GitHub features through Azure by connecting an Azure Subscription ID to your organization or enterprise account on GitHub. See [Azure Subscriptions](https://docs.github.com/en/billing/concepts/azure-subscriptions).



> [!NOTE] If you currently pay for your GitHub Enterprise licenses through a volume, subscription, or prepaid agreement, you will continue to be billed in this way until your agreement expires or you are invited to transition. At renewal, you have the option to switch to the metered billing model.




## Prerequisites

* You must be an owner of the GitHub organization or enterprise account you want to connect to Azure.

* You must know your Azure subscription ID. See [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) in the Microsoft Docs.

* You must be logged into Azure as a user who is able to provide tenant-wide admin consent or arrange to work with a Microsoft Entra Global Administrator to configure an admin consent workflow. See [Azure Subscriptions](https://docs.github.com/en/billing/concepts/azure-subscriptions).

## Connecting your Azure subscription to an organization or enterprise account

1. Navigate to your organization or enterprise. For example, from the [Organizations](https://github.com/settings/organizations?ref_product=github&ref_type=engagement&ref_style=text) or [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) pages on GitHub.com.

1. Click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** to display the billing and licensing overview for the account:
   * **Organization** accounts: under "Access" in the sidebar for settings.
   * **Enterprise** accounts: a separate tab at the top of the page.

1. From the list of "Billing & licensing" pages, click **Payment information**.


1. Scroll to the bottom of the page, to the right of "Metered billing via Azure", click **Add Azure Subscription**.
1. Sign in to your Microsoft account.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.


   If you don't see a "Permissions requested" prompt, and instead see a message indicating that you need admin approval, see [Azure Sub Connection](https://docs.github.com/en/billing/how-tos/troubleshooting/azure-sub-connection).


1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your account.

   1. Select **By clicking "Connect", you are confirming that you want to be billed for metered services via the selected Azure subscription**.
1. Click **Connect**.


   To select an Azure subscription, you must have owner permissions to the subscription. If the default tenant does not have the right permissions, you may need to specify a different tenant ID. For more information, see [Azure Subscriptions](https://docs.github.com/en/billing/concepts/azure-subscriptions) and [Microsoft identity platform and OAuth 2.0 authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) in Microsoft Docs.


## Editing or disconnecting your Azure subscription from an account

If you disconnect your Azure subscription from your account, your usage can no longer exceed the amounts included with your plan.

1. On the "Payment information" page, to the right of the subscription ID you want change.

   * **Edit the subscription**: Click {% octicon "pencil" aria-label="Edit Azure Subscription" %} to edit your subscription.
   * **Disconnect the subscription** Click {% octicon "trash" aria-label="Delete Azure Subscription" %} to remove the connection.

## Video demonstration of connecting a subscription

To connect an Azure subscription, you'll need appropriate access permissions on both GitHub and the Azure billing portal. This may require coordination between two different people.

To see a demo of the process from beginning to end, see [Billing GitHub consumption through an Azure subscription](https://www.youtube.com/watch?v=Y-f7JKJ4_8Y) on GitHub's YouTube channel. This video demonstrates the process for an enterprise account.

## Further reading

* [Azure Subscriptions](https://docs.github.com/en/billing/concepts/azure-subscriptions)
* [Azure Subscription](https://docs.github.com/en/billing/reference/azure-subscription)
* [Azure Sub Connection](https://docs.github.com/en/billing/how-tos/troubleshooting/azure-sub-connection)
