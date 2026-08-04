GitHub's Docker registry (which used the namespace `docker.pkg.github.com`) has been replaced by the Container registry (which uses the namespace `https://ghcr.io`). The Container registry offers benefits such as granular permissions and storage optimizations for Docker images.

Docker images previously stored in the Docker registry are being automatically migrated into the Container registry. For more information, see [Migrating To The Container Registry From The Docker Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry) and [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

, and `~/TOKEN.txt` with the file path to your personal access token for GitHub.

For more information, see [Docker login](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin).

## Publishing an image

> [!NOTE]
> The GitHub Packages Docker registry  will be superseded in a future GitHub Enterprise Server release with the Container registry, which offers improved container support.{% elsif fpt %} is superseded by the Container registry, which offers improved container support.   For more information, see [Migrating To The Container Registry From The Docker Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry). 


> [!NOTE]
> Image names must only use lowercase letters.

GitHub Packages supports multiple top-level Docker images per repository. A repository can have any number of image tags. You may experience degraded service publishing or installing Docker images larger than 10GB, layers are capped at 5GB each. For more information, see [Docker tag](https://docs.docker.com/engine/reference/commandline/tag/) in the Docker documentation.

After you publish a package, you can view the package on GitHub. For more information, see [Viewing Packages](https://docs.github.com/en/packages/learn-github-packages/viewing-packages).


1. Determine the image name and ID for your docker image using `docker images`.

   ```shell
   $ docker images
   > <&nbsp>
   > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
   > IMAGE_NAME        VERSION    IMAGE_ID       4 weeks ago  1.11MB
   ```

1. Using the Docker image ID, tag the Docker image, replacing OWNER with the name of the personal account or organization that owns the repository, REPOSITORY with the name of the repository containing your project, IMAGE_NAME with name of the package or image, HOSTNAME with the hostname of your GitHub Enterprise Server instance, and VERSION with package version at build time.

   If your instance has subdomain isolation enabled:

   ```shell
   docker tag IMAGE_ID docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
   ```

   If your instance has subdomain isolation disabled:

   ```shell
   docker tag IMAGE_ID HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
   ```

1. If you haven't already built a Docker image for the package, build the image, replacing OWNER with the name of the personal account or organization that owns the repository, REPOSITORY with the name of the repository containing your project, IMAGE_NAME with name of the package or image, VERSION with package version at build time, HOSTNAME with the hostname of your GitHub Enterprise Server instance, and PATH to the image if it isn't in the current working directory.

   If your instance has subdomain isolation enabled:

   ```shell
   docker build -t docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
   ```

   If your instance has subdomain isolation disabled:

   ```shell
   docker build -t HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
   ```

1. Publish the image to GitHub Packages.

   If your instance has subdomain isolation enabled:

   ```shell
   docker push docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
   ```

   If your instance has subdomain isolation disabled:

   ```shell
   docker push HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
   ```

   > [!NOTE]
   > You must push your image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

### Example publishing a Docker image

These examples assume your instance has subdomain isolation enabled.

You can publish version 1.0 of the `monalisa` image to the `octocat/octo-app` repository using an image ID.

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with OWNER/REPO/IMAGE_NAME
$ docker tag c75bebcdd211 docker.HOSTNAME/octocat/octo-app/monalisa:1.0

# Push the image to GitHub Packages
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```

You can publish a new Docker image for the first time and name it `monalisa`.

```shell
# Build the image with docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.HOSTNAME/octocat/octo-app/monalisa:1.0 .

# Push the image to GitHub Packages
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```

## Downloading an image

> [!NOTE]
> The GitHub Packages Docker registry  will be superseded in a future GitHub Enterprise Server release with the Container registry, which offers improved container support.{% elsif fpt %} is superseded by the Container registry, which offers improved container support.   For more information, see [Migrating To The Container Registry From The Docker Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry). 


You can use the `docker pull` command to install a docker image from GitHub Packages, replacing OWNER with the name of the personal account or organization that owns the repository, REPOSITORY with the name of the repository containing your project, IMAGE_NAME with name of the package or image, HOSTNAME with the host name of your GitHub Enterprise Server instance, and TAG_NAME with tag for the image you want to install.

If your instance has subdomain isolation enabled:

```shell
docker pull docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```

If your instance has subdomain isolation disabled:

```shell
docker pull HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```

> [!NOTE]
> You must pull the image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

## Further reading

* [Deleting And Restoring A Package](https://docs.github.com/en/packages/learn-github-packages/deleting-and-restoring-a-package)

{% endif %}
