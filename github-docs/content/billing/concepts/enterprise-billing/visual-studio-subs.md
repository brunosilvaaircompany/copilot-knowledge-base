# About Visual Studio subscriptions with GitHub Enterprise

> [!NOTE] Customers with a Visual Studio bundle can **switch to usage-based billing** for GitHub Enterprise licenses. This allows you to pay for licenses on a flexible monthly cycle for users who are not part of your Visual Studio subscription. See [Usage Based Licenses](https://docs.github.com/en/billing/concepts/enterprise-billing/usage-based-licenses).

Visual Studio subscriptions with GitHub Enterprise is a combined offering from Microsoft that allows a subscriber to use both Visual Studio and GitHub Enterprise.
 Visual Studio subscriptions with GitHub Enterprise is available from Microsoft under the terms of the Microsoft Enterprise Agreement. For more information, see [Visual Studio subscriptions with GitHub Enterprise](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) on the Visual Studio website.

To use the GitHub Enterprise portion of the license, each subscriber's personal account on GitHub must be or become a member of an organization owned by your enterprise on GitHub. To accomplish this, organization owners can invite new members to an organization by email address. The subscriber can accept the invitation with an existing personal account or create a new account.

For more information about the setup of Visual Studio subscriptions with GitHub Enterprise, see [Set Up Vs Subscription](https://docs.github.com/en/billing/how-tos/set-up-payment/set-up-vs-subscription).

## About licenses for Visual Studio subscriptions with GitHub Enterprise Cloud

After you assign a license for Visual Studio subscriptions with GitHub Enterprise Cloud to a subscriber, the subscriber will use the GitHub Enterprise portion of the license by joining an organization in your enterprise with a personal account on GitHub. If the verified email address for the personal account of an enterprise member on GitHub matches the User Principal Name (UPN) for a subscriber to your Visual Studio account, the Visual Studio subscriber will automatically consume one license for Visual Studio subscriptions with GitHub Enterprise Cloud.

> [!NOTE] For Enterprise Managed Users only, to make sure a user account consumes a Visual Studio license, ensure the Visual Studio UPN matches the SCIM `userName` attribute or the email address from the linked identity on the GitHub account.

The total quantity of your licenses for your enterprise on GitHub is the sum of any standard GitHub Enterprise licenses and the number of Visual Studio subscription licenses that include access to GitHub. Unaffiliated users are included in the automatic matching behavior and can consume a license for Visual Studio subscriptions with GitHub Enterprise Cloud while remaining unaffiliated.

If the personal account for an enterprise member does not correspond with the email address for a Visual Studio subscriber, an enterprise owner can manually match the accounts to consolidate licenses. Under the terms of service, the GitHub account and Visual Studio subscription must belong to the same person.

For more information about GitHub Enterprise, see [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans#github-enterprise). For more information about accounts on GitHub, see [Types Of GitHub Accounts](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts).

## About licenses for GitHub Enterprise Server

When you purchase GitHub Enterprise, you get access to both GitHub Enterprise Cloud and GitHub Enterprise Server.
 For more information, see [About GitHub For Enterprises](https://docs.github.com/en/admin/overview/about-github-for-enterprises#about-deployment-options).

For users only on GitHub Enterprise Server, each Visual Studio subscriber will only consume one license as long as the email address associated with their GitHub Enterprise Server account matches their Visual Studio UPN. This does not apply if you have switched to **usage-based billing**, in which case users must also be on GitHub Enterprise Cloud to consume a bundled license.

For users on both GitHub Enterprise Server and GitHub Enterprise Cloud, only one license will be consumed as long as you follow the instructions in the 'About licenses for Visual Studio subscriptions with GitHub Enterprise Cloud' section, and the user's accounts are linked as described in [Sync License Usage](https://docs.github.com/en/billing/how-tos/manage-server-licenses/sync-license-usage).

## Further reading

* [Visual Studio subscriptions with GitHub Enterprise](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in Microsoft Docs
* [Use Visual Studio or Visual Studio Code to deploy apps from GitHub](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) in Microsoft Docs
