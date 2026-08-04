# Evaluating alerts from secret scanning

## About evaluating alerts

There are some additional features that can help you to evaluate alerts in order to better prioritize and manage them. You can:

* Check the validity of a secret, to see if the secret is still active. **Applies to GitHub tokens only**. See [Checking a secret's validity](#checking-a-secrets-validity).
* Perform an "on-demand" validity check, to get the most up to date validation status. See [Performing an on-demand validity check](#performing-an-on-demand-validity-check).
* Review a token's metadata. **Applies to GitHub tokens only**. For example, to see when the token was last used. See [Reviewing GitHub token metadata](#reviewing-github-token-metadata).
* Review extended metadata checks for an exposed secret, to see details such as who owns the secret and how to contact the secret owner. **Applies to OpenAI API, Google OAuth, Slack, and Replicate tokens only**. See [Reviewing extended metadata for a token](#reviewing-extended-metadata-for-a-token).
* Review the labels assigned to the alert. For more information, see [Reviewing alert labels](#reviewing-alert-labels).

## Checking a secret's validity

Validity checks help you prioritize alerts by telling you which secrets are `active` or `inactive`. An `active` secret is one that could still be exploited, so these alerts should be reviewed and remediated as a priority.

By default, GitHub checks the validity of GitHub tokens and displays the validation status of the token in the alert view.

Organizations using GitHub Team, GitHub Enterprise Cloud with a license for GitHub Secret Protection, or GitHub Enterprise Server with a license for GitHub Secret Protection can also enable validity checks for partner patterns. For more information, see [Checking a secret's validity](/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts#checking-a-secrets-validity).

   | Validity    | Status            |     Result                                                                           |
   |-------------|------------|--------------------------------------------------------------------------------|
   | Active secret           | `active` | GitHub checked with this secret's provider and found that the secret is active |
   | Possibly active secret  | `unknown` | GitHub does not support validation checks for this token type yet               |
   | Possibly active secret  | `unknown` | GitHub could not verify this secret                                            |
   | Secret inactive | `inactive` | You should make sure no unauthorized access has already occurred                 |




Validity checks for partner patterns are available for the following repository types:


* Organization-owned repositories on GitHub Team with [GitHub Secret Protection](/get-started/learning-about-github/about-github-advanced-security) enabled


* Organization-owned repositories on GitHub Team or GitHub Enterprise Cloud with [GitHub Secret Protection](/get-started/learning-about-github/about-github-advanced-security) enabled


* Organization-owned repositories on GitHub Enterprise Server with [GitHub Secret Protection](/get-started/learning-about-github/about-github-advanced-security) enabled




For information on how to enable validity checks for partner patterns, see [Enable Validity Checks](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/enable-validity-checks), and for information on which partner patterns are currently supported, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).



You can enable validity checks for partner patterns by using security configurations, either set at the enterprise or at the organization level. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration) and [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).

For information on which partner patterns are currently supported, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).



With a GitHub Copilot Enterprise license, you can ask Copilot Chat for help to better understand security alerts, including secret scanning alerts, in repositories in your organization. For more information, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#asking-questions-about-alerts-from-github-advanced-security-features).



You can use the REST API to retrieve a list of the most recent validation status for each of your tokens. For more information, see [Secret Scanning](https://docs.github.com/en/rest/secret-scanning) in the REST API documentation. You can also use webhooks to be notified of activity relating to a secret scanning alert. For more information, see the `secret_scanning_alert` event in [Webhook Events And Payloads?Actiontype=Created](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=created#secret_scanning_alert).

## Performing an on-demand validity check

Once you have enabled validity checks for partner patterns for your repository, you can perform an "on-demand" validity check for any supported secret by clicking **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Verify secret** in the alert view. GitHub will send the pattern to the relevant partner and display the validation status of the secret in the alert view.

![Screenshot of the UI showing a secret scanning alert. A button, labeled "Verify secret" is highlighted with an orange outline.](/assets/images/help/security/secret-scanning-verify-secret.png)

## Reviewing GitHub token metadata

> [!NOTE]
> Metadata for GitHub tokens is currently in public preview and subject to change.

In the view for an active GitHub token alert, you can review certain metadata about the token. This metadata may help you identify the token and decide what remediation steps to take.

Tokens, like personal access token and other credentials, are considered personal information. For more information about using GitHub tokens, see [GitHub's Privacy Statement](/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement) and [Acceptable Use Policies](/free-pro-team@latest/site-policy/acceptable-use-policies/github-acceptable-use-policies).

   ![Screenshot of the UI for a GitHub token, showing the token metadata.](/assets/images/help/repository/secret-scanning-github-token-metadata.png)

 Metadata for GitHub tokens is available for active tokens in any repository with secret scanning enabled. If a token has been revoked or its status cannot be validated, metadata will not be available. GitHub auto-revokes GitHub tokens in public repositories, so metadata for GitHub tokens in public repositories is unlikely to be available. The following metadata is available for active GitHub tokens:

|Metadata|Description|
|-------------------------|--------------------------------------------------------------------------------|
|Secret name| The name given to the GitHub token by its creator|
|Secret owner| The GitHub handle of the token's owner|
|Created on| Date the token was created|
|Expired on| Date the token expired|
|Last used on| Date the token was last used|
|Access| Whether the token has organization access|

Only people with admin permissions to the repository containing a leaked secret can view security alert details and token metadata for an alert. Enterprise owners can request temporary access to the repository for this purpose.
 If access is granted, GitHub will notify the owner of the repository containing the leaked secret, report the action in the repository owner and enterprise audit logs, and enable access for 2 hours.{% ifversion ghec %} For more information, see [Accessing User Owned Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/accessing-user-owned-repositories-in-your-enterprise).{% endif %}



## Reviewing extended metadata for a token

> [!NOTE] Extended metadata checks for tokens is in public preview and subject to change.


In the view for an active GitHub token alert, you can see extended metadata information, such as owner and contact details.

The following table shows **all the available metadata**. Note that metadata checks are currently limited to OpenAI API, Google OAuth, Slack, and Replicate tokens, and the metadata shown for each token may represent only a subset of what exists.

| Metadata type      | Description                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| Owner ID           | Provider’s unique identifier for the user or service account that owns the secret                  |
| Owner name         | Human‑readable username or display name of the secret’s owner                                      |
| Owner email        | Email address associated with the owner                              |
| Org name           | Name of the organization / workspace / project the secret belongs to                               |
| Org ID             | Provider’s unique identifier for that organization                           |
| Secret issued date | Timestamp when the secret (token or key) was created or most recently issued                          |
| Secret expiry date | Timestamp when the secret is scheduled to expire                     |
| Secret name        | Human‑assigned display name or label for the secret                                |
| Secret ID          | Provider’s unique identifier for the secret    |





{% ifversion copilot-chat-ghas-alerts %}

## Asking GitHub Copilot Chat about secret scanning alerts

With a GitHub Copilot Enterprise license, you can ask Copilot Chat for help to better understand security alerts, including secret scanning alerts, in repositories in your organization. For more information, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#asking-questions-about-alerts-from-github-advanced-security-features).



## Reviewing alert labels

In the alert view, you can review any labels assigned to the alert. The labels provide additional details about the alert, which can inform the approach you take for remediation.

Secret scanning alerts can have the following labels assigned to them. Depending on the labels assigned, you'll see additional information in the alert view.

|Label|Description|Alert view information|
|-------------------------|--------------------------------------------------------------------------------|-------------------------|
|`public leak`| The secret detected in your repository has also been found as publicly leaked by at least one of GitHub's scans of code, discussions, gists, issues, pull requests, and wikis. This may require you to address the alert with greater urgency, or remediate the alert differently compared to a privately exposed token. | You'll see links to any specific public locations where the leaked secret has been detected. |
|`multi-repo`| The secret detected in your repository has been found across multiple repositories in your organization or enterprise. This information may help you more easily dedupe the alert across your organization or enterprise. | If you have appropriate permissions, you'll see links to any specific alerts for the same secret in your organization or enterprise. |

{% endif %}
