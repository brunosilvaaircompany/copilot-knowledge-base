# Bypass requests for push protection

## About bypass requests for push protection

When push protection blocks a commit containing a secret, contributors may need to bypass the block to complete their push. If delegated bypass for push protection is enabled, contributors without bypass privileges must submit a bypass request and wait for approval from designated reviewers. This allows organizations to maintain security oversight while enabling legitimate exceptions when needed. For more information, see [Delegated Bypass](https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass).

If delegated bypass for push protection is not enabled, contributors can bypass push protection at their own discretion.

When enabling delegated bypass for push protection, organization owners or repository administrators decide which individuals, roles or teams can review (approve or deny) requests to bypass push protection.

If you are a designated reviewer, you must review bypass requests and either approve or deny them based on the request details and your organization's security policies.

## How bypass requests work

When a contributor without bypass privileges requests to push a commit containing a secret, a bypass requests is sent to the reviewers. The designated group of reviewers:

* Receives an email notification containing a link to the request
* Reviews the request in the "Bypass requests" page of the repository, or in the organization's security overview.
* Has **7 days** to either approve or deny the request before the request expires

### Information available to reviewers

GitHub displays the following information for each request:

* Name of the user who attempted the push
* Repository where the push was attempted
* Commit hash of the push
* Timestamp of the push
* File path and branch information (branch information is only available for pushes to single branches)

### Outcomes

The contributor is notified by email of the decision and must take the required action:

* **If the request is approved**: The contributor can push the commit containing the secret to the repository.
* **If the request is denied**: The contributor must remove the secret from the commit before successfully pushing the commit to the repository.

## Automatic bypass request reviews

You can use GitHub Apps with fine-grained permissions to programmatically review and approve push protection bypass requests. This enables you to enforce consistent security policies, integrate with external security tools, or reduce manual review burden.



>[!NOTE]
> For GitHub Enterprise Server, the use of GitHub Apps to review bypass requests is available from version 3.19.



> For more information about permissions, see [Organization permissions for "Organization bypass requests for secret scanning"](/enterprise-cloud@latest/rest/authentication/permissions-required-for-github-apps?apiVersion=2022-11-28#organization-permissions-for-organization-bypass-requests-for-secret-scanning).

## Next steps

* To learn how to manage bypass requests for push protection as a reviewer, see [Manage Bypass Requests](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/manage-bypass-requests/manage-bypass-requests).
