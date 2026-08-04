# Configuring OpenID Connect in HashiCorp Vault

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Overview

OpenID Connect (OIDC) allows your GitHub Actions workflows to authenticate with a HashiCorp Vault to retrieve secrets.

This guide gives an overview of how to configure HashiCorp Vault to trust GitHub's OIDC as a federated identity, and demonstrates how to use this configuration in the [hashicorp/vault-action](https://github.com/hashicorp/vault-action) action to retrieve secrets from HashiCorp Vault.

## Prerequisites

* To learn the basic concepts of how GitHub uses OpenID Connect (OIDC), and its architecture and benefits, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect).


* Before proceeding, you must plan your security strategy to ensure that access tokens are only allocated in a predictable way. To control how your cloud provider issues access tokens, you **must** define at least one condition, so that untrusted repositories can’t request access tokens for your cloud resources. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#establishing-oidc-trust-with-your-cloud-provider).



* If you're following this guide on GHE.com, understand that you must substitute certain values in the following documentation. See [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#following-these-guides-on-ghecom).



## Adding the identity provider to HashiCorp Vault

To use OIDC with HashiCorp Vault, you will need to add a trust configuration for the GitHub OIDC provider. For more information, see the HashiCorp Vault [documentation](https://www.vaultproject.io/docs/auth/jwt).

To configure your Vault server to accept JSON Web Tokens (JWT) for authentication:

1. Enable the JWT `auth` method, and use `write` to apply the configuration to your Vault.
   For `oidc_discovery_url` and `bound_issuer` parameters, use `https://HOSTNAME/_services/token`. These parameters allow the Vault server to verify the received JSON Web Tokens (JWT) during the authentication process.

   ```shell copy
   vault auth enable jwt
   ```

   ```shell copy
   vault write auth/jwt/config \
     bound_issuer="https://HOSTNAME/_services/token" \
     oidc_discovery_url="https://HOSTNAME/_services/token"
   ```

   

   > [!NOTE]
   > If a unique issuer URL for an enterprise was set using the REST API (as described in [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#switching-to-a-unique-token-url)), the values for `bound_issuer` and `oidc_discover_url` must match that unique URL. For example, for an enterprise named `octocat` that uses the unique issuer URL, `bound_issuer` and `oidc_discovery_url` must be set to `https://token.actions.githubusercontent.com/octocat`.

   

1. Configure a policy that only grants access to the specific paths your workflows will use to retrieve secrets. For more advanced policies, see the HashiCorp Vault [Policies documentation](https://www.vaultproject.io/docs/concepts/policies).

   ```shell copy
   vault policy write myproject-production - <<EOF
   # Read-only permission on 'secret/data/production/*' path

   path "secret/data/production/*" {
     capabilities = [ "read" ]
   }
   EOF
   ```

1. Configure roles to group different policies together. If the authentication is successful, these policies are attached to the resulting Vault access token.

   ```shell copy
   vault write auth/jwt/role/myproject-production -<<EOF
   {
     "role_type": "jwt",
     "user_claim": "actor",
     "bound_claims": {
       "repository": "user-or-org-name/repo-name"
     },
     "policies": ["myproject-production"],
     "ttl": "10m"
   }
   EOF
   ```

* `ttl` defines the validity of the resulting access token.
* Ensure that the `bound_claims` parameter is defined for your security requirements, and has at least one condition. Optionally, you can also set the `bound_subject` as well as the `bound_audiences` parameter.
* To check arbitrary claims in the received JWT payload, the `bound_claims` parameter contains a set of claims and their required values. In the above example, the role will accept any incoming authentication requests from the `repo-name` repository owned by the `user-or-org-name` account.
* To see all the available claims supported by GitHub's OIDC provider, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#oidc-token-claims).

For more information, see the HashiCorp Vault [documentation](https://www.vaultproject.io/docs/auth/jwt).

## Updating your GitHub Actions workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
1. Use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to exchange the OIDC token (JWT) for a cloud access token.

> [!NOTE]
> When environments are used in workflows or in OIDC policies, we recommend adding protection rules to the environment for additional security. For example, you can configure deployment rules on an environment to restrict which branches and tags can deploy to the environment or access environment secrets. For more information, see [Manage Environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).


To add OIDC integration to your workflows that allow them to access secrets in Vault, you will need to add the following code changes:

* Grant permission to fetch the token from the GitHub OIDC provider:
  * The workflow needs `permissions:` settings with the `id-token` value set to `write`. This lets you fetch the OIDC token from every job in the workflow.
* Request the JWT from the GitHub OIDC provider, and present it to HashiCorp Vault to receive an access token:
  * You can use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to fetch the JWT and receive the access token from Vault, or you could use the [Actions toolkit](https://github.com/actions/toolkit/) to fetch the tokens for your job.

This example demonstrates how to use OIDC with the official action to request a secret from HashiCorp Vault.

### Adding permissions settings

The job or workflow run requires a `permissions` setting with [`id-token: write`](/actions/tutorials/authenticate-with-github_token#modifying-the-permissions-for-the-github_token) to allow GitHub's OIDC provider to create a JSON Web Token for every run.

> [!NOTE] Setting `id-token: write` in the workflow’s permissions does not give the workflow permission to modify or write to any resources. Instead, it only allows the workflow to request (fetch) and use (set) an OIDC token for an action or step. This token is then used to authenticate with external services using a short-lived access token.

For detailed information on required permissions, configuration examples, and advanced scenarios, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#workflow-permissions-for-the-requesting-the-oidc-token).


> [!NOTE]
> When the `permissions` key is used, all unspecified permissions are set to _no access_, with the exception of the metadata scope, which always gets _read_ access. As a result, you may need to add other permissions, such as `contents: read`. See [Automatic token authentication](/actions/tutorials/authenticate-with-github_token) for more information.

### Requesting the access token

The `hashicorp/vault-action` action receives a JWT from the GitHub OIDC provider, and then requests an access token from your HashiCorp Vault instance to retrieve secrets. For more information, see the HashiCorp Vault GitHub Action [documentation](https://github.com/hashicorp/vault-action).

This example demonstrates how to create a job that requests a secret from HashiCorp Vault.

* `VAULT-URL`: Replace this with the URL of your HashiCorp Vault.
* `VAULT-NAMESPACE`: Replace this with the Namespace you've set in HashiCorp Vault. For example: `admin`.
* `ROLE-NAME`: Replace this with the role you've set in the HashiCorp Vault trust relationship.
* `SECRET-PATH`: Replace this with the path to the secret you're retrieving from HashiCorp Vault. For example: `secret/data/production/ci npmToken`.

```yaml copy
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b
        with:
          method: jwt
          url: VAULT-URL
          namespace: VAULT-NAMESPACE # HCP Vault and Vault Enterprise only
          role: ROLE-NAME
          secrets: SECRET-PATH

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

> [!NOTE]
> * If your Vault server is not accessible from the public network, consider using a self-hosted runner with other available Vault [auth methods](https://www.vaultproject.io/docs/auth). For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners).
> * `VAULT-NAMESPACE` must be set for a Vault Enterprise (including HCP Vault) deployment. For more information, see [Vault namespace](https://www.vaultproject.io/docs/enterprise/namespaces).

### Revoking the access token

By default, the Vault server will automatically revoke access tokens when their TTL is expired, so you don't have to manually revoke the access tokens. However, if you do want to revoke access tokens immediately after your job has completed or failed, you can manually revoke the issued token using the [Vault API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

1. Set the `exportToken` option to `true` (default: `false`). This exports the issued Vault access token as an environment variable: `VAULT_TOKEN`.
1. Add a step to call the [Revoke a Token (Self)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) Vault API to revoke the access token.

```yaml copy
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b
        with:
          exportToken: true
          method: jwt
          url: VAULT-URL
          role: ROLE-NAME
          secrets: SECRET-PATH

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            VAULT-URL/v1/auth/token/revoke-self
```

## Further reading

* [Oidc With Reusable Workflows](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-with-reusable-workflows)
* [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners)
