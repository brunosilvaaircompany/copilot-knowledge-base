# Workflow artifacts

## About workflow artifacts

An artifact is a file or collection of files produced during a workflow run. Artifacts allow you to persist data after a job has completed, and share that data with another job in the same workflow. For example, you can use artifacts to save your build and test output after a workflow run has ended.

GitHub provides two actions that you can use to upload and download build artifacts, [upload-artifact](https://github.com/actions/upload-artifact) and [download-artifact](https://github.com/actions/download-artifact).

Common artifacts include:

* Log files and core dumps
* Test results, failures, and screenshots
* Binary or compressed files
* Stress test performance output and code coverage results

## Artifacts versus dependency caching

Artifacts and caching are similar because they provide the ability to store files on GitHub, but each feature offers different use cases and cannot be used interchangeably.

* Use caching when you want to reuse files that don't change often between workflow runs, such as dependencies downloaded by a package management system, intermediate build outputs, or other files that are expensive to regenerate. Caching these files can speed up your workflow runs, though a job should always be able to re-download or regenerate these files if a cache isn't available.
* Use artifacts when you want to save files produced by a job to use or view after a workflow run has ended, such as built binaries or build logs, or when you want to pass files between jobs in a workflow.


For more information on dependency caching, see [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching).



## Generating artifact attestations for builds

Artifact attestations enable you to create unfalsifiable provenance and integrity guarantees for the software you build. In turn, people who consume your software can verify where and how your software was built.

When you generate artifact attestations with your software, you create cryptographically signed claims that establish your build's provenance and include the following information:

* A link to the workflow associated with the artifact
* The repository, organization, environment, commit SHA, and triggering event for the artifact
* Other information from the OIDC token used to establish provenance. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect).

You can also generate artifact attestations that include an associated software bill of materials (SBOM). Associating your builds with a list of the open source dependencies used in them provides transparency and enables consumers to comply with data protection standards.


You can access attestations after a build run, underneath the list of the artifacts the build produced.

For more information, see [Use Artifact Attestations](https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations).



## Artifacts from deleted workflow runs

When a workflow run is deleted all artifacts associated with the run are also deleted from storage. You can delete a workflow run using the GitHub Actions UI, the REST API, or using the GitHub CLI, see: [Delete A Workflow Run](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/delete-a-workflow-run), [Delete a workflow run](/rest/actions/workflow-runs?apiVersion=2022-11-28#delete-a-workflow-run), or [gh run delete](https://cli.github.com/manual/gh_run_delete).
