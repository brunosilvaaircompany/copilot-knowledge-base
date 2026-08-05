# Uploading a new license to GitHub Enterprise Server

## About license files for GitHub Enterprise Server

When you purchase or download a new license for GitHub Enterprise Server you must upload the new license file to GitHub Enterprise Server to unlock your new user licenses.

If you use GitHub Enterprise Cloud, you can download a license from your enterprise. For more information, see [Ghes License Files](https://docs.github.com/en/billing/concepts/enterprise-billing/ghes-license-files) and [Download Your License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/download-your-license).

If you'd like to renew or add user licenses to GitHub Enterprise, or if you have questions about your license, contact [GitHub's Sales team](https://github.com/enterprise/contact). Your new license file will be available for download immediately after you complete your order.


## Uploading your license from the Management Console

1. Sign into GitHub Enterprise Server as a site administrator.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Licensing{% elsif ghes %}License**.

1. In the "User licenses" section, under "Quick links", click **Update license**. If prompted, enter the root password for your instance.

   ![Screenshot of the "User licenses" section of the "License" page. A link, labeled "Update license", is outlined in dark orange.](/assets/images/enterprise/management-console/update-license-link.png)
1. To upload your license, click **License file** and select your license file. Alternatively, drag your license file onto the **License file** upload area.

   ![Screenshot of the "License" page of the Management Console. The "License file" upload area is highlighted with an orange outline.](/assets/images/enterprise/management-console/upload-license.png)
1. Click **Upload**. Your license will be updated in the background. The change may take a few minutes before it is visible on your instance.

## Uploading your license with the REST API

You can use the REST API to upload a license to your GitHub Enterprise Server instance. See [Manage Ghes](https://docs.github.com/en/enterprise-server@latest/rest/enterprise-admin/manage-ghes#upload-an-enterprise-license) in the documentation for GitHub Enterprise Server.{% elsif ghes %}See [Manage Ghes](https://docs.github.com/en/rest/enterprise-admin/manage-ghes#upload-an-enterprise-license).

## Uploading a license with the GitHub CLI

You can import a license to your GitHub Enterprise Server instance using the `gh es` extension of the GitHub CLI. See the [usage instructions](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-config-import-license) in the `github/gh-es` repository on GitHub.com.

For more information about accessing your instance via the extension, see [Administering Your Instance Using The GitHub CLI](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli) in the documentation for GitHub Enterprise Server.{% elsif ghes %}see [Administering Your Instance Using The GitHub CLI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli).

## Uploading a license via SSH

You can upload and interact with your license from the command line via SSH. See the documentation for the `ghe-license` command in [Command Line Utilities](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-license) in the documentation for GitHub Enterprise Server.{% elsif ghes %}[Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-license).

For more information about accessing your instance via SSH, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh) in the documentation for GitHub Enterprise Server.{% elsif ghes %}[Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
