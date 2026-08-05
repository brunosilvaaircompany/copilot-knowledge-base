# Enabling or disabling GitHub Codespaces for your organization

## About enabling and disabling GitHub Codespaces

GitHub Codespaces is always available in an organization's public repositories. Any user can create a codespace from these repositories.

If your organization is on a GitHub Free plan, GitHub Codespaces is always available in your organization's private repositories. Any user with access to these repositories can create a codespace at their own expense.

If you're an organization owner on a paid GitHub plan, you can enable or disable GitHub Codespaces for your organization's private and internal repositories. You can enable GitHub Codespaces for all users or only for selected members and collaborators.

## Enabling or disabling GitHub Codespaces

> [!NOTE]
> Removing a user's access to GitHub Codespaces will prevent them from opening any of their existing codespaces in your organization's private and internal repositories. For more details, see [What happens when I remove a user's access to GitHub Codespaces?](#what-happens-when-i-remove-a-users-access-to-github-codespaces)

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**.

1. Under **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**, in the left sidebar, click **General**.

1. On the Codespaces settings page, under "Codespaces access," select your preferred setting for GitHub Codespaces in your organization's private and internal repositories.

## Ensuring your users can create codespaces

To allow a user to create codespaces for a repository owned by your organization, you must do one of the following:

* Give the user **read access** to the repository and permit forking. This allows the user to create a codespace, push changes to a fork, and open a pull request. For more information, see [Managing The Forking Policy For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization).
* Give the user **write access** to the repository so that they can push changes directly to the repository without forking.



Additionally, ensure that:
* Your enterprise does not use OIDC with CAP. For more information, see [About Support For Your Idps Conditional Access Policy](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/about-support-for-your-idps-conditional-access-policy).
* Your organization does not have an IP address allow list enabled. For more information, see [Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).





> [!NOTE]
> If you are a verified educator or a teacher, you must enable GitHub Codespaces from a GitHub Classroom to use your Codespaces Education benefit. For more information, see [Using GitHub Codespaces With GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers).



## What happens when I remove a user's access to GitHub Codespaces?

Before removing users' access to GitHub Codespaces, you should **alert the affected users.**

When you remove a user's access, the user will immediately be unable to open existing codespaces they have created from your organization's private and internal repositories.

* If you alert them first, they can push any unpublished work to a branch in the repository before they lose access.
* Once a user loses access to a codespace, the codespace is retained for a period of 7 days, then it is permanently deleted. During this 7-day period, to recover unpublished work from the codespace, the user must contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.

If you were previously paying for codespaces the user had created from your organization's public repositories, ownership of these codespaces will transfer to the user.

## Further reading

* [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)
