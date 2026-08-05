# Getting started with self-hosted runners for your enterprise

## About self-hosted runners for GitHub Actions

GitHub Actions allows users in your enterprise to improve productivity by automating every phase of the software development workflow.
 For more information, see [About GitHub Actions For Enterprises](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

With GitHub Actions, developers can write and combine individual tasks called actions to create custom workflows. To enable GitHub Actions for  {% ifversion ghes %}your GitHub Enterprise Server instance, you must host at least one machine to execute jobs.{% endif %} You can host your own runner machine to execute jobs, and this{% elsif ghes %}This machine is called a self-hosted runner. Your runner machine connects to GitHub using the GitHub Actions self-hosted runner application.
 All{% elsif ghes %}Self-hosted runners can run Linux, Windows, or macOS. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners).



Alternatively, you can use runner machines that GitHub hosts. GitHub-hosted runners are outside the scope of this guide. For more information, see [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners).



This guide shows you how to apply a centralized management approach to self-hosted runners for GitHub Actions in your enterprise. In the guide, you'll complete the following tasks.

1. Configure a limited policy to restrict the actions and reusable workflows that can run within your enterprise
1. Deploy a self-hosted runner for your enterprise
1. Create a group to manage access to the runners available to your enterprise
1. Optionally, further restrict the repositories that can use the runner
1. Optionally, to build and scale self-hosted runners automatically, use Actions Runner Controller (ARC). For more information, see [Actions Runner Controller](https://docs.github.com/en/actions/concepts/runners/actions-runner-controller).

You'll also find additional information about how to monitor and secure your self-hosted runners, how to access actions from GitHub.com, and how to customize the software on your runner machines.

After you finish the guide, members of your enterprise{% elsif ghes %}users of {% ifversion ghes %}your GitHub Enterprise Server instance{% endif %} will be able to run workflow jobs from GitHub Actions on a self-hosted runner machine.

## Prerequisites


* GitHub Actions must be enabled for GitHub Enterprise Server. A site administrator can enable and configure GitHub Actions for your instance. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).


* You must have access to the machine you will use as a self-hosted runner in your environment.

- The connection between self-hosted runners and GitHub is over HTTP (port 80) or HTTPS (port 443). To ensure connectivity over HTTPS, configure TLS for GitHub Enterprise Server. For more information, see [Configuring Tls](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls).



* Your enterprise must own at least one organization. For more information, see [About Organizations](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations) and [Creating A New Organization From Scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

## 1. Configure policies for GitHub Actions

First, enable GitHub Actions for all organizations, and configure a policy to restrict the actions and reusable workflows that can run within your enterprise{% elsif ghes %}on {% ifversion ghes %}your GitHub Enterprise Server instance{% endif %}. Optionally, organization owners can further restrict these policies for each organization.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Under "Policies", select **Enable for all organizations**.
1. To enable local actions and reusable workflows,  and actions created by GitHub, select **Allow enterprise, and select non-enterprise, actions and reusable workflows**
, then select **Allow actions created by GitHub**.
1. Click **Save**.

You can configure additional policies to restrict the actions available to enterprise members{% elsif ghes %}users of {% ifversion ghes %}your GitHub Enterprise Server instance{% endif %}. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run).

## 2. Deploy the self-hosted runner for your enterprise

Next, add a self-hosted runner to your enterprise. GitHub will guide you through installation of the necessary software on the runner machine. After you deploy the runner, you can verify connectivity between the runner machine and your enterprise{% elsif ghes %}{% ifversion ghes %}your GitHub Enterprise Server instance{% endif %}.

### Adding the self-hosted runner


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. Click **New runner**, then click **New self-hosted runner**.
1. Select the operating system image and architecture of your self-hosted runner machine.

   ![Screenshot of the choice of operating system and architecture. These options are highlighted with a dark orange outline.](/assets/images/help/actions/creating-selfhosted-runner.png)

1. You will see instructions showing you how to download the runner application and install it on your self-hosted runner machine.

   Open a shell on your self-hosted runner machine and run each shell command in the order shown.

   > [!NOTE]
   > On Windows, if you want to install the self-hosted runner application as a service, you must open a shell with administrator privileges. We also recommend that you use `C:\actions-runner` as the directory for the self-hosted runner application so that Windows system accounts can access the runner directory.

   The instructions walk you through completing these tasks:
   * Downloading and extracting the self-hosted runner application.
   * Running the `config` script to configure the self-hosted runner application and register it with GitHub Actions. The `config` script requires the destination URL and an automatically-generated time-limited token to authenticate the request. The token expires after one hour.
     * On Windows, the `config` script also asks if you would like to install the self-hosted runner application as a service. For Linux and macOS, you can install a service after you finish adding the runner. For more information, see [Configure The Application](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application).
   * Running the self-hosted runner application to connect the machine to GitHub Actions.




### Checking that your self-hosted runner was successfully added

After completing the steps to add a self-hosted runner, the runner and its status are now listed under "Runners"{% elsif ghes %}"Self-hosted runners".

The self-hosted runner application must be active for the runner to accept jobs. When the runner application is connected to GitHub and ready to receive jobs, you will see the following message on the machine's terminal.

```shell
√ Connected to GitHub

2019-10-24 05:45:56Z: Listening for Jobs
```



## 3. Manage access to the self-hosted runner using a group

You can create a runner group to manage access to the runner that you added to your enterprise. You'll use the group to choose which organizations can execute jobs from GitHub Actions on the runner.

GitHub adds all new runners to a group. Runners can be in one group at a time. By default, GitHub adds new runners to the "Default" group.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runner groups** tab.

1. Click **New runner group**.
1. Under "Group name", type a name for your runner group.

1. To choose a policy for organization access, under "Organization access", select the **Organization access** drop-down, and click **Selected organizations**.
1. To the right of the drop-down with the organization access policy, click {% octicon "gear" aria-label="Configure organizations" %}.
1. Select the organizations you'd like to grant access to the runner group.
1. Optionally, to allow public repositories in the selected organizations to use runners in the group, select **Allow public repositories**.

   > [!WARNING]
   > We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

   >
   > For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

1. Click **Create group** to create the group and apply the policy.

1. Click the "Runners" tab.
1. In the list of runners, click the runner that you deployed in the previous section.
1. Click **Edit**.
1. Click **Runner groups {% octicon "gear" aria-hidden="true" aria-label="gear" %}**.
1. In the list of runner groups, click the name of the group that you previously created.
1. Click **Save** to move the runner to the group.

You've now deployed a self-hosted runner that can run jobs from GitHub Actions within the organizations that you specified.

## 4. Further restrict access to the self-hosted runner

Optionally, organization owners and users with the "Manage organization runners and runner groups" permission can further restrict the access policy of the runner group that you created. For example, an organization owner could allow only certain repositories in the organization to use the runner group.

For more information, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group).

For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

## 5. Automatically scale your self-hosted runners

Optionally, you can use Actions Runner Controller (ARC) to automatically scale self-hosted runners. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates and scales self-hosted runners for GitHub Actions. For more information, see [Operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) in the Kubernetes documentation.

With ARC, you can create runner scale sets that automatically scale based on the number of workflows running in your repository, organization, or enterprise. Because controlled runners can be ephemeral and based on containers, new runner instances can scale up or down rapidly and cleanly. For more information about autoscaling, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners).


## Next steps

* You can monitor self-hosted runners and troubleshoot common issues. For more information, see [Monitor And Troubleshoot](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot).

* GitHub recommends that you review security considerations for self-hosted runner machines. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#hardening-for-self-hosted-runners).

* If you use GitHub Enterprise Server, you{% elsif ghes %}You can manually sync repositories on GitHub.com containing actions to your enterprise on GitHub Enterprise Server. Alternatively, you can allow members of your enterprise to automatically access actions from GitHub.com by using GitHub Connect. For more information, see the following.

  * [Manually Syncing Actions From Githubcom](https://docs.github.com/en/enterprise-server@latest/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) in the GitHub Enterprise Server documentation
  * [Enabling Automatic Access To Githubcom Actions Using GitHub Connect](https://docs.github.com/en/enterprise-server@latest/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) in the GitHub Enterprise Server documentation

* You can customize the software available on your self-hosted runner machines, or configure your runners to run software similar to GitHub-hosted runners available for customers using GitHub.com. The software that powers runner machines for GitHub Actions is open source. For more information, see the [`actions/runner`](https://github.com/actions/runner) and [`actions/runner-images`](https://github.com/actions/runner-images) repositories.

## Further reading

* [Configure The Application](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application)
* [Use In A Workflow](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow)
