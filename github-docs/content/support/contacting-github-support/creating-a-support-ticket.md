# Creating a support ticket

## Support for discontinued GitHub Enterprise Server releases

**GitHub Support does not provide support for discontinued GitHub Enterprise Server releases.** If you're running a discontinued release, please upgrade to a supported version before opening a support ticket so we can help you effectively. See [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).


## About support tickets


If your account uses a paid GitHub plan, Copilot Business, or Copilot Enterprise, you can directly contact GitHub Support.

If your account uses GitHub Free, you can speak to GitHub users and staff on the [GitHub Community discussions](https://github.com/orgs/community/discussions) for most issues, and you can contact GitHub Support to report account, security, and abuse issues.


To share feedback with GitHub, you can use the GitHub Community discussions. For more information, see [Sharing Feedback With GitHub](https://docs.github.com/en/support/sharing-feedback-with-github).





To open, view, and comment on support tickets associated with an enterprise account, you must have support entitlements for the enterprise. Enterprise owners and billing managers automatically have a support entitlement, and enterprise owners can add support entitlements to enterprise members. For more information, see [Managing Support Entitlements For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

> [!NOTE]
> Any organization member can create tickets associated with an individual organization that is owned by an enterprise account. Support entitlements are only required to create tickets associated with the enterprise account itself.






You can create your ticket using the GitHub Support portal or, if you would like to include diagnostics with your support ticket, you can use the GitHub Enterprise Server Management Console.




> [!NOTE]
> If you have previously contacted GitHub Enterprise Support through the GitHub Enterprise Support portal, which is closing down, you should use the [GitHub Support portal](https://support.github.com) to open new tickets.




After you create your ticket, you can view your ticket and the responses from GitHub Support on the [GitHub Support portal](https://support.github.com/). For more information, see [Viewing And Updating Support Tickets](https://docs.github.com/en/support/contacting-github-support/viewing-and-updating-support-tickets).



## Prerequisites

{% ifversion ghec %}If you use an enterprise account, there are some steps you should follow before you start using the GitHub Support portal. For more information, see [Getting Your Enterprise Started With The GitHub Support Portal](https://docs.github.com/en/support/contacting-github-support/getting-your-enterprise-started-with-the-github-support-portal).
{% endif %}

## What to include in your support ticket

GitHub Support does not have access to any private or internal GitHub resources. Providing GitHub Support with everything they need to understand, locate, and reproduce an issue will allow for a faster resolution and less back-and-forth between yourself and the support team. To ensure GitHub Support can assist you, consider the following points when you write your ticket:

* Obtain information that can help GitHub Support track, prioritize, reproduce, or investigate the issue.
* Include full URLs, repository names, and usernames wherever possible.
* Reproduce the issue if applicable and be prepared to share the steps.
* Be prepared to provide a full description of the issue and expected results.
* Copy exact wording of all error messages related to your issue.
* Determine if there is an existing ticket number in any ongoing communications with GitHub Support.
* Include relevant logs and attach any screenshots that demonstrate the issue.
  * When providing screenshots, ensure the full URL is visible in the address bar. This helps GitHub Support locate the relevant information more quickly. Be sure to redact any sensitive information.



## Choosing a contact person

Especially for tickets with Urgent priority, the person contacting GitHub Support should:

* Be knowledgeable in your internal systems, tools, policies, and practices.
* Be a proficient user of GitHub Enterprise Server.
* Have full access and permissions to any services that are required to troubleshoot the issue.
* Be authorized to make the recommended changes to your network and any applicable products.



## Creating a support ticket using the GitHub Support portal

Before you submit a ticket, you have the option of using Copilot in GitHub Support to receive an immediate response to your question. If Copilot in GitHub Support is unable to resolve your issue, you can continue submitting your ticket. For more information, see [About Copilot In GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-copilot-in-github-support).

> [!IMPORTANT]
> If your enterprise uses data residency, you must sign in with your GHE.com account when creating a support ticket about your data-resident enterprise. Otherwise, you will be asked to open a new ticket using your GHE.com account.

1. Navigate to the [GitHub Support portal](https://support.github.com/) and choose one of the following options:

   * To sign in with your GitHub account, click **Sign in with GitHub**.
   * If your enterprise uses data residency (you will use a domain like `octocorp.ghe.com`):
      1. In the sign-in dialog, click **Sign in to your .ghe account**.
      1. Enter your enterprise or tenant name (provided by your administrator) and continue.
      1. Complete the SAML authentication process as prompted. This will sign you in to your .ghe enterprise-managed account.
   * To sign up for GitHub, click **Sign up for GitHub**.
   * If you can't sign in or sign up, click **Can't sign in?** and fill out the form. You will be guided through an email verification process. You will need to upload your GitHub Enterprise license. For more information, see [Download Your License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/download-your-license).


1. At the top of the page, under "How can we help?", choose a topic or click **open a support ticket**.

   > [!NOTE]
   > You will only see the link to open a support ticket if your account uses a paid GitHub product or you are a member of an organization that uses a paid product. If you don't see the link, you can speak to GitHub users and staff on the [GitHub Community discussions](https://github.com/orgs/community/discussions) for most issues, and you can still contact GitHub Support to report account, security, and abuse issues.



1. Select the **Select personal account, enterprise account or organization** dropdown menu and click the name of the account your support ticket is regarding.

   > [!NOTE]
   > * For Premium plan, Premium Plus plan, or Mission Critical Services for GitHub plan support, you need to choose an enterprise account with a GitHub Premium Support plan. If you don't see an Enterprises section in the dropdown menu, you're not entitled to open support tickets on behalf of an enterprise account. For more information, see [About GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-github-support#about-support-entitlement)
   > * To see a list of your enterprise accounts with a GitHub Premium Support plan, you must be signed into the GitHub Support portal. For more information, see [Getting Your Enterprise Started With The GitHub Support Portal](https://docs.github.com/en/support/contacting-github-support/getting-your-enterprise-started-with-the-github-support-portal).
   > * If there is a mismatch between the account you select and the identity or topic you are discussing, GitHub Support may instruct or require you to open a new ticket linked to the correct account.


1. Select the **From** dropdown menu and click the email address you'd like GitHub Support to contact.



   Adding CC emails to your ticket:
      - An admin or a support entitled user can add up to 10 additional email addresses to a ticket on CC directly from the ticket form.
     - To add more email addresses, loop them in directly via email.

   CC recipients’ abilities:
     - Those on CC can read every conversation and attachment related to the ticket.
     - They can also send a reply to the ticket.
  
   Support Portal visibility:
     - CCing an email address does not automatically display the ticket in the support portal for that email address.

   Admins, support entitled users:
      - Admins and support entitled users can view tickets created by members of their enterprise or organization on the portal. However, they still need to be CC’d on such tickets to be able to comment on them.



1. Select the **Product** dropdown menu and click **GitHub Enterprise Server (self-hosted)**.


1. If prompted, select the **Server installation** dropdown menu and click the installation your support ticket is regarding. If the installation is not listed, click **Other**.


1. Select the **Release series** dropdown menu and click the release your GitHub Enterprise Server instance is running.


1. Select the **Type of Issue** dropdown menu and click the appropriate circumstance.


1. Optionally, if your account includes GitHub Premium Support and your ticket is about a system failure or a critical outage currently blocking business operations in production, you can request a callback in English. Select **Request a callback from GitHub Support**, select the country code dropdown menu to choose your country, and enter your phone number.

   > [!NOTE]
   > You will only receive a callback if required for ticket resolution.


1. Under "Subject", type a descriptive title for the issue you're having.
1. Under "How can we help", provide any additional information that will help the Support team troubleshoot the problem. You can use markdown to format your message.

   Helpful information may include:
    * Steps to reproduce the issue
    * Any special circumstances surrounding the discovery of the issue (for example, the first occurrence or occurrence after a specific event, frequency of occurrence, business impact of the problem, and suggested urgency)
    * Exact wording of error messages

   You can attach files up to 50MB. For larger attachments, such as support bundles, see [Providing Data To GitHub Support](https://docs.github.com/en/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

      > [!WARNING]
      > When you upload an image or video to a pull request or issue comment, or upload a file to a ticket in the GitHub Support portal, anyone can view the anonymized URL without authentication, even if the pull request or issue is in a private repository, or if private mode is enabled. To keep sensitive media files private, serve them from a private network or server that requires authentication. For more information on anonymized URLs see [About Anonymized Urls](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-anonymized-urls).


1. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.

1. Click **Send request**.




## Creating a ticket using the Management Console

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. If you have created multiple Management Console user accounts, select **Root site admin** or **Management Console user**. For more information about Management Console user accounts see, [Managing Access To The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/managing-access-to-the-management-console).
1. Type your Management Console credentials. Then click **Continue**.

1. In the top navigation bar, click **Support**.

   ![Screenshot of the header of the Management Console. A tab, labeled "Support", is highlighted with an orange outline.](/assets/images/enterprise/management-console/support-link.png)


1. Choose one of the following options:

   * To sign in with your GitHub account, click **Sign in with GitHub**.
   * To sign up for GitHub, click **Sign up for GitHub**.
   * If you can't sign in or sign up, click **Can't sign in?** and fill out the form. You will be guided through an email verification process. You will need to upload your GitHub Enterprise license. For more information, see [Download Your License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/download-your-license).

1. If you'd like to include diagnostics with your support ticket, Under "Diagnostics", click **Download diagnostic info** and save the file locally. You'll attach this file to your support ticket later.
1. To complete your ticket and display the GitHub Support portal, under "Open Support Request", click **New support request**.

1. At the top of the page, under "How can we help?", choose a topic or click **open a support ticket**.

   > [!NOTE]
   > You will only see the link to open a support ticket if your account uses a paid GitHub product or you are a member of an organization that uses a paid product. If you don't see the link, you can speak to GitHub users and staff on the [GitHub Community discussions](https://github.com/orgs/community/discussions) for most issues, and you can still contact GitHub Support to report account, security, and abuse issues.



1. Select the **Select personal account, enterprise account or organization** dropdown menu and click the name of the account your support ticket is regarding.

   > [!NOTE]
   > * For Premium plan, Premium Plus plan, or Mission Critical Services for GitHub plan support, you need to choose an enterprise account with a GitHub Premium Support plan. If you don't see an Enterprises section in the dropdown menu, you're not entitled to open support tickets on behalf of an enterprise account. For more information, see [About GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-github-support#about-support-entitlement)
   > * To see a list of your enterprise accounts with a GitHub Premium Support plan, you must be signed into the GitHub Support portal. For more information, see [Getting Your Enterprise Started With The GitHub Support Portal](https://docs.github.com/en/support/contacting-github-support/getting-your-enterprise-started-with-the-github-support-portal).
   > * If there is a mismatch between the account you select and the identity or topic you are discussing, GitHub Support may instruct or require you to open a new ticket linked to the correct account.


1. Select the **From** dropdown menu and click the email address you'd like GitHub Support to contact.



   Adding CC emails to your ticket:
      - An admin or a support entitled user can add up to 10 additional email addresses to a ticket on CC directly from the ticket form.
     - To add more email addresses, loop them in directly via email.

   CC recipients’ abilities:
     - Those on CC can read every conversation and attachment related to the ticket.
     - They can also send a reply to the ticket.
  
   Support Portal visibility:
     - CCing an email address does not automatically display the ticket in the support portal for that email address.

   Admins, support entitled users:
      - Admins and support entitled users can view tickets created by members of their enterprise or organization on the portal. However, they still need to be CC’d on such tickets to be able to comment on them.



1. Select the **Product** dropdown menu and click {% ifversion ghes %}**GitHub Enterprise Server (self-hosted)**.


1. If prompted, select the **Server installation** dropdown menu and click the installation your support ticket is regarding. If the installation is not listed, click **Other**.


1. Select the **Release series** dropdown menu and click the release your GitHub Enterprise Server instance is running.


1. Select the **Type of Issue** dropdown menu and click the appropriate circumstance.


1. Optionally, if your account includes GitHub Premium Support and your ticket is about a system failure or a critical outage currently blocking business operations in production, you can request a callback in English. Select **Request a callback from GitHub Support**, select the country code dropdown menu to choose your country, and enter your phone number.

   > [!NOTE]
   > You will only receive a callback if required for ticket resolution.


1. Under "Subject", type a descriptive title for the issue you're having.
1. Under "How can we help", provide any additional information that will help the Support team troubleshoot the problem. You can use markdown to format your message.

   Helpful information may include:
    * Steps to reproduce the issue
    * Any special circumstances surrounding the discovery of the issue (for example, the first occurrence or occurrence after a specific event, frequency of occurrence, business impact of the problem, and suggested urgency)
    * Exact wording of error messages

   You can attach files up to 50MB. For larger attachments, such as support bundles, see [Providing Data To GitHub Support](https://docs.github.com/en/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

      > [!WARNING]
      > When you upload an image or video to a pull request or issue comment, or upload a file to a ticket in the GitHub Support portal, anyone can view the anonymized URL without authentication, even if the pull request or issue is in a private repository, or if private mode is enabled. To keep sensitive media files private, serve them from a private network or server that requires authentication. For more information on anonymized URLs see [About Anonymized Urls](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-anonymized-urls).


1. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.

1. Click **Send request**.


{% endif %}

## Further reading

* [About GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-github-support)
