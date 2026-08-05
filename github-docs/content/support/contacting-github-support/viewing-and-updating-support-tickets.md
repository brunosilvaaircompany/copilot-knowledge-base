# Viewing and updating support tickets

## About ticket management

> [!NOTE]
> * Urgent priority and GitHub Premium Support SLAs only apply to tickets associated with your enterprise account.
> * Tickets associated with an enterprise account can only be opened by owners, billing managers, and support-entitled members.




> [!NOTE]
> If you have previously contacted GitHub Enterprise Support through the GitHub Enterprise Support portal, which is closing down, you should use the [GitHub Support portal](https://support.github.com) to open new tickets.




You can use the [GitHub Support portal](https://support.github.com/) to view current and past support tickets and respond to GitHub Support. After 120 days, resolved tickets are archived and retained for up to three years. Archived tickets can only be viewed for enterprise accounts.

Your capabilities in the GitHub Support portal depend on the account you select when you submit a ticket. If you select an enterprise account, your role in the enterprise also affects your capabilities.



To open, view, and comment on support tickets associated with an enterprise account, you must have support entitlements for the enterprise. Enterprise owners and billing managers automatically have a support entitlement, and enterprise owners can add support entitlements to enterprise members. For more information, see [Managing Support Entitlements For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

> [!NOTE]
> Any organization member can create tickets associated with an individual organization that is owned by an enterprise account. Support entitlements are only required to create tickets associated with the enterprise account itself.





## Viewing your recent support tickets

1. Navigate to the [GitHub Support Portal](https://support.github.com/).
1. In the header, click **My Tickets**.


1. Optionally, to view tickets associated with an organization or enterprise account, select the **Account** dropdown menu and click the name of the organization or enterprise account.

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

1. In the list of tickets, click the subject of the ticket you want to view.
![Screenshot showing a list of support tickets. A ticket's subject, "Can't access my private repository," is highlighted in orange.](/assets/images/help/support/my-tickets-list.png)

1. Under the text box, you can read the comment history. The most recent response is at the top.
1. Optionally, to translate the ticket comment, click {% octicon "globe" aria-label="The globe icon" %} and choose your preferred language from the dropdown menu. You can translate your support ticket into Spanish, Japanese, Portuguese (Brazil), Chinese (Simplified), French, or German.

   ![Screenshot of a support ticket with the dropdown menu showing the options for translation highlighted with a dark orange outline.](/assets/images/help/support/support-ticket-translation-options.png)



## Viewing your archived support tickets

You can only view archived tickets for an enterprise account. Archived tickets are retained for up to three years.

1. Navigate to the [GitHub Support Portal](https://support.github.com/).
1. In the header, click **My Tickets**.

1. Select the **Account** dropdown menu and click the name of the enterprise account.

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}
1. Under the "My tickets" table, click **View archived tickets**.



## Updating support tickets

1. Navigate to the [GitHub Support Portal](https://support.github.com/).
1. In the header, click **My Tickets**.


1. Optionally, to view tickets associated with an organization or enterprise account, select the **Account** dropdown menu and click the name of the organization or enterprise account.

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

1. In the list of tickets, click the subject of the ticket you want to view.
![Screenshot showing a list of support tickets. A ticket's subject, "Can't access my private repository," is highlighted in orange.](/assets/images/help/support/my-tickets-list.png)

1. Optionally, if the issue is resolved, under the text box, click **Close ticket**.
1. To respond to GitHub Support and add a new comment to the ticket, type your response in the text box.
![Screenshot of the "Add a comment" text field, highlighted in dark orange.](/assets/images/help/support/new-comment-field.png)
1. To add your comment to the ticket, under the text box, click **Comment**.



## Collaborating on support tickets

You can collaborate with your colleagues on support tickets using the support portal. Owners, billing managers, and other enterprise members with support entitlements can view tickets associated with an enterprise account or an organization managed by an enterprise account. For more information, see [Managing Support Entitlements For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

You can also comment on tickets opened by someone else and associated with your enterprise account. To comment on a ticket associated with your enterprise account that was opened by another user, one of two conditions must be met:

* An email address associated with your GitHub account is copied on the ticket
* Your enterprise on GitHub Enterprise Cloud has a verified domain and the person who opened the ticket selected their verified-domain email

For more information about verifying a domain, see [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) and [Verifying Or Approving A Domain For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).


## Requesting a callback

If your account includes GitHub Premium Support, you can request a callback for urgent or high priority tickets. From the ticket, click **Request a callback from GitHub Support**.

> [!NOTE]
> Callbacks are not available for security-related tickets, such as incident notifications or account compromise investigations. These tickets are handled exclusively in writing through support tickets.

## Requesting an escalation

You can request to escalate a ticket if it was opened at a lower priority but the issue has become more urgent{% ifversion ghec %} if your account includes GitHub Premium Support. From the ticket, click **Request an escalation**. For more information about requesting an escalation, see [About GitHub Premium Support](https://docs.github.com/en/support/learning-about-github-support/about-github-premium-support#assigning-a-priority-to-a-support-ticket).

{% endif %}

## Further reading

* [About GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-github-support)
