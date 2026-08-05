# Code scanning alert tracking using issues

> [!NOTE]
> Code scanning alert tracking using GitHub issues is currently in public preview and subject to change.




> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).
>
> You may not be able to enable or disable code scanning if an enterprise owner has set a GitHub Code Security policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).




## How alert-to-issue linking works

When code scanning identifies a vulnerability in your code, you can link the alert to a GitHub **issue** to track remediation work. This brings security fixes into your existing planning and project management workflow, making vulnerabilities visible in sprint planning, project boards, and team backlogs.

Each alert can link to a single issue, while each issue can track up to 50 different alerts. This flexibility lets you group related vulnerabilities or track them individually, depending on your team's workflow.

You can link alerts to issues in any repository where you have access and GitHub Issues is enabled, not just the repository where the alert was found. This is useful when you track work in a central repository or use a separate issue tracker for security fixes.

## Understanding synchronization behavior

**Alert and issue statuses are not automatically synchronized.** Changes you make to an alert do not update the linked issue, and vice versa. This means:

* When you fix the vulnerability and the alert automatically closes, the linked issue remains open until you manually close it.
* When you close or reopen an issue, the alert status stays unchanged.
* When you delete an issue, the link is removed from the alert page and alert list, but the alert itself remains open.

## Best practices for managing linked alerts and issues

**Track remediation progress clearly.** When you commit a fix, add a comment to the linked issue noting that the code is updated. After the next code scanning run confirms the alert is closed, manually close the issue.

**Use labels to show status.** Create issue labels like "code-fixed-awaiting-scan" or use project fields to indicate when a vulnerability is fixed but the issue is waiting for final verification and closure.

**Assign responsibility.** Use issue assignees to make it clear who owns the remediation work, especially when security and development teams need to coordinate.
