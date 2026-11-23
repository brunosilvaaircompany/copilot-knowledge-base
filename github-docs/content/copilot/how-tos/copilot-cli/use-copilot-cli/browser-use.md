> [!NOTE]
> Browser use is in public preview and subject to change.


## About browser use

Browser use lets Copilot interact with websites in your browser. For example, you can ask it to test a web application or retrieve information from a webpage. For an overview, see [Browser Use](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/browser-use).


Computer use lets Copilot interact with other desktop applications. For more information, see [Computer Use](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/computer-use).

## Prerequisites

Install [Node.js](https://nodejs.org/en/download) 22 or later and make sure `node` is available on your `PATH`. Browser use requires Node.js to run its plugin.

## Setting up browser use

Browser use is disabled by default. To enable it, install the browser extension and enable the `browser-use` plugin.

1. In Chrome or Microsoft Edge, install the **GitHub Copilot** extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe).
1. Start an interactive Copilot CLI session.
1. Enter `/plugin`, find the `browser-use` plugin, and enable it.
1. Start a new Copilot CLI session.
1. Optionally, click the browser extension icon and check that its status is **Connected**.

In the browser extension's settings, manage permissions and experimental features.

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

## Troubleshooting

If browser use does not work, confirm that the `browser-use` plugin is enabled and that the browser extension shows **Connected**.

Run `/browser-use:doctor` and follow its guidance to check your setup.
