>[!NOTE] Container registry is currently in public preview for GitHub Enterprise Server and subject to change.

Both GitHub Packages and subdomain isolation must be enabled to use Container registry. For more information, see [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).




A package can inherit its visibility and access permissions from a repository, or, for registries that support granular permissions, you can set the visibility and permissions of the package separately from a repository.

For the list of registries that support granular permissions, and for more information about permissions for packages, packages-related scopes for PATs, or managing permissions for your GitHub Actions workflows, see [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages).

## About inheritance of access permissions

In registries that support granular permissions, packages are scoped to a personal account or organization. In these registries, you can publish a package without linking the package to a repository, then determine who can access the package by setting access permissions and visibility in the package's settings.

By default, if you publish a package that is linked to a repository, the package automatically inherits the access permissions (but not the visibility) of the linked repository. For example, a user who has read access to the linked repository will also have read access to the package. When a package automatically inherits access permissions, GitHub Actions workflows in the linked repository also automatically get access to the package.

A package only inherits the access permissions of a linked repository automatically if you link the repository to the package before you publish the package, such as by adding the `org.opencontainers.image.source` Docker label to a container image. If you connect a published package to a repository from the package's settings page, the package will retain its existing access permissions, and will not inherit the access permissions of the repository unless you explicitly select this option. Additionally, organizations can disable automatic inheritance of access permissions for all new packages scoped to their organization. For more information, see [Disabling automatic inheritance of access permissions in an organization](#disabling-automatic-inheritance-of-access-permissions-in-an-organization) below.

When a package inherits permissions from a repository, to grant or remove access to your package, you must configure the permissions settings of the linked repository. If you want to set a package's access settings separately from the repository linked to the package, you must remove the inherited permissions from the package. For more information, see [Selecting whether a package inherits permissions from a repository](#selecting-whether-a-package-inherits-permissions-from-a-repository) below.

If you publish a package in a registry that only supports repository-scoped permissions, the package is always linked to a repository, and always inherits the permissions of the linked repository.

## About setting visibility and access permissions for packages

If a package belongs to a registry that supports granular permissions, anyone with admin permissions to the package can set the package to private or public, and can grant access permissions for the package that are separate from the permissions set at the organization and repository levels. For the list of registries that support granular permissions, see [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

In most registries, to pull a package, you must authenticate with a personal access token or `GITHUB_TOKEN`, regardless of whether the package is public or private. However, in the Container registry, public packages allow anonymous access and can be pulled without authentication or signing in via the CLI.



> [!NOTE]
> If you publish a package that is linked to a repository, the package inherits its permissions from the linked repository by default. To access the package's granular permissions settings, you must remove the package's inherited permissions. If you're the owner of an organization, you can disable the automatic inheritance of permissions for all new packages scoped to your organization. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#selecting-whether-a-package-inherits-permissions-from-a-repository) and [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#disabling-automatic-inheritance-of-access-permissions-in-an-organization).



When you publish a package, you automatically get admin permissions to the package. If you publish a package to an organization, anyone with the `owner` role in the organization also gets admin permissions to the package.

For packages scoped to a personal account, you can give any person an access role. For packages scoped to an organization, you can give any person or team in the organization an access role.

If you are using a GitHub Actions workflow to manage your packages, you can grant an access role to the repository the workflow is stored in through the **Actions access** menu option. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).

| Permission | Access description |
|------------|--------------------|
| Read       | Can download package. <br> Can read package metadata. |
| Write      | Can upload and download this package. <br> Can read and write package metadata. |
| Admin      | Can upload, download, delete, and manage this package. <br> Can read and write package metadata. <br> Can grant package permissions.

> [!NOTE]
> The ability for GitHub Actions workflows to delete and restore packages using the REST API is currently in public preview and subject to change.



## Configuring access to packages for your personal account

If you have admin permissions to a package that's scoped to a personal account, you can assign read, write, or admin roles to other users. For more information about these permission roles, see [About inheritance of access permissions](#about-inheritance-of-access-permissions).

If your package is private or internal and scoped to an organization, then you can only give access to other organization members or teams.

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)

1. Under "Manage access" or "Inherited access", click **Invite teams or people** and enter the name, username, or email of the person you want to give access.
 Teams cannot be given access to a package that is scoped to a personal account.
1. Next to the username or team name, use the **Role** drop-down menu to select a desired permission level.


The selected users will automatically be given access and don't need to accept an invitation first.

## Configuring access to packages for an organization

If you have admin permissions to a package that is scoped to an organization, you can assign read, write, or admin roles to other users and teams. For more information about these permission roles, see [About inheritance of access permissions](#about-inheritance-of-access-permissions).

If your package is private or internal and scoped to an organization, then you can only give access to other organization members or teams.

1. On GitHub, navigate to the main page of your organization.
1. Under your organization name, click the **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages** tab.

   ![Screenshot of @octo-org's profile page. The "Packages" tab is highlighted with an orange outline.](/assets/images/help/package-registry/org-tab-for-packages-with-overview-tab.png)

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)

1. Under "Manage access" or "Inherited access", click **Invite teams or people** and enter the name, username, or email of the person you want to give access.
 You can also enter a team name from the organization to give all team members access.
1. Next to the username or team name, use the **Role** drop-down menu to select a desired permission level.


The selected users or teams will automatically be given access and don't need to accept an invitation first.

## Selecting whether a package inherits permissions from a repository

By default, if you publish a package that is linked to a repository, the package inherits the access permissions of the linked repository. We recommend you let packages inherit their permissions from a repository, because this simplifies the process of managing access to a package.

When a package inherits permissions from a repository, to grant or remove access to your package, you must configure the permissions of the linked repository.

If you want to configure a package's access settings on a granular level, separately from the linked repository, you must remove the inherited permissions from the package.

> [!NOTE]
> If you change how a package gets its access permissions, any existing permissions for the package are overwritten.

### Selecting the inheritance setting for packages scoped to your personal account

1. On GitHub, navigate to the main page of your personal account.
1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. On your profile page, in the header, click the **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages** tab.

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)

1. To choose whether a package inherits access permissions from the linked repository, under "Manage access" or "Inherited access", select or deselect **Inherit access from repository (recommended)**.

   > [!NOTE]
   > The name of this section changes depending on whether the package already inherits its permissions from a repository.


### Selecting the inheritance setting for packages scoped to an organization



> [!TIP]
> If you're the owner of an organization, you can prevent all new packages scoped to your organization from automatically inheriting permissions from a linked repository. For more information, see [Disabling automatic inheritance of access permissions in an organization](#disabling-automatic-inheritance-of-access-permissions-in-an-organization) below.



1. On GitHub, navigate to the main page of your organization.
1. Under your organization name, click the **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages** tab.

   ![Screenshot of @octo-org's profile page. The "Packages" tab is highlighted with an orange outline.](/assets/images/help/package-registry/org-tab-for-packages-with-overview-tab.png)

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)

1. To choose whether a package inherits access permissions from the linked repository, under "Manage access" or "Inherited access", select or deselect **Inherit access from repository (recommended)**.

   > [!NOTE]
   > The name of this section changes depending on whether the package already inherits its permissions from a repository.




## Disabling automatic inheritance of access permissions in an organization

By default, if you publish a package that is linked to a repository, the package automatically inherits the access permissions of the linked repository. As an organization owner, you can disable automatic inheritance for all packages scoped to your organization.

If you disable automatic inheritance of access permissions, new packages scoped to your organization will not automatically inherit the permissions of a linked repository. However, anyone with admin permissions to a package in your organization will be able to enable or disable inheritance of permissions for that package.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages**.
1. Under "Default Package Settings", deselect **Inherit access from source repository**.
1. Click **Save**.



## Ensuring workflow access to your package

For packages scoped to a personal account or an organization, to ensure that a GitHub Actions workflow has access to your package, you must give explicit access to the repository where the workflow is stored.

The specified repository does not need to be the repository where the source code for the package is kept. You can give multiple repositories workflow access to a package.


If you publish a package that is linked to a repository, GitHub Actions workflows in the linked repository automatically get access to the package, unless your organization has disabled the automatic inheritance of access permissions. For more information, see [About inheritance of access permissions](#about-inheritance-of-access-permissions) above.


> [!NOTE]
> * Syncing your package with a repository through the **Actions access** menu option is different than connecting your package to a repository. For more information about linking a repository to your package, see [Connecting A Repository To A Package](https://docs.github.com/en/packages/learn-github-packages/connecting-a-repository-to-a-package).
> * You can choose to limit permissions to workflow jobs using the `permissions` key and `packages` scope. For more information, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token#modifying-the-permissions-for-the-github_token).
> * If you grant a public repository access to private packages, forks of the repository may be able to access the private packages.


### GitHub Actions access for packages scoped to personal accounts

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)


1. In the left sidebar, click **Actions access**.


1. To ensure your workflow has access to your package, you must add the repository where the workflow is stored. Under "Manage Actions access", click **Add repository** and search for the repository you want to add.
   ![Screenshot of the "Manage Actions access" section of the package settings page. The "Add repository" button is highlighted with an orange outline.](/assets/images/help/package-registry/add-repository-button.png)

1. Use the **Role** drop-down menu to select the default access level that you'd like the repository to have to your package.


To further customize access to your package, see [Configuring access to packages for your personal account](#configuring-access-to-packages-for-your-personal-account).

### GitHub Actions access for packages scoped to organizations

1. On GitHub, navigate to the main page of your organization.
1. Under your organization name, click the **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages** tab.

   ![Screenshot of @octo-org's profile page. The "Packages" tab is highlighted with an orange outline.](/assets/images/help/package-registry/org-tab-for-packages-with-overview-tab.png)

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)


1. In the left sidebar, click **Actions access**.


1. Under "Manage Actions access", click **Add repository** and search for the repository you want to add.
   ![Screenshot of the "Manage Actions access" section of the package settings page. The "Add repository" button is highlighted with an orange outline.](/assets/images/help/package-registry/add-repository-button.png)

1. Use the **Role** drop-down menu to select the default access level that you'd like the repository to have to your package.


To further customize access to your package, see [Configuring access to packages for an organization](#configuring-access-to-packages-for-an-organization).



## Ensuring GitHub Codespaces access to your package

By default, a codespace can seamlessly access certain packages in registries that support granular permissions, such as packages published in the same repository with the **Inherit access** option selected. For the list of GitHub Packages registries that support granular permissions and seamless GitHub Codespaces access, see [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

Otherwise, to ensure that a codespace has access to your package, you must grant access to the repository where the codespace is being launched.

The specified repository does not need to be the repository where the source code for the package is kept. You can give codespaces in multiple repositories access to a package.

Once you've selected the package you're interested in sharing with codespaces in a repository, you can grant that repo access.

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)


1. Under "Manage Codespaces access", click **Add repository**.

   ![Screenshot of the "Manage Codespaces access" section of the package settings page. The "Add repository" button is highlighted with an orange outline.](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

1. Search for the repository you want to add.

1. Repeat for any additional repositories you would like to allow access.

1. If the codespaces for a repository no longer need access to a package, you can remove access. Click **{% octicon "trash" aria-label="remove access to repository from this package" %}**.

   ![Screenshot of the "Manage Codespaces access" section of the package settings page. The trash icon is highlighted with an orange outline.](/assets/images/help/package-registry/manage-codespaces-access-item.png)



## Configuring visibility of packages for your personal account

When you first publish a package that is scoped to your personal account, the default visibility is private and only you can see the package. You can modify a private or public package's access by changing the access settings.

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)

1. At the bottom of the page, under "Danger Zone", click **Change visibility**.
1. Select a visibility setting:
   * To make the package visible to anyone, select **Public**.

     > [!WARNING]
     > Once you make a package public, you cannot make it private again.

   * To make the package visible to a custom selection of people, select **Private**.
1. To confirm, type the name of the package, then click **I understand the consequences, change package visibility**.

## Package creation visibility for organization members

For registries that support granular permissions, you can choose the visibility of packages that organization members can publish by default. For the list of these registries, see [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. On the left, click **Packages**.
1. Under "Package Creation", choose whether you want to enable the creation of public, private, or internal packages.
    * To enable organization members to create public packages, click **Public**.
    * To enable organization members to create private packages that are only visible to other organization members, click **Private**. You can further customize the visibility of private packages.
    * To enable organization members to create internal packages that are visible to all organization members, click **Internal**. If the organization belongs to an enterprise, the packages will be visible to all enterprise members.

   
> [!NOTE]
> Maven and Gradle are currently only supported for public and private repository visibilities. Internal repository visibility is not supported.



## Configuring visibility of packages for an organization

When you first publish a package, the default visibility is private and only you can see the package. You can grant users or teams different access roles for your package through the access settings. Once you make your package public, you cannot make your package private again.

1. On GitHub, navigate to the main page of your organization.
1. Under your organization name, click the **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages** tab.

   ![Screenshot of @octo-org's profile page. The "Packages" tab is highlighted with an orange outline.](/assets/images/help/package-registry/org-tab-for-packages-with-overview-tab.png)

1. Search for and then click the name of the package that you want to manage.
1. On your package's landing page, on the right-hand side, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Package settings**.

   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)

1. At the bottom of the page, under "Danger Zone", click **Change visibility** and choose a visibility setting:
    * To make the package visible to anyone, click **Public**.

      > [!WARNING]
      > Once you make a package public, you cannot make it private again.

    * To make the package visible to a custom selection of people in your organization, click **Private**.
    * To make the package visible to all organization members, click **Internal**. If the organization belongs to an enterprise, the packages will be visible to all enterprise members.
