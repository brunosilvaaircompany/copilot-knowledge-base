# REST API endpoints for user migrations

## About user migrations

These endpoints are only available to authenticated account owners. For more information, see [Authenticating To The Rest API](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api).

You can use these endpoints to review, backup, or migrate your user data stored on GitHub.com. For a list of migration data that you can download, see [Download a user migration archive](#download-a-user-migration-archive).

To download an archive, you'll need to start a user migration first. Once the status of the migration is `exported`, you can download the migration.

Once you've created a migration archive, it will be available to download for seven days. But, you can delete the user migration archive sooner if you'd like. You can unlock your repository when the migration is `exported` to begin using your repository again or delete the repository if you no longer need the source data.

> [!NOTE] These endpoints are currently unavailable on [Data Residency](https://docs.github.com/en/admin/data-residency).
