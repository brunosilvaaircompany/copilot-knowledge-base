# Merging a pull request

## About pull request merges

Merge a pull request when the proposed changes are ready and any repository requirements are satisfied. You can't merge a draft pull request.

Repository rules or branch protection may require reviews, status checks, or an up-to-date branch before merging. See [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

As an alternative to branch protection rules, you can create rulesets. Rulesets have a few advantages over branch protection rules, such as statuses, and better discoverability without requiring admin access. You can also apply multiple rulesets at the same time. For more information, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).


You can configure a pull request to merge automatically when all merge requirements are met. For more information, see [Automatically Merging A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/automatically-merging-a-pull-request).


If the base branch requires a merge queue, the available merge options differ from those described here. See [Merging A Pull Request With A Merge Queue](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request-with-a-merge-queue).

If the pull request has merge conflicts, or if you want to test changes first, [check out the pull request locally](/pull-requests/how-tos/review-pull-requests/checking-out-pull-requests-locally).

The repository may automatically delete the head branch after merging. See [Managing The Automatic Deletion Of Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches).

> [!NOTE]
> If you delete a head branch after its pull request has been merged, GitHub checks for any open pull requests in the same repository that specify the deleted branch as their base branch. GitHub automatically updates any such pull requests, changing their base branch to the merged pull request's base branch.


Pull requests use [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge), except squashed or rebased pull requests, which use fast-forward merging.

You can link a pull request to an issue to show that a fix is in progress and automatically close the issue when the pull request is merged. For more information, see [Linking A Pull Request To An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue).


If you don't want to merge the changes, you can [close the pull request](/pull-requests/how-tos/merge-and-close-pull-requests/closing-a-pull-request).

## Merging a pull request

{% webui %}

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the "Pull Requests" list, click the pull request you want to merge.
1. Scroll down to the bottom of the pull request. Depending on the merge options enabled for your repository, choose a merge method:

    * [Merge all commits into the base branch](/pull-requests/reference/pull-request-merges) by clicking **Merge pull request**. If the option is not shown, click the merge dropdown menu and select **Create a merge commit**.

      ![Screenshot of the merge options for a pull request. The arrow to expand the dropdown is outlined in dark orange.](/assets/images/help/pull_requests/merge-pull-request-options.png)

    * [Squash the commits into one commit](/pull-requests/reference/pull-request-merges#squash-and-merge-your-commits) by clicking the merge dropdown menu, selecting **Squash and merge**, and then clicking **Squash and merge**.

    * [Rebase the commits individually onto the base branch](/pull-requests/reference/pull-request-merges#rebase-and-merge-your-commits) by clicking the merge dropdown menu, selecting **Rebase and merge**, and then clicking **Rebase and merge**.

    > [!NOTE]
    > Rebase and merge will always update the committer information and create new commit SHAs. See [About pull request merges](/pull-requests/reference/pull-request-merges#rebase-and-merge-your-commits).

1. If prompted, type a commit message, or accept the default message.

   For information about the default commit messages for squash merges, see [Pull Request Merges](https://docs.github.com/en/pull-requests/reference/pull-request-merges#merge-message-for-a-squash-merge).


1. If you have more than one email address associated with your account on GitHub, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address. For more information about the exact form the no-reply email address can take, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)



   > [!NOTE]
   > The email selector is not available for rebase merges, which do not create a merge commit. For squash merges, the email selector is only shown if you are the pull request author and you have more than one email address associated with your account.

1. Click **Confirm merge**, **Confirm squash and merge**, or **Confirm rebase and merge**.
1. Optionally, [delete the branch](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request). This keeps the list of branches in your repository tidy.

{% endwebui %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To merge a pull request, use the `gh pr merge` subcommand. Replace `pull-request` with the number, URL, or head branch of the pull request.

```shell
gh pr merge PULL-REQUEST
```

Follow the interactive prompts to complete the merge. See [Pull Request Merges](https://docs.github.com/en/pull-requests/reference/pull-request-merges).

Alternatively, you can use flags to skip the interactive prompts. For example, this command squashes the commits into a single commit with the commit message "my squash commit", merges the squashed commit into the base branch, and then deletes the local and remote branch.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## Further reading

* [Reverting A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/reverting-a-pull-request)
* [Syncing Your Branch In GitHub Desktop](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop) using GitHub Desktop
* [Pull Request Merges](https://docs.github.com/en/pull-requests/reference/pull-request-merges)
* [Merge And Close Pull Requests](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests)
