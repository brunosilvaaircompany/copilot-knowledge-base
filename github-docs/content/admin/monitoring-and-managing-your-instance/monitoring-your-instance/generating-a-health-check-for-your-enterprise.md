# Generating a Health Check for your enterprise

> [!NOTE]
> Generating a Health Check is currently in public preview for GitHub Enterprise Server and subject to change.

## About generated Health Checks

You can create a support bundle for your GitHub Enterprise Server instance that contains a lot of data, such as diagnostics and log files. To help analyze and interpret this data, you can generate a Health Check. For more information about support bundles, see [Providing Data To GitHub Support](https://docs.github.com/en/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

A Health Check provides the following information about your GitHub Enterprise Server instance.
* Insights into the general health of your GitHub Enterprise Server instance, such as upgrade status, storage, and license seat consumption
* A security section, which focuses on subdomain isolation and user authentication
* Analysis of Git requests, with details about the busiest repositories and Git users
* Analysis of API requests, including the busiest times, most frequently requested endpoints, and most active callers

If you're a Premium Plus customer and want to generate a Health Check for GitHub Enterprise Cloud, contact GitHub Support. For more information, see [Creating A Support Ticket](https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket).

## Generating a Health Check

Before you can generate a Health Check, you must create a support bundle. For more information, see [Providing Data To GitHub Support](https://docs.github.com/en/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

1. Navigate to the [GitHub Support portal](https://support.github.com/).
1. In the upper-right corner of the page, click **Premium**.
1. To the right of **Health Checks**, click **Request Health Check**.
1. Under "Select an enterprise account", use the drop-down menu to select an enterprise account.
1. Under "Upload a support bundle", click **Chose File** and choose a file to upload. Then, click **Request Health Check**.

After you request a Health Check, a job is scheduled to generate the Health Check. After several hours to one day, the generated Health Check will appear in the "Health Checks" section of the GitHub Support portal.
