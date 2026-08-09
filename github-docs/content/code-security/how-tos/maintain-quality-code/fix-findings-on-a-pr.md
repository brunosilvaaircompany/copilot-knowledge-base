# Fixing code quality findings on a pull request

> [!TIP]
> If you're new to Code Quality, see [Catch Issues Before Merge?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Fix Pr Findings Walkthrough Tip](https://docs.github.com/en/code-security/tutorials/improve-code-quality/catch-issues-before-merge?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-pr-findings-walkthrough-tip) for a guided walkthrough of how Code Quality works on pull requests.

## How Code Quality works on pull requests

When you open a pull request, Code Quality uses CodeQL to perform a rule-based scan of your changes and posts findings as comments by `github-code-quality[bot]`. Each finding includes a suggested autofix. Findings are labeled by severity (**Error**, **Warning**, **Note**), and administrators can set quality gates to block merges based on the severity of these findings.

## Resolving a finding

1. On GitHub, navigate to your open pull request.
1. On the **Files Changed** tab, scroll to a comment left by **`github-code-quality[bot]`**.
1. Carefully review the comment and the suggested autofix for logic, security, and style.

1. If you agree with the suggestion and you want to apply the fix, click **Commit suggestion**, or **Add suggestion to batch**.

1. Alternatively, if the finding isn't relevant or actionable, you can dismiss it by clicking **Dismiss finding**. For example, you might dismiss a finding that is in legacy code no longer maintained, is a known exception to your team's coding standards, or is a false positive that doesn't pose a real quality risk.

## Delegating remediation work to Copilot

If you have a Copilot license, you can delegate the remediation work to Copilot cloud agent. Comment on the pull request mentioning `@Copilot` and request that Copilot fix the detected issues.

![Screenshot showing a PR comment that invoked Copilot cloud agent.](/assets/images/help/code-quality/invoke-cloud-agent.png)

Copilot responds with an eyes emoji (👀) to your comment, starts a new agent session, and opens a pull request with the necessary fixes.

You can track Copilot cloud agent's work:

* In the pull request, the summary is updated as work progresses.
* Using the [agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text) or session logs, see [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).

You need a Copilot license to invoke Copilot cloud agent.
<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-findings-pr-copilot-signup" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for Copilot</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>


## Next steps

* [View Coverage On Prs](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/view-coverage-on-prs)
