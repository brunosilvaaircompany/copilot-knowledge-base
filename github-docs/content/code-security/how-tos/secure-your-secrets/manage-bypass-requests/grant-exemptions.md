# Exempting trusted actors from push protection

> [!WARNING]
> Push protection exemptions are designed for trusted automation that needs to push many commits with minimal friction. Exemptions may lead to leaked secrets, and should be granted with caution.





## Granting exemptions for your repository

> [!NOTE]
> If an organization or enterprise owner configures delegated bypass at the organization or enterprise level, the repository-level settings are disabled.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Secret Protection," ensure that push protection is enabled for the repository.
1. Under "Push protection," to the right of "Who can bypass push protection for secret scanning," select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list," click **Add role or team**.
1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.

   > [!NOTE]
   > You can't add secret teams to the bypass list.


1. To fully exempt the actors from push protection, to the right of the actors' details, select {% octicon "kebab-horizontal" aria-label="ACTOR-OR-ROLE-NAME bypass actor actions" %}, then click **Exempt**.





## Granting exemptions for your organization

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. Create a new custom security configuration, or edit an existing one. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).

1. When defining the custom security configuration, under "Secret scanning," ensure that "Push protection" is set to **Enabled**.
1. Under "Push protection," to the right of "Bypass privileges," select the dropdown menu, then click **Specific actors**.
1. Select the {% octicon "plus" aria-hidden="true" aria-label="plus" %} **Select actors** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then choose the actors you want to add to the bypass list.


   > [!NOTE]
   > * You can't add secret teams to the bypass list.


1. To fully exempt the actors from push protection, to the right of the actors' details, select {% octicon "kebab-horizontal" aria-label="ACTOR-OR-ROLE-NAME bypass actor actions" %}, then click **Exempt**.


1. Click **Save configuration**.
1. Apply the security configuration to repositories in your organization. See [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).

## Granting exemptions for your enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security Code security**.

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. Create a new custom security configuration, or edit an existing one. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration).

1. Under **Secret scanning**, ensure **Push protection** is enabled.
1. Under "Push protection," to the right of "Bypass privileges," select the dropdown menu, then click **Specific actors**.

   > [!NOTE]
   > You can't add secret teams to the bypass list.

1. Select the {% octicon "plus" aria-hidden="true" aria-label="plus" %} **Select actors** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then choose the actors you want to add to the bypass list.


1. To fully exempt the actors from push protection, to the right of the actors' details, select {% octicon "kebab-horizontal" aria-label="ACTOR-OR-ROLE-NAME bypass actor actions" %}, then click **Exempt**.


1. Click **Save configuration**.
1. Apply the security configuration to organizations and repositories in your enterprise. See [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration).
