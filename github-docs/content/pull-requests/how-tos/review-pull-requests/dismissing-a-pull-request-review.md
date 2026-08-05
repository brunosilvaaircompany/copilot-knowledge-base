# Dismissing a pull request review

If a pull request has changed since it was reviewed and the person who requested changes isn't available to give an approving review, repository administrators or people with write access can dismiss a review.

Dismissing a review changes the status of the review to a review comment. When you dismiss a review, you must add a comment explaining why you dismissed it. Your comment will be added to the pull request conversation.

You can find a pull request where you or a team you're a member of is requested for review with the search qualifier `review-requested:[USERNAME]` or `team-review-requested:[TEAMNAME]`. For more information, see [Searching Issues And Pull Requests](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests).


1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the list of pull requests, click the pull request you'd like to review.

1. On the "Conversation" tab, next to the summary of reviews, click {% octicon "chevron-down" aria-label="show" %}.

   ![Screenshot of the merge box for a pull request. The chevron icon to see the reviews is outlined in dark orange.](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)

1. Next to the review you'd like to dismiss, select the {% octicon "kebab-horizontal" aria-label="Show options" %} dropdown menu, then click **Dismiss review**.

   ![Screenshot of the merge box of a pull request. The Show options menu (kebab icon), is expanded, and the "Dismiss review" option is outlined in orange.](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)

1. Type your reason for dismissing the review, then click **Dismiss review**.

## Further reading

* [Pull Request Reviews](https://docs.github.com/en/pull-requests/reference/pull-request-reviews)
* [Reviewing Proposed Changes In A Pull Request](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)
* [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)
