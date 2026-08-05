# Use GITHUB_TOKEN for authentication in workflows

This tutorial leads you through how to use the `GITHUB_TOKEN` for authentication in GitHub Actions workflows, including examples for passing the token to actions, making API requests, and configuring permissions for secure automation.

For reference information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions).

## Using the `GITHUB_TOKEN` in a workflow

You can use the `GITHUB_TOKEN` by using the standard syntax for referencing secrets: {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated GitHub API request.

> [!IMPORTANT]
> An action can access the `GITHUB_TOKEN` through the `github.token` context even if the workflow does not explicitly pass the `GITHUB_TOKEN` to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions).

### Example 1: passing the `GITHUB_TOKEN` as an input

This example workflow uses the [GitHub CLI](/actions/how-tos/write-workflows/choose-what-workflows-do/use-github-cli), which requires the `GITHUB_TOKEN` as the value for the `GH_TOKEN` input parameter:

```yaml copy
name: Open new issue
on: workflow_dispatch

jobs:
  open-issue:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      issues: write
    steps:
      - run: |
          gh issue --repo {% raw %}${{ github.repository }}{% endraw %} \
            create --title "Issue title" --body "Issue body"
        env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```


### Example 2: calling the REST API

You can use the `GITHUB_TOKEN` to make authenticated API calls. This example workflow creates an issue using the GitHub REST API:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Modifying the permissions for the `GITHUB_TOKEN`

Use the `permissions` key in your workflow file to modify permissions for the `GITHUB_TOKEN` for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job. As a good security practice, you should grant the `GITHUB_TOKEN` the least required access.

 To see the list of permissions available for use and their parameterized names, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#account-permissions).

The two workflow examples earlier in this article show the `permissions` key being used at the job level.

## Granting additional permissions

If you need a token that requires permissions that aren't available in the `GITHUB_TOKEN`, create a GitHub App and generate an installation access token within your workflow. For more information, see [Making Authenticated API Requests With A GitHub App In A GitHub Actions Workflow](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow). Alternatively, you can create a personal access token, store it as a secret in your repository, and use the token in your workflow with the {% raw %}`${{ secrets.SECRET_NAME }}`{% endraw %} syntax. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

## Next steps

* [Github_Token](https://docs.github.com/en/actions/concepts/security/github_token)
* [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions)
