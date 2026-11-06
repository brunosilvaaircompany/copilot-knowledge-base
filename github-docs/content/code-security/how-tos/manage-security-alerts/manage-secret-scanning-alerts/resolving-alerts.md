# Resolving alerts from secret scanning

## Fixing alerts

Once a secret has been committed to a repository, you should consider the secret compromised. GitHub recommends the following actions for compromised secrets:

1. Verify that the secret committed to GitHub is valid. **Applies to GitHub tokens only**. See [Checking a secret's validity](/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts#checking-a-secrets-validity) and [Performing an on-demand validity check](/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts#performing-an-on-demand-validity-check).
1. For secrets detected in private repositories, report the leaked secret to GitHub, who will treat it like any publicly leaked secret and revoke it. **Applies to active or unconfirmed GitHub personal access tokens only**. See [Reporting a leaked secret in a private repository](#reporting-a-leaked-secret-in-a-private-repository). 
1. Review and update any services that use the old token. For GitHub personal access tokens, delete the compromised token and create a new token. See [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
1. Depending on the secret provider, check your security logs for any unauthorized activity.



### Fixing alerts for secrets in GitHub Actions workflow logs

> [!NOTE]
> Detection of secrets in GitHub Actions workflow logs is in public preview and is subject to change.

When a secret is detected in a GitHub Actions workflow log, follow these steps in order.

1. Review the alert and linked job log to identify the credential and the source of the exposure. The secret may have been printed by the workflow, an action, or another dependency.
1. Check whether the credential is still valid. {% ifversion fpt or ghec %}See [Checking a secret's validity](/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts#checking-a-secrets-validity). If the credential is active or you cannot confirm its status, rotate or revoke it immediately using the secret provider's dashboard.
1. Fix the source of the exposure. For example, update the workflow or dependency, remove hardcoded secrets, or store credentials as encrypted secrets. See [Using Secrets In GitHub Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).
1. If necessary, add `::add-mask::<value>` to redact the value from future log output.

> [!WARNING]
> Do not rerun the workflow until you have fixed the exposure source. Rerunning the workflow without addressing the root cause may re-expose the secret.

{% endif %}



### Reporting a leaked secret in a private repository

> [!NOTE]
> Reporting a privately exposed secret to GitHub is in public preview and subject to change.
 The feature is currently only available for GitHub personal access tokens (v1 and v2).

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Vulnerability alerts", click **Secret scanning**.
1. From the alert list, click the alert you want to view.
1. In the alert view for the leaked secret, click **Report leak**.

   > [!NOTE] In order to prevent breaking workflows, consider first rotating the secret before continuing, as disclosing it could lead to the secret being revoked. If possible, you should also reach out to the token owner to let them know about the leak and coordinate a remediation plan.

1. Review the information in the dialog box, then click **I understand the consequence, report this secret**.



## Closing alerts

> [!NOTE]
>Secret scanning doesn't automatically close alerts when the corresponding token has been removed from the repository. You must manually close these alerts in the alert list on GitHub.



If a branch ruleset requires secret scanning alerts to be resolved, an open alert introduced by a pull request can block merging. After fixing the exposed secret, close the alert using the following steps. After all blocking alerts are closed, the alerts no longer prevent merging. The rule can continue to block merging until a secret scanning scan completes for the pull request's head commit.



1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Vulnerability alerts", click **Secret scanning**.
1. Under "Secret scanning", click the alert you want to view.
1. To dismiss an alert, select the "Close as" dropdown menu and click a reason for resolving an alert.

   ![Screenshot of a secret scanning alert. A dropdown menu, titled "Close as", is expanded and highlighted in a dark orange outline.](/assets/images/help/repository/secret-scanning-dismiss-alert-web-ui-link-partner-documentation.png)

1. Optionally, in the "Comment" field, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting.
1. Click **Close alert**.

## Next steps

* [Monitoring Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/monitoring-alerts)
