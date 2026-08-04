# Disabling or limiting GitHub Actions for your organization

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## About GitHub Actions permissions for your organization

By default, after GitHub Actions is enabled on GitHub Enterprise Server, it{% elsif fpt or ghec %}GitHub Actions is enabled on all repositories and organizations. You can choose to disable GitHub Actions or limit it to actions and reusable workflows in your enterprise.
 For more information about GitHub Actions, see [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows).

You can enable GitHub Actions for all repositories in your organization. When you enable GitHub Actions, workflows are able to run actions and reusable workflows located within your repository and any other public{% elsif ghec or ghes %} public or internal repository.
 You can disable GitHub Actions for all repositories in your organization. When you disable GitHub Actions, no workflows run in your repository.


Alternatively, you can enable GitHub Actions for all repositories in your organization but limit the actions and reusable workflows a workflow can run.

## Managing GitHub Actions permissions for your organization

You can choose to disable GitHub Actions for all repositories in your organization, or only allow specific repositories. You can also limit the use of public actions and reusable workflows, so that people can only use local actions and reusable workflows that exist in your enterprise.

> [!NOTE]
> You might not be able to manage these settings if your organization is managed by an enterprise that has overriding policy. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Policies", select an option.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}
1. Click **Save**.

<span name="allowing-select-actions-to-run"></span>
<span name="allowing-specific-actions-to-run"></span>

### Allowing select actions and reusable workflows to run

When you choose **Allow enterprise, and select non-enterprise, actions and reusable workflows**
, local actions (`./` and `$/`) and reusable workflows are allowed, and there are additional options for allowing other specific actions and reusable workflows:

> [!NOTE]
> You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise that has overriding policy. For more information, see [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization) or [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).


* **Allow actions created by GitHub:** You can allow all actions created by GitHub to be used by workflows. Actions created by GitHub are located in the `actions` and `github` organizations. For more information, see the [`actions`](https://github.com/actions) and [`github`](https://github.com/github) organizations.
* **Allow Marketplace actions by verified creators:** This option is available if you have GitHub Connect enabled and configured with GitHub Actions. For more information, see [Enabling Automatic Access To Githubcom Actions Using GitHub Connect](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect). You can allow all GitHub Marketplace actions created by verified creators to be used by workflows. When GitHub has verified the creator of the action as a partner organization, the {% octicon "verified" aria-label="The verified badge" %} badge is displayed next to the action in GitHub Marketplace.
* **Allow or block specified actions and reusable workflows:** You can restrict workflows to use actions and reusable workflows in specific organizations and repositories. Specified actions cannot be set to more than 1000.

  To restrict access to specific tags or commit SHAs of an action or reusable workflow, use the same syntax used in the workflow to select the action or reusable workflow.

  * For an action, the syntax is `OWNER/REPOSITORY@TAG-OR-SHA`. For example, use `actions/javascript-action@v1.0.1` to select a tag or `actions/javascript-action@a824008085750b8e136effc585c3cd6082bd575f` to select a SHA. For more information, see [Find And Customize Actions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/find-and-customize-actions#using-release-management-for-your-custom-actions).
  
  * For a reusable workflow, the syntax is `OWNER/REPOSITORY/PATH/FILENAME@TAG-OR-SHA`. For example, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. For more information, see [Reuse Workflows](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#calling-a-reusable-workflow).
  

  You can use the `*` wildcard character to match patterns. For example, to allow all actions and reusable workflows in organizations that start with `space-org`, you can specify `space-org*/*`. To allow all actions and reusable workflows in repositories that start with octocat, you can use `*/octocat**@*`. For more information about using the `*` wildcard, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#filter-pattern-cheat-sheet).

  Use `,` to separate patterns. For example, to allow all actions and reusable workflows from the `octocat` and `octokit` organizations, you can specify `octocat/*, octokit/*`.

  
  Use the `!` prefix to block patterns. For example, to allow all actions and reusable workflows from the `space-org` organization, but block a specific action like `space-org/action`, you can specify `space-org/*, !space-org/action@*`. By default, only actions and reusable workflows specified in the list will be allowed. To allow all actions and reusable workflows while also blocking specific actions, you can specify `*, !space-org/action@*`.
  

This procedure demonstrates how to add specific actions and reusable workflows to the list.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Policies", select **Allow enterprise, and select non-enterprise, actions and reusable workflows**
 and add your required actions and reusable workflows to the list.
1. Click **Save**.

## Limiting the use of self-hosted runners

There is no guarantee that self-hosted runners for GitHub will be hosted on ephemeral, clean virtual machines. As a result, they may be compromised by untrusted code in a workflow.

Similarly, anyone who can fork the repository and open a pull request (generally those with read access to the repository) can compromise the self-hosted runner environment, including gaining access to secrets and the `GITHUB_TOKEN` which, depending on its settings, can grant write access to the repository. Although workflows can control access to environment secrets by using environments and required reviews, these workflows are not run in an isolated environment and are still susceptible to the same risks when run on a self-hosted runner.

For these and other reasons, you may decide to prevent people creating self-hosted runners at the repository level.




> [!NOTE]
> If your organization belongs to an enterprise, creation of self-hosted runners at the repository level may have been disabled as an enterprise-wide setting. If this has been done, you cannot enable repository-level self-hosted runners in your organization settings. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).



If a repository already has self-hosted runners when you disable their use, these will be listed with the status "Disabled" and they will not be assigned any new workflow jobs.

![Screenshot of the "Runners" list showing a self-hosted runner with the status "Disabled."](/assets/images/help/actions/actions-runners-disabled.png)

> [!NOTE] When creation of repository-level self-hosted runners is disabled, workflows can still access self-hosted runners at the enterprise or organization level.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Runners," use the dropdown menu to choose your preferred setting:
   * **All repositories** - self-hosted runners can be used for any repository in your organization.
   * **Selected repositories** - self-hosted runners can only be used for the repositories you select.
   * **Disabled** - self-hosted runners cannot be created at the repository level.
1. If you choose **Selected repositories**:
   1. Click {% octicon "gear" aria-label="Select repositories" %}.
   1. Select the check boxes for the repositories for which you want to allow self-hosted runners.
   1. Click **Select repositories**.

## Disabling standard hosted runners

You can disable standard GitHub-hosted runners at the organization level. This setting requires workflows to target runners through runner groups and helps enforce consistent access controls and governance.

For information about job concurrency limits for GitHub-hosted runners, see [Limits](https://docs.github.com/en/actions/reference/limits#job-concurrency-limits-for-github-hosted-runners).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Scroll to the "Standard hosted runners" section and click **Disable for all repositories**.
1. Click **Save**.



## Configuring required approval for workflows from public forks

Anyone can fork a public repository, and then submit a pull request that proposes changes to the repository's GitHub Actions workflows. Although workflows from forks do not have access to sensitive data such as secrets, they can be an annoyance for maintainers if they are modified for abusive purposes.

To help prevent this, workflows on pull requests to public repositories from some outside contributors will not run automatically, and might need to be approved first. Depending on the "Approval for running fork pull request workflows from contributors" setting, workflows on pull requests to public repositories will not run automatically and may need approval if:

* The pull request is **created by** a user that requires approvals based on the selected policy.
* The pull request event is **triggered by** a user that requires approvals based on the selected policy.

By default, all first-time contributors require approval to run workflows.

Workflows triggered by `pull_request_target` events are run in the context of the base branch. Since the base branch is considered trusted, workflows triggered by these events will always run, regardless of approval settings. For more information about the `pull_request_target` event, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request_target).

> [!WARNING] These workflow approval policies are intended to restrict the set of users that can execute workflows in GitHub Actions runners that could lead to unexpected resource and compute consumption when using GitHub-hosted runners. If you are using self-hosted runners, potentially malicious user-controlled workflow code will execute automatically if the user is allowed to bypass approval in the set approval policy or if the pull request is approved. You must consider the risk of executing this code in your infrastructure and should review and follow the self-hosted runner security recommendations regardless of the approval settings utilized. See [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#hardening-for-self-hosted-runners).


You can configure this behavior for an organization using the procedure below. Modifying this setting overrides the configuration set at the enterprise level.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Approval for running fork pull request workflows from contributors**, choose which subset of users will require approval before running workflows on their pull requests. Both the pull request author and the actor of the pull request event triggering the workflow will be checked to determine if approval is required. If approval is required, a user with write access to the repository must approve the pull request workflow to be run. See [Approve Runs From Forks](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks).

   >[!WARNING] When requiring approvals only for first-time contributors (the first two settings), a user that has had any commit or pull request merged into the repository will not require approval. A malicious user could meet this requirement by getting a simple typo or other innocuous change accepted by a maintainer, either as part of a pull request they have authored or as part of another user's pull request.

   * **Require approval for first-time contributors who are new to GitHub**. Only users who are both new on GitHub and who have never had a commit or pull request merged into this repository will require approval to run workflows.  
   * **Require approval for first-time contributors**. Only users who have never had a commit or pull request merged into this repository will require approval to run workflows.
   * **Require approval for all external contributors** All users that are not a member or owner of this repository and not a member of the organization will require approval to run workflows.

1. Click **Save** to apply the settings.


For more information about approving workflow runs that this policy applies to, see [Approve Runs From Forks](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks).



## Enabling workflows for private repository forks

If you rely on using forks of your private repositories, you can configure policies that control how users can run workflows on `pull_request` events. Available to private repositories only, you can configure these policy settings for organizations or repositories., organizations, or repositories.{% endif %}


If a policy is disabled for an enterprise, it cannot be enabled for organizations. If a policy is disabled for an organization, it cannot be enabled for repositories. If an organization enables a policy, the policy can be disabled for individual repositories.

* **Run workflows from fork pull requests** - Allows users to run workflows from fork pull requests, using a `GITHUB_TOKEN` with read-only permission, and with no access to secrets.
* **Send write tokens to workflows from pull requests** - Allows pull requests from forks to use a `GITHUB_TOKEN` with write permission.
* **Send secrets to workflows from pull requests** - Makes all secrets available to the pull request.
* **Require approval for fork pull request workflows** - Workflow runs on pull requests from collaborators without write permission will require approval from someone with write permission before they will run.


### Configuring the private fork policy for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Fork pull request workflows**, select your options.
1. Click **Save** to apply the settings.


## Setting the permissions of the `GITHUB_TOKEN` for your organization

You can set the default permissions granted to the `GITHUB_TOKEN`. For more information about the `GITHUB_TOKEN`, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token). You can choose a restricted set of permissions as the default, or apply permissive settings.


You can set the default permissions for the `GITHUB_TOKEN` in the settings for your organization or your repositories. If you select a restrictive option as the default in your organization settings, the same option is selected in the settings for repositories within your organization, and the permissive option is disabled. If your organization belongs to a GitHub Enterprise account and a more restrictive default has been selected in the enterprise settings, you won't be able to select the more permissive default in your organization settings.

Anyone with write access to a repository can modify the permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, by editing the `permissions` key in the workflow file. For more information, see [`permissions`](/actions/reference/workflows-and-actions/workflow-syntax#permissions).


### Configuring the default `GITHUB_TOKEN` permissions

By default, when you create a new organization, the setting is inherited from what is configured in the enterprise settings.

1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Workflow permissions", choose whether you want the `GITHUB_TOKEN` to have read and write access for all permissions (the permissive setting), or just read access for the `contents` and `packages` permissions (the restricted setting).

1. Click **Save** to apply the settings.

### Preventing GitHub Actions from creating or approving pull requests

You can choose to allow or prevent GitHub Actions workflows from creating or approving pull requests.


By default, when you create a new organization, workflows are not allowed to create or approve pull requests.

1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Workflow permissions", use the **Allow GitHub Actions to create and approve pull requests** setting to configure whether `GITHUB_TOKEN` can create and approve pull requests.
1. Click **Save** to apply the settings.

## Managing GitHub Actions cache storage for your organization

Organization administrators can view and manage GitHub Actions cache storage for all repositories in the organization.

### Viewing GitHub Actions cache storage by repository

For each repository in your organization, you can see how much cache storage a repository is using, the number of active caches, and if a repository is near the total cache size limit. For more information about the cache usage and eviction process, see [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#usage-limits-and-eviction-policy).

1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Caches**.
1. Review the list of repositories for information about their GitHub Actions caches. You can click on a repository name to see more detail about the repository's caches.



### Configuring GitHub Actions cache settings for your organization

You can configure cache retention and size settings that will apply to all repositories in your organization. This feature is opt-in and available to users with a payment method on file.

If your organization is owned by an enterprise that has configured cache settings, you can only configure limits up to the maximum set by the enterprise. If your organization is not owned by an enterprise (or the enterprise hasn't configured cache settings), you can configure up to the global maximums.

Repository administrators can opt in to configure limits for their repositories, but cannot exceed the limits set at the organization level.

1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.



1. In the "Cache" section, configure and save your changes to the following settings:
   * **Cache retention**: The maximum number of days to retain caches before automatic deletion. The default is 7 days. You can configure up to 365 days (or up to the limit set by your enterprise). Click **Save** to apply any changes you make.
   * **Cache size eviction limit**: The maximum total size of all caches in a repository. The default is 10 GB. You can configure up to 10,000 GB per repository (or up to the limit set by your enterprise). When this limit is exceeded, older caches will be evicted to make room for new caches. Click **Save** to apply any changes you make.

For more information about cache eviction, see [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#usage-limits-and-eviction-policy).





### Configuring GitHub Actions cache storage for your organization

By default, the total cache storage that GitHub Actions uses on the external storage for GitHub is limited to a maximum of 10 GB per repository, and the maximum allowed size that can be set for a repository is 25 GB.


You can configure the size limit for GitHub Actions caches that will apply to each repository in your organization. The cache size limit for an organization cannot exceed the cache size limit set in the enterprise policy. Repository admins will be able to set a smaller limit in their repositories.

1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Cache size limit**, enter a new value.
1. Click **Save** to apply the change.
