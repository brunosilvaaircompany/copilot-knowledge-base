# Mannequins and user activity

## What are mannequins?

After you run a migration with GitHub Enterprise Importer or Enterprise Live Migrations, all user activity in the migrated repository (except Git commits) is attributed to placeholder identities called mannequins.


Each mannequin only has a display name, which comes from the display name in the source repository. Mannequins do not have organization membership or repository access. Mannequins always use the same avatar, a ghost octocat, and include a mannequin label following the display name.

![Screenshot of the header of an issue comment. The commenter is labeled as a mannequin, and the "Mannequin" label is outlined in dark orange.](/assets/images/help/github-enterprise-importer/mannequin-example.png)

Reclaiming is optional and can happen any time after a migration is finished. For this reason, you can allow your team to begin working in migrated repositories before reclaiming.

Authorship for Git commits is not associated with mannequins and cannot be attributed to GitHub users by reclaiming mannequins. Instead, commit authorship is attributed to user accounts on GitHub based on the email address that was used to author the commit in Git.


## How can I reclaim mannequins?

You can reattribute the history for each mannequin to an organization member with the GitHub CLI or in your browser. If you use the GitHub CLI, you can reclaim mannequins in bulk.
 For instructions, see [Reclaiming Mannequins For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer).

By default, reclaiming a mannequin will send an attribution invitation to the target user. The target user can choose to accept or reject the invitation.

After a user accepts an attribution invitation, all contributions previously attributed to the mannequin will be attributed to the user instead. In future migrations to the same organization, any contributions from the same mannequin will be automatically reclaimed for the same user.

If your organization uses Enterprise Managed Users and you choose to reclaim mannequins with the GitHub CLI, you can optionally skip the invitation process, immediately reclaiming the mannequin without the user's approval.
