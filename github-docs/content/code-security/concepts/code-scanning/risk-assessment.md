# Code security risk assessment

The code security risk assessment is a free, self-serve scan that helps you understand your organization's exposure to code vulnerabilities. The assessment scans up to 20 of your organization's repositories and produces a report showing the vulnerabilities found, their severity, and how many can be fixed with Copilot Autofix.

The assessment is completely free. You won't be charged for any GitHub Code Security licenses, and the GitHub Actions minutes used during the scan are provided at no cost.

## Who can run the assessment

**Organization owners** and **security managers** can run the code security risk assessment for organizations on GitHub Team or GitHub Enterprise Cloud plans.

## What the assessment scans

By default, the assessment pre-selects up to 20 of your organization's private and internal repositories based on commit activity in the last 90 days. You can change this selection before running the scan. Only repositories containing at least one language supported by code scanning can be selected.

Scans have a one-hour timeout. If all languages in a repository fail to scan, that repository is counted as failed. If at least one language scans successfully, the repository's results are included in the report.

You can rerun the assessment every 90 days. For each rerun, you can change which repositories are scanned.

## Relationship to the secret risk assessment

GitHub offers two free security risk assessments for organizations: the code security risk assessment and the secret risk assessment. The two assessments run independently and their results are displayed in separate tabs in the Assessments view. Each assessment can be rerun every 90 days.

For more information about the secret risk assessment, see [Secret Security With GitHub](https://docs.github.com/en/code-security/concepts/secret-security/secret-security-with-github#secret-risk-assessment).

## Next steps

To generate a code security risk assessment for your organization, see [Assess Your Vulnerability Risk](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-vulnerability-risk).
