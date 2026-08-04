# Setting up a CodeQL workspace

## Setting up a CodeQL workspace

There are several different ways to give the extension access to the standard libraries and queries from the [`github/codeql`](https://github.com/github/codeql) repository:

* Use the CodeQL starter workspace, which contains a series of directories named in the format `codeql-custom-queries-LANGUAGE`. These are ready for you to start developing your own custom queries for each language, using the standard libraries. There are also some example queries to get you started. This is the recommended method.

* Update an existing workspace for CodeQL. This is recommended for advanced users.

* CodeQL CLI users can open the directory containing their extracted CodeQL CLI archive.

### Option 1: Using the starter workspace (recommended)

> [!NOTE]
> The CodeQL repository is included as a submodule in the starter workspace. You should use `git submodule update --remote` regularly to keep the submodules up to date, and ensure that they remain compatible with newer versions of the VS Code extension and the CodeQL CLI.

1. Clone the [vscode-codeql-starter repository](https://github.com/github/vscode-codeql-starter/?ref_product=code-scanning&ref_type=engagement&ref_style=text) to your computer. Make sure you include the submodules, either by using `git clone --recursive`, or by using `git submodule update --init --remote` after cloning.

1. In VS Code, click **File** then **Open Workspace from File...** to open the `vscode-codeql-starter.code-workspace` file from your checkout of the workspace repository.

### Option 2: Updating an existing workspace for CodeQL (advanced)

1. In VS Code, select **File** then **Add Folder to Workspace...**, and find your local checkout of the [CodeQL repository](https://github.com/github/codeql).

1. Create one new directory per target language to hold custom queries and libraries, using either the **New Folder** or **Add Folder to Workspace...** options.

1. Create a `qlpack.yml` file in each target language directory (the `main` branch of `github/codeql` already has these files). This tells the CodeQL CLI the target language for that directory and what its dependencies are. CodeQL will look for the dependencies in all the open workspace directories, or on the user's search path.

    For example, to make a custom CodeQL directory called `my-custom-cpp-pack` depend on the CodeQL standard library for C++, create a `qlpack.yml` file with the following contents:

    ```yaml
    name: my-custom-cpp-pack
    version: 0.0.0
    libraryPathDependencies: codeql/cpp-all
    ```

    For more information about why you need to add a `qlpack.yml` file, see [Customize Analysis](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/customize-analysis).

### Option 3: Open the directory containing the extracted CodeQL CLI archive

> [!NOTE]
> For this option, you need to set up the CodeQL CLI. For more information, see [Set Up Codeql CLI](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/set-up-codeql-cli).

In VS Code, open the directory where you extracted the CodeQL CLI .zip archive to create a CodeQL directory (for example `codeql-home`).
