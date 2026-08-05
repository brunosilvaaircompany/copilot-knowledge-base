# Push protection

## What is push protection?

Push protection is a secret scanning feature designed to prevent hardcoded credentials, such as secrets or tokens, from ever being pushed to your repository. Rather than alerting you to credential leaks after the fact, push protection blocks pushes that contain secrets _before_ they reach your repository.

## How push protection works

Push protection blocks secrets detected in:

* Pushes from the command line
* Commits made in the GitHub UI
* File uploads to a repository on GitHub
* Requests to the REST API
* Interactions with the GitHub MCP server (public repositories only)

When push protection detects a potential secret during a push attempt, it will block the push and provide a detailed message explaining the reason for the block. You will need to review the code in question, remove any sensitive information, and reattempt the push.

## Types of push protection

There are two types of push protection:

* [Push protection for repositories](#push-protection-for-repositories)
* [Push protection for users](#push-protection-for-users)

### Push protection for repositories

You can enable push protection for repositories at the repository, organization, or enterprise level. This form of push protection:
* Requires GitHub Secret Protection to be enabled
* Is disabled by default, and can be enabled by a repository administrator, organization owner, security manager, or enterprise owner
* Blocks pushes containing secrets from reaching specific protected repositories
* Generates alerts for push protection bypasses in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of the repository, organization, and enterprise



> [!TIP]
> Regardless of the enablement status of push protection, organizations on GitHub Team and GitHub Enterprise can run a free report to scan their code for leaked secrets. The report also shows how many secret leaks could have been prevented by push protection. See [Secret Security With GitHub](https://docs.github.com/en/code-security/concepts/secret-security/secret-security-with-github#secret-risk-assessment).



### Push protection for users

Push protection for users is only available on GitHub.com, and is specific to your GitHub account. This form of push protection:
* Is enabled by default
* Stops you from pushing secrets to public repositories on GitHub
* Does not generate alerts when you bypass push protection unless push protection is also enabled at the repository level

## Push protection bypass and alerts

For push protection for repositories, by default, anyone with write access to the repository can bypass push protection by specifying a bypass reason. When a contributor bypasses a push protection block, GitHub:
* Creates an alert in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of the repository, organization, and enterprise
* Adds the bypass event to the audit log
* Sends an email alert to personal account, organization, and enterprise owners, security managers, and repository administrators who are watching the repository, with a link to the secret and the reason it was allowed


This table shows the behavior of alerts for each bypass reason a user can specify.

| Bypass reason         | Alert behavior                                              |
|-----------------------|------------------------------------------------------|
| It's used in tests    | GitHub creates a closed alert, resolved as "used in tests"  |
| It's a false positive | GitHub creates a closed alert, resolved as "false positive" |
| I'll fix it later     | GitHub creates an open alert                                |


If you want greater control over which contributors can bypass push protection and which pushes containing secrets should be allowed, you can configure delegated bypass for push protection. With delegated bypass, you can grant actors:
* **Bypass privileges**, allowing them to bypass push protection themselves, as well as review and approve bypass requests from other contributors
* **Exemption from push protection**, allowing them to push commits without triggering push protection


## Benefits of push protection

* **Preventative security:** Push protection acts as a frontline defense mechanism by scanning code for hardcoded secrets at the time of the push. This preventative approach helps prevent credential leaks before they become ingrained in the repository's history, making it easier to address and remediate threats.
* **Immediate feedback:** Developers receive instant feedback if a potential secret is detected during a push attempt. This immediate notification allows for quick remediation, reducing the likelihood of sensitive information being exposed.
* **Reduced risk of credential leaks:** By blocking commits that contain hardcoded credentials, push protection significantly reduces the risk of accidental credential leaks and secret sprawl. This helps in safeguarding against potential breaches and maintaining the integrity of the codebase.
* **Efficient secret management:** Instead of retrospectively dealing with exposed secrets, developers can address issues at the source. This makes secret management more efficient and less time-consuming.
* **Bypass functionality for flexibility:** For cases where false positives occur or when certain patterns are necessary, you can bypass push protection for users, and designated users can use the delegated bypass feature to bypass push protection for repositories. Additionally, you can exempt trusted actors {% ifversion push-protection-repo-exemptions %}from push protection entirely. {% endif %}This provides flexibility without compromising overall security.
* **Ability to detect custom patterns (for repositories in organizations):** Organizations can define custom patterns for detecting secrets unique to their environment. This customization ensures that push protection can effectively identify and block even non-standard secrets.

## Customization

After you enable push protection for repositories, you can customize it by:

* Defining custom patterns to block pushes containing unique secret patterns
* Designating contributors who can bypass push protection and approve bypass requests for other contributors, or are exempt from push protection entirely
* Configuring which secret patterns are included in push protection at the enterprise or organization level
