# Managing GitHub Copilot access to your organization's network

## About Copilot subscription-based network routing

On GitHub.com, enterprise and organization owners can use their network firewall to control which GitHub Copilot plans members can use. Allow the endpoints for your organization's or enterprise's plan and block the endpoint for personal plans.

Configuring Copilot subscription-based network routing will affect the following Copilot features:

* Copilot inline suggestions in Visual Studio Code, Visual Studio, JetBrains IDEs, and Vim/NeoVim
* Copilot Chat in Visual Studio Code, Visual Studio, and JetBrains IDEs
* Copilot Chat on GitHub
* GitHub Mobile Apps
* Copilot CLI

Copilot subscription-based network routing is enabled for all users. Requests use a plan-specific endpoint. The Copilot Enterprise endpoint also serves the Copilot access billing model, both through GitHub Enterprise Cloud and as Copilot Standalone. Endpoint reuse does not determine which features or models are available.

## Important steps to ensure continued access to Copilot

You should ensure that your firewall allows access to all of the hostnames listed in [Copilot Allowlist Reference](https://docs.github.com/en/copilot/reference/copilot-allowlist-reference).

> [!WARNING]
> Before migrating from Copilot Business to the Copilot access billing model on GitHub.com, update your allowlist to permit `*.enterprise.githubcopilot.com`. An allowlist that permits only `*.business.githubcopilot.com` will block traffic for this billing model.

If your enterprise is hosted on GHE.com, use the data residency domains in that reference instead. Subscription-based network routing is not supported there.

## Configuring Copilot subscription-based network routing for your enterprise or organization

Add the endpoint required by your enterprise's plan. If your enterprise uses both Copilot Business and Copilot Enterprise, allow both endpoints.

1. Ensure your members have updated to at least the minimum version of their Copilot client listed below.
    * For Visual Studio Code, use Copilot Chat version 0.17 or later.
    * For JetBrains IDEs, use Copilot version 1.5.6.5692 or later.
    * For Visual Studio, use version VS 2022 17.11 or later.

1. Update your corporate network firewall to include one, or both, of these paths in your allowlist:
    * For a Copilot Business plan, add `*.business.githubcopilot.com`
    * For a Copilot Enterprise plan or the Copilot access billing model, add `*.enterprise.githubcopilot.com`

    > [!NOTE] The `*` indicates a wildcard character. A wildcard is necessary as there are multiple subdomains required for Copilot to function correctly.

1. Update your corporate network firewall to include `*.individual.githubcopilot.com` in your blocklist.
