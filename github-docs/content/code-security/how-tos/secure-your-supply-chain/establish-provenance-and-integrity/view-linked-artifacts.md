# Auditing your organization's builds on the linked artifacts page

You can use the linked artifacts page to connect your organization's artifacts to their build details, deployment context, and security metadata. The linked artifacts page collects metadata for artifacts built with GitHub Actions in your organization's repositories, regardless of whether the artifacts are stored on GitHub. For more information, see [Linked Artifacts](https://docs.github.com/en/code-security/concepts/supply-chain-security/linked-artifacts).

## Viewing an artifact

1. On GitHub, navigate to the main page of your organization.
1. Under your organization name, click the **{% octicon "package" aria-hidden="true" aria-label="package" %} Packages** tab.

   ![Screenshot of @octo-org's profile page. The "Packages" tab is highlighted with an orange outline.](/assets/images/help/package-registry/org-tab-for-packages-with-overview-tab.png)

1. In the left sidebar, click **Linked artifacts**.
1. Click the artifact you want to view.
1. On the artifact's page, you can:

   * View the artifact's deployment history and registry storage details
   * Click through to the repository where the artifact's source code is defined
   * If available, click on the artifact's provenance attestation to find the workflow run that was used to build the artifact

For more information about how data enters the linked artifacts page, see [Upload Linked Artifacts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/upload-linked-artifacts).

## Exporting artifact metadata

To export metadata in bulk for an audit, use the [List artifact deployment records](/rest/orgs/artifact-metadata#list-artifact-deployment-records) and [List artifact storage records](/rest/orgs/artifact-metadata#list-artifact-storage-records) endpoints of the artifact metadata API.
