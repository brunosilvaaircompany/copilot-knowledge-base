# Getting started with the GitHub Copilot app

For a conceptual overview of the GitHub Copilot app, see [GitHub Copilot App](https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app).

In this quickstart, you will:

1. Install and sign in to the GitHub Copilot app.
1. Connect a repository or local folder.
1. Make code changes in an agent session.

## Prerequisites

* A GitHub account.
* A Copilot plan, or you can configure your own model provider.
  * If you use your own model provider, you will need provider credentials such as an API key. For setup steps, see [Use Byok Models](https://docs.github.com/en/copilot/how-tos/github-copilot-app/use-byok-models).
* [Git](https://github.com/git-guides/install-git) installed on your computer.

> [!NOTE]
> For Copilot Business and Copilot Enterprise users, the GitHub Copilot app policy must remain enabled. This policy is enabled by default and is separate from the Copilot CLI policy. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Installing the GitHub Copilot app

Download and install the GitHub Copilot app for your operating system. For other operating systems and architectures, see the [download page](https://github.com/features/ai/github-app).

<a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline js-os-download" data-os-download-mac="https://gh.io/copilot-app-mac" data-os-download-mac-intel="https://gh.io/copilot-app-mac-intel" data-os-download-windows="https://gh.io/copilot-app-win64" data-os-download-windows-arm="https://gh.io/copilot-app-win-arm" data-os-download-linux="https://gh.io/copilot-app-linux">{% octicon "desktop-download" aria-hidden="true" %} <span class="js-os-download-label">Download the GitHub Copilot app</span></a>


## Opening the GitHub Copilot app for the first time

1. Open the GitHub Copilot app.
1. Click **Sign in to GitHub** and follow the prompts to authenticate. 

   If you use GitHub Enterprise Cloud with data residency, choose **Use GitHub Enterprise** and enter your `*.ghe.com` hostname when prompted. GitHub Enterprise Server is not supported by the GitHub Copilot app.
1. If you do not have a Copilot plan, choose whether to sign up for a plan or continue with your own model provider.
    * If you choose to use your own model provider, select a provider, enter any required credentials, then click **Save and continue**.
1. When prompted, select one or more repositories based on your recent GitHub activity. You can also add a local folder or repository, or skip this step and add repositories later.
1. Choose a theme, then complete onboarding to open the app.

## Connecting a repository or folder

To work on code, you need at least one repository or local folder connected to the app. You can connect a folder already on your machine, including a repository you've already cloned locally, or a repository you clone from GitHub or another remote Git host such as Azure DevOps. Connecting a repository or folder unlocks the core app workflow: reading code, making edits, and opening pull requests from agent sessions. If you skipped repository setup during onboarding, or want to add more repositories or folders later:

1. In the sidebar, next to **Sessions**, click {% octicon "plus" aria-label="New" %}.
1. Choose where to add the repository or folder from:
  * **Open local folder** — Select a folder already on your machine, including one that contains a repository you've already cloned locally.
  * **Add GitHub repository** — Browse and clone a repository from GitHub.
  * **Clone repository** — Clone from a Git URL for repositories hosted outside GitHub (for example, on Azure DevOps) or for private repositories without app access.

## Making your first code changes

1. In the sidebar, next to **Sessions**, click {% octicon "plus" aria-label="New" %}, then select the connected repository or folder under "Start session in."
1. Select a session mode from the dropdown below the prompt field—for example, **Interactive** to work collaboratively with the agent.
1. In the prompt box, paste this prompt:

   ```copilot copy
   Suggest a small low-risk code change in this repository, implement it, and explain the diff.
   ```

1. Respond to any requests for input from the agent. After the agent makes changes, click **Changes** above the prompt box to view the diff.
1. Continue iterating in the same session until you are happy with the result.
1. If you want to keep the change, click **Create PR** to open a pull request for review.
1. If you create a pull request, click **PR** above the prompt box to view it directly in the app.

**Optional:** If you already have tasks you want to complete in your repository, you can start a session from an issue in **[My work](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fmywork)**. For more information, see [Managing Issues And Pull Requests](https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests).

## Orienting yourself


The sidebar gives you access to the main areas of the app:

* **New** — Start a new agent session.
* **[My work](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fmywork)** — Browse and filter issues and pull requests from your repositories, check CI status, and leave reviews.
* **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** — Saved agent tasks that run on a schedule or on demand.
* **Customize** — Discover and manage plugins, skills, MCP servers, and canvases.
* **Search** — Search across your repositories directly from the app.
* **Sessions** — View connected repositories, local folders, and their active agent sessions, or start a new session for a repository or folder.
* **Chats** — General conversations that do not require a dedicated branch or workspace.

## Next steps

Find out more about using the GitHub Copilot app:

* [Agent Sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions)
* [Working With Canvas Extensions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions)
* [Managing Issues And Pull Requests](https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)
* [Using Automations](https://docs.github.com/en/copilot/how-tos/github-copilot-app/using-automations)
* [Slash Commands](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)
* [Built In Skills](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills)
