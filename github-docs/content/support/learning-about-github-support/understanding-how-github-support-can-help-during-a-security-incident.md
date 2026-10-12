# Understanding how GitHub Support can help during a security incident

## About security incidents

A security incident is an event that could compromise your enterprise's accounts, code, or other data. Examples include compromised accounts, leaked credentials, unexpected access, or unauthorized changes.

Investigating and responding to an incident is self-service. Before an incident occurs, enable enterprise audit log streaming, API request event streaming, and source IP address disclosure. Retain the logs in storage that your incident responders can access.

> [!IMPORTANT]
> Audit log streaming only includes activity from the time you enable it. Enabling it during an incident will not recover earlier activity.


For guidance on preparing for and responding to an incident, see:

* [Prepare For A Security Incident](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prepare-for-a-security-incident)
* [Respond To A Security Incident](https://docs.github.com/en/code-security/tutorials/secure-your-organization/respond-to-a-security-incident)

## How GitHub Support can help

> [!IMPORTANT]
> When an incident occurs, follow your incident response procedures immediately. Focus first on containing the threat with actions appropriate to the incident, such as restricting access and revoking or rotating compromised credentials.
>
> For enterprise-level containment options, see [Lock Down Sso](https://docs.github.com/en/admin/managing-iam/respond-to-incidents/lock-down-sso) and [Revoke Authorizations Or Tokens](https://docs.github.com/en/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).

GitHub Support can answer questions about GitHub's features and the data available to you, so you can investigate and analyze the activity yourself. GitHub Support does not investigate or analyze on your behalf.

If you need guidance using these features or want to request a feature, see [Creating A Support Ticket](https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket).

GitHub Support handles all security-related matters in writing through support tickets.

### No managed incident response service

GitHub Support does not join or lead your incident response process. To investigate and contain a threat, use GitHub's audit log, security, and access-management tools.

### No revert or point-in-time restore

GitHub Support cannot revert changes, restore deleted data, or roll a branch or repository back to a point in time before an incident. Recovering your data is [outside the scope of Support](/support/learning-about-github-support/about-github-support#scope-of-support). 

To review changes made to a repository, use the activity view. You can see a detailed history of changes, such as pushes, merges, force pushes, and branch changes, and associates these changes with commits and authenticated users. See [Using The Activity View To See Changes To A Repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/using-the-activity-view-to-see-changes-to-a-repository).

### No log preservation

GitHub Support cannot fulfill requests to preserve logs or audit data, extend their retention periods, or place them on hold for your investigation. Opening a support ticket does not change how long data remains available. To retain data for an investigation, export it while it is available or configure audit log streaming in advance to storage you control.

## Further reading

* [Full exposure: a practical approach to handling sensitive data leaks](https://github.blog/security/full-exposure-a-practical-approach-to-handling-sensitive-data-leaks/) in the GitHub blog
* [GitHub Enterprise Cloud Trust Center](https://ghec.github.trust.page/) for GitHub's security, privacy, and compliance information
* [GitHub security blog](https://github.blog/security/) for security research, announcements, and best practices from GitHub
* [GitHub Bug Bounty](https://bounty.github.com/) to report a security vulnerability you find in a GitHub product
