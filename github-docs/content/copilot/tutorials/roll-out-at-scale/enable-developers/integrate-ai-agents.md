# Understanding how AI agents fit into your enterprise's workflows

This tutorial helps enterprise owners, AI managers, and engineering leaders plan an AI agent rollout. You'll identify which features to enable, which controls to review, and which teams to involve before rollout.

## About AI agents on GitHub

Developers in your enterprise may already use AI as a pair programming tool, receiving code suggestions synchronously during development.

AI agents are more like peer programmers. They can:

* Perform asynchronous tasks, such as running tests or fixing issues in your backlog, with less need for human intervention.
* Contribute to workflows beyond the development phase, such as ideation or optimization after a release.

Collaborating with agents can give your employees more time to focus on other priorities, such as high-level planning, and bring the benefits of AI to non-developer roles by giving more power to natural language prompts.

GitHub Copilot's agentic features are integrated into GitHub's platform, providing a streamlined experience and simplified licensing and governance compared to third-party tools. Users can start cloud sessions from a local client and resume them in GitHub, with the same tools, permissions, and models.

## Example scenario

You're an engineering manager at Mona's, a boutique umbrella retailer. Your team is adding an **AI-powered widget** to the online store that recommends umbrellas based on the user's location and local weather.

To meet a tight deadline, you want to speed up each stage for both developers and non-developers, while keeping maintenance manageable after launch. You work with your enterprise's administrators to decide which features to make available and how to govern their use.

>[!NOTE] GitHub is continually expanding its AI-powered platform. Some of the features described in this article are in public preview, and may not be enabled for enterprises by default. You will find resources for each feature in the [Get started with agentic AI](#get-started-with-agentic-ai) section.

## 1. Plan with Copilot on GitHub

1. A product manager (PM) starts a session with Copilot at [github.com/copilot](https://github.com/copilot?utm_source=integrate-ai-agents-roll-out-scale&utm_medium=docs&utm_campaign=universe-2026), working in the repository that contains the codebase for the project.

   They ask Copilot high-level questions to get a sense of the development work required for the new feature. To give Copilot access to important context about the project, they upload mockup files and link to the repository where the codebase is stored.

1. The PM pins the cloud session to save it at the top of their session list. Later, while on the move to meet a customer, they resume the session in GitHub Mobile to continue planning.

   > [!TIP]
   > If the organization requires single sign-on (SSO), the PM must authenticate with SSO to access the session from another client.
1. When the PM has worked with Copilot to get an overview of the tasks required, they ask Copilot to **create issues** for each part of the work.

   ![Screenshot of Copilot Chat. Copilot asks if the user would like to proceed with creating a set of prioritized issues.](/assets/images/help/copilot/sdlc-guide/issue-creation.png)

1. To help the developer get started quickly, the PM creates a space with **Copilot Spaces** at [github.com/copilot/spaces](https://github.com/copilot/spaces). The PM collects resources like diagrams and references to code files, submits a few test questions, then shares the space with their organization.

   The developer can now ask questions in the space with all the PM's context already available.

## 2. Create with Copilot CLI

1. After asking some initial questions in the Copilot space, the developer resumes the session in their terminal to start looking at the code. They ask Copilot to recommend several AI models for the job and list the pros and cons of each.
1. After writing some code, the developer asks Copilot to refactor the code into several different functions and lint it based on the organization's standards. They invoke one of the organization's custom agents, which includes custom instructions for the organization.

   Copilot can update multiple files at once and, with the developer's authorization, run commands for actions like installing dependencies or running tests.

1. Before opening a pull request, the developer runs `/security-review` to identify likely vulnerabilities in active local changes and apply remediations.
1. The developer reviews the diff and chooses which code to keep.

## 3. Test with an MCP server

1. With the code finished, the developer runs tests on their local build using Playwright.

   1. The developer has configured the **Model Context Protocol (MCP) server** for Playwright, an approved server in the enterprise's private MCP registry.
   1. The developer asks Copilot to outline test scenarios in a `.feature` file, then run the tests in the browser.
   1. Copilot asks the developer to authorize its actions as it opens the browser and interacts with the UI. It identifies a failing test and suggests a fix.

1. When they're satisfied with the tests, the developer asks Copilot to open a pull request for the work on GitHub. Using the **GitHub MCP server**, Copilot opens a pull request with the title and description already filled in.

   >[!TIP]
   > Interactions with the GitHub MCP server are secured by **push protection**, which blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the server (public repositories only).

## 4. Review with Copilot code review

1. A repository owner has configured automatic **code reviews** by Copilot on the repository. Copilot provides an initial review on the pull request, identifying bugs and potential performance issues that the developer can fix before a human reviewer gets to the pull request.
1. The developer's colleague reviews and approves the pull request. The work is ready to merge.

## 5. Assign follow-up work to Copilot

1. After the release, the product manager identifies an opportunity to improve the widget by switching to a more reliable weather API. They create an issue and **assign it to Copilot** directly on GitHub.
1. Copilot works in the background and opens a pull request, which the product manager marks as ready for review.

   ![Screenshot of a pull request created by Copilot.](/assets/images/help/copilot/sdlc-guide/agent-pr.png)

1. A developer reviews the pull request and leaves feedback, which Copilot incorporates. The developer then merges the pull request.

   >[!TIP] Copilot comes with default guardrails. For example, it cannot merge pull requests by itself. You can define additional protections for target branches using repository rulesets.

1. Later, while working on a separate feature, the developer notices a small bug in the code for the AI widget. To avoid context switching, the developer delegates the work to Copilot directly from their Copilot CLI session.

   `/delegate Create a PR for the widget function to correctly validate that the user's age is a positive integer.`

## 6. Secure with Copilot Autofix

1. An administrator has enabled code scanning on the repository, and a code scanning alert suggests a potential vulnerability in the code.
1. A security manager requests **Copilot Autofix** to automatically suggest a fix for the vulnerability, which a developer reviews and approves.

   ![Screenshot of a code scanning alert on GitHub.com. A button labeled "Generate fix" is outlined in orange.](/assets/images/help/copilot/sdlc-guide/autofix.png)

## Planning your rollout

Use the example above to identify where AI agents can help your teams. Work with your enterprise's administrators to plan for:

* **Pilot teams and tasks**: Choose a team and a workflow to try first, such as backlog maintenance or pull request review.
* **Governance requirements**: Identify the policies, approved MCP servers, and repository protections needed for that workflow.
* **Rollout responsibilities**: Agree who will configure enterprise policies, prepare repositories, train developers, and review the pilot's results.
