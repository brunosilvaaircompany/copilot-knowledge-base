# Configuring OpenID Connect in Azure

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Overview

OpenID Connect (OIDC) allows your GitHub Actions workflows to access resources in Azure, without needing to store the Azure credentials as long-lived GitHub secrets.

This guide gives an overview of how to configure Azure to trust GitHub's OIDC as a federated identity, and includes a workflow example for the [`azure/login`](https://github.com/Azure/login) action that uses tokens to authenticate to Azure and access resources.

## Prerequisites

* To learn the basic concepts of how GitHub uses OpenID Connect (OIDC), and its architecture and benefits, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect).


* Before proceeding, you must plan your security strategy to ensure that access tokens are only allocated in a predictable way. To control how your cloud provider issues access tokens, you **must** define at least one condition, so that untrusted repositories can’t request access tokens for your cloud resources. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#establishing-oidc-trust-with-your-cloud-provider).



* If you're following this guide on GHE.com, understand that you must substitute certain values in the following documentation. See [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#following-these-guides-on-ghecom).



For repositories created after July 15, 2026, and repository renames or transfers after that date, use an immutable default OIDC `sub` claim that includes owner and repository IDs (not available on GitHub Enterprise Server). Existing repositories keep the previous format unless they opt in. For more information, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#immutable-subject-claims).


* You must ensure the following OIDC endpoints are accessible by your cloud provider:
  * `https://HOSTNAME/_services/token/.well-known/openid-configuration`
  * `https://HOSTNAME/_services/token/.well-known/jwks`

  

  > [!NOTE]
  > Microsoft Entra ID (previously known as Azure AD) does not have fixed IP ranges defined for these endpoints.

* Make sure that the value of the issuer claim that's included with the JSON Web Token (JWT) is set to a publicly routable URL. For more information, see [Openid Connect](https://docs.github.com/en/enterprise-server@latest/actions/concepts/security/openid-connect).


## Adding the federated credentials to Azure

GitHub's OIDC provider works with Azure's workload identity federation. For an overview, see Microsoft's documentation at [Workload identity federation](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation).

To configure the OIDC identity provider in Azure, you will need to perform the following configuration. For instructions on making these changes, refer to [the Azure documentation](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

In the following procedure, you will create an application for Microsoft Entra ID (previously known as Azure AD).

1. Create an Entra ID application and a service principal.
1. Add federated credentials for the Entra ID application.
1. Create GitHub secrets for storing Azure configuration.

Additional guidance for configuring the identity provider:

* For security hardening, make sure you've reviewed [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#establishing-oidc-trust-with-your-cloud-provider). For an example, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#configuring-the-subject-in-your-cloud-provider).
* For the `audience` setting, `api://AzureADTokenExchange` is the recommended value, but you can also specify other values here.

## Updating your GitHub Actions workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
1. Use the [`azure/login`](https://github.com/Azure/login) action to exchange the OIDC token (JWT) for a cloud access token.

> [!NOTE]
> When environments are used in workflows or in OIDC policies, we recommend adding protection rules to the environment for additional security. For example, you can configure deployment rules on an environment to restrict which branches and tags can deploy to the environment or access environment secrets. For more information, see [Manage Environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).


### Adding permissions settings

The job or workflow run requires a `permissions` setting with [`id-token: write`](/actions/tutorials/authenticate-with-github_token#modifying-the-permissions-for-the-github_token) to allow GitHub's OIDC provider to create a JSON Web Token for every run.

> [!NOTE] Setting `id-token: write` in the workflow’s permissions does not give the workflow permission to modify or write to any resources. Instead, it only allows the workflow to request (fetch) and use (set) an OIDC token for an action or step. This token is then used to authenticate with external services using a short-lived access token.

For detailed information on required permissions, configuration examples, and advanced scenarios, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#workflow-permissions-for-the-requesting-the-oidc-token).


### Requesting the access token

The [`azure/login`](https://github.com/Azure/login) action receives a JWT from the GitHub OIDC provider, and then requests an access token from Azure. For more information, see the [`azure/login`](https://github.com/Azure/login) documentation.

The following example exchanges an OIDC ID token with Azure to receive an access token, which can then be used to access cloud resources.

```yaml copy
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

name: Run Azure Login with OIDC
on: [push]

permissions:
  id-token: write
  contents: read
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'Az CLI login'
        uses: azure/login@8c334a195cbb38e46038007b304988d888bf676a
        with:
          client-id: {% raw %}${{ secrets.AZURE_CLIENT_ID }}{% endraw %}
          tenant-id: {% raw %}${{ secrets.AZURE_TENANT_ID }}{% endraw %}
          subscription-id: {% raw %}${{ secrets.AZURE_SUBSCRIPTION_ID }}{% endraw %}

      - name: 'Run az commands'
        run: |
          az account show
          az group list
```

## Further reading

* [Oidc With Reusable Workflows](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-with-reusable-workflows)
* [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners)
