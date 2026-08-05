## Overview

GitHub Codespaces are automatically deleted after they have been stopped and have remained inactive for a defined number of days. The retention period for each codespace is set when the codespace is created and does not change. The default retention period is 30 days.


GitHub users can set a personal retention period of less than 30 days for codespaces they create. For more information, see [Configuring Automatic Deletion Of Your Codespaces](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces).

As an organization owner, you may want to configure constraints on the maximum retention period for codespaces created for the repositories owned by your organization. This can help you to limit the storage costs associated with codespaces that are stopped and then left unused until they are automatically deleted. For more information about storage charges, see [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces#pricing). You can set a maximum retention period for all, or for specific, repositories owned by your organization.

> [!NOTE]
> Setting a maximum retention policy for a repository prevents people from exempting a codespace from automatic deletion. The "Keep codespace" option will be unavailable for codespaces created for that repository. For more information, see [Configuring Automatic Deletion Of Your Codespaces?Tool=Webui](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces?tool=webui#avoiding-automatic-deletion-of-codespaces).

### Setting organization-wide and repository-specific policies

When you create a policy, you choose whether it applies to all repositories in your organization, or only to specified repositories. If you create an organization-wide policy with a codespace retention constraint, then the retention constraints in any policies that are targeted at specific repositories should be shorter than the restriction configured for the entire organization, or they will have no effect. The shortest retention period - in an organization-wide policy, a policy targeted at specified repositories, or the default retention period in someone's personal settings - is applied.

If you add an organization-wide policy with a retention constraint, you should set the retention period to the longest acceptable period. You can then add separate policies that set the maximum retention to a shorter period for specific repositories in your organization.

> [!NOTE]
> Codespaces policies only apply to codespaces that your organizations pays for. If someone creates a codespace for a repository in your organization at their own expense, then the codespace will not be bound by these policies. For more information, see [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).


## Adding a policy to set a maximum codespace retention period

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 select **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces** then click **Policies**.
1. On the "Codespaces policies" page, click **Create Policy**.
1. Enter a name for your new policy.

1. Click **Add constraint** and choose **Retention period**.
1. Click {% octicon "pencil" aria-label="Edit policy" %} to edit the constraint.
1. Enter the maximum number of days codespaces can remain stopped before they are automatically deleted, then click **Save**.

   ![Screenshot of a dropdown with a field labeled "Maximum value" set to 8 days. Below this are "Cancel" and "Save" buttons.](/assets/images/help/codespaces/maximum-days-retention.png)

   > [!NOTE]
   > * A day, in this context, is a 24-hour period, beginning at the time of day when the codespace was stopped.
   > * The valid range is 0-30 days.
   > * Setting the period to `0` will result in codespaces being immediately deleted when they are stopped, or when they timeout due to inactivity.

1. By default the policy is set to apply to all repositories, if you want it to apply only to some of the repositories in your organization, click **All repositories** and then click **Selected repositories** in the dropdown menu.

   ![Screenshot of the repository selection dropdown, showing the options "All repositories" and "Selected repositories."](/assets/images/help/codespaces/selected-repositories.png)

   > [!NOTE]
   > If you're adding a constraint to an existing policy that already contains the "Maximum codespaces per user" constraint, you won't be able to apply the policy to selected repositories. This is because the "Maximum codespaces per user" constraint always applies to all repositories in the organization.

   With **Selected repositories** selected:
   1. Click {% octicon "gear" aria-label="The settings icon" %}.

      ![Screenshot of the settings icon (a gear symbol) to the left of a button labeled "Selected repositories."](/assets/images/help/codespaces/policy-edit.png)

   1. Select the repositories you want this policy to apply to.
   1. At the bottom of the repository list, click **Select repositories**.

      ![Screenshot of a list of repositories, each with a checkbox. Three repositories are selected.](/assets/images/help/codespaces/policy-select-repos.png)

1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see:
   * [Restricting Access To Machine Types](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
   * [Restricting The Number Of Organization Billed Codespaces A User Can Create](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-number-of-organization-billed-codespaces-a-user-can-create)
   * [Restricting The Base Image For Codespaces](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [Restricting The Visibility Of Forwarded Ports](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [Restricting The Idle Timeout Period](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)

1. After you've finished adding constraints to your policy, click **Save**.

The policy will be applied to all new codespaces that are billable to your organization. The retention period constraint is only applied on codespace creation.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

The retention period constraint is only applied to codespaces when they are created. Editing a policy has no effect on existing codespaces.

1. Display the "Codespaces policies" page. For more information, see [Adding a policy to set a maximum codespace retention period](#adding-a-policy-to-set-a-maximum-codespace-retention-period).
1. Click the name of the policy you want to edit.
1. Beside the "Retention period" constraint, click {% octicon "pencil" aria-label="Edit policy" %}.
1. Make the required changes then click **Save**.

## Deleting a policy

You can delete a policy at any time. Deleting a policy has no effect on existing codespaces.

1. Display the "Codespaces policies" page. For more information, see [Adding a policy to set a maximum codespace retention period](#adding-a-policy-to-set-a-maximum-codespace-retention-period).
1. Click the delete button to the right of the policy you want to delete.
1. Click {% octicon "trash" aria-label="Delete YOUR-POLICY-NAME" %} to the right of the policy you want to delete.

   ![Screenshot of a policy with the delete button (a trash can icon) highlighted with a dark orange outline.](/assets/images/help/codespaces/policy-delete.png)
