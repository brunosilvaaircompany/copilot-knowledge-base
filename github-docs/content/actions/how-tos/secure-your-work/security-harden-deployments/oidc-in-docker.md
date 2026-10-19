# Configuring OpenID Connect in Docker

## Overview

OpenID Connect (OIDC) allows your GitHub Actions workflows to authenticate with [Docker](https://www.docker.com/) to access Docker Hub and Docker Build Cloud without storing Docker passwords, personal access tokens, or organization access tokens (OATs) in GitHub.

Instead of managing long-lived credentials, you configure a trust relationship between your GitHub organization and your Docker organization. When a workflow runs, GitHub issues a short-lived OIDC token that Docker validates against your configured rulesets, then issues a scoped access token for the workflow.

This guide gives an overview of how to configure Docker to trust GitHub's OIDC as a federated identity, and demonstrates how to use this configuration in a GitHub Actions workflow.

For more information, see [OIDC connections](https://docs.docker.com/enterprise/security/oidc-connections/) in the Docker documentation.

## Prerequisites

* To learn the basic concepts of how GitHub uses OpenID Connect (OIDC), and its architecture and benefits, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect).


* Before proceeding, you must plan your security strategy to ensure that access tokens are only allocated in a predictable way. To control how your cloud provider issues access tokens, you **must** define at least one condition, so that untrusted repositories can’t request access tokens for your cloud resources. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#establishing-oidc-trust-with-your-cloud-provider).

* OIDC tokens requested for Dependabot update jobs have an `event_name` claim of `dynamic`. If your trust policy is intended to authorize only GitHub Actions workflows and your cloud provider supports conditions on `event_name`, allow only the event names expected by your workflows. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#establishing-oidc-trust-with-your-cloud-provider).




* If you're following this guide on GHE.com, understand that you must substitute certain values in the following documentation. See [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#configuring-oidc-on-ghecom).



* Your Docker organization must use Docker Business, Docker Team, or Docker Hardened Images, or be enrolled in the Docker Sponsored Open Source Program.
* You must be an organization owner or editor in your Docker organization.
* You must plan which repositories, branches, and workflows need access to Docker, and configure rulesets accordingly.

## Adding the identity provider to Docker

To use OIDC with Docker, establish a trust relationship between GitHub Actions and Docker by creating an OIDC connection. For more information about this process, see [Create and manage OIDC connections](https://docs.docker.com/security/authentication/oidc-connections/create-manage/) in the Docker documentation.

1. Sign in to [Docker Home](https://app.docker.com/) and navigate to your organization.
1. Go to **Identity & auth** > **OIDC connections**.
1. Select **Create OIDC connection**.
1. Configure at least one ruleset to define which GitHub repositories, branches, or workflows can authenticate. Each ruleset specifies:
   * **Rules**: Conditions matched against OIDC token claims (repository, branch, workflow path). Wildcard patterns like `repo:my-org/*` are supported.
   * **Resources**: Docker Hub repositories or Docker Build Cloud projects the workflow can access.
   * **Scopes**: Permission levels (`read`, `write`).
1. Save the connection and copy the **connection ID** for use in your workflow.

## Updating your GitHub Actions workflow

Once you have created an OIDC connection in Docker, update your workflow to authenticate using the [`docker/login-action`](https://github.com/docker/login-action) action.

The following example uses the placeholder `YOUR-CONNECTION-ID` for the connection ID you copied from Docker, and `YOUR-DOCKER-ORG` for your Docker organization name.

```yaml
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

permissions:
  id-token: write
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v6


      - name: Sign in to Docker Hub with OIDC
        uses: docker/login-action@abd2ef45e78c5afb21d64d4ca52ee8550d9572c7 # v4.5.1
        with:
          username: YOUR-DOCKER-ORG
        env:
          DOCKERHUB_OIDC_CONNECTIONID: YOUR-CONNECTION-ID

      - name: Build and push
        uses: docker/build-push-action@10e90e3645eae34f1e60eeb005ba3a3d33f178e8 # v6
        with:
          push: true
          tags: YOUR-DOCKER-ORG/my-image:latest
```

### Key workflow settings

* **`permissions.id-token: write`** is required so that GitHub can issue an OIDC token for the workflow.
* The `docker/login-action` handles the OIDC token exchange and Docker login in a single step when `DOCKERHUB_OIDC_CONNECTIONID` is set and `password` is omitted.
* The `username` field should be your Docker organization name.

### Subject claim matching

Docker evaluates the `sub` claim from the GitHub OIDC token against the rulesets you configured. The default subject claim format is:

```text
repo:<owner>/<repo>:ref:refs/heads/<branch>
```

> [!NOTE]
> Repositories created after July 15, 2026, and repository renames or transfers after that date, use an immutable default OIDC `sub` claim that includes owner and repository IDs. Existing repositories keep the previous format unless they opt in. For more information, see [Oidc](https://docs.github.com/en/actions/reference/security/oidc#immutable-subject-claims).

Different workflow triggers produce different subject claims. For example:

| Trigger | Subject claim format |
|---------|---------------------|
| Branch push | `repo:my-org/my-repo:ref:refs/heads/main` |
| Pull request | `repo:my-org/my-repo:pull_request` |
| Tag | `repo:my-org/my-repo:ref:refs/tags/v1.0` |
| Environment | `repo:my-org/my-repo:environment:production` |

You can use wildcard patterns in your rulesets to match multiple repositories or branches. For legacy subject claims, `repo:my-org/*` matches all repositories in the organization. For immutable subject claims, use `repo:my-org@OWNER-ID/*`; if the organization contains repositories using both formats, configure both patterns.

For more information, see [Rulesets and subject claims](https://docs.docker.com/security/authentication/oidc-connections/rulesets-claims/) in the Docker documentation.
