# Inviting people to manage your enterprise

## About administrator management

If you do not use Enterprise Managed Users, you can add or remove enterprise owners and billing managers in your enterprise. For more information about the privileges that come with each enterprise role, see [Abilities Of Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles).



If you want to manage enterprise owners and billing managers for an enterprise account on GitHub.com, see [the GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).




If you do use Enterprise Managed Users, enterprise owners and billing managers can only be added or removed through your identity provider. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).



## Inviting{% elsif ghes %}Adding an enterprise administrator to your enterprise account

After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account. Pending invitations will expire after 7 days.

You can see all pending invitations to become an administrator of your enterprise account. For more information, see [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Under "{% octicon "person" aria-hidden="true" aria-label="person" %} People", click **Administrators**.

1. Above the list of administrators, click **Invite admin**{% elsif ghes %}**Add owner**.
1. Type the username, full name, or email address of the person you want to invite to become an enterprise administrator, then select the appropriate person from the results.

1. Select **Owner** or **Billing Manager**.
1. Click **Send Invitation**.


1. Click **Add**.


## Removing an enterprise administrator from your enterprise account

Only enterprise owners can remove other enterprise administrators from the enterprise account.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Under "{% octicon "person" aria-hidden="true" aria-label="person" %} People", click **Administrators**.

1. Next to the username of the person you'd like to remove, select the {% octicon "kebab-horizontal" aria-label="Administrator settings" %} dropdown menu, then click **Convert to member**.
1. Next to the username of the person you'd like to remove, select the {% octicon "kebab-horizontal" aria-label="Administrator settings" %} dropdown menu.

   ![Screenshot of a user in the enterprise administrators list. A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/business-accounts/administrator-settings.png)

1. Choose one of the following:

   * **Remove from enterprise**: Removes both the administrative role and all organization memberships.
   * **Convert to member**: Removes the administrative role but keeps the user’s organization memberships.
   * **Change role**, and then **Unaffiliated member**: If the user has no organization memberships, removes the administrative role but keeps the user in the enterprise as an unaffiliated member.

1. Read the confirmation message, then confirm.

## Further reading

* [Managing Membership In Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization)
* [Managing Peoples Access To Your Organization With Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles)
