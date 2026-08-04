When you publish a package that is scoped to a personal account or an organization, the package is not linked to a repository by default. If you connect a package to a repository, the package's landing page will show information and links from the repository, such as the README. You can also choose to have the package inherit its access permissions from the linked repository. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

## Connecting a repository to a user-scoped package on GitHub

1. On GitHub, navigate to the main page of your personal account.
1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. On your profile page, in the header, click the **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages** tab.

1. Search for and then click the name of the package that you want to manage.
1. Under your package versions, click **Connect repository**.
1. Select a repository to link to the package, then click **Connect repository**.


## Connecting a repository to an organization-scoped package on GitHub

1. On GitHub, navigate to the main page of your organization.
1. Under your organization name, click the **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages** tab.

   ![Screenshot of @octo-org's profile page. The "Packages" tab is highlighted with an orange outline.](/assets/images/help/package-registry/org-tab-for-packages-with-overview-tab.png)

1. Search for and then click the name of the package that you want to manage.
1. Under your package versions, click **Connect repository**.
1. Select a repository to link to the package, then click **Connect repository**.


## Connecting a repository to a container image using the command line



> [!NOTE]
> If you publish a package that is linked to a repository, the package automatically inherits the access permissions of the linked repository, and GitHub Actions workflows in the linked repository automatically get access to the package, unless your organization has disabled automatic inheritance of access permissions. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#about-inheritance-of-access-permissions).







>[!NOTE] Container registry is currently in public preview for GitHub Enterprise Server and subject to change.

Both GitHub Packages and subdomain isolation must be enabled to use Container registry. For more information, see [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).





1. In your Dockerfile, add this line, replacing `HOSTNAME`, `OWNER` and `REPO` with your details:

   ```shell
   LABEL org.opencontainers.image.source=https://github.com/OWNER/REPO
   ```

   For example, if you're the user `octocat` and own `my-repo`, and your GitHub hostname is `github.companyname.com`, you would add this line to your Dockerfile:

   ```shell
   LABEL org.opencontainers.image.source=https://github.com/octocat/my-repo
   ```

   For more information, see [LABEL](https://docs.docker.com/engine/reference/builder/#label) in the official Docker documentation and [Pre-defined Annotation Keys](https://github.com/opencontainers/image-spec/blob/main/annotations.md#pre-defined-annotation-keys) in the `opencontainers/image-spec` repository.

1. Build your container image. This example builds an image from the Dockerfile in the current directory and assigns the image name `hello_docker`.

   ```shell
   docker build -t hello_docker .
   ```

1. Optionally, review the details of the Docker image you just created.

   ```shell
   $ docker images
   > REPOSITORY          TAG         IMAGE ID       CREATED         SIZE
   > hello_docker        latest      142e665b1faa   5 seconds ago   125MB
   > redis               latest      afb5e116cac0   3 months ago    111MB
   > alpine              latest      a6215f271958   5 months ago    5.29MB
   ```

1. Assign a name and hosting destination to your Docker image.

   ```shell
   docker tag IMAGE_NAME ghcr.io{% elsif ghes %}containers.HOSTNAME
/NAMESPACE/NEW_IMAGE_NAME:TAG
   ```

   Replace `NAMESPACE` with the name of the personal account or organization to which you want the package to be scoped.

   For example:

   ```shell
   docker tag 38f737a91f39 ghcr.io{% elsif ghes %}containers.github.companyname.com
/octocat/hello_docker:latest
   ```

1. If you haven't already, authenticate to the Container registry. For more information, see [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry).
   {% raw %}

   ```shell
   $ echo $CR_PAT | docker login {% endraw %}ghcr.io{% elsif ghes %}containers.HOSTNAME
{% raw %} -u USERNAME --password-stdin
   > Login Succeeded
   ```

   {% endraw %}
1. Push your container image to the Container registry.

   ```shell
   docker push ghcr.io{% elsif ghes %}containers.HOSTNAME
/NAMESPACE/IMAGE-NAME:TAG
   ```

   For example:

   ```shell
   docker push ghcr.io{% elsif ghes %}containers.github.companyname.com
/octocat/hello_docker:latest
   ```

## Unlinking a repository from a package on GitHub

> [!NOTE]
> Unlinking a package from a repository will remove the repository information from the package's landing page and can affect the access pattern depending on whether the package inherits its access permissions from the repository. For more information, see [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#about-inheritance-of-access-permissions). This behavior does not apply to Apache Maven packages, as outlined in [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

1. On GitHub, navigate to the settings page of the Package you'd like to unlink.

1. On the Package settings page, you will see a Repository source section. If this section is not present, then the Package is not currently linked to a repository.

1. Click on the trash icon in the top right corner of the Repository source section.

> It is possible that the Repository source section exists, but there is no trash icon present. This is because a repository source has been defined as part of the packaged code i.e. a `package.json` file, `.gemspec` file, however, it is not actually linked to a repository on GitHub. To link the package to a repository, you will need to follow the steps in the section above.

1. Confirm that you would like to unlink the repository from the package with the dialogue.

## Migrating a package to another repository

If you currently have a package linked to a repository and you would like to link it to a different repository, this can be done by unlinking the package from the current repository and linking it to the new repository.

1. Follow the steps to unlink it, see [Unlinking a repository from a package on GitHub](/packages/learn-github-packages/connecting-a-repository-to-a-package#unlinking-a-repository-from-a-package-on-github).
1. Follow the steps to link the package to the new repository, see [Connecting a repository to an organization-scoped package on GitHub](/packages/learn-github-packages/connecting-a-repository-to-a-package#connecting-a-repository-to-an-organization-scoped-package-on-github) or [Connecting a repository to a user-scoped package on GitHub](/packages/learn-github-packages/connecting-a-repository-to-a-package#connecting-a-repository-to-a-user-scoped-package-on-github).
