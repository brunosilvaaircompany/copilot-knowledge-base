# Deploy your Spark app from the command line

## Introduction

> [!NOTE]
> Beginning August 4, 2026, GitHub Spark will no longer accept new users or allow the creation of new apps. Existing users can continue to access and use apps they have already created. Open Spark workbench for your app, select "..." and "Create repository" to save your app code before August 31, 2026.

If you’re developing your spark further in a GitHub codespace, you can deploy it directly from the command line using the Spark CLI, an extension of the GitHub CLI.

### Prerequisites

* **Access to GitHub Copilot**. You need a Copilot Pro+, Copilot Max, or Copilot Enterprise license to use Spark. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).
* You must have **built a Spark app** (a "spark"). To start building, navigate to [Spark](https://github.com/spark).
* You have **created a repository** for your spark on GitHub. For instructions, see [Build Apps With Spark](https://docs.github.com/en/copilot/tutorials/spark/build-apps-with-spark#step-8-invite-collaborators-with-a-repository).

## Open your spark in a codespace

The Spark CLI currently only works within a GitHub codespace.

1. Navigate to the main page of your spark's repository on GitHub.
1. Click the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** button, then click the **Codespaces** tab.
1. Click **{% octicon "plus" aria-label="Create a codespace on main" %}** to create a codespace. The codespace opens in a new browser tab.

## Install the Spark CLI

1. In the terminal in your codespace, run the following command to install the Spark CLI:

   ```bash copy
   gh extensions install github/gh-runtime-cli
   ```

1. Once the installation is complete, to verify that the Spark CLI is installed, run:

   ```bash copy
   gh runtime-cli version
   ```

## Build your spark

1. In the terminal in your codespace, run the following command to install the latest version of the Spark SDK:

   ```bash copy
   npm install @github/spark@latest
   ```

1. Next, run the following command to compile your Spark app.

   ```bash copy
   npm run build
   ```

## Deploy your spark

1. To deploy your Spark app, run:

   ```bash copy
   gh runtime-cli deploy --dir ./dist
   ```

## Troubleshooting

If you're being asked to supply the `--app` parameter when deploying your spark, update to the latest version of the Spark SDK by following step 1 in [Build your spark](#build-your-spark).
