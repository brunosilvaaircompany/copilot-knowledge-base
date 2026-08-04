# Enabling unified search for your enterprise

## About unified search

When you enable unified search, users can view search results from content on GitHub.com or GHE.com when searching from your GitHub Enterprise Server instance.

You can choose to allow search results for public repositories on GitHub.com, and you can separately choose to allow search results for private repositories on GitHub Enterprise Cloud. If you enable unified search for private repositories, users can only search private repositories that they have access to and that are owned by the connected enterprise account. For more information, see [About Searching On GitHub](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-across-github-enterprise-and-githubcom-simultaneously).

Users will never be able to search your GitHub Enterprise Server instance from GitHub Enterprise Cloud, even if they have access to both environments.

After you enable unified search for your GitHub Enterprise Server instance, before individual users can see search results from private repositories on GitHub Enterprise Cloud in your GitHub Enterprise Server instance, each user must also connect their user account on GitHub Enterprise Server with a user account on GitHub Enterprise Cloud. For more information, see [Enabling Repository Search Across Environments](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/enabling-repository-search-across-environments).

Searching via the REST and GraphQL APIs does not include GitHub Enterprise Cloud search results. Advanced search and searching for wikis in GitHub Enterprise Cloud are not supported.

## Enabling unified search

Before you can enable unified search, you must enable GitHub Connect. See [Enabling GitHub Connect For Ghecom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom) or [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).

1. Sign in to GitHub Enterprise Server and GitHub Enterprise Cloud.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the left sidebar, click **Enterprise overview**.

1. At the top of the page, click **{% octicon "plug" aria-hidden="true" aria-label="plug" %} GitHub Connect**.

1. To the right of "Unified search", click **Enable**.

   ![Screenshot of the "Unified search" for public repositories option. The "Enable" button is outlined in orange.](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. Optionally, to the right of "Users can search private repositories on ENTERPRISE ACCOUNT when searching from Enterprise Server", click **Enable**.

   ![Screenshot of the "Unified search" option for private repositories. To the right of the setting, the "Enable" button is outlined in orange.](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
