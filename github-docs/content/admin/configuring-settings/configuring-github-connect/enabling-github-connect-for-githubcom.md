# Enabling GitHub Connect for GitHub.com

You can access additional features and workflows on your GitHub Enterprise Server instance by enabling GitHub Connect. See [About GitHub Connect](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/about-github-connect).

## What happens when GitHub Connect is enabled?

When you enable GitHub Connect, you configure a connection between your GitHub Enterprise Server instance and an enterprise account on GitHub Enterprise Cloud. The connection uses HTTPS over ports 443 or 80 and is secured by TLS.


Enabling GitHub Connect creates a GitHub App owned by the enterprise account on GitHub Enterprise Cloud. GitHub Enterprise Server uses the GitHub App's credentials to make requests to GitHub Enterprise Cloud.

GitHub Enterprise Server stores credentials from the GitHub App. The following credentials will be replicated to all nodes in a high availability or cluster environment, and stored in any backups, including snapshots created by GitHub Enterprise Server Backup Utilities.

* An authentication token, which is valid for one hour
* A private key, which is used to generate a new authentication token


## Prerequisites

* You must have an enterprise account on GitHub.com that uses GitHub Enterprise Cloud.
* Your enterprise account on GitHub.com must be invoiced. Enterprise accounts on the free trial of GitHub Enterprise Cloud or that pay by credit card cannot be connected to your GitHub Enterprise Server instance.
* If your enterprise account on GitHub.com uses IP allow lists, you must add the IP address or network for your GitHub Enterprise Server instance to your IP allow list. See [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#adding-an-allowed-ip-address) in the GitHub Enterprise Cloud documentation.
* To configure a connection, your proxy configuration must allow connectivity to `github.com`, `api.github.com`, and `uploads.github.com`. For more information, see [Configuring An Outbound Web Proxy Server](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-an-outbound-web-proxy-server).
* If you have previously enabled GitHub Connect for an enterprise on GHE.com, you must change your configuration to allow connections to GitHub.com. See [Enabling GitHub Connect For Ghecom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom#reenabling-connections-to-githubcom).

## Enabling GitHub Connect

To enable GitHub Connect, you must be an enterprise owner on both GitHub Enterprise Server and GitHub Enterprise Cloud.

1. Sign in to your GitHub Enterprise Server instance and GitHub.com.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "plug" aria-hidden="true" aria-label="plug" %} GitHub Connect**.

1. Under "GitHub Connect is not enabled yet", click **Enable GitHub Connect**. By clicking **Enable GitHub Connect**, you agree to the [GitHub Terms For Additional Products And Features](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#connect).
1. To the right of the enterprise account you'd like to connect, click **Connect**.
