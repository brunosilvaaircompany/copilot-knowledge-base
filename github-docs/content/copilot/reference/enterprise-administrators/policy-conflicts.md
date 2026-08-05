# Feature availability when GitHub Copilot policies conflict in organizations

## About delegating policy decisions to organizations

Policies can be defined for a whole enterprise, or set at the organization level. See [Policies](https://docs.github.com/en/copilot/concepts/policies).

When an enterprise owner delegates control of a policy to organization owners by setting "No policy," some organizations may enable a feature while others disable it. Users may be granted a Copilot license by organizations with different policies for the same feature.

## How availability is determined

Feature, model, and privacy settings for users are set according to the **least restrictive** or the **most restrictive** policy defined by any of the organizations where they are granted a Copilot license.

* **Least restrictive:** if any of the organizations has **enabled** a feature, this feature is enabled for the user everywhere. This applies to all but the more sensitive Copilot features.

* **Most restrictive:** if any of the organizations has **disabled** a feature, this feature is disabled for the user in all their organizations. This applies only to the most sensitive Copilot features, for example: access to Copilot metrics using the API.

## Availability for members with Copilot from multiple organizations



| Policy | Availability matches | More information |
| :---- | :---- | :---- |
| Copilot Metrics API | Most restrictive organization | [Copilot Usage Metrics](https://docs.github.com/en/rest/copilot/copilot-usage-metrics) |
| Semantic indexing for non-GitHub repositories | Most restrictive organization (only available when all organizations explicitly set **Enabled**; **Unconfigured** behaves as disabled) | [Repository Indexing](https://docs.github.com/en/copilot/concepts/context/repository-indexing) |
| Suggestions matching public code (privacy policy) | Most restrictive organization | [Code Suggestions](https://docs.github.com/en/copilot/concepts/completions/code-suggestions) |
| Allow members without a Copilot license to use Copilot code review in GitHub.com | Most restrictive organization | [Agents](https://docs.github.com/en/copilot/responsible-use/agents) |
| Copilot can search the web | Least restrictive organization | [Chat](https://docs.github.com/en/copilot/responsible-use/chat) |
| Copilot Chat in GitHub Mobile | Least restrictive organization | [Chat](https://docs.github.com/en/copilot/responsible-use/chat) |
| Copilot Chat in the IDE | Least restrictive organization | [Chat](https://docs.github.com/en/copilot/responsible-use/chat) |
| Copilot Chat agent mode in the IDE | Least restrictive organization | [Chat](https://docs.github.com/en/copilot/responsible-use/chat) |
| Copilot code review | Least restrictive organization | [Agents](https://docs.github.com/en/copilot/responsible-use/agents) |
| Copilot cloud agent | Least restrictive organization | [Agents](https://docs.github.com/en/copilot/responsible-use/agents) |
| Spark | Least restrictive organization | [Agents](https://docs.github.com/en/copilot/responsible-use/agents) |
| Copilot in GitHub.com | Least restrictive organization | [Chat](https://docs.github.com/en/copilot/responsible-use/chat) |
| Copilot in GitHub Desktop | Least restrictive organization | [Chat](https://docs.github.com/en/copilot/responsible-use/chat) |
| Copilot CLI | Least restrictive organization | [Agents](https://docs.github.com/en/copilot/responsible-use/agents) |
| GitHub Copilot app | Least restrictive organization | [GitHub Copilot App](https://docs.github.com/en/copilot/concepts/agents/github-copilot-app) |
| Editor preview features | Least restrictive organization | [GitHub Pre Release License Terms](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms) |
| MCP servers in Copilot | Least restrictive organization | [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers) |
| Copilot-generated commit messages | Least restrictive organization | [Chat](https://docs.github.com/en/copilot/responsible-use/chat) |

## Availability for members with Copilot from multiple enterprises

If a user receives a license from multiple different enterprises, the **most restrictive** policy usually applies. The exceptions are:

* AI credit paid usage (this applies to each enterprise, not the user)
* GitHub Spark

## Next steps

* [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies)
* [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies)
