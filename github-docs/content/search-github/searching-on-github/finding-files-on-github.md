# Finding files on GitHub

> [!TIP]
> * By default, file finder results exclude some directories like `build`, `log`, `tmp`, and `vendor`. To search for files in these directories, use the [`path` code search qualifier](/search-github/github-code-search/understanding-github-code-search-syntax#path-qualifier). Alternatively, you can customize which directories are excluded by default [using a `.gitattributes` file](#customizing-excluded-files).
> * You can also open the file finder by pressing `t` on your keyboard. For more information, see [Keyboard Shortcuts](https://docs.github.com/en/get-started/accessibility/keyboard-shortcuts).

## Using the file finder

1. On GitHub, navigate to the main page of the repository.

1. In the “Go to file” search bar, type the name of the file or directory you'd like to find.
   ![Screenshot of the main view for a repository. A search bar, labeled "Go to file", is outlined in dark orange.](/assets/images/help/repository/repository-main-page-go-to-file.png)
1. Alternatively, if there is no "Go to file" search bar, click **Go to file**, then type the name of the file or directory you'd like to find.
   ![Screenshot of the main view for a repository. A "Go to file" button is outlined in dark orange.](/assets/images/help/repository/repository-main-page-go-to-file-no-search-bar.png)
1. In the list of results, click the file or directory you wanted to find. You can view the file path for a directory or file below each search result.

## Customizing excluded files

By default, file finder results do not include files in the following directories:

* `.git`
* `.hg`
* `.sass-cache`
* `.svn`
* `build`
* `dot_git`
* `log`
* `tmp`
* `vendor`

You can override these default exclusions using a `.gitattributes` file.

To do this, create or update a file called `.gitattributes` in your repository root, setting the [`linguist-generated`](https://github.com/github-linguist/linguist/blob/main/docs/overrides.md) attribute to `false` for each directory that should be included in file finder results.

For example, the following `.gitattributes` file would cause files in the `build/` directory to be available to the file finder:

```text
build/** linguist-generated=false
```

Note that this override requires the use of the recursive glob pattern (`**`). For more information, see [pattern format](https://git-scm.com/docs/gitignore#_pattern_format) in the Git documentation. More complex overrides of subdirectories within excluded-by-default directories are not supported.

## Further reading

* [About Searching On GitHub](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/about-searching-on-github)
* [Customizing How Changed Files Appear On GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)
* [`.gitattributes`](https://git-scm.com/docs/gitattributes) in the Git documentation
