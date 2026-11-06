# Troubleshooting commits

## Commits are linked to the wrong user

GitHub links a commit to a user by matching the email address in the commit header to an email address on a GitHub account. If your commits are linked to the wrong user or no user, update your Git email settings and add the email address to your account.

> [!NOTE]
> If your commits are linked to another user, that does not give them access to your repository.

### Commits are linked to another user

1. Change the email address in your local Git configuration by following [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git). If you work on multiple machines, change this setting on each one.
1. Add the email address to your account by following [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).

Future commits that use the email address will be linked to your account.

### Commits are not linked to any user

To find out why a commit is not linked, inspect the commit on GitHub.

1. On GitHub, navigate to the main page of the repository.

1. On the main page of the repository, above the file list, click **{% octicon "history" aria-hidden="true" aria-label="history" %} commits**.

   ![Screenshot of the main page for a repository. A clock icon and "178 commits" is highlighted with an orange outline.](/assets/images/help/commits/commits-page.png)

1. To navigate to a specific commit, click the commit message for that commit.

   ![Screenshot of a commit in the commit list for a repository. "Update README.md" is highlighted with an orange outline.](/assets/images/help/commits/commit-message-link.png)

1. Hover over the blue {% octicon "question" aria-label="Question mark" %} to the right of the username.
1. Use the message to decide what to update:
   * **Unrecognized author (with email address):** Add the shown email address to your GitHub account.
   * **Unrecognized author (no email address):** Set your commit email address in Git, then add that address to your GitHub account.
   * **Invalid email:** Set a valid commit email address in Git, then add that address to your GitHub account.

Old commits might not be linked after you update your email settings. See [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

## A commit exists on GitHub but not in your local clone

If `git show COMMIT-SHA` returns an error locally but the commit is visible on GitHub, your local clone may be out of date or the commit may no longer be referenced by a branch.

### The local repository is out of date

Fetch information from the remote repository.

```shell
git fetch REMOTE
```

Use `git fetch upstream` for a fork's upstream repository, or `git fetch origin` for the repository you cloned.

### The branch that contained the commit was deleted

If a force push overwrote branch history, you may be able to recover it on GitHub, including in a private repository. You need write access to create a recovery branch. This workflow only works if the previous commit still opens on GitHub.

1. Open the repository's activity view. See [Using The Activity View To See Changes To A Repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/using-the-activity-view-to-see-changes-to-a-repository).
1. Use the branch dropdown to select the affected branch. In the **All activity** dropdown, select **Force pushes**.
1. Find the force-push event that overwrote the history. If available, you can select **Compare changes** from the event's {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} menu to view the comparison.
1. If you choose to view the comparison, copy the base commit SHA, the first SHA in the comparison URL. Otherwise, use the event's **before** commit SHA, which was the branch tip before the force push, not its **after** SHA.
1. Open `https://github.com/OWNER/REPO/tree/BEFORE_SHA`, replacing `OWNER` and `REPO` with the repository owner and name, and `BEFORE_SHA` with the previous commit SHA. Replace `HOSTNAME` with your instance's hostname.
1. If the commit opens, select the branch dropdown above the file list. Type a new recovery-branch name, such as `recover-history`, then select **Create branch**.
1. On the new branch, check the files and commit history to verify that the expected history is present.

If you cannot find or open the SHA, or if the branch was deleted, ask a collaborator who still has the commit in a local clone to push it to a new branch.

```shell
git branch recover-B B
git push upstream B:recover-B
```

Then, fetch the recovered branch.

```shell
git fetch upstream recover-B
```

### Avoid force pushes

Avoid force pushing unless necessary, especially when more than one person can push to the repository. Force pushing rewrites repository history and can disrupt collaborators or corrupt pull requests.

## A commit is blocked by push protection

Push protection blocks commits, uploads, or API requests that contain supported secrets.

### Understanding why push protection has blocked your commit

If push protection blocks your work, GitHub detected a supported secret in your commit or request. Remove the secret before trying again.

### Resolving a push protection block

1. Review the push protection message to identify the secret and where it appears.
1. Remove the secret from the commit, file upload, or API request.
1. Try the push, commit, upload, or request again.
1. If you believe the secret is safe to push, follow the bypass steps for your workflow:
   * [Push Protection On The Command Line](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-on-the-command-line)
   * [Push Protection In The GitHub UI](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-in-the-github-ui)
   * [Push Protection From The Rest API](https://docs.github.com/en/code-security/concepts/secret-security/push-protection-from-the-rest-api)

## Further reading

* [Searching Commits](https://docs.github.com/en/search-github/searching-on-github/searching-commits)
* [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection)
* [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns)
