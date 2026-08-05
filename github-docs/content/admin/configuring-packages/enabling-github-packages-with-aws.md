# Enabling GitHub Packages with AWS

> [!WARNING]
> * It is critical that you configure any restrictive access policies you need for your storage bucket, because GitHub does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible to the public internet. For more information, see [Setting bucket and object access permissions](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html) in the AWS Documentation. If restrictions by IP address have been set up, please include IP addresses for your GitHub Enterprise Server instance and the end users who will be using the your GitHub Enterprise Server instance.
> * We recommend using a dedicated bucket for GitHub Packages, separate from the bucket you use for GitHub Actions storage.
> * Make sure to configure the bucket you'll want to use in the future. We do not recommend changing your storage after you start using GitHub Packages. If you must move GitHub Packages storage to a new bucket on AWS, ensure you plan for a single maintenance window and update both configurations together if you're also migrating GitHub Actions storage. See "GitHub Packages considerations" in [Migrating GitHub Actions External Storage](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/migrating-github-actions-external-storage). For cross-provider moves, contact [GitHub Enterprise Support](https://support.github.com).

## Prerequisites

Before you can enable and configure GitHub Packages on your GitHub Enterprise Server instance, you need to prepare your AWS storage bucket. To prepare your AWS storage bucket, we recommend consulting the official AWS docs at [AWS Documentation](https://docs.aws.amazon.com/index.html).

Ensure your AWS access key ID and secret have the following permissions:
* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`
* `s3:ListBucket`

## Enabling GitHub Packages with AWS external storage

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the left sidebar, click **Packages**.


1. Under "GitHub Packages", select the **Enable GitHub Packages** checkbox.


1. Under "Packages Storage", select **Amazon S3** and enter your storage bucket's details:
    * **AWS Service URL:** The service URL for your bucket. For example, if your S3 bucket was created in the `us-west-2 region`, this value should be `https://s3.us-west-2.amazonaws.com`.

      For more information, see [AWS service endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html) in the AWS documentation.

    * **AWS S3 Bucket:** The name of your S3 bucket dedicated to GitHub Packages.
    * **AWS S3 Access Key** and **AWS S3 Secret Key:** The AWS access key ID and secret key to access your bucket.

      For more information on managing AWS access keys, see the [AWS Identity and Access Management Documentation](https://docs.aws.amazon.com/iam/index.html).
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Next steps

As a next step, you can customize which package ecosystems you would like to make available to end users on GitHub. For more information, see [Configuring Package Ecosystem Support For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/configuring-package-ecosystem-support-for-your-enterprise).

For an overview of getting started with GitHub Packages on GitHub, see [Getting Started With GitHub Packages For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/getting-started-with-github-packages-for-your-enterprise).
