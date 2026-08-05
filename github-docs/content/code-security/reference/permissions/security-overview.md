# Security overview permissions

The actions you can take in the security overview depend on your permissions for the repositories in your organization or enterprise.

## Organization-level overview

If you are an **owner or security manager** for an organization, you can see data for all the repositories in the organization in all views.

If you are an **organization or team member**, you can view security overview for the organization and see data for repositories where you have an appropriate level of access.



> [!TIP] The Assessments view, which is not shown in the table below, is only available to organization owners and security managers.



{% rowheaders %}

| Organization or team member with | Overview dashboard view | Risk and alerts views | Coverage view |
|--------------------|-------------|---------------------|---------|
| `admin` access for one or more repositories | View data for those repositories | View data for those repositories |  View data for those repositories |
| `write` access for one or more repositories | View code scanning and Dependabot data for those repositories | View code scanning and Dependabot data for those repositories | No access |
| `read` or `triage` access for one or more repositories | No access | No access | No access |
| Security alert access for one or more repositories | View all security alert data for those repositories | View all security alert data for those repositories | No access |
| Custom organization role with permission to view one or more types of security alert | View allowed alert data for all repositories |  View allowed alert data for all repositories in all views  | No access |

{% endrowheaders %}

> [!NOTE]
> To ensure a consistent and responsive experience, for organization members, the organization-level security overview pages will only display results from the most recently updated 3,000 repositories. If your results have been restricted, a notification will appear at the top of the page. Organization owners and security managers will see results from all repositories.

For more information about access to security alerts and related views, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) and [About Custom Repository Roles](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles#security).

## Enterprise-level overview

> [!NOTE]
> If you are an **enterprise owner**, you will need to join an organization as an organization owner to view data for the organization's repositories in both the organization-level and enterprise-level overview. Only people with admin permissions to the repository containing a leaked secret can view security alert details and token metadata for an alert. Enterprise owners can request temporary access to the repository for this purpose.
 For more information, see [Managing Your Role In An Organization Owned By Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).

In the enterprise-level security overview, you can see data for all organizations where you are an **organization owner or security manager**.


If you're an owner of an enterprise with managed users, you can view data from user-owned repositories in security overview and filter by repository owner type. For more information on managed user accounts, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).
