# About ticket priority

## About ticket priorities

When you contact GitHub Support, GitHub will choose a priority for the ticket:

* Low
* Normal
* High
* Urgent ([GitHub Premium Support](/support/learning-about-github-support/about-github-premium-support) only)



> [!NOTE]
> If you have previously contacted GitHub Enterprise Support through the GitHub Enterprise Support portal, which is closing down, you should use the [GitHub Support portal](https://support.github.com) to open new tickets.




Ticket priority helps to ensure that support requests are handled in order, and according to their circumstances and impact.

GitHub has the sole discretion to modify the priority of a ticket at any time, and may lower the priority of a ticket after determining and mitigating the primary cause of an issue.


## Scope of Support

Please note that GitHub Support can only assist with issues that fall within GitHub's Scope of Support. Requests related to out-of-scope areas, such as third-party integration issues, custom scripts, or unsupported platforms, cannot be prioritized or addressed by GitHub Support.

**GitHub Support does not provide support for discontinued GitHub Enterprise Server releases.** If you're running a discontinued release, please upgrade to a supported version before opening a support ticket so we can help you effectively. See [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).


For more details and examples of what is considered out of scope for GitHub Support, see GitHub's [Scope of Support documentation](/support/learning-about-github-support/about-github-support#scope-of-support). If your request falls outside this scope, please refer to the relevant third-party’s support resources, community forums, or consult [GitHub Expert Services](https://github.com/services/).

## Ticket priorities



| Priority | Description | Examples |
| :---: | --- | --- |
| Urgent<br><br>([GitHub Premium Support](/support/learning-about-github-support/about-github-premium-support) only) | Production workflows for your organization or enterprise on GitHub Enterprise Cloud are failing due to critical service errors or outages, and the failure directly impacts the operation of your business. | <ul><li>Errors or outages on GitHub Enterprise Cloud affect core Git or web application functionality for all members of your organization or enterprise</li><li>Authentication issues impacting the majority of existing users in your enterprise or organization</li></ul> |
| High | Account or security issues with your organization or enterprise on GitHub Enterprise Cloud are causing limited impact to your business. | <ul><li>An organization or enterprise owner has unintentionally deleted an organization</li><li>An organization or enterprise member has uploaded sensitive data in a commit, issue, pull request, or issue attachment</li><li>Unable to SCIM provision users or groups</li></ul> |
| Normal | Members of your organization or enterprise on GitHub Enterprise Cloud are experiencing limited or moderate issues with GitHub Enterprise Cloud, or you have general concerns or questions about your organization or enterprise. | <ul><li>Questions about using APIs and features for your organization or enterprise, including rate limits</li><li>API request failures due to rate limits</li><li>Issues with tools for organization data migration that GitHub provides</li><li>Features related to your organization or enterprise not working as expected</li><li>General security questions about your organization or enterprise</li></ul> |
| Low | You have a question or suggestion about your organization or enterprise on GitHub Enterprise Cloud that is not time-sensitive, or does not otherwise block the productivity of your team. | <ul><li>Excessive resource usage for your organization or enterprise</li><li>Requests for health checks</li><li>Help with using Gists, notifications, wikis, GitHub Pages, GitHub Desktop, or other peripheral services or features with your organization or enterprise</li><li>Feature requests</li><li>Product feedback</li></ul> |




| Priority | Description | Examples |
| :---: | --- | --- |
| Urgent | GitHub Enterprise Server is failing in a production environment, and the failure directly impacts the operation of your business.<br/><br/>_Support for tickets with Urgent priority is only available in the English language.
_ | <ul><li>Errors or outages that affect core Git or web application functionality for all users</li><li>Severe performance degradation for majority of users</li><li>Authentication issues impacting the majority of existing users on your appliance</li><li>Full or rapidly filling storage</li><li>Inability to install a renewed license file</li><li>Security incident</li><li>Loss of administrative access to the instance with no known workaround</li><li>Failure to restore a backup to a production environment</li></ul> |
| High | GitHub Enterprise Server is failing in a production environment, but impact on your business is limited. | <ul><li>Performance degradation that reduces productivity for many users</li><li>Reduced redundancy from failure of High Availability (HA) or cluster nodes</li><li>Failure to back up instance</li><li>Failure to restore a backup to a test or staging environment that could compromise successful restoration to a production environment</li><li>Unable to SCIM provision users or groups</li></li></ul> |
| Normal | You're experiencing limited or moderate issues with GitHub Enterprise Server, or you have general concerns or questions about the operation of your instance. | <ul><li>Problems in a test or staging environment</li><li>Advice on using GitHub Enterprise Server APIs and features including rate limits, or questions about configuring third-party integrations from your instance</li><li>API request failures due to rate limits</li><li>Issues with tools for user data migration that GitHub provides</li><li>Upgrades</li><li>Bug reports</li><li>Features not working as expected</li><li>General security questions</li></ul> |
| Low | You have a question or suggestion about GitHub Enterprise Server that is not time-sensitive, or does not otherwise block the productivity of your team. | <ul><li>Feature requests</li><li>Product feedback</li><li>Requests for health checks (available for customers with a Premium plan only at this time)</li><li>Notifying GitHub of planned maintenance on your instance</li></ul> |



## Ticket priorities for GitHub Advanced Security features

All tickets regarding security features follow this logic for ticket prioritization.

| Priority | Description |
| :---: | --- |
| High | A feature is not functioning or is stopped or severely impacted such that the end user cannot reasonably continue use of the software and no workaround is available. |
| Normal | A feature is functioning inconsistently, causing impaired end user usage and productivity. |
| Low | A feature is functioning consistently, but the end user requests minor changes in the software, such as documentation updates, cosmetic defects, or enhancements.|

## Ticket priorities for Actions Runner Controller (ARC)

| Priority | Description | Examples |
| :---: | --- | --- |
| Urgent<br><br>([GitHub Premium Support](/support/learning-about-github-support/about-github-premium-support) only) | Issues that critically impact the functionality of GitHub-supported ARC in an existing production environment. This excludes disruptions caused by Kubernetes components, missing dependencies, third-party software (such as proxy servers), or other changes made by your teams. | ARC fails to create pods/start job/remove pods, or ARC has a significant bug affecting production and a rollback is not possible. |
| High | Issues that affect the performance of GitHub-supported ARC in an existing production environment but do not result in a complete system failure. | Delays in pod termination or assignment of jobs to pods, where the delay is not in line with expectations but does not entirely halt the workflow. |
| Normal / Low | Any other minor issues not classified as Urgent or High should be directed to [the open source Actions Runner Controller repository](https://github.com/actions/actions-runner-controller) issues/discussions.  | Customization, performance analysis, initial setup. |

For more information about what GitHub Support can assist with, see [Support For Arc](https://docs.github.com/en/actions/concepts/runners/support-for-arc).

## Ticket priorities for GitHub Copilot

Copilot is a developer productivity tool that accelerates workflows but does not gate core platform operations. If Copilot is unavailable, developers can continue to write, commit, review, and deploy code using the underlying GitHub platform. Platform-level outages that affect Copilot availability across all users are handled through GitHub's incident process and reflected on [githubstatus.com](https://www.githubstatus.com).

| Priority | Description | Examples |
| --- | --- | --- |
| Normal | Issues with Copilot features that affect usage or productivity for members of your organization or enterprise. | <ul><li>Code completion suggestions not appearing or returning errors</li><li>Copilot Chat not responding or producing unexpected results</li><li>Copilot features not working as expected after configuration or policy changes</li><li>Seat assignment or access issues within your organization or enterprise</li></ul> |
| Low | Questions, suggestions, or minor issues related to Copilot that are not time-sensitive. | <ul><li>Feature requests</li><li>Product feedback</li><li>Adoption guidance or best practices</li><li>Usage reporting and analytics questions</li></ul> |

For troubleshooting steps before contacting GitHub Support, see [Troubleshoot Common Issues](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues). Many Copilot issues are caused by network configuration, firewalls, or proxy settings in your environment. For guidance on resolving these, see [Troubleshoot Firewall Settings](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-firewall-settings) and [Troubleshoot Network Errors](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-network-errors). To provide feedback on preview features, use [GitHub Community discussions](https://github.com/orgs/community/discussions). 

## Further reading

* [Creating A Support Ticket](https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket)
