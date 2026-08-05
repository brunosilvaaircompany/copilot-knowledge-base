# Enabling secret scanning for your repository

## About enabling secret scanning alerts for users



{% ifversion fpt or ghec %}Secret scanning alerts for users can be enabled on any free public repository that you own.

{% endif %}

Secret scanning alerts for users can be enabled for any repository that is owned by an organization, and for repositories owned by user accounts when using GitHub Enterprise Cloud with Enterprise Managed Users.

If you're an organization owner, you can enable secret scanning for multiple repositories at a time using security configurations. For more information, see [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security).



If your organization is owned by an enterprise account, an enterprise owner can also enable secret scanning at the enterprise level. For more information, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration).



## Enabling secret scanning alerts for users

Secret scanning alerts for users are enabled when you enable Secret Protection for your repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. To the right of "Secret Protection", click **Enable**.
1. Review the impact of enabling Secret Protection, then click **Enable Secret Protection**.

A repository administrator can choose to disable secret scanning for a repository at any time. For more information, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).



## Extending detection with public monitoring

The enablement steps above configure secret scanning for repositories your organization or enterprise owns. To detect secrets leaked by your enterprise members in public repositories across GitHub, you can enable public monitoring at the enterprise level. See [Enabling Public Monitoring For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/manage-your-coverage/enabling-public-monitoring-for-your-enterprise).



## Next steps

* [Viewing Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/viewing-alerts)
* [About Alerts](https://docs.github.com/en/code-security/concepts/secret-security/about-alerts)
