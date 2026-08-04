# Troubleshooting rules

## Troubleshooting rulesets

If you cannot perform an action in a repository and want to know why, you can view the active rulesets targeting the branch or tag you're working with. For more information, see [Managing Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-rulesets-for-a-repository).

Depending on which rules are active, you may need to edit your commit history locally before you can push your commits to the remote branch. For example, if a branch requires commits to be signed, you can update your signing settings, then use an interactive rebase on your local branch to rewrite your Git history with signed commits. For more information, see [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-signed-commits) and [Using Git Rebase On The Command Line](https://docs.github.com/en/get-started/using-git/using-git-rebase-on-the-command-line).

If a branch or tag is targeted by rules restricting the metadata of commits, your commits may be rejected if part of the commit's metadata does not match a certain pattern. For example, you might need to add an issue number to the start of your commit message, or change the name of a new branch or tag you're trying to push to the repository. If your commits are rejected, you will see a message telling you the pattern the relevant metadata needs to match. As with signed commits, you may need to perform a rebase to squash the commits or rewrite each commit individually. For more information, see [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

When utilizing push rulesets, a maximum of 1000 reference updates are allowed per push. If your push exceeds this limit, it will be rejected. For more information see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#creating-a-push-ruleset).

Additionally, push rulesets apply to the "Create a blob", "Create a tree", and "Create or update file contents" endpoints in the REST API. See [Blobs?Apiversion=2022 11 28](https://docs.github.com/en/rest/git/blobs?apiVersion=2022-11-28#create-a-blob), [Trees?Apiversion=2022 11 28](https://docs.github.com/en/rest/git/trees?apiVersion=2022-11-28#create-a-tree), and [Contents?Apiversion=2022 11 28](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents).

## Troubleshooting required status checks

When defining status checks, the name format depends on the type of check:

* **Workflow**: The name format is `<job name>`.  
* **Reusable workflow**: The name format is `<job name> / <reusable job name>`.  
* **Other checks**: The name format is `<check name>`.

Required status checks do not take workflow, matrix, or event trigger types into account.



Status checks are not indexed for rulesets defined above the repository level. You must manually enter the exact check name expected.

For rulesets in evaluate mode, a status check will run on the targeted branch but will not be required to pass.




## Troubleshooting ruleset workflows

Ruleset workflows can be configured at the organization or enterprise level to require workflows to pass before merging pull requests. For more information, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization).


### Ruleset workflows for open pull requests

If you create a rule while a pull request is open, the required workflow will not run automatically. To trigger the required workflow, push a new commit, update your branch, or close and re-open the pull request.

### Supported ruleset workflow events

Ruleset workflows support using the `pull_request`, `pull_request_target` and `merge_group` events. As a result, you must specify one or more of these events in the `on:` section of the workflow for the workflow to be run by a ruleset.

Any filters you specify for the supported events are ignored - for example, `branches`, `branches-ignore`, `paths`, `types` and so on. The workflow is only triggered, and is always triggered, by the default activity types of the supported events.

| Event                 | Default activity types              |
| --------------------- | ----------------------------------- |
| `pull_request`        | `opened`, `synchronize`, `reopened` |
| `pull_request_target` | `opened`, `synchronize`, `reopened` |
| `merge_group`         | `checks_requested`                  |


For more information, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request).

Ruleset workflows do not run on events triggered by the `GITHUB_TOKEN`. For more information, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token#using-the-github_token-in-a-workflow).

### Blocking repository creation

A required workflow can block people from creating a repository, since a workflow can't run against a repository that's being initialized. To get around this, the ruleset either needs to have "Evaluate" as the enforcement status, or someone with bypass permissions needs to create the repository and bypass the branch protection.

For more information about enforcement statuses and "Evaluate" mode, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#about-using-enforcement-statuses).

For more information about bypass permissions, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

### Branch targets in a ruleset

Verify that your ruleset workflow does not target all branches in the repository. It should only target branches where all changes to the branch are performed by pull requests.

### Supported directory

Verify that your workflow file exists in the `.github/workflows` directory. If you want to run a ruleset workflow on `pull_request` events in a repository that is not the source repository, you can take any of the following actions:
  * Add a conditional to the workflow file such as, `if: {{ github.repository != 'my-org/source-repo' }}`. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idif).
  * Disable Actions completely in the source repository. For more information, see [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository).
  * Disable the individual workflow in the source repository. For more information, see [Disable And Enable Workflows](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows).

### Using the `merge_group` trigger

If your repository uses GitHub Actions to perform required checks or if you require workflows via organization rulesets on pull requests in your repository, you need to update the workflows to include the `merge_group` event as an additional trigger. Otherwise, status checks will not be triggered when you add a pull request to a merge queue. The merge will fail as the required status check will not be reported. The `merge_group` event is separate from the `pull_request` and `push` events.


### Source repository permissions

Verify that the source repository permissions are set to "Accessible from repositories in the `ORGANIZATION NAME` organization."

For more information, see [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository).

### Source repository privacy settings

Verify that the ruleset workflow file is in a source repository that has the same or less restrictive privacy settings than the repositories you want to run it in. Specifically, a public workflow can run on any repository in your organization, an internal workflow can run on internal and private repositories, and a private workflow can run on private repositories. For more information, see [Workflows](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows).

### Permissions for creating a new repository

To create a new repository when a ruleset workflow is configured, ensure that you have bypass permissions for your ruleset. For more information, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository).

### Rule insights

GitHub does not log rule insights until a pull request is merged or a merge is attempted.

### Concurrency

Verify that your ruleset workflow does not use the `cancel-in-progress` concurrency setting. For more information about concurrency, see [Control Workflow Concurrency](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency#using-concurrency-in-different-scenarios).
