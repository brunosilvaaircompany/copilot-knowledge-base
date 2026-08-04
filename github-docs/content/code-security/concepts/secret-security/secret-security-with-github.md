# Secret security with GitHub

Hardcoded credentials in your repositories can lead to credential leaks, unauthorized access, data breaches, and significant costs to your organization. For details about these risks and how to protect against them, see [Secret Leakage Risks](https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks).

GitHub provides tools to help you understand and address your organization's exposure to leaked secrets:

- **Secret risk assessment**: A free, on-demand scan that reveals your organization's current exposure to leaked secrets.
- **GitHub Secret Protection**: A comprehensive suite of features that detects existing secrets and prevents new leaks across your repositories.

## Secret risk assessment

The secret risk assessment provides organization owners and security managers with a free point-in-time scan of their organization's repositories to identify hardcoded credentials like API keys, tokens, and passwords, and understand the extent of secret sprawl across your organization.

[<span class="btn btn-primary mt-3 mr-3 no-underline">Run a security risk assessment</span>](https://github.com/get_started?with=risk-assessment)

### What the assessment shows

The assessment report includes:

- **Total secrets detected**: The aggregate count of exposed secrets in your organization.
- **Public leaks**: Secrets found in public repositories that are accessible to anyone.
- **Preventable leaks**: Secrets that could have been blocked with push protection enabled.
- **Secret categories**: The distribution of secret types (such as AWS keys, GitHub tokens, or AI-detected secrets).

### Why assess your risk

Regular assessment helps prevent:
* Unauthorized access to your systems and data
* Service disruptions from compromised credentials
* Regulatory compliance issues
* Financial loss from resource misuse
* Reputational damage from security incidents

## GitHub Secret Protection

GitHub Secret Protection is a GitHub Advanced Security product containing a suite of features designed to prevent, detect, and assist in remediating secret leaks in your organization.

While the secret risk assessment provides a point-in-time view of your organization's current secret exposure, GitHub Secret Protection:

* **Implements continuous monitoring** and expands scanned surfaces beyond code to include pull requests, issues, wikis, and discussions
* **Prevents credential leaks** by blocking commits containing hardcoded secrets before they are saved to GitHub
* **Creates actionable alerts** that can be grouped into campaigns and assigned to team members for remediation
* **Meets your specific needs** by scanning for patterns unique to your organization and unstructured secrets like passwords
* **Supports governance at scale** with settings dictating who can bypass protections and dismiss alerts
* **Surfaces key analytics** through a view dedicated to your organization's secret security

Through these features, GitHub Secret Protection provides complete coverage for your organization, reducing the risk of costly credential leaks, secret sprawl, and high-effort remediation.

For more information about the specific features of GitHub Secret Protection, see [GitHub Security Features](https://docs.github.com/en/code-security/getting-started/github-security-features#available-with-github-secret-protection).

## Next steps

Now that you know how GitHub can help keep your secrets safe, you should assess your organization's current exposure to leaked secrets. See [Assess Your Secret Risk](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk).
