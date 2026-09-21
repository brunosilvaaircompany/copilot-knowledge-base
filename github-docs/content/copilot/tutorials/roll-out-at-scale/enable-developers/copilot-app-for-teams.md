# Rolling out the GitHub Copilot app to your team

The GitHub Copilot app is a desktop application for directing agents, reviewing changes, and managing pull requests across parallel workstreams.

Each developer installs the app and signs in individually. You govern their access through Copilot licenses and enterprise or organization policies.

Use this tutorial to configure a pilot, guide developers through their first task, and validate the app workflow before a wider rollout.

## Prerequisites

Before you start:

* Make sure each pilot developer has a Copilot Business or Copilot Enterprise license from the enterprise or organization that will govern their access.
* Choose a pilot repository where developers can make changes and open pull requests.
* Create a well-scoped issue for a small, low-risk task, such as adding tests for existing behavior.

For information about how licenses and policies interact, see [Policies](https://docs.github.com/en/copilot/concepts/enterprise/policies).

## 1. Configure access and policies

If your organizations belong to an enterprise, first establish enterprise-level baselines for policies and model availability. Then configure each organization. Enterprise policies can enforce a setting or, for most policies, allow organizations to decide.

1. Confirm that the **GitHub Copilot app** policy is enabled for the enterprise or organization that supplies licenses to the pilot developers.

   The policy is enabled by default for Copilot Business and Copilot Enterprise. It is independent from the Copilot CLI policy, so enabling one does not enable the other.

   For instructions, see [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) or [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).

1. Configure the models that pilot developers can use.

   Model availability policies apply to the GitHub Copilot app. Establish a baseline that meets your security, compliance, and cost requirements before the pilot begins.

   For instructions, see [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) or [Manage Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

1. If pilot developers need Model Context Protocol (MCP) servers, identify the servers required for the pilot and enable the **MCP servers in Copilot** policy.

   In your enterprise's `managed-settings.json` file, use `allowedMcpServers` to permit only the approved servers. If necessary, use `deniedMcpServers` to block specific server configurations. These settings control which servers can run, but do not install the servers for developers.

   For instructions, see [Configure Enterprise Allowlist](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist).

## 2. Ask developers to install and sign in

After you configure access and policies, ask each developer to:

1. Visit the [download page for the GitHub Copilot app](https://github.com/features/ai/github-app).
1. Download and install the app for their operating system.
1. Open the app.
1. Click **Sign in to GitHub** and follow the prompts to authenticate.
1. Select the pilot repository when prompted. Participants can also add an existing local repository or clone the repository later.
1. If the pilot task requires an MCP server, in the app sidebar, click **Customize**, then **MCP**. Install an approved server required for the task.

For the complete app setup procedure, see [Quickstart Copilot App](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app). For more information about installing MCP servers, see [Customize GitHub Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app#configuring-mcp-servers).

## 3. Complete a first useful task

Start with a task that demonstrates repository context, code changes, test execution, and human review without changing production behavior.

Ask each developer to:

1. In the sidebar, open **My work**.
1. Find and open the issue for the pilot task.
1. Click **New session**. The app creates a session with the issue context already loaded.
1. Select **Interactive** mode and an approved model.
1. In the prompt box, paste the following prompt:

   ```copilot copy
   Implement this issue without changing unrelated behavior.
   Run the relevant tests, then summarize the diff and results.
   ```

1. Respond to requests for input from the agent.
1. After the agent makes changes, click **Changes** and review the diff.
1. Ask the agent to correct any problems.
1. To keep the changes, click **Create PR** and follow your normal review process.

This task validates that each developer can access the repository, use an approved model and, if applicable, an approved MCP server, run project tools, and review agent-generated changes.

For more information about starting sessions from issues, see [Managing Issues And Pull Requests](https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests).

## 4. Run independent workstreams in parallel

Sessions that run in new working trees use isolated workspaces. Developers can make progress on independent tasks without one session changing another session's working files.

Ask developers to try this workflow:

1. Keep the first session open.
1. Click **+** next to **Sessions** and start another session in the same repository.
1. Choose to run the session in a new working tree.
1. Give the second session an independent task.
1. Switch between sessions in the sidebar to monitor progress and provide feedback.
1. Review each session independently and create separate pull requests for any changes you want to keep.

For more information about isolated workspaces, session modes, and model selection, see [Agent Sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions).

After developers complete the pilot, gather feedback about installation, policy restrictions, task selection, and review quality. Use their feedback to resolve common barriers and improve your internal guidance before rolling out the app more widely.
