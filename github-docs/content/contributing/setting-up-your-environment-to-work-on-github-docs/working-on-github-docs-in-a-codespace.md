# Working on GitHub Docs in a codespace

## About GitHub Codespaces

GitHub Codespaces allows you to work in a development environment that's hosted remotely from your machine. You can get started quickly, without needing to set up the working environment or download files to your local computer.

For more information, see [Quickstart](https://docs.github.com/en/free-pro-team@latest/codespaces/quickstart).

## Working on documentation in a codespace

The following steps assume you have GitHub Codespaces set up to edit files using Visual Studio Code for Web. The steps are very similar if you have set a different editor. For more information, see [Setting Your Default Editor For GitHub Codespaces](https://docs.github.com/en/free-pro-team@latest/codespaces/setting-your-user-preferences/setting-your-default-editor-for-github-codespaces).

1. Navigate to the open source repository for GitHub Docs, [`github/docs`](https://github.com/github/docs).
1. If you're an open source contributor, create a fork of the repository, then follow the rest of the steps in this procedure from your fork. For more information, see [Fork A Repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).
1. Create a branch to work on. For more information, see [Creating And Deleting Branches Within Your Repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).
1. On the main page of the repository, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Code**, then click **Create codespace on BRANCH-NAME**.

   The "Setting up your codespace" page is displayed. After a short time the browser-based version of Visual Studio Code is displayed.
1. Use the Explorer to navigate to the markdown file you want to edit. If the file is an article, it will be located in the `content` directory. If the file is reusable content, it will be located in the `data` directory.

   In most cases, the path to an article in the `content` directory matches the path in the URL, minus the `.md` file extension. For example, the source for the article `https://docs.github.com/en/codespaces/quickstart` is the markdown file `content/codespaces/quickstart.md`.
1. Edit the markdown file as required.
1. Save your changes.
1. Commit and push your changes, either using the Source Control view, or using Git commands from the Terminal. For more information, see [About Git](https://docs.github.com/en/get-started/using-git/about-git).

## Creating a pull request

1. Navigate to the "Pull requests" tab of the `github/docs` repository at [github.com/github/docs/pulls](https://github.com/github/docs/pulls).
1. Click **New pull request**.
1. If you're an open source contributor, click **compare across forks**, then choose the forked repository you created and your working branch.

   Otherwise, change the "compare" branch to your working branch.
1. Check that the changes displayed include all of the changes you made in the codespace. If they do not, this may indicate there are changes you have not pushed from the codespace to GitHub.
1. Click **Create pull request**.
1. Enter the details for your pull request and click **Create pull request**.

   Your pull request will be reviewed by a member of the GitHub Docs team.
