# Setting a Markdown processor for your GitHub Pages site using Jekyll

> [!NOTE] While the `github-pages` gem remains supported for some workflows, GitHub Actions is now the recommended approach for deploying and automating GitHub Pages sites.


People with write permissions for a repository can set the Markdown processor for a GitHub Pages site.

GitHub Pages supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and GitHub's own Markdown processor, which is used to render [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) throughout GitHub. For more information, see [About Writing And Formatting On GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github).

You can use GitHub Flavored Markdown with either processor.

1. On GitHub, navigate to your site's repository.

1. In your repository, browse to the __config.yml_ file.
1. In the upper right corner of the file view, click {% octicon "pencil" aria-label="Edit file" %} to open the file editor.
   ![Screenshot of a file. In the header, a button, labeled with a pencil icon, is outlined in dark orange.](/assets/images/help/repository/edit-file-edit-button.png)


   

   > [!NOTE]
   > Instead of editing and committing the file using the default file editor, you can optionally choose to use the [github.dev code editor](/codespaces/the-githubdev-web-based-editor) by selecting the {% octicon "triangle-down" aria-label="More edit options" %} dropdown menu and clicking **github.dev**. You can also clone the repository and edit the file locally via GitHub Desktop by clicking **GitHub Desktop**.
   >
   > ![Screenshot of a file. In the header, a downwards-facing triangle icon is outlined in dark orange.](/assets/images/help/repository/edit-file-edit-dropdown.png)

   

1. Find the line that starts with `markdown:` and change the value to `kramdown` or `GFM`. The full line should read `markdown: kramdown` or `markdown: GFM`.
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).


1. If you have more than one email address associated with your account on GitHub, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address. For more information about the exact form the no-reply email address can take, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)


1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.


## Further reading

* [kramdown Documentation](https://kramdown.gettalong.org/documentation.html)
* [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
