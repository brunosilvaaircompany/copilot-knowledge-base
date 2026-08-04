# Getting started with GitHub Desktop

## Introduction

GitHub Desktop is a free, open source application that helps you to work with code hosted on GitHub or other Git hosting services. With GitHub Desktop, you can perform Git commands, such as committing and pushing changes, in a graphical user interface, rather than using the command line. For more information, see [About GitHub Desktop](https://docs.github.com/en/desktop/overview/about-github-desktop).


This guide will help you get started with GitHub Desktop by setting up the application, authenticating your account, configuring basic settings, and introducing the fundamentals of managing projects with GitHub Desktop. You will be able to use GitHub Desktop to collaborate on projects and connect to remote repositories after working through this guide.

You might find it helpful to have a basic understanding of Git and GitHub before getting started with GitHub Desktop. For more information, see the following articles.

* [Using Git](https://docs.github.com/en/get-started/using-git)
* [Learning About GitHub](https://docs.github.com/en/get-started/learning-about-github)
* [Get Started](https://docs.github.com/en/get-started)

GitHub Desktop is an open source project. You can see the roadmap, contribute to the project, or open an issue to provide feedback or feature requests. For more information, see the [`desktop/desktop`](https://github.com/desktop/desktop) repository.

## Part 1: Installing and authenticating

You can install GitHub Desktop on any supported operating system. For more information, see [Supported Operating Systems For GitHub Desktop](https://docs.github.com/en/desktop/overview/supported-operating-systems-for-github-desktop).

To install GitHub Desktop, visit the download page for [GitHub Desktop](https://desktop.github.com/). For more information, see [Installing GitHub Desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop).

After you have installed GitHub Desktop, you can authenticate the application with your account on GitHub or GitHub Enterprise. Authenticating allows you to connect to remote repositories on GitHub or GitHub Enterprise.

{% mac %}

1. Before you can authenticate to GitHub or GitHub Enterprise, you will need an account. For more information, see [Creating An Account On GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github). If you're part of an organization that uses Enterprise Managed Users and you do not have an account, contact your enterprise administrator.{% elsif ghes %} If you're a member of an organization that uses GitHub Enterprise Server and you do not have an account, contact your site administrator.
1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)

1. In the "Settings" window, on the **Accounts** pane, click the appropriate "Sign Into" button. Use **Sign Into GitHub Enterprise** to sign into GitHub Enterprise Server or GitHub Enterprise Cloud with data residency.

   ![Screenshot of the "Accounts" pane in the "Settings" window. Blue buttons labeled "Sign Into GitHub.com" and "Sign Into GitHub Enterprise" are shown.](/assets/images/help/desktop/sign-in-github.png)

1. Follow the steps to sign in. For more information about authentication, see [Authenticating To GitHub In GitHub Desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop).

{% endmac %}

{% windows %}

1. Before you can authenticate to GitHub or GitHub Enterprise, you will need an account. For more information, see [Creating An Account On GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github). If you're part of an organization that uses Enterprise Managed Users and you do not have an account, contact your enterprise administrator.{% elsif ghes %} If you're a member of an organization that uses GitHub Enterprise Server and you do not have an account, contact your site administrator.
1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is outlined in orange.](/assets/images/help/desktop/windows-choose-options.png)

1. In the "Options" window, on the **Accounts** pane, click the appropriate "Sign Into" button. Use **Sign Into GitHub Enterprise** to sign into GitHub Enterprise Server or GitHub Enterprise Cloud with data residency.

   ![Screenshot of the "Accounts" pane in the "Options" window. Blue buttons labeled "Sign Into GitHub.com" and "Sign Into GitHub Enterprise" are shown.](/assets/images/help/desktop/windows-sign-in-github.png)

1. Follow the steps to sign in. For more information about authentication, see [Authenticating To GitHub In GitHub Desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop).

{% endwindows %}

## Part 2: Configuring and customizing GitHub Desktop

After you install GitHub Desktop, you can configure and customize the app to best suit your needs.

{% mac %}

You can connect or remove accounts on GitHub or GitHub Enterprise, choose a default text editor or shell, edit your Git configuration, change the appearance of GitHub Desktop, customize system dialog boxes, and set privacy preferences in the GitHub Desktop Settings window. For more information, see [Configuring Basic Settings In GitHub Desktop](https://docs.github.com/en/desktop/configuring-and-customizing-github-desktop/configuring-basic-settings-in-github-desktop).

![Screenshot of the "Settings" window. The first option in the left sidebar is selected and shown as blue.](/assets/images/help/desktop/sign-in-github.png)

{% endmac %}

{% windows %}

You can connect or remove accounts on GitHub or GitHub Enterprise, choose a default text editor or shell, edit your Git configuration, change the appearance of GitHub Desktop, customize system dialog boxes, and set privacy preferences in the GitHub Desktop Options window. For more information, see [Configuring Basic Settings In GitHub Desktop](https://docs.github.com/en/desktop/configuring-and-customizing-github-desktop/configuring-basic-settings-in-github-desktop).

![Screenshot of the "Options" window. The first option in the left sidebar is selected and shown as blue.](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## Part 3: Contributing to projects with GitHub Desktop

After installing, authenticating, and configuring the app, you are ready to start using GitHub Desktop. You can create, add, or clone repositories and use GitHub Desktop to manage contributions to your repositories.

### Creating, adding, and cloning repositories

You can create a new repository by selecting **File** in the "GitHub Desktop" menu bar and clicking **New repository...**. For more information, see [Creating Your First Repository Using GitHub Desktop](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop).

You can add a repository from your local computer by selecting **File** and clicking **Add Local Repository...**. For more information, see [Adding A Repository From Your Local Computer To GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop).

You can clone a repository from GitHub by selecting **File** and clicking **Clone Repository...**. For more information, see [Cloning And Forking Repositories From GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop).

{% mac %}

![Screenshot of the menu bar on a Mac. Actions for repositories are listed in the open "File" dropdown menu.](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

![Screenshot of the "GitHub Desktop" menu bar on Windows. Actions for repositories are listed in the open "File" dropdown menu.](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### Making changes in a branch

You can use GitHub Desktop to create a branch of a project. Branches isolate your development work from other branches in the repository, so that you can safely experiment with changes. For more information, see [Managing Branches In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop).

After you make changes to a branch, you can review them in GitHub Desktop and make a commit to keep track of your changes. For more information, see [Committing And Reviewing Changes To Your Project In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop).

If you want to access your changes remotely or share them with other people, you can push your commits to GitHub. For more information, see [Pushing Changes To GitHub From GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop).

### Collaborating with GitHub Desktop

You can use GitHub Desktop to create issues or pull requests to collaborate on projects with other people. Issues help you keep track of ideas and discuss possible changes to projects. Pull requests let you share your proposed changes with others, receive feedback, and merge changes into a project. For more information, see [Creating An Issue Or Pull Request From GitHub Desktop](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop).

You can view your own or your collaborator's pull requests in GitHub Desktop. Viewing a pull request in GitHub Desktop lets you see any proposed changes and make additional changes by opening the project's files and repositories in your default text editor. For more information, see [Viewing A Pull Request In GitHub Desktop](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-a-pull-request-in-github-desktop).

### Keeping your local repository in sync

When you make changes to your local repositories or when other people make changes to the remote repositories, you will need to sync your local copy of the project with the remote repository. GitHub Desktop can keep your local copy of a project in sync with the remote version by pushing and pulling commits. For more information, see [Syncing Your Branch In GitHub Desktop](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop).
