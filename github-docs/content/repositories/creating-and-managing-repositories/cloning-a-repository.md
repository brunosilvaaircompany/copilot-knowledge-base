# Cloning a repository

## About cloning a repository

{% webui %}

You can clone a repository from your GitHub Enterprise Server instance to your local computer, or to a codespace, to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from your GitHub Enterprise Server instance to your local machine, or to a remote virtual machine when you create a codespace. For more information about cloning to a codespace, see [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository).

{% endwebui %}

{% cli %}

You can clone a repository from your GitHub Enterprise Server instance to your local computer to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from your GitHub Enterprise Server instance to your local machine.


{% endcli %}

{% desktop %}

You can clone a repository from your GitHub Enterprise Server instance to your local computer to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from your GitHub Enterprise Server instance to your local machine.


{% enddesktop %}

Cloning a repository pulls down a full copy of all the repository data that your GitHub Enterprise Server instance has at that point in time, including all versions of every file and folder for the project. You can push your changes to the remote repository on your GitHub Enterprise Server instance, or pull other people's changes from your GitHub Enterprise Server instance. For more information, see [Using Git](https://docs.github.com/en/get-started/using-git).

You can clone your existing repository or clone another person's existing repository to contribute to a project.

## Cloning a repository

{% webui %}

1. On GitHub, navigate to the main page of the repository.

1. Above the list of files, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Code**.

   ![Screenshot of the list of files on the landing page of a repository. The "Code" button is highlighted with a dark orange outline.](/assets/images/help/repository/code-button.png)

1. Copy the URL for the repository.

   * To clone the repository using HTTPS, under "HTTPS", click {% octicon "copy" aria-label="Copy to clipboard" %}.
   * To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click {% octicon "copy" aria-label="Copy to clipboard" %}.
   * To clone a repository using GitHub CLI, click **GitHub CLI**, then click {% octicon "copy" aria-label="Copy to clipboard" %}.
  
     ![Screenshot of the "Code" dropdown menu. To the right of the HTTPS URL for the repository, a copy icon is outlined in dark orange.](/assets/images/help/repository/https-url-clone-cli.png)

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Change the current working directory to the location where you want the cloned directory.

1. Type `git clone`, and then paste the URL you copied earlier.

   ```shell
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   ```

1. Press **Enter** to create your local clone.

   ```shell
   $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   > Cloning into `Spoon-Knife`...
   > remote: Counting objects: 10, done.
   > remote: Compressing objects: 100% (8/8), done.
   > remove: Total 10 (delta 1), reused 10 (delta 1)
   > Unpacking objects: 100% (10/10), done.
   ```


{% endwebui %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To clone a repository locally, use the `repo clone` subcommand. Replace the `repository` parameter with the repository name. For example, `octo-org/octo-repo`, `monalisa/octo-repo`, or `octo-repo`. If the `OWNER/` portion of the `OWNER/REPO` repository argument is omitted, it defaults to the name of the authenticating user.

```shell
gh repo clone REPOSITORY
```

You can also use the GitHub URL to clone a repository.

```shell
gh repo clone https://github.com/PATH-TO/REPOSITORY
```

{% endcli %}

{% desktop %}

1. On GitHub, navigate to the main page of the repository.

1. Above the list of files, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Code**.

   ![Screenshot of the list of files on the landing page of a repository. The "Code" button is highlighted with a dark orange outline.](/assets/images/help/repository/code-button.png)
1. To clone and open the repository with GitHub Desktop, click **{% octicon "desktop-download" aria-hidden="true" aria-label="desktop-download" %} Open with GitHub Desktop**.

   ![Screenshot of the "Code" dropdown for a repository. A button, labeled "Open with GitHub Desktop" is outlined in dark orange.](/assets/images/help/repository/open-with-desktop.png)

1. Follow the prompts in GitHub Desktop to complete the clone.

For more information, see [Cloning A Repository From GitHub To GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop).

{% enddesktop %}

## Cloning an empty repository

An empty repository contains no files. It's often made if you don't initialize the repository with a README when creating it.

1. On GitHub, navigate to the main page of the repository.

1. To clone your repository using the command line using HTTPS, under "Quick setup", click {% octicon "copy" aria-label="Copy to clipboard" %}. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click {% octicon "copy" aria-label="Copy to clipboard" %}.

   ![Screenshot of the quick setup notes for an empty repository. To the right of the HTTPS URL for the repository, a copy icon is outlined in orange.](/assets/images/help/repository/empty-https-url-clone-button.png)

   Alternatively, to clone your repository in Desktop, click **{% octicon "desktop-download" aria-hidden="true" aria-label="desktop-download" %} Set up in Desktop** and follow the prompts to complete the clone.

   ![Screenshot of the quick setup notes for an empty repository. The "Set up in Desktop" button is outlined in dark orange.](/assets/images/help/repository/empty-desktop-clone-button.png)

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Change the current working directory to the location where you want the cloned directory.

1. Type `git clone`, and then paste the URL you copied earlier.

   ```shell
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   ```

1. Press **Enter** to create your local clone.

   ```shell
   $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   > Cloning into `Spoon-Knife`...
   > remote: Counting objects: 10, done.
   > remote: Compressing objects: 100% (8/8), done.
   > remove: Total 10 (delta 1), reused 10 (delta 1)
   > Unpacking objects: 100% (10/10), done.
   ```


## Troubleshooting cloning errors

When cloning a repository it's possible that you might encounter some errors.

If you're unable to clone a repository, check that:

* You can connect using HTTPS. For more information, see [Troubleshooting Cloning Errors](https://docs.github.com/en/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors).
* You have permission to access the repository you want to clone. For more information, see [Troubleshooting Cloning Errors](https://docs.github.com/en/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#check-your-permissions).
* The default branch you want to clone still exists. For more information, see [Troubleshooting Cloning Errors](https://docs.github.com/en/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout).



## Further reading

* [Troubleshooting Connectivity Problems](https://docs.github.com/en/get-started/using-github/troubleshooting-connectivity-problems)
