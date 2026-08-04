>[!NOTE] Container registry is currently in public preview for GitHub Enterprise Server and subject to change.

Both GitHub Packages and subdomain isolation must be enabled to use Container registry. For more information, see [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).




## About the Container registry

The Container registry stores container images within your organization or personal account, and allows you to associate an image with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository. You can also access public container images anonymously.
 For more information, see [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

For more information about configuring GitHub Packages for your GitHub Enterprise Server instance, see [Getting Started With GitHub Packages For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/getting-started-with-github-packages-for-your-enterprise).

## About migration from the Docker registry

The Container registry replaces GitHub's Docker registry.
 If the Docker registry on your GitHub Enterprise Server instance contains images, you must manually migrate the images to the Container registry.

>[!NOTE] GitHub Enterprise Server 3.6 supports migration for Docker images stored in organizations. A future release will support migration of user-owned images.


Any scripts or GitHub Actions workflows that use the namespace for the Docker registry, `docker.pkg.github.com`{% elsif ghes %}<code>docker.<em>HOSTNAME</em></code>, will continue to work after migration to the Container registry at `ghcr.io`{% elsif ghes %}<code>containers.<em>HOSTNAME</em></code>.
 For more information about the impact of migration to the Container registry, see [Migrating To The Container Registry From The Docker Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry).

## Migrating organizations to the Container registry

You can start a migration of all your organizations' Docker images to the Container registry. The duration of the migration operation depends on the total number of images to migrate, and the overall load on your instance. After a successful migration, GitHub Enterprise Server will display a summary, and all future uploads of Docker images will use the Container registry.

If a site administrator has configured email notifications for your GitHub Enterprise Server instance, you will receive an email after the migration is complete. For more information, see [Configuring Email For Notifications](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-email-for-notifications).

### During the migration

During the migration, the CPU and memory usage for your instance will increase. To ensure the performance of the instance for your users, GitHub recommends that you begin a migration during a period of reduced activity.

>[!WARNING] Do not modify settings for your enterprise or run `ghe-config-apply` from an administrative SSH session. These actions will trigger a configuration run, which can restart services and may interrupt the migration.

### After the migration

After the migration, storage pressure on your instance will increase due to the duplication of image files in the Docker registry and the Container registry. A future release of GitHub Enterprise Server will remove the duplicated files when all migrations are complete.

For more information about monitoring the performance and storage of your GitHub Enterprise Server instance, see [About The Monitor Dashboards](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards).

### Starting a migration


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Packages**.
1. To the right of the number of packages to migrate, click **Start migration**. During the migration, GitHub Enterprise Server will display progress on this page.

After the migration completes, the page will display the results. If a migration fails, the page will show the organizations that own the package that caused the failure.

## Re-running a failed organization migration

Prior to migration, if a user has created a package in the Container registry that has an identical name to an existing package in the Docker registry, the migration will fail.

1. Delete the affected container in the Container registry. For more information, see [Deleting And Restoring A Package](https://docs.github.com/en/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github).

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Packages**.

1. To the right of the number of packages to migrate, click **Re-run migration**. During the migration, GitHub Enterprise Server will display progress on this page.
1. If the migration fails again, start from step 1 and re-run the migration.
