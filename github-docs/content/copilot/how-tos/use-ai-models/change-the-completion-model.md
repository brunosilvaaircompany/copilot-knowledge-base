# Changing the AI model for GitHub Copilot inline suggestions

{% vscode %}

The following instructions are for VS Code. If you are using Visual Studio, or a JetBrains IDE, click the appropriate tab at the start of this article.

## Prerequisites

You can switch the AI model that's used for Copilot inline suggestions if:

* An alternative model is currently available
* You are using the latest releases of VS Code with the latest version of the GitHub Copilot extension


> [!NOTE] The list of available models will change over time. When only one inline suggestion model is available, the model picker will only show that model. Preview models and additional inline suggestion models will be added to the picker as they become available.


For more information, see [Code Suggestions](https://docs.github.com/en/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-inline-suggestions).

## Changing the AI model for inline suggestions

1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type `change completions model` and select the "GitHub Copilot: Change Completions Model" command.
1. In the dropdown menu, select the model you want to use.

## Checking which model is being used

1. Open the Settings editor by pressing <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows) / <kbd>Command</kbd>+<kbd>,</kbd> (Mac).
1. Type `copilot completion` and look for the "GitHub > Copilot: Selected Completion Model" section.

   The field in this section displays the currently selected model. If the field is empty, the default model is being used.

{% endvscode %}

{% visualstudio %}

The following instructions are for Visual Studio. If you are using VS Code, or a JetBrains IDE, click the appropriate tab at the start of this article.

## Prerequisites

You can switch the AI model that's used for Copilot inline suggestions if:

* An alternative model is currently available
* You are using Visual Studio 17.14 Preview 2 or later


> [!NOTE] The list of available models will change over time. When only one inline suggestion model is available, the model picker will only show that model. Preview models and additional inline suggestion models will be added to the picker as they become available.


For more information, see [Code Suggestions](https://docs.github.com/en/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-inline-suggestions).

## Changing the AI model for inline suggestions

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the top right corner.
1. Click **Settings**, then click **Options**.
1. Under **Copilot Completions**, use the dropdown menu to select the model you want to use.

{% endvisualstudio %}

{% jetbrains %}

The following instructions are for JetBrains IDEs. If you are using Visual Studio, or VS Code, click the appropriate tab at the start of this article.

## Prerequisites

You can switch the AI model that's used for Copilot inline suggestions if:

* An alternative model is currently available
* You are using the latest release of JetBrains IDEs with the latest version of the GitHub Copilot extension


> [!NOTE] The list of available models will change over time. When only one inline suggestion model is available, the model picker will only show that model. Preview models and additional inline suggestion models will be added to the picker as they become available.


For more information, see [Code Suggestions](https://docs.github.com/en/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-inline-suggestions).

## Changing the AI model for inline suggestions

1. In your JetBrains IDE, click the **File** menu (Windows) or the name of the application in the menu bar (macOS), then click **Settings**.
1. In the left sidebar click **Tools**, click **GitHub Copilot**
, then click **Completions**.
1. Click the dropdown menu for **Model for completions** and select the model you want to use.
1. Click **OK**.

{% endjetbrains %}
