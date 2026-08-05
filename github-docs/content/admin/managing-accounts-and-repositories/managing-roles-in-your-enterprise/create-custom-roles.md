# Creating custom roles in an enterprise

To tailor access management to your company's needs, you can create custom roles for your enterprise account and organizations.

Custom roles are sets of permissions for settings and resources that you can assign to users and teams. To learn best practices for using roles on GitHub, see [Identify Role Requirements](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/identify-role-requirements).



## Creating enterprise custom roles

> [!NOTE] This feature is in public preview and subject to change.

Enterprise custom roles grant access to a subset of enterprise settings, such as viewing audit logs and creating organizations. GitHub plans to expand the list of available permissions over time.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. In the left sidebar, click **{% octicon "globe" aria-hidden="true" aria-label="globe" %} Enterprise roles**, then click **Role management**.
1. Click **Create custom role**.

1. Enter the details, then click **Create role**.



## Creating organization custom roles

Organization custom roles grant access to organization settings and repositories. Custom organization roles created at the enterprise level use the same permissions and base roles as roles created at the organization level. For more information, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

Enterprise owners can create and edit custom organization roles, but cannot assign them. Organization owners can assign custom roles in an organization.

> [!NOTE] An enterprise can create up to 20 custom organization roles. This limit applies to the enterprise: each organization can also create up to 20 custom organization roles.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. In the left sidebar, select **Organization roles**.
1. Click **Create custom role**.
1. Enter the details, then click **Create role**.



## Next steps

You can manage role assignments at scale using teams. Learn about teams in your enterprise and organizations in [Teams In An Enterprise](https://docs.github.com/en/admin/concepts/enterprise-fundamentals/teams-in-an-enterprise).
