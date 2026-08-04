# Cloning an issue

To clone an open issue, you must have triage access to the repository that contains the original issue and to the destination repository. The destination repository must allow blank issues. See [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

When you clone an issue, a new issue is created with the original issue's title, description, assignees, type, labels, milestones, and projects prefilled, as long as those fields exist or are available in the destination repository. Labels and milestones are retained if they are present in the target repository, with labels matching by name and milestones matching by both name and due date. The original issue remains unchanged.

People or teams mentioned in the original issue will not receive notifications about the cloning. The new issue will have its own URL and can be edited before being created. If you attempt to clone an issue to a repository where you do not have triage access, the option will not be available.

## Cloning an open issue

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Issues," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-issues-global-nav-update.png)


1. In the list of issues, click the issue you'd like to clone.
1. In the right sidebar, click **Clone issue**.
1. In the **Choose a repository** dropdown, select the destination repository. You can choose the same repository or a different one.
1. Edit the prefilled issue details as needed.
1. Click **Create issue**.

## Further reading

* [About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
