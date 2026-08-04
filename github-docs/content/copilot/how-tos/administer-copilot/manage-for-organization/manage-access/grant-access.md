# Granting access to GitHub Copilot for members of your organization

## Configuring access to GitHub Copilot in your organization

After a GitHub enterprise owner enables Copilot Enterprise or Copilot Business for an organization, an owner of that organization can grant GitHub Copilot access to members of their organization.

Billing for GitHub Copilot starts when you grant an organization member access, irrespective of when they first use Copilot. If you grant an organization member access midway through a billing cycle, the cost is prorated for the remainder of the cycle. For more information, see [GitHub Copilot Licenses](https://docs.github.com/en/billing/concepts/product-billing/github-copilot-licenses).

## Granting access to GitHub Copilot for all current and future users in your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Access**.

1. If the **Allow this organization to assign seats** button is displayed, click this button.
1. Click **Start adding seats**.
1. To enable GitHub Copilot for all current and future users in your organization, select **Purchase for all members**.
1. In the "Confirm seats purchase for all members" dialog, to confirm that you want to enable GitHub Copilot for all current and future users in your organization, click **Purchase seats**.

## Granting access to GitHub Copilot for specific users in your organization



> [!NOTE] You can automatically enable access for every member of a group in your identity provider (IdP) by synchronizing that group with a GitHub team, then giving that team access to GitHub Copilot. For more information, see [Synchronizing A Team With An Identity Provider Group](https://docs.github.com/en/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Access**.

1. If the **Allow this organization to assign seats** button is displayed, click this button.
1. Click **Start adding seats**.
1. To enable GitHub Copilot for selected teams or users in your organization, select **Purchase for selected members**.
1. In the "Enable Copilot access for users and teams" dialog, click one of the two tabs.

   ![Screenshot of the "enable access for selected members" dialog.](/assets/images/help/copilot/enable-access-for-selected-members.png)

   * Click **Users and teams** to search for and add individual users or teams.

     To search for a user, type their username or full name in the search bar. If you select a user who is not currently a member of your organization, they will be invited to join your organization when you click **Continue to purchase** followed by **Purchase seats**. Outside collaborators will receive a Copilot seat but will not be sent an organization invite.

   * Click **Upload CSV** to add users in bulk by uploading a CSV file.

     To add members in bulk, click **Choose CSV to upload**, and then upload a CSV file including either the username or email address for each member you want to add, separated by a comma. The file can contain a mixture of usernames and email addresses.

     > [!WARNING] When you upload a CSV file, unless you're using Enterprise Managed Users, GitHub Copilot will search all users on GitHub.com for matches. If the CSV includes users who are not members of your organization, they will be invited to join your organization when you click **Continue to purchase** followed by **Purchase seats**. Outside collaborators will receive a Copilot seat but will not be sent an organization invite. This warning does not apply to accounts using Enterprise Managed Users.

     Review the list of users generated from your CSV file. Clear the selection of any users you do not want to add.

1. Click **Continue to purchase**, then click **Purchase seats**.

## Using the API to grant access to GitHub Copilot

You can use GitHub's REST API to grant access to GitHub Copilot for teams, or specific users, in your organization. See [Add teams to the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#add-teams-to-the-copilot-subscription-for-an-organization) and [Add users to the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#add-users-to-the-copilot-subscription-for-an-organization).

GitHub has found that many successful rollouts offer a fully self-service model where developers can claim a license without approval. To learn about options for setting up this process, see [Set Up Self Serve Licenses](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/set-up-self-serve-licenses).


## Further reading

* [GitHub Copilot Trust Center](https://copilot.github.trust.page)
* [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies)
* [Review User Activity Data](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-user-activity-data)
* [Revoke Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/revoke-access)
