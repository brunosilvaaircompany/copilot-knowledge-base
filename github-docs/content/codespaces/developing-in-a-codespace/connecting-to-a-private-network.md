# Connecting to a private network

## About codespace networking

By default, your codespaces have access to all resources on the public internet, including package managers, license servers, databases, and cloud platform APIs, but they have no access to resources on private networks.

## Connecting to resources on a private network

There are currently two methods of accessing resources on a private network within GitHub Codespaces.
* Using a GitHub CLI extension to configure your local machine as a gateway to remote resources
* Using a VPN

### Using the GitHub CLI extension to access remote resources

> [!WARNING]
> The GitHub CLI extension is closing down and is no longer supported.

The GitHub CLI extension allows you to create a bridge between a codespace and your local machine, so that the codespace can access any remote resource that is accessible from your machine. The codespace uses your local machine as a network gateway to reach those resources. For more information, see [Using GitHub CLI to access remote resources](https://github.com/github/gh-net#codespaces-network-bridge).

### Using a VPN to access resources behind a private network

As an alternative to the GitHub CLI extension, you can use a VPN to access resources behind a private network from within your codespace.

We recommend VPN tools like [OpenVPN](https://openvpn.net/) to access resources on a private network. For more information, see [Using the OpenVPN client from GitHub Codespaces](https://github.com/codespaces-contrib/codespaces-openvpn).

There are also a number of third party solutions that, while not explicitly endorsed by GitHub, have provided examples of how to integrate with GitHub Codespaces.

These third party solutions include:

* [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Allowlisting private resources for codespaces

While GitHub publishes IP ranges for several products on its Meta API, IP addresses for codespaces are dynamically assigned, meaning your codespace is not guaranteed to have the same IP address day to day. For more information, see [Meta](https://docs.github.com/en/rest/meta/meta).

Allowlisting an entire IP range would give overly broad access to all codespaces (including users not affiliated with your codespaces), so for this reason codespace creation is disabled if you enable IP allow lists. For more information, see [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#enabling-allowed-ip-addresses).

## Restricting access to the public internet

At present, there is no way to restrict codespaces from accessing the public internet, or to restrict appropriately authenticated users from accessing a forwarded port.

For more information on how to secure your codespaces, see [Security In GitHub Codespaces](https://docs.github.com/en/codespaces/reference/security-in-github-codespaces).
