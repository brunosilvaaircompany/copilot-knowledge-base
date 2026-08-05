# Enabling the dependency graph for your enterprise

## About the dependency graph

The dependency graph is a summary of the manifest and lock files stored in a repository and any dependencies that are submitted for the repository using the dependency submission API. For each repository, it shows:

* Dependencies, the ecosystems and packages it depends on
* Dependents, the repositories and packages that depend on it

For each dependency, you can see the version, license information, the manifest file which included it, and whether it has known vulnerabilities. For package ecosystems supporting transitive dependencies, the relationship status will be displayed and you can click "{% octicon "kebab-horizontal" aria-label="Show dependency options" %}", then "Show paths", to see the transitive path which brought in the dependency.

You can also search for a specific dependency using the search bar. Dependencies are sorted automatically with vulnerable packages at the top.



GitHub does not retrieve license information for dependencies, and does not calculate information about dependents, the repositories and packages that depend on a repository.
 For more information, see [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph)


After you enable the dependency graph, users will have access to the dependency review feature. Dependency review helps you understand dependency changes and the security impact of these changes at every pull request.
 For more information, see [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review).



After you enable the dependency graph for your enterprise, you can enable Dependabot to detect insecure dependencies in your repository and automatically fix the vulnerabilities. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

You can enable the dependency graph via the Management Console or the administrative shell. We recommend using the Management Console unless your instance uses clustering.

## Enabling the dependency graph via the Management Console

If your instance uses clustering, you cannot enable the dependency graph with the Management Console and must use the administrative shell instead. For more information, see [Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell).

1. Sign in to your GitHub Enterprise Server instance at `http(s)://HOSTNAME/login`.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Security**.

1. Under "Security," select **Dependency graph**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.


1. Click **Visit your instance**.

## Enabling the dependency graph via the administrative shell

1. Sign in to your GitHub Enterprise Server instance at `http(s)://HOSTNAME/login`.

1. In the administrative shell, enable the dependency graph:

    ```shell
    ghe-config app.dependency-graph.enabled true
    ```

   > [!NOTE]
   > For more information about enabling access to the administrative shell via SSH, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

1. Apply the configuration.

    ```shell
    ghe-config-apply
    ```

1. Return to GitHub Enterprise Server.
