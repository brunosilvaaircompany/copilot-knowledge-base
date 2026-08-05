# GitHub-hosted runners

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Overview of GitHub-hosted runners

Runners are the machines that execute jobs in a GitHub Actions workflow. For example, a runner can clone your repository locally, install testing software, and then run commands that evaluate your code.

GitHub provides runners that you can use to run your jobs, or you can [host your own runners](/actions/concepts/runners/self-hosted-runners). With the exception of single-CPU runners, each GitHub-hosted runner is a new virtual machine (VM) hosted by GitHub. Single-CPU runners are hosted in a container on a shared VM—see [GitHub Hosted Runners](https://docs.github.com/en/actions/reference/runners/github-hosted-runners#single-cpu-runners).


Each runner comes with the runner application and other tools preinstalled. GitHub-hosted runners are available with Ubuntu Linux, Windows, or macOS operating systems. When you use a GitHub-hosted runner, machine maintenance and upgrades are taken care of for you.



You can choose one of the standard GitHub-hosted runner options or, if you are on the GitHub Team or GitHub Enterprise Cloud plan, you can provision a runner with more cores, or a runner that's powered by a GPU processor. These machines are referred to as "larger runner." For more information, see [Larger Runners](https://docs.github.com/en/enterprise-cloud@latest/actions/concepts/runners/larger-runners).

Larger runners also support custom images, which let you create and manage your own preconfigured VM images. For more information, see [Custom images](#custom-images).

Using GitHub-hosted runners requires network access with at least 70 kilobits per second upload and download speeds.





> [!NOTE]
> Entitlement minutes for GitHub-hosted runners are not available for managed user accounts. Enterprise Managed Users who would like to contribute to repositories in organizations they are not a member of can fork the organization repo, then open a pull request targeting the organization repository. This runs the workflows on the organization's GitHub-hosted runners.
 For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).





## Runner images

GitHub maintains our own set of VM images for our standard hosted runners. The list of images and their included tools are managed in the [`actions/runner-images`](https://github.com/actions/runner-images) repository.

### Preinstalled software for GitHub-owned images

The software tools included in our GitHub-owned images are updated weekly. The update process takes several days, and the list of preinstalled software on the `main` branch is updated after the whole deployment ends.

Workflow logs include a link to the preinstalled tools on the exact runner. To find this information in the workflow log, expand the `Set up job` section. Under that section, expand the `Runner Image` section. The link following `Included Software` will describe the preinstalled tools on the runner that ran the workflow.

For more information, see [View Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history).

GitHub-hosted runners include the operating system's default built-in tools, in addition to the packages listed in the above references. For example, Ubuntu and macOS runners include `grep`, `find`, and `which`, among other default tools.

{% ifversion actions-sbom %}

You can also view a software bill of materials (SBOM) for each build of the Windows and Ubuntu runner images. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#reviewing-the-supply-chain-for-github-hosted-runners).



We recommend using actions to interact with the software installed on runners. This approach has several benefits:
* Usually, actions provide more flexible functionality like version selection, ability to pass arguments, and parameters
* It ensures the tool versions used in your workflow will remain the same regardless of software updates

If there is a tool that you'd like to request, please open an issue at [actions/runner-images](https://github.com/actions/runner-images). This repository also contains announcements about all major software updates on runners.

> [!NOTE]
> * You can also install additional software on GitHub-hosted runners. See [Customize Runners](https://docs.github.com/en/actions/how-tos/manage-runners/github-hosted-runners/customize-runners).
> * While nested virtualization is technically possible while using runners, it is not officially supported. Any use of nested VMs is experimental and done at your own risk, we offer no guarantees regarding stability, performance, or compatibility.

### Custom images

Custom images let you start with a GitHub-provided base image and build your own VM image that’s customized to your workflow needs. With custom images, you can:
* Build custom VM images using existing workflow YAML syntax.
* Pre-configure environments with approved tooling, security patches, and dependencies before workflows start.
* Create consistent, validated base environments across all builds.

Custom images can include repository code, container images, binaries, certificates, and other dependencies to create a consistent build environment across workflows. This helps you gain control over your supply chain. They help reduce setup time, improve build performance, and strengthen security by reducing the surface attack vector on your images. Administrators can also apply policies to manage image versions, retention, and age to meet organizational security and compliance requirements.

Custom images can only be used with larger runners. Jobs that use custom images are billed at the same per-minute rates as those runners. Storage for custom images is billed and metered through GitHub Actions storage. For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions#custom-image-storage).

To get started with custom images, see [Use Custom Images](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/use-custom-images).

## Cloud hosts used by GitHub-hosted runners

GitHub hosts Linux and Windows runners on virtual machines in Microsoft Azure with the GitHub Actions runner application installed. The GitHub-hosted runner application is a fork of the Azure Pipelines Agent. Inbound ICMP packets are blocked for all Azure virtual machines, so ping or traceroute commands might not work. GitHub hosts macOS runners in Azure data centers.

## Workflow continuity

If GitHub Actions services are temporarily unavailable, then a workflow run is discarded if it has not been queued within 30 minutes of being triggered. For example, if a workflow is triggered and the GitHub Actions services are unavailable for 31 minutes or longer, then the workflow run will not be processed.


In addition, if the workflow run has been successfully queued, but has not been processed by a GitHub-hosted runner within 45 minutes, then the queued workflow run is discarded.

## The `etc/hosts` file

GitHub-hosted runners are provisioned with an `etc/hosts` file that blocks network access to various cryptocurrency mining pools and malicious sites. Hosts such as MiningMadness.com and cpu-pool.com are rerouted to localhost so that they do not present a significant security risk.


{% endif %}
