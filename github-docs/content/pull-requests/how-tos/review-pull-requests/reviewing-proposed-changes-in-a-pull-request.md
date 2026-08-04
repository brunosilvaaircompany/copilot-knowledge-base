# Reviewing proposed changes in a pull request

## About reviewing pull requests

It's best to review changes in a pull request one file at a time:

* **Examine** each individual file changed in the pull request.
* **Leave comments** on specific changes.
* After reviewing a file, mark it as **Viewed** to collapse it and track your progress.
* The **progress bar** in the pull request header shows how many files you've viewed.
* When you've finished, you can **approve** the pull request or **request changes** by submitting your review with a summary comment.

 If the pull request was raised by GitHub Copilot, then Copilot will respond to your comments when you submit them. Copilot will push a new commit to the pull request with further changes. See [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

{% webui %}

## Understanding the purpose of the pull request

Understanding the motivation behind a pull request helps you keep your review targeted and meaningful. It also helps you provide feedback that aligns with the pull request author’s intent and the project's goals.

You have several options to better understand the context and rationale for proposed changes.

### Using the pull request sidebar for context

In the pull request sidebar, you can find valuable context, including:

* Linked **issues** or **discussions**: Review these to understand the problems or goals that the pull request aims to address. You can also gather information about background, design decisions, or current debates.
* Linked **projects** or **milestones**: Review how this pull request fits within larger projects or upcoming releases.

Use this information to frame your review and check if the goals of the pull request align with the original intent.

### Using Copilot Chat to understand the rationale

You can ask Copilot Chat for help understanding the pull request’s intent or clarifying any part of the change.

1. At the top right of the pull request page, click the **{% octicon "copilot" aria-label="Copilot icon" %}** button next to the search bar.

   Copilot Chat is displayed, with the pull request attached as context to the prompt window.

1. In the prompt box, type a question and press <kbd>Enter</kbd>. For example, you could enter:

   * `What problem does this pull request solve?`
   * `Why were these changes needed?`
   * `Summarize the goals of this PR based on the linked issue.`
   * `How does this PR relate to issue ISSUE-URL?`

Copilot Chat can help you clarify the bigger picture before you start line-level review.

## Starting a review

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the list of pull requests, click the pull request you'd like to review.

1. On the pull request, click **{% octicon "file-diff" aria-hidden="true" aria-label="file-diff" %} Files changed**.

   ![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

To change the format of the diff view in this tab, click {% octicon "gear" aria-label="The Settings gear" %} and choose the unified or split view. The choice you make will apply when you view the diff for other pull requests.

   ![Screenshot of the "Files changed" tab for a pull request. The "Diff view" menu is outlined in dark orange.](/assets/images/help/pull_requests/diff-settings-menu.png)

   You can also hide whitespace differences. The choice you make only applies to this pull request and will be remembered the next time you visit this page.
1. Optionally, filter the files to show only the files you want to review or use the file tree to navigate to a specific file.

1. Optionally, if you have access to GitHub Copilot Enterprise, you can ask Copilot about the changes in a file in a pull request by clicking {% octicon "kebab-horizontal" aria-label="Show options" %} at the top right of the file, clicking **Ask Copilot about this diff**, then typing a request such as "Explain these changes." See [Chat In GitHub](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#asking-questions-about-a-specific-pull-request).

1. Hover over the line of code where you'd like to add a comment, and click the blue comment icon.

   ![Screenshot of a diff in a pull request. Next to a line number, a blue plus icon is highlighted with an orange outline.](/assets/images/help/commits/hover-comment-icon.png)

1. Optionally, you can add a comment on multiple lines. To select a range of lines, click the line number of the first line you want to comment on, then either drag down to the final line, or hold down <kbd>Shift</kbd> and click on the last line number. You can then click the blue comment icon on the last line you want to comment on. Alternatively, you can click the blue comment icon next to the first line you want to comment on, then drag down to the last line you want to comment on.

1. In the comment field, type your comment.

1. Optionally, to suggest a specific change to the line or lines, click {% octicon "file-diff" aria-label="Suggestion" %}, then edit the text within the suggestion block.

   ![Screenshot of a review comment box. The file diff icon to suggest a specific change is outlined in dark orange.](/assets/images/help/pull_requests/suggestion-block.png)

1. To comment directly on a file, to the right of the file, click {% octicon "comment" aria-label="The comment icon" %} and type your comment.

   ![Screenshot of an image file on the "Files changed" page of a pull request. To the right of the file, a comment icon is outlined in orange.](/assets/images/help/pull_requests/pull-request-comment-on-file.png)

1. When you're done, click **Start a review**. If you have already started a review, you can click **Add review comment**.

Before you submit your review, your line comments are _pending_ and only visible to you. You can edit pending comments anytime before you submit your review. To cancel a pending review, including all of its pending comments, click **Review changes**, then click **Abandon review**.

![Screenshot of the comment field for a review. The "Abandon review" button is outlined in dark orange.](/assets/images/help/pull_requests/abandon-review-button.png)
{% endwebui %}



{% codespaces %}

## Reviewing a pull request

You can use [GitHub Codespaces](/codespaces/quickstart) to test, run, and review pull requests.

1. Open the pull request in a codespace, as described in [Using GitHub Codespaces For Pull Requests](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-github-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces).
1. In the Activity Bar, click the **GitHub Pull Request** view. This view only appears when you open a pull request in a codespace.

   ![Screenshot of the VS Code Activity Bar. The mouse pointer is hovering over an icon displaying the tooltip "GitHub Pull Request."](/assets/images/help/codespaces/github-pr-view.png)

1. To review a specific file, click the **Open File** icon in the Side Bar.

   ![Screenshot of the "GitHub Pull Request" side bar. A file name is highlighted with a dark orange outline.](/assets/images/help/codespaces/changes-in-files.png)

1. To add review comments, click the **+** icon next to the line number. Type your review comment and then click **Start Review**.

   ![Screenshot of a comment being added, reading "Yes, I agree, this is clearer." The "Start Review" button is shown below the comment.](/assets/images/help/codespaces/start-review.png)

1. Optionally, you can suggest a change that the author of the pull request can click to commit if they agree with your suggestion. To do this, click and hold the **+** sign next to the first line you want to suggest changing, then drag the **+** sign to the last line you want to suggest changing. Then click **Make a Suggestion** in the comment box that's displayed.

   The lines you selected are copied into the comment box, where you can edit them to suggest a change. You can add a comment above the line containing <code>```suggestion</code> to explain your suggested change.

   Click **Add Comment** to add your suggestion to the pull request.

   ![Screenshot of a suggested change. The "Make a Suggestion" and "Add Comment" buttons are shown below the suggested change.](/assets/images/help/codespaces/review-suggestion.png)


1. When you are finished adding review comments, from the Side Bar you can choose to either submit the comments, approve the changes, or request changes.

   ![Screenshot of the side bar showing the dropdown options "Comment and Submit," "Approve and Submit," and "Request Changes and Submit."](/assets/images/help/codespaces/submit-review.png)

For more information on reviewing pull requests in GitHub Codespaces, see [Using GitHub Codespaces For Pull Requests](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-github-codespaces-for-pull-requests).

{% endcodespaces %}


{% webui %}



## Understanding changes in a pull request

> [!NOTE] You'll need access to GitHub Copilot. For more information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).


GitHub Copilot can help you quickly understand changes in a pull request by providing context and explanations for specific commits. If you’re unsure about the purpose of a particular change or need more details about how it fits into the broader codebase, you can ask Copilot questions about individual commits.

1. Navigate to a commit on GitHub.

1. In the top right of any page on GitHub, click the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon next to the search bar.

   The GitHub Copilot Chat panel is displayed. To resize the panel, click and drag the top or left edge.

1. If the panel contains a previous conversation you had with Copilot, click the {% octicon "plus" aria-hidden="true" aria-label="plus" %} plus sign icon at the top right of the Copilot panel to start a new conversation.


1. At the bottom of the Copilot chat panel, in the "Ask Copilot" box, type a question and press <kbd>Enter</kbd>. For example, you could enter:

   * `Summarize the changes in this commit`
   * `Who committed these changes?`
   * `When was this commit made?`

   > [!TIP]
   > If you know the SHA for a commit, instead of navigating to the commit, you can ask Copilot about the commit from any page in the repository on GitHub by including the SHA in your message. For example, `What changed in commit a778e0eab?`

1. Optionally, after submitting a question, you can click {% octicon "square-fill" aria-label="Stop" %} in the text box to stop the response.




## Reviewing dependency changes

If the pull request contains changes to dependencies, you can use the dependency review for a manifest or lock file to see what has changed. You can also check whether the changes introduce security vulnerabilities. See [Reviewing Dependency Changes In A Pull Request](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-dependency-changes-in-a-pull-request).

1. On the pull request, click **{% octicon "file-diff" aria-hidden="true" aria-label="file-diff" %} Files changed**.

   ![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)


1. On the right of the header for a manifest or lock file, display the dependency review by clicking the **{% octicon "file" aria-label="The rich diff icon" %}** rich diff button.

   ![Screenshot of the "Files changed" tab of a pull request. The button to display the rich diff, labeled with a file icon, is outlined in dark orange.](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

1. You may also want to review the source diff, because there could be changes to the manifest or lock file that don't change dependencies, or there could be dependencies that GitHub can't parse and which, as a result, don't appear in the dependency review.

   To return to the source diff view, click the **{% octicon "code" aria-label="Display the source diff" %}** button.

   ![Screenshot of the "Files changed" tab of a pull request. The button to display the source diff, shown with a code icon, is outlined in orange.](/assets/images/help/pull_requests/dependency-review-source-diff.png)


## Marking a file as viewed

After you finish reviewing a file, you can mark the file as viewed. The file will collapse. If the file changes after you view the file, it will be unmarked as viewed.

1. On the pull request, click **{% octicon "file-diff" aria-hidden="true" aria-label="file-diff" %} Files changed**.

   ![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

1. On the right of the header of the file you've finished reviewing, select **Viewed**.

   ![Screenshot of the header of a file. The "Viewed" option is outlined in dark orange.](/assets/images/help/pull_requests/viewed-checkbox.png)

## Submitting your review

After you've finished reviewing all the files you want in the pull request, submit your review.

1. On the pull request, click **{% octicon "file-diff" aria-hidden="true" aria-label="file-diff" %} Files changed**.

   ![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

1. Above the changed code, click **Review changes**.

   ![Screenshot of the "Files changed" tab of a pull request. The "Review changes" button is outlined in dark orange.](/assets/images/help/pull_requests/review-changes-button.png)

1. Type a comment summarizing your feedback on the proposed changes.

1. Select the type of review you'd like to leave:

    * Select **Comment** to leave general feedback without explicitly approving the changes or requesting additional changes.
    * Select **Approve** to submit your feedback and approve merging the changes proposed in the pull request.
    * Select **Request changes** to submit feedback that must be addressed before the pull request can be merged.
1. Click **Submit review**.


> [!TIP]
> * The **Request changes** option is purely informational and will not prevent merging unless a ruleset or classic branch protection rule is configured with the "require a pull request" option. If configured and a collaborator with `admin`, `owner`, or `write` access to the repository submits a review requesting changes, the pull request cannot be merged until the same collaborator submits another review approving the changes in the pull request.
> * Repository owners and administrators can merge a pull request even if it hasn't received an approving review, or if a reviewer who requested changes has left the organization or is unavailable.
> * If both required reviews and stale review dismissal are enabled and a code-modifying commit is pushed to the branch of an approved pull request, the approval is dismissed. The pull request must be reviewed and approved again before it can be merged.
> * When several open pull requests each have a head branch pointing to the same commit, you won’t be able to merge them if one or both have a pending or rejected review. 
> * If your repository requires approving reviews from people with write or admin permissions, the reviewers sidebar groups approvals by permission level. Approvals can appear in two sections:
>     * The **top section** mostly contains approvals from people with write or admin permissions that count toward merge requirements. Approvals by GitHub Copilot also appear in this section even though GitHub Copilot reviews do not count toward those requirements.
>     * The **collapsible section (if present)** shows approvals from reviewers whose reviews do not affect whether the pull request can be merged. 
> * Pull request authors cannot approve their own pull requests. You will also not be able to approve a pull request that was raised by GitHub Copilot if it was you who assigned Copilot to the issue to which the pull request relates.


{% endwebui %}

## Further reading

* [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)
* [Filtering And Searching Issues And Pull Requests](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests)
