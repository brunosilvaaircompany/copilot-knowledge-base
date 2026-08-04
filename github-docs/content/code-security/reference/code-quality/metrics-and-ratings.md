# Metrics and scores reference

This article provides definitions for the metrics and scores used by Code Quality.

You can see the rule-based results for your repository on your **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab, in the **Standard findings** tab under "{% octicon "code-review" aria-hidden="true" aria-label="code review" %} Code quality".

## Metric definitions

The following table provides definitions for each metric that is reported for your repository.

| Metric         | Definition      | Example findings     |
|----------------|-----------------|----------------------|
| **Reliability**   | Assess whether the code performs its intended function correctly, predictably, and consistently. Reliable code is free from bugs, handles errors safely, and operates as expected under normal and edge-case conditions. | Issues with performance, concurrency, error handling, correctness |
| **Maintainability** | Assess how easy it is to understand, modify, and extend the code over time. Maintainable code follows best practices, avoids unnecessary complexity, and is organized for ease of future changes and collaboration. | Unused/dead code, readability, complexity, conflicting naming, poor separation of concerns |


## Severity levels

Severity levels are used to indicate the potential impact or urgency of a code quality finding. They help users prioritize remediation efforts and communicate risks to stakeholders. Severity is determined by the rule that detected the issue, following conventions from CodeQL and industry standards.

| Severity  | Definition         |
|-----------|--------------------|
| **Error** | Indicates a high-severity issue that is likely to cause bugs, failures, or major maintainability risks. |
| **Warning** | Indicates a moderate-severity issue that may impact code quality or reliability, but is not immediately critical. |
| **Note** | Indicates a low-severity issue, minor improvement, or recommendation. These findings are useful for ongoing code health and maintainability. |


## Scores definitions

These scores are used to summarize the overall reliability and maintainability of a repository based on the severity of rule-based results found by CodeQL scans of the full default branch:

| Scores               | Definition   | Criteria (based on findings)  |
|----------------------|--------------|-------------------------------|
| **Excellent**        | Codebase demonstrates best practices for reliability and maintainability. | No code quality findings detected                              |
| **Good**             | Codebase has low-severity issues or minor improvements are suggested. | ≥1 "Note" level finding       |
| **Fair**             | Codebase has moderate-severity issues that may impact quality, but are not critical. | ≥1 "Warning" level finding              |
| **Poor**             | Codebase has high-severity issues, including bugs or major maintainability risks. | ≥1 "Error" level finding                |

## Code coverage

For details about how Code Quality measures and reports code coverage, see [Code Coverage](https://docs.github.com/en/code-security/reference/code-quality/code-coverage).

## Further reading

* [Code Quality](https://docs.github.com/en/code-security/concepts/code-quality/code-quality)
* [Interpret Results](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/interpret-results)
