# Locking conversations

It's appropriate to lock a conversation when the entire conversation is not constructive or violates your community's code of conduct or GitHub's [Community Guidelines](/free-pro-team@latest/site-policy/github-terms/github-community-guidelines). When you lock a conversation, you can also specify a reason, which is publicly visible.

Locking a conversation creates a timeline event that is visible to anyone with read access to the repository. However, the username of the person who locked the conversation is only visible to the following group of people:

* People with write access to the repository.
* Collaborators added to the repository.
* Organization members with read access where the repository is owned by an organization.

For anyone not meeting this criteria the locking actor will be anonymized.
![Screenshot of a timeline event, which says "octo-org locked as too heated and limited conversation to collaborators 2 minutes ago."](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

While a conversation is locked, only [people with write access](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) and [repository owners and collaborators](/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository#collaborator-access-for-a-repository-owned-by-a-personal-account) can add, hide, and delete comments. Reactions and votes in a locked conversation are disabled for all users.

To search for locked conversations in a repository that is not archived, you can use the search qualifiers `is:locked` and `archived:false`. Conversations are automatically locked in archived repositories. For more information, see [Searching Issues And Pull Requests](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked).

1. Optionally, write a comment explaining why you're locking the conversation.
1. In the right sidebar of the issue or pull request, or above the comment box on the commit page, click **Lock conversation**.
1. Optionally, select the **Choose a reason** dropdown menu, then click a reason for locking the conversation.
1. Read the information about locking conversations and click **Lock conversation on this issue**, **Lock conversation on this pull request**, or **Lock conversation on this commit**.
1. When you're ready to unlock the conversation, in the right sidebar of the issue or pull request, or above the comment box on the commit page, click **Unlock conversation**.

## Further reading

* [Setting Up Your Project For Healthy Contributions](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions)
* [Using Templates To Encourage Useful Issues And Pull Requests](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
* [Managing Disruptive Comments](https://docs.github.com/en/communities/moderating-comments-and-conversations/managing-disruptive-comments)
* [Maintaining Your Safety On GitHub](https://docs.github.com/en/communities/maintaining-your-safety-on-github)
* [Reporting Abuse Or Spam](https://docs.github.com/en/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
