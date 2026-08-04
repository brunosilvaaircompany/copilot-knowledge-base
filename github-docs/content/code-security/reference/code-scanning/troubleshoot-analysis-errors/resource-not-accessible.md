# Error: 403 "Resource not accessible by integration"

>[!NOTE]
>This troubleshooting article is _only_ relevant if you're seeing this error with Dependabot. If you see this error with other GitHub products and have difficulty troubleshooting it, you can contact GitHub Support. For more information, see [Contacting GitHub Support](https://docs.github.com/en/support/contacting-github-support).

## About this error

```text
403: Resource not accessible by integration
```

Dependabot is considered untrusted when it triggers a workflow run, if the workflow will run with read-only scopes.

## Confirming the cause of the error

If you're using Dependabot in your code scanning workflow, investigate the scope it's using.

Uploading code scanning results for a branch usually requires the `security-events: write` scope. However, code scanning always allows the uploading of results when the `pull_request` event triggers the action run. This is why, for Dependabot branches, we recommend you use the `pull_request` event instead of the `push` event.

## Fixing the problem

You can run on pushes to the default branch and any other important long-running branches, as well as pull requests opened against this set of branches:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

Alternatively, you can run on all pushes except for Dependabot branches:

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### Analysis still failing on the default branch

If the CodeQL analysis workflow still fails on a commit made on the default branch, you need to check:

* Whether Dependabot authored the commit
* Whether the pull request that includes the commit has been merged using squash and merge

This type of merge commit is authored by Dependabot and therefore, any workflows running on the commit will have read-only permissions. If you enabled code scanning and Dependabot security updates or version updates on your repository, we recommend you enable auto-merge on the pull request with the **Create a merge commit** strategy. This avoids the squash-merge commit that would be authored by Dependabot. For more information about enabling auto-merge, see [Automatically Merging A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge).
