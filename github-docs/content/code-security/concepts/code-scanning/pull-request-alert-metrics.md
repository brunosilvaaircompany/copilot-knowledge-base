# CodeQL pull request alert metrics

## Overview

The metrics overview for CodeQL pull request alerts on security overview helps you understand how well CodeQL is preventing vulnerabilities in pull requests in your organization or across organizations in your enterprise. You can view the entire dataset or filter for specific criteria, making it easy to identify repositories where you may need to take action to find and reduce security risks.

## Available metrics

The overview shows you a summary of how many vulnerabilities prevented by CodeQL have been caught in pull requests. The metrics are only tracked for pull requests that have been merged into the default branches of repositories in your organizations.

You can also find more granular metrics, such as how many alerts were fixed with and without Copilot Autofix suggestions, how many were unresolved and merged, and how many were dismissed as false positive or risk accepted.

You can also view:

* The rules that are causing the most alerts, and how many alerts each rule is associated with.

* The number of alerts that were merged into the default branch without resolution, and the number of alerts dismissed as an acceptable risk.


* The number of alerts that were fixed with an accepted Copilot Autofix suggestion, displayed as a fraction of how many total Copilot Autofix suggestions were available.

* Remediation rates, in a graph showing the percentage of alerts that were remediated with an available Copilot Autofix suggestion, and the percentage of alerts that were remediated without a Copilot Autofix suggestion.

* Mean time to remediate, in a graph showing the average age of closed alerts that were remediated with an available Copilot Autofix suggestion, and the average age of closed alerts that were remediated without a Copilot Autofix suggestion.



> [!NOTE] Metrics for Copilot Autofix will be shown only for repositories where Copilot Autofix is enabled.


## Visibility

You can see code scanning metrics for a repository if you have:

* The `admin` role for the repository
* A custom repository role with the "View code scanning alerts" fine-grained permissions for the repository
* Access to alerts for the repository

## Next steps

To find your pull request alert metrics, see [Viewing Metrics For Pull Request Alerts](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-metrics-for-pull-request-alerts).
