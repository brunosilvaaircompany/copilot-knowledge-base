# Enabling GitHub Packages with MinIO

> [!WARNING]
> * It is critical that you set the restrictive access policies you need for your storage bucket, because GitHub does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible on the public internet. If restrictions by IP address have been set up, please include IP addresses for your GitHub Enterprise Server instance and the end users who will be using the your GitHub Enterprise Server instance.
> * We recommend using a dedicated bucket for GitHub Packages, separate from the bucket you use for GitHub Actions storage.
> * Make sure to configure the bucket you'll want to use in the future. We do not recommend changing your storage after you start using GitHub Packages.
> * We recommend configuring the TLS for the bucket to avoid possible issues with Package Registry, for example, downloading from NuGet Registry.

## Prerequisites

Before you can enable and configure GitHub Packages on your GitHub Enterprise Server instance, you need to prepare your MinIO object store. See the [MinIO AIStor Documentation](https://docs.min.io/enterprise/aistor-object-store/).

Ensure your MinIO external storage access key ID and secret have these permissions:
* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`
* `s3:ListBucket`

## Enabling GitHub Packages with MinIO external storage

Although MinIO does not currently appear in the user interface under "Package Storage", MinIO is still supported by GitHub Packages on GitHub Enterprise. Also, note that MinIO's object storage is compatible with the S3 API and you can enter MinIO's bucket details in place of AWS S3 details.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the left sidebar, click **Packages**.


1. Under "GitHub Packages", select the **Enable GitHub Packages** checkbox.


1. Under "Packages Storage", select **Amazon S3**.
1. Enter your MinIO storage bucket's details in the AWS storage settings.
    * **AWS Service URL:** The hosting URL for your MinIO bucket.
    * **AWS S3 Bucket:** The name of your S3-compatible MinIO bucket dedicated to GitHub Packages.
    * **AWS S3 Access Key** and **AWS S3 Secret Key:** Enter the MinIO access key ID and secret key to access your bucket.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Next steps

As a next step, you can customize which package ecosystems you would like to make available to end users on GitHub. For more information, see [Configuring Package Ecosystem Support For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/configuring-package-ecosystem-support-for-your-enterprise).

For an overview of getting started with GitHub Packages on GitHub, see [Getting Started With GitHub Packages For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/getting-started-with-github-packages-for-your-enterprise).
