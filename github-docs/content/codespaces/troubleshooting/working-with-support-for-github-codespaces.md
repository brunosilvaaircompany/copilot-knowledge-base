# Working with support for GitHub Codespaces

Before support can help you with problems with codespaces, you need to know the permanent name of the codespace and its codespaces ID (identifier). In addition, support may ask you to share some logs with them. For more information, see [GitHub Codespaces Logs](https://docs.github.com/en/codespaces/troubleshooting/github-codespaces-logs) and [About GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-github-support).

## Codespace names

Each codespace has two names: a display name, that you can change, and a unique, permanent name, that you cannot change. Unless you create a codespace with the GitHub CLI and specify a display name of your choice, the display name is automatically generated when you create a codespace, consisting of two or three random words - for example, `literate space parakeet`. The permanent name is a combination of the initial display name, followed by some random characters - for example, `literate-space-parakeet-w5vg5ww5p793g7g9`. If you change the display name the permanent name remains unaffected. For more information, see [Renaming A Codespace](https://docs.github.com/en/codespaces/customizing-your-codespace/renaming-a-codespace).

You will occasionally need to know the permanent name of a codespace. For example, when you use some GitHub CLI commands, or when you discuss a particular codespace with GitHub support.

To find the permanent name of a codespace, do one of the following:

* Open the codespace in the browser. The subdomain of the URL is the name of the codespace. For example: `https://obscure-space-engine-grx7rgg6qp43v9j5.github.dev` is the URL for the `obscure-space-engine-grx7rgg6qp43v9j5` codespace.
* If you cannot open a codespace, you can access the name from your list of codespaces at https://github.com/codespaces. Right-click the display name of the codespace and select your browser's option for copying the link address. The final part of the URL you copy is the permanent name of the codespace.
* In a codespace, use this command in the terminal: `echo $CODESPACE_NAME`.
* If GitHub CLI is installed, either locally or in a codespace, use this command in the terminal to list all of your codespaces: `gh codespace list`.

The permanent name the codespace is also included in many of the log files. For example, in the GitHub Codespaces extension log, after `fetching codespace` or `Connecting to codespace`, and in the browser console log after `clientUrl`. For more information, see [GitHub Codespaces Logs](https://docs.github.com/en/codespaces/troubleshooting/github-codespaces-logs).


## Codespaces IDs

Every codespace also has an ID (identifier). This is not shown by default in Visual Studio Code so you may need to update the settings for the GitHub Codespaces extension before you can access the ID.

1. In Visual Studio Code, browser or desktop, in the Activity Bar on the left, click **Remote Explorer** to show details for the codespace.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. If the side bar includes a "Codespace Performance" section, hover over the **Codespace ID** and click the clipboard icon to copy the ID.
1. If the information is not shown, click {% octicon "gear" aria-label="Manage" %}, in the bottom-left corner of the Activity Bar, and click **Settings**.
1. In the **Settings** tab, search for "performance" then, under "GitHub > Codespaces: Show Performance Explorer", select the checkbox labeled "Display the Codespace Performance window in the Remote Explorer."

   ![Screenshot of "Show Performance Explorer" selected in VS Code's "Settings" tab and a codespace ID highlighted in the "Remote Explorer" side bar.](/assets/images/help/codespaces/find-codespace-id.png)
