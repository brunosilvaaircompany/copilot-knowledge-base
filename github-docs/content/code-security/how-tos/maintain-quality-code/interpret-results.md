# Interpreting the code quality results for your repository

## Prerequisites

* Code Quality is enabled, see [Enable Code Quality?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Interpret Results Enable Cq](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/enable-code-quality?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-interpret-results-enable-cq).

## Viewing the full backlog of code quality results

1. Navigate to the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of your repository.

1. Click to expand **{% octicon "code-review" aria-hidden="true" aria-label="code review" %} Code quality**, then click **Standard findings**.


Alternatively, if you want to view AI-powered findings for the most recently changed files, see [Fix Recent Merge Findings](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/fix-recent-merge-findings).

## Exploring the backlog for your repository

The "Standard findings" dashboard shows all the results found by CodeQL analysis on the default branch of your repository. This view helps you visualize the full backlog of quality results and prioritize work to fix specific types of problems.

The overview, at the top of the page, summarizes the maintainability and reliability of the codebase.

![Screenshot of the "Standard findings" dashboard for code quality results. The summary is outlined in dark orange.](/assets/images/help/code-quality/all-findings-overview-repo.png)

Underneath the overview, the full list of results is shown with a header with filters that you can use to focus on a specific set of findings. The results are:

   * Grouped by the rule that detected each finding
   * Within each rule, ordered by file path alphabetically

Explore the results by expanding a rule to list the affected files and clicking on the name of a rule to see full details of the findings.

![Screenshot of the Rules table on the "Standard findings" dashboard for code quality. The "Overwritten property" rule name is outlined in dark orange.](/assets/images/help/code-quality/all-findings-rules-repo.png)

## Interpreting scores and metrics

Code quality results should always be interpreted in the context of your repository. For example:

* Small repositories, or repositories with only a small amount of code written in supported languages, tend to have few results and good scores.
* Repositories with a lot of generated code may have many maintenance results, lowering the score for maintainability. This is not a problem if the source code itself is maintainable.
* Large repositories with a lot of code in a fully supported language often have many results even if the majority of the code has good maintainability and reliability standards.

To learn more about the metrics and how the scores are calculated, see [Metrics And Ratings](https://docs.github.com/en/code-security/reference/code-quality/metrics-and-ratings).
