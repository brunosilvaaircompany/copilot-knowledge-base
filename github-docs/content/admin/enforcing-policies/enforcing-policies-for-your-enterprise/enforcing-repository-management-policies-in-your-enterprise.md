# Enforcing repository management policies in your enterprise

## About policies for repository management in your enterprise

You can enforce policies to control how members of your enterprise manage repositories. You can also allow organization owners to manage policies for repository management.


>[!NOTE] This page describes the policies you can set on the "Member privileges" page in your enterprise settings. Certain restrictions, such as who can create, delete, or transfer repositories, are also available in a **repository policy**. Repository policies give you more flexibility over which users are affected and which organizations and repositories are targeted. See [Governing How People Use Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise).




## Configuring the default visibility of new repositories

Each time someone creates a new repository within your enterprise, that person must choose a visibility for the repository. When you configure a default visibility setting for the enterprise, you choose which visibility is selected by default. For more information on repository visibility, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

If an enterprise owner disallows members from creating certain types of repositories, members will not be able to create that type of repository even if the visibility setting defaults to that type. For more information, see [Enforcing a policy for repository creation](#enforcing-a-policy-for-repository-creation).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.


1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Default repository visibility", use the drop-down menu and select a default visibility.
{% indented_data_reference reusables.enterprise_installation.image-urls-viewable-warning spaces=3 %}


## Enforcing a policy for base repository permissions

Across all organizations owned by your enterprise, you can set a base repository permission level (none, read, write, or admin) for organization members, or allow owners to administer the setting on the organization level.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Base permissions", review the information about changing the setting. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "Base permissions", select the dropdown menu and click a policy.

> [!NOTE]
> Internal repositories have a minimum visibility level of read, even if the base permission has been set to none.

## Enforcing a policy for repository creation

Across all organizations owned by your enterprise, you can allow members to create repositories, restrict repository creation to organization owners, or allow owners to administer the setting on the organization level.

If you allow members to create repositories in your organizations, you can choose which types of repositories (public, private, and internal) that members can create.

If your enterprise uses Enterprise Managed Users, you can also prevent users from creating repositories owned by their user accounts. If you allow users to create repositories owned by their user accounts, you can view and temporarily access those repositories at any time. For more information, see [Viewing User Owned Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/viewing-user-owned-repositories-in-your-enterprise) and [Accessing User Owned Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/accessing-user-owned-repositories-in-your-enterprise).


Internal repositories are the default setting for all new repositories created in an organization owned by an enterprise account.

 For more information about internal repositories, see [Creating A New Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

Organization owners can always create any type of repository, and outside collaborators can never create any type of repository. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Repository creation", review the information about changing the setting. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "Repository creation", select a policy.

1. If you selected **Members can create repositories**, select one or more repository types.

1. Optionally, if your enterprise uses Enterprise Managed Users and you want to prevent enterprise members from creating repositories owned by their user accounts, select **Block the creation of user namespace repositories**.

## Enforcing a policy for forking private or internal repositories

Across all organizations owned by your enterprise, you can allow people with access to a private or internal repository to fork the repository, never allow forking of private or internal repositories, or allow owners to administer the setting on the organization level.

People with admin permissions can set a more granular forking policy. For more information, see [Managing The Forking Policy For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization).

> [!NOTE]
> If your enterprise uses Enterprise Managed Users and your "Repository creation" policy prevents enterprise members from creating repositories owned by their user accounts, members will not be allowed to fork a repository in their user accounts, regardless of your "Repository forking" policy.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Repository forking", review the information about changing the setting. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "Repository forking", select the dropdown menu and click a policy.
1. If forking is enabled, select a policy for where users are allowed to fork repositories.

## Enforcing a policy for inviting outside collaborators to repositories


>[!NOTE] If your enterprise uses managed user accounts, the outside collaborator role is called "repository collaborator." Generally, the documentation for outside collaborators also applies to repository collaborators. For the distinctions that apply, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).



Across all organizations owned by your enterprise, you can allow members to invite outside collaborators to repositories, restrict outside collaborator invitations to organization owners, restrict outside collaborator invitations to enterprise owners, or allow organization owners to administer the setting on the organization level.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Repository outside collaborators{% elsif ghes %}invitations", review the information about changing the setting. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "Repository outside collaborators{% elsif ghes %}invitations", select the dropdown menu and click a policy.

## Enforcing a policy for the default branch name

Across all organizations owned by your enterprise, you can set the default branch name for any new repositories that members create. You can choose to enforce that default branch name across all organizations or allow individual organizations to set a different one.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Default branch name", enter the default branch name that new repositories should use.
1. Optionally, to enforce the default branch name for all organizations in the enterprise, select **Enforce across this enterprise**.
1. Click **Update**.



## Enforcing a policy for deploy keys

Across all organizations owned by your enterprise, you can allow members to create deploy keys in repositories, restrict deploy key creation, or allow owners to administer the setting on the organization level.

For more information about using deploy keys, see [Managing Deploy Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys). If you want fine-grained control over permissions, consider using a GitHub App instead. See [Overview](https://docs.github.com/en/apps/overview).

> [!WARNING]
> Changing this setting to disabled will result in **existing deploy keys being disabled** in all repositories in the enterprise. Scripts, apps, or workflows that create, use, or delete deploy keys will no longer work.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Deploy keys", review the information about changing the setting, then select a policy.
1. Click **Save**.


## Enforcing a policy for changes to repository visibility

Across all organizations owned by your enterprise, you can allow members with admin access to change a repository's visibility, restrict repository visibility changes to organization owners, or allow owners to administer the setting on the organization level. When you prevent members from changing repository visibility, only enterprise owners can change the visibility of a repository.

If an enterprise owner has restricted repository creation to organization owners only, then members will not be able to change repository visibility. For more information, see [Enforcing a policy for repository creation](#enforcing-a-policy-for-repository-creation).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Repository visibility change", review the information about changing the setting. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "Repository visibility change", select the dropdown menu and click a policy.

## Enforcing a policy for repository deletion and transfer

Across all organizations owned by your enterprise, you can allow members with admin permissions to delete or transfer a repository, restrict repository deletion and transfers to organization owners, or allow owners to administer the setting on the organization level.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Repository deletion and transfer", review the information about changing the setting. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)


1. Under "Repository deletion and transfer", select the dropdown menu and click a policy.


## Enforcing a policy for deleting issues

Across all organizations owned by your enterprise, you can allow members with admin access to delete issues in a repository, restrict issue deletion to organization owners, or allow owners to administer the setting on the organization level.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Repository issue deletion", review the information about changing the setting. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "Repository issue deletion", select the dropdown menu and click a policy.



## Enforcing a policy for renaming protected branches

By default, repository administrators can rename branches that are targeted by enterprise-level rules, provided the new branch name is still targeted by those same rules, or the administrator has permission to bypass the rule in question. You can restrict this ability to enterprise owners only.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Member privileges**.

1. Under "Repository branch renames", select the dropdown menu and click a policy.





## Enforcing a policy for Git push limits

To keep your repository size manageable and prevent performance issues, you can configure a file size limit for repositories in your enterprise.

By default, when you enforce repository upload limits, people cannot add or update files larger than 100 MB.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Repository upload limit", use the drop-down menu and click a maximum object size.
1. Optionally, to enforce a maximum upload limit for all repositories in your enterprise, select **Enforce on all repositories**

   ![Screenshot of the "Repository upload limit" policy section. The "Enforce on all repositories" checkbox is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

## Enforcing a policy for the display of member names in your repositories

Across all organizations owned by your enterprise, you can allow members to see a comment author's profile name, in addition to their username, in issues and pull requests for public and internal repositories.

![Screenshot of an issue comment. The header says "ashtom (Thomas Dohmke) commented 1 minute ago," with "(Thomas Dohmke)" outlined in dark orange.](/assets/images/help/issues/commenter-full-name.png)

> [!NOTE]
> When this policy is enforced for all repositories in the enterprise, it overrides the organization setting for private repositories. For more information, see [Managing The Display Of Member Names In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Allow members to see the comment author's profile name in public and internal repositories", select the dropdown menu and click a policy.
1. Optionally, to enforce the display of profile names for all repositories in your enterprise, select **Enforce for all repositories on the instance**.

   ![Screenshot of the policy option for the display of member names in your repositories. The "Enforce on all repositories" checkbox is outlined.](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

## Configuring the merge conflict editor for pull requests between repositories

Requiring users to resolve merge conflicts locally on their computer can prevent people from inadvertently writing to an upstream repository from a fork.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.


1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Conflict editor for pull requests between repositories", use the drop-down menu, and click **Disabled**.

## Configuring force pushes

Each repository inherits a default force push setting from the settings of the user account or organization that owns the repository. Each organization and user account inherits a default force push setting from the force push setting for the enterprise. If you change the force push setting for the enterprise, the policy applies to all repositories owned by any user or organization.

### Blocking force pushes to all repositories


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Force pushes", select the dropdown menu, and click **Allow**, **Block**, or **Block to the default branch**.
1. Optionally, to override organization and repository level settings for force pushes, select **Enforce on all repositories**.

### Blocking force pushes to a specific repository

> [!NOTE]
> Each repository automatically inherits default settings from the organization or user that owns it. You cannot override the default setting if the repository's owner has enforced the setting on all of their repositories.


1. Sign in to your GitHub Enterprise Server instance at `http(s)://HOSTNAME/login`.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the repository in the text field. Then to the right of the field, click **Search**.
![Screenshot of the "Search" page of the "Site admin" settings. The button to search repositories, labeled "Search," is outlined.](/assets/images/enterprise/site-admin-settings/search-for-things.png)

1. Under "Search results – Repositories", click the name of the repository.

1. In the upper-right corner of the page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Admin**.
![Screenshot of the header of the "Site admin" page for a user or repository. The "Admin" tab is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-admin-tab-top.png)

1. Under "Push and Pull", to the right of "Force pushes", select the dropdown menu, and click **Block** or **Block to the default branch**.

### Blocking force pushes to repositories owned by a user account or organization

Repositories inherit force push settings from the user account or organization to which they belong. User accounts and organizations in turn inherit their force push settings from the force push settings for the enterprise.

You can override the default inherited settings by configuring the settings for a user account or organization.

1. Sign in to your GitHub Enterprise Server instance at `http(s)://HOSTNAME/login`.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the user or organization in the text field. Then to the right of the field, click **Search**.
![Screenshot of the "Search" page of the "Site admin" settings. The button to search users and organizations, labeled "Search," is outlined.](/assets/images/enterprise/site-admin-settings/search-for-things.png)

1. In the search results, click the name of the user or organization.
![Screenshot of the "Accounts" search results. In the list of matches, "user1" is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-user.png)

1. In the upper-right corner of the page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Admin**.
![Screenshot of the header of the "Site admin" page for a user or repository. The "Admin" tab is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-admin-tab-top.png)

1. Under "Repository default settings" in the "Force pushes" section, select a policy.
    * To block force pushes to all branches, select **Block**.
    * To only block force pushes to the default branch, select **Block to the default branch**.
1. Optionally, to override repository-specific settings, select **Enforce on all repositories**. Note that this will **not** override an enterprise-wide policy.

   ![Screenshot of the "Repository default settings" policy section. The "Enforce on all repositories" checkbox is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)





## Configuring anonymous Git read access

> [!WARNING]
> * The Git protocol is unauthenticated and unencrypted. An attacker could intercept repository data transferred over connections using this protocol.
> * If you enable anonymous Git read access, you're responsible for all access and use of the feature. GitHub is not responsible for any unintended access, security risks, or misuse of the feature.
> * You may not use this feature to violate your license from GitHub, including the limit on the number of user licenses for your GitHub Enterprise Server instance.


If you have [enabled private mode](/admin/configuring-settings/hardening-security-for-your-enterprise/enabling-private-mode) for {% ifversion ghes %}your GitHub Enterprise Server instance, you can allow repository administrators to enable anonymous Git read access to public repositories.

Enabling anonymous Git read access allows users to bypass authentication for custom tools on your enterprise. When you or a repository administrator enable this access setting for a repository, unauthenticated Git operations (and anyone with network access to your GitHub Enterprise Server instance) will have read access to the repository without authentication.

Anonymous Git read access is disabled by default.

If necessary, you can prevent repository administrators from changing anonymous Git access settings for repositories on your enterprise by locking the repository's access settings. After you lock a repository's Git read access setting, only a site administrator can change the setting.

To see the repositories with anonymous Git read access enabled, filter the repositories list in the site admin dashboard.


> [!NOTE]
> * You cannot change the Git read access settings for forked repositories since they inherit their access settings from the root repository by default.
> * If a public repository becomes private, then anonymous Git read access will automatically be disabled for that repository and it forks.
> * If a repository with anonymous authentication contains Git LFS assets, it will fail to download the Git LFS assets since they still require authentication. We strongly recommend not enabling anonymous Git read access for a repository with Git LFS assets.


### Setting anonymous Git read access for all repositories


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.


1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Anonymous Git read access", use the drop-down menu, and click **Enabled**.
1. Optionally, to prevent repository admins from changing anonymous Git read access settings in all repositories on your enterprise, select **Prevent repository admins from changing anonymous Git read access**.

### Setting anonymous Git read access for a specific repository

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the repository in the text field. Then to the right of the field, click **Search**.
![Screenshot of the "Search" page of the "Site admin" settings. The button to search repositories, labeled "Search," is outlined.](/assets/images/enterprise/site-admin-settings/search-for-things.png)

1. Under "Search results – Repositories", click the name of the repository.

1. In the upper-right corner of the page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Admin**.
![Screenshot of the header of the "Site admin" page for a user or repository. The "Admin" tab is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-admin-tab-top.png)

1. Under "Danger Zone", next to "Enable Anonymous Git read access", click **Enable**.

   ![Screenshot of the "Enable anonymous Git read access" setting. The "Enable" button is outlined.](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
1. Review the changes. To confirm, click **Yes, enable anonymous Git read access.**
1. Optionally, to prevent repository admins from changing this setting for this repository, select **Prevent repository admins from disabling anonymous Git read access**.
{% endif %}
