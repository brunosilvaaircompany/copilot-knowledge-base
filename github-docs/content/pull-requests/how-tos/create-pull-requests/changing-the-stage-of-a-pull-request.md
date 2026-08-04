# Changing the stage of a pull request

## Marking a pull request as ready for review

When you're ready to get feedback on your pull request, you can mark your draft pull request as ready for review. Marking a pull request as ready for review will request reviews from any code owners.


> [!TIP]
> You can also mark a pull request as ready for review using the GitHub CLI. See [`gh pr ready`](https://cli.github.com/manual/gh_pr_ready) in the GitHub CLI documentation.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the "Pull requests" list, click the pull request you want to mark as ready for review.
1. In the merge box, click **Ready for review**.

   ![Screenshot of the merge box in a pull request. The "Ready for review" button is outlined in dark orange.](/assets/images/help/pull_requests/ready-for-review-button.png)

## Converting a pull request to a draft

You can convert a pull request to a draft at any time. For example, if you accidentally opened a pull request instead of a draft, or if you've received feedback on your pull request that you need to address, you can convert the pull request to a draft to indicate further changes are needed.

No one can merge the pull request until you mark the pull request as ready for review again. People who are already subscribed to notifications for the pull request will not be unsubscribed when you convert the pull request to a draft.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the "Pull requests" list, click the pull request you want to convert to a draft.
1. In the right sidebar, under "Reviewers," click **Convert to draft**.

   ![Screenshot of the "Reviewers" section in the right sidebar of a pull request. The "Convert to draft" link is outlined in dark orange.](/assets/images/help/pull_requests/convert-to-draft-link.png)

1. Click **Convert to draft**.

## Further reading

* [Pull Requests](https://docs.github.com/en/pull-requests/reference/pull-requests)
