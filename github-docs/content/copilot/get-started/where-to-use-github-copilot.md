# Where to use GitHub Copilot

Use GitHub Copilot in the tools you already use to plan, build, review, test, and ship software.

The GitHub Copilot app is the best place to do it all in one workflow: manage agent-driven work across parallel tasks, coordinate work across repositories, and keep the browser, terminal, and pull request lifecycle connected in one place.

You can also ask questions in your browser, get suggestions while editing code in your IDE, work from the terminal, or build your own Copilot-powered tools with the SDK.

If you’re not sure where to start, choose a surface based on the coding work you want to do now. Surfaces can have overlapping use cases: some support broad, multi-step workflows, while others focus on specific tasks.

## Where you can use Copilot

| Where | Use it for | Get started |
| ----- | ---------- | ----------- |
| **GitHub Copilot app** | Managing your developer and agent-driven work across parallel tasks, multiple repositories, and the pull request lifecycle in one dedicated workspace. | [Quickstart Copilot App](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app) |
| **GitHub Copilot CLI** | Working with Copilot from the terminal, including repeatable command-line workflows. | [CLI Quickstart](https://docs.github.com/en/copilot/get-started/cli-quickstart) |
| **Your IDE**<br>(Visual Studio Code, Visual Studio, JetBrains IDEs, Eclipse, and XCode) | Getting inline suggestions, chatting about nearby code, and using an agent that can edit files for you. | [Quickstart For Using GitHub Copilot In Your Ide](https://docs.github.com/en/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide) |
| **GitHub Copilot SDK** | Building custom applications that use the same primitives as Copilot. | [SDK Quickstart](https://docs.github.com/en/copilot/get-started/sdk-quickstart) |
| **GitHub website** | Asking questions about repositories, issues, and pull requests, or assigning work to an agent. | [Quickstart For Using GitHub Copilot On GitHub Com](https://docs.github.com/en/copilot/get-started/quickstart-for-using-github-copilot-on-github-com) |
| **GitHub Mobile** | Chatting with Copilot while away from your main development environment. | [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile) |
| **GitHub Desktop** | Getting help with commit messages and summaries. | [Configuring Copilot In GitHub Desktop](https://docs.github.com/en/desktop/configuring-and-customizing-github-desktop/configuring-copilot-in-github-desktop) |

To check which Copilot features are available to your personal account, go to your Copilot settings at [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text).

To compare support across IDEs, see [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).

## Which one is right for me?

You do not need to use every surface. Choose the one closest to the work you are doing now.

If you are not sure where to start, use Copilot on the GitHub website. There is nothing to install, and you can ask questions about a repository, issue, or pull request you already have open.

Use these common development contexts to choose a surface:

* **Coordinating agent work**: Use the GitHub Copilot app when you want one place to coordinate agent work, manage parallel workstreams, work across multiple repositories, and keep the browser, terminal, and pull request lifecycle connected.
* **Running commands**: Use GitHub Copilot CLI when you want to work in the terminal, run complex terminal commands, and execute tasks in parallel. For agent tasks that run commands, use cloud or local sandboxes to control where commands run and what they can access.
* **Writing code**: Use GitHub Copilot in your IDE when you want to write and refine your code interactively.
* **Extending your own tools**: Use GitHub Copilot SDK when you are building an application or internal workflow that calls Copilot directly.
* **Planning a change**: Use the GitHub website when the work starts from an issue, pull request, or unfamiliar repository.
* **Checking work away from your desk**: Use GitHub Mobile when you need to ask a quick question from a mobile device.

You can switch surfaces later, often without starting over. For example, you might understand an issue in the web interface, ask an agent to make a change, review the pull request in your IDE, and then follow up from the terminal.

## How the surfaces work together

Some context, permissions, and configuration can carry between surfaces. The settings and context that apply depend on the Copilot feature and the surface you use.

Where supported, your plan, custom instructions, agent skills, and connected MCP servers apply across the places where you use Copilot, so you can configure them once and use them in different parts of your workflow.

A single piece of work can move between surfaces. For example, you can start with an issue on GitHub, assign it to Copilot cloud agent, track the work in the GitHub Copilot app, review the pull request in your IDE, and merge it in the web interface.

You can also start Copilot working on a task in your terminal, then continue the same session in your browser or on your mobile device.

The surfaces also share the same foundation. The Copilot experiences you use across surfaces are all powered by the same SDK and platform primitives. You can use that same SDK to build Copilot into your own applications, tools, and workflows, so custom integrations and first-party Copilot experiences all work with the same underlying capabilities.

Your choices hold across the workflow, including:

* **Which model**: Different models suit different kinds of work, and you can switch models for chat and agents. See [Change The Chat Model](https://docs.github.com/en/copilot/how-tos/use-ai-models/change-the-chat-model).
* **Which agents**: Copilot agents and agents from other providers work in the same repositories, open pull requests, and go through review. Copilot applies the same security protections, mitigations, and limitations to third-party agents as it does to Copilot cloud agent. See [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) and [About Third Party Coding Agents](https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents).
* **What Copilot can see**: Custom instructions, agent skills, and MCP servers connect Copilot to your conventions and to the tools your team uses. See [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).
* **What Copilot remembers**: For supported features, Copilot Memory can reuse repository facts and your preferences in later work. See [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory).

For organizations, administrator policies apply across most surfaces developers use. See [Administer Copilot](https://docs.github.com/en/copilot/how-tos/administer-copilot).

## Next steps

* Compare the available Copilot plans. See [Plans](https://docs.github.com/en/copilot/get-started/plans).
