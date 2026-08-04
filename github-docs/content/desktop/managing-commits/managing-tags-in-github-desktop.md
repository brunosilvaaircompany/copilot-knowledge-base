# Managing tags in GitHub Desktop

## About tags in GitHub Desktop

GitHub Desktop allows you to create annotated tags. Tags are associated with commits, so you can use a tag to mark an individual point in your repository's history, including a version number for a release. For more information about release tags, see [About Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases).

By default, GitHub Desktop will push the tag that you create to your repository with the associated commit.


## Creating a tag

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)

1. Right-click the commit and click **Create Tag...**.

   ![Screenshot of a list of commits in the "History" tab. Next to a commit, in a context menu, the cursor hovers over the "Create Tag" option.](/assets/images/help/desktop/select-create-tag.png)

1. In the "Create a Tag" dialog window, type the name of the tag.

1. Click **Create Tag**.


## Viewing tags

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)

1. Click the commit.

   > [!NOTE]
   > GitHub Desktop displays an arrow {% octicon "arrow-up" aria-label="The up arrow icon" %} if the tag has not been pushed to the remote repository.

   ![Screenshot of a list of commits in the "History" tab. Next to a commit, a "hello-tag" label and an "up arrow" icon are outlined in orange.](/assets/images/help/desktop/viewing-tags-in-history.png)

1. All tags associated with the commit are visible in that commit's metadata.

   ![Screenshot of the detailed view of a commit. Above the commit's diff, in the metadata, a tag icon and the label "hello-tag" are outlined in orange.](/assets/images/help/desktop/viewing-tags-in-commit.png)

## Deleting tags

> [!NOTE]
> You can only delete tags associated with commits that have not yet been pushed.

1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)

1. Right-click the commit.

   * If a commit has only one tag, click **Delete Tag TAG NAME**.
     ![Screenshot of a list of commits in the "History" tab. The cursor hovers over an option labeled "Delete tag hello-tag" in a context window.](/assets/images/help/desktop/select-delete-tag.png)
   * If a commit has multiple tags, hover over **Delete Tag...** and then click the tag that you want to delete.
     ![Screenshot of a context menu in the "History" tab. Next to "Delete tag", a second menu is expanded. The cursor hovers over "hello-tag".](/assets/images/help/desktop/delete-tag-multiple.png)


## Further reading

* [Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) in the Git documentation
