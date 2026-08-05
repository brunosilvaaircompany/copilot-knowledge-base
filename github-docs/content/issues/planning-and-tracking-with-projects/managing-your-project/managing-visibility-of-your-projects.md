# Managing visibility of your projects

## About project visibility

Project visibility can be set to private, internal when using an enterprise with managed users, or public if your enterprise does not use managed user accounts. For public projects, everyone on the internet can view the project. For private projects, only users granted at least read access can see the project.  For internal projects, other members of your enterprise can see the project.

Only the project visibility is affected; to view an item on the project, someone must have the required permissions for the repository that the item belongs to. Only people with access to a private repository will be able to view project items from that private repository.

![Screenshot showing a project using a table layout. One of the items is marked with a padlock icon, indicating it's hidden, and outlined in orange.](/assets/images/help/projects-v2/hidden-items.png)

Project admins and organization owners can control project visibility. Organization owners and enterprise owners can restrict the ability to change project visibility to just organization owners.

In private and internal organization-owned projects, the avatars of users who are current making updates to the project are displayed in the project UI.

Project admins can also manage write and admin access to their project and control read access for individual users. For more information, see [Managing Access To Your Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects).

## Changing project visibility

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
  
1. In the menu, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings** to access the project settings.

1. Next to **Visibility** in the "Danger zone", select the visibility.
   * If using an enterprise with managed users, choose between **Private** and **Internal**.
   * If your enterprise does not use managed user accounts, choose between **Private** and **Public**.

## Further reading

* [Allowing project visibility changes in your organization](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
