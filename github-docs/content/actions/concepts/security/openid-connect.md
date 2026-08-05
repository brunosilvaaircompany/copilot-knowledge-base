# OpenID Connect

## Overview of OpenID Connect (OIDC)

GitHub Actions workflows are often designed to access a cloud provider (such as AWS, Azure, GCP, HashiCorp Vault, and others) in order to deploy software or use the cloud's services. Before the workflow can access these resources, it will supply credentials, such as a password or token, to the cloud provider. These credentials are usually stored as a secret in GitHub, and the workflow presents this secret to the cloud provider every time it runs.

However, using hardcoded secrets requires you to create credentials in the cloud provider and then duplicate them in GitHub as a secret.

After you have established a trust connection with a cloud provider that supports OIDC, you can configure your workflow to request a short-lived access token directly from the cloud provider.

## Benefits of using OIDC

By updating your workflows to use OIDC tokens, you can adopt the following good security practices:

* **No cloud secrets:** You won't need to duplicate your cloud credentials as long-lived GitHub secrets. Instead, you can configure the OIDC trust on your cloud provider, and then update your workflows to request a short-lived access token from the cloud provider through OIDC.
* **Authentication and authorization management:** You have more granular control over how workflows can use credentials, using your cloud provider's authentication (authN) and authorization (authZ) tools to control access to cloud resources.
* **Rotating credentials:** With OIDC, your cloud provider issues a short-lived access token that is only valid for a single job, and then automatically expires.

## How OIDC integrates with GitHub Actions

The following diagram gives an overview of how GitHub's OIDC provider integrates with your workflows and cloud provider:

![Diagram of how a cloud provider integrates with GitHub Actions through access tokens and JSON web token cloud role IDs.](/assets/images/help/actions/oidc-architecture.png)

1. You establish an OIDC trust relationship in the cloud provider, allowing specific GitHub workflows to request cloud access tokens on behalf of a defined cloud role.
1. Every time your job runs, GitHub's OIDC provider auto-generates an OIDC token. This token contains multiple claims to establish a security-hardened and verifiable identity about the specific workflow that is trying to authenticate.
1. A step or action in the workflow job can request a token from GitHub’s OIDC provider, which can then be presented to the cloud provider as proof of the workflow’s identity.
1. Once the cloud provider successfully validates the claims presented in the token, it then provides a short-lived cloud access token that is available only for the duration of the job.

## Understanding the OIDC token

Each job requests an OIDC token from GitHub's OIDC provider, which responds with an automatically generated JSON web token (JWT) that is unique for each workflow job where it is generated. When the job runs, the OIDC token is presented to the cloud provider. To validate the token, the cloud provider checks if the OIDC token's subject and other claims are a match for the conditions that were preconfigured on the cloud role's OIDC trust definition.

The following example OIDC token uses a subject (`sub`) that references a job environment named `prod` in the `octo-org/octo-repo` repository.

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "https://HOSTNAME/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": "private",
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "runner_environment": "github-hosted",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "enterprise": "avocado-corp",
  "enterprise_id": "2",
  "repo_property_workspace_id": "ws-abc123",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "https://HOSTNAME/_services/token",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

> [!NOTE]
> The `sub` claim in this example uses the previous format. Repositories created after July 15, 2026 use an immutable default subject format that includes owner and repository IDs (not available on GitHub Enterprise Server). For more information, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#immutable-subject-claims).



## Establishing OIDC trust with your cloud provider

To use OIDC in your workflows, you must establish a trust relationship between GitHub and your cloud provider. This trust relationship ensures that only authorized workflows can request access tokens for your cloud resources.

Before granting an access token, your cloud provider checks that the [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) and any other claims used to set conditions in its trust settings match those in the request's JSON Web Token (JWT). If the trust configuration matches, your cloud provider issues a temporary access token to the workflow.

For steps and syntax for configuring OIDC trust and setting conditions for cloud providers, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#oidc-claims-used-to-define-trust-conditions-on-cloud-roles).

## Configuring OIDC on GHE.com

If you are part of an enterprise that uses GitHub Enterprise Cloud with data residency and you're setting up OIDC on GHE.com, you must **substitute certain values** while configuring OIDC.

For more information, see [Oidc](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/oidc#substituted-values-on-ghecom).



## Authenticating custom actions using OIDC

Custom actions use the `getIDToken()` method from the Actions toolkit or a `curl` command to authenticate using OIDC.

For more information, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#methods-for-requesting-the-oidc-token).

## Updating your workflows for OIDC

GitHub Actions workflows can use OIDC tokens instead of secrets to authenticate with cloud providers. Many popular cloud providers offer official login actions that simplify the process of using OIDC in your workflows. For more information about updating your workflows with specific cloud providers, see [Security Harden Deployments](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments).



## Using repository custom properties as OIDC claims

Organization and enterprise admins can include repository custom properties as claims in OIDC tokens. This enables attribute-based access control (ABAC) policies in your cloud provider, artifact registry, or secrets manager that are driven by repository metadata rather than hard-coded allow lists.

### How custom property claims work

The end-to-end flow for using custom properties as OIDC claims is as follows:

1. **Define custom properties.** An organization or enterprise admin creates custom properties (for example, `business_unit`, `data_classification`, or `environment_tier`) and assigns values to repositories. For more information, see [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization) and [Oidc](https://docs.github.com/en/actions/reference/security/oidc#including-repository-custom-properties-in-oidc-tokens). 
1. **Enable properties in OIDC tokens.** An organization or enterprise admin selects which custom properties should be included in OIDC tokens, using the settings UI or the REST API.
1. **Claims appear automatically.** Every workflow run in a repository that has a value set for an enabled property will include that value in its OIDC token, prefixed with `repo_property_`. No workflow-level configuration changes are required.
1. **Update cloud trust policies.** You update your cloud provider's trust conditions to evaluate the new `repo_property_*` claims, enabling fine-grained, attribute-based access decisions.

Because this builds on GitHub's existing OIDC short-lived credential model, no long-lived secrets are required, and every token is scoped, auditable, and automatically rotated per workflow run.

### Prerequisites

* Custom properties must already be defined at the organization or enterprise level. For more information, see [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).
* You must be an organization admin or enterprise admin.

### Adding a custom property to OIDC token claims

To include a custom property in OIDC tokens, use the REST API or the settings UI for your organization or enterprise.

* **Using the settings UI:** Navigate to your organization or enterprise's Actions OIDC settings page to view and manage which custom properties are included in OIDC tokens.

* **Using the REST API:** Send a `POST` request to the `/orgs/{org}/actions/oidc/customization/properties/repo` endpoint to add a custom property to the OIDC token claims for your organization. For request parameters and full details, see the REST API documentation for managing OIDC custom properties: [Oidc](https://docs.github.com/en/rest/actions/oidc).

### Example OIDC token with custom properties

The following example shows an OIDC token that includes two custom properties: a single-select property `business_unit` and a string property `workspace_id`. Each custom property appears in the token with the `repo_property_` prefix.

```json
{
  "sub": "repo:my-org/my-repo:ref:refs/heads/main",
  "aud": "https://github.com/my-org",
  "repository": "my-org/my-repo",
  "repository_owner": "my-org",
  "ref": "refs/heads/main",
  "repo_property_business_unit": "payments",
  "repo_property_workspace_id": "ws-abc123"
}
```

You can use the `repo_property_*` claims in your cloud provider's trust conditions to create flexible, attribute-based access control policies. For more information about the claim format, supported property types, and limits, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#including-repository-custom-properties-in-oidc-tokens).





## OIDC support for Dependabot

Dependabot can use OIDC to authenticate with private registries, eliminating the need to store long-lived credentials as repository secrets. With OIDC-based authentication, Dependabot update jobs can dynamically obtain short-lived credentials from your cloud identity provider.

Dependabot supports OIDC authentication for any registry type that uses `username` and `password` authentication, when the registry is hosted on AWS CodeArtifact, Azure DevOps Artifacts, or JFrog Artifactory.

The benefits of OIDC authentication for Dependabot are:

* **Enhanced security:** Eliminates static, long-lived credentials from your repositories.
* **Simpler management:** Enables secure, policy-compliant access to private registries.
* **Avoid rate limiting:** Dynamic credentials help you avoid hitting rate limits associated with static tokens.

For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#using-oidc-for-authentication).



## Next steps

For more information about configuring OIDC, see [Security Harden Deployments](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments).

For reference information about OIDC, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc).
