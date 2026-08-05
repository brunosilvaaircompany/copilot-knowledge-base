# Allowing access to GitHub's services from a restricted network

## About access to GitHub from a restricted network

In rare cases, an institution's network access policy may restrict access to specific domain names for end users. For example, the policy may use DNS filtering to deny access to sites like GitHub. If your institution requires this level of control, but you still want to permit access to services on GitHub, you can create exceptions in your policy to allow access to the necessary domains.

## Retrieving GitHub's domain names using the REST API

You can use the REST API to retrieve a list of GitHub's domain names.

> [!WARNING]
> The list of domains from the REST API is not intended to be comprehensive. If you block access to services using DNS, but selectively allow access to GitHub's domain names, any or all of GitHub and related services may not function properly or at all for your end users.

For more information, see [Meta](https://docs.github.com/en/rest/meta).
