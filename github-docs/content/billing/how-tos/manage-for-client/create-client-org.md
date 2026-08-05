# Creating and paying for an organization for a client

If you want to create an enterprise account for a client, see [Create Client Enterprise](https://docs.github.com/en/billing/how-tos/manage-for-client/create-client-enterprise) or [Create As Csp Partner](https://docs.github.com/en/billing/how-tos/manage-for-client/create-as-csp-partner).

## Prerequisites

Before you start, make sure you know:
* GitHub username of the client who will become the owner of the organization you create
* Organization name your client would like to use
* Email address for receipts
* Number of seats your client needs in the organization

## Step 1: Create your personal GitHub account

You will use your personal account to set up the organization. You'll also need to sign in to this account to renew or make changes to your client's subscription in the future.

If you already have a personal account on GitHub, skip to [step 2](#step-2-create-the-organization).

1. Go to the [Join GitHub](https://github.com/join) page.
1. Complete the form, then click **Create account**.
1. Select GitHub Free for your personal account.
1. Click **Finish sign up**.


## Step 2: Create the organization

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Next to the "Organizations" header, click **New organization**.

1. Under "Choose a plan", click **Choose GitHub Free**. You will upgrade the organization in the next step.
1. Under "Organization name", type a name for your organization.

1. Under "Contact email", type a contact email address for your client.
1. Optionally, if your organization is owned by a business or institution, select **This organization is owned by a business**.
1. If your organization is owned by a business or institution, under "Name of business or institution this organization belongs to", type the name of the business or institution.

1. Click **Next**.

## Step 3: Upgrade the organization to a paid plan with yearly payment

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing** and then **Licensing**.

1. Click **Upgrade to Team** next to "Current plan".

1. Under "How often do you want to be billed?", select **Pay yearly**.

1. Under "How many seats do you want to include?", define the number of seats you require.
1. Under "Payment method", choose to pay with a credit card or PayPal.
1. Complete the payment information form, then click **Submit**.

1. Review the information, then click **Save** to confirm the changes.

## Step 4: Invite your client to join the organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)


1. Click **Invite member**.


1. In the search field, type your client's GitHub username and press **Enter**.
1. Select **Owner**, then click **Send invitation**.
1. Your client will receive an email inviting them to the organization.

>[!NOTE]
> You cannot move on to the next step until your client accepts the invitation to become an organization owner.

## Step 5: Transfer organization ownership to your client

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. Confirm that your client is listed among the members of the organization and is assigned the owner role.
1. To the right of your username, select the {% octicon "kebab-horizontal" aria-label="Member settings" %} dropdown menu, and click **Manage**.

   ![Screenshot of the member list for an organization. To the right of a member, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/member-manage-access.png)
1. In the left sidebar, click **Remove from organization**.
1. Confirm your choice and click **Remove members**.

## Next steps

1. Contact your client and ask them to add you to the organization as a billing manager. You'll need to be a billing manager for the organization so that you can renew or make changes to your client's subscription in the future. See [Adding A Billing Manager To Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).
1. Your client's paid subscription will automatically renew unless you remove your company's payment method from the organization. See [Manage Client Org](https://docs.github.com/en/billing/how-tos/manage-for-client/manage-client-org).
1. If you want to remove your company's credit card from the organization so that it's not automatically charged for renewals and any other costs, contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.
