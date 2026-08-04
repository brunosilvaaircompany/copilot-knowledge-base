# Merge conflicts

Git can often resolve differences between branches and merge them automatically. Usually, changes are on different lines or in different files, so Git can merge them without help. Sometimes, competing changes need your help. Merge conflicts often happen when people make different changes to the same line of the same file, or when one person edits a file and another person deletes the same file.

Merge conflicts block merging because Git cannot safely choose which version of the conflicting content to keep. You must resolve all merge conflicts before you can merge a pull request on GitHub. If your pull request has a merge conflict between the compare branch and base branch, the **Merge pull request** button is deactivated until the conflicts are resolved.

## Resolving merge conflicts

Resolving a merge conflict means choosing the final content that should appear after the branches are merged. The right tool depends on the type of conflict.

* Simple line conflicts can often be resolved on GitHub. See [Resolving A Merge Conflict On GitHub](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-on-github).
* More complex conflicts must be resolved in a local clone and pushed back to the pull request branch. See [Resolving A Merge Conflict Using The Command Line](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line).
* If you have access to Copilot cloud agent and it is enabled for the repository, Copilot can help resolve conflicts from the merge box. See [Use Cloud Agent On GitHub](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github#resolving-merge-conflicts).

On the command line, Git tells you when a merge cannot finish automatically. You cannot push the merged result until you resolve the conflict and commit the resolution.

```shell
$ git merge BRANCH-NAME
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

## Further reading

* [Pull Request Merges](https://docs.github.com/en/pull-requests/reference/pull-request-merges)
* [Pull Requests](https://docs.github.com/en/pull-requests/reference/pull-requests)
* [Resolving A Merge Conflict Using The Command Line](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line)
* [Resolving A Merge Conflict On GitHub](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-on-github)
