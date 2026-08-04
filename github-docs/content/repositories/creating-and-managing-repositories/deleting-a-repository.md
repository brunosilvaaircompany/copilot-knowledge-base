# Deleting a repository

Only members with owner privileges for an organization or admin privileges for a repository can
 delete an organization repository, and these users may be prevented from deleting a repository by an organization or enterprise policy. For more information, see [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).


Deleting a public repository will not delete any forks of the repository.

> [!WARNING]
> * Deleting a repository will **permanently** delete team permissions. This action **cannot** be undone.
> * Deleting a private or internal repository will delete all forks of the repository.

Some deleted repositories can be restored within 90 days of deletion. Your site administrator may be able to restore a deleted repository for you. For more information, see [Restoring A Deleted Repository](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/restoring-a-deleted-repository). 

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. On the "General" settings page (which is selected by default), scroll down to the "Danger Zone" section and click **Delete this repository**.
1. Click **I want to delete this repository**.
1. Read the warnings and click **I have read and understand these effects**.
1. To verify that you're deleting the correct repository, in the text box, type the name of the repository you want to delete.
1. Click **Delete this repository**.
