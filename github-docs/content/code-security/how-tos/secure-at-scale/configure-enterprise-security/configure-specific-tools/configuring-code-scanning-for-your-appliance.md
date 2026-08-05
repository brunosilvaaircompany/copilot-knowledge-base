# Configuring code scanning for your appliance{% elsif default-setup-self-hosted-runners-GHEC %}Configuring self-hosted runners for code scanning in your enterprise





## About code scanning

Code scanning is a feature that you use to analyze the code in a GitHub repository to find security vulnerabilities and coding errors. Any problems identified by the analysis are shown in your repository.


You can configure code scanning to run CodeQL analysis and third-party analysis. Code scanning also supports running analysis natively using GitHub Actions or externally using existing CI/CD infrastructure. The bullets below summarize the options available to users when you configure your GitHub Enterprise Server instance to allow code scanning using actions.

* **CodeQL:** Uses GitHub Actions with either default setup (see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning)) or advanced setup (see [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)), or runs CodeQL analysis in a third-party continuous integration (CI) system (see [Use With Existing Ci System](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system)).
* **Third&#8209;party:** Uses GitHub Actions (see [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-third-party-workflows)) or third-party tools and uploads results to GitHub (see [Upload Sarif File](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file)).


## Checking whether your license includes Advanced Security

You can identify if your enterprise has a license for Advanced Security products by reviewing your enterprise settings. For more information, see [Enabling GitHub Advanced Security For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/enabling-github-advanced-security-for-your-enterprise#checking-whether-your-license-includes-github-advanced-security).


## Prerequisites for code scanning

* A license for GitHub Code Security or GitHub Advanced Security, (see [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security))

* Code scanning enabled in the management console (see [Enabling GitHub Advanced Security For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/enabling-github-advanced-security-for-your-enterprise))

* A VM or container for code scanning analysis to run in.



<a name="running-code-scanning-using-github-actions"></a>

## Running code scanning using GitHub Actions

### Provisioning a self-hosted runner

{% elsif default-setup-self-hosted-runners-GHEC %}

## Provisioning a self-hosted runner

> [!NOTE]
> * If your enterprise uses GitHub-hosted runners with GitHub Actions, proceed directly to configuring code scanning through GitHub.com. See [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning) and [Code Scanning At Scale](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/code-scanning-at-scale).
> * With the exception of Swift analysis, default setup can now run on larger runners. See [Larger Runners](https://docs.github.com/en/actions/concepts/runners/larger-runners) and [Configure Larger Runners](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/configure-larger-runners).



GitHub can run code scanning using a GitHub Actions workflow. First, you need to provision one or more self-hosted GitHub Actions runners in your environment. You can provision self-hosted runners at the repository, organization, or enterprise account level. See [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners) and [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).


If you are provisioning a self-hosted runner for CodeQL analysis, your runner must use a CodeQL-supported operating system version and CPU architecture. See the [CodeQL system requirements](https://codeql.github.com/docs/codeql-overview/system-requirements/).

If you are using default setup for code scanning, you can assign self-hosted runners with the default `code-scanning` label, or you can optionally give them custom labels so that individual repositories can use different runners. See [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#assigning-labels-to-self-hosted-runners).

For information about using default setup for code scanning analysis of compiled languages, see [Codeql For Compiled Languages](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/codeql-for-compiled-languages).



You must ensure that Git is in the PATH variable on any self-hosted runners you use to run CodeQL actions.



> [!NOTE]
> If you use CodeQL code scanning to analyze code written in Python in your enterprise, you must make sure that your self-hosted runner has Python 3 installed.





### Provisioning a runner scale set

You can use Actions Runner Controller to create a dedicated runner scale set for your GitHub Enterprise Server instance. See [Deploy Runner Scale Sets](https://docs.github.com/en/enterprise-server@latest/actions/how-tos/manage-runners/use-actions-runner-controller/deploy-runner-scale-sets#using-arc-with-dependabot-and-code-scanning).

### Provisioning the actions for code scanning

If you want to use actions to run code scanning on GitHub Enterprise Server, the actions must be available on your appliance.

The CodeQL action is included in your installation of GitHub Enterprise Server. If both GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} and your GitHub Actions runner have access to the internet, the action will automatically download the CodeQL {% ifversion ghes < 3.18 %}2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3 bundle required to perform analysis. Alternatively, you can use a synchronization tool to make the latest released version of the CodeQL analysis bundle available locally. See [Configuring CodeQL analysis on a server without internet access](#configuring-codeql-analysis-on-a-server-without-internet-access) below.

You can also make third-party actions available to users for code scanning, by setting up GitHub Connect. See [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions) below.

### Configuring CodeQL analysis on a server without internet access

If the server on which you are running GitHub Enterprise Server is not connected to the internet, and you want to allow users to enable CodeQL code scanning for their repositories, you must use the CodeQL action sync tool to copy the CodeQL analysis bundle from GitHub.com to your server. The tool, and details of how to use it, are available at [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

If you configure the CodeQL action sync tool, you can use it to sync the latest releases of the CodeQL action and associated CodeQL analysis bundle. These are compatible with GitHub Enterprise Server.

### Configuring GitHub Connect to sync GitHub Actions

1. If you want to download action workflows on demand from GitHub.com, you need to enable GitHub Connect. See [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom#enabling-github-connect).
1. You'll also need to enable GitHub Actions. See [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).
1. The next step is to configure access to actions on GitHub.com using GitHub Connect. See [Enabling Automatic Access To Githubcom Actions Using GitHub Connect](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect).
1. Add a self-hosted runner to your repository, organization, or enterprise account. See [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).

## Running code scanning using the CodeQL CLI

If you don't want to use GitHub Actions, you should run code scanning using the CodeQL CLI.

The CodeQL CLI is a command-line tool that you use to analyze codebases on any machine, including a third-party CI/CD system. See [Use With Existing Ci System](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system).
{% endif %}
