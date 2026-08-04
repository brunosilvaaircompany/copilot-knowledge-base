# Managing CodeQL query packs and library packs

## Downloading CodeQL query packs

1. In VS Code, open the VS Code Command Palette and run **CodeQL: Download Packs**.
1. You can download all the core query packs, or enter the full name of a specific pack to download. You can download query packs created by other users.

## Installing dependencies for CodeQL query packs

1. In VS Code, open the VS Code Command Palette and run **CodeQL: Install Pack Dependencies**.
1. Select the packs that you want to install dependencies for.

## Viewing a CodeQL query pack and its dependencies

1. In VS Code, open the `qlpack.yml` file in the root of any CodeQL pack directory.
1. In the `dependencies` section of the `qlpack.yml` file, you'll see what libraries the pack depends on.

1. Optionally, you can use VS Code's IntelliSense features. For example, if you hover over an element from a library depended on by the pack, Visual Studio Code will resolve it so you can see documentation about the element.

1. To view the full definition of an element of a query, you can right-click and select **Go to Definition**.

   * If the library pack is present within the same Visual Studio Code workspace, this will take you to the definition within the workspace.
   * Otherwise, you will see the definition stored in your package cache, where downloaded dependencies are saved. The package cache is a shared location that is stored in your home directory by default.

## Next steps


> [!NOTE]
> CodeQL model packs are currently in public preview and subject to change. Model packs are supported for C/C++, C#, Java/Kotlin, Python, Ruby, and Rust analysis.
>
> The CodeQL model editor in the CodeQL extension for Visual Studio Code supports modeling dependencies for C#, Java/Kotlin, Python, and Ruby.


CodeQL model packs can be used to expand code scanning analysis to include dependencies that are not supported by default. The CodeQL extension for Visual Studio Code includes a dedicated editor for creating and editing model packs. See [Use The Model Editor](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/use-the-model-editor).
