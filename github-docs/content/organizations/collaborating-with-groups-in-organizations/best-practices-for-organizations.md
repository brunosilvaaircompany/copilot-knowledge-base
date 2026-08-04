# Best practices for organizations

## Assign multiple owners

If an organization only has one owner, the organization's projects can become inaccessible if the owner is unreachable. To ensure that no one will lose access to a project, we recommend that at least two people within each organization have the owner role.
 For more information, see [Maintaining Ownership Continuity For Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization).

## Use teams

We recommend using teams to facilitate collaboration in your organization. For more information, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams).


We highly recommend managing team membership through your identity provider (IdP). For more information, see [Managing Team Synchronization For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).



> [!NOTE]
> If your enterprise uses Enterprise Managed Users, you do not need to use team synchronization. Instead, you can manage team membership via the SCIM configuration you created while setting up your enterprise. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).





We recommend keeping teams visible whenever possible and reserving secret teams for sensitive situations. For more information, see [Changing Team Visibility](https://docs.github.com/en/organizations/organizing-members-into-teams/changing-team-visibility).



## Use security overview

Security overview provides high-level summaries of the security landscape of an organization or enterprise and makes it easy to identify repositories that require intervention.
 For more information, see [Security Overview](https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview).
