# About email notifications for pushes to your repository

> [!NOTE]
> You'll only receive email notifications if outbound email support is enabled on your GitHub Enterprise Server instance. For more information, contact your site administrator.




Each email notification for a push to a repository lists the new commits and links to a diff containing just those commits. In the email notification you'll see:

* The name of the repository where the commit was made
* The branch a commit was made in
* The SHA1 of the commit, including a link to the diff in GitHub
* The author of the commit
* The date when the commit was made
* The files that were changed as part of the commit
* The commit message

You can filter email notifications you receive for pushes to a repository. For more information, see [Configuring Notifications](https://docs.github.com/en/subscriptions-and-notifications/get-started/configuring-notifications).



>[!NOTE] Notifications for pushes to your repository will bypass restrictions for email notifications to verified domains configured in your enterprise account or organization.



## Enabling email notifications for pushes to your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Integrations" section of the sidebar, click **{% octicon "mail" aria-hidden="true" aria-label="mail" %} Email notifications**.

1. In the "Address" field, type up to two email addresses, separated by whitespace, where you'd like notifications to be sent. If you'd like to send emails to more than two accounts, set one of the email addresses to a group email address.
1. If you operate your own server, you can verify the integrity of emails via the "Approved header." The "Approved header" is a token or secret that you type in this field, and that is sent with the email. If the `Approved` header of an email matches the token, you can trust that the email is from GitHub.
1. Click **Setup notifications**.

## Further reading

* [About Notifications](https://docs.github.com/en/subscriptions-and-notifications/concepts/about-notifications)
