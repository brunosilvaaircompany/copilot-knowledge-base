# Creating and paying for a client's enterprise account

## Prerequisites

Before you start, make sure you know:
* GitHub username of the client who will become the owner of the enterprise you create
* Enterprise name your client would like to use
* Email address for receipts
* Number of seats your client needs in the enterprise
* Enterprise account type required by your client, see [Choose An Enterprise Type](https://docs.github.com/en/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type)

## Step 1: Create your personal account on GitHub

You will use your personal account to set up the enterprise account. You'll also need to sign in to this account to renew or make changes to your client's subscription in the future.

If you already have a personal account on GitHub, skip to [step 2](#step-2-create-the-enterprise-account).

1. Go to the [Join GitHub](https://github.com/join) page.
1. Complete the form, then click **Create account**.
1. Select GitHub Free for your personal account.
1. Click **Finish sign up**.


## Step 2: Create the enterprise account

1. Navigate to [Set up your Enterprise trial](https://github.com/account/enterprises/new).

1. Depending on your client's requirements:
   * Enterprise with personal accounts on GitHub.com: click **Get started with personal accounts**
   * Enterprise with managed users, and optional data residence: click **Get started with managed users**
1. Complete the form with your client's information.

   If you chose Enterprise managed users, define your data hosting requirements [About GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/admin/data-residency/about-github-enterprise-cloud-with-data-residency).
1. Click **Create your enterprise**.


## Step 3: Upgrade the enterprise to a yearly paid subscription


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.


1. At the top of the page, click **Buy Enterprise**.
1. Under "How often do you want to be billed?", select **Pay yearly**.

1. Under "How many seats do you want to include?", type the number of seats your client wants.
1. Under "Payment method", input your payment details.
1. Click **Complete GitHub Enterprise purchase**.

## Step 4: Invite your client as an enterprise owner

Invite your client to become an enterprise owner. For more information, see [Inviting People To Manage Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#inviting-an-enterprise-administrator-to-your-enterprise-account).

## Step 5: Change your role to billing manager


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Under "{% octicon "person" aria-hidden="true" aria-label="person" %} People", click **Administrators**.

1. Confirm that your client is listed as an enterprise owner.
1. To the right of your username, select the {% octicon "kebab-horizontal" aria-label="Administrator settings" %} dropdown menu, then click **Change role**.

   ![Screenshot of a user in the administrators list. A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/business-accounts/administrator-settings.png)
1. Select **Billing manager**, then click **Change role**.


## Next steps

1. Contact your client and ask them to add you to the enterprise as a billing manager. You'll need to be a billing manager for the enterprise so that you can renew or make changes to your client's subscription in the future. See [Inviting People To Manage Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).
1. Your client's paid subscription will automatically renew unless you remove your company's payment method from the enterprise, see [Manage Payment Info](https://docs.github.com/en/billing/how-tos/set-up-payment/manage-payment-info).
1. If you want to remove your company's credit card from the enterprise so that it's not automatically charged for renewals and any other costs, contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.
