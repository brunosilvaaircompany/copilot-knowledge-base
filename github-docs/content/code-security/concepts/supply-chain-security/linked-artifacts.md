# About linked artifacts

The linked artifacts page provides a unified view of software artifacts that your organization builds with GitHub Actions, such as container images, packages, or builds of your production code.

The page shows you how an artifact was built, where it is stored or running, and which compliance and security metadata is associated with the artifact.

Teams in your organization can use data from the linked artifacts page to:

* Prioritize alerts from GitHub Advanced Security features based on whether the detected vulnerabilities are running in production or exposed to the internet
* Quickly connect artifacts to build details, storage locations, and owning teams
* Meet compliance by exporting auditable proof of your artifacts' provenance and integrity
* Find repositories that are associated with a deployed artifact, and target them in branch rulesets

## Which artifacts appear on the linked artifacts page?

The linked artifacts page is unique to each organization. It contains metadata for artifacts that have been built with GitHub Actions in your organization's repositories. It does **not** display artifacts your organization consumes from elsewhere, such as open source dependencies.

Artifact records are uploaded by your organization using either a public API or an integration with an external registry. The linked artifacts page does not store the artifact files themselves. It just provides an authoritative source for the metadata associated with each artifact.

Because an artifact does not need to be stored on GitHub to appear in the linked artifacts page, you can use the linked artifacts page alongside your preferred package registry, such as JFrog Artifactory or GitHub Packages.

## Which metadata is included?

The linked artifacts page combines data from two different types of record: storage records and deployment records. These records are uploaded using different API endpoints or integrations.

### Storage records

Storage records include the repository containing the artifact's source code, the registry where the artifact is stored, and any attestations proving the artifact's integrity and provenance. You can use this data to quickly find an artifact's owning team and build details.

![Screenshot of an artifact page. Highlighted fields: storage registry, artifact repository, source repository.](/assets/images/help/security/virtual-registry-storage-record.png)

The _artifact repository_ is not mandatory. It refers to the concept of a repository in certain external package registries: a place where multiple packages can be grouped. By contrast, the _source repository_ refers to the GitHub repository where the artifact is built. The source repository is mandatory, and is detected automatically if the artifact has a build provenance attestation.

For more information about attestations and SLSA levels, see [Artifact Attestations](https://docs.github.com/en/actions/concepts/security/artifact-attestations).

### Deployment records

Deployment records include the environment where the artifact is deployed and any runtime risks (such as "sensitive data" or "internet exposed") associated with the artifact.

![Screenshot of an artifact page. Highlighted fields: the "Deployments" list, including tags for "Prod", "sensitive data", and "pacific-east".](/assets/images/help/security/virtual-registry-deployment-record.png)

>[!NOTE] Deployment records do **not** include deployment activity from a repository's deployments dashboard, which comes from a different source. See [Viewing Deployment Activity For Your Repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository).

## Where is artifact data available?

As well as being available on the linked artifacts page itself, artifact metadata is integrated into policy and security surfaces on GitHub. Teams can use this data to make policy decisions or prioritize security issues. For example, they can:

* Use `deployed` or `deployable` filters to search for repositories or target repositories in organization and enterprise rulesets. See [Searching For Repositories](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories#search-based-on-deployment-context).
* Filter security campaigns, code scanning alerts, and Dependabot alerts by runtime risk. See [Prioritize Alerts In Production Code](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prioritize-alerts-in-production-code).
* View runtime risks as attributes on individual code scanning and Dependabot alerts.

## How does the linked artifacts page fit into my processes?

This example workflow shows how the linked artifacts page integrates with other GitHub features and external systems.

1. A developer commits code to a GitHub repository where the code for a software package is defined.
1. A GitHub Actions workflow in the repository automatically:

   1. Builds the package.
   1. Pushes the package to your chosen registry, such as GitHub Packages or JFrog Artifactory.
   1. Creates a cryptographically signed provenance attestation, linking the package to the repository, commit, and workflow used to build the package.
   1. Deploys the package to a staging or production environment. Your deployment system may be gated to ensure that only attested artifacts can be deployed to production, for example using the Kubernetes Admissions Controller.

1. Metadata for the package, such as its linked repository, attestations, and deployment history, is uploaded to the linked artifacts page.
1. Using the data from the linked artifacts page, a security lead triages code scanning and Dependabot alerts, and creates a campaign to address alerts that affect production environments or have a specific runtime risk.
1. When an audit is required, a member of the compliance team exports SBOMs, provenance details, and deployment records for all your organization's linked artifacts from a single source.

## Next steps

To add records to your organization's linked artifacts page, see [Upload Linked Artifacts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/upload-linked-artifacts).

To view the linked artifacts page for your organization, see [View Linked Artifacts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/view-linked-artifacts).
