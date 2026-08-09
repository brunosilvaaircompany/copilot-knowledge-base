# Choosing who owns and pays for codespaces in your organization

## Overview

If you're the owner of an organization on a GitHub Team or GitHub Enterprise Cloud plan, you can pay for your members' and collaborators' usage of GitHub Codespaces. Paying for usage will allow people to use GitHub Codespaces to work in your repositories without having to do so at their own expense and will give your organization more control over the codespaces created from your repositories.

To pay for usage, you must do all of the following things:

* Allow at least some of your members and collaborators to use GitHub Codespaces in your organization's private and internal repositories. See [Enabling Or Disabling GitHub Codespaces For Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization#enabling-or-disabling-github-codespaces).
* Choose for codespaces created from your organization's repositories to be **organization-owned**. See [Choosing who owns and pays for codespaces](#choosing-who-owns-and-pays-for-codespaces).
* Set a non-zero spending limit for GitHub Codespaces. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets#managing-budgets-for-your-organization-or-enterprise).

## About choosing who pays for codespaces

Paying for a codespace means paying for the storage and compute costs of the codespace over the codespace's lifetime. See [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).

Organizations on a GitHub Free plan cannot pay for GitHub Codespaces, so the user who creates the codespace always pays.

For organizations on a GitHub Team or GitHub Enterprise Cloud plan, when a user creates a codespace from a repository in the organization, either the user or the organization can pay for the codespace. The user who creates a codespace can't choose who pays for it, but the organization can choose to pay for certain users. In an organization's settings, you can choose for codespaces to be **user-owned** or **organization-owned**.

If an organization chooses for codespaces to be **user-owned**, a user who creates a codespace from a repository in the organization always pays for the codespace. The user's access to create codespaces depends on the visibility of the repository and your organization's access settings.

If an organization chooses for codespaces to be **organization-owned**, the organization will pay for a codespace if all the following things are true:

* The organization has no budget defined for GitHub Codespaces or has set a non-zero budget.
* The codespace is created from one of the organization's repositories, or from an organization-owned fork of a repository. This includes public, private, and internal{% elsif fpt %}both public and private repositories.
* The user creating the codespace is a member or collaborator of the organization, and the organization has enabled GitHub Codespaces for this user. This can include all members and collaborators if the organization has chosen to enable Codespaces for all users. If Codespaces isn't enabled for a user, they can still create codespaces from public repositories in the organization, but the user will pay for these codespaces.


For more information about enabling GitHub Codespaces for members and collaborators, see [Enabling Or Disabling GitHub Codespaces For Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization).



> [!NOTE]
> If you own an organization with managed users and do not allow GitHub Codespaces to be billed to your organization, members with managed user accounts will not be able to use GitHub Codespaces. See [Abilities And Restrictions Of Managed User Accounts](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts).



## About ownership of codespaces

A codespace is paid for by the account that owns it. The codespace owner can be the user who created the codespace, or it can be an organization.

If your organization owns a codespace, your organization has control over that codespace. For example, for codespaces owned by your organization, you can:

* Use the [REST API](/rest/codespaces/organizations) to manage codespaces, such as stopping or deleting a codespace
* Access audit logs to review actions related to GitHub Codespaces
* Set policies to manage constraints, such as restricting the dev container image or machine type that can be used in codespaces, or setting a default timeout and retention period

If a user owns a codespace, your organization does not have any of these options for managing the codespace, even if the codespace was created from one of your organization's repositories.

When a user creates a codespace, they're told who will pay for it, and therefore who owns it. From a user's point of view, apart from the policies your organization can use to set constraints on codespaces, the experience with GitHub Codespaces will be similar regardless of who owns a codespace. For example, most of a user's personal settings for GitHub Codespaces, such as dotfiles, secrets, and GPG verification, apply regardless of who owns the codespace.

## About changing your settings

When you change your ownership settings, existing codespaces can transfer to a new owner.

If you change from **organization ownership** to **user ownership**, codespaces that are currently owned by your organization will be transferred to the ownership of the user who created the codespace. Before you make this change, you should ask each user to review the codespaces that will be transferred to their ownership. These codespaces will now incur usage on the user's personal account.

If you change from **user ownership** to **organization ownership**, existing codespaces may be transferred to your organization's ownership. A codespace will be transferred if the user who currently owns the codespace is a member or collaborator, and you have enabled GitHub Codespaces for this user. Otherwise, a codespace will remain under the ownership of the user.

## Choosing who owns and pays for codespaces

> [!NOTE]
> If you cannot access the option to make codespaces **organization-owned**, this may be because you have disabled GitHub Codespaces for all users in your organization's private and internal repositories. See [About choosing who pays for codespaces](#about-choosing-who-pays-for-codespaces).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**.

1. Under **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**, in the left sidebar, click **General**.

1. On the Codespaces settings page, under "Codespace ownership," select the setting you want for your organization:
   * **Organization ownership:** Codespaces can be owned and paid for by your organization.
   * **User ownership:** Codespaces are always owned and paid for by the user who creates the codespace.

1. Optionally, under "Codespaces access," review the members and collaborators for whom you have enabled Codespaces. These are the only users who can create codespaces that your organization pays for. See [Enabling Or Disabling GitHub Codespaces For Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization).

## Setting a spending limit

Accounts may have spending limits that prevent new codespaces being created, or existing codespaces being opened, if doing so would incur a billable cost to your personal, organization, or enterprise account. Check your account's budgets to ensure they are appropriate for your usage needs. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).


For information on managing and changing your account's spending limit, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets#managing-budgets-for-your-organization-or-enterprise).
