# Creating a plugin marketplace for GitHub Copilot CLI

## Introduction

Plugin marketplaces are registries of plugins for Copilot CLI. They can be located on GitHub.com, in any other online Git hosting service, or on your local or shared file system. By creating a marketplace and adding your plugins to it, you can make it easy for other users to find and install your plugins.

> [!NOTE]
> You can find help on using plugins by entering `copilot plugin [SUBCOMMAND] --help` in the terminal.


## Prerequisite

You have created one or more plugins that you want to share. See [Plugins Creating](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating).

## Creating a plugin marketplace

1. Create a `marketplace.json` file that provides metadata about your marketplace and lists the plugins that are available in the marketplace.

   > [!NOTE]
   > The `marketplace.json` file is the only required component of a plugin marketplace. Adding it to a repository allows Copilot CLI to recognize the repository as a plugin marketplace, and provides an easy way for users to install plugins.

   **Example `marketplace.json` file**

   ```json copy
{
  "name": "my-marketplace",
  "owner": {
    "name": "Your Organization",
    "email": "plugins@example.com"
  },
  "metadata": {
    "description": "Curated plugins for our team",
    "version": "1.0.0"
  },
  "plugins": [
    {
      "name": "frontend-design",
      "description": "Create a professional-looking GUI ...",
      "version": "2.1.0",
      "source": "./plugins/frontend-design"
    },
    {
      "name": "security-checks",
      "description": "Check for potential security vulnerabilities ...",
      "version": "1.3.0",
      "source": "./plugins/security-checks"
    }
  ]
}
```


   Online examples:

   * [marketplace.json](https://github.com/github/copilot-plugins/blob/main/.github/plugin/marketplace.json) in the [github/copilot-plugins](https://github.com/github/copilot-plugins) repository.
   * [marketplace.json](https://github.com/github/awesome-copilot/blob/main/.github/plugin/marketplace.json) in the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository.

   The top-level `plugins` field is an array of plugin objects, each containing metadata about a plugin, including its name, description, version, and source.

   The value of the `source` field for each plugin is the path to the plugin's directory, relative to the root of the repository. It is not necessary to use `./` at the start of the path. For example, `"./plugins/plugin-name"` and `"plugins/plugin-name"` resolve to the same directory.


   For details of the full set of fields you can include in this file, see [CLI Plugin Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference#marketplacejson).

1. Add the `marketplace.json` file to the `.github/plugin` directory of a repository.

   > [!NOTE]
> Copilot CLI also looks for the `marketplace.json` file in the `.claude-plugin/` directory.


1. For each plugin defined in the `marketplace.json` file, add the relevant plugin directory to the appropriate location in the repository.

   For example, if your `marketplace.json` file includes a plugin with `"source": "./plugins/frontend-design"`, add the `frontend-design` plugin directory to the `plugins` directory at the root of your repository.

1. Share the repository with your intended users, and provide them with instructions to add the marketplace to Copilot CLI. For example, if your repository is hosted on GitHub in the `octo-org/octo-repo` repository, instruct users to enter:

   ```shell copy
   copilot plugin marketplace add octo-org/octo-repo
   ```

## Further reading

* [Plugins Finding Installing](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)
* [CLI Plugin Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference)
