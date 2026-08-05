# Adding repository custom instructions for GitHub Copilot in your IDE



{% vscode %}

This version of this article is for using repository custom instructions and prompt files in VS Code. Click the tabs above for instructions on using custom instructions in other environments.

## Introduction

Repository custom instructions let you provide Copilot with repository-specific guidance and preferences. For more information, see [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization).


## Prerequisites for repository custom instructions

* You must have a custom instructions file (see the instructions below).


* Custom instructions must be enabled. This feature is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

## Creating custom instructions

{% vscode %}

VS Code supports three types of repository custom instructions. For details of which GitHub Copilot features support these types of instructions, see [Response Customization?Tool=Vscode](https://docs.github.com/en/copilot/concepts/prompting/response-customization?tool=vscode#support-for-repository-custom-instructions-1).

* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions).

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions).

  If the path you specify matches a file that Copilot is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used.

* **Agent instructions** are used by AI agents.

   You can create one or more `AGENTS.md` files, stored anywhere within the repository. When Copilot is working, the nearest `AGENTS.md` file in the directory tree will take precedence. For more information, see the [agentsmd/agents.md repository](https://github.com/agentsmd/agents.md).


   > [!NOTE]
   > Support of `AGENTS.md` files outside of the workspace root is currently turned off by default. For details of how to enable this feature, see [Use custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions#_use-an-agentsmd-file) in the VS Code documentation.

## Creating repository-wide custom instructions

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

## Creating path-specific custom instructions

1. Create the `.github/instructions` directory if it does not already exist.
1. Optionally, create subdirectories of `.github/instructions` to organize your instruction files.
1. Create one or more `NAME.instructions.md` files, where `NAME` indicates the purpose of the instructions. The file name must end with `.instructions.md`.
1. At the start of the file, create a frontmatter block containing the `applyTo` keyword. Use glob syntax to specify what files or directories the instructions apply to.

   For example:

   ```markdown
   ---
   applyTo: "app/models/**/*.rb"
   ---
   ```

   You can specify multiple patterns by separating them with commas. For example, to apply the instructions to all TypeScript files in the repository, you could use the following frontmatter block:

   ```markdown
   ---
   applyTo: "**/*.ts,**/*.tsx"
   ---
   ```

   Glob examples:

   * `*` - will all match all files in the current directory.
   * `**` or `**/*` - will all match all files in all directories.
   * `*.py` - will match all `.py` files in the current directory.
   * `**/*.py` - will recursively match all `.py` files in all directories.
   * `src/*.py` - will match all `.py` files in the `src` directory. For example, `src/foo.py` and `src/bar.py` but _not_ `src/foo/bar.py`.
   * `src/**/*.py` - will recursively match all `.py` files in the `src` directory. For example, `src/foo.py`, `src/foo/bar.py`, and `src/foo/bar/baz.py`.
   * `**/subdir/**/*.py` - will recursively match all `.py` files in any `subdir` directory at any depth. For example, `subdir/foo.py`, `subdir/nested/bar.py`, `parent/subdir/baz.py`, and `deep/parent/subdir/nested/qux.py`, but _not_ `foo.py` at a path that does not contain a `subdir` directory.

1. Optionally, to prevent the file from being used by either Copilot cloud agent or Copilot code review, add the `excludeAgent` keyword to the frontmatter block. Use either `"code-review"` or `"cloud-agent"`.

   For example, the following file will only be read by Copilot cloud agent.

   ```markdown
   ---
   applyTo: "**"
   excludeAgent: "code-review"
   ---
   ```

   If the `excludeAgent` keyword is not included in the front matterblock, both Copilot code review and Copilot cloud agent will use your instructions.

1. Add your custom instructions in natural language, using Markdown format. Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.


{% endvscode %}

> **Nota:**

Did you successfully add a custom instructions file to your repository?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>



## Custom instructions in use

The instructions in the file(s) are available for use by Copilot as soon as you save the file(s). Instructions are automatically added to requests that you submit to Copilot.


Custom instructions are not visible in the Chat view or inline chat, but you can verify that they are being used by Copilot by looking at the References list of a response in the Chat view. If custom instructions were added to the prompt that was sent to the model, the `.github/copilot-instructions.md` file is listed as a reference. You can click the reference to open the file.


![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instructions-vscode.png)

## Enabling or disabling repository custom instructions

You can choose whether or not you want Copilot to use repository-based custom instructions.

### Enabling or disabling custom instructions for Copilot Chat

Custom instructions are enabled for Copilot Chat by default but you can disable, or re-enable, them at any time. This applies to your own use of Copilot Chat and does not affect other users.


1. Open the Setting editor by using the keyboard shortcut <kbd>Command</kbd>+<kbd>,</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows).
1. Type `instruction file` in the search box.
1. Select or clear the checkbox under **Code Generation: Use Instruction Files**.

### Enabling or disabling custom instructions for Copilot code review

Custom instructions are enabled for Copilot code review by default but you can disable, or re-enable, them in the repository settings on GitHub.com. This applies to Copilot's use of custom instructions for all code reviews it performs in this repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then **Code review**.
1. Toggle the “Use custom instructions when reviewing pull requests” option on or off.


## Enabling and using prompt files

> [!NOTE]
> * Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
 See [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization#about-prompt-files).
> * For community-contributed examples of prompt files for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://awesome-copilot.github.com) site.


Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in Copilot Chat (for example, `Rewrite #file:x.ts`). You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

### Enabling prompt files

To enable prompt files, configure the workspace settings.

1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type "Open Workspace Settings (JSON)" and select the option that's displayed.
1. In the `settings.json` file, add `"chat.promptFiles": true` to enable the `.github/prompts` folder as the location for prompt files. This folder will be created if it does not already exist.

### Creating prompt files

1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type "prompt" and select **Chat: Create Prompt**.
1. Enter a name for the prompt file, excluding the `.prompt.md` file name extension. The name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain.
1. Write the prompt instructions, using Markdown formatting.

   You can reference other files in the workspace by using Markdown links—for example, `[index](../../web/index.ts)`—or by using the `#file:../../web/index.ts` syntax. Paths are relative to the prompt file. Referencing other files allows you to provide additional context, such as API specifications or product documentation.

### Using prompt files

1. At the bottom of the Copilot Chat view, click the **Attach context** icon ({% octicon "paperclip" aria-hidden="true" aria-label="paperclip" %}).
1. In the dropdown menu, click **Prompt...** and choose the prompt file you want to use.
1. Optionally, attach additional files, including prompt files, to provide more context.
1. Optionally, type additional information in the chat prompt box.

   Whether you need to do this or not depends on the contents of the prompt you are using.

1. Submit the chat prompt.

For more information about prompt files, see [Use prompt files in Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the Visual Studio Code documentation.

## Further reading

* [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support)
* [Customization Library](https://docs.github.com/en/copilot/tutorials/customization-library)—a curated collection of examples
* [Customize Code Review](https://docs.github.com/en/copilot/tutorials/customize-code-review)

{% endvscode %}





{% visualstudio %}

This version of this article is for using repository custom instructions and prompt files in Visual Studio. Click the tabs above for instructions on using custom instructions in other environments.

## Introduction

Repository custom instructions let you provide Copilot with repository-specific guidance and preferences. For more information, see [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization).


## Prerequisites for repository custom instructions

* You must have a custom instructions file (see the instructions below).


* The **Enable custom instructions...** option must be enabled in your settings. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions-1) later in this article.

## Creating custom instructions

Visual Studio supports two types of custom instructions. For details of which GitHub Copilot features support these types of instructions, see [Response Customization?Tool=Visualstudio](https://docs.github.com/en/copilot/concepts/prompting/response-customization?tool=visualstudio).

* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions-1).

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions-1).

  If the path you specify matches a file that Copilot is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used.

## Creating repository-wide custom instructions

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

## Creating path-specific custom instructions

1. Create the `.github/instructions` directory if it does not already exist.
1. Optionally, create subdirectories of `.github/instructions` to organize your instruction files.
1. Create one or more `NAME.instructions.md` files, where `NAME` indicates the purpose of the instructions. The file name must end with `.instructions.md`.
1. At the start of the file, create a frontmatter block containing the `applyTo` keyword. Use glob syntax to specify what files or directories the instructions apply to.

   For example:

   ```markdown
   ---
   applyTo: "app/models/**/*.rb"
   ---
   ```

   You can specify multiple patterns by separating them with commas. For example, to apply the instructions to all TypeScript files in the repository, you could use the following frontmatter block:

   ```markdown
   ---
   applyTo: "**/*.ts,**/*.tsx"
   ---
   ```

   Glob examples:

   * `*` - will all match all files in the current directory.
   * `**` or `**/*` - will all match all files in all directories.
   * `*.py` - will match all `.py` files in the current directory.
   * `**/*.py` - will recursively match all `.py` files in all directories.
   * `src/*.py` - will match all `.py` files in the `src` directory. For example, `src/foo.py` and `src/bar.py` but _not_ `src/foo/bar.py`.
   * `src/**/*.py` - will recursively match all `.py` files in the `src` directory. For example, `src/foo.py`, `src/foo/bar.py`, and `src/foo/bar/baz.py`.
   * `**/subdir/**/*.py` - will recursively match all `.py` files in any `subdir` directory at any depth. For example, `subdir/foo.py`, `subdir/nested/bar.py`, `parent/subdir/baz.py`, and `deep/parent/subdir/nested/qux.py`, but _not_ `foo.py` at a path that does not contain a `subdir` directory.

1. Optionally, to prevent the file from being used by either Copilot cloud agent or Copilot code review, add the `excludeAgent` keyword to the frontmatter block. Use either `"code-review"` or `"cloud-agent"`.

   For example, the following file will only be read by Copilot cloud agent.

   ```markdown
   ---
   applyTo: "**"
   excludeAgent: "code-review"
   ---
   ```

   If the `excludeAgent` keyword is not included in the front matterblock, both Copilot code review and Copilot cloud agent will use your instructions.

1. Add your custom instructions in natural language, using Markdown format. Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.


> **Nota:**

Did you successfully add a custom instructions file to your repository?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>



## Custom instructions in use

The instructions in the file(s) are available for use by Copilot as soon as you save the file(s). Instructions are automatically added to requests that you submit to Copilot.


Custom instructions are not visible in the Chat view or inline chat, but you can verify that they are being used by Copilot by looking at the References list of a response in the Chat view. If custom instructions were added to the prompt that was sent to the model, the `.github/copilot-instructions.md` file is listed as a reference. You can click the reference to open the file.


![Screenshot of the References popup, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instruction-ref-visual-studio.png)

## Enabling or disabling repository custom instructions

You can choose whether or not you want Copilot to use repository-based custom instructions.

### Enabling or disabling custom instructions for Copilot Chat

Custom instructions are enabled for Copilot Chat by default but you can disable, or re-enable, them at any time. This applies to your own use of Copilot Chat and does not affect other users.


1. In the Visual Studio menu bar, under **Tools**, click **Options**.

   ![Screenshot of the Visual Studio menu bar. The "Tools" menu is expanded, and the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, type `custom instructions` in the search box, then click **Copilot**.
1. Select or clear the checkbox for **Enable custom instructions to be loaded from .github/copilot-instructions.md files and added to requests**.

   ![Screenshot of the Visual Studio Options dialog showing the "Enable custom instructions" option checkbox selected.](/assets/images/help/copilot/vs-custom-instructions-option.png)

### Enabling or disabling custom instructions for Copilot code review

Custom instructions are enabled for Copilot code review by default but you can disable, or re-enable, them in the repository settings on GitHub.com. This applies to Copilot's use of custom instructions for all code reviews it performs in this repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then **Code review**.
1. Toggle the “Use custom instructions when reviewing pull requests” option on or off.


## Using prompt files

> [!NOTE]
> * Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
 See [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization#about-prompt-files).
> * For community-contributed examples of prompt files for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://awesome-copilot.github.com) site.


Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in Copilot Chat (for example, `Rewrite #file:x.ts`). You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

### Creating prompt files

1. Add a prompt file, including the `.prompt.md` file name extension inside the `.github/prompts` folder in the root of the repository. The name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain.
1. Write the prompt instructions, using Markdown formatting.

   You can reference other files in the workspace by using Markdown links—for example, `[index](../../web/index.ts)`—or by using the `#file:'../../web/index.ts'` syntax. Paths are relative to the prompt file. Referencing other files allows you to provide additional context, such as API specifications or product documentation.

For more information about prompt files, see [Use prompt files in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#use-prompt-files) in the Visual Studio documentation.

## Further reading

* [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support)
* [Customization Library](https://docs.github.com/en/copilot/tutorials/customization-library)—a curated collection of examples
* [Customize Code Review](https://docs.github.com/en/copilot/tutorials/customize-code-review)

{% endvisualstudio %}





{% jetbrains %}

This version of this article is for using repository custom instructions in JetBrains IDEs. Click the tabs above for instructions on using custom instructions in other environments.

## Introduction

Repository custom instructions let you provide Copilot with repository-specific guidance and preferences. For more information, see [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization).


## Prerequisites for repository custom instructions

* You must have a custom instructions file (see the instructions below).


* The latest version of the Copilot extension must be installed in your JetBrains IDE.

## Creating custom instructions

JetBrains IDEs support a single `.github/copilot-instructions.md` custom instructions file stored in the repository, and a locally stored `global-copilot-instructions.md` file.

You can create the `.github/copilot-instructions.md` file in your repository using the Copilot settings page, or you can create the file manually.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

### Using the settings page

1. In your JetBrains IDE, click the **File** menu (Windows), or the name of the application in the menu bar (macOS), then click **Settings**.

1. In the left sidebar click **Tools**, click **GitHub Copilot**
, then click **Customizations**.
1. Under "Copilot Instructions", click **Workspace** or **Global** to choose whether the custom instructions apply to the current workspace or all workspaces.

### Manually creating a workspace custom instructions file

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

Once saved, these instructions will apply to the current workspace in JetBrains IDEs that you open with Copilot enabled.

### Manually creating a global custom instructions file

To apply the same instructions across all workspaces in JetBrains IDEs, you can create a global custom instructions file on your local machine.

1. Open your file explorer or terminal.
1. Navigate to the appropriate location for your operating system:

   * **macOS**:
     `/Users/YOUR-USERNAME/.config/github-copilot/intellij/`
   * **Windows**:
     `C:\Users\YOUR-USERNAME\AppData\Local\github-copilot\intellij\`

1. Create a file named `global-copilot-instructions.md` in that directory.
1. Add your custom instructions in natural language, using Markdown format.

Once saved, these instructions will apply globally across all workspaces in JetBrains IDEs that you open with Copilot enabled.

> **Nota:**

Did you successfully add a custom instructions file to your repository?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>



## Custom instructions in use

The instructions in the file(s) are available for use by Copilot as soon as you save the file(s). Instructions are automatically added to requests that you submit to Copilot.


Custom instructions are not visible in the Chat view or inline chat, but you can verify that they are being used by Copilot by looking at the References list of a response in the Chat view. If custom instructions were added to the prompt that was sent to the model, the `.github/copilot-instructions.md` file is listed as a reference. You can click the reference to open the file.


## Using prompt files

> [!NOTE]
> * Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
 See [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization#about-prompt-files).
> * For community-contributed examples of prompt files for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://awesome-copilot.github.com) site.


Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in Copilot Chat (for example, `Rewrite #file:x.ts`). You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

When writing prompt instructions, you can reference other files in the workspace by using Markdown links—for example, `[index](../../web/index.ts)`—or by using the `#file:../../web/index.ts` syntax. Paths are relative to the prompt file. Referencing other files allows you to provide additional context, such as API specifications or product documentation.

Once prompt files are saved, their instructions will apply to the current workspace in JetBrains IDEs that you open with Copilot enabled.

### Creating prompt files using the command line

1. Create the `.github/prompts` directory if it doesn't already exist in your workspace. This directory will be the location for your prompt files.
1. Create a prompt file in the `.github/prompts` directory. The prompt file name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain. The file name must end with the `.prompt.md` file name extension, for example `TESTPROMPT.prompt.md`.
1. Write the prompt instructions using Markdown formatting, and save the file.

### Creating prompt files using the settings page

1. In your JetBrains IDE, click the **File** menu (Windows), or the name of the application in the menu bar (macOS), then click **Settings**.

1. Under **Tools**, under **GitHub Copilot**, click **Edit Settings**.
1. Under "Settings Categories", click **Customizations**.
1. Under "Prompt Files", click **Workspace**, to create a prompt file in your workspace.
1. Enter a name for the prompt file, excluding the `.prompt.md` file name extension. The prompt file name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain.
1. Click **Ok** to save the prompt file name.
1. Write the prompt instructions using Markdown formatting, and save the file.

### Using prompt files

1. In the chat input box, type `/` followed by the name of the prompt file. For example, `/TESTPROMPT`.
1. Optionally, attach additional files, to provide more context.
1. Optionally, type additional information in the chat prompt box.

   Whether you need to do this or not depends on the contents of the prompt you are using.

1. Submit the chat prompt.

## Further reading

* [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support)
* [Customization Library](https://docs.github.com/en/copilot/tutorials/customization-library)—a curated collection of examples
* [Customize Code Review](https://docs.github.com/en/copilot/tutorials/customize-code-review)

{% endjetbrains %}





{% xcode %}

This version of this article is for using repository custom instructions in Xcode. Click the tabs above for instructions on using custom instructions in other environments.

## Introduction

Repository custom instructions let you provide Copilot with repository-specific guidance and preferences. For more information, see [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization).


## Prerequisites for repository custom instructions

* You must have a custom instructions file (see the instructions below).


* The latest version of the Copilot extension must be installed in Xcode.

## Creating custom instructions

Xcode supports a single `.github/copilot-instructions.md` custom instructions file stored in the repository.

You can create a custom instructions file in your repository via the Copilot settings page.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

1. Open the GitHub Copilot for Xcode application.
1. At the top of the application window, under **Settings**, click **Advanced**.
1. To the right of "Custom Instructions", click **Current Workspace** or **Global** to choose whether the custom instructions apply to the current workspace or all workspaces.

> **Nota:**

Did you successfully add a custom instructions file to your repository?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>



## Custom instructions in use

The instructions in the file(s) are available for use by Copilot as soon as you save the file(s). Instructions are automatically added to requests that you submit to Copilot.


Custom instructions are not visible in the Chat view or inline chat, but you can verify that they are being used by Copilot by looking at the References list of a response in the Chat view. If custom instructions were added to the prompt that was sent to the model, the `.github/copilot-instructions.md` file is listed as a reference. You can click the reference to open the file.


## Further reading

* [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support)
* [Custom Instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [Customize Code Review](https://docs.github.com/en/copilot/tutorials/customize-code-review)

{% endxcode %}





{% eclipse %}

> [!NOTE] This feature is currently in public preview and is subject to change.

This version of this article is for using repository custom instructions in Eclipse. Click the tabs above for instructions on using custom instructions in other environments.

## Introduction

Repository custom instructions let you provide Copilot with repository-specific guidance and preferences. For more information, see [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization).


## Prerequisites for repository custom instructions

* You must have a custom instructions file (see the instructions below).


* The latest version of the Copilot extension must be installed in Eclipse.

## Creating custom instructions

Eclipse supports two types of repository custom instructions: workspace and project custom instructions.

To create a workspace custom instructions file, you can use the Copilot settings page. To create a project custom instructions file, you can create the file manually in the project directory.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

### Creating a workspace custom instructions file

1. To open the Copilot Chat panel, click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse.
1. From the menu, select "Edit preferences".
1. In the left pane, expand GitHub Copilot and click **Custom Instructions**.
1. Select **Enable workspace instructions**.
1. In the "Workspace" section, under "Set custom instructions to guide Copilot's code suggestions in this workspace", add natural language instructions to the file, in Markdown format.

### Creating a project custom instructions file

1. In the root of your project directory, create a file named `.github/copilot-instructions.md`.
1. Add your custom instructions in natural language, using Markdown format.

Once saved, these instructions will apply to the current project in Eclipse that you open with Copilot enabled.

> **Nota:**

Did you successfully add a custom instructions file to your repository?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>



## Custom instructions in use

The instructions in the file(s) are available for use by Copilot as soon as you save the file(s). Instructions are automatically added to requests that you submit to Copilot.


## Further reading

* [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support)
* [Custom Instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples

{% endeclipse %}
