# Customizing user messages for your enterprise

## About user messages


You can create global announcement banners, which appear at the top of every page.

You can use Markdown to format your message. For more information, see [About Writing And Formatting On GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github).





> [!NOTE]
> If you are using SAML for authentication, the sign in page is presented by your identity provider and is not customizable via GitHub Enterprise Server.

You can use Markdown to format your message. For more information, see [About Writing And Formatting On GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github).


## Creating a custom sign in message


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Messages{% elsif ghec %}Announcement**.

1. To the right of "Sign in page", click **Add message** or **Edit message**.

   ![Screenshot of the "Sign in page" section of the "Messages" settings. A button, labeled with a plus icon and "Add message", is outlined.](/assets/images/enterprise/site-admin-settings/edit-message.png)
1. Under **Sign in message**, type the message you'd like users to see.
1. Optionally, to preview your message, click **Preview**.
1. Click **Save changes**.






## Creating a custom sign out message


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Messages{% elsif ghec %}Announcement**.

1. To the right of "Sign out page", click **Add message** or **Edit message**.

   ![Screenshot of the "Sign out page" section of the "Messages" settings. A button, labeled with a plus icon and "Add message," is outlined.](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
1. Under **Sign out message**, type the message you'd like users to see.
1. Optionally, to preview your message, click **Preview**.
1. Click **Save changes**.





## Creating a mandatory message

On GitHub Enterprise Server, you can create a mandatory message that is displayed to all users the first time they sign in after you save the message. The message appears in a pop-up window that the user must dismiss before continuing.

Mandatory messages have a variety of uses.

* Providing onboarding information for new employees
* Telling users how to get help with {% ifversion ghes %}your GitHub Enterprise Server instance
* Ensuring that all users read your terms of service for using your GitHub Enterprise Server instance

If you include Markdown checkboxes in the message, all checkboxes must be selected before the user can dismiss the message. For example, if you include your terms of service in the mandatory message, you can require that each user selects a checkbox to confirm the user has read the terms.

Each time a user sees a mandatory message, an audit log event is created. The event includes the version of the message that the user saw. For more information see [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Messages{% elsif ghec %}Announcement**.

1. To the right of "Mandatory message", click **Add mandatory message**.
1. Under "Mandatory message", in the text box, type your message.
1. Optionally, select **Show updated message to all users even if they dismissed the previous one**.
1. Optionally, to preview your message, click **Preview**.
1. Click **Save changes**.


{% endif %}

## Creating a global announcement banner

You can set a global announcement banner to be displayed to all users at the top of every page within your enterprise, including every page in every organization owned by the enterprise.

You can also create announcement banners at the organization level. For more information, see [Creating An Announcement Banner For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-an-announcement-banner-for-your-organization).


You can also set an announcement banner in the administrative shell using a command line utility or using the API. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-announce) and [Enterprise Admin](https://docs.github.com/en/rest/enterprise-admin#announcements).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Messages{% elsif ghec %}Announcement**.


1. Optionally, to allow each user to dismiss the announcement, select **User dismissible**.

1. Optionally, to allow each user to dismiss the announcement, select **Allow users to dismiss the announcement**.
1. Optionally, to preview your message, click **Preview**.
1. Click **Save changes**.
