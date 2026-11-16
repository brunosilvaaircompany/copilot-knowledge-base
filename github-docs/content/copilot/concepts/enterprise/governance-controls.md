# Governance controls for GitHub Copilot

Governance of GitHub Copilot depends on a range of features and settings. Some are specific to Copilot, and some apply to the GitHub platform as a whole. Understanding how these surfaces interact is the first step of setting up your governance framework.

## Overview

As a simplified example, you can think of the surfaces interacting like this:

1. **Assign seats** on your enterprise's Copilot plan. Users who receive seats from your enterprise are governed by your other settings and controls.
1. **Configure your network settings** to control which endpoints Copilot can reach on your corporate network. Copilot's endpoints are segregated by SKU, so you can block the use of personal Copilot plans on the network. This ensures that everyone using Copilot through the network uses a plan assigned by your organization or enterprise and is subject to the corresponding governance controls.
1. **Set policies** to determine where your licensed users can use Copilot and which features are available in those clients. For example, you can enable VS Code, Copilot CLI, or the Copilot app separately.
1. **Configure settings** to govern what your licensed users can do in those clients:

   * Model settings control which LLM models users can choose when interacting with Copilot, including custom models from an external provider.
   * A `managed-settings.json` file gives you granular control over what users and agents can do in the clients you've enabled.
   * Billing settings, such as budgets and cost centers, control the costs associated with usage that's billed to your enterprise.

1. **Create rulesets** to enforce code and review standards in your enterprise's repositories, for both users and agents.
1. **Use audit logs** to record changes to these settings so you can prevent unintended configuration drift.

## How each surface works

{% rowheaders %}

| Surface | What it does | Where it's defined | Who it affects | Where it applies |
| ------- | ------------ | ------------------ | -------------- | ---------------- |
| Seat assignment | Gives users the right to use Copilot. Determines whose usage is billed to your enterprise and who is affected by your enterprise policies. If you use Enterprise Managed Users, this is the only route for managed accounts to access Copilot. | Enterprise **AI controls**, organization settings, or an external identity provider (via enterprise teams). | Members of the enterprise or organization. | Gives users the right to use Copilot, but where and how they can use it is controlled by the rest of your governance settings. |
| Network settings | Defines which GitHub endpoints users can access, and with which account. For example: does traffic flow through a proxy? Can users use a personal Copilot plan on your network, or connect to GitHub with their personal account at all? | A combination of enterprise settings on GitHub and rules on your corporate proxy or firewall. | Anyone on your corporate network | The GitHub website and connections to remote resources from local clients. |
| Copilot policies | Sets basic on/off controls, such as whether a feature is enabled or a client is available to users. | Enterprise **AI controls** or organization settings. Enterprises can choose to set blanket policies or let organizations decide. | Generally, all users who receive a Copilot seat from your organization or enterprise. | Each specific client has its own enablement policy. Other policies have varying client support. See [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies). | 
| Model settings | Controls which models are available to which users, including models from external providers. | Enterprise **AI controls** or organization settings. Different settings can be rolled out to enterprise teams or organizations with specific requirements. | Users who receive a Copilot seat from your organization or enterprise. | See the **Configure models** row in [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies). |
| Enterprise managed settings | Controls what users and their agents can do in the clients they use. For example, which plugins can they install, which MCP servers can they connect to, and which agent tool calls require approval. | Either a JSON file in a `.github-private` repository, or configuration rolled out directly to users' machines via mobile device management. | Depends on the rollout method: the JSON file targets your licensed Copilot users only; machine configuration targets anyone using that machine. | Different keys are supported in different clients. See [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings#client-support-by-key). |
| Billing settings | Sets budgets to control your enterprise's usage costs. | Enterprise or organization billing settings: budgets, cost centers, and overage policies. | People whose usage is billed to your enterprise. | All Copilot clients and surfaces. |
| Rulesets | Protects branches from undesired or unreviewed code changes. | Enterprise, organization, or repository settings on GitHub. | Anyone who contributes to the targeted repositories, including both agents and humans. | Targeted repositories and branches, which you can specify based on naming conventions or custom properties. |
| Audit logs | Allows your enterprise to track agent activity and changes to your governance settings or Copilot plan. | Available to view on GitHub and optionally stream to an external platform for retention. | Enterprise and organization administrators; not visible to users without the required permission. | Captures activity on the GitHub website, but does not provide visibility into what users do in local clients or provide a granular breakdown of agent sessions. |

{% endrowheaders %}
