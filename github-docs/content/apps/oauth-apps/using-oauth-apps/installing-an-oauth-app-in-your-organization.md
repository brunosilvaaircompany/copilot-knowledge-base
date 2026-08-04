# Installing an OAuth app in your organization

## About installing OAuth apps in your organization

> [!NOTE]
> This article applies to installing and purchasing apps from GitHub Marketplace only. For more information on apps purchased from integrators, see [About Integrations](https://docs.github.com/en/integrations/concepts/about-integrations).


> [!TIP]
> If an app requires organization-level access, then only an organization owner can purchase, install, or cancel the app, and manage app billing for the organization. If the app doesn't require organization-level access, then a repository administrator can install and uninstall the app.


If you choose a paid plan, you'll pay for your app subscription on your organization's current billing date using your organization's existing payment method.

If you choose a paid plan with a free trial, you can cancel at any time during your trial period without being charged, but you will automatically lose access to the app. Your paid subscription will start at the end of the 14-day trial. For more information, see [GitHub Marketplace Apps](https://docs.github.com/en/billing/concepts/third-party-payments/github-marketplace-apps).


For more information about installing a GitHub App, see [Installing A GitHub App From GitHub Marketplace For Your Organizations](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations).

## Installing an OAuth app in your organization

If you belong to any organizations that enforce SAML single sign-on, you may be prompted to authenticate through your identity provider before you can authorize an OAuth app. For more information about SAML, see [About Authentication With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on)" in the GitHub Enterprise Cloud documentation.


1. To open GitHub Marketplace, in the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "gift" aria-hidden="true" aria-label="gift" %} Marketplace**.

   ![Screenshot of the navigation bar on GitHub. The "Open global navigation menu" icon is outlined in dark orange.](/assets/images/help/navigation/global-navigation-menu-icon.png)

1. Browse to the app you'd like to install, then click on the app's name.

1. On the app's page, under "Pricing and setup," click the pricing plan you'd like to use.

1. Click **Install it for free**, **Buy with GitHub**, or **Try free for 14 days**.

1. Choose an installation organization for the app. Depending on your organization's terms of service, this process will be slightly different.

     * If you have given GitHub permission to collect name and address information for your organization, in the "Billing information" section, select the **Switch billing account** {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} dropdown menu, then click the organization in which you'd like to install the app.

    ![Screenshot of the GitHub Marketplace app purchase screen. A collapsed blue dropdown menu labeled "Switch billing account" is outlined in dark orange.](/assets/images/help/marketplace/marketplace-confirm-org.png)

     * Otherwise, under "Review your order," select the **Account** dropdown menu, then click the organization in which you'd like to install the app.

    ![Screenshot of the GitHub Marketplace app purchase screen. A collapsed gray dropdown menu labeled "Account" is outlined in dark orange.](/assets/images/help/marketplace/marketplace-confirm-org-no-org-details.png)

   

   > [!NOTE]
   > If your organization uses SAML SSO and you do not see your organization listed, you may need to start an active SAML session for your organization. For more information, see [Saml And GitHub Apps](https://docs.github.com/en/apps/using-github-apps/saml-and-github-apps).


   

1. If you chose a paid plan, review your payment method.
   * To change the existing payment method on file for the organization, click **Edit**, then complete the form to add a new payment method.
   * If there isn't a payment method on file for the organization, click **Add a Payment Method**, then complete the form to add a credit card or PayPal account.

1. Click **Complete order and begin installation**.

1. Review the information about the app's access to your personal account, organizations, and data, then click **Authorize application**.

## Further reading

* [Manage Payment Info](https://docs.github.com/en/billing/how-tos/set-up-payment/manage-payment-info)
* [Installing An OAUTH App In Your Personal Account](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/installing-an-oauth-app-in-your-personal-account)
