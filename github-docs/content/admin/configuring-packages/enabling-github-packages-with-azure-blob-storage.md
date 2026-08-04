# Enabling GitHub Packages with Azure Blob Storage

> [!WARNING]
> * It is critical that you set the restrictive access policies you need for your storage bucket, because GitHub does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible on the public internet. If restrictions by IP address have been set up, please include IP addresses for your GitHub Enterprise Server instance and the end users who will be using the your GitHub Enterprise Server instance.
> * We recommend using a dedicated bucket for GitHub Packages, separate from the bucket you use for GitHub Actions storage.
> * Make sure to configure the storage account you'll want to use in the future. We do not recommend changing your storage after you start using GitHub Packages. If you must move GitHub Packages storage to a new storage account on Azure Blob Storage, credentials-based authentication must remain unchanged and you need to plan for a single maintenance window if you're also migrating GitHub Actions storage. See "GitHub Packages considerations" in [Migrating GitHub Actions External Storage](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/migrating-github-actions-external-storage). For cross-provider moves, contact [GitHub Enterprise Support](https://support.github.com).

## Prerequisites

Before you can enable and configure GitHub Packages on your GitHub Enterprise Server instance, you need to prepare your Azure Blob storage bucket. To prepare your Azure Blob storage bucket, we recommend consulting the official Azure Blob storage docs at the official [Azure Blob Storage documentation site](https://docs.microsoft.com/en-us/azure/storage/blobs/).

## Enabling GitHub Packages with Azure Blob Storage

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the left sidebar, click **Packages**.


1. Under "GitHub Packages", select the **Enable GitHub Packages** checkbox.


1. Under "Packages Storage", select **Azure Blob Storage** and enter your Azure container name for your packages storage bucket and connection string.

   You must create a storage container prior to setting the container name and connection string.

   > [!NOTE]
   > You can find your Azure Connection String by navigating to the Access Key menu in your Azure storage account.
   >
   > Usage of a SAS Token or SAS URL as connection string is not currently supported.

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Next steps

As a next step, you can customize which package ecosystems you would like to make available to end users on GitHub. For more information, see [Configuring Package Ecosystem Support For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/configuring-package-ecosystem-support-for-your-enterprise).

For an overview of getting started with GitHub Packages on GitHub, see [Getting Started With GitHub Packages For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/getting-started-with-github-packages-for-your-enterprise).
