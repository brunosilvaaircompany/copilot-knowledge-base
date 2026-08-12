# Governing how people use repositories in your organization

>[!NOTE] Repository policies are currently in public preview and subject to change.
>You can have up to 75 total policies and rulesets per organization, and up to 75 total policies and rulesets per enterprise.


To govern key events in the lifecycle of your repositories, such as who can create or delete repositories, you can create a repository policy. A repository policy is a collection of restrictions that gives you flexible control over which users are affected and which repositories are targeted.

In a repository policy, you can restrict:

* Which **visibilities** are permitted for new repositories and visibility changes.
* Who can **create** repositories.
* Who can **delete** repositories.
* Who can **transfer** repositories out of an organization.
* How people can **name** repositories.


>[!TIP] If you're an **enterprise owner**, you can create a repository policy that applies to multiple organizations. See [Governing How People Use Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise).

## Examples

You can use a repository policy to do things like:

* Ensure all new repositories use a certain naming convention, such as `kebab-case`.
* Prevent repository deletions except by organization admins.
* Allow public repositories to be created only in the "open source" organization in your enterprise.
* Prevent public repositories from being changed to private to avoid potential loss of metadata.


## How will I target repositories?

We recommend using repository policies alongside **custom repository properties**. By adding custom properties to repositories, you will be able to flexibly target those repositories in a policy.

For example, you can add a property to mark repositories that contain production data or other sensitive information, then prevent anyone from making those repositories public.

To create and set custom properties, see [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).


As an alternative to custom properties, you can choose from a list of repositories or use `fnmatch` syntax to target repositories with certain naming patterns.

## Interaction with other policies

Some of the available restrictions are duplicates of policies you may have set on the "Member privileges" page in your organization or enterprise settings.

Creating a repository policy does **not** override your existing "member privilege" policies. Instead, the policies are additive, so that the most restrictive version of a policy applies. This applies both to **member privilege policies** and to other **repository policies** that people have created at the enterprise or organization level.

Compared to member privilege policies, repository policies have several advantages:

* They offer more flexible targeting of organizations and repositories.
* They allow you to give certain actors the option to bypass the policies.


## Creating a repository policy

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. On the left side of the page, in the sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.
1. Under "Policies", click **Repository**.
1. Click **New policy**.
1. Configure your new policy, then click **Create**. For help, consult the following subsections.

### Policy name

Use something descriptive to communicate the purpose of the policy. For example: `Prevent public repos on production`.

### Enforcement status

If you don't want the policy to be enforced when it's created, set to "Disabled". Otherwise, set to "Active".


### Allow list

Choose which roles can **bypass** the restrictions in this policy.


### Targets

Choose which repositories in the organization the policy applies to. You can select all repositories, choose a selection of existing repositories, or create a dynamic rule by name or custom property for current and future repositories.

If you set a dynamic list by name, you'll add one or more naming patterns using `fnmatch` syntax.
* For example, the string `*open-source` would match any repository with a name that ends with `open-source`. For syntax details, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).
* Optionally, you can prevent anyone outside the allow list from renaming the selected repositories. Alternatively, you can control the format of names in the "Policies" section.

### Policies

Choose which restrictions are included. When the policy is active, the restrictions apply across all targeted repositories, but can be bypassed by users or teams on the allow list.

If you choose the "Restrict names" policy, you must use **regular expression** syntax to set a pattern that repository names must or must not match. For example, a pattern to enforce `kebab-case` naming would look like `^([a-z][a-z0-9]*)(-[a-z0-9]+)*$`.
* Patterns support RE2 syntax. See Google's [syntax guide](https://github.com/google/re2/wiki/Syntax).
* To validate your expressions, click **Test pattern**, then enter a pattern and test value.


### Delegating bypass of policies



> [!NOTE] Repository policy delegated bypass is in public preview and subject to change.

Delegated bypass for repository policies lets you control who can bypass repository policies for repository deletions and visibility changes.

With delegated bypass, repository administrators must submit a request to change the visibility of the repository or delete the repository. The request is sent to a designated group of reviewers, who either approve or deny the request to bypass repository policies.

If the request to bypass repository policies is approved, the request change is completed immediately. If the request is denied, the requested change will not be made but may be re-requested.

To configure delegated bypass, enterprise owners or organization owners first create a "bypass list". The bypass list includes specific roles and teams, such as team or repository administrators, who oversee requests to bypass repository policies.




#### Managing bypass requests

> [!NOTE] Repository policy delegated bypass is in public preview and subject to change.

You can view and manage all requests for bypass privileges on the “Bypass Requests" page, located under the **Policy** settings.

You can filter requests by approver (member of the bypass list), requester (contributor making the request), timeframe, and status. The following statuses are assigned to a request:

|Status|Description|
|---------|-----------|
|`Cancelled`| The request has been cancelled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`| The request has expired. Requests are valid for 7 days. |
|`Open`| The request has either not yet been reviewed, or has been approved but the commit(s) have not been pushed to the repository.  |

When a contributor requests bypass privileges to push a commit containing restricted content, members of the bypass list all receive an email notification containing a link to the request. Members of the bypass list then have 7 days to review and either approve or deny the request before the request expires.

The contributor is notified of the decision by email and must take the required action. If the request is approved, the contributor can push the commit containing the restricted content to the repository. If the request is denied, the contributor must remove the restricted content from the commit in order to successfully push the commit to the repository.
