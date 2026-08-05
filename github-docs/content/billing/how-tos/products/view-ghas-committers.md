# Viewing committer information for Advanced Security licenses

## About the "Advanced Security Committers" dashboard

You can estimate the number of licenses your enterprise might need for GitHub Secret Protection and GitHub Code Security with the "Advanced Security Committers" section of the site admin dashboard.

If you currently use Secret Protection or Code Security, this tool helps you understand how many committers are currently using licenses. It also helps you estimate how many additional licenses would be used if you enable Secret Protection or Code Security for more organizations and repositories.

If you're considering using Secret Protection or Code Security, you can use this tool to estimate potential costs to enable Secret Protection or Code Security.

For more information about billing for Advanced Security, see [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security).

## Viewing committer information

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %} to display the "Site admin" pages.
1. In the left sidebar, click **Advanced Security Committers**. If this option is not displayed, at the top of the page, click {% octicon "rocket" aria-hidden="true" aria-label="Site admin" %} **Site admin** to show the top-level "Site admin" page.


The page shows the number of licenses currently being used and the number of licenses you would use if you enabled Advanced Security for all repositories.

## Calculating the cost to add committers

Under "Calculate Additional Advanced Licenses", you can calculate how many more new or additional licenses will be used if you enable Secret Protection or Code Security for specific organizations and repositories.

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %} to display the "Site admin" pages.
1. In the left sidebar, click **Advanced Security Committers**. If this option is not displayed, at the top of the page, click {% octicon "rocket" aria-hidden="true" aria-label="Site admin" %} **Site admin** to show the top-level "Site admin" page.

1. Under "Organizations and Repositories", enter or paste a list of organizations and repositories, with one organization or repository per line. For example:

   ```text
   example-org
   octo-org/octo-repo
   ```

1. Click **Recalculate**.
