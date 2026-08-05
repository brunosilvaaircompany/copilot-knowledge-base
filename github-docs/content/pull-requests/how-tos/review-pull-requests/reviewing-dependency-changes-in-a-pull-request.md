# Reviewing dependency changes in a pull request



## About dependency review

Dependency review helps you understand dependency changes and the security impact of these changes at every pull request.
 It provides an easily understandable visualization of dependency changes with a rich diff on the "Files Changed" tab of a pull request. Dependency review informs you of:
* Which dependencies were added, removed, or updated, along with the release dates
* How many projects use these components
* Vulnerability data for these dependencies


Before you can use dependency review, you must enable the dependency graph. See [Explore Dependencies](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/explore-dependencies).

Before you can use dependency review, you must enable the dependency graph and connect {% ifversion ghes %}your GitHub Enterprise Server instance to GitHub.com. See [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).{% endif %}

Dependency review helps you find vulnerable dependencies before they reach production. See [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review).

You can use the dependency review action to help enforce dependency reviews on pull requests in your repository. The dependency review action scans your pull requests for dependency changes and raises an error if any new dependencies have known vulnerabilities. The action is supported by an API endpoint that compares the dependencies between two revisions and reports any differences.

For more information about the action and the API endpoint, see the [`dependency-review-action`](https://github.com/actions/dependency-review-action) documentation, and [Dependency Review](https://docs.github.com/en/rest/dependency-graph/dependency-review).


You can configure the dependency review action to better suit your needs by specifying the type of dependency vulnerability you want to catch. See [Configure Dependency Review Action](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependency-review-action).

## Reviewing dependencies in a pull request

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the list of pull requests, click the pull request you'd like to review.

1. On the pull request, click **{% octicon "file-diff" aria-hidden="true" aria-label="file-diff" %} Files changed**.

   ![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)


1. If the pull request contains many files, use the **File filter** drop-down menu to collapse all files that don't record dependencies. This makes it easier to focus your review on the dependency changes.

   ![Screenshot of the "Changed files" tab. A dropdown labeled "File filter" is expanded, displaying a list of file types with checkboxes.](/assets/images/help/pull_requests/file-filter-menu-json.png)
   The dependency review provides a clearer view of what has changed in large lock files, where the source diff is not shown by default.

   > [!NOTE]
   > Dependency review rich diffs are not available for committed static JavaScript files like `jquery.js`.

1. To display the dependency review, click **{% octicon "file" aria-label="Display the rich diff" %}** on the right of the header for a manifest or lock file.

   ![Screenshot of the "Files changed" tab of a pull request. The button to display the rich diff, labeled with a file icon, is outlined in dark orange.](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

1. Check the dependencies listed in the dependency review.

   ![Screenshot of the vulnerability warnings in a dependency review for a pull request.](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Any added or changed dependencies that have vulnerabilities are listed first, ordered by severity and then by dependency name. This means that the highest severity dependencies are always at the top of a dependency review. Other dependencies are listed alphabetically by dependency name.

   The icon beside each dependency indicates whether the dependency has been added (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), updated (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>), or removed (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) in this pull request.

   Other information includes:

   * The version, or version range, of the new, updated, or deleted dependency.
   * For a specific version of a dependency:
      * The age of that release of the dependency.
      * The number of projects that depend on this software. This information is taken from the dependency graph. Checking the number of dependents can help you avoid accidentally adding the wrong dependency.
      * The license used by this dependency, if this information is available. This is useful if you want to avoid using code with certain licenses in your project.

   Where a dependency has a known vulnerability, the warning message includes:

   * A brief description of the vulnerability.
   * A Common Vulnerabilities and Exposures (CVE) or GitHub Security Advisories (GHSA) identification number. You can click this ID to find out more about the vulnerability.
   * The severity of the vulnerability.
   * The version of the dependency in which the vulnerability was fixed. If you are reviewing a pull request for someone, you might ask the contributor to update the dependency to the patched version, or a later release.

1. You may also want to review the source diff, because there could be changes to the manifest or lock file that don't change dependencies, or there could be dependencies that GitHub can't parse and which, as a result, don't appear in the dependency review.

   To return to the source diff view, click the **{% octicon "code" aria-label="Display the source diff" %}** button.

   ![Screenshot of the "Files changed" tab of a pull request. The button to display the source diff, shown with a code icon, is outlined in orange.](/assets/images/help/pull_requests/dependency-review-source-diff.png)
