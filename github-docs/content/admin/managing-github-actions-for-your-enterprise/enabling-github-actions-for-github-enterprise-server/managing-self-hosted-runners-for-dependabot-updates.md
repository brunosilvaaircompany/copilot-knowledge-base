# Managing self-hosted runners for Dependabot updates on your enterprise

## About self-hosted runners for Dependabot updates

You can help users of your GitHub Enterprise Server instance to create and maintain secure code by setting up Dependabot security and version updates. With Dependabot updates, developers can configure repositories so that their dependencies are updated and kept secure automatically. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

To use Dependabot updates on your GitHub Enterprise Server instance, you must configure self-hosted runners to create the pull requests that will update dependencies.

## Prerequisites

Configuring self-hosted runners is only one step in the middle of the process for enabling Dependabot updates. There are several steps you must follow before these steps, including configuring your GitHub Enterprise Server instance to use GitHub Actions with self-hosted runners. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

## Configuring self-hosted runners for Dependabot updates

### System requirements for Dependabot runners

Any virtual machine (VM) that you use for Dependabot runners must meet the requirements for self-hosted runners. In addition, they must meet the following requirements.

* Linux operating system
* x64 architecture

* Docker installed with access for the runner users:
  * We recommend installing Docker in rootless mode and configuring the runners to access Docker without `root` privileges.
  * Alternatively, install Docker and give the runner users raised privileges to run Docker.

The CPU and memory requirements will depend on the number of concurrent runners you deploy on a given VM. As guidance, we have successfully set up 20 runners on a single 2 CPU 8GB machine, but ultimately, your CPU and memory requirements will heavily depend on the repositories being updated. Some ecosystems will require more resources than others.

If you specify more than 14 concurrent runners on a VM, you must also update the Docker `/etc/docker/daemon.json` configuration to increase the default number of networks Docker can create.

```json
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```




>[!NOTE]
> Private networking is supported with either an Azure Virtual Network (VNET) or the Actions Runner Controller (ARC) for Dependabot on GitHub Actions. See [Setting Dependabot To Run On Self Hosted Runners Using Arc](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/setting-dependabot-to-run-on-self-hosted-runners-using-arc) and [Setting Dependabot To Run On GitHub Hosted Runners Using Vnet](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/setting-dependabot-to-run-on-github-hosted-runners-using-vnet).




### Network requirements for Dependabot runners

Dependabot runners require access to the public internet, GitHub.com, and any internal registries that will be used in Dependabot updates. To minimize the risk to your internal network, you should limit access from the Virtual Machine (VM) to your internal network. This reduces the potential for damage to internal systems if a runner were to download a hijacked dependency.


You must also allow outbound traffic to `dependabot-actions.githubapp.com` to prevent the jobs for Dependabot security updates from failing. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners).




### Certificate configuration for Dependabot runners

If your GitHub Enterprise Server instance uses a self-signed certificate, or if Dependabot needs to interact with registries that use self-signed certificates, those certificates must also be installed on the self-hosted runners that run Dependabot jobs. This security hardens the connection. You must also configure Node.js to use the certificate, because most actions are written in JavaScript and run using Node.js, which does not use the operating system certificate store.

### Adding self-hosted runners for Dependabot updates

1. Provision self-hosted runners, at the repository, organization, or enterprise account level. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners) and [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).

1. Set up the self-hosted runners with the requirements described above. For example, on a VM running Ubuntu 20.04 you would:
   * Install Docker and ensure that the runner users have access to Docker. For more information, see the Docker documentation.
     * [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     * Recommended approach: [Run the Docker daemon as a non-root user (Rootless mode)](https://docs.docker.com/engine/security/rootless/)
     * Alternative approach: [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   * Verify that the runners have access to the public internet and can only access the internal networks that Dependabot needs.
   * Install any self-signed certificates for your GitHub Enterprise Server instance or for registries that Dependabot will need to interact with.
     * Configure Node.js to use the same certificate. For more information, see [Troubleshooting GitHub Actions For Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#configuring-nodejs-to-use-the-certificate).

1. Assign a `dependabot` label to each runner you want Dependabot to use. For more information, see [Apply Labels](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/apply-labels#assigning-a-label-to-a-self-hosted-runner).

1. Optionally, enable workflows triggered by Dependabot to use more than read-only permissions and to have access to any secrets that are normally available. For more information, see [Troubleshooting GitHub Actions For Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions).
