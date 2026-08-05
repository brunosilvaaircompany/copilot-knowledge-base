# Managing Git LFS objects in archives of your repository

## About Git LFS objects in archives

GitHub creates [source code archives](/repositories/working-with-files/using-files/downloading-source-code-archives) of your repository in the form of ZIP files and tarballs. People can download these archives on the main page of your repository or as release assets. By default, Git LFS objects are not included in these archives, only the pointer files to these objects. To improve the usability of archives for your repository, you can choose to include the Git LFS objects instead. To be included, the Git LFS objects must be covered by tracking rules in a _.gitattributes_ file that has been committed to the repository.

If you choose to include Git LFS objects in archives of your repository, every download of those archives will count towards bandwidth usage for your account. Each account receives a free monthly allotment of bandwidth depending on your plan, and you can pay for additional usage. See [Git Lfs](https://docs.github.com/en/billing/concepts/product-billing/git-lfs).

If you use an external LFS server (configured in your _.lfsconfig_), those LFS files will not be included in archives of the repository. The archive will only contain files that have been committed to GitHub.

## Managing Git LFS objects in archives

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. Under "Archives", select or deselect **Include Git LFS objects in archives**.
