# Using GitHub Copilot in your IDE to interact with your browser

> [!NOTE]
> Browser use is in public preview and subject to change.


## About browser use

Browser use lets Copilot interact with websites in your browser. For example, you can ask it to test a web application or retrieve information from a webpage. For an overview, see [Browser Use](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/browser-use).


Browser use is available in Visual Studio Code and JetBrains IDEs. The setup steps differ by editor, so click the tabs above for instructions for your IDE.

## Prerequisites

Install [Node.js](https://nodejs.org/en/download) 22 or later and make sure `node` is available on your `PATH`. Browser use requires Node.js to run its plugin.

## Setting up browser use

Browser use is disabled by default. To enable it, install the browser extension and turn on browser use in your IDE settings.

In Chrome or Microsoft Edge, install the **GitHub Copilot** extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe).





{% vscode %}

## Enabling browser use

1. Open **Settings** and search for `browser use`.
1. Enable the **Browser Use: Enabled** setting.

In the browser extension's settings, manage permissions and experimental features.

## Browser use

After you enable browser use, Copilot automatically uses it when you ask about a browser-related task. You can also use the `/browser-use` command to tell it to use your browser.


After you enable browser use in Visual Studio Code, ask Copilot to open a website in your browser. For example:

```text copy
Open github.com in my browser.
```

Review the agent's activity and the result.

{% endvscode %}





{% jetbrains %}

## Enabling browser use

1. Open **Settings**.
1. Select **GitHub Copilot**, then **Chat**.
1. Turn on **Enable Browser Use**.
1. Start a new chat session.

In the browser extension's settings, manage permissions and experimental features.

## Browser use

After you enable browser use, Copilot automatically uses it when you ask about a browser-related task. You can also use the `/browser-use` command to tell it to use your browser.


After you enable browser use in your JetBrains IDE, ask Copilot to open a website in your browser. For example:

```text copy
Open github.com in my browser.
```

Review the agent's activity and the result.

{% endjetbrains %}
