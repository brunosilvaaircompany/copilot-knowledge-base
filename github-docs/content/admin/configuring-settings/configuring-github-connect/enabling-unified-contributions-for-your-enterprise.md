# Enabling unified contributions for your enterprise

## About unified contributions

As an enterprise owner, you can allow end users to send anonymized contribution counts for their work from your GitHub Enterprise Server instance to their contribution graph on GitHub.com or GHE.com.

After you enable unified contributions, before individual users can send contribution counts from your GitHub Enterprise Server instance to GitHub Enterprise Cloud, each user must also connect their user account on GitHub Enterprise Server with an account on GitHub Enterprise Cloud. For more information, see [Sharing Contributions From GitHub Enterprise Server](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/sharing-contributions-from-github-enterprise-server).

GitHub requests updates hourly using GitHub Connect.


If the enterprise owner disables the functionality or individual users opt out of the connection, the contribution counts from GitHub Enterprise Server will be deleted on GitHub Enterprise Cloud. If the user reconnects their profiles after disabling them, the contribution counts for the past 90 days are restored.

GitHub Enterprise Server **only** sends the contribution count and source (GitHub Enterprise Server) for connected users. It does not send any information about the contribution or how it was made.

## Enabling unified contributions

Before enabling unified contributions on your GitHub Enterprise Server instance, you must enable GitHub Connect. See [Enabling GitHub Connect For Ghecom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom) or [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).

1. Sign in to GitHub Enterprise Server and GitHub Enterprise Cloud.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the left sidebar, click **Enterprise overview**.

1. At the top of the page, click **{% octicon "plug" aria-hidden="true" aria-label="plug" %} GitHub Connect**.

1. To the right of "Unified contributions", click **Enable**.

   ![Screenshot of the "Unified contributions" option on the GitHub Connect page. The "Enable" button is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
1. [Sign in](https://enterprise.github.com/login) to the GitHub Enterprise Server site to receive further instructions.

When you request access, we may redirect you to the GitHub Enterprise Server site to check your current terms of service.
