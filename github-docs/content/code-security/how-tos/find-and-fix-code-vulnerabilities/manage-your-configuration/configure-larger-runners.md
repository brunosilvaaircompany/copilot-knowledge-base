# Configuring larger runners for default setup

> [!NOTE]
> Support for larger runners for code scanning default setup is currently in public preview and subject to change.




## Provisioning enterprise-level larger runners for default setup

1. Add a larger runner to your enterprise. For more information, see [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#adding-a-larger-runner-to-an-enterprise).
   * To add the `code-scanning` label to your larger runner, name the runner `code-scanning`. An enterprise can only have one larger runner named `code-scanning`, and that runner will handle all code scanning jobs for all organizations and repositories within your enterprise that:
     * _Have access_ to the enterprise-level runner, and
     * _Don't have access_ to an organization-level larger runner named `code-scanning`. If an organization or repository also has access to an organization-level larger runner named `code-scanning`, each code scanning job will be randomly assigned to either the organization-level or enterprise-level runner.
1. To allow organizations to access your larger runner, specify which organizations can use the runner group the runner is assigned to. For more information, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access#changing-which-organizations-can-access-a-runner-group).

1. To analyze repositories with default setup, grant the desired repositories access to the runner group your larger runner is assigned to. For more information, see [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#allowing-repositories-to-access-larger-runners).
1. You can now configure default setup for your enterprise, organizations, and repositories, and your larger runner will automatically pick up code scanning jobs as previously specified. For more information on configuring default setup, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning) and [Code Scanning At Scale](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/code-scanning-at-scale).


## Provisioning organization-level larger runners for default setup

1. Add a larger runner to your organization. See [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#adding-a-larger-runner-to-an-organization).

   * To add a custom label to your larger runner, give the runner a name that matches that label. You can use this custom label when you configure default setup with larger runners.

1. By default, all repositories in your organization have access to organization-level runners, meaning every repository can use your larger runner. For information on granting only select repositories access to a larger runner, see [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#allowing-repositories-to-access-larger-runners).
1. You can now configure default setup for your organization and repositories, and your larger runner will automatically pick up code scanning jobs. For more information on configuring default setup, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning) and [Code Scanning At Scale](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/code-scanning-at-scale).

## Extra steps for Swift analysis

Currently, Swift analysis is not available on larger runners for default setup. Additionally, if your repository has access to a runner with the `code-scanning` label, such as a larger runner provisioned for default setup, default setup workflows will _only_ use runners labeled `code-scanning`. If you would like to configure default setup on larger runners _and_ analyze Swift, you have two options:

* Provision a self-hosted macOS runner with the `code-scanning` label in addition to your larger runner. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).
* Ensure any repositories containing Swift _do not_ have access to runners with the label `code-scanning`. Default setup workflows for that repository will only use standard runners
