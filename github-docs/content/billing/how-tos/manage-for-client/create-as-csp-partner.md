# Creating an enterprise account as a Microsoft CSP partner

## Prerequisites

Before you start, make sure you know:
* GitHub username of the client who will become the owner of the enterprise you create
* GitHub username for the CSP partner that must be assigned to the customer’s enterprise account to manage metered billing and access support
* Enterprise name your client would like to use
* Email address for receipts
* Number of seats your client needs in the enterprise
* Enterprise account type required by your client, see [Choose An Enterprise Type](https://docs.github.com/en/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type)

## Step 1: Create the enterprise account in the Azure portal

As a Microsoft CSP partner, you can get started with GitHub Enterprise from the Microsoft Azure portal.

1. Sign in to the Microsoft Azure portal.
1. In the search bar, type "GitHub" and select **GitHub** to go the landing page.
1. Select **Get started with GitHub Enterprise**.
1. Choose an enterprise type. To help you decide which choice is best for the enterprise, see [Choose An Enterprise Type](https://docs.github.com/en/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type).
1. Complete the form with your client's information.
1. Click **Create your enterprise**.


## Step 2: Purchase GitHub Enterprise

At any time during the trial, you can purchase GitHub Enterprise for your client by linking it to their Azure subscription. If the account is later transferred to the customer, ensure the Azure subscription is fully managed by them.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, in the blue banner, click **Activate Enterprise**.
1. Click **Add Azure subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.


   If you don't see a "Permissions requested" prompt, and instead see a message indicating that you need admin approval, see [Azure Sub Connection](https://docs.github.com/en/billing/how-tos/troubleshooting/azure-sub-connection).

1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your organization. To select an Azure subscription, you must have owner permissions to the subscription. If the default tenant does not have the right permissions, you may need to specify a different tenant ID. For more information, see [Azure Subscriptions](https://docs.github.com/en/billing/concepts/azure-subscriptions) and [Microsoft identity platform and OAuth 2.0 authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) in Microsoft Docs.

   1. Select **By clicking "Connect", you are confirming that you want to be billed for metered services via the selected Azure subscription**.
1. Click **Connect**.


1. Click **Activate Enterprise**.

## Step 3: Invite your client as an enterprise owner

Invite your client to become an enterprise owner. See [Inviting People To Manage Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#inviting-an-enterprise-administrator-to-your-enterprise-account).

## Step 4: Change your role to billing manager

Optionally, you can change your role to billing manager to manage the billing for the enterprise account, without having full administrative access.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Under "{% octicon "person" aria-hidden="true" aria-label="person" %} People", click **Administrators**.

1. Confirm that your client is listed as an enterprise owner.
1. To the right of your username, select the {% octicon "kebab-horizontal" aria-label="Administrator settings" %} dropdown menu, then click **Change role**.

   ![Screenshot of a user in the administrators list. A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/business-accounts/administrator-settings.png)
1. Select **Billing manager**, then click **Change role**.


## Contacting support

As a Microsoft CSP partner, you can use the [GitHub Support for Microsoft CSP](https://support.github.com/contact?tags=partner-microsoft-csp) landing page to speak to GitHub Support. For more information about creating a support ticket, see [Creating A Support Ticket](https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket).
