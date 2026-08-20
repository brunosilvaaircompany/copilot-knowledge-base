# Enabling delegated alert dismissal for secret scanning

>[!NOTE]
> The implementation of this approval process can potentially cause some friction, so it's important to ensure that the team of security managers has adequate coverage to review dismissal requests regularly before proceeding.

> 
> Alert dismissal requests expire after 1 week. After this, dismissal requests must be resubmitted.

## Configuring delegated dismissal for a repository

>[!NOTE] If an organization owner configures delegated alert dismissal via an enforced security configuration, the settings can't be changed at the repository level.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Secret Protection", to the right of "Prevent direct alert dismissals", click **Enable**.

## Configuring delegated dismissal for an organization

You must configure delegated dismissal for your organization using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your organization.

1. Create a new custom security configuration, or edit an existing one. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).

1. When defining the custom security configuration, under "Secret scanning", ensure that the dropdown menu for "Prevent direct alert dismissals" is set to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to all (or selected) repositories in your organization. See [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).

To learn more about security configurations, see [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security).

>[!NOTE]
> You can use GitHub Apps with fine-grained permissions to programmatically review and approve delegated dismissal requests. This enables your organization to streamline security request reviews and enforce policies, or integrate with external security tools, ensuring that all reviews meet established standards. _For GitHub Enterprise Server, the use of GitHub Apps to review requests for delegated dismissals is available from version 3.19._
> For more information about permissions, see [Organization permissions for "Organization bypass requests for secret scanning"](/enterprise-cloud@latest/rest/authentication/permissions-required-for-github-apps?apiVersion=2022-11-28#organization-permissions-for-organization-bypass-requests-for-secret-scanning).



## Configuring delegated dismissal for an enterprise

1. Create a new custom security configuration, or edit an existing one. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration).

1. When defining the custom security configuration, under "Secret Protection", ensure that the dropdown menu for "Prevent direct alert dismissals" is set to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to all (or selected) repositories in your enterprise. See [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration).



## Next steps

Now that you have enabled delegated alert dismissal for secret scanning, you should regularly review alert dismissal requests to maintain an accurate alert count and unblock your developers. See [Review Alert Dismissal Requests](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/review-alert-dismissal-requests).
