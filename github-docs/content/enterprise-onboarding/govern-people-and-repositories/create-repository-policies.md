# Defining policies for repositories in your enterprise

>[!NOTE] Repository policies are currently in public preview and subject to change.
>You can have up to 75 total policies and rulesets per organization, and up to 75 total policies and rulesets per enterprise.


To govern key events in the lifecycle of your repositories, such as who can create or delete repositories, you can create a repository policy. A repository policy is a collection of restrictions that gives you flexible control over which users are affected and which repositories are targeted.

In a repository policy, you can restrict:

* Which **visibilities** are permitted for new repositories and visibility changes.
* Who can **create** repositories.
* Who can **delete** repositories.
* Who can **transfer** repositories out of an organization.
* How people can **name** repositories.


## Examples

You can use a repository policy to do things like:

* Ensure all new repositories use a certain naming convention, such as `kebab-case`.
* Prevent repository deletions except by organization admins.
* Allow public repositories to be created only in the "open source" organization in your enterprise.
* Prevent public repositories from being changed to private to avoid potential loss of metadata.


## Creating a repository policy


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "Policies", click **Repository**.
1. Click **New policy**.
1. Configure your new policy, then click **Create**. For help, consult the following subsections.

### Policy name

Use something descriptive to communicate the purpose of the policy. Organization owners can view the policy, so good names help add clarity. For example: `Prevent public repos on production`.

### Enforcement status

If you don't want the policy to be enforced when it's created, set to "Disabled". Otherwise, set to "Active".


### Allow list

Choose which roles can **bypass** the restrictions in this policy.


### Targets

Choose which organizations and repositories the policy applies to.

#### Target organizations

Select all organizations, choose a selection of existing organizations, or set a dynamic list by name. If you use Enterprise Managed Users, you can also choose to target all repositories owned by users in your enterprise.

If you set a dynamic list, you'll add one or more naming patterns using `fnmatch` syntax. For example, the string `*open-source` would match any organization with a name that ends with `open-source`. For syntax details, see [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).

#### Target repositories

Choose which repositories (current or future) to target in the selected organizations. You can select all repositories or set a dynamic list by custom property.

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




## Next steps

Create rulesets to consistently govern important branches in your enterprise's repositories. See [Protect Branches](https://docs.github.com/en/enterprise-onboarding/govern-people-and-repositories/protect-branches).
