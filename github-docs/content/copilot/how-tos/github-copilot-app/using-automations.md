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
1. Enter a **name** for the automation.
1. Select one or more **triggers** that determine when the automation runs:

   * **Manual**: Run the automation manually.
   * **On a schedule**: choose a recurring interval, either hourly, daily, or weekly.
   * **When an issue is created**: the automation runs each time an issue is opened in the repository. You can add a search query filter for specific issues.
1. Optionally, enable **Run in the cloud** to let the automation run in a cloud environment, allowing the automation to run even when your computer is off.

    For cloud automations, you can also use the **Tools** dropdown to select the tools Copilot can use when the automation runs, such as pushing changes, updating issue labels, or creating a pull request. Select only the tools the task requires. The tools you select control what actions Copilot can take in your repository.
1. In the **prompt** field, describe the task you want Copilot to perform each time the automation runs.
1. Optionally, select the **project** and **model** you want Copilot to use.
1. Click **Create** to save, or select **Create and run** to save and test the automation immediately.

## Running an automation on demand

You can trigger any saved automation manually by clicking the play button on its card on the "Automations" page, without waiting for its next scheduled run.

You can also open automations directly in the app using deep links from markdown files, third-party tools, or scripts. For more information, see [Open With Deep Links](https://docs.github.com/en/copilot/how-tos/github-copilot-app/open-with-deep-links).
