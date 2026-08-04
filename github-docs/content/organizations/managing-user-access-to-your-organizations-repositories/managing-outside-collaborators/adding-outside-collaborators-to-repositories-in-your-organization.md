# Adding outside collaborators to repositories in your organization

>[!NOTE] If your enterprise uses managed user accounts, the outside collaborator role is called "repository collaborator." Generally, the documentation for outside collaborators also applies to repository collaborators. For the distinctions that apply, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).



## About outside collaborators

An outside collaborator is a person who is not a member of your organization, but has access to one or more of your organization's repositories.
 You can choose the level of access to grant for each outside collaborator. When you add an outside collaborator to a repository, you'll also need to add them to any forks of the repository you'd like them to access. If you are adding an outside collaborator to a private or internal fork of a repository, the collaborator must be a member of the enterprise or have access to the upstream repository.


 Unless you are on a free plan, adding an outside collaborator to a private or internal repository will use one of your paid licenses. For more information, see "[About per-user pricing](/billing/reference/github-license-users){% elsif ghes %}[About billing for your enterprise](/billing/concepts/enterprise-billing/billing-for-enterprises)."



Organizations that use GitHub Enterprise Cloud can restrict the ability to invite collaborators. For more information, see [Setting Permissions For Adding Outside Collaborators](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators) in the GitHub Enterprise Cloud documentation.



Before you can add someone as an outside collaborator on a repository, the person must have a personal account on {% ifversion ghes %}your GitHub Enterprise Server instance. If your enterprise uses an external authentication system such as SAML or LDAP, the person you want to add must sign in through that system to create an account. If the person does not have access to the authentication system and built-in authentication is enabled for your enterprise, a site administrator can create an account for the person. For more information, see [Configuring Built In Authentication](https://docs.github.com/en/admin/managing-iam/using-built-in-authentication/configuring-built-in-authentication).
{% elsif ghec %}
Outside collaborators are not required to use SAML SSO to access resources in your organization. For more information, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).
{% endif %}

If your organization requires two-factor authentication, all outside collaborators must enable two-factor authentication before accepting your invitation to collaborate on a repository. For more information, see [Requiring Two Factor Authentication In Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization).

Outside collaborators cannot be added to a team, team membership is restricted to members of the organization.

## Adding outside collaborators to a repository

You can give outside collaborators access to a repository in your repository settings. For more information, see [Managing Teams And People With Access To Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person).
