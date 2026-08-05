# Dependency caching

## About workflow dependency caching

Workflow runs often reuse the same outputs or downloaded dependencies from one run to another. For example, package and dependency management tools such as Maven, Gradle, npm, and Yarn keep a local cache of downloaded dependencies.

 Jobs on GitHub-hosted runners start in a clean runner image and must download dependencies each time, causing increased network utilization, longer runtime, and increased cost. To help speed up the time it takes to recreate files like dependencies, GitHub can cache files you frequently use in workflows.



> [!NOTE]
> When using self-hosted runners, caches from workflow runs are stored on GitHub-owned cloud storage. A customer-owned storage solution is only available with GitHub Enterprise Server.



## Artifacts versus dependency caching

Artifacts and caching are similar because they provide the ability to store files on GitHub, but each feature offers different use cases and cannot be used interchangeably.

* Use caching when you want to reuse files that don't change often between workflow runs, such as dependencies downloaded by a package management system, intermediate build outputs, or other files that are expensive to regenerate. Caching these files can speed up your workflow runs, though a job should always be able to re-download or regenerate these files if a cache isn't available.
* Use artifacts when you want to save files produced by a job to use or view after a workflow run has ended, such as built binaries or build logs, or when you want to pass files between jobs in a workflow.


For more information on workflow run artifacts, see [Store And Share Data](https://docs.github.com/en/actions/tutorials/store-and-share-data).

## Cache security

Caches are shared based on the branch or tag a workflow run uses, not on the identity of the workflow or job. See [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) and the `GITHUB_REF` for the branch used for various workflow triggers. Any run that can read a cache restores its contents as-is, so you should treat restored files as untrusted input and never store secrets or other sensitive data in a cache.

Untrusted workflows can read sensitive cache contents, such as when a `pull_request` from a fork restores a cache. Poisoned caches can lead to code execution in trusted workflows. To limit the risk of cache poisoning, GitHub gives workflows that run in response to low-trust triggers read-only access to caches in the default branch's scope.

For details on cache scope, access restrictions, and best practices for using caches securely, see [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#cache-access-for-low-trust-workflow-triggers).

## Next steps

To implement dependency caching in your workflows, see [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching).
