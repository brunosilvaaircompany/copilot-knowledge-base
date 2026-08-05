# Converting a user into an organization

## Prerequisites

The personal account you want to convert cannot be a member of any organizations. If the personal account you want to convert is a member of an organization, you must leave the organization before you can convert the account.

You may not be able to convert a personal account into an organization if an enterprise owner has set a policy at the enterprise level. See, [Preventing Users From Creating Organizations](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/preventing-users-from-creating-organizations).

## Keep your personal account and create a new organization manually

If you want your organization to have the same name that you are currently using for your personal account, or if you want to keep your personal account's information intact, then you must create a new organization and transfer your repositories to it instead of converting your personal account into an organization.

1. To retain your current personal account for your personal use, [change the name of your personal account](/account-and-profile/concepts/username-changes) to something new and wonderful.
1. [Create a new organization](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) with the original name of your personal account.
1. [Transfer your repositories](/repositories/creating-and-managing-repositories/transferring-a-repository) to your new organization account.

## Convert your personal account into an organization automatically

To convert your personal account into an organization, follow these steps:

1. Create a new personal account, which you'll use to sign into GitHub and access the organization and your repositories after you convert.
1. [Leave any organizations](/account-and-profile/how-tos/organization-membership/removing-yourself-from-an-organization) the personal account you're converting has joined.
1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. In the "Transform account" section, click **Turn USERNAME into an organization**.
1. Review the warning, then click **Turn USERNAME into an organization**.
1. Under "Choose an organization owner", type either the secondary personal account you created in the previous section, or another user you trust, to manage the organization.
1. Choose your new organization's subscription and enter your billing information, if prompted.
1. Click **Create Organization**.
1. Sign in to the new personal account you created earlier, then use the context switcher to access your new organization.

## Next steps

* [Personal Account Reference](https://docs.github.com/en/account-and-profile/reference/personal-account-reference#side-effects-of-converting-an-account-to-an-organization)
* [Organizing Members Into Teams](https://docs.github.com/en/organizations/organizing-members-into-teams)
* [Accessing An Organization](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/accessing-an-organization)
