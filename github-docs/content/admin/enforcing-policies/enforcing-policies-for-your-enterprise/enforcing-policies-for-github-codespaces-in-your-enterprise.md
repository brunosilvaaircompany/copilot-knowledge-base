# Enforcing policies for GitHub Codespaces in your enterprise

## About enterprise policies for GitHub Codespaces

As an enterprise owner, you can set a policy to enable or disable GitHub Codespaces across organizations in your enterprise. You can enable GitHub Codespaces for all organizations, enable for specific organizations, or disable for all organizations.

If you disable GitHub Codespaces for an organization, users cannot use or create codespaces for any of that organization's private or internal repositories, regardless of whether use of the codespace would be billed to the user or to your organization or enterprise. You cannot prevent users from creating and using codespaces for public repositories in your organizations at their own expense, but an organization will not be able to pay for this usage if GitHub Codespaces is disabled.

By enabling GitHub Codespaces, you can help your members and collaborators get started with projects quickly, without needing to install lots of tools and dependencies locally to start contributing. However, you might want to roll out GitHub Codespaces gradually across your organizations by enabling it for more organizations over time. Alternatively, if you need to comply with security regulations that require increased control over the private code in your enterprise, you might want to disable GitHub Codespaces for all organizations in your enterprise.

If you're an organization owner, you can enable GitHub Codespaces for specific members and collaborators in an organization. You can also choose to pay for these users' usage of Codespaces. For more information, see [Enabling Or Disabling GitHub Codespaces For Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization) and [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).

## Enabling or disabling GitHub Codespaces in your enterprise

> [!NOTE]
> If you remove a user's access to GitHub Codespaces, the user will immediately be unable to open existing codespaces they have created from an organization's private and internal repositories. For more information, see [Enabling Or Disabling GitHub Codespaces For Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization#about-changing-your-settings).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies," click **Codespaces**.
1. On the GitHub Codespaces policies page, under "Manage organization access to GitHub Codespaces," select whether to enable GitHub Codespaces in your organizations' private and internal repositories.

   You can enable for all organizations, enable for specific organizations, or disable for all organizations.
1. Click **Save**.
1. Read the confirmation dialog, then click **Submit** to proceed.
