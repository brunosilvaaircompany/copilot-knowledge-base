# Archive pull requests

## About archiving pull requests

Archiving a pull request removes it from public view while preserving its history for repository administrators. This provides a safer moderation path when they need to take a pull request out of public view without permanently deleting it.

When a pull request is archived:

* The pull request is only visible to repository administrators. Visitors without administrator access to the repository receive a 404 error.
* The pull request is automatically closed and locked.

When you unarchive a pull request, it becomes visible again, but it remains closed and locked. You can reopen and unlock it separately if needed.

## Archiving a pull request

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. Click the pull request you want to archive.
1. Scroll to the bottom of the right sidebar. Then click **{% octicon "archive" aria-hidden="true" aria-label="archive" %} Archive pull request**.
1. Read the information about archiving the pull request, then confirm that you want to archive it.

## Unarchiving a pull request

You can find the PR by using the `is:archived` qualifier. See, [Searching Issues And Pull Requests](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-pull-request-is-archived).

1. Open the pull request you want to unarchive.
1. In the right sidebar, click **{% octicon "archive" aria-hidden="true" aria-label="unarchive" %} Unarchive pull request**.
1. Read the information about unarchiving the pull request, then confirm that you want to unarchive it.
