# Deleting an organization account

## About deletion of your organization account



> [!TIP]
> If you want to cancel your paid subscription, you can [downgrade your organization to GitHub Free](/billing/how-tos/manage-plan-and-licenses/downgrade-plan) instead of deleting the organization and its content.


Deleting your organization account permanently removes all repositories, forks of private repositories, wikis, issues, pull requests, and project or organization pages. **This action is irreversible.**

Billing for the organization will end. {% ifversion ghec %}If the organization is part of an enterprise account, billing will stop through the enterprise agreement. **Upon deletion, the organization name will not be available to use for another organization or user account for 90 days.** After the 90 days pass, the organization name will automatically become available for use on a new user or organization account.

> [!TIP]
> If you would like to make your organization name available for reuse immediately, rename your organization instead of deleting it. For more information, see [Renaming An Organization](https://docs.github.com/en/organizations/managing-organization-settings/renaming-an-organization).

{% endif %}



If the account namespace includes any public repositories that contain an action listed on GitHub Marketplace, or that had more than 100 clones or more than 100 uses of GitHub Actions in the week prior to deletion, GitHub permanently retires the owner name and repository name combination (`OWNER/REPOSITORY-NAME`) when you delete your account.




If the account namespace includes any packages or container images stored in a GitHub Packages registry, GitHub deletes the packages and container images when you delete your account. By deleting your account, you may break projects that depend on these packages and images.


If the account namespace includes any public container images with more than 5,000 downloads, the full name of these container images (`NAMESPACE/IMAGE-NAME`) is permanently retired when you delete the account to ensure the container image name cannot be reused in the future.



You can also archive an organization, instead of deleting it. Archiving an organization will make it read-only. For more information, see [Archiving An Organization](https://docs.github.com/en/organizations/managing-organization-settings/archiving-an-organization).

## Backing up your organization content

 After you delete an organization, GitHub **cannot restore your content**. Therefore, before you delete your organization, make sure you have a copy of all repositories, wikis, issues, and projects from the account. See [Backing Up A Repository](https://docs.github.com/en/repositories/archiving-a-github-repository/backing-up-a-repository).



> [!NOTE]
> If necessary, a site administrator for {% ifversion ghes %}your GitHub Enterprise Server instance may be able to partially restore a deleted organization. For more information, see [Restoring A Deleted Organization](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/restoring-a-deleted-organization).

{% endif %}

## Deleting your organization account

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Danger zone" section, click **Delete this organization**.
1. Read the warning. If you want to proceed, type the organization's name, then click **Cancel plan and delete the organization**.
