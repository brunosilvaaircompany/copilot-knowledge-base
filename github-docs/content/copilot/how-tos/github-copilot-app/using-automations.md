# Using automations in the GitHub Copilot app

## About automations

Automations let you save recurring agent tasks and run them on a schedule or on demand. For example, you can create an automation that triages new issues daily or checks your open pull requests for review status each morning.

You can also set up recurring tasks within a project to support an ongoing goal. See [Working With Projects](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects).

You can create and manage automations from:

* The **Agents** tab in a repository on GitHub, in the **Automations** pane.
* The **Automations** tab in the **Agents** window in VS Code.

For an overview of automations, including triggers, tools, visibility, and security, see [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations).

The GitHub Copilot app supports two types of automations:

* **Local automations**, which run from your local environment.
* **Cloud automations**, which run in a cloud environment.

Open **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** in the sidebar to see your saved automations. Each automation shows its name, schedule, associated repository, and last run status.

## Prerequisites for using cloud automations

To use cloud automations, make sure the following settings are enabled.

* Copilot cloud agent must be enabled for the repository. If you have Copilot Business or Copilot Enterprise, an administrator must enable the Copilot cloud agent policy. See [Cloud Agent Access](https://docs.github.com/en/copilot/concepts/enterprise/cloud-agent-access).
* The organization must allow both Copilot cloud agent and automations in the repository (both are enabled by default). See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

## Creating an automation

Cloud automation sessions, including prompts and session logs, are visible to everyone with read access to the repository, even for personal automations. Don't include secrets or other sensitive information in your prompts.

1. In the sidebar, click **Automations**.
1. Click **Create automation** in the top-right corner.

### Creating a cloud automation with Copilot

You can work with Copilot to design your cloud automation, setting up the triggers, tools and prompt.

Copilot can even help you create self-improving groups of automations which learn from outcomes and suggest improvements to themselves.

1. From the dropdown under the prompt box, choose the repository where you want to create your automation.
1. In the prompt box, describe what you want Copilot to help you automate in your repository.
1. Under **Type**, choose the kind of automation you want to create:

   * **Personal**: Only you can see the automation. AI credits are charged to you, and actions taken on GitHub use your identity.
   * **Shared**: Everyone with access to the repository can see the automation. AI credits are charged to the organization or user that owns the repository, and actions taken on GitHub use Copilot's identity.

   You can't change the type after you create the automation. See [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#personal-and-shared-automations).
1. Click **Start session**.

   Copilot will ask you questions and help to set up your automation.

### Creating an automation manually

1. Click **Create manually**.
1. Enter a name for the automation.
1. Optionally, enable **Run in the cloud** to let the automation run in a cloud environment, allowing the automation to run even when your computer is off. The available triggers will differ based on whether you are running locally or in the cloud.
1. Select a **Trigger** from the dropdown. Selecting a trigger will reveal additional fields for you to populate.

   For automations triggered by issues or pull requests and running in the cloud, you can choose:

   * **What resources on GitHub can be updated during the run**. From the **When triggered, this automation can change** dropdown, choose **Anything in this repository** to let GitHub tools create and update any resource in the repository. Choose **Only the triggering issue** to limit those tools' writes to the issue or pull request that triggered the run and any resources created during the run. This setting doesn't limit tools from MCP servers, which can access resources allowed by their server configuration and credentials. Depending on your repository configuration, the **Anything in this repository** option may not be available.
   * **Whether activity from Copilot in the cloud can trigger this automation**: From the **Can be triggered by** dropdown, pick **Only people** to ignore events triggered by Copilot, including automations. Pick **People and Copilot** to listen for all events, including events triggered by Copilot.
   * **Whether users with only read access to the repository can trigger this automation**: By default, automations ignore activity from users who don't have write access to the repository. Uncheck the **Require write access to trigger** box to listen for these events. Depending on your repository configuration, the **Require write access to trigger** option may be locked in an enabled state.

   To configure more than one trigger, click **Add another trigger**. The automation runs when any of its triggers occur.

1. For a cloud automation, under **Type**, choose who the automation belongs to:

   * **Personal**: Only you can see the automation. AI credits are charged to you, and actions taken on GitHub use your identity.
   * **Shared**: Everyone with access to the repository can see the automation. AI credits are charged to the organization or user that owns the repository, and actions taken on GitHub use Copilot's identity.

   You can't change the type after you create the automation. See [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#personal-and-shared-automations).

1. For a cloud automation, use the **Tools** dropdown to select the tools Copilot can use, such as pushing changes, updating issue labels, or creating a pull request. You can also select tools from MCP servers configured in the repository's MCP settings. A repository administrator must configure these servers first. See [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers). Select only the tools the task requires.
1. In the prompt box, describe the task you want Copilot to perform each time the automation runs. You can type `/` to use an available skill.
1. Optionally, for a cloud automation, expand **AI credit limits** directly below the prompt box to set limits on how many AI credits the automation can consume. See [Setting AI credits limits for cloud automations](#setting-ai-credits-limits-for-cloud-automations).
1. Use the controls below the prompt box to select the model, reasoning effort, and agent for the automation.
1. Choose the repository or local folder where the automation will run.
1. Click **Create** to save the automation. To save and test it immediately, open the dropdown next to **Create**, then click **Create and run**.

### Setting AI credits limits for cloud automations

To control costs, you can limit how many AI credits a cloud automation can consume. Limits aren't available for local automations.

When you create or edit a cloud automation, expand the **AI credit limits** section directly below the prompt box. When the section is collapsed, it shows whether any limits are set.

You can set the following optional limits, in AI credits. Leave a limit empty if you don't want to set it.

* **Per run**: Stops a run as soon as it reaches the limit. The minimum is 30 AI credits.
* **Daily**: Prevents new runs from starting once the limit is reached. Resets every day at 00:00 UTC.
* **Weekly**: Prevents new runs from starting once the limit is reached. Resets every Monday at 00:00 UTC.
* **Monthly**: Prevents new runs from starting once the limit is reached. Resets on the first day of each month at 00:00 UTC.

The daily, weekly, and monthly limits don't stop a run that is already in progress. To cap the cost of each individual run, set a per-run limit.


To remove a limit, edit the automation and clear the value.

## Running an automation on demand

You can trigger any saved automation manually by clicking the play button on its card on the "Automations" page, without waiting for its next scheduled run.

You can also open automations directly in the app using deep links from markdown files, third-party tools, or scripts. For more information, see [Open With Deep Links](https://docs.github.com/en/copilot/how-tos/github-copilot-app/open-with-deep-links).
