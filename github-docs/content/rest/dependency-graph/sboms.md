# REST API endpoints for software bill of materials (SBOM)

If you have at least read access to the repository, you can export the dependency graph for the repository as an SPDX-compatible, Software Bill of Materials (SBOM), via the GitHub UI or GitHub REST API. For more information, see [Export Dependencies As Sbom](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom).


This article gives details about the REST API endpoint.


> [!NOTE]
> GitHub Enterprise Server does not retrieve license information for dependencies, and does not calculate information about dependents, the repositories and packages that depend on a repository. These fields will not be populated in the response.
