# GitHub Code Quality

GitHub Code Quality analyzes your code for quality and coverage issues and delivers Copilot-powered fixes you can apply in one click. It runs in two places:

* **On pull requests**, Code Quality uses deterministic CodeQL rules to detect known anti-patterns and posts findings as inline comments before code is merged. If you upload a Cobertura XML coverage report, coverage metrics show whether a change maintains or reduces coverage. You can enforce quality and coverage thresholds with rulesets to block pull requests that don't meet your criteria, so new quality debt doesn't accumulate.
* **On the default branch**, rules-based scans identify existing quality debt across your codebase, with autofixes you can apply directly or assign to Copilot cloud agent to resolve on your behalf. AI-powered analysis also runs on recently changed files, flagging issues that fall outside existing rule sets, including languages not yet covered by CodeQL queries.

> [!NOTE]
> On pull requests, Code Quality posts rules-based CodeQL findings only. If you also want AI-powered reviews of your pull requests, you can enable GitHub Copilot code review separately. See [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review).

## Use cases

Here's what GitHub Code Quality looks like in practice.

For developers and teams:

* **A developer opens a pull request** that introduces a reliability or maintainability issue. Code Quality posts a comment explaining the issue and offers a one-click fix before the code is merged. The developer also sees a report of coverage metrics, and can tell at a glance whether the pull request improves or reduces coverage compared to the default branch.
* **A team inherits a large codebase** with years of accumulated quality debt. Code Quality scans the default branch, surfaces findings with autofixes on a dashboard, and the team assigns remediation work to Copilot cloud agent to open fix pull requests automatically.
* **A team adopts AI coding assistants** and needs assurance that generated code meets the same bar as hand-written code. AI-powered analysis catches issues in recently changed files that rule-based queries weren't written for, while CodeQL rules cover well-defined anti-patterns.

For administrators and leads:

* **An engineering lead sets coverage and quality thresholds** using rulesets. Pull requests that don't meet the criteria are blocked from merging, so no new quality or coverage debt accumulates.
* **An administrator needs visibility across repositories** for audits or compliance reporting. Code Quality reports through the security overview alongside security tools, so they can see quality posture across the organization at a glance, identify which repositories need attention, and track improvement metrics using standard GitHub audit controls and policies.

## Availability and billing

Usage costs are determined by:

* A per-seat license fee based on active committers.
* Copilot-powered autofixes for findings in pull requests and on the default branch, alongside AI-powered detections on recently merged code, which consume GitHub AI Credits (no Copilot license required).
* GitHub Actions minutes for deterministic CodeQL scans, if you don't use self-hosted runners.

Optional features, such as delegating code quality remediation work to Copilot, require a Copilot license.

For more information, see [GitHub Code Quality](https://docs.github.com/en/billing/concepts/product-billing/github-code-quality).

## Supported languages

Code Quality performs rule-based analysis of the following languages using CodeQL:

* C#
* Go
* Java
* JavaScript
* Python
* Ruby
* TypeScript


Code Quality also performs AI-powered analysis on your repository's recently changed code, including languages beyond those supported by rule-based queries.

## Next steps

* Learn how to fix code quality findings on your pull request. See [Catch Issues Before Merge?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Cq Intro Fix On Pr](https://docs.github.com/en/code-security/tutorials/improve-code-quality/catch-issues-before-merge?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-cq-intro-fix-on-pr).
