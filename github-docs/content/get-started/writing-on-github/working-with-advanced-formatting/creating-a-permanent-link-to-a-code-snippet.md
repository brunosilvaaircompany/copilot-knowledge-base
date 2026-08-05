# Creating a permanent link to a code snippet

## Linking to code

This type of permanent link will render as a code snippet only in the repository it originated in. In other repositories, the permalink code snippet will render as a URL. This does not work in Markdown files, only in comments.

![Screenshot of an issue comment. A code snippet has a header that lists the file name and line numbers, and a body that lists the code on those lines.](/assets/images/help/repository/rendered-code-snippet.png)

> [!TIP]
> To create a permalink for an entire file, see [Getting Permanent Links To Files](https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files).

1. On GitHub, navigate to the main page of the repository.

1. Locate the code you'd like to link to:
    * To link to code from a file, navigate to the file.
    * To link to code from a pull request, navigate to the pull request and click **{% octicon "diff" aria-hidden="true" aria-label="diff" %} Files changed**. Then, browse to the file that contains the code you want to include in your comment, and click **View**.
1. Choose whether to select a single line or a range.

   * To select a single line of code, click the line number to highlight the line.
   * To select a range of code, click the number of the first line in the range to highlight the line of code. Then, hover over the last line of the code range, press <kbd>Shift</kbd>, and click the line number to highlight the range.

1. To the left of the line or range of lines, click {% octicon "kebab-horizontal" aria-label="Code line X options" %}. In the drop-down menu, click **Copy permalink**.

   ![Screenshot of a file, with 8 lines selected. To the left of the first selected line, a button labeled with a kebab icon is outlined in dark orange.](/assets/images/help/repository/open-new-issue-specific-line.png)
1. Navigate to the conversation where you want to link to the code snippet.
1. Paste your permalink into a comment, and click **Comment**.

## Linking to Markdown

You can link to specific lines in Markdown files by loading the Markdown file without Markdown rendering. To load a Markdown file without rendering, you can use the `?plain=1` parameter at the end of the URL for the file. For example, `github.com/<organization>/<repository>/blob/<commit_SHA>/README.md?plain=1`.

You can link to a specific line in the Markdown file the same way you can in code. Append `#L` with the line number or numbers at the end of the URL. For example, `github.com/<organization>/<repository>/blob/<commit_SHA>/README.md?plain=1#L14` will highlight line 14 in the plain README.md file.

## Further reading

* [Creating An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)
* [Reviewing Changes In Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)
