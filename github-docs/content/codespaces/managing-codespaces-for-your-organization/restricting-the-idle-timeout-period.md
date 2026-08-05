## Overview

By default, codespaces time out after 30 minutes of inactivity. When a codespace times out it is stopped and will no longer incur charges for compute usage.

The personal settings of a GitHub user allow them to define their own timeout period for codespaces they create. This may be longer than the default 30-minute period. For more information, see [Setting Your Timeout Period For GitHub Codespaces](https://docs.github.com/en/codespaces/setting-your-user-preferences/setting-your-timeout-period-for-github-codespaces).

As an organization owner, you may want to configure constraints on the maximum idle timeout period for codespaces created for repositories owned by your organization. This can help you to limit costs associated with codespaces that are left to timeout after long periods of inactivity. You can set a maximum timeout for the codespaces for all repositories owned by your organization, or for the codespaces of specific repositories.

> [!NOTE]
> Maximum idle timeout constraints only apply to codespaces that are owned by your organization.

For more information about pricing for GitHub Codespaces compute usage, see [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces#pricing).

### Inactivity defined

In the context of the Codespaces idle timeout, inactivity is defined as the absence of activity indicative of a user's presence. Personal interaction with a codespace, such as typing or using the mouse, resets the idle timeout period. Terminal activity, either input or output, also resets the idle timeout period. For example, if you publish a web app on a port from a codespace and page requests generate output in a terminal on the codespace, then each time terminal output occurs the timeout will be reset. However, if you share a port, and then don't interact with the codespace, and no terminal output is generated, the codespace will time out after the configured period.


### Behavior when you set a maximum idle timeout constraint

If someone sets the default idle timeout to 90 minutes in their personal settings and they then start a codespace for a repository that has a maximum idle timeout constraint of 60 minutes, the codespace will time out after 60 minutes of inactivity. When codespace creation completes, a message explaining this will be displayed:

> Idle timeout for this codespace is set to 60 minutes in compliance with your organization’s policy.

### Setting organization-wide and repository-specific policies

When you create a policy, you choose whether it applies to all repositories in your organization, or only to specified repositories. If you create an organization-wide policy with a timeout constraint, then the timeout constraints in any policies that are targeted at specific repositories must fall within the restriction configured for the entire organization. The shortest timeout period - in an organization-wide policy, a policy targeted at specified repositories, or in someone's personal settings - is applied.

If you add an organization-wide policy with a timeout constraint, you should set the timeout to the longest acceptable period. You can then add separate policies that set the maximum timeout to a shorter period for specific repositories in your organization.

> [!NOTE]
> Codespaces policies only apply to codespaces that your organizations pays for. If someone creates a codespace for a repository in your organization at their own expense, then the codespace will not be bound by these policies. For more information, see [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).


## Adding a policy to set a maximum idle timeout period

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 select **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces** then click **Policies**.
1. On the "Codespaces policies" page, click **Create Policy**.
1. Enter a name for your new policy.

1. Click **Add constraint** and choose **Maximum idle timeout**.
1. Click {% octicon "pencil" aria-label="Edit policy" %} to edit the constraint.
1. Enter the maximum number of minutes codespaces can remain inactive before they time out, then click **Save**.

   ![Screenshot of a dropdown with a field labeled "Maximum value" set to 60 minutes. To the right of the field is a "Save" button.](/assets/images/help/codespaces/maximum-minutes-timeout.png)

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
   * [Restricting The Retention Period For Codespaces](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)

1. After you've finished adding constraints to your policy, click **Save**.

The policy will be applied to all new codespaces that are billable to your organization. The timeout constraint is also applied to existing codespaces the next time they are started.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

1. Display the "Codespaces policies" page. For more information, see [Adding a policy to set a maximum idle timeout period](#adding-a-policy-to-set-a-maximum-idle-timeout-period).
1. Click the name of the policy you want to edit.
1. Beside the "Maximum idle timeout" constraint, click {% octicon "pencil" aria-label="Edit policy" %}.
1. Make the required changes then click **Save**.

## Deleting a policy

1. Display the "Codespaces policies" page. For more information, see [Adding a policy to set a maximum idle timeout period](#adding-a-policy-to-set-a-maximum-idle-timeout-period).
1. Click {% octicon "trash" aria-label="Delete YOUR-POLICY-NAME" %} to the right of the policy you want to delete.

   ![Screenshot of a policy with the delete button (a trash can icon) highlighted with a dark orange outline.](/assets/images/help/codespaces/policy-delete.png)
