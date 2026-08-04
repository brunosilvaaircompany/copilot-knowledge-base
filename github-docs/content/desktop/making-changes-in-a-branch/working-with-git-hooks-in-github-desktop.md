# Working with Git hooks in GitHub Desktop

## About Git hooks in GitHub Desktop

Git hooks are scripts that run automatically at specific points in the Git workflow, such as before or after a commit, push, or merge. They can be used to enforce code quality standards, run tests, or perform other automated tasks.

GitHub Desktop runs Git hooks in your configured shell environment. Hooks have access to the same environment variables and tools as when you run Git from the command line. This means hooks that rely on tools installed via version managers (such as `nvm` or `rbenv`) or that depend on shell configuration files (such as `.bash_profile` or `.zshrc`) will work correctly.

Hook output is displayed in real time in the GitHub Desktop UI, with terminal colors and formatting preserved, so you can easily read and debug the output from your hooks.

## Bypassing a commit hook

If you want to make a commit without running your pre-commit or commit-msg hooks, you can bypass them directly from GitHub Desktop. This is equivalent to using `git commit --no-verify` on the command line.

You can bypass hooks preemptively before making a commit, or after a hook fails.

### Bypassing hooks before committing

1. In the "Changes" tab, write your commit message.
1. Next to the commit message field, click {% octicon "gear" aria-label="Commit options" %}.
1. Select **Bypass Commit Hooks**.
1. Click **Commit to BRANCH**.

### Bypassing a failed hook

If a commit hook fails, GitHub Desktop will display the hook's output and give you the option to bypass the failed hook and proceed with the commit.

1. Review the hook output displayed by GitHub Desktop.
1. To proceed with the commit despite the failure, click **Commit anyway**.

> [!WARNING]
> Bypassing commit hooks overrides quality and safety checks that your team may rely on. Only bypass a hook if you understand the implications.

## Further reading

* [Committing And Reviewing Changes To Your Project In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)
* [Git hooks documentation](https://git-scm.com/docs/githooks) in the official Git reference
