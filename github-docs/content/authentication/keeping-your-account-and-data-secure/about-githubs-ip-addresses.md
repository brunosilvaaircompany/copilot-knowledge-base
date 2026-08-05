# About GitHub's IP addresses

You can retrieve a list of the IP addresses for your GitHub environment from the [meta](https://api.github.com/meta) API endpoint. For more information, see [Meta](https://docs.github.com/en/rest/meta).

> [!NOTE]
> The list of GitHub IP addresses returned by the Meta API is not intended to be an exhaustive list. For example, IP addresses for some GitHub services might not be listed, such as LFS or GitHub Packages.

These IP addresses are used by GitHub to serve our content, deliver webhooks, and perform hosted GitHub Actions builds.

These ranges are in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). You can use an online conversion tool to convert from CIDR notation to IP address ranges, for example: [CIDR to IPv4 conversion site](https://www.ipaddressguide.com/cidr).

We make changes to our IP addresses from time to time. We do not recommend allowing by IP address, but if you use these IP ranges we strongly encourage regular monitoring of our API.

For applications to function, you must allow TCP ports 22, 80, and 443 via our IP ranges for `github.com` and `SUBDOMAIN.ghe.com`.

## GitHub Actions runner IP addresses and third-party IP reputation services

GitHub-hosted runners use dynamically assigned IP addresses from shared infrastructure. These IP addresses are published via the Meta API (for example, the `actions` and `actions_macos` keys). For more information, see [Meta](https://docs.github.com/en/rest/meta/meta#get-github-meta-information).

Third-party threat intelligence services, IP reputation scanners, or firewall vendors may flag these IP addresses as "malicious" or "suspicious." Because the underlying infrastructure is shared, activity from other users of the same infrastructure can influence the reputation scores assigned to these addresses.

GitHub does not control third-party IP reputation lists and cannot comment on their accuracy or update frequency. To verify whether an IP address belongs to GitHub-hosted runners, check the IP ranges returned by the Meta API.

If you have a security concern about a Microsoft-owned IP address, report it to the [Microsoft Security Response Center (MSRC)](https://msrc.microsoft.com/report/).


For more information about GitHub Actions runner IP ranges, see [Troubleshoot Workflows](https://docs.github.com/en/actions/how-tos/troubleshoot-workflows#runner-ip-addresses-flagged-by-security-scanners).

## Further reading

* [Troubleshooting Connectivity Problems](https://docs.github.com/en/get-started/using-github/troubleshooting-connectivity-problems)
* [Allowing Access To Githubs Services From A Restricted Network](https://docs.github.com/en/get-started/using-github/allowing-access-to-githubs-services-from-a-restricted-network)
