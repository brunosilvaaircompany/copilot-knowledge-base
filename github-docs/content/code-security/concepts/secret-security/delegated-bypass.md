# Delegated bypass for push protection

## About delegated bypass for push protection

With delegated bypass for push protection, you can:

* **Grant bypass permissions** to select individuals, roles, and teams, allowing them to push commits that are initially blocked by push protection.
* **Grant exemptions** to select actors, skipping push protection entirely for all of their commits. Exemptions should be granted to trusted automation like migration bots or service accounts that need to push frequent commits with minimal friction.
* **Introduce a review cycle** for bypass requests from all other contributors. Requests expire after 7 days.

Delegated bypass applies to files created, edited, and uploaded on GitHub.

## Users with bypass privileges

The following types of users can always bypass push protection:
* Organization owners
* Security managers
* Users in teams, default roles, or custom roles that have been added to the bypass list
* Users who are assigned (either directly or via a team) a custom role with the "review and manage secret scanning bypass requests" fine-grained permission

## Next steps

To start managing bypass privileges, see [Enable Delegated Bypass](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/manage-bypass-requests/enable-delegated-bypass).
