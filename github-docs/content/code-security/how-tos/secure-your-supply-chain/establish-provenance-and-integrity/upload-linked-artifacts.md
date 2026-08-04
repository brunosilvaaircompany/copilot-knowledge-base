# Uploading storage and deployment data to the linked artifacts page

The linked artifacts page includes storage records and deployment records for artifacts that you build in your organization. Metadata for each artifact is provided by your organization using one of the following methods:

* A workflow containing one of GitHub's actions for **artifact attestations**
* An integration with **Dynatrace**, **JFrog Artifactory**, or **Microsoft Defender for Cloud**
* A custom script using the **artifact metadata REST API**

The available methods depend on whether you are uploading a storage record or a deployment record. For more information about record types, see [Linked Artifacts](https://docs.github.com/en/code-security/concepts/supply-chain-security/linked-artifacts#which-metadata-is-included).

## Uploading a storage record

You can upload a storage record by creating an **artifact attestation** or enabling an integration with **JFrog Artifactory**. If you don't want to use these options, you must set up a custom integration with the **REST API**.

### Attesting with GitHub Actions

You can upload a storage record for an artifact using GitHub's first-party actions for artifact attestations. You can do this in the same workflow you use to build the artifact. These actions create signed provenance and integrity guarantees for the software you build, as well as automatically uploading a storage record to the linked artifacts page.

The [attest](https://github.com/actions/attest) action automatically creates storage records on the linked artifacts page if both:

* The `push-to-registry` option is set to `true`
* The workflow that includes the action has the `artifact-metadata: write` permission


For more information on using these actions, see [Use Artifact Attestations](https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations).

If the artifact does not require attestation, or if you want to upload deployment records or additional storage metadata, see the following sections.

### Using the JFrog integration

This two-way integration automatically keeps your storage records on GitHub up to date with the artifact on JFrog. For example, attestations you create on GitHub are automatically uploaded to JFrog, and promoting an artifact to production on JFrog automatically adds the production context to the record on GitHub.

For setup instructions, see [Get Started with JFrog Artifactory and GitHub Integration](https://jfrog.com/help/r/jfrog-and-github-integration-guide/get-started-with-jfrog-artifactory-and-github-integration) in the JFrog documentation.

### Using the REST API

For artifacts that do not need to be attested and are not stored on JFrog, you can create a custom integration using the [Create artifact metadata storage record](/rest/orgs/artifact-metadata#create-artifact-metadata-storage-record) API endpoint. You should configure your system to call the endpoint whenever an artifact is published to your chosen package repository.

>[!NOTE] If the artifact is not associated with a provenance attestation on GitHub, the `github_repository` parameter is mandatory.

## Uploading a deployment record

If you monitor deployed workloads with Dynatrace or Microsoft Defender for Cloud (MDC), you can use an integration to automatically sync deployment data to the linked artifacts page. Otherwise, you must set up a custom integration with the REST API.

### Using the Dynatrace integration

You can configure Dynatrace to send deployment records to GitHub for container images running in your Dynatrace-monitored Kubernetes environments. Dynatrace maps deployed images to your repositories, then reports runtime context.

In addition, deployment records from Dynatrace can include runtime risk context, such as:

* Public internet exposure
* Sensitive data access

You can use this context in organization-level alert filtering and in security campaigns to prioritize remediation for alerts that affect internet-exposed or sensitive-data workloads.

For setup instructions, see [GitHub Advanced Security security integration - Get Started](https://docs.dynatrace.com/docs/secure/threat-observability/security-events-ingest/ingest-github-advanced-security#credentials--github-app-based-authentication) in the Dynatrace documentation.

### Using the Microsoft Defender for Cloud integration

You can connect your MDC instance to your GitHub organization. MDC will automatically send deployment and runtime data to GitHub.

For setup instructions, see [Quick Start: Connect your GitHub Environment to Microsoft Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/quickstart-onboard-github) in the documentation for MDC.

> [!NOTE]
> The integration with Microsoft Defender for Cloud is in public preview and subject to change.


### Using the REST API

The [Create an artifact deployment record](/rest/orgs/artifact-metadata#create-an-artifact-deployment-record) API endpoint allows systems to send deployment data for a specific artifact to GitHub, such as its name, digest, environments, cluster, and deployment. You should call this endpoint whenever an artifact is deployed to a new staging or production environment.

>[!NOTE] If the artifact is not associated with a provenance attestation on GitHub, the `github_repository` parameter is mandatory.

## Verifying an upload

To check that a record has been uploaded successfully, you can view the updated artifact in your organization settings. See [View Linked Artifacts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/view-linked-artifacts).

## Removing unwanted records

It is not possible to delete an artifact from the linked artifacts page. However, you can update a storage record or deployment record to reflect an artifact's status. See [Remove Linked Artifacts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/remove-linked-artifacts).

## GitHub Actions examples

You can upload data to the linked artifacts page in the same workflow you use to build and publish an artifact.

### Generating an attestation

In the following example, we build and publish a Docker image, then use the `{% raw %}${{ steps.push.outputs.digest }}{% endraw %}` output in the next step to generate a provenance attestation.

The `attest` action automatically uploads a storage record to the linked artifacts page when `push-to-registry: true` is set and the workflow includes the `artifact-metadata: write` permission.

``` yaml
{% raw %}
env:
  IMAGE_NAME: my-container-image
  ACR_ENDPOINT: my-registry.azurecr.io

jobs:
  generate-build:
    name: Build and publish Docker image
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
      attestations: write
      packages: write
      artifact-metadata: write

    steps:
      - name: Build and push Docker image
        id: push
        uses: docker/build-push-action@263435318d21b8e681c14492fe198d362a7d2c83
        with:
          context: .
          push: true
          tags: |
            ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}:latest
            ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

      - name: Generate artifact attestation
        uses: actions/attest@v4
        with:
          subject-name: ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}
          subject-digest: ${{ steps.push.outputs.digest }}
          push-to-registry: true
{% endraw %}
```

### Using the REST API

Alternatively, if you are not generating an attestation, you can call the artifact metadata API directly.

``` yaml
{% raw %}
env:
  IMAGE_NAME: my-container-image
  IMAGE_VERSION: 1.1.2
  ACR_ENDPOINT: my-registry.azurecr.io

jobs:
  generate-build:
    name: Build and publish Docker image
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
      packages: write
      artifact-metadata: write

    steps:
      - name: Build and push Docker image
        id: push
        uses: docker/build-push-action@263435318d21b8e681c14492fe198d362a7d2c83
        with:
          context: .
          push: true
          tags: |
              ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}:latest
              ${{ env.ACR_ENDPOINT }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

      - name: Create artifact metadata storage record
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          jq -n --arg artifactName "${{ env.IMAGE_NAME }}" --arg artifactVersion "${{ env.IMAGE_VERSION }}" --arg artifactDigest "${{ steps.push.outputs.digest }}" '{"name": $artifactName, "digest": $artifactDigest, "version": $artifactVersion, "registry_url": "https://azurecr.io", "repository": "my-repository"}' > create-record.json

          gh api -X POST orgs/${{ github.repository_owner }}/artifacts/metadata/storage-record --input create-record.json
        shell: bash
{% endraw %}
```

## Next steps

Once you have uploaded data, teams in your organization can use the context from storage and deployment data to prioritize security alerts. See [Prioritize Alerts In Production Code](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prioritize-alerts-in-production-code).
