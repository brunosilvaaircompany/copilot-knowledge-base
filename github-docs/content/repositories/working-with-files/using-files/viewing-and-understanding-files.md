# Viewing and understanding files

GitHub provides tools to view raw content, trace changes to specific lines, and explore how a file’s content has evolved over time. These insights reveal how code was developed, its current purpose, and its structure, helping you contribute effectively.

## Viewing or copying the raw file content

With the raw view, you can view or copy the raw content of a file without any styling.

1. On GitHub, navigate to the main page of the repository.

1. Click the file that you want to view.
1. In the upper-right corner of the file view, click **Raw**.

   ![Screenshot of a file. In the header, a button, labeled "Raw," outlined in dark orange.](/assets/images/help/repository/raw-file-button.png)

1. Optionally, to copy the raw file content, in the upper-right corner of the file view, click **{% octicon "copy" aria-label="Copy raw content" %}**.  To download the raw file, click **{% octicon "download" aria-label="Download raw file" %}**.

## Viewing the line-by-line revision history for a file

Within the blame view, you can view the line-by-line revision history for an entire file.

> [!TIP]
> On the command line, you can also use `git blame` to view the revision history of lines within a file. For more information, see [Git's `git blame` documentation](https://git-scm.com/docs/git-blame).

1. On GitHub, navigate to the main page of the repository.

1. Click to open the file whose line history you want to view.
1. Above the file content, click **Blame**. This view gives you a line-by-line revision history, with the code in a file separated by commit. Each commit lists the author, commit description, and commit date.
1. To see versions of a file before a particular commit, click {% octicon "versions" aria-label="View blame prior to this change" %}. Alternatively, to see more detail about a particular commit, click the commit message.

      ![Screenshot of a commit in the blame view. The commit message and versions icon are outlined in dark orange.](/assets/images/help/repository/code-view-blame-commit-options.png)

1. To return to the raw code view, above the file content, click **Code**.
   * If you are viewing a Markdown file, above the file content, you can also click **Preview** to return to the view with Markdown formatting applied.

## Ignore commits in the blame view

All revisions specified in the `.git-blame-ignore-revs` file, which must be in the root directory of your repository, are hidden from the blame view using Git's `git blame --ignore-revs-file` configuration setting. For more information, see [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) in the Git documentation.

1. In the root directory of your repository, create a file named `.git-blame-ignore-revs`.
1. Add the commit hashes you want to exclude from the blame view to that file. We recommend the file to be structured as follows, including comments:

    ```shell
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

1. Commit and push the changes.

In the blame view, revisions are excluded if the commit **introduced new lines** or modified existing lines. If the commit was the last to **modify** a line, it will still appear in blame. You'll see an "Ignoring revisions in .git-blame-ignore-revs" banner indicating that some commits may be hidden:




![Screenshot of the blame view for a file. The blue "Ignoring revisions" banner includes a link to ".git-blame-ignore-revs" which is outlined in orange.](/assets/images/help/repository/blame-ignore-revs-file.png)


This can be useful when a few commits make extensive changes to your code. You can use the file when running `git blame` locally as well:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

You can also configure your local git so it always ignores the revs in that file:

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

## Bypassing `.git-blame-ignore-revs` in the blame view

If the blame view for a file shows **Ignoring revisions in .git-blame-ignore-revs**, you can still bypass `.git-blame-ignore-revs` and see the normal blame view. In the URL, append a `~` to the SHA and the **Ignoring revisions in .git-blame-ignore-revs** banner will disappear.



## Understanding files with Copilot

> [!NOTE] You'll need access to GitHub Copilot. For more information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).


You can also use Copilot to ask about specific lines of code in a file, helping you understand how the code works and reducing the risk of introducing new problems.

1. On GitHub, navigate to a repository and open a file.
1. Do one of the following:
   * To ask a question about the **entire file**, click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) at the top right of the file view.

     ![Screenshot of the Copilot button, highlighted with a dark orange outline, at the top of the file view.](/assets/images/help/copilot/copilot-button-for-file.png)

   * To ask a question about **specific lines** within the file:

     1. Click the line number for the first line you want to ask about, hold down <kbd>Shift</kbd>, then click the line number for the last line you want to select.
     1. To ask your own question about the selected lines, click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) to the right of your selection, then type your question in the GitHub Copilot Chat panel.
     1. To ask a predefined question, click the drop-down menu beside the Copilot icon, then choose one of the options.

     ![Screenshot of the Copilot buttons, highlighted with a dark orange outline, to the right of some selected code.](/assets/images/help/copilot/copilot-buttons-inline-code.png)

1. If you clicked the Copilot icon, type a question in the "Ask Copilot" box at the bottom of the chat panel and press <kbd>Enter</kbd>.

   For example, if you are asking about the entire file, you could enter:
   * `Explain this file.`
   * `How could I improve this code?`
   * `How can I test this script?`

   If you are asking about specific lines, you could enter:
   * `Explain the function at the selected lines.`
   * `How could I improve this class?`
   * `Add error handling to this code.`
   * `Write a unit test for this method.`

   Copilot responds to your request in the panel.

1. Optionally, after submitting a question, you can click {% octicon "square-fill" aria-label="Stop" %} in the text box to stop the response.

1. You can continue the conversation by asking a follow-up question. For example, you could type "tell me more" to get Copilot to expand on its last comment.
