# Viewing usage for your GitHub Enterprise plan

## Viewing subscription and usage for your enterprise

You can view the subscription and usage for your enterprise and download a file with license details.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. Click **Licensing** to show detailed information on license use.


The information displayed varies according to your enterprise set up.

* GitHub Enterprise Cloud, potentially with licenses synchronized from GitHub Enterprise Server
* GitHub Enterprise Server

To learn more about the license data associated with your enterprise account and how the number of consumed user licenses is calculated, see [Enterprise License Usage](https://docs.github.com/en/billing/how-tos/troubleshooting/enterprise-license-usage).

## Finding information on GitHub Enterprise Cloud

On the "Licensing" page, the number of consumed licenses is shown under "Enterprise Cloud". In addition, you can see:

* Usage-based billing: the estimated monthly payment, assuming no further license changes
* Volume billing: your total available licenses and your subscription expiration date.

### Viewing more detailed information

* To view details of license usage, to the right of "Enterprise Cloud", click **More details**.
* To download a CSV file with license details, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Download CSV report**.

### Viewing history of changes to license usage

>[!NOTE]
> This feature is in public preview and only available to usage-based enterprise accounts without Visual Studio bundles.

To view the history of license usage over time, on the "Licensing" page, to the right of "Enterprise Cloud", click **Manage**.

The license history starts capturing history from the day the feature is enabled on your account, and provides a daily snapshot of license additions and removals for GitHub Enterprise Cloud. This information shows you how licenses are being consumed and why billed amounts change.

The license history shows:

* Daily snapshot of licenses so you can monitor usage over time
* Actor(s) that added or removed each license to provide accountability
* Date on which the license addition or removal was performed
* Effective date for when the license additions and removals will affect your monthly bill

### Synchronization of GitHub Enterprise Server use

The date of the last license sync occurred is shown under "Enterprise Server instances". Look for timestamps next to usage uploaded or synced events.

* "Server usage uploaded" indicates license usage between environments was manually updated when a GitHub Enterprise Server license file was uploaded.
* "GitHub Connect server usage synced" indicates license usage between environments was automatically updated.
* "GitHub Connect server usage never synced" indicates that GitHub Connect is configured, but license usage between environments has never updated successfully.

For more information, see [Sync License Usage](https://docs.github.com/en/billing/how-tos/manage-server-licenses/sync-license-usage).

### Synchronization of Visual Studio subscriptions with GitHub Enterprise subscriptions

If your GitHub license includes Visual Studio subscriptions with GitHub Enterprise, you can identify whether a user account on GitHub Enterprise Cloud has successfully matched with a Visual Studio subscriber by downloading the CSV file that contains additional license details. The license status will be one of the following:

* "Matched": The user account on GitHub.com is linked with a Visual Studio subscriber.
* "Pending Invitation": An invitation was sent to a Visual Studio subscriber, but the subscriber has not accepted the invitation.
* Blank: There is no Visual Studio association to consider for the user account on GitHub.com.

## Finding information on GitHub Enterprise Server

* Under "User licenses", view your total licenses, number of consumed licenses, and your subscription expiration date.
* To view details for license usage or download a JSON file with license details, click **View users** or **Export license usage**.
* Review your current GitHub Enterprise license, as well as consumed and available user licenses.

## Reporting license information using the REST API

You can also use the REST API to return consumed licenses data and the status of the license sync job. See [Licensing](https://docs.github.com/en/rest/enterprise-admin/licensing).
