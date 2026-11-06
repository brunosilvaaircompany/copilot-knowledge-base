# About GitHub Code Quality

## About GitHub Code Quality

GitHub Code Quality analyzes your code for quality and coverage issues using CodeQL rules and AI-powered analysis.

* On pull requests, findings appear as inline comments with one-click Copilot-powered fixes, so new quality debt doesn't accumulate before code is merged.
* On your default branch, scans surface existing quality debt. You can apply autofixes directly, or delegate remediation to Copilot cloud agent.

You can enforce quality thresholds with rulesets to block pull requests that don't meet your team's standards. To also enforce line coverage thresholds, upload a Cobertura XML coverage report from your tests.

To purchase GitHub Code Quality, see [GitHub Pricing](https://github.com/pricing). For more information, including supported languages, see [Code Quality](https://docs.github.com/en/code-security/concepts/code-quality/code-quality).

## How Code Quality fits with other GitHub products

Code Quality is purchased separately from GitHub Advanced Security and Copilot. It focuses on metrics related to code quality, such as code coverage. GitHub Advanced Security products focus on security, and Copilot code review provides AI-powered feedback on pull requests.

Code Quality enforces deterministic quality and coverage rules that you can use to block merges, while Copilot code review gives broader, conversational AI feedback. Many teams use both: Copilot code review for general review, and Code Quality for enforceable standards.

## Costs to consider

Before purchasing Code Quality, consider these costs:

* A per-active-committer fee for repositories where it's enabled
* GitHub Actions minutes for scans, unless you use self-hosted runners
* GitHub AI Credits for Copilot-powered fixes and AI-powered detections (no Copilot license required)

For more information, see [GitHub Code Quality](https://docs.github.com/en/billing/concepts/product-billing/github-code-quality).

## Next steps

To start using Code Quality, see [Enable Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/enable-code-quality).
