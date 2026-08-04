# Reclaiming mannequins for GitHub Enterprise Importer

After you run a migration with GitHub Enterprise Importer or Enterprise Live Migrations, all user activity in the migrated repository (except Git commits) is attributed to placeholder identities called mannequins.
 For more information, see [Mannequins And User Activity](https://docs.github.com/en/migrations/overview/mannequins-and-user-activity).

## Reclaiming mannequins

You can reclaim mannequins with GitHub CLI (recommended) or the browser.

* [Reclaiming mannequins with the GitHub CLI (recommended)](#reclaiming-mannequins-with-the-github-cli-recommended)
* [Reclaiming mannequins in your browser](#reclaiming-mannequins-in-your-browser)

> [!NOTE]
> * You cannot reclaim mannequins after you have transferred a repository to another organization. If you wish to transfer a repository to another organization after your migration, you must reclaim the mannequins before the transfer.
> * When reclaiming mannequins, you can only target existing organization members. Before attempting to reclaim a mannequin, verify that the GitHub user you want to invite is already added to the organization.

GitHub Enterprise Importer does not migrate user access to repositories. After reclaiming mannequins, if any of the users do not already have appropriate access to the repository via team membership, you must separately give the users access to the repository. For more information, see [Managing An Individuals Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository).

### Reclaiming mannequins with the GitHub CLI (recommended)

You can use the GitHub CLI to reclaim mannequins individually or in bulk. For more information about installing and updating migration extensions for the GitHub CLI, see [About GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer).

The exact command you need to use depends on which extension of the GitHub CLI that you're using.

* [Reclaiming mannequins with the GEI extension](#reclaiming-mannequins-with-the-gei-extension)
* [Reclaiming mannequins with the ADO2GH extension](#reclaiming-mannequins-with-the-ado2gh-extension)
* [Reclaiming mannequins with the BBS2GH extension](#reclaiming-mannequins-with-the-bbs2gh-extension)

* [Reclaiming mannequins with the GL2GH extension](#reclaiming-mannequins-with-the-gl2gh-extension)


#### Reclaiming mannequins with the GEI extension

If your migration source is a GitHub product, you can reclaim mannequins with the GEI extension of the GitHub CLI.

* If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-target-pat TOKEN` to each of the commands below, replacing `TOKEN` with the personal access token.
 For personal access token requirements, see [Managing Access For A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#required-scopes-for-personal-access-tokens).
* If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.


1. Optionally, to reclaim mannequins in bulk, create a CSV file that maps mannequins to organization members.


   * To generate a CSV file with a list of mannequins for an organization, use the `gh gei generate-mannequin-csv` command, replacing DESTINATION with the destination organization and FILENAME with a file name for the resulting CSV file.

     Optionally, to include mannequins that have already been reclaimed, add the `--include-reclaimed` flag.


     ```shell copy
     gh gei generate-mannequin-csv --github-target-org DESTINATION --output FILENAME.csv
     ```

   * Edit the CSV file, adding the username of the organization member that corresponds to each mannequin.
* Save the file.

1. To reclaim mannequins, use the `gh gei reclaim-mannequin` command.

   * To reclaim mannequins in bulk with the mapping file you created earlier, replace DESTINATION with the destination organization and FILENAME with the file name of the mapping file.


      ```shell copy
      gh gei reclaim-mannequin --github-target-org DESTINATION --csv FILENAME.csv
      ```

   * To reclaim an individual mannequin, replace DESTINATION with the destination organization, MANNEQUIN with the login of mannequin, and USERNAME with the username of the organization member that corresponds to the mannequin.

    If there are multiple mannequins with the same login, you can replace `--mannequin-user MANNEQUIN` with `--mannequin-ID ID`, replacing ID with the ID of the mannequin.

{% indented_data_reference reusables.enterprise-migration-tool.skip-invitation-flag spaces=4 %}


      ```shell copy
      gh gei reclaim-mannequin --github-target-org DESTINATION --mannequin-user MANNEQUIN --target-user USERNAME
      ```

By default, the organization member will receive an invitation via email, and the mannequin will not be reclaimed until the member accepts the invitation.


#### Reclaiming mannequins with the ADO2GH extension

If your migration source is Azure DevOps, you can reclaim mannequins with the ADO2GH extension of the GitHub CLI.

* If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-target-pat TOKEN` to each of the commands below, replacing `TOKEN` with the personal access token.
 For personal access token requirements, see [Manage Access](https://docs.github.com/en/migrations/ado/manage-access).
* If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.


1. Optionally, to reclaim mannequins in bulk, create a CSV file that maps mannequins to organization members.


   * To generate a CSV file with a list of mannequins for an organization, use the `gh ado2gh generate-mannequin-csv` command, replacing DESTINATION with the destination organization and FILENAME with a file name for the resulting CSV file.

     Optionally, to include mannequins that have already been reclaimed, add the `--include-reclaimed` flag.


     ```shell copy
     gh ado2gh generate-mannequin-csv --github-org DESTINATION --output FILENAME.csv
     ```

   * Edit the CSV file, adding the username of the organization member that corresponds to each mannequin.
* Save the file.

1. To reclaim mannequins, use the `gh ado2gh reclaim-mannequin` command.

    * To reclaim mannequins in bulk with the mapping file you created earlier, replace DESTINATION with the destination organization and FILENAME with the file name of the mapping file.


      ```shell copy
      gh ado2gh reclaim-mannequin --github-org DESTINATION --csv FILENAME.csv
      ```

   * To reclaim an individual mannequin, replace DESTINATION with the destination organization, MANNEQUIN with the login of mannequin, and USERNAME with the username of the organization member that corresponds to the mannequin.

    If there are multiple mannequins with the same login, you can replace `--mannequin-user MANNEQUIN` with `--mannequin-ID ID`, replacing ID with the ID of the mannequin.

{% indented_data_reference reusables.enterprise-migration-tool.skip-invitation-flag spaces=4 %}


      ```shell copy
      gh ado2gh reclaim-mannequin --github-org DESTINATION --mannequin-user MANNEQUIN --target-user USERNAME
      ```

By default, the organization member will receive an invitation via email, and the mannequin will not be reclaimed until the member accepts the invitation.


#### Reclaiming mannequins with the BBS2GH extension

If your migration source is Bitbucket Server, you can reclaim mannequins with the BBS2GH extension of the GitHub CLI.

* If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-target-pat TOKEN` to each of the commands below, replacing `TOKEN` with the personal access token.
 For personal access token requirements, see [Managing Access For A Migration From Bitbucket Server](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#required-scopes-for-personal-access-tokens).
* If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.


1. Optionally, to reclaim mannequins in bulk, create a CSV file that maps mannequins to organization members.


   * To generate a CSV file with a list of mannequins for an organization, use the `gh bbs2gh generate-mannequin-csv` command, replacing DESTINATION with the destination organization and FILENAME with a file name for the resulting CSV file.

     Optionally, to include mannequins that have already been reclaimed, add the `--include-reclaimed` flag.


     ```shell copy
     gh bbs2gh generate-mannequin-csv --github-org DESTINATION --output FILENAME.csv
     ```

   * Edit the CSV file, adding the username of the organization member that corresponds to each mannequin.
* Save the file.

1. To reclaim mannequins, use the `gh bbs2gh reclaim-mannequin` command.

    * To reclaim mannequins in bulk with the mapping file you created earlier, replace DESTINATION with the destination organization and FILENAME with the file name of the mapping file.


      ```shell copy
      gh bbs2gh reclaim-mannequin --github-org DESTINATION --csv FILENAME.csv
      ```

   * To reclaim an individual mannequin, replace DESTINATION with the destination organization, MANNEQUIN with the login of mannequin, and USERNAME with the username of the organization member that corresponds to the mannequin.

    If there are multiple mannequins with the same login, you can replace `--mannequin-user MANNEQUIN` with `--mannequin-ID ID`, replacing ID with the ID of the mannequin.

{% indented_data_reference reusables.enterprise-migration-tool.skip-invitation-flag spaces=4 %}


      ```shell copy
      gh bbs2gh reclaim-mannequin --github-org DESTINATION --mannequin-user MANNEQUIN --target-user USERNAME
      ```

By default, the organization member will receive an invitation via email, and the mannequin will not be reclaimed until the member accepts the invitation.




#### Reclaiming mannequins with the GL2GH extension

If your migration source is GitLab, you can reclaim mannequins with the GL2GH extension of the GitHub CLI.

* If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-pat TOKEN` to each command below, replacing `TOKEN` with the personal access token. For personal access token requirements, see [Manage Access](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access).
* If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.


1. Optionally, to reclaim mannequins in bulk, create a CSV file that maps mannequins to organization members.


   * To generate a CSV file with a list of mannequins for an organization, use the `gh gl2gh generate-mannequin-csv` command, replacing DESTINATION with the destination organization and FILENAME with a file name for the resulting CSV file.

     Optionally, to include mannequins that have already been reclaimed, add the `--include-reclaimed` flag.


     ```shell copy
     gh gl2gh generate-mannequin-csv --github-org DESTINATION --output FILENAME.csv
     ```

   * Edit the CSV file, adding the username of the organization member that corresponds to each mannequin.
* Save the file.

1. To reclaim mannequins, use the `gh gl2gh reclaim-mannequin` command.

    * To reclaim mannequins in bulk with the mapping file you created earlier, replace DESTINATION with the destination organization and FILENAME with the file name of the mapping file.


      ```shell copy
      gh gl2gh reclaim-mannequin --github-org DESTINATION --csv FILENAME.csv
      ```

   * To reclaim an individual mannequin, replace DESTINATION with the destination organization, MANNEQUIN with the login of mannequin, and USERNAME with the username of the organization member that corresponds to the mannequin.

    If there are multiple mannequins with the same login, you can replace `--mannequin-user MANNEQUIN` with `--mannequin-ID ID`, replacing ID with the ID of the mannequin.

{% indented_data_reference reusables.enterprise-migration-tool.skip-invitation-flag spaces=4 %}


      ```shell copy
      gh gl2gh reclaim-mannequin --github-org DESTINATION --mannequin-user MANNEQUIN --target-user USERNAME
      ```

By default, the organization member will receive an invitation via email, and the mannequin will not be reclaimed until the member accepts the invitation.




### Reclaiming mannequins in your browser

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



## Viewing the status of your attribution invitations

You can view the status of all attribution invitations for your organization.

* Invited: The user has been sent an invitation, but has not replied to the invitation yet.
* Completed: The user has accepted, or the invitation process was skipped. The user's contributions have been reattributed.
* Rejected: The user chose not to be credited for the mannequin's contributions.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "arrow-switch" aria-hidden="true" aria-label="arrow-switch" %} Import/Export**.

1. Under "{% octicon "arrow-switch" aria-hidden="true" aria-label="arrow-switch" %} Import/Export", click **Attribution Invitations**.

   ![Screenshot of the "Import/Export" page for a repository. A tab, labeled "Attribution Invitations," is outlined in dark orange.](/assets/images/help/github-enterprise-importer/attribution-invitations-tab.png)

## Managing authorship for Git commits

Authorship for Git commits is not associated with mannequins and cannot be attributed to GitHub users by reclaiming mannequins. Instead, commit authorship is attributed to user accounts on GitHub based on the email address that was used to author the commit in Git.


In many cases, users can reattribute commits to themselves by adding the email address used to author the commit to their user account on GitHub. For more information, see [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).

However, if you use Enterprise Managed Users, users cannot add email addresses to their user account on GitHub and will therefore not be able to reattribute Git commits. Only commits authored by a user's primary email address in your identity provider (IdP) will be attributed to managed user accounts.

Additionally, commits authored by a GitHub-provided `noreply` email address cannot be reattributed, because you can't manually add a `noreply` email address to a user account. For more information, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).
