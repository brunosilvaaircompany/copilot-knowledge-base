# Using Copilot cloud agent in your IDE

{% vscode %}

## Starting a session

1. Install the [GitHub Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) for Visual Studio Code.
1. Open GitHub Copilot Chat in Visual Studio Code.
1. Type a prompt explaining what you want Copilot to do.

   For example, `Put backticks around file names and variables in output`

   > [!TIP]
   > To help Copilot, you can select the relevant line(s) of code before submitting your prompt.

1. Submit your prompt by clicking the <svg class="octicon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M15.724 11.053V11.948L7.724 15.948L7.026 15.343L8.14 12.001H13V11.001H8.14L7.026 7.659L7.724 7.054L15.724 11.053ZM1 8C1 6.46 2.15 5.18 3.67 5.02L4.02 4.98L4.11 4.64C4.5 3.09 5.89 2 7.5 2C9.43 2 11 3.57 11 5.5V6H11.5C12.88 6 14 7.12 14 8.5V8.52L14.95 8.99C14.98 8.83 15 8.67 15 8.5C15 6.73 13.68 5.26 11.98 5.03C11.74 2.77 9.82 1 7.5 1C5.55 1 3.84 2.25 3.23 4.07C1.37 4.43 0 6.07 0 8C0 10.21 1.79 12 4 12H7V11H4C2.35 11 1 9.65 1 8Z"/></svg> **Delegate this task to the GitHub Copilot cloud agent** button, next to the <svg class="octicon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"/></svg> **Send** button

1. If you have local changes, a dialog will be displayed asking if you want to push those changes so Copilot can start from your current state. Click **Include changes** to push your changes, or **Ignore changes** to ask Copilot to start its work from your repository's default branch.

   Copilot will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Tracking your sessions

You can see a list of your running and past agent sessions for a specific repository in Visual Studio Code with the [GitHub Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github).

Once you've installed the extension, you can see Copilot's sessions by clicking the **GitHub** button in the sidebar.

For each session listed, you can see its status at a glance, or click on it to navigate to the pull request within Visual Studio Code.

To view the session logs, click on the pull request in the list, then click **View Session**.

To directly open agent sessions in VS Code, click the **Open in VS Code** option on the agents tab.

> [!NOTE]
> Opening a session in VS Code is currently only available in VS Code Insiders.

{% endvscode %}





{% jetbrains %}

> [!NOTE]
> Copilot cloud agent in JetBrains IDEs is in public preview, and subject to change.

## Starting a session

1. Enable Copilot cloud agent in your JetBrains IDE.
   1. Open **Settings**.
   1. In the sidebar, click **Tools**, then **Copilot**, then **Chat**.
   1. Select **Enable Cloud Agent**.
1. If you use Copilot Business or Copilot Enterprise, ask your administrator to enable the Editor preview features policy.
1. Open Copilot Chat in your JetBrains IDE.
1. Type a prompt explaining what you want Copilot to do.

   For example, `Put backticks around file names and variables in output`

1. Click the **Delegate to Cloud Agent** button next to the **Send** button.

   Copilot will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification from GitHub and in the IDE.

## Tracking your sessions

You can see a list of your running and past agent sessions for a project in JetBrains IDEs with the Copilot Chat extension. See [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains).

Cloud agent sessions appear in the unified sessions view in the Copilot Chat panel alongside local and Copilot CLI sessions.

You can open the unified sessions view by clicking the **GitHub Cloud Agent Jobs** button in the sidebar or by clicking the **Open Job List** button after delegating a task to Copilot from Copilot Chat.

You can filter sessions by agent type or status to find the session you want.

For each session listed, you can see its status at a glance. Click **Open in Browser** to open the pull request in your browser, or right-click on a running job then click **Cancel Job** to cancel.

Copilot will also notify you when an agent job has started and finished.

{% endjetbrains %}





{% eclipse %}

> [!NOTE]
> Copilot cloud agent in Eclipse is in public preview, and subject to change.

## Starting a session

1. Open GitHub Copilot Chat in Eclipse.
1. Type a prompt explaining what you want Copilot to do.

   For example, `Put backticks around file names and variables in output`

1. Click **{% octicon "agent" aria-label="The Agents icon" %}** next to the **Send** button.
1. In the dialog box that opens, select the repository you want Copilot to work in, then click **Continue**.

   Copilot will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification from GitHub and in the IDE.

## Tracking your sessions

You can see a list of your running and past agent sessions for a project in Eclipse with the GitHub Copilot Chat extension. See [Install Copilot Extension?Tool=Eclipse](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=eclipse).

You can see all of Copilot's sessions by clicking **{% octicon "agent" aria-label="The Agents icon" %}** at the top right of the chat window, or by clicking the **Open Job List** button after delegating a task to Copilot from GitHub Copilot Chat.

For each session listed, you can see its status at a glance. Click **Open in Browser** to open the pull request in your browser, or right-click on a running job then click **Cancel Job** to cancel.

Copilot will also notify you when an agent job has started and finished.

{% endeclipse %}





{% visualstudio %}

> [!NOTE] To use Copilot cloud agent in Visual Studio, you'll need to be running at least [December Update 18.1.0](https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes#github-copilot-1) of Visual Studio 2026.

## Starting a session

1. Enable Copilot cloud agent support in Visual Studio.
   1. Open the **Tools** menu, then click **Options**.
   1. In the sidebar, select **GitHub**.
   1. Check the **Enable Copilot Cloud agent (preview)** box.
   1. Restart Visual Studio.
1. Open GitHub Copilot Chat in Visual Studio.
1. Enter a prompt, giving details of what you want Copilot to change.

   For example, `Put backticks around file names and variables in log output.`

1. Submit your prompt by clicking the <svg class="octicon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M15.724 11.053V11.948L7.724 15.948L7.026 15.343L8.14 12.001H13V11.001H8.14L7.026 7.659L7.724 7.054L15.724 11.053ZM1 8C1 6.46 2.15 5.18 3.67 5.02L4.02 4.98L4.11 4.64C4.5 3.09 5.89 2 7.5 2C9.43 2 11 3.57 11 5.5V6H11.5C12.88 6 14 7.12 14 8.5V8.52L14.95 8.99C14.98 8.83 15 8.67 15 8.5C15 6.73 13.68 5.26 11.98 5.03C11.74 2.77 9.82 1 7.5 1C5.55 1 3.84 2.25 3.23 4.07C1.37 4.43 0 6.07 0 8C0 10.21 1.79 12 4 12H7V11H4C2.35 11 1 9.65 1 8Z"/></svg> **Delegate this task to the GitHub Copilot cloud agent** button, next to the <svg class="octicon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"/></svg> **Send** button.

   Copilot asks you to confirm that you want to use the cloud agent to create a pull request.

1. Click **Confirm**.

   Copilot will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

{% endvisualstudio %}

## Further reading

* [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)
* [Troubleshoot Cloud Agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/troubleshoot-cloud-agent)
