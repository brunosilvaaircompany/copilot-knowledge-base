# Exporting a software bill of materials for your repository

You can export the current state of the dependency graph for your repository as a software bill of materials (SBOM) using the industry standard [SPDX](https://spdx.github.io/spdx-spec/v2.3/) format.

SBOMs include an inventory of a project's dependencies and associated information such as versions and package identifiers. SBOMs do not include dependents (other projects that rely on your project).



> [!NOTE]
> On GHE.com, dependency insights and license and package metadata in the dependency graph are not currently available. The dependency graph itself remains available at the repository level. See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).





## Exporting a software bill of materials for your repository from the UI

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in orange.](/assets/images/help/repository/repo-nav-insights-tab.png)

1. In the left sidebar, click **Dependency graph**.
1. On the top right side of the **Dependencies** tab, click **Export SBOM** to generate an SBOM file for download from your browser.

## Exporting a software bill of materials for your repository using the REST API

If you want to use the REST API to export an SBOM for your repository, see [Sboms](https://docs.github.com/en/rest/dependency-graph/sboms#export-a-software-bill-of-materials-sbom-for-a-repository).

## Generating a software bill of materials from GitHub Actions

The following actions will generate an SBOM for your repository and attach it as a workflow artifact which you can download and use in other applications. For more information about downloading workflow artifacts, see [Download Workflow Artifacts](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts).

| Action | Details |
| ---  | --- |
[SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) | Uses [Microsoft's SBOM Tool](https://github.com/microsoft/sbom-tool) to create SPDX 2.2 compatible SBOMs with the [supported ecosystems](https://github.com/microsoft/component-detection/blob/main/docs/feature-overview.md) |
[Anchore SBOM Action](https://github.com/marketplace/actions/anchore-sbom-action) | Uses [Syft](https://github.com/anchore/syft) to create SPDX 2.2 compatible SBOMs with the [supported ecosystems](https://github.com/anchore/syft#supported-ecosystems)  |
[SBOM Dependency Submission Action](https://github.com/marketplace/actions/sbom-submission-action)| Uploads a CycloneDX SBOM to the dependency submission API |
