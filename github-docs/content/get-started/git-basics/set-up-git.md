# Set up Git

## Using Git

To use Git on the command line, you need to download, install, and configure Git on your computer. You can also install GitHub CLI to use GitHub from the command line. For more information, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).

If you want to work with Git locally, but do not want to use the command line, you can download and install the [GitHub Desktop](https://desktop.github.com/) client. For more information, see [About GitHub Desktop](https://docs.github.com/en/desktop/overview/about-github-desktop).

If you do not need to work with files locally, GitHub lets you complete many Git-related actions directly in the browser, including:

* [Quickstart For Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories)
* [Fork A Repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
* [Managing files](/repositories/working-with-files/managing-files)

## Setting up Git

1. [Download and install the latest version of Git](https://git-scm.com/downloads).

   > [!NOTE]
   > Most Chrome OS devices from 2020 onwards now have a built-in Linux environment, which includes Git. To enable it, go to the Launcher, search for Linux, and click **Turn on**.
   >
   > If you are using an older Chrome OS device, another method is required:
   >
   > 1. Install a terminal emulator such as Termux from the Google Play Store on your Chrome OS device.
   > 1. From the terminal emulator that you installed, install Git. For example, in Termux, enter `pkg install git` and then type `y` when prompted.

1. [Set your username in Git](/get-started/git-basics/setting-your-username-in-git).
1. [Set your commit email address in Git](/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

## Authenticating with GitHub from Git

When you connect to a GitHub repository from Git, you need to authenticate with GitHub using either HTTPS or SSH.

> [!NOTE]
> You can authenticate to GitHub using GitHub CLI, for either HTTPS or SSH. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

### Connecting over HTTPS (recommended)

If you clone with HTTPS, you can cache your GitHub credentials in Git using a credential helper. For more information, see [About Remote Repositories](https://docs.github.com/en/get-started/git-basics/about-remote-repositories#cloning-with-https-urls) and [Caching Your GitHub Credentials In Git](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git).

### Connecting over SSH

If you clone with SSH, you must generate SSH keys on each computer you use to push or pull from GitHub. For more information, see [About Remote Repositories](https://docs.github.com/en/get-started/git-basics/about-remote-repositories#cloning-with-ssh-urls) and [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Next steps

You now have Git and GitHub all set up. You can now choose to create a repository where you can store your projects. Saving your code in a repository allows you to back up your work and share it around the world.


* Creating a repository for your project allows you to store code in GitHub. This provides a backup of your work that you can choose to share with other developers. For more information, see [Quickstart For Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories).


* Forking a repository will allow you to make changes to another repository without affecting the original. For more information, see [Fork A Repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).


* Each repository on GitHub is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on GitHub. For more information, see [Discovering Projects On GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/discovering-projects-on-github).


* GitHub has a great support community where you can ask for help and talk to people from around the world. Join the conversation on [GitHub Community](https://github.com/orgs/community/discussions).
