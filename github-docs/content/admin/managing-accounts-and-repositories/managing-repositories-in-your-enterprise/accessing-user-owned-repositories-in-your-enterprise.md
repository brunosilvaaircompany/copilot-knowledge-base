# Accessing user-owned repositories in your enterprise

## About temporary access to user-owned repositories

If your enterprise uses Enterprise Managed Users, and you've allowed users to create repositories owned by their user accounts, you can temporarily access any user-owned repository within your enterprise.

When you temporarily access a repository, you get admin access to the repository for two hours. You can take all the same actions as the repository owner, including editing the repository, changing the repository's settings, transferring the repository, and deleting the repository. You can also use the temporary access to transfer repositories that are owned by suspended user accounts.

The repository owner will receive an email informing them that you have enabled temporary access to the repository, and a `repo.temporary_access_granted` event will be added to the audit log for your enterprise and the user's security log.

## Temporarily accessing a repository


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. In the "Repository creation" section, under "Block the creation of user namespace repositories," click **View user namespace repositories in your enterprise**.

   ![Screenshot of a "Repository creation" section. A link labeled with an eye icon and "View user namespace repositories in your enterprise" is outlined.](/assets/images/help/business-accounts/view-user-namespace-repos.png)

1. To the right of the repository you want to access, select the {% octicon "kebab-horizontal" aria-label="Access repository" %} dropdown menu, then click **Enable temporary access**.

   ![Screenshot of the list of user namespace repositories. To the right of a repository, a kebab icon is outlined in dark orange.](/assets/images/help/business-accounts/user-namespace-repo-kebab.png)
1. Read the warnings, then click **Yes, enable temporary access**.
