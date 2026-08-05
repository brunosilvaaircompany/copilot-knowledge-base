# Transferring an issue to another repository

To transfer an open issue to another repository, you must have write access to the repository the issue is in and the repository you're transferring the issue to. For more information, see [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

> [!NOTE]
> You can only transfer issues between repositories owned by the same user or organization account. A private repository issue cannot be transferred to a public repository.

When you transfer an issue, comments and assignees are retained. Labels and milestones are also retained if they're present in the target repository, with labels matching by name and milestones matching by both name and due date.

People or teams who are mentioned in the issue will receive a notification letting them know that the issue has been transferred to a new repository. The original URL redirects to the new issue's URL. People who don't have read permissions in the new repository will see a banner letting them know that the issue has been transferred to a new repository that they can't access.

## Transferring an open issue to another repository

{% webui %}

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Issues," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-issues-global-nav-update.png)

1. In the list of issues, click the issue you'd like to transfer.
1. In the right sidebar, click **Transfer issue**.
1. Select the **Choose a repository** dropdown menu, and click the repository you want to transfer the issue to.
1. Click **Transfer issue**.

{% endwebui %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To transfer an issue, use the `gh issue transfer` subcommand. Replace the `issue` parameter with the number or URL of the issue. Replace the `hostname/owner/repo` parameter with the URL of the repository that you want to transfer the issue to, such as `https://ghe.io/octocat/octo-repo`.

```shell
gh issue transfer ISSUE HOSTNAME/OWNER/REPO
```

{% endcli %}

## Further reading

* [About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
