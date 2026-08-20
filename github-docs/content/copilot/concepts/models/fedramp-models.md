# FedRAMP-compliant models for GitHub Copilot

If your enterprise uses GitHub Enterprise Cloud with data residency in the US, you can enable a policy to ensure that users on your Copilot plan can only use models with **FedRAMP Moderate** certification.

## Available models

Users will be able to see available models for your region in the model selector in their Copilot interface.

> [!NOTE]
> Model availability changes over time. New models released on GitHub.com may take additional time to become available as providers deploy regional infrastructure and obtain necessary certifications.


Enabling the FedRAMP policy restricts users to the following models:


* GPT-4o mini
* GPT-4o
* GPT-4.1
* GPT-5.2
* GPT-5.2-Codex
* GPT-5.3-Codex
* Claude Haiku 4.5
* Claude Sonnet 4.5
* Claude Opus 4.5
* Claude Sonnet 4.6
* Claude Sonnet 5
* Claude Opus 4.6
* Claude Opus 4.8
* Claude Opus 5
* MAI-Code-1-Flash


## Client version requirements

To use Copilot with model enforcement, developers must use compatible client versions. Generally, any Copilot extension or CLI version released in 2025 or later includes the necessary policy enforcement capabilities.

If a user attempts to use Copilot with an older, incompatible client, they will be prompted to update their extension or CLI to continue.


## Supported Copilot features

All generally available Copilot features work with this enforcement. See [Features](https://docs.github.com/en/copilot/get-started/features).

Preview features that reach general availability will be supported with compliant model alternatives at the time of their GA release.


## Pricing changes

Copilot requests processed with this enforcement in place include a 10% increase on AI credits consumption. This reflects the additional infrastructure costs that model providers charge for regional and compliance-certified endpoints.

For example, if an interaction would normally consume 100 AI credits, the same interaction processed with this enforcement enabled consumes 110 AI credits. This pricing applies to all compliant model requests across all providers.

See [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).


## Policy controls

To enable this policy, use the **Restrict Copilot to FedRAMP models** policy in the "Features" section of your enterprise's Copilot policies. This policy is disabled by default, and enabling it will affect your pricing for Copilot requests.

For instructions on finding your policies page, see [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).
