# Controlling access to larger runners

## Managing access to larger runners

> [!NOTE]
> Before your workflows can send jobs to larger runners, you must first configure permissions for the runner group. See the following sections for more information.

Runner groups are used to control which repositories can run jobs on your larger runners. You must manage access to the group from each level of the management hierarchy, depending on where you've defined the larger runner:

* **Runners at the enterprise level:** By default, repositories in an organization do not have access to enterprise-level runner groups. To give repositories access to enterprise runner groups, organization owners must configure each enterprise runner group and choose which repositories have access.

* **Runners at the organization level:** By default, all repositories in an organization are granted access to organization-level runner groups. To restrict which repositories have access, organization owners and users with the "Manage organization runners and runner groups" permission must configure organization runner groups and choose which repositories have access.


For example, the following diagram has a runner group named `grp-ubuntu-24.04-16core` at the enterprise level. Before the repository named `octo-repo` can use the runners in the group, you must first configure the group at the enterprise level to allow access to the `octo-org` organization. You must then configure the group at the organization level to allow access to `octo-repo`.

![Diagram showing a runner group defined at the enterprise level with an organization configuration that allows access for two repositories.](/assets/images/help/actions/hosted-runner-mgmt.png)

## Creating a runner group for an organization

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.


{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

> [!WARNING]
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

>
> For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



{% endcomment %}

> [!NOTE]
> When creating a runner group, you must choose a policy that defines which repositories and workflows have access to the runner group. To change which repositories and workflows can access the runner group, organization owners and users with the “Manage organization runners and runner groups” permission can set a policy for the organization. For more information, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group).

All organizations have a single default runner group. Organization owners using the GitHub Team plan{% endif %} can create additional organization-level runner groups. For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

If no group is specified during the registration process, runners are automatically added to the default group. You can later move the runner from the default group to a custom group.

For information about how to create a runner group with the REST API, see [Actions](https://docs.github.com/en/rest/actions#self-hosted-runner-groups).

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runner groups**.


1. In the "Runner groups" section, click **New runner group**.
1. Enter a name for your runner group.
1. Assign a policy for repository access.

    You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization. By default, only private repositories can access runners in a runner group, but you can override this. This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.


1. Assign a policy for workflow access.

   You can configure a runner group to be accessible to a specific list of workflows, or to all workflows. This setting can't be overridden if you are configuring an organization's runner group that was shared by an enterprise. If you specify what workflow can access the runner group, you must use the full path to the workflow, including the repository name and owner, and you must pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@refs/tags/v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@refs/heads/main`.

   It is best practice to fully qualify ambiguous refs. For example, instead of providing `main` as a ref, provide `refs/heads/main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.
 Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.
1. Click **Create group** to create the group and apply the policy.





## Creating a runner group for an enterprise

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.


{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

> [!WARNING]
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

>
> For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



{% endcomment %}

Enterprises can add their runners to groups for access management. Enterprises can create groups of runners that are accessible to specific organizations in the enterprise account or to specific workflows. Organization owners can then assign additional granular repository or workflow access policies to the enterprise runner groups. For information about how to create a runner group with the REST API, see the enterprise endpoints in the [GitHub Actions REST API](/rest/actions#self-hosted-runner-groups).

If no group is specified during the registration process, runners are automatically added to a default group. You can later move the runner from the default group to a custom group.

When creating a group, you must choose a policy that defines which organizations have access to the runner group.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runner groups** tab.

1. Click **New runner group**.
1. Under "Group name", type a name for your runner group.

1. To choose a policy for organization access, select the **Organization access** dropdown menu and click a policy. You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise. By default, only private repositories can access runners in a runner group, but you can override this.


1. Assign a policy for workflow access.

   You can configure a runner group to be accessible to a specific list of workflows, or to all workflows. This setting can't be overridden if you are configuring an organization's runner group that was shared by an enterprise. If you specify what workflow can access the runner group, you must use the full path to the workflow, including the repository name and owner, and you must pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@refs/tags/v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@refs/heads/main`.

   It is best practice to fully qualify ambiguous refs. For example, instead of providing `main` as a ref, provide `refs/heads/main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.

1. Click **Save group** to create the group and apply the policy.







## Using unique names for runner groups

GitHub Actions requires that runner group names must be unique at the organization level. This means that an organization will no longer be able to create a runner group with the same name as one in the enterprise. In addition, users will see a warning banner on any runner groups that share the same name as a group in the enterprise, suggesting that the organization group should be renamed.

To avoid ambiguity, a workflow will fail if there are duplicate runner groups in the organization and enterprise. To address this, you can either rename one of your runner groups in the organization or enterprise, or you can update your workflow file to add a prefix to the runner group name:

* `org/` or `organization/`
* `ent/` or `enterprise/`

### Example: Using prefixes to differentiate runner groups

For example, if you have a runner group named `my-group` in the organization and another named `my-group` in the enterprise, you can update your workflow file to use `org/my-group` or `ent/my-group` to differentiate between the two.

Using `org/`:

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

Using `ent/`:

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```







## Changing which organizations can access a runner group

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



For runner groups in an enterprise, you can change what organizations in the enterprise can access a runner group.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runner groups** tab.


{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

> [!WARNING]
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

>
> For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



{% endcomment %}
1. Under "Organization access," use the dropdown menu to click **Selected organizations**.
   1. To the right of the dropdown menu, click {% octicon "gear" aria-label="The Gear icon" %}.
   1. In the popup, use the checkboxes to select organizations that can use this runner group.
1. Click **Save group**.




## Changing which repositories can access a runner group

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



For runner groups in an organization, you can change what repositories in the organization can access a runner group.

1. Navigate to the main page of the organization where your runner groups are located.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runner groups**.



{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

> [!WARNING]
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

>
> For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



{% endcomment %}
1. In the list of groups, click the runner group you'd like to configure.

1. Under "Repository access," use the dropdown menu to click **Selected repositories**.
   1. To the right of the dropdown menu, click {% octicon "gear" aria-label="The Gear icon" %}.
   1. In the popup, use the checkboxes to select repositories that can access this runner group.
1. Click **Save group**.




## Changing which workflows can access a runner group

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



You can configure a runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. This setting cannot be overridden if you are configuring an organization's runner group that was shared by an enterprise.


* [Changing which workflows can access an organization runner group](#changing-which-workflows-can-access-an-organization-runner-group)
* [Changing which workflows can access an enterprise runner group](#changing-which-workflows-can-access-an-enterprise-runner-group)

### Changing which workflows can access an organization runner group

1. Navigate to the main page of the organization where your runner groups are located.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runner groups**.



{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

> [!WARNING]
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

>
> For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



{% endcomment %}
1. In the list of groups, click the runner group you'd like to configure.

1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. Click {% octicon "gear" aria-label="the gear icon" %}.
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.

   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. Click **Save**.


### Changing which workflows can access an enterprise runner group


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runner groups** tab.


{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

> [!WARNING]
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

>
> For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.



{% endcomment %}
1. In the list of groups, click the runner group you'd like to configure.

1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. Click {% octicon "gear" aria-label="the gear icon" %}.
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.

   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. Click **Save**.






## Configuring private network access for larger runners

You can use GitHub-hosted runners in an Azure VNET. This enables you to use GitHub-managed infrastructure for CI/CD while providing you with full control over the networking policies of your runners. For more information about Azure VNET, see [What is Azure Virtual Network?](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) in the Azure documentation.


If you have configured your {% ifversion ghec %}enterprise or organization to connect to an Azure VNET, you can give runner groups access to the virtual network. For more information, see [Private Networking](https://docs.github.com/en/actions/concepts/runners/private-networking#using-an-azure-virtual-network-vnet).

You cannot assign macOS larger runners to a runner group that has a network configuration. Similarly, you cannot add a network configuration to a runner group that contains macOS larger runners.


{% endif %}

## Changing the name of a runner group


You can rename runner groups at the enterprise and organization levels.

* [Changing the name of an organization runner group](#changing-the-name-of-an-organization-runner-group)
* [Changing the name of an enterprise runner group](#changing-the-name-of-an-enterprise-runner-group)

### Changing the name of an organization runner group



1. Navigate to the main page of the organization where your runner groups are located.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runner groups**.



1. In the list of groups, click the runner group you'd like to configure.

1. Enter the new runner group name in the text field under "Group name."
1. Click **Save**.




### Changing the name of an enterprise runner group


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runner groups** tab.


1. In the list of groups, click the runner group you'd like to configure.

1. Enter the new runner group name in the text field under "Group name."
1. Click **Save**.



## Moving a runner to a group

If you don't specify a runner group during the registration process, your new runners are automatically assigned to the default group, and can then be moved to another group.



* [Moving an organization runner to a group](#moving-an-organization-runner-to-a-group)
* [Moving an enterprise runner to a group](#moving-an-enterprise-runner-to-a-group)

### Moving an organization runner to a group



1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. In the "Runners" list, click the runner that you want to configure.
1. Select the **Runner group** drop-down.
1. In "Move runner to group", choose a destination group for the runner.




### Moving an enterprise runner to a group


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the "Runners" list, click the runner that you want to configure.
1. Select the **Runner group** drop-down.
1. In "Move runner to group", choose a destination group for the runner.



## Removing a runner group

In order to remove a runner group, you must first move or remove all of the runners from the group.



* [Removing a runner group from an organization](#removing-a-runner-group-from-an-organization)
* [Removing a runner group from an enterprise](#removing-a-runner-group-from-an-enterprise)

### Removing a runner group from an organization



1. Navigate to the main page of the organization where your runner groups are located.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runner groups**.



1. In the list of groups, to the right of the group you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
1. To remove the group, click **Remove group**.
1. Review the confirmation prompts, and click **Remove this runner group**.




### Removing a runner group from an enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runner groups** tab.


1. In the list of groups, to the right of the group you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
1. To remove the group, click **Remove group**.
1. Review the confirmation prompts, and click **Remove this runner group**.
