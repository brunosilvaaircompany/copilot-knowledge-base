# Using the GitHub CLI across GitHub platforms

If you have accounts on multiple GitHub platforms, such as a personal account on GitHub.com and a managed user account on GHE.com, you can authenticate with `gh auth login` for each account.

You'll need to authenticate to run _any_ commands in a given environment. For example, even if you're running a command that only requires read access to a public repository on GitHub.com, you won't be able to use this command if you're only authenticated to an account on GHE.com. You should therefore authenticate to all accounts you want to use with the GitHub CLI.

## How do I run commands for each account?

Once you've authenticated with multiple accounts, when you run a command, the GitHub CLI can sometimes automatically detect which platform you're trying to access. In other cases, you'll need to provide more information in your command.

The GitHub CLI **automatically detects** your intended account when you're in the context of a specific repository. For example, if you `cd` into your `my-repo` directory and run `gh repo view`, the command will target the correct platform for that repository.

The GitHub CLI **can't automatically detect** your intended account when it doesn't have this context. For example, if you run `gh repo list` to list repositories for your account, the GitHub CLI won't know which account you want to access. In cases like this:

* The GitHub CLI will default to GitHub.com.
* You can set the `GH_HOST` environment variable to change the default target for these kinds of requests. See [gh environment](https://cli.github.com/manual/gh_help_environment) in the GitHub CLI manual.
* Some commands allow you to specify your target environment with the `--hostname` option, such as `gh api`, or pass the full URL for a repository, such as `gh pr view`.

## Can I use multiple accounts on the same platform?

You can also authenticate with multiple accounts on the same platform. To switch between these accounts, you can use the `gh auth switch` command. See [gh auth switch](https://cli.github.com/manual/gh_auth_switch) in the GitHub CLI manual.
