# Troubleshooting missing contributions

## Commit was made less than 24 hours ago

After making a commit that meets the requirements to count as a contribution, you may need to wait for up to 24 hours to see the contribution appear on your contributions graph. For more information, see [Viewing Commit Details From Your Timeline](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/viewing-commit-details-from-your-timeline).

## Your local Git commit email isn't connected to your account

Commits must be made with an email address that is connected to your account on GitHub, or the GitHub-provided `noreply` email address provided to you in your email settings, in order to appear on your contributions graph. For more information about `noreply` email addresses, see [Email Addresses Reference](https://docs.github.com/en/account-and-profile/reference/email-addresses-reference#your-noreply-email-address).

You can check the email address used for a commit by adding `.patch` to the end of a commit URL. For example, the following commit URL includes `.patch`.

[https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch](https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch)

```text
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

The email address in the `From:` field is the address that was set in the [local git config settings](/get-started/git-basics/set-up-git). In this example, the email address used for the commit is `octocat@nowhere.com`.

If the email address used for the commit is not connected to your account on GitHub, you must [add the email address](/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account) to your account on GitHub. Your contributions graph will be rebuilt automatically when you add the new address.

If you remove an email address that was used to author older commits, or move that email to a different account, those historical contributions will no longer appear on your contributions graph. To restore attribution, add the exact historical commit email address back to your account. You do not need access to that mailbox. After adding or moving the email address, the contribution graph may take up to 24 hours to refresh. If qualifying contributions still have not returned after that time, confirm the commit author email using the `.patch` view described earlier in this article, then contact [GitHub Support](https://support.github.com) with that information.



> [!NOTE]
> If you use a managed user account, you cannot add additional email addresses to the account, even if multiple email addresses are registered with your identity provider (IdP). Therefore, only commits that are authored by the primary email address registered with your IdP can be associated with your managed user account.



Generic email addresses, such as `jane@computer.local`, cannot be added to GitHub accounts and linked to commits. If you've authored any commits using a generic email address, the commits will not be linked to your GitHub profile and will not show up in your contribution graph.

## Commit was not made in the default or `gh-pages` branch

Commits are only counted if they are made in the default branch or the `gh-pages` branch (for repositories with project sites). For more information, see [What Is GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites).

If your commits are in a non-default or non-`gh-pages` branch and you'd like them to count toward your contributions, you will need to do one of the following:
* [Open a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to have your changes merged into the default branch or the `gh-pages` branch.
* [Change the default branch](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch) of the repository.

> [!WARNING]
> Changing the default branch of the repository will change it for all repository collaborators. Only do this if you want the new branch to become the base against which all future pull requests and commits will be made.

## Commit was made in a fork

Commits made in a fork will not count toward your contributions. To make them count, you must open a pull request to have your changes merged into the parent repository. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Next steps

* [Profile Contributions Reference](https://docs.github.com/en/account-and-profile/reference/profile-contributions-reference)
* [Viewing Contributions On Your Profile](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/viewing-contributions-on-your-profile)
