# REST API endpoints for pull requests

## About pull requests

You can list, view, edit, create, and merge pull requests using the REST API. For information about how to interact with comments on a pull request, see [Comments](https://docs.github.com/en/rest/issues/comments).

Pull requests are a type of issue. Any actions that are available in both pull requests and issues, like managing assignees, labels, and milestones, are handled by the REST API to manage issues. To perform these actions on pull requests, you must use the issues API endpoints (for example, `/repos/{owner}/{repo}/issues/{issue_number}`), not the pull requests endpoints. For more information, see [Issues](https://docs.github.com/en/rest/issues).

### Link Relations

Pull requests have these possible link relations:

* `self`: The API location of this pull request
* `html`: The HTML location of this pull request
* `issue`: The API location of this pull request's [issue](/rest/issues)
* `comments`: The API location of this pull request's [issue comments](/rest/issues/comments)
* `review_comments`: The API location of this pull request's [review comments](/rest/pulls/comments)
* `review_comment`: The [URL template](/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia) to construct the API location for a [review comment](/rest/pulls/comments) in this pull request's repository
* `commits`: The API location of this pull request's [commits](#list-commits-on-a-pull-request)
* `statuses`: The API location of this pull request's [commit statuses](/rest/commits#commit-statuses), which are the statuses of its `head` branch
