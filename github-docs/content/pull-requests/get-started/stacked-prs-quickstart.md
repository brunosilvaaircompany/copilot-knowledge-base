# Quickstart for stacked pull requests

> [!NOTE] This feature is in public preview and subject to change.

Use stacked pull requests to break large code changes into a chain of smaller, dependent pull requests that you can review and merge independently.

A stack is a series of pull requests in the same repository where each pull request targets the branch of the pull request below it, forming an ordered chain that lands on a single branch, typically your main branch. Instead of one large pull request, you get a set of smaller pull requests. Since each pull request has its own focused diff, teammates can review and approve each layer independently.

## Prerequisites

* GitHub CLI (`gh`) 2.90.0 or later, and Git 2.20 or later.
  * Authenticate GitHub CLI with `gh auth login`.
* A GitHub repository you can push to.

## Install the CLI extension

```shell copy
gh extension install github/gh-stack
```

> [!TIP]
> To use stacked pull requests with AI coding agents, like GitHub Copilot, install the `gh-stack` skill.
> 
> ```shell copy
> gh skill install github/gh-stack
> ```

## Create your first stack

1. To initialize a stack, navigate to your repository and run the following command. This creates a tracking entry and your first branch.

   ```shell copy
   gh stack init
   ```

   You'll be prompted to name your first branch. By default, the stack uses your repository's default branch (e.g., `main`) as the trunk, but a stack can target any branch.

1. Work on your first branch as usual: write code, stage changes, and commit.

   ```shell
   # ... write code ...
   git add .
   git commit -m "helpful-commit-message"
   ```

1. When you're ready for the next logical unit of work, add a new branch to the top of the stack.

   ```shell copy
   gh stack add BRANCH-NAME
   # ... write code ...
   git add .
   git commit -m "Another-helpful-commit-message"
   ```

1. Push all branches to the remote.

   ```shell copy
   gh stack push
   ```

1. Create pull requests and link them as a stack on GitHub.

   ```shell copy
   gh stack submit
   ```

   Each pull request is created with the correct base branch. Your first branch targets `main`, and the next branch `BRANCH-NAME` targets the first branch. Reviewers will only see the diff for that layer. The pull requests are automatically linked together as a stack on GitHub and you can see their order and quickly navigate between them.

1. View the stack and see the full state at any time.

   ```shell copy
   gh stack view
   ```

   This command shows all branches, their pull request links, statuses, and the most recent commit on each.

1. Use `gh stack add -Am "MESSAGE"` to stage all changes, commit, and create the next branch in one step. You won't need a separate `git add` or `git commit`. If the current branch has no commits yet, the commit lands there; if it already has commits, a new branch is created.

   ```shell
   # Commit lands on the current branch
   gh stack add -Am "Auth middleware"

   # Current branch already has commits, so this creates the next branch
   gh stack add -Am "API routes"
   ```

1. When you're ready, push everything and create the pull requests.

   ```shell copy
   gh stack submit
   ```

## Next steps

* [Managing Stacked Pull Requests](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/managing-stacked-pull-requests)
* [Merging Stacked Pull Requests](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-stacked-pull-requests)
* [Stack Ai Generated Code In Pull Requests](https://docs.github.com/en/copilot/tutorials/stack-ai-generated-code-in-pull-requests)
* [Roll Out Stacked Prs](https://docs.github.com/en/pull-requests/tutorials/roll-out-stacked-prs)
