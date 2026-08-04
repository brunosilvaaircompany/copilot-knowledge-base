# Teams in an enterprise

## What are teams?

Teams are **groups of users** in an enterprise or organization. By creating teams, you can manage users at scale and simplify access, licensing, and communication. For example, you could create an auditor team for users who need access to audit logs, or a Copilot team for users who receive Copilot licenses.

**Enterprise teams** are managed at the enterprise level and can include users from across the enterprise and its organizations. With enterprise teams, you can centralize administration and manage organization access, roles, and licensing at scale.

**Organization teams** are managed at the organization level and can only include members of a single organization. There are certain features of organization teams that are not currently supported for enterprise teams, such as CODEOWNER status.

## Can I manage teams from an identity provider?

If you have enabled SCIM user provisioning on GitHub Enterprise Server, you can link teams on GitHub with groups in your IdP. When membership of the IdP group changes, the change is reflected in the GitHub team, allowing you to centralize access management.


The capabilities of this feature depend on whether you use Enterprise Managed Users or personal accounts.

### Enterprise Managed Users



You can make changes to IdP groups to manage repository access, add or remove users from organizations, or grant or remove GitHub Copilot licenses. For example, if a new user is added to an IdP group that is linked to a team with access to an organization, the user receives access to that organization. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).

This feature is available with both enterprise and organization teams.



### Personal accounts

Team synchronization allows you to centrally manage any privileges linked to an organization team, such as repository access and CODEOWNER status. However, team sync cannot be used to add users to organizations where they don't already have access. For more information, see [Managing Team Synchronization For Organizations In Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise).

Team sync with personal accounts is only available with organization teams, and you must use Entra ID or Okta as an IdP.



## What kind of team should I use?

To simplify administration at scale, GitHub recommends using enterprise teams for any use cases that apply to the enterprise account or to multiple organizations. Organization teams are useful when the need for the team is scoped to a single organization and the team can be managed by an organization administrator.

You may need to create organization teams if the functionality you need is not covered by enterprise teams. The limitations listed below reflect the current capabilities of enterprise teams and may change over time.

## What can enterprise teams do?

Enterprise teams can:


* Receive **Copilot Business licenses** directly from the enterprise.
* Be granted access to specific Copilot models (opt-in preview).

* Be assigned **predefined and custom enterprise roles**, giving members access to enterprise settings.
* Be **added to organizations**, where organization administrators can grant the team additional access and permissions.
* Receive **bypass access** on rulesets.

* Be mentioned, assigned, or requested for review in **issues and pull requests**.





To @-mention an enterprise team, or request a review from the team, use the team's slug in the format `@/ent:TEAM-SLUG`. GitHub generates the slug from the team's name and adds the `ent:` prefix, so an enterprise team named `Platform SRE` has the slug `ent:platform-sre`.

To mention the team from an organization it is assigned to, such as `octo-org`, use `@octo-org/ent:platform-sre`. You can mention an enterprise team from any organization the team is assigned to.



However, unlike organization teams, enterprise teams currently do **not** support:



* Adding the team to a project board

* Team sync if you use GitHub Enterprise Cloud with personal accounts

* CODEOWNER status
* Secret teams
* Nested teams
* Team maintainers

There are **limits on enterprise teams**. You can create up to 2,500 teams for a single enterprise and add up to 5,000 users to each team. Each team can be assigned to a maximum of 15,000 organizations.


For more information about the capabilities of organization teams, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams).

## Next steps

If your needs are covered by enterprise teams, create a team. See [Create Enterprise Teams](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

If you need to create an organization team, an organization owner must do this from the organization settings. See [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team).
