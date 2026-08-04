# Exploring GitHub Code Quality results in your organization

## Prerequisites

* If your organization belongs to an enterprise, an enterprise owner must enable Code Quality for your organization. See [Allow GitHub Code Quality In Enterprise?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Explore Cq Enterprise Enablement](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/allow-github-code-quality-in-enterprise?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-explore-cq-enterprise-enablement).
* Your organization must have repositories with Code Quality enabled. See [Enable Code Quality?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Explore Cq Repo Enablement](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/enable-code-quality?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-explore-cq-repo-enablement).

## Viewing code quality insights for your organization

1. On GitHub, navigate to the main page of your organization. For example, from [https://github.com/settings/organizations](https://github.com/settings/organizations?ref_product=github&ref_type=engagement&ref_style=text&utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-explore-cq-org-settings).
1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the "Insights" section of the sidebar, click {% octicon "code-square" aria-hidden="true" aria-label="code-square" %} **Code quality**.

> [!NOTE]
> What you see on the dashboard depends on your access:
> * Organization owners see data for **every** repository that has Code Quality enabled.
> * All other organization members see data only for repositories where they can view Code Quality findings (the repository-level pages), up to a maximum of 3,000 repositories.

## Interpreting the score distribution chart

The score distribution chart provides a visual overview of the code health of your organization. Each bubble represents a collection of repositories with the same maintainability and reliability scores.
* The **position** of each bubble demonstrates the overall health of those repositories. Higher bubbles represent higher maintainability scores, while bubbles further to the right represent higher reliability scores.
* The **color and border pattern** of a bubble indicate the severity of the lower score for those repositories. For example, a bubble with a "Poor" score in either category will always be red with a dashed border.
* The **size** of each bubble represents the number of repositories with that particular score combination.

To view the maintainability score, reliability score, and number of repositories represented by a particular bubble, hover over the bubble.

## Exploring the repository table

Below the bubble chart, there is a table that lists all repositories in your organization. Here, you can view code quality findings, along with more detailed information about those findings.

You can sort the repository table in ascending or descending order for any column by clicking the column header.

## Investigating low-scoring repositories

1. To filter the dashboard data for the lowest-performing repositories, on the score distribution chart, click the bubble with the lowest combined scores.
1. Scroll down to the repository table. By default, the table is sorted from most to least recent repository scan, helping you prioritize current quality issues.
1. Optionally, to prioritize repositories with the highest number of CodeQL findings, click **Standard Findings** twice.
1. To view the repository-level dashboard for a specific repository, click the repository's name.

## Next steps

To understand the code health information available on the repository-level dashboard, see [Interpret Results](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/interpret-results).
