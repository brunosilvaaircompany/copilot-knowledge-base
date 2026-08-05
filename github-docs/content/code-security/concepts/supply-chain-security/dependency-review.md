# Dependency review

## About dependency review

Dependency review helps you understand dependency changes and the security impact of these changes at every pull request.
 It provides an easily understandable visualization of dependency changes with a rich diff on the "Files Changed" tab of a pull request. Dependency review informs you of:
* Which dependencies were added, removed, or updated, along with the release dates
* How many projects use these components
* Vulnerability data for these dependencies


For pull requests that contain changes to package manifests or lock files, you can display a dependency review to see what has changed. The dependency review includes details of changes to indirect dependencies in lock files, and it tells you if any of the added or updated dependencies contain known vulnerabilities.

>[!NOTE]
> The "dependency review action" refers to the specific action that can report on differences in a pull request within the GitHub Actions context, and add enforcement mechanisms to the GitHub Actions workflow. For more information, see [The dependency review action](#about-the-dependency-review-action) later in this article.

Sometimes you might just want to update the version of one dependency in a manifest and generate a pull request. However, if the updated version of this direct dependency also has updated dependencies, your pull request may have more changes than you expected. The dependency review for each manifest and lock file provides an easy way to see what has changed, and whether any of the new dependency versions contain known vulnerabilities.

By checking the dependency reviews in a pull request, and changing any dependencies that are flagged as vulnerable, you can avoid vulnerabilities being added to your project. For more information about how dependency review works, see [Reviewing Dependency Changes In A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).

Dependabot alerts will find vulnerabilities that are already in your dependencies, but it's much better to avoid introducing potential problems than to fix problems at a later date. For more information about Dependabot alerts, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).

Dependency review supports the same languages and package management ecosystems as the dependency graph. For more information, see [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).

For more information on supply chain features available on GitHub, see [Supply Chain Security](https://docs.github.com/en/code-security/concepts/supply-chain-security/supply-chain-security).

## Enabling dependency review

The dependency review feature becomes available when you enable the dependency graph. For more information, see [Enabling the dependency graph](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/enable-dependency-graph#enabling-the-dependency-graph-for-a-repository){% elsif ghes %}[Enabling the dependency graph for your enterprise](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph).

## About the dependency review action

The "dependency review action" refers to the specific action that can report on differences in a pull request within the GitHub Actions context. See [`dependency-review-action`](https://github.com/actions/dependency-review-action). You can use the dependency review action in your repository to enforce dependency reviews on your pull requests. The action scans for vulnerable versions of dependencies introduced by package version changes in pull requests, and warns you about the associated security vulnerabilities. This gives you better visibility of what's changing in a pull request, and helps prevent vulnerabilities being added to your repository.


![Screenshot of a workflow run that uses the dependency review action.](/assets/images/help/graphs/dependency-review-action.png)

By default, the dependency review action check will fail if it discovers any vulnerable packages. A failed check blocks a pull request from being merged when the repository owner requires the dependency review check to pass. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging).


The action is available for all public repositories, as well as private repositories that have GitHub Code Security or GitHub Advanced Security enabled.


Organization owners can roll out dependency review at scale by enforcing the use of the dependency review action across repositories in the organization. This involves the use of repository rulesets for which you'll set the dependency review action as a required workflow, which means that pull requests can only be merged once the workflow passes all the required checks. For more information, see [Enforce Dependency Review](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/enforce-dependency-review).



Enterprise owners and people with admin access to a repository can add the dependency review action to their enterprise and repository, respectively.



The action uses the dependency review REST API to get the diff of dependency changes between the base commit and head commit. You can use the dependency review API to get the diff of dependency changes, including vulnerability data, between any two commits on a repository. For more information, see [Dependency Review](https://docs.github.com/en/rest/dependency-graph/dependency-review). The action also considers dependencies submitted via the dependency submission API. For more information about the dependency submission API, see [Use Dependency Submission API](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/use-dependency-submission-api).





You can configure the dependency review action to better suit your needs. For example, you can specify the severity level that will make the action fail, or set an allow or deny list for licenses to scan. For more information, see [Configure Dependency Review Action](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependency-review-action).

## Best practices for using the dependency review API and the dependency submission API together

The dependency review API and the dependency review action both work by comparing dependency changes in a pull request with the state of your dependencies in the head commit of your target branch.

If your repository only depends on statically defined dependencies in one of GitHub’s supported ecosystems, the dependency review API and the dependency review action work consistently.

However, you may want your dependencies to be scanned during a build and then uploaded to the dependency submission API. In this case, there are some best practices you should follow to ensure that you don’t introduce a race condition when running the processes for the dependency review API and the dependency submission API, since it could result in missing data.

The best practices you should take will depend on whether you use GitHub Actions to access the dependency submission API and the dependency review API, or whether you use direct API access.

### Using GitHub Actions to access the dependency submission API and the dependency review API

If you use GitHub Actions to access the dependency submission API or the dependency review API:
   * Make sure you run all of your dependency submission actions in the same GitHub Actions workflow as your dependency review action. This will give you control over the order of execution, and it will ensure that dependency review will always work.
   * If you do choose to run the dependency review action separately, you should:
     * Set `retry-on-snapshot-warnings` to `true`.
     * Set `retry-on-snapshot-warnings-timeout` to slightly exceed the typical run time (in seconds) of your longest-running dependency submission action.

### Using direct API access to the dependency submission API and the dependency review API

If you don’t use GitHub Actions, and your code relies on direct access to the dependency submission API and the dependency review API:
   * Make sure you run the code that calls the dependency submission API first, and then run the code that calls the dependency review API afterwards.
   * If you do choose to run the code for the dependency submission API and the dependency review API in parallel, you should implement a retry logic and note the following:
     * When there are snapshots missing for either side of the comparison, you will see an explanation for that in the `x-github-dependency-graph-snapshot-warnings` header (as a base64-encoded string). Therefore, if the header is non-empty, you should consider retrying.
     * Implement a retry logic with exponential backoff retries.
     * Implement a reasonable number of retries to account for the typical runtime of your dependency submission code.

## Further reading

* [Customize Dependency Review Action](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customize-dependency-review-action)
