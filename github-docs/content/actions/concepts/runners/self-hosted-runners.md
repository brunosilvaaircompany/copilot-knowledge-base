# Self-hosted runners

A self-hosted runner is a system that you deploy and manage to execute jobs from GitHub Actions on GitHub.

Self-hosted runners:


* Give you more control of hardware, operating system, and software tools than GitHub-hosted runners provide. Be aware that you are responsible for updating the operating system and all other software.
* Allow you to use machines and services that your company already maintains and pays to use.
* Are free to use with GitHub Actions, but you are responsible for the cost of maintaining your runner machines.
* Let you create custom hardware configurations that meet your needs with processing power or memory to run larger jobs, install software available on your local network.
* Receive automatic updates for the self-hosted runner application only, though you may disable automatic updates of the runner.
* Don't need to have a clean instance for every job execution.
* Can be organized into groups to restrict access to specific workflows, organizations, and repositories. See [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access).
* Can be physical, virtual, in a container, on-premises, or in a cloud.

You can use self-hosted runners anywhere in the management hierarchy. Repository-level runners are dedicated to a single repository, while organization-level runners can process jobs for multiple repositories in an organization. Organization owners can choose which repositories are allowed to create repository-level self-hosted runners. See [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#limiting-the-use-of-self-hosted-runners). Finally, enterprise-level runners can be assigned to multiple organizations in an enterprise account.

## Next steps


To get hands-on experience with the policies and usage of self-hosted runners, see [Getting Started With Self Hosted Runners For Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)


To find information about the requirements and supported software and hardware for self-hosted runners, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners).
