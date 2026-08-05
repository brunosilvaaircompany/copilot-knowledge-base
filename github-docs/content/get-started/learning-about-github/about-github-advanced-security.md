# About GitHub Advanced Security

## About GitHub Advanced Security products

GitHub has many features that help you improve and maintain the quality of your code. Some of these are included in all plans, such as dependency graph and Dependabot alerts.

Other security features require you to purchase one of GitHub's Advanced Security products:

{% data reusables.advanced-security.ghas-products-bullets+ghas %}

Some of these features, such as code scanning and secret scanning, are enabled for public repositories by default. To run the feature on your private or internal repositories, you must purchase the relevant GitHub Advanced Security product.

You must be on a GitHub Team or GitHub Enterprise plan in order to purchase GitHub Code Security or GitHub Secret Protection. For more information, see [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans) and [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security).

## GitHub Code Security

You get the following features with GitHub Code Security:

* **Code scanning**: Search for potential security vulnerabilities and coding errors in your code using CodeQL or a third-party tool.

* **CodeQL CLI**: Run CodeQL processes locally on software projects or to generate code scanning results for upload to GitHub.

* **Copilot Autofix**: Get automatically generated fixes for code scanning alerts.{% ifversion ai-powered-security-detections %}

* **AI-powered security detections**: Find vulnerabilities in languages and frameworks not covered by CodeQL with an AI-based scanning engine that runs during pull request review.{% endif %}

* **Security campaigns**: Reduce security debt at scale.

* **Custom auto-triage rules for Dependabot**: Manage your Dependabot alerts at scale, by automating which alerts you want to ignore, snooze, or trigger a Dependabot security update for.

* **Dependency review**: Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request.

* **Security overview**: Understand the distribution of risk across your organization.



The table below summarizes the availability of GitHub Code Security features for public and private repositories.

{% rowheaders %}

| | Public repository <br>without GitHub Code Security | Private repository <br>without GitHub Code Security | Public or private repository <br>with GitHub Code Security |
| --- | --- | --- | --- |
| Code scanning | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| CodeQL CLI | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% ifversion code-scanning-autofix %}|
| Copilot Autofix | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
||
||
| Security campaigns | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
||
| Custom auto-triage rules | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Dependency review | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Security overview | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
{% endrowheaders %}

{% endif %}

For more information about features, see [GitHub Security Features](https://docs.github.com/en/code-security/getting-started/github-security-features).

## GitHub Secret Protection

You get the following features with GitHub Secret Protection:

* **Secret scanning**: Detect secrets, for example keys and tokens, that have been checked into a repository and receive alerts.
* **Push protection**: Prevent secret leaks before they happen by blocking commits containing secrets.
* **AI-detected secrets**: Leverage AI to detect unstructured credentials, such as passwords, that have been checked into a repository.
* **Custom patterns**: Detect and prevent leaks for organization-specific secrets.
* **Delegated bypass for push protection** and **Delegated alert dismissal**:  Implement an approval process for better control over who in your enterprise can perform sensitive actions, supporting governance at scale.
* **Security campaigns**: Remediate exposed secrets at scale by creating a campaign and collaborating to fix them.
* **Security overview**: Understand the distribution of risk across your organization.




The table below summarizes the availability of GitHub Secret Protection features for public and private repositories.

{% rowheaders %}

| | Public repository <br>without GitHub Secret Protection | Private repository <br>without GitHub Secret Protection | Public or private repository <br>with GitHub Secret Protection |
| --- | --- | --- | --- |
| Secret scanning   | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Push protection   | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% ifversion secret-scanning-ai-generic-secret-detection %}|
| AI-detected secrets  | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
||
| Custom patterns   | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Delegated bypass for push protection    | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
||
| Security campaigns | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
||
| Security overview   | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |

{% endrowheaders %}

{% endif %}

For more information about individual features, see [GitHub Security Features](https://docs.github.com/en/code-security/getting-started/github-security-features).

## Run a free security risk assessment

<a href="https://github.com/get_started?with=risk-assessment&ref_product=code-scanning&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started with security risk assessments</span> {% octicon "link-external" height:16 %}</a>

Organizations on GitHub Team and GitHub Enterprise can run free security risk assessments to understand their exposure to security vulnerabilities:


* **Secret leaks**: Scan your organization for leaked secrets and see how many could have been prevented by GitHub Secret Protection. See [Secret Security With GitHub](https://docs.github.com/en/code-security/concepts/secret-security/secret-security-with-github#secret-risk-assessment).


* **Code vulnerabilities**: Scan up to 20 of your most active repositories and see how many vulnerabilities could be automatically fixed with Copilot Autofix if you enable GitHub Code Security. See [Risk Assessment](https://docs.github.com/en/code-security/concepts/code-scanning/risk-assessment).


## Deploying GitHub Code Security and GitHub Secret Protection

To learn about what you need to know to plan your deployment of GitHub Code Security and GitHub Secret Protection at a high level and to review the rollout phases we recommended, see [Adopting GitHub Advanced Security At Scale](https://docs.github.com/en/code-security/tutorials/adopting-github-advanced-security-at-scale).

## Enabling features

You can quickly enable security features at scale with a security configuration, a collection of security enablement settings you can apply to repositories in an organization. You can customize Advanced Security features at the organization level with global settings. See [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security).


If you are on a GitHub Team or GitHub Enterprise plan, license use for the entire team or enterprise is shown on your license page. See [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use).



## Managing GitHub Advanced Security

Enterprise owners can manage GitHub Advanced Security licensing and access for their enterprise, including disabling GitHub Advanced Security across all repositories and preventing future re-enablement. See [Manage Ghas Licenses](https://docs.github.com/en/billing/how-tos/products/manage-ghas-licenses#disabling-github-advanced-security-in-an-enterprise).

For information about managing your GitHub Advanced Security license, see [Managing Your GitHub Advanced Security License Usage](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/managing-your-github-advanced-security-license-usage).





## Leveraging GitHub Copilot Chat to understand security alerts

Additionally, with a GitHub Copilot Enterprise license, you can ask GitHub Copilot Chat for help to better understand security alerts in repositories in your organization (code scanning, secret scanning, and Dependabot alerts). See [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#asking-questions-about-alerts-from-github-advanced-security-features).




## About GitHub Advanced Security Certification

You can highlight your knowledge by earning a GitHub Advanced Security certificate with GitHub Certifications. The certification validates your expertise in vulnerability identification, workflow security, and robust security implementation. See [About GitHub Certifications](https://docs.github.com/en/get-started/showcase-your-expertise-with-github-certifications/about-github-certifications).



## About GitHub Advanced Security with Azure Repos

If you want to use GitHub Advanced Security with Azure Repos, see [GitHub Advanced Security & Azure DevOps](https://resources.github.com/topics/github-advanced-security/) in our resources site. For documentation, see [Configure GitHub Advanced Security for Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features) in Microsoft Learn.

## Further reading

* [GitHub Security Features](https://docs.github.com/en/code-security/getting-started/github-security-features)
* [GitHub public roadmap](https://github.com/github/roadmap)
* [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)
