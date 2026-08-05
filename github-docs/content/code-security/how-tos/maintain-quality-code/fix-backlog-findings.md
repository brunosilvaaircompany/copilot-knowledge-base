# Fixing code quality findings in your repository backlog

> [!TIP]
> If you're new to Code Quality, see [Raise Your Quality Rating?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Fix Backlog Walkthrough Tip](https://docs.github.com/en/code-security/tutorials/improve-code-quality/raise-your-quality-rating?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-backlog-walkthrough-tip) for a guided walkthrough of reviewing and improving your repository's quality scores.

## How Code Quality works on your default branch

Code Quality scans your default branch and reports findings on "Code quality" pages on the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of your repository. It runs **two types of analysis**.

1. **Standard findings**: Code Quality uses CodeQL to perform a deterministic, rules-based scan of your default branch. Finding are grouped by rule and language, labeled by severity (**Error**, **Warning**, **Note**), and each includes a suggested autofix.

 1. **AI findings**: Code Quality uses AI-powered analysis to identify quality issues in the files most recently pushed to your default branch, including issues that rule-based analysis may not detect - such as best practices, naming conventions, or design considerations.

 > [!NOTE] 
> The "AI findings" page for recently changed files is currently in public preview and subject to change.


 For information on resolving AI findings, see [Fix Findings In Recent Merges](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/fix-findings-in-recent-merges).

## Resolving a standard finding

1. Navigate to the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of your repository.

1. Click to expand **{% octicon "code-review" aria-hidden="true" aria-label="code review" %} Code quality**, then click **Standard findings**.

1. Use the dashboard filters to focus on the findings most likely to affect your quality scores. For example, to see all "Error"-level findings for "Reliability", set the filter to:
   
   `is:open category:reliability severity:error`
1. Findings are grouped by rule. Click a rule name to be taken to a detailed view of all findings for that rule.

   ![Screenshot showing a rule in the "Standard findings" view. The rule name is highlighted in dark orange.](/assets/images/help/code-quality/click-rule-name.png)

1. Click **Show more**, then review the explanation of the rule, what the recommended fix is, supporting code examples and references.

   ![Screenshot showing the results for a code quality rule. The text "Show more" is highlighted in dark orange.](/assets/images/help/code-quality/click-show-more.png)
1. To the right of an individual finding, click **Generate fix**.
1. Review the diff of the proposed change. If you agree with it, click **Open pull request**.
1. In the "Commit autofix to branch" dialog, select "Open a pull request", then click **Commit change**.

1. When the autofix pull request is ready for review, change its status from "Draft" to "Ready for review", and wait for CI checks to pass before merging.
1. Alternatively, if a finding isn't relevant or actionable, click **Dismiss**. For example, you might dismiss a finding that is in legacy code no longer maintained, is a known exception to your team's coding standards, or is a false positive that doesn't pose a real quality risk.

To raise a maintainability or reliability score, you must resolve every finding at the highest severity level currently affecting that metric. See [Metrics And Ratings](https://docs.github.com/en/code-security/reference/code-quality/metrics-and-ratings).

## Verifying that your code quality scores have updated

After your autofix pull requests are merged, return to the "Standard findings" view to confirm that:

* The number of findings has decreased.
* The maintainability or reliability score has improved, if you resolved all findings at the current minimum severity level for that metric.

## Next steps

* [Fix Findings In Recent Merges](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/fix-findings-in-recent-merges)
