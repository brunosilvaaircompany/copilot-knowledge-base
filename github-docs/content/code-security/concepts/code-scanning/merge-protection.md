# Code scanning merge protection

## Rulesets for code scanning merge protection

A ruleset is a named list of rules that control how people can interact with branches and tags in your repositories. You can add code scanning rules to rulesets to prevent pull requests from being merged when any of the following conditions are met:

* A required tool finds a code scanning alert of a severity that is defined in the ruleset.
* A required tool's analysis is still in progress.
* A required tool is not configured for the repository.


Typically, you should use code scanning merge protection on long-lived feature branches, where you want to guarantee code has been analyzed before pull requests can be merged.

Configuring a code scanning rule will not automatically enable code scanning. To learn how to enable code scanning, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).

> [!NOTE]
> * Merge protection with rulesets is not related to status checks. For more information about status checks, see [About Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

## Availability

You can set code scanning merge protection with rulesets:
* At the repository level
* At the organization level (GitHub Enterprise plans only)

## Exceptions and limitations

Merge protection with rulesets will **not apply** to:
* Merge queue groups
* Dependabot pull requests analyzed by default setup

Additionally, all the lines of code identified by an alert must exist in the pull request diff. For more information, see [Sarif Support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support#source-file-locations).

## Next steps

To configure a ruleset that requires code scanning results, see [Set Merge Protection](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/set-merge-protection).
