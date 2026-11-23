# Using the GitHub Copilot app to interact with your browser

> [!NOTE]
> Browser use is in public preview and subject to change.


## About browser use

Browser use lets Copilot interact with websites in your browser. For example, you can ask it to test a web application or retrieve information from a webpage. For an overview, see [Browser Use](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/browser-use).


Computer use lets Copilot interact with other desktop applications. For more information, see [Computer Use](https://docs.github.com/en/copilot/how-tos/github-copilot-app/computer-use).

## Prerequisites

Install [Node.js](https://nodejs.org/en/download) 22 or later and make sure `node` is available on your `PATH`. Browser use requires Node.js to run its plugin.

## Setting up browser use

Browser use is disabled by default. To enable it, install the browser extension and turn on browser use in the app settings.

1. In Chrome or Microsoft Edge, install the **GitHub Copilot** extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe).
1. Open the app settings.
1. In the sidebar, select **Computer Use**.
1. Turn on the **Enable Browser Use** toggle.
   * Computer use must be enabled to enable browser use. If **Enable Computer Use** is off, turn it on first.

> [!NOTE]
> On macOS 27, the **GitHub Copilot browser extension** card under
> **Prerequisites** on the **Computer Use** app settings page may show
> **Not installed** even when the extension is installed. Browser use
> still works. To update the status, start a session and send a
> message. The extension connects within a few seconds, and the card
> then shows the correct status.

In the browser extension's settings, you can manage permissions and experimental features.

## Browser use

After you enable browser use, Copilot automatically uses it when you ask about a browser-related task. You can also use the `/browser-use` command to tell it to use your browser.


For example, ask Copilot to open a website:

```text copy
Open github.com in my browser.
```

For more detailed tasks, specify the site, the outcome you want, and any constraints. For example:

```text copy
Open MY_TEST_APP_URL and check that the sign-in form
shows a validation message when the fields are empty.
Do not submit real credentials or change any data.
Summarize what you find.
```

Replace `MY_TEST_APP_URL` with the URL of a test application you can access. Review the agent's activity and the result.
