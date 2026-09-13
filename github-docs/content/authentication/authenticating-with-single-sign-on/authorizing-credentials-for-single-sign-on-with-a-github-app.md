# Authorizing credentials for single sign-on with a GitHub App

## About authorizing credentials with a GitHub App

By default, enterprise-installed GitHub Apps cannot authorize credentials. To reduce the number of times that enterprise members must authorize the same credential for individual organizations, you can allow an app to authorize existing personal access tokens (classic) or verified, user-owned SSH authentication keys. Up to 50 selected organizations are allowed per request.

To authorize a credential for a single organization without a GitHub App, see [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on) or [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).

## Prerequisites

Before the app can authorize credentials, the following requirements must be met:

* The enterprise must use enterprise-level SSO.
* The credential owner must be a member of every organization where the app will authorize the credential.

## Creating the GitHub App

1. Register a new app. For instructions, see [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app#registering-a-github-app). The app must:

   * Be owned by the enterprise or an organization in the enterprise.
   * Have write access to the "Enterprise credentials" permission.

1. Note the app's client ID, then generate and securely store a private key. See [Managing Private Keys For GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps).
1. Install the app on your enterprise account. See [Installing A GitHub App On Your Enterprise](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-on-your-enterprise).
1. In the URL of the app's installation page, note the installation ID. The ID is the string of numbers at the end of the `/enterprises/ENTERPRISE/settings/installations/ID` URL.

## Allowing a GitHub App to authorize credentials


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.


1. Under "Credentials," enable **Allow GitHub Apps to authorize credentials**.

## Generating an installation access token

The app must use an enterprise installation access token to authenticate its API requests. Organization installation access tokens, user access tokens, and personal access tokens are not supported.

To generate an installation access token:

1. Use the app's client ID and private key to generate a JSON Web Token (JWT). See [Generating A Json Web Token JWT For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app).
1. Use the JWT and enterprise installation ID to create an installation access token. See [Generating An Installation Access Token For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app).

The installation access token inherits the enterprise permissions granted to the app, cannot be scoped down, and expires after one hour.

## Finding credential identifiers

For credentials that are already authorized for an organization in your enterprise, an organization owner can use the REST API to obtain identifiers in bulk. See [Orgs](https://docs.github.com/en/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization).

In the response, use `authorized_credential_id` for a personal access token (classic), or `fingerprint` for an SSH key. Do not use `credential_id`, which identifies the credential's authorization for that organization.

This endpoint does not return credentials that have not been authorized for the organization. To obtain an identifier for another credential, use one of these methods:

* For a personal access token (classic), open the token from the [token settings](https://github.com/settings/tokens) page. The token ID is the number at the end of the `/settings/tokens/ID` URL. Alternatively, if the token was used for an action recorded in the enterprise audit log, an enterprise owner can find the ID in the event's `token_id` field. The ID is available in the audit log only while an enterprise-visible event authenticated with that token is retained. Share the ID, not the token value. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and [Searching The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise).
* For an SSH key, find the SHA-256 fingerprint for the verified, user-owned authentication key. For more information, see [Reviewing Your SSH Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys).

## Authorizing a credential

Use the REST API to authorize the credential for selected organizations. For example:

```shell
curl --request POST \
  --url "https://api.github.com/enterprises/ENTERPRISE/credential-authorizations" \
  --header "Accept: application/vnd.github+json" \
  --header "Authorization: Bearer INSTALLATION-ACCESS-TOKEN" \
  --header "X-GitHub-Api-Version: 2026-03-10" \
  --data '{
    "credential_id": 12345678,
    "credential_type": "classic_pat",
    "organizations": ["ORGANIZATION-1", "ORGANIZATION-2"]
  }'
```

Replace `ENTERPRISE` with the enterprise slug, `INSTALLATION-ACCESS-TOKEN` with the installation access token, and `ORGANIZATION-1` and `ORGANIZATION-2` with the organization slugs. Replace `12345678` with the ID of the personal access token (classic). To authorize an SSH key instead, replace `12345678` with the key's SHA-256 fingerprint and replace `classic_pat` with `ssh_key`.

For more information, see [Credential Authorizations](https://docs.github.com/en/rest/enterprise-admin/credential-authorizations).

## Disabling credential authorization by GitHub Apps

Disabling the setting prevents apps from creating new credential authorizations. Existing authorizations remain active until they are revoked, the credential is revoked or deleted, or the credential owner loses membership in the organization.

You can use the same REST API to revoke authorizations that an app created through enterprise delegation.
