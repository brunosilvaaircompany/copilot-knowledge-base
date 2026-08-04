# About searching on GitHub

## About searching on GitHub

You can search globally across all of GitHub, or scope your search to a particular repository or organization.


* To search globally across all of GitHub, type what you're looking for into the search field at the top of any page, and choose "Search all of GitHub" in the search dropdown menu.
* To search within a particular repository or organization, navigate to the repository or organization page, type what you're looking for into the search field at the top of the page, and press **Enter**.

  You can also use suggestions and completions in the search bar to quickly find what you need.

* If you click on the search bar in the top navigation of GitHub.com, you will see a list of suggestions organized by category, including recent searches and suggested repositories, teams, and projects that you have access to.
* Clicking on any of the specific suggestions will take you directly to the page for that suggestion (for example, the repository or project page). If you click on a recent search, depending on the type of search, the search term will appear in the search bar or you will be taken to the search results page for the search term.
* Once you start typing, you will see a list of completions and suggestions that match your query. You can click on a suggestion to jump to a specific location. As you continue to type, you will see more specific suggestions, such as code files you can jump to directly.

After typing a search query, you can press **Enter** to go to the full search results view, where you can see each match and a visual interface for applying filters. For more information, see [Searching using a visual interface](#searching-using-a-visual-interface).


> [!NOTE]
> * You must be signed into a personal account on GitHub to search for code across all public repositories.

> * GitHub Pages sites are not searchable on GitHub. However, you can search the source content if it exists in the default branch of a repository, using code search. For more information, see [Understanding GitHub Code Search Syntax](https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax). For more information about GitHub Pages, see [What Is GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
> * Currently our search doesn't support exact matching.
> * Whenever you are searching in code files, only the first two results in each file will be returned.

After running a search on GitHub, you can sort the results, or further refine them by clicking one of the languages in the sidebar. For more information, see [Sorting Search Results](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/sorting-search-results).

GitHub search uses an ElasticSearch cluster to index projects every time a change is pushed to GitHub. Issues and pull requests are indexed when they are created or modified.

## Types of searches on GitHub

You can search for the following information across all repositories you can access on GitHub.

* [Repositories](/search-github/searching-on-github/searching-for-repositories)
* [Topics](/search-github/searching-on-github/searching-topics)
* [Issues and pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests)
* [Discussions](/search-github/searching-on-github/searching-discussions)
* [Code](/search-github/github-code-search/understanding-github-code-search-syntax)
* [Commits](/search-github/searching-on-github/searching-commits)
* [Users](/search-github/searching-on-github/searching-users)
* [Packages](/search-github/searching-on-github/searching-for-packages)
* [Wikis](/search-github/searching-on-github/searching-wikis)

## Searching using a visual interface

In addition to the search bar, you can search GitHub using the [search](https://github.com/search) page or [advanced search](https://github.com/search/advanced) page. Alternatively, you can use the interactive search in the GitHub Command Palette to search your current location in the UI, a specific user, repository or organization, and globally across all of GitHub, without leaving the keyboard. For more information, see [GitHub Command Palette](https://docs.github.com/en/get-started/accessibility/github-command-palette).

The [advanced search](https://github.com/search/advanced) page provides a visual interface for constructing search queries. You can filter your searches by a variety of factors, such as the number of stars or number of forks a repository has. As you fill in the advanced search fields, your query will automatically be constructed in the top search bar.

![Advanced Search page. Top search bar holds "kittens user:octocat" query. Under "Advanced options", "From these owners" text box holds term "octocat".](/assets/images/help/search/advanced-search.png)

## Searching repositories on GitHub.com from your private enterprise environment

If you use GitHub.com or GHE.com as well as GitHub Enterprise Server, and an enterprise owner has enabled unified search, you can search across both environments at the same time from GitHub Enterprise Server. For more information, see [About Searching On GitHub](https://docs.github.com/en/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) in the GitHub Enterprise Server documentation.{% elsif ghes %}[Enabling Unified Search For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-unified-search-for-your-enterprise).

Your enterprise owner on GitHub Enterprise Server can separately enable unified search for all public repositories on GitHub.com and for private repositories owned by the organization or enterprise on GitHub.com or GHE.com that is connected to GitHub Enterprise Server through GitHub Connect.

Before you can use unified search for private repositories, you must connect your user accounts across environments. For more information, see [Enabling Repository Search Across Environments](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/enabling-repository-search-across-environments).

When you search from GitHub Enterprise Server, only private repositories that you have access to and that are owned by the connected organization or enterprise account will be included in search results. Neither you nor anyone else will be able to search private repositories owned by your user account on GitHub.com or GHE.com from GitHub Enterprise Server.

To limit your search to one environment, you can use a filter option on the {% ifversion fpt or ghec %}[advanced search](https://github.com/search/advanced) page or you can use the `environment:` search prefix. To only search for content on GitHub Enterprise Server, use the search syntax `environment:local`. To only search for content on GitHub.com, use `environment:github`.
{% endif %}

## Further reading

* [Understanding The Search Syntax](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
* [Searching On GitHub](https://docs.github.com/en/search-github/searching-on-github)
