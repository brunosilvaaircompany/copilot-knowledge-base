# GitHub authentication discovery endpoints

> [!NOTE]
> The GitHub authentication metadata documents described in this article are in public preview and subject to change.
> While the endpoints may be present on GitHub Enterprise Cloud with data residency and some versions of GitHub Enterprise Server, they contain incorrect information.

GitHub publishes two metadata documents used in the OAuth 2.0 and OpenID Connect protocols:

* **OAuth 2.0 Authorization Server Metadata** ([RFC 8414](https://datatracker.ietf.org/doc/html/rfc8414)): `https://github.com/.well-known/oauth-authorization-server/login/oauth`
* **OpenID Connect Discovery** ([OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html)): `https://github.com/login/oauth/.well-known/openid-configuration`

These documents are used to validate tokens issued by GitHub as well as programmatically determine how to sign in a user.

## Intended use

These documents are only published for MCP clients using [RFC 9728](https://datatracker.ietf.org/doc/html/rfc9728) to discover the OAuth 2.0 endpoints needed to get a token for the GitHub MCP server.

GitHub does not currently implement OpenID Connect in its OAuth flows and does not issue ID tokens for users or apps.

## Issuer

The issuer for GitHub.com is `https://github.com/login/oauth`.

This is the base URL used to find the other documents listed and an important parameter when configuring authentication libraries.

## Difference from GitHub Actions tokens

These metadata documents do not apply to the tokens issued for GitHub Actions workflows. GitHub Actions uses a separate dedicated issuer and token profile. For more information about Actions tokens, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect).
