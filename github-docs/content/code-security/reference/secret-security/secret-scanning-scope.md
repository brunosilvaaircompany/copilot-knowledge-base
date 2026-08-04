# Secret scanning detection scope

> [!NOTE]
> Your site administrator must enable secret scanning for the instance before you can use this feature. For more information, see [Configure Secret Scanning](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configure-secret-scanning).
>
> You may not be able to enable or disable secret scanning, if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).






## Public monitoring scope

When public monitoring is enabled for your enterprise, secret scanning extends detection beyond repositories your enterprise owns. Public monitoring scans public repositories, including non-code content like pull request comments, across GitHub for secrets associated with your enterprise members or users with an email address matching your enterprise's verified domain.

Public monitoring alerts appear in the enterprise-level security overview, on the dedicated **Public monitoring** page. See [Public Monitoring](https://docs.github.com/en/code-security/concepts/secret-security/public-monitoring).



## Detection of pattern pairs

Secret scanning will only detect pattern pairs, such as AWS Access Keys and Secrets, if the ID and the secret are found in the same file, and both are pushed to the repository. Pair matching helps reduce false positives since both elements of a pair (the ID and the secret) must be used together to access the provider's resource.

Pairs pushed to different files, or not pushed to the same repository, will not result in alerts. For more information about the supported pattern pairs, see the table in [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).

## About legacy GitHub tokens

For GitHub tokens, we check the validity of the secret to determine whether the secret is active or inactive. This means that for legacy tokens, secret scanning won't detect a GitHub Enterprise Server personal access token on GitHub Enterprise Cloud. Similarly, a GitHub Enterprise Cloud personal access token won't be found on GitHub Enterprise Server.

## Push protection limitations

If push protection did not detect a secret that you think should have been detected, then you should first check that push protection supports the secret type in the list of supported secrets. For further information, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).

If your secret is in the supported list, there are various reasons why push protection may not detect it.

* Push protection only blocks leaked secrets on a subset of the most identifiable user-alerted patterns. Contributors can trust security defenses when such secrets are blocked as these are the patterns that have the lowest number of false positives.
* The version of your secret may be old. Older versions of certain tokens may not be supported by push protection as these tokens may generate a higher number of false positives than their most recent version. Push protection may also not apply to legacy tokens. For tokens such as Azure Storage Keys, GitHub only supports _recently created_ tokens, not tokens that match the legacy patterns.

* The push may be too large, for example, if you're trying to push thousands of large files. A push protection scan may time out and not block a user if the push is too large. GitHub will still scan and create alerts, if needed, after the push.
* If the push results in the detection of over five new secrets, we will only show you the first five (we will always show you a maximum of five secrets at one time).
* If a push contains over 1,000 existing secrets (that is, secrets for which alerts have already been created), push protection will not block the push. 
* If a push in a public repository is larger than 50 MB, push protection will skip it and won't scan it.
* If you see a bypass request without commit or file path details, it means that push protection ran out of time. The push was too large or the history too complex to locate the commit that introduced the secret.
