# Completing your live migration from GitHub Enterprise Server to GHE.com

>[!NOTE] Enterprise Live Migrations is in public preview and subject to change.


After you have run a migration with the `elm` CLI tool, there are some follow-up tasks to complete.

## Restore users' access

Because GitHub Enterprise Server and GHE.com use different provisioning and authentication systems, organization membership is not carried over between platforms. You will need to add users to the organization before you can reattribute activity to them in a migrated repository.

1. If you created a new organization for the migration process, add members to the organization. You can do this manually, but many enterprises manage organization membership from their identity provider (IdP) by syncing enterprise teams with IdP groups.
1. Add organization members to the migrated repositories.

## Reattribute activity to users

After you run a migration with GitHub Enterprise Importer or Enterprise Live Migrations, all user activity in the migrated repository (except Git commits) is attributed to placeholder identities called mannequins.
 For more information, see [Mannequins And User Activity](https://docs.github.com/en/migrations/overview/mannequins-and-user-activity).

Once user accounts have been added to the organization on GHE.com, you can invite users to reclaim a mannequin's activity. You can do this in the browser or, with the GEI extension of the GitHub CLI tool, reclaim mannequins in bulk without the invite process.

### Reclaiming mannequins in the browser

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "arrow-switch" aria-hidden="true" aria-label="arrow-switch" %} Import/Export**.

1. To the right of the mannequin you want to reclaim, click **Reattribute**.
1. In the search field, type the username of the organization member you want to attribute the mannequin's contributions to, then click the member.

   > [!NOTE]
   > You can only send attribution invitations to user accounts that are already members of the organization.

1. Click **Invite**.
By default, the organization member will receive an invitation via email, and the mannequin will not be reclaimed until the member accepts the invitation.



### Reclaiming mannequins in bulk

You can install the GEI extension of the GitHub CLI to reclaim mannequins in bulk. See [Reclaiming Mannequins For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer#reclaiming-mannequins-with-the-gei-extension).

## Reattribute Git activity

Authorship for Git commits is not associated with mannequins and cannot be attributed to GitHub users by reclaiming mannequins. Instead, commit authorship is attributed to user accounts on GitHub based on the email address that was used to author the commit in Git.


To reattribute Git activity on GHE.com, ensure the user's primary email address in your identity provider (IdP) matches the email address used for their commits. With Enterprise Managed Users, users cannot add email addresses to their user account on GitHub, so users will not be able to reattribute their Git commits independently.

## Recreate organization settings

If you created a new organization for the migration process, restore settings such as policies, organization teams, and projects.
