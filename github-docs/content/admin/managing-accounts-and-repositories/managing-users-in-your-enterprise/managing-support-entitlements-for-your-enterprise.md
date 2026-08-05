# Managing support entitlements for your enterprise

## About support entitlements

People with support entitlements for your enterprise account can use the support portal to open, view, and comment on support tickets associated with the enterprise account.

Enterprise owners and billing managers automatically have a support entitlement. Enterprise owners can add support entitlements to a limited number of enterprise members.
* **Premium plan, Standard plan:** Up to 20 members
* **Premium Plus plan / Mission Critical Services for GitHub plan:** Up to 40 members

> [!NOTE] The level of support that members of your enterprise receive when submitting a ticket is determined by their support entitlement status:
> * If your enterprise has a Premium or Premium Plus plan and the user has a support entitlement, their ticket will receive Premium Support, which includes expedited response times and prioritized handling.
> * If the user does not have a support entitlement, their ticket will still be addressed by our Enterprise Support team, but without Premium Support features such as priority selection and guaranteed Premium SLAs.
>
> If a user is unsure of their entitlement status, they can contact their organization's Enterprise Support administrator.

## Adding a support entitlement to an enterprise member

To add a support entitlement to a user, the user must already be a member of an organization that is owned by your enterprise.

> [!NOTE]
> After you add a support entitlement, the enterprise member may need to sign out from [GitHub Support portal](https://support.github.com/), then sign in again, before they can manage tickets.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Support**.
1. In the search bar, start typing the name or username of the person you want to give a support entitlement. Click their name in the list of matches.
1. Click **Add support entitlement**.

## Removing a support entitlement from an enterprise member

When a user is removed from the enterprise, their support entitlement will be automatically removed.

If a user remains an enterprise member, you can manually remove their support entitlement. You cannot remove a support entitlement from enterprise owners or billing managers.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the sidebar under "Settings", click **Support**.
1. Under "Support members", to the right of the person you want to remove a support entitlement from, click {% octicon "trash" aria-label="remove support entitlement" %}.

## Further reading

* [Support](https://docs.github.com/en/support)
