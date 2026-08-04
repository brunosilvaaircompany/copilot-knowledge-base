# Committing and reviewing changes to your project in GitHub Desktop

## About commits

Similar to saving a file that's been edited, a commit records changes to one or more files in your branch. Git assigns each commit a unique ID, called a SHA or hash, that identifies:

* The specific changes
* When the changes were made
* Who created the changes

When you make a commit, you must include a commit message that briefly describes the changes.
 You can also add a co-author on any commits you collaborate on.

If the commits you make in GitHub Desktop are associated with the wrong account on GitHub, update the email address in your Git configuration using GitHub Desktop.
 For more information, see [Configuring Git For GitHub Desktop](https://docs.github.com/en/desktop/configuring-and-customizing-github-desktop/configuring-git-for-github-desktop).

Repository administrators can enable rulesets for a branch to enforce specific conventions when committing. For example, a ruleset can require a commit to be signed, or for an issue number to be referenced at the start of a commit message. GitHub Desktop will display a warning and prevent committing if a commit does not follow the rulesets. For more information, see [About Rulesets](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Choosing a branch and making changes

1. [Create a new branch](/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop), or select an existing branch by clicking **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Current Branch** on the toolbar and selecting the branch from the list.

   ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches," a branch, named "my-feature," is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)
1. Using your favorite text editor, such as [Visual Studio Code](https://code.visualstudio.com/), make the necessary changes to files in your project.


## Choosing how to display diffs

You can change the way diffs are displayed in GitHub Desktop to suit your reviewing needs.

To change how you view diffs, in the top-right corner of the diff view, click {% octicon "gear" aria-label="The Gear icon" %}.
* To change how the entire diff is displayed, under "Diff display," select **Unified** or **Split**. The Unified view shows changes linearly, while the Split view shows old content on the left side and new content on the right side.
* To hide whitespace changes so you can focus on more substantive changes, select **Hide Whitespace Changes**.

![Screenshot of the diff view of a file. A gear icon is outlined in orange and expanded to display "Whitespace" and "Diff display" settings.](/assets/images/help/desktop/diff-selection.png)

{% mac %}

> [!TIP] The default tab size used to display diffs is 8. You can customize this on the **Appearance** pane of the **Settings** dialog.

{% endmac %}

{% windows %}

> [!TIP] The default tab size used to display diffs is 8. You can customize this on the **Appearance** pane of the **Options** dialog.

{% endwindows %}


If you need to see more of the file than GitHub Desktop shows by default, you can expand the diff.
* To see the next few lines above or below the highlighted changes, click the arrow above or below the line numbers.
* To see the entire file, right-click in the diff view and click **Expand Whole File**.

![Screenshot of the diff view of a "README" file. Over a green "addition" line, in a context menu, the cursor hovers over "Expand Whole File."](/assets/images/help/desktop/expand-diff-view.png)

## Selecting changes to include in a commit

As you make changes to files in your text editor and save them locally, you will also see the changes in GitHub Desktop.

In the "Changes" tab in the left sidebar:

* The red {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} icon indicates removed files.
* The yellow {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} icon indicates modified files.
* The green {% octicon "diff-added" aria-label="The diff added icon color-green" %} icon indicates added files.
* To access stashed changes, click **Stashed Changes**.
* To add **all changes in all files** to a single commit, keep the checkbox at the top of the list selected.


  ![Screenshot of the "Changes" tab. Above the list of changed files, next to the text "3 changed files," a selected checkbox is outlined in orange.](/assets/images/help/desktop/commit-all.png)
* To add **all changes in one or more files** to a single commit, unselect the checkboxes next to the files you don't want included, leaving only the files you want in the commit. You can toggle the checkbox with the `Spacebar` or `Enter` keys after selecting a file.


### Creating a partial commit

If one file contains multiple changes, but you only want some of those changes to be included in a commit, you can create a partial commit. The rest of your changes will remain intact, so that you can make additional modifications and commits. This allows you to make separate, meaningful commits, such as keeping line break changes in a commit separate from code or prose changes.

To exclude changed lines from your commit, click one or more changed lines so the blue disappears. The lines that are still highlighted in blue will be included in the commit.

![Screenshot of the diff view of a file. The background color for the line number of "I don't want to include this line" is green, not blue.](/assets/images/help/desktop/partial-commit.png)

## Discarding changes

If you have uncommitted changes that you don't want to keep, you can discard the changes. This will remove the changes from the files on your computer. You can discard all uncommitted changes in one or more files, or you can discard specific lines you added.

Discarded changes are saved in a dated file in the Trash. You can recover discarded changes until the Trash is emptied.

### Discarding changes in one or more files

1. In the list of changed files, select the files where you want to discard the changes since the last commit. To select multiple files, click `shift` and click on the range of files you want to discard changes from.

1. Click **Discard Changes** or **Discard Selected Changes** to discard changes to one or more files, or **Discard All Changes** to discard changes to all files since the last commit.


   ![Screenshot of the "Changes" tab. Two selected files are highlighted in blue. In a context menu, the cursor hovers over "Discard 2 Selected Changes."](/assets/images/help/desktop/discard-changes-mac.png)
1. To confirm the changes, in the "Confirm Discard Changes" window, review the files affected and click **Discard Changes**.


### Discarding changes in one or more lines

You can discard one or more changed lines that are uncommitted.

> [!NOTE]
> Discarding single lines is disabled in a group of changes that adds and removes lines.

To discard one added line, in the list of changed lines, right-click the line number of the line you want to discard, then select **Discard Added Line**.

![Screenshot of the diff view of a file. In a context menu, a cursor hovers over "Discard Added Line," highlighted in blue.](/assets/images/help/desktop/discard-single-line.png)

To discard a group of changed lines, right-click the vertical bar to the right of the line numbers for the lines you want to discard, then select **Discard added lines**.

![Screenshot of the diff view of a file. To the right of the line numbers, a narrow, darker blue line is highlighted with an orange outline.](/assets/images/help/desktop/discard-multiple-lines.png)

## Write a commit message and push your changes

Once you're satisfied with the changes you've chosen to include in your commit, you need to describe your commit and push your changes. If you've collaborated on a commit, you can also attribute a commit to more than one author.

> [!NOTE]
> By default, GitHub Desktop will push the tag that you create to your repository with the associated commit.
 For more information, see [Managing Tags In GitHub Desktop](https://docs.github.com/en/desktop/managing-commits/managing-tags-in-github-desktop).

1. At the bottom of the list of changes, next to your profile picture, describe your commit:
   * If you have access to GitHub Copilot, you can automatically create a commit message and details based on the changes you made. Click {% octicon "copilot" aria-label="Generate commit message with Copilot" %}.
   * If you want to regenerate a different commit message, click {% octicon "copilot" aria-label="Regenerate commit message with Copilot" %} again to generate a new suggestion.
   * To choose the model used to generate commit messages, configure Copilot settings. For more information, see [Configuring Copilot In GitHub Desktop](https://docs.github.com/en/desktop/configuring-and-customizing-github-desktop/configuring-copilot-in-github-desktop).
   * Copilot uses any repository custom instructions to shape the generated commit message and details. For more information, see [Add Repository Instructions](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
   * Copilot also uses any repository rulesets that restrict commit metadata to shape the generated commit message and details. For more information, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#adding-metadata-restrictions).
   * Alternatively, type your own short, meaningful commit message in the Summary field. You can also add more information about the change in the Description field.

   ![Screenshot of the "Changes" tab. The "Summary" field and "Generate commit message with Copilot" button are outlined in orange.](/assets/images/help/desktop/create-commit-details.png)

1. Optionally, to attribute a commit to another author, click the add co-authors icon and type the username(s) you want to include.

   ![Screenshot of the "Changes" tab. In the corner of the "Description" field, the icon for adding a co-author is outlined in orange.](/assets/images/help/desktop/add-co-author-commit.png)
1. Under the Description field, click **Commit to BRANCH**.


   > [!TIP]
   > If your repository has pre-commit or commit-msg hooks, they will run automatically when you commit. You can bypass hooks for a specific commit by clicking {% octicon "gear" aria-label="Commit options" %} next to the commit message field and selecting **Bypass Commit Hooks**. For more information, see [Working With Git Hooks In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/working-with-git-hooks-in-github-desktop).

1. If the branch you're trying to commit to is protected, Desktop will warn you.
    * To move your changes, click **switch branches**.
    * To commit your changes to the protected branch, click **Commit to BRANCH**.

   For more information about protected branches, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).
1. To push your local changes to the remote repository, in the repository bar, click **Push origin**.

   ![Screenshot of the repository bar. A button, labeled "Push origin", is highlighted with an orange outline.](/assets/images/help/desktop/push-to-origin.png)


1. If you have a pull request based off the branch you are working on, GitHub Desktop will display the status of the checks that have run for the pull request next to the "Current Branch" section of the repository bar. For more information about checks, see [Viewing And Re Running Checks In GitHub Desktop](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop).

   If a pull request has not been created for the current branch, GitHub Desktop will give you the option to preview the changes and create one. For more information, see [Creating An Issue Or Pull Request From GitHub Desktop](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop).

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request," is highlighted with an orange outline.](/assets/images/help/desktop/mac-preview-pull-request.png)

## Managing your commit history

If you need to undo a commit or revise your commit history (to make it easier for a reviewer to follow your changes), GitHub Desktop provides a number of options for managing your commit history. For more information, see [Options For Managing Commits In GitHub Desktop](https://docs.github.com/en/desktop/managing-commits/options-for-managing-commits-in-github-desktop).

## Further reading

* [Using Git](https://docs.github.com/en/get-started/using-git)
* [Working With Git Hooks In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/working-with-git-hooks-in-github-desktop)
