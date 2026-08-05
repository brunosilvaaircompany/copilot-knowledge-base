## About validity checks

Validity checks, a feature of secret scanning, verify whether a detected secret is still active and could be exploited. This helps you prioritize remediation by focusing first on secrets that are confirmed to be active.

You can enable automatic validity checks for detected secrets. Once enabled, GitHub will periodically check the validity of a detected credential by sending the secret to the issuer and testing it against APIs provided by that service. Validity checks are available for secrets from many service providers, and support continues to expand as GitHub partners with additional services.

GitHub prioritizes privacy when checking the validity of the credential. We typically make GET requests, pick the least intrusive endpoints, and select endpoints that don't return any personal information.



Some secrets require more than the token itself to confirm whether they are active. For these secrets, GitHub will combine the token with additional contextual information, such as a host or URL, to check the secret's validity.



GitHub displays the validation status of the secret in the alert view, so you can see if the secret is `active`, `inactive`, or if the validation status is `unknown`. For most secrets, you can optionally perform an "on-demand" validity check for the secret in the alert view.

## About extended metadata checks

> [!NOTE] Extended metadata checks in security configurations is currently in public preview and subject to change.


Extended metadata checks provide **additional contextual information** about detected secrets. They are often referred to as **analyzers** in other tools.

You can enable extended metadata checks if validity checks are enabled. Then, you'll get information that helps you:

* **Gain deeper insight into detected secrets**: Know who owns a secret.
* **Prioritize remediation**: Understand the scope and impact of each exposed secret.
* **Improve incident response**: Quickly identify responsible teams or individuals when a secret is leaked.
* **Enhance compliance**: Ensure secrets align with your organization’s governance and security policies.
* **Reduce false positives**: Use additional context to determine if a detection requires action.

The specific metadata available depends on what the service provider shares with GitHub. Not all secret types support extended metadata checks. For more information, see [Evaluating Alerts](https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts).

## Getting started with validity and extended metadata checks

You can enable validity and extended metadata checks at the repository, organization, or enterprise level to help prioritize which exposed credentials pose the most immediate security risks.

For large organizations, we recommend using **security configurations** to enable these features at the organization or enterprise level. Security configurations allow you to centrally manage  secret scanning settings and apply them consistently across many repositories.

To get started:

* For repositories, see [Enable Validity Checks](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/enable-validity-checks)
* For an organization, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration)
* For an enterprise, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration)
