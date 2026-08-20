# Setting up Dependabot to run on self-hosted action runners using the Actions Runner Controller

## Working with the Actions Runner Controller (ARC)

This article provides step-by-step instructions for setting up ARC on a Kubernetes cluster and configuring Dependabot to run on self-hosted action runners. The article:

* Contains an overview of the ARC and Dependabot integration.
* Provides detailed installation and configuration steps using helm scripts.

## What is ARC?

The Actions Runner Controller is a Kubernetes controller that manages self-hosted GitHub Actions as Kubernetes pods. It allows you to dynamically scale and orchestrate runners based on your workflows, providing better resource utilization and integration with Kubernetes environments. See [Actions Runner Controller](https://docs.github.com/en/actions/concepts/runners/actions-runner-controller).

## Dependabot on ARC

You can run Dependabot on self-hosted GitHub Actions runners managed within a Kubernetes cluster via ARC. This enables auto-scaling, workload isolation, and better resource management for Dependabot jobs, ensuring that dependency updates can run efficiently within an organization's controlled infrastructure while integrating seamlessly with GitHub Actions.

## Setting up ARC for Dependabot on your Local environment

### Prerequisites

* A Kubernetes cluster
  * For a managed cloud environment, you can use Azure Kubernetes Service (AKS).
  * For a local setup, you can use minikube.
* Helm
  * A package manager for Kubernetes.

### Setting up ARC

1. Install ARC. For more information, see [Get Started](https://docs.github.com/en/actions/tutorials/use-actions-runner-controller/get-started).
1. Create a work directory for the ARC setup and create a shell script file (for example, `helm_install_arc.sh`) to install the latest ARC version.

    ```bash copy
        mkdir ARC
        touch helm_install_arc.sh
        chmod 755 helm_install_arc.sh
    ```

1. Edit `helm_install_arc.sh` with this bash script for installing ARC.

   ```text copy
   NAMESPACE="arc-systems"
   helm install arc \
       --namespace "${NAMESPACE}" \
       --create-namespace \
       oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller
   ```

1. Execute the `helm_install_arc.sh` script file.

   ```bash
   ./helm_install_arc.sh
   ```

1. Now, you need to configure the runner scale set. For this, let's start by creating and editing a file with the following bash script.

   ```bash copy
   touch arc-runner-set.sh
   chmod 755 arc-runner-set.sh
   ```

   ```text copy
   INSTALLATION_NAME="dependabot"
   NAMESPACE="arc-runners"
   GITHUB_CONFIG_URL=REPO_URL
   GITHUB_PAT=PAT
   helm install "${INSTALLATION_NAME}" \
       --namespace "${NAMESPACE}" \
       --create-namespace \
       --set githubConfigUrl="${GITHUB_CONFIG_URL}" \
       --set githubConfigSecret.github_token="${GITHUB_PAT}" \
       --set containerMode.type="dind" \
       oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set
   ```

1. Execute the `arc-runner-set.sh` script file.

   ```bash copy
   ./arc-runner-set.sh
   ```

> [!NOTE]
>
> * The installation name of the runner scale set has to be `dependabot` in order to target the dependabot job to the runner.
> * The `containerMode.type="dind"` configuration is required to allow the runner to connect to the Docker daemon.
> * If an organization-level or enterprise-level runner is created, then the appropriate scopes should be provided to the Personal Access Token (PAT).
> * A personal access token (classic) (PAT) can be created. The token should have the following scopes based on whether you are creating a repository, organization or enterprise level runner scale set.
>   * Repository level: **repo**
>   * Organization level: **admin:org**
>   * Enterprise level: **admin:enterprise**\
>   For information about creating a personal access token (classic), see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

### Adding runner groups

Runner groups are used to control which organizations or repositories have access to runner scale sets. To add a runner scale set to a runner group, you must already have a runner group created.

For information about creating runner groups, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#creating-a-self-hosted-runner-group-for-an-organization).

Don't forget to add the following setting to the runner scale set configuration in the helm chart.

   ```text copy
   --set runnerGroup="<Runner group name>" \
   ```

### Checking your installation

1. Check your installation.

    ```bash copy
    helm list -A
    ```

    Output:

    ```text
    ➜  ARC git:(master) ✗ helm list -A
        NAME           NAMESPACE   REVISION UPDATED                              STATUS   CHART                                  APP VERSION
        arc            arc-systems 1        2025-04-11 14:41:53.70893 -0500 CDT  deployed gha-runner-scale-set-controller-0.11.0 0.11.0
        arc-runner-set arc-runners 1        2025-04-11 15:08:12.58119 -0500 CDT  deployed gha-runner-scale-set-0.11.0            0.11.0
        dependabot     arc-runners 1        2025-04-16 21:53:40.080772 -0500 CDT deployed gha-runner-scale-set-0.11.0
    ```

1. Check the manager pod using this command.

    ```bash copy
    kubectl get pods -n arc-systems
    ```

    Output:

    ```text
    ➜  ARC git:(master) ✗ kubectl get pods -n arc-systems

    NAME                                    READY   STATUS    RESTARTS      AGE
    arc-gha-rs-controller-57c67d4c7-zjmw2   1/1     Running   8 (36h ago)   6d9h
    arc-runner-set-754b578d-listener        1/1     Running   0             11h
    dependabot-754b578d-listener            1/1     Running   0             14h
    ```

### Setting up Dependabot



1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.


1. Under "Dependabot", scroll to "Dependabot on Action Runners", and select **Enable** for "Dependabot on self-hosted runners".

{% elsif ghes %}

1. Create an organization on GitHub Enterprise Server. For more information, see [Creating A New Organization From Scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
1. Create a runner group. See [Adding runner groups](#adding-runner-groups).
1. Enable the dependency graph from the Management Console. See [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph#enabling-the-dependency-graph-via-the-management-console).
1. Enable GitHub Connect for your enterprise. See [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom#enabling-github-connect).
1. Enable Dependabot alerts for the enterprise. See [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise#enabling-dependabot-alerts).



## Triggering a Dependabot run

Now that you've set up ARC, you can start a Dependabot run.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click the **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights** tab.

1. In the left sidebar, click **Dependency graph**.
![Screenshot of the "Dependency graph" tab. The tab is highlighted with an orange outline.](/assets/images/help/graphs/graphs-sidebar-dependency-graph.png)


1. Under "Dependency graph", click **Dependabot**.
1. To the right of the name of manifest file you're interested in, click **Recent update jobs**.
1. If there are no recent update jobs for the manifest file, click **Check for updates** to re-run a Dependabot version updates'job and check for new updates to dependencies for that ecosystem.


## Viewing the generated ARC runners

You can view the ARC runners that have been created for the Dependabot job.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)


1. On the left sidebar, click **Runners**.
1. Under "Runners", click **Self-hosted runners** to view the list of all the runners available in the repository. You can see the ephemeral dependabot runner that has been created.
   ![Screenshot showing a dependabot runner in the list of available runners. The runner is highlighted with an orange outline.](/assets/images/help/dependabot/dependabot-self-hosted-runner.png)

   You can also view the same dependabot runner pod created in your kubernetes cluster from the terminal by executing this command.

   ```text copy
   ➜  ARC git:(master) ✗ kubectl get pods -n arc-runners
       NAME                            READY   STATUS    RESTARTS   AGE
       dependabot-sw8zn-runner-4mbc7   2/2     Running   0          46s
   ```

Additionally, you can verify:

* The logs, by checking the runner and machine name. See [View Dependabot Logs](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/view-dependabot-logs).

  ![Example of log for a dependabot self hosted runner.](/assets/images/help/dependabot/dependabot-self-hosted-runner-log.png)

* The version update pull requests created by the dependabot job in the **Pull requests** tab of the repository.
