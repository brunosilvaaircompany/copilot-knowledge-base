GitHub provides two separate autofix experiences for code scanning alerts: agentic autofix and Copilot Autofix. Both use large language models (LLMs), data from the codebase, and code scanning analysis to generate potential code changes and explanations. However, they have different workflows, results, access requirements, and usage.

## What are the two types of autofix?

Agentic Autofix and Copilot Autofix solve different problems:

* Use agentic autofix when you want Copilot to investigate and fix one or more alerts for you, end to end.
* Use Copilot Autofix when you want a single suggested code change for one alert that you review and apply yourself.

With agentic autofix, you assign one or more alerts to Copilot. It explores the codebase, generates a fix, and validates the changes. Then it opens a draft pull request containing the proposed fix.

With Copilot Autofix, GitHub generates a single suggested code change for one supported alert. You can use this suggestion to create a pull request yourself.

## Where is autofix available?

Access to the two features works differently. For agentic autofix on an organization-owned repository, an organization owner or security manager must enable it. If the organization belongs to an enterprise, an enterprise owner or security manager must also allow it. Organization enablement turns it on for eligible repositories by default, but a repository administrator can opt out, or re-enable it when higher-level settings permit.

For an eligible public repository owned by a personal account, a repository administrator can enable agentic autofix directly. You don't need a Copilot license to use agentic autofix, but it isn't available for repositories owned by Enterprise Managed Users. See [Managing Access To Agentic Autofix For Code Scanning](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning) for details.

Copilot Autofix, by contrast, is enabled by default for any repository that uses CodeQL, unless an administrator disables it. It's available to all public repositories on GitHub.com. It's also available to internal or private repositories owned by organizations and enterprises that have a license for GitHub Code Security. Unlike agentic autofix, Copilot Autofix is available for repositories owned by Enterprise Managed Users.

## Choosing an autofix type

Usage costs also factor into which feature to use. Each agentic autofix agent session consumes AI credits and GitHub Actions minutes, while Copilot Autofix suggested fixes don't consume AI credits.

If agentic autofix isn't enabled for a repository, you can still use Copilot Autofix to generate suggested fixes for supported alerts.

## Using agentic autofix

Use agentic autofix when you want Copilot to investigate one or more alerts and prepare a draft pull request. You can assign agentic autofix alerts from the repository backlog or a security campaign. Each assignment starts an agent session. The session explores the codebase beyond the affected file, then generates and validates a fix. It opens a pull request with the changes. See [Resolve Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts#fixing-alerts-with-copilot).

Keep the following in mind:

* For details on enabling agentic autofix at the organization, enterprise, or repository level, see [Managing Access To Agentic Autofix For Code Scanning](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning).
* Agentic Autofix consumes Code Security AI Credits and GitHub Actions minutes. See [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed).
* Copilot uses the custom instructions that apply when it generates a fix. See [Add Custom Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions).
* Agentic Autofix works on a best-effort basis. Copilot validates fixes by re-running CodeQL with the code scanning query suite. It can't confirm fixes for alerts from custom CodeQL queries, the `security-extended` CodeQL query suite, or code scanning alerts from third-party tools.

Always review and test the generated changes before you merge the pull request.

## Using Copilot Autofix

Copilot Autofix works the same way whether a repository uses default or advanced setup for code scanning. There is no separate step to enable it: enabling code scanning with CodeQL is sufficient. See [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).

Copilot Autofix is also an integral part of GitHub Code Quality, and continues to run on code quality results even when it's disabled for code scanning results.

Administrators at the enterprise, organization, and repository levels can disable Copilot Autofix. Settings cascade downward: if an enterprise owner disallows the feature, no organization or repository in that enterprise can enable it, and if an organization owner disables it, no repository in that organization can re-enable it. To restore the feature at a given level, an administrator at that level, or a level above, must reverse the setting. To learn how to manage Copilot Autofix at each level, see [Disabling Copilot Autofix For Code Scanning](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-copilot-autofix-for-code-scanning).
