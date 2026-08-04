# Using GitHub Code Search

## About using GitHub code search

GitHub indexes repositories you own and repositories in organizations you are a member of, whether public, private, or internal. This means that you can search across all of your repositories, in addition to the public repositories on GitHub that have already been indexed. Only users with permission to view your code will be able to see your code in search results. Forks are indexed and searchable in the same way as other repositories.

Not all code is indexed, and you can currently only search the default branches of repositories. For more information on known limitations, see [About GitHub Code Search](https://docs.github.com/en/search-github/github-code-search/about-github-code-search#limitations).

You must be logged in to a GitHub account to use code search, including for searching code in public repositories.


## Using the search bar

You can search using the search interface on GitHub. Using suggestions, completions, and saved searches, you can quickly find what you are looking for, often without having to fully type a query or view the search results page.

For more information about the search syntax of code search, see [Understanding GitHub Code Search Syntax](https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax).

Note that the syntax and qualifiers for searching for non-code content, such as issues, users, and discussions, is not the same as the syntax for code search. For more information on non-code search, see [About Searching On GitHub](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/about-searching-on-github) and [Searching On GitHub](https://docs.github.com/en/search-github/searching-on-github).


1. In the top navigation of GitHub, click the search bar.
1. Under the search bar, you will see a list of suggestions organized by category, including recent searches and suggested repositories, teams, and projects that you have access to. You can also see a list of saved searches that you have created. For more information on saved searches, see [Creating and managing saved searches](#creating-and-managing-saved-searches).

   ![Screenshot of the GitHub search bar. There is a list of search suggestions by category below the search bar.](/assets/images/help/search/code-search-beta-search-bar.png)

   If you click on any of the specific suggestions, you will be taken directly to the page for that suggestion (for example, the repository or project page). If you click on a recent or saved search, depending on the type of search, the search query will appear in the search bar or you will be taken to the search results page for the search term.

1. Once you start typing a search query, you will see a list of completions and suggestions that match your query. You can click on a suggestion to jump to a specific location. As you type more qualifiers, you will see more specific suggestions, such as code files you can jump to directly.


   ![Screenshot of a search for "repo:octocat/spoon-knife". The code results are outlined in dark orange.](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1. After typing your query, you can also press Enter to go to the full search results view, where you can see each match and a visual interface for applying filters. For more information, see [Using the search results view](#using-the-search-results-view).



## Getting answers with Copilot from the search bar

> [!NOTE] You'll need access to GitHub Copilot. For more information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).


You can use GitHub Copilot to ask questions about an entire repository directly from the main search box. Simply type your question into the search bar, and Copilot can provide insights or explanations about the repository’s structure, purpose, or specific components. This makes it easy to get quick answers without navigating through multiple files, helping you stay focused and maintain your workflow.

1. Navigate to a repository on GitHub.
1. Press <kbd>/</kbd>, or click in the main search box at the top of the page.
1. In the search box, after `repo:OWNER/REPO`, type the question you want to ask Copilot.

   For example, you could enter:

   * `What does this repo do?`
   * `Where is authentication implemented in this codebase?`
   * `How does license file detection work in this repo?`

1. Click **Ask Copilot**.

   ![Screenshot of the main search box on GitHub. The drop-down option "Ask Copilot" is highlighted with an orange outline.](/assets/images/help/copilot/ask-copilot-from-search-bar.png)

   The GitHub Copilot Chat panel is displayed and Copilot responds to your request.

1. Optionally, after submitting a question, you can click {% octicon "square-fill" aria-label="Stop" %} in the text box to stop the response.




## Creating and managing saved searches

1. In the top navigation of GitHub, click the search bar and type `saved:`.
1. Under the search bar, in the "Saved queries" section, click **{% octicon "plus-circle" aria-hidden="true" aria-label="plus-circle" %} Manage saved searches**.
1. In the pop-up window, type both the name you want for your saved search and the query you want to save.
1. To finish creating your saved search, click **Create saved search**.
1. To see your saved search, click the search bar. Your saved search will be in the "Saved queries" section. Clicking on a saved search entry will add the query to the search bar and filter the suggestions accordingly.
1. To manage a saved search, type `saved:` in the search bar, then click **{% octicon "plus-circle" aria-hidden="true" aria-label="plus-circle" %} Manage saved searches**.
    * To edit a saved search, to the right of the search, click {% octicon "pencil" aria-label="The pencil icon" %}.
    * To delete a saved search, to the right of the search, click {% octicon "trash" aria-label="The trash icon" %}.

## Using the search results view

To construct a search query, as well as view and filter results, using a visual interface, you can use the [search](https://github.com/search) page or [advanced search](https://github.com/search/advanced) page. If you press Enter after typing a search query in the search bar, you will also be taken to the search results view.

On the search results view, you can navigate between different types of search results, including code, issues, pull request, repositories, and more. You can also view and use filters.

## Using GitHub code search on GitHub Mobile

On GitHub Mobile, you can use code search directly from the search bar in the home screen. Code search on GitHub Mobile uses the same syntax as code search on GitHub. For more information, see [About GitHub Code Search](https://docs.github.com/en/search-github/github-code-search/about-github-code-search#limitations).

Once you start typing a search query, you will see a list of completions and suggestions that match your query. You can click on a suggestion to jump to a specific location. As you type more qualifiers, you will see more specific suggestions, such as code files you can jump to directly.
