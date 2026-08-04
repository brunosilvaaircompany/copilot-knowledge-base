# Managing GitHub Copilot access to your organization's network

## About Copilot subscription-based network routing

As an enterprise or organization owner, you can use your network firewall to explicitly allow access to Copilot Business, Copilot Enterprise, or both, and/or block access to Copilot Pro, Copilot Pro+, Copilot Max, or Copilot Free. This allows you to control which GitHub Copilot plans your members can use within your network.

Configuring Copilot subscription-based network routing will affect the following Copilot features:

* Copilot inline suggestions in Visual Studio Code, Visual Studio, JetBrains IDEs, and Vim/NeoVim
* Copilot Chat in Visual Studio Code, Visual Studio, and JetBrains IDEs
* Copilot Chat on GitHub
* GitHub Mobile Apps
* Copilot CLI

Copilot subscription-based network routing is enabled for all users. This ensures that users access Copilot through an endpoint that is specific to their Copilot plan. Only Copilot Business users will be able to connect to the Copilot Business endpoint and only Copilot Enterprise users will be able to connect to the Copilot Enterprise endpoint.

## Important steps to ensure continued access to Copilot

You should ensure that your firewall allows access to all of the hostnames listed in [Copilot Allowlist Reference](https://docs.github.com/en/copilot/reference/copilot-allowlist-reference).

## Configuring Copilot subscription-based network routing for your enterprise or organization

Enterprise or organization owners can add the endpoints for Copilot Business, Copilot Enterprise, or both to their allow-list. This will ensure that members can only access Copilot through the allowed endpoint.

> [!NOTE] If your enterprise account includes both Copilot Business and Copilot Enterprise plans, make sure both endpoints are added to your allow-list.

1. Ensure your members have updated to at least the minimum version of their Copilot client listed below.
    * For Visual Studio Code, use Copilot Chat version 0.17 or later.
    * For JetBrains IDEs, use Copilot version 1.5.6.5692 or later.
    * For Visual Studio, use version VS 2022 17.11 or later.

1. Update your corporate network firewall to include one, or both, of these paths in your allowlist:
    * For a Copilot Business plan, add `*.business.githubcopilot.com`
    * For a Copilot Enterprise plan, add `*.enterprise.githubcopilot.com`

    > [!NOTE] The `*` indicates a wildcard character. A wildcard is necessary as there are multiple subdomains required for Copilot to function correctly.

1. Update your corporate network firewall to include `*.individual.githubcopilot.com` in your blocklist.
