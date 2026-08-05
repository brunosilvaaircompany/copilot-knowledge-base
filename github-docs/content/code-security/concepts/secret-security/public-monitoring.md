# Public monitoring for secret scanning

> [!NOTE]
> Public monitoring for secret scanning is currently in public preview and subject to change. If you have feedback, please join the [discussion](https://github.com/orgs/community/discussions/categories/code-security).


## About public monitoring

GitHub monitors for secrets leaked across GitHub in real time. Public monitoring attributes publicly exposed secrets back to your enterprise, based on where your people commit.

Secret scanning detects secrets in repositories that your enterprise owns. Public monitoring extends this detection to secrets found in arbitrary public repos across GitHub.com, regardless of whether or not your enterprise owns the repository where it was leaked.

This gives enterprise security administrators visibility into credential exposure they wouldn't otherwise be aware of, helping identify potential risks and leaked secrets which could be exploited by bad actors.

## How public monitoring works

Public monitoring scans public repositories, including non-code content like issue and pull request comments across GitHub for secrets associated with your enterprise. When a secret is detected, an alert is surfaced in the enterprise-level security overview.

### Attribution methods

Public monitoring uses two methods to associate detected secrets with your enterprise:

* **Enterprise membership:** Secrets leaked by users who are members of your enterprise
* **Verified domain matching:** Secrets leaked by users whose email address matches a verified domain of your enterprise, even if they are not direct enterprise members

Both attribution methods are active when public monitoring is enabled.

## Requirements

To use public monitoring, your enterprise must:

* Have GitHub Advanced Security or GitHub Secret Protection enabled
