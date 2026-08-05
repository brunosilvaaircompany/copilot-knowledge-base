# Managing policies and features for GitHub Copilot in your enterprise

When an organization owner assigns a Copilot license to a member of their organization, the availability of features and models is controlled by policies.

If you're setting up Copilot for the first time, see [Govern For Adoption](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/govern-at-scale/govern-for-adoption) for guidance on setting a governance posture that balances compliance with developer productivity.

## Defining policies for your enterprise

Enterprise owners can define a policy for the whole enterprise, or delegate the decision to individual organization owners. See [Policies](https://docs.github.com/en/copilot/concepts/policies).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. Navigate to the page containing the policies you want to manage:

   * To view policies for **AI agents**, in the sidebar, click {% octicon "agent" aria-hidden="true" aria-label="agent" %} **Agents**.
   * To view policies for **Copilot**, in the sidebar, click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **Copilot**.
   * To view policies for **Model Context Protocol (MCP)**, in the sidebar, click {% octicon "mcp" aria-hidden="true" aria-label="mcp" %} **MCP**.
1. Configure your policies as follows:
   * For policies with a **dropdown menu**, select the menu and click an enforcement option.
   * For policies with a **toggle**, click the toggle to set availability or enforcement.
   * For policies with **no visible dropdown menu or toggle**, click the name of the policy for configuration options.

> [!NOTE]
> The **MCP servers in Copilot** policy controls use where MCP server support is generally available (GA). This policy does not control access and permissions for the GitHub MCP server in third-party host applications (like Cursor, Windsurf or Claude). For more information on controlling access to the GitHub MCP server, see the [Policies and Governance](https://github.com/github/github-mcp-server/blob/main/docs/policies-and-governance.md#control-mechanisms) documentation in the GitHub MCP Server repository.


**Suggestions matching public code** is set to **Blocked** by default for Copilot Business users. You can change this setting in the **Privacy** section of the Copilot policy page.

## Opting in to feedback collection

If you enable "Copilot in GitHub.com" from the "Copilot" page of the "AI Controls" tab, you can also opt in to user feedback collection to help GitHub improve Copilot features.

## Further reading

* [Policy Conflicts](https://docs.github.com/en/copilot/reference/policy-conflicts)
* [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies)
