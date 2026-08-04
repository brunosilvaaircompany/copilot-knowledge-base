# Creating a commit with multiple authors or on behalf of an organization

## Creating a commit with multiple authors

Add one or more `Co-authored-by` trailers to a commit message to attribute a commit to multiple authors.

### Required co-author information

Before adding a co-author, get the email address they want used in the trailer. For the commit to count as a contribution, use an email address associated with their account on your GitHub Enterprise Server instance.

If a co-author keeps their email address private, use their GitHub-provided `no-reply` email. See [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

### Creating co-authored commits using GitHub Desktop

You can use GitHub Desktop to create a commit with a co-author. See [Committing And Reviewing Changes To Your Project In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#write-a-commit-message-and-push-your-changes) and [GitHub Desktop](https://desktop.github.com).

### Creating co-authored commits on the command line

1. Collect the name and email address for each co-author. If a person chooses to keep their email address private, you should use their GitHub-provided `no-reply` email to protect their privacy.


1. Type your commit message and a short, meaningful description of your changes. After your commit description, add an empty line instead of a closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   ```

1. Add one `Co-authored-by: name <name@example.com>` line for each co-author, then add the closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   > Co-authored-by: NAME <NAME@EXAMPLE.COM>
   > Co-authored-by: ANOTHER-NAME <ANOTHER-NAME@EXAMPLE.COM>"
   ```

The new commit and message appear on your GitHub Enterprise Server instance after you push. See [Pushing Commits To A Remote Repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository).

### Creating co-authored commits on GitHub

After you make changes in a file using the web editor on GitHub, add co-author trailers before you commit.

1. Collect the name and email address for each co-author. If a person chooses to keep their email address private, you should use their GitHub-provided `no-reply` email to protect their privacy.

1. Click **Commit changes...**
1. In the "Commit message" field, type a short, meaningful commit message that describes the changes you made.
1. In the text box below your commit message, add one `Co-authored-by: name <name@example.com>` line for each co-author.
1. Click **Commit changes** or **Propose changes**.

The new commit and message appear on your GitHub Enterprise Server instance.

## Creating a commit on behalf of an organization

> [!NOTE]
> Creating a commit on behalf of an organization is not available on GitHub Enterprise Server.

Add an `on-behalf-of:` trailer to a signed commit to attribute it to an organization. To use the trailer, you must be a member of the organization, and both your commit email and the organization email must be in a domain verified by the organization.

### Creating commits with an `on-behalf-of` badge on the command line

1. Type your commit message and a short, meaningful description of your changes. After your commit description, add two empty lines instead of a closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   ```

1. Add `on-behalf-of: @org <name@organization.com>`, then add the closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   on-behalf-of: @ORG NAME@ORGANIZATION.COM"
   ```

The new commit, message, and badge appear on GitHub after you push. See [Pushing Commits To A Remote Repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository).

### Creating commits with an `on-behalf-of` badge on GitHub

After you make changes in a file using the web editor on GitHub, add the organization trailer before you commit.

1. Click **Commit changes...**
1. In the "Commit message" field, type a short, meaningful commit message that describes the changes you made.
1. In the text box below your commit message, add `on-behalf-of: @org <name@organization.com>`.
1. Click **Commit changes** or **Propose changes**.

The new commit, message, and badge appear on GitHub.

## Further reading

* [Viewing Contributions On Your Profile](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/viewing-contributions-on-your-profile)
* [Troubleshooting Missing Contributions](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/troubleshooting-missing-contributions)
* [Viewing A Projects Contributors](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors)
* [Changing A Commit Message](https://docs.github.com/en/pull-requests/how-tos/commit-changes/changing-a-commit-message)
* [Committing And Reviewing Changes To Your Project In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#write-a-commit-message-and-push-your-changes) in the GitHub Desktop documentation
