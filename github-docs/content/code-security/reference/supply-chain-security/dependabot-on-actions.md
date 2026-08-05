# Dependabot on GitHub Actions

## Restrictions when Dependabot triggers events

Dependabot is able to trigger GitHub Actions workflows on its pull requests and comments; however, certain events are treated differently.


For workflows initiated by Dependabot (`github.actor == 'dependabot[bot]'`) using the `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment`, and `deployment_status` events, these restrictions apply:

* `GITHUB_TOKEN` has read-only permissions by default.
* Secrets are populated from Dependabot secrets. GitHub Actions secrets are not available.

For workflows initiated by Dependabot (`github.actor == 'dependabot[bot]'`) using the `pull_request_target` event, if the base ref of the pull request was created by Dependabot (`github.event.pull_request.user.login == 'dependabot[bot]'`), the `GITHUB_TOKEN` will be read-only and secrets are not available.

These restrictions apply even if the workflow is re-run by a different actor.

For more information, see [Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

## Requirements for using Dependabot with self-hosted runners

To generate Dependabot updates using self-hosted runners, you need to properly configure your system, network, and certificates.

### System requirements

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


### Network requirements

Dependabot runners require access to the public internet, GitHub.com, and any internal registries that will be used in Dependabot updates. To minimize the risk to your internal network, you should limit access from the Virtual Machine (VM) to your internal network. This reduces the potential for damage to internal systems if a runner were to download a hijacked dependency.


You must also allow outbound traffic to `dependabot-actions.githubapp.com` to prevent the jobs for Dependabot security updates from failing. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners).




### Certificate configuration

If Dependabot needs to interact with registries that use self-signed certificates, those certificates must also be installed on the self-hosted runners that run Dependabot jobs. This security hardens the connection. You must also configure Node.js to use the certificate, because most actions are written in JavaScript and run using Node.js, which does not use the operating system certificate store.
