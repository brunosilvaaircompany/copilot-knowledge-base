# Enhancing GitHub Copilot agent mode with MCP

>[!NOTE]
>
> **MCP servers in Copilot** policy for enterprises and organizations, disabled by default, controls the use of MCP.


## About Copilot's agentic capabilities and MCP

Copilot's agentic capabilities refer to the ability to **work independently** by executing multi-step workflows without constant guidance, **make decisions** by choosing appropriate tools and approaches based on context, and **iterate and adapt** by adjusting its approach according to feedback and results. You can access these capabilities by using agent mode.

When combined with Model Context Protocol (MCP) servers, agent mode becomes significantly more powerful, giving Copilot access to external resources without switching context. This enables Copilot to complete agentic "loops," where it can dynamically adapt its approach by autonomously finding relevant information, analyzing feedback, and making informed decisions. With MCP, Copilot can complete a task with minimal human intervention, continuously adjusting its strategy based on what it discovers.

### Benefits of combining MCP with agent mode

When you use MCP servers with agent mode, you unlock several key benefits:

* **Extended context**: MCP servers provide Copilot with access to external data sources, APIs, and tools.
* **Reduced manual effort**: Copilot can perform tasks like creating issues and running workflows while you focus on higher-value tasks.
* **Seamless integration**: Copilot can work on a task involving multiple tools and platforms without switching contexts or requiring custom integrations.

## Best practices for using MCP with agent mode

Follow these best practices to get the most out of combining MCP servers with agent mode.

### Prompting strategies

* **Be specific about goals**: Clearly define what you want to accomplish in your prompt and what output you want.
* **Provide context**: Include relevant background information about your project and requirements, including links to external resources that Copilot can access.
* **Set boundaries**: Specify any constraints or limitations for the task. For example, if you want Copilot to only plan a new feature and not make any changes yet, specify that. You can also limit which MCP tools are enabled.
* **Request confirmations**: Ask Copilot to confirm its understanding before proceeding with significant changes.
* **Use prompt files or custom instructions**: You can create prompt files or custom instructions files to guide Copilot on how to behave for different MCP servers. See [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization).

### MCP server use

* **Choose relevant servers**: Select and enable MCP servers that align with your specific workflow needs.
* **Start simple**: Begin with a few well-established MCP servers before adding more complex integrations.
* **Test connectivity**: Ensure all MCP servers are properly configured and accessible before starting agent mode tasks.

### Security considerations

* **Use OAuth when available**: For MCP servers like GitHub MCP, prefer OAuth authentication over personal access tokens. See [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server#remote-mcp-server-configuration-with-oauth).
* **Limit permissions**: Only grant MCP servers the minimum permissions necessary for your tasks.
* **Review connections**: Regularly audit which MCP servers have access to your development environment.
* **Monitor activity**: Keep track of what actions Copilot performs through MCP servers.
* **Prevent secret leaks**: Push protection blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the GitHub MCP server. This is currently available for public repositories only. See [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).

## Example scenario: Implementing accessibility compliance

> [!NOTE] The following scenario is only meant to demonstrate the patterns and strategies you can use with agent mode and MCP servers to complete a task from start to finish; the scenario, prompts and responses are just examples.

Let's say your team has received feedback that your customer portal needs to be updated to comply with the latest accessibility standards. You've been tasked with improving accessibility across the application with the following guidance:

* A list of specifications defined by the design team.
* Issues created in your project's repository after an accessibility audit.

You can use Copilot agent mode to leverage multiple MCP servers to efficiently implement accessibility improvements.

The scenario below demonstrates how you can use separate prompts for different phases (research, planning, implementation, and validation), resulting in multiple agentic "loops" loosely aligned with software development lifecycle phases. This approach creates natural checkpoints where you can review progress, provide feedback, and adjust your requirements before Copilot continues to the next phase.

* [Prerequisites](#prerequisites)
* [Setting up MCP servers](#setting-up-mcp-servers)
* [Step 1: Research loop - Analyzing accessibility requirements](#step-1-research-loop---analyzing-accessibility-requirements)
* [Step 2: Planning loop - Accessibility implementation strategy](#step-2-planning-loop---accessibility-implementation-strategy)
* [Step 3: Implementation loop - Making accessibility improvements](#step-3-implementation-loop---making-accessibility-improvements)
* [Step 4: Testing loop - Accessibility verification with Playwright](#step-4-testing-loop---accessibility-verification-with-playwright)
* [Step 5: Updating GitHub issues](#step-5-updating-github-issues)
* [Further reading](#further-reading)

### Prerequisites

Before using agent mode with MCP, ensure you have:

* An IDE with Copilot integration and MCP support (such as Visual Studio Code)
* Agent mode enabled
* Access to the required MCP servers you want to use

### Setting up MCP servers

First, you need to configure the MCP servers that you anticipate Copilot will need. For this example scenario, we'll use:

* **GitHub MCP server**: Configure the GitHub MCP server to enable Copilot to access your repository, examine your codebase, research existing issues, create branches, and manage pull requests. See [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).

* **Figma MCP server**: Configure the Figma MCP server to allow Copilot to access design files that include accessibility specifications, such as color contrast requirements, focus states, and interaction patterns. See [Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) or try out the [Dev Mode MCP server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server).

* **Playwright MCP server**: Set up the Playwright MCP server to enable Copilot to write and run automated accessibility tests, including screen reader compatibility and keyboard navigation tests. See [mcp-playwright](https://github.com/executeautomation/mcp-playwright).

### Step 1: Research loop - Analyzing accessibility requirements

Prompt Copilot to analyze both accessibility requirements and existing accessibility-related GitHub issues in the project.

In your prompt, include a link to the Figma file. In order for Copilot to successfully read and analyze the design specifications, select a specific node or layer in the file, so that the node ID is included in the URL.

#### Example prompt 1

```copilot copy
I need to make our customer portal WCAG 2.1 AA compliant. Use the Figma MCP to analyze our design specifications at https://figma.com/design/DESIGN-FILE-FOR-ACCESSIBILITY-SPECS?node-id=NODE_ID for accessibility requirements. Also use the GitHub MCP to find open GitHub issues with the labels accessibility or WCAG in the customer-portal repository. Then sort them into categories and list each issue that falls under the category with the issue title and number.
```

#### Example response 1

Copilot should respond first by requesting to run tools from the Figma and GitHub MCP servers. Once you allow it, Copilot will analyze the Figma design specifications and search for and organize GitHub issues into categories.

For example, Copilot may identify color contrast as a category based on finding multiple issues about it.

> * Color Contrast Issues
>   * Issue #134: Dashboard text contrast ratio below 4.5:1
>   * Issue #156: Form error states don't meet contrast requirements

This gives you a comprehensive overview of accessibility requirements that you can then have Copilot prioritize and create a plan for.

### Step 2: Planning loop - Accessibility implementation strategy

Next, ask Copilot to create a detailed implementation plan.

#### Example prompt 2

```copilot copy
Based on your accessibility analysis of our Figma designs and GitHub issues, create a focused implementation plan for an immediate pull request addressing the highest priority accessibility issues. Don't make any changes yet. Also suggest follow-up issues we should create for the remaining Figma specifications.
```

#### Example response 2

Copilot will respond by creating a prioritized implementation plan focused on high-impact accessibility issues for an immediate pull request while suggesting follow-up issues for remaining work.

For example, Copilot may identify what needs to be done to fix the issues in the color contrast category.

> * **1. Color Contrast Fixes:**
>   * Update text color variables in variables.scss to ensure 4.5:1 contrast ratio for all normal text
>   * Modify UI component colors in DashboardCard.vue and other primary components to meet 3:1 contrast ratio
>   * Prioritize fixing Issue #134 (Dashboard text contrast) and Issue #156 (Form error states)

You can ask Copilot to adjust the plan based on what you want to focus on. The outcome is a plan you are comfortable with that you can now ask Copilot to implement.

### Step 3: Implementation loop - Making accessibility improvements

After reviewing the plan, prompt Copilot to begin implementing accessibility fixes.

#### Example prompt 3

```copilot copy
Create a new branch and implement the critical accessibility fixes according to your proposed implementation plan. Focus on the top three categories that you identified as highest priority. Create a pull request with proper references to the issues being fixed.
```

#### Example response 3

Copilot will respond by executing the implementation plan, making targeted code changes to address the identified accessibility issues and creating a pull request.

For example, Copilot may create a new branch called `fix/critical-accessibility-issues` and make changes to address the color contrast issues.

> * Fixed dashboard text contrast issues (Issue #134):
>   * Updated text color variables in `src/styles/variables.scss` from #767676 to #595959
>   * Modified dark text on light gray backgrounds in `DashboardCard.vue` to ensure 4.5:1 ratio
>
>I've opened pull request #213 with these changes.

### Step 4: Testing loop - Accessibility verification with Playwright

You can prompt Copilot to create and run accessibility tests using the Playwright MCP.

#### Example prompt 4

```copilot copy
Create focused accessibility tests for the components we've updated in the pull request. Use the Playwright MCP.
```

#### Example response 4

Copilot will respond by developing accessibility tests and, if necessary, creating a Playwright configuration file.

For example, Copilot may create a test file around text contrast.

> **Test implementation:**
>
> * Created a targeted test file in `tests/accessibility/`:
>   * `contrast.spec.ts` - Validates text contrast ratios

Once the tests are created, Copilot will ask for permission to use various tools from the Playwright MCP to run the tests. Note that sometimes Copilot may do additional testing that you didn't necessarily ask for; you can try to prevent this by adjusting your prompt to be stricter.

### Step 5: Updating GitHub issues

Finally, prompt Copilot to update the GitHub issues that have been addressed in the pull request, and create follow-up issues.

#### Example prompt 5

```copilot copy
Update the GitHub issues we've fixed in the pull request with comments summarizing the changes. Create the follow-up issues you suggested for the remaining accessibility work.
```

#### Example response 5

Copilot will respond by asking for permission to use the necessary tools from the GitHub MCP server. It will then update the GitHub issues with detailed comments and create structured follow-up issues for remaining work.

For example, Copilot will add comments in the color contrast issues initially identified in the research step.

> **Updated issues with comments:**
>
> * Issue #134: "Dashboard text contrast ratio below 4.5:1"
>   * Comment: "Fixed in PR #213 by updating text color variables in variables.scss and DashboardCard component. All dashboard text now meets 4.5:1 contrast ratio, verified by automated tests."

Now you can review the pull request and make any adjustments. Once you have verified that the changes are valid, you can merge as with any other pull request.

## Hands-on practice

Practice integrating MCP with GitHub Copilot in the [Integrate MCP with GitHub Copilot](https://github.com/skills/integrate-mcp-with-copilot/) Skills exercise.

In this exercise, you will learn how to:

* Set up and connect the GitHub MCP server to GitHub Copilot.
* Use natural language to interact with external services through MCP tools in agent mode.
* Search for and analyze similar projects with MCP.
* Triage, create, and manage GitHub issues, then implement changes with GitHub Copilot.

## Further reading

* **MCP fundamentals**: For more information about setting up and configuring MCP servers, see [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp).
* **Using MCP servers**: For additional ideas on integrating MCP with GitHub Copilot, see [5 ways to transform your workflow using GitHub Copilot and MCP](https://github.blog/ai-and-ml/github-copilot/5-ways-to-transform-your-workflow-using-github-copilot-and-mcp/) on the the GitHub Blog.
