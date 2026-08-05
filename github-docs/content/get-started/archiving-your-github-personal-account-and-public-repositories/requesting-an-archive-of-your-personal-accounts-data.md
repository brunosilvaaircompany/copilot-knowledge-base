# Requesting an archive of your personal account's data

GitHub stores repository and profile metadata from your personal account's activity. You can export your personal account's data through your account settings on GitHub or with the User Migration API.

For more information about the data GitHub stores that is available for exporting, see [Migrations](https://docs.github.com/en/rest/migrations#download-a-user-migration-archive).

When you request an export of your personal data through your account settings on GitHub, GitHub packages your personal data in a `tar.gz` file and sends you an email to your primary email address with a download link.

By default, the download link expires after seven days. At any time before the download link expires, you can disable the link from your user settings. For more information, see [Requesting An Archive Of Your Personal Accounts Data](https://docs.github.com/en/get-started/archiving-your-github-personal-account-and-public-repositories/requesting-an-archive-of-your-personal-accounts-data#deleting-access-to-an-archive-of-your-personal-accounts-data).

If your operating system cannot natively unpack the `tar.gz` file, you can use a third-party tool to extract the archived files. For more information, see [How to unzip a tar.gz file](https://opensource.com/article/17/7/how-unzip-targz-file) on Opensource.com.

The generated `tar.gz` file reflects the data stored at the time you started the data export.

## Downloading an archive of your personal account's data

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Account**.

1. Under "Export account data", click **Start export** or **New export**.
1. Once the export is ready to download, GitHub will send you a download link to your primary email address.
1. Click the download link in your email and re-enter your password if prompted.
1. You'll be redirected to a `tar.gz` file that you can download.

## Deleting access to an archive of your personal account's data

You can disable the download link sent to your email before an export expires by deleting the export.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Account**.

1. In the "Export account data" section, next to the data export download you want to disable, click **Delete**.
