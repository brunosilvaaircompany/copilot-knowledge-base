# Configure blob storage

For most customers, we recommend storing archives with GitHub-owned blob storage. This is the simplest path and does not require any extra configuration.

However, you may want to configure storage with an external provider if you have firewall requirements or need to retain archives after the migration is complete.

## Choosing where to stage archives

The GL2GH extension exports each GitLab project to an archive, then uploads the archive to blob storage that GitHub can read from. You choose the storage backend when you run a migration.

Storage option | How to select it | Notes
-------------- | ---------------- | -----
GitHub-owned blob storage (recommended) | `--use-github-storage` | No setup required. GitHub deletes the archive automatically after a successful migration, or seven days after a failed migration.
AWS S3 | `--aws-bucket-name` (with the `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY` environment variables, and optionally `AWS_SESSION_TOKEN`) | You own the bucket and its lifecycle. GitHub does not delete archives from your storage.
Azure Blob Storage | `AZURE_STORAGE_CONNECTION_STRING` environment variable (for a single `migrate-repo` command, you can instead use `--azure-storage-connection-string`) | Only storage-account access-key connection strings are supported (not SAS). GitHub does not delete archives from your storage.

## Configuring blob storage

If you are using GitHub-owned blob storage, you do not need to configure anything. You will use the `--use-github-storage` flag to select this method with the CLI. However, you may want to set the `GITHUB_OWNED_STORAGE_MULTIPART_MEBIBYTES` variable (default 100 MiB, minimum 5 MiB) to a lower number if you have a slow or proxied connection.

If you are using external blob storage, you will need to set this up.

### Setting up an AWS S3 storage bucket

In AWS, set up a S3 bucket. For more information, see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) in the AWS documentation.

You will also need an AWS access key and secret key with the following permissions:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucketMultipartUploads",
                "s3:AbortMultipartUpload",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:ListMultipartUploadParts"
            ],
            "Resource": [
                "arn:aws:s3:::github-migration-bucket",
                "arn:aws:s3:::github-migration-bucket/*"
            ]
        }
    ]
}
```

> [!NOTE]
> GitHub Enterprise Importer does not delete your archive from AWS after your migration is finished. To reduce storage costs, we recommend configuring auto-deletion of your archive after a period of time. For more information, see [Setting lifecycle configuration on a bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html) in the AWS documentation.


When you're ready to run your migration, you will need to provide your AWS credentials to the GitHub CLI: region, access key, secret key, and session token (if required). You can pass them as arguments, or set environment variables called `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`.

You will also need to pass in the name of the S3 bucket using the `--aws-bucket-name` argument.


### Setting up an Azure Blob Storage storage account

In Azure, create a storage account and make a note of your connection string. For more information, see [Manage storage account access keys](https://learn.microsoft.com/en-gb/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#regenerate-access-keys) in Microsoft Docs.

> [!NOTE]
> GitHub Enterprise Importer does not delete your archive from Azure Blob Storage after your migration is finished. To reduce storage costs, we recommend configuring auto-deletion of your archive after a period of time. For more information, see [Optimize costs by automatically managing the data lifecycle](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview) in Microsoft Docs.


When you're ready to run your migration, you can either pass your connection string into the GitHub CLI as an argument, or pass it in using an environment variable called `AZURE_STORAGE_CONNECTION_STRING`.


### Allowing network access

If you have configured firewall rules on your storage account, ensure you have allowed access to the IP ranges for your migration destination. See [Manage Access](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access#configure-ip-allow-lists-on-github).
