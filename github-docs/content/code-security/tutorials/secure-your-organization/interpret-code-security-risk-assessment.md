# Interpreting code security risk assessment results

## Introduction

In this tutorial, you'll interpret your code security risk assessment results, and learn how to:

* Understand risk metrics on the dashboard
* Identify which repositories and languages are most affected
* Prioritize vulnerabilities for remediation

## Prerequisites

You must generate a code security risk assessment report and wait for the scan to complete. See [Assess Your Vulnerability Risk](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-vulnerability-risk).

## Step 1: Understand your dashboard metrics

Once your assessment completes, review the key metrics at the top of the dashboard:

* **Total repositories scanned**: The number of repositories that were successfully scanned out of those selected.
* **Total vulnerabilities found**: The total number of vulnerabilities found across all scanned repositories.
* **Copilot Autofix**: The number of vulnerabilities that are eligible for Copilot Autofix. Enabling GitHub Code Security gives you access to Copilot Autofix, which can automatically suggest fixes for these alerts.

## Step 2: Review vulnerabilities by language

Look at the **Vulnerabilities by language** chart to understand which languages in your codebase are contributing most to your overall vulnerability count.

If vulnerabilities are concentrated in a particular language, this may indicate:

* Specific frameworks or patterns in use that introduce common weaknesses
* Teams working in that language who may benefit from targeted secure coding guidance

## Step 3: Identify the most affected repositories

In the **Repositories scanned** table, you can see each scanned repository alongside the ratio of vulnerabilities eligible for Copilot Autofix out of the total vulnerabilities found.

The **Most vulnerable repository** metric at the top of the page highlights the repository with the highest vulnerability count. This is a good place to start when prioritizing remediation.

If a **high percentage** of repositories contain vulnerabilities, this may indicate:

* Widespread gaps in secure coding practices across teams
* A need for organization-wide tooling and guardrails like code scanning

If only a **few** repositories contain vulnerabilities, you can focus remediation efforts on specific teams or codebases.

## Step 4: Review rules detected

Scroll to the **Rules detected** table to see a breakdown of vulnerabilities by rule, including:

* **Rule**: The specific class of security issue detected
* **Rule severity**: The severity level (critical, high, medium, or low)
* **Distinct repositories**: How many different repositories contain this rule violation
* **Vulnerabilities found**: The total count of this rule violation across all repositories

The table sorts by vulnerability count by default, helping you identify the most prevalent issues. Pay particular attention to rules with a **Critical** or **High** severity that appear across multiple repositories, as these represent the greatest risk.

## Step 5: Prioritize remediation

Now that you understand the metrics, prioritize remediation based on risk.

The highest priority vulnerabilities are **critical and high severity rules that appear across multiple repositories**, because they:

* Represent the greatest potential impact if exploited
* Are present in code your teams are actively working on

Next, address vulnerabilities that present lower risk or require more effort to remediate:

* **Medium and low severity issues**, which may still pose risk but are less immediately critical
* **Rules appearing in only one repository**, which represent more contained exposure

Also look for the following indicators, which may require broader intervention beyond individual fixes:

* **Many repositories affected by the same rule**: Suggests a systemic pattern that may require team training or updated coding standards
* **High vulnerability counts in a specific language**: May point to framework-level issues or missing scanning tooling for that language

Remediating the vulnerabilities or leaks identified by the risk assessment is easier with  GitHub Advanced Security. Eligible enterprise administrators can start a trial for their entire enterprise straight from the results page.

To start remediating vulnerabilities with Copilot Autofix, enable GitHub Code Security for your organization. You have two options:

* To enable GitHub Code Security for an individual repository, click **Enable** next to a repository in the "Repositories scanned" table.
* To enable GitHub Code Security across your organization, click **Enable Code Security** at the top of the page. Here, you can choose whether to enable it for all repositories or selected repositories, then review the estimated cost before confirming.
