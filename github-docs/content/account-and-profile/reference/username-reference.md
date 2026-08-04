# Username reference

## Changing your username

The following list contains limitations and considerations when changing your GitHub username. For the GitHub username policy, see [GitHub Username Policy](https://docs.github.com/en/free-pro-team@latest/site-policy/other-site-policies/github-username-policy).

### Limitations of username changes



{% ifversion ghec %}

Members of an enterprise with managed users cannot change usernames. Your enterprise's IdP administrator controls your GitHub username. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).

{% elsif ghes %}

If you sign into {% ifversion ghes %}your GitHub Enterprise Server instance with LDAP credentials or single sign-on (SSO), only your local administrator can change your username. For more information about authentication methods for GitHub Enterprise Server, see [Understanding Iam For Enterprises](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises).

{% endif %}

{% endif %}



If the account namespace includes any public repositories that contain an action listed on GitHub Marketplace, or that had more than 100 clones or more than 100 uses of GitHub Actions in the week prior to you renaming your account, GitHub permanently retires the old owner name and repository name combination (`OLD-OWNER/REPOSITORY-NAME`) when you rename your account.
 If you try to create a repository using a retired owner name and repository name combination, you will see the error: "The repository `<REPOSITORY_NAME>` has been retired and cannot be reused."



If the account namespace includes any packages or container images stored in a GitHub Packages registry, GitHub transfers the packages and container images to the new namespace. By renaming your account, you may break projects that depend on these packages. If the namespace includes any container images that are public and have more than 5,000 downloads, the full former name of these container images (`OLD-NAMESPACE/IMAGE-NAME`) is permanently retired when you rename the account to ensure the container image name cannot be reused in the future.


### Repository redirects after username change

After you change your username, web links to your existing repositories will continue to work. This can take a few minutes to complete after you make the change.

Command line pushes from your local repository clones to the old remote tracking URLs will continue to work.

### Redirects for changed usernames

GitHub cannot set up redirects for:
* [@mentions](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) using your old username
* Links to [gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) that include your old username

### Git commits after a username change

After a username change, verified commits signed using the previous GitHub-provided `noreply` email address will lose their "Verified" status.

When verifying a signature, GitHub checks that the email address of the committer or tagger exactly matches one of the email addresses associated with the GPG key's identities. Additionally, GitHub confirms that the email address is verified and linked to the user's account. This ensures that the key belongs to you and that you created the commit or tag. Because the username of the `noreply` email address changes, these commits can no longer be verified.

If you've been using a GitHub-provided private commit email address, whether or not your commit history will be retained after an account rename depends on the format of the email address. Git commits that are associated with your GitHub-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph, unless your `noreply` email address is in the form of `ID+USERNAME@users.noreply.github.com`. Older versions of the `noreply` email address that do not contain a numeric ID will not be associated with your GitHub account after changing your username.
