# Using submodules with GitHub Pages

If the repository for your GitHub Pages site contains submodules, their contents will automatically be pulled in when your site is built.

You can only use submodules that point to public repositories, because the GitHub Pages server cannot access private repositories.

Use the `https://` read-only URL for your submodules, including nested submodules. You can make this change in your `.gitmodules` file.

## Further reading

* [Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) from the _Pro Git_ book
* [Troubleshooting Jekyll Build Errors For GitHub Pages Sites](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)
