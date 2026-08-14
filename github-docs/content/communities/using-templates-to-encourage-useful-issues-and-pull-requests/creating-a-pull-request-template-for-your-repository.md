# Creating a pull request template for your repository

For more information, see [About Issue And Pull Request Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates).

You can create a _PULL_REQUEST_TEMPLATE/_ subdirectory in any of the supported folders to contain multiple pull request templates, and use the `template` query parameter to specify the template that will fill the pull request body. For more information, see [Using Query Parameters To Create A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request).

You can create default pull request templates for your organization or personal account. For more information, see [Creating A Default Community Health File](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

## Adding a pull request template

1. On GitHub, navigate to the main page of the repository.

1. Above the list of files, select the **Add file** {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} dropdown menu, then click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Create new file**.

   Alternatively, you can click {% octicon "plus" aria-label="The plus sign icon" %} in the file tree view on the left.

   ![Screenshot of the main page of a repository highlighting both the "Add file" and the "plus sign" icon, described above, with an orange outline.](/assets/images/help/repository/add-file-buttons.png)

1. In the file name field:
    * To make your pull request template visible in the repository's root directory, name the pull request template `pull_request_template.md`.
    * To make your pull request template visible in the repository's `docs` directory, name the pull request template `docs/pull_request_template.md`.
    * To store your file in a hidden directory, name the pull request template `.github/pull_request_template.md`.
    * To create multiple pull request templates and use the `template` query parameter to specify a template to fill the pull request body, type _.github/PULL_REQUEST_TEMPLATE/_, then the name of your pull request template. For example, `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. You can also store multiple pull request templates in a `PULL_REQUEST_TEMPLATE` subdirectory within the root or `docs/` directories. For more information, see [Using Query Parameters To Create A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request).
1. In the body of the new file, add your pull request template. This template could consist of asking to include:
    * A [reference to a related issue](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests) in your repository.
    * A description of the changes proposed in the pull request.
    * [@mentions](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) of the person or team responsible for reviewing proposed changes.
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).

1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)
 Templates are available to collaborators when they are merged into the repository's default branch.
1. Click **Commit changes** or **Propose changes**.


## Further reading

* [About Issue And Pull Request Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)
* [Creating An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)
* [Creating A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
