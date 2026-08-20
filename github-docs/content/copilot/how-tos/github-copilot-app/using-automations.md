# Using automations in the GitHub Copilot app

## About automations

Automations let you save recurring agent tasks and run them on a schedule or on demand. For example, you can create an automation that triages new issues daily or checks your open pull requests for review status each morning.

You can create and manage automations from:

* The **Agents** tab in a repository on GitHub, in the **Automations** pane.
* The **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** tab in the GitHub Copilot app.

For an overview of automations, including triggers, tools, visibility, and security, see [About Automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations).

The GitHub Copilot app supports two types of automations:

* **Local automations**, which run from your local environment.
* **Cloud automations**, which run in a cloud environment.

Open **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** in the sidebar to see your saved automations. Each automation shows its name, schedule, associated repository, and last run status.

## Prerequisites for using cloud automations

To use cloud automations, make sure the following settings are enabled.

* Copilot cloud agent must be enabled for the repository. If you have Copilot Business or Copilot Enterprise, an administrator must enable the Copilot cloud agent policy. See [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management).
* The organization must allow both Copilot cloud agent and automations in the repository (both are enabled by default). See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).
* If you want to create automations that can listen to events triggered by users without write access, disable the "Only allow automations to be triggered by users with write access" setting in Copilot cloud agent repository settings.

## Creating an automation

1. Click **New automation** in the top-right corner.
1. Enter a name for the automation.
1. Select a **Trigger** from the dropdown. Selecting a trigger will reveal additional fields for you to populate.

   * **Manual**: Run the automation only when you start it.
   * **Hourly**: Run the automation every hour.
   * **Daily**: Choose one or more hours and a minute. The automation runs at each selected time.
   * **Weekly**: Choose one or more days of the week and a time of day.
   * **CRON**: For a local automation, enter a custom CRON expression. The app validates the expression and shows a human-readable preview of the schedule.
   * **Issue**: Choose the repository event that triggers the automation, such as an issue being created. You can add a search query to limit which issues trigger it.
   * **Pull request**: Choose the repository event that triggers the automation, such as a pull request being opened or new commits being pushed to it. You can add filters to limit which pull requests trigger it.

   To configure more than one trigger, click **Add another trigger**. The automation runs when any of its triggers occur.
1. Optionally, enable **Run in the cloud** to let the automation run in a cloud environment, allowing the automation to run even when your computer is off.

   For a cloud automation, use the **Tools** dropdown to select the tools Copilot can use, such as pushing changes, updating issue labels, or creating a pull request. Select only the tools the task requires.
1. In the prompt box, describe the task you want Copilot to perform each time the automation runs. You can type `/` to use an available skill.
1. Use the controls below the prompt box to select the model, reasoning effort, and agent for the automation.
1. Click **Select project**, then choose the project where the automation will run.
1. Click **Create** to save the automation. To save and test it immediately, open the dropdown next to **Create**, then click **Create and run**.

## Running an automation on demand

You can trigger any saved automation manually by clicking the play button on its card on the "Automations" page, without waiting for its next scheduled run.

You can also open automations directly in the app using deep links from markdown files, third-party tools, or scripts. For more information, see [Open With Deep Links](https://docs.github.com/en/copilot/how-tos/github-copilot-app/open-with-deep-links).
