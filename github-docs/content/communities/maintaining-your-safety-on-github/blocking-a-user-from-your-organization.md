# Blocking a user from your organization

You can block non-members from within your organization's settings or from a specific comment made by a user. When you block a user in a comment, you can choose to send the user a notification explaining that they were blocked and why. Otherwise, the user is not directly notified that you've blocked them. Blocked users can still delete their existing content.

When you block a user, you can choose to block them indefinitely or for a specific amount of time. If you block someone for a specific amount of time, they are automatically unblocked after the chosen time expires. If you block someone indefinitely, you can unblock them manually at any time. For more information, see [Unblocking A User From Your Organization](https://docs.github.com/en/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).


> [!TIP]
> If you're blocking a user because of a heated conversation, consider locking the conversation so only collaborators can comment. For more information, see [Locking Conversations](https://docs.github.com/en/communities/moderating-comments-and-conversations/locking-conversations).

At the time that you block a user from your organization:
* The user stops watching your organization's repositories
* The user's stars and issue assignments are removed from your repositories
* The user's votes on discussions or comments in your organization's repositories are deleted
* The user is removed as a collaborator on your organization's repositories
* The user's contributions to your organization's repositories are no longer counted as contributions for them
* Any pending repository or organization invitations to the blocked user are canceled

After you've blocked a user from your organization, they cannot:
* Cross-reference your organization's repositories in comments
* Fork, watch, pin, or star your organization's repositories

In your organization's repositories, blocked users also cannot:
* Open issues
* Send, close, or merge pull requests
* Comment on issues, pull requests, or commits
* Add or edit wiki pages

## Blocking a user in a comment

1. Navigate to the comment whose author you would like to block.
1. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="Show options" %}, then click **Block user**.

   ![Screenshot of a pull request comment by octo-user. Below an icon of three dots, a dropdown menu is expanded, and "Block user" is outlined in orange.](/assets/images/help/repository/comment-menu-block-user.png)

1. If you'd like to set a time limit for the block, select the **Block user** dropdown menu, and click the amount of time you'd like to block the user.
1. If you'd like to hide all of the comments the user has made in the organization, select **Hide this user's comments** and choose a reason.
1. If you'd like to notify the user why they're being blocked, select **Send a notification to this user**.
1. To block the user, click **Block user from organization** or **Block user from organization and send message**.

## Blocking a user in the organization settings



> [!WARNING]
> To completely block a user when your enterprise or organization enforces SAML single sign-on (SSO) through an identity provider (IdP), in addition to blocking the user on GitHub, you should also **remove the user's assignment to the GitHub application in your IdP**.
>
> Not revoking access in your IdP configuration means the user could potentially regain access to the enterprise or organization via SSO.



1. To block an organization member, first [remove the user](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization) from the organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, select **{% octicon "report" aria-hidden="true" aria-label="report" %} Moderation**, then click **Blocked users**.

1. Under "Block a user", in the text field, type the username of the user you'd like to block.
1. If you'd like to set a time limit for the block, next to the text field, select the **Block options** dropdown menu, and click the amount of time you'd like to block the user.
1. Click **Block user**.
1. Optionally, to add a note to describe why a user was blocked, click **Add Note**. The note will be visible to the owners and moderators of the organization.

## Blocking a user on a discussion

1. Navigate to the discussion whose author you would like to block.
1. In the upper-right corner of the comment, click {% octicon "kebab-horizontal" aria-label="Show options" %}, then click **Block user**.

   ![Screenshot of a pull request comment by octo-user. Below an icon of three dots, a dropdown menu is expanded, and "Block user" is outlined in orange.](/assets/images/help/repository/comment-menu-block-user.png)

1. If you'd like to set a time limit for the block, select the **Block user** dropdown menu, and click the amount of time you'd like to block the user.
1. If you'd like to hide all of the comments the user has made in the organization, select **Hide this user's comments** and choose a reason.
1. If you'd like to delete just the discussion you're viewing, select **Delete this discussion**.
1. If you'd like to delete all of the discussions the user has made in the organization, select **Delete all of USER's discussions in ORGANIZATION**.
1. Click **Block user from organization**.

## Further reading

* [Viewing Users Who Are Blocked From Your Organization](https://docs.github.com/en/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)
* [Unblocking A User From Your Organization](https://docs.github.com/en/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)
* [Blocking A User From Your Personal Account](https://docs.github.com/en/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)
* [Unblocking A User From Your Personal Account](https://docs.github.com/en/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)
* [Reporting Abuse Or Spam](https://docs.github.com/en/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
