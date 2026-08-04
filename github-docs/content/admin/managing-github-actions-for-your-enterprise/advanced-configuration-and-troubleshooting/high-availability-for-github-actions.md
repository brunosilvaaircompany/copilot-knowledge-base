# High availability for GitHub Actions

## Replication or redundancy of your GitHub Actions data

GitHub Actions uses external storage to store workflow artifacts and logs. This data is stored on your external provider, such as Azure blob storage, Amazon S3, Google Cloud Storage, or MinIO. As a result, GitHub Enterprise Server backups and GitHub Enterprise Server high availability configurations do not provide protection for the data stored on this external storage, and instead rely on the data protection and replication provided by the external storage provider, such as Azure, Google Cloud, or AWS.


We strongly recommend that you configure your GitHub Actions external storage to use data redundancy or replication. For more information, refer to your storage provider's documentation:

* [Azure Storage redundancy documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Amazon S3 replication documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

## High availability replicas

### Promoting a replica

When enabling a high availability configuration, any replicas are automatically configured to use the GitHub Actions external storage configuration. If you need to initiate a failover to promote a replica, no extra configuration changes are required for GitHub Actions.

For more information, see [Initiating A Failover To Your Replica Appliance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability/initiating-a-failover-to-your-replica-appliance).

### Removing a high availability replica

Avoid letting multiple instances to write to the same GitHub Actions external storage. This could occur when using the `ghe-repl-teardown` command to stop and permanently remove a GitHub Actions-enabled replica. This is because the replica will be converted into a standalone GitHub Enterprise Server, and after the teardown it will still use the same external storage configuration as the primary.

To help avoid this issue, we recommend either decommissioning the replica server or updating its GitHub Actions configuration with different external storage.
