# Managing GitHub Actions settings for a repository

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## About GitHub Actions permissions for your repository

By default, after GitHub Actions is enabled on GitHub Enterprise Server, it{% elsif fpt or ghec %}GitHub Actions is enabled on all repositories and organizations. You can choose to disable GitHub Actions or limit it to actions and reusable workflows in your enterprise.
 For more information about GitHub Actions, see [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows).

You can enable GitHub Actions for your repository. When you enable GitHub Actions, workflows are able to run actions and reusable workflows located within your repository and any other public{% elsif ghec or ghes %} public or internal repository.
 You can disable GitHub Actions for your repository altogether. When you disable GitHub Actions, no workflows run in your repository.


Alternatively, you can enable GitHub Actions in your repository but limit the actions and reusable workflows a workflow can run.

## Managing GitHub Actions permissions for your repository

You can disable GitHub Actions for a repository, or set a policy that configures which actions and reusable workflows can be used in the repository.

> [!NOTE]
> You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise that has overriding policy. For more information, see [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization) or [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).




> [!NOTE]
> If you see **GitHub Actions is currently disabled for this repository** or **GitHub Actions is currently disabled for your account**, the repository or account may be in a separate GitHub-controlled disabled state, and changing these settings won't restore access.
> Contact GitHub Support for review.



1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Actions permissions", select an option.

   If you choose **Allow enterprise, and select non-enterprise, actions and reusable workflows**
, actions and reusable workflows within your enterprise are allowed, and there are additional options for allowing other specific actions and reusable workflows. For more information, see [Allowing select actions and reusable workflows to run](#allowing-select-actions-and-reusable-workflows-to-run).

When you allow actions and reusable workflows from only in your enterprise, the policy blocks all access to actions authored by GitHub. For example, the [`actions/checkout`](https://github.com/actions/checkout) action would not be accessible.


When you enable **Require actions to be pinned to a full-length commit SHA**, all actions must be pinned to a full-length commit SHA to be used. This includes actions from your enterprise and actions authored by GitHub. Reusable workflows can still be referenced by tag. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions).


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


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Actions permissions", select **Allow enterprise, and select non-enterprise, actions and reusable workflows**
 and add your required actions to the list.
1. Click **Save**.



## Controlling changes from forks to workflows in public repositories

Anyone can fork a public repository, and then submit a pull request that proposes changes to the repository's GitHub Actions workflows. Although workflows from forks do not have access to sensitive data such as secrets, they can be an annoyance for maintainers if they are modified for abusive purposes.

To help prevent this, workflows on pull requests to public repositories from some outside contributors will not run automatically, and might need to be approved first. Depending on the "Approval for running fork pull request workflows from contributors" setting, workflows on pull requests to public repositories will not run automatically and may need approval if:

* The pull request is **created by** a user that requires approvals based on the selected policy.
* The pull request event is **triggered by** a user that requires approvals based on the selected policy.

By default, all first-time contributors require approval to run workflows.

Workflows triggered by `pull_request_target` events are run in the context of the base branch. Since the base branch is considered trusted, workflows triggered by these events will always run, regardless of approval settings. For more information about the `pull_request_target` event, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request_target).

> [!WARNING] These workflow approval policies are intended to restrict the set of users that can execute workflows in GitHub Actions runners that could lead to unexpected resource and compute consumption when using GitHub-hosted runners. If you are using self-hosted runners, potentially malicious user-controlled workflow code will execute automatically if the user is allowed to bypass approval in the set approval policy or if the pull request is approved. You must consider the risk of executing this code in your infrastructure and should review and follow the self-hosted runner security recommendations regardless of the approval settings utilized. See [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#hardening-for-self-hosted-runners).


You can configure this behavior for a repository using the procedure below. Modifying this setting overrides the configuration set at the organization or enterprise level.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Approval for running fork pull request workflows from contributors**, choose which subset of users will require approval before running workflows on their pull requests. Both the pull request author and the actor of the pull request event triggering the workflow will be checked to determine if approval is required. If approval is required, a user with write access to the repository must approve the pull request workflow to be run. See [Approve Runs From Forks](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks).

   >[!WARNING] When requiring approvals only for first-time contributors (the first two settings), a user that has had any commit or pull request merged into the repository will not require approval. A malicious user could meet this requirement by getting a simple typo or other innocuous change accepted by a maintainer, either as part of a pull request they have authored or as part of another user's pull request.

   * **Require approval for first-time contributors who are new to GitHub**. Only users who are both new on GitHub and who have never had a commit or pull request merged into this repository will require approval to run workflows.  
   * **Require approval for first-time contributors**. Only users who have never had a commit or pull request merged into this repository will require approval to run workflows.
   * **Require approval for all external contributors** All users that are not a member or owner of this repository and not a member of the organization will require approval to run workflows.

1. Click **Save** to apply the settings.


For more information about approving workflow runs that this policy applies to, see [Approve Runs From Forks](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks).



## Enabling workflows for forks of private repositories

If you rely on using forks of your private repositories, you can configure policies that control how users can run workflows on `pull_request` events. Available to private repositories only, you can configure these policy settings for organizations or repositories., organizations, or repositories.{% endif %}


If a policy is disabled for an enterprise or organization, it cannot be enabled for a repository.

* **Run workflows from fork pull requests** - Allows users to run workflows from fork pull requests, using a `GITHUB_TOKEN` with read-only permission, and with no access to secrets.
* **Send write tokens to workflows from pull requests** - Allows pull requests from forks to use a `GITHUB_TOKEN` with write permission.
* **Send secrets to workflows from pull requests** - Makes all secrets available to the pull request.
* **Require approval for fork pull request workflows** - Workflow runs on pull requests from collaborators without write permission will require approval from someone with write permission before they will run.


### Configuring the fork policy for a private repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Fork pull request workflows**, select your options.
1. Click **Save** to apply the settings.


## Setting the permissions of the `GITHUB_TOKEN` for your repository

You can set the default permissions granted to the `GITHUB_TOKEN`. For more information about the `GITHUB_TOKEN`, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token). You can choose a restricted set of permissions as the default, or apply permissive settings.


The default permissions can also be configured in the organization settings. If your repository belongs to an organization and a more restrictive default has been selected in the organization settings, the same option is selected in your repository settings and the permissive option is disabled.

Anyone with write access to a repository can modify the permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, by editing the `permissions` key in the workflow file. For more information, see [`permissions`](/actions/reference/workflows-and-actions/workflow-syntax#permissions).


### Configuring the default `GITHUB_TOKEN` permissions

By default, when you create a new repository in your personal account, `GITHUB_TOKEN` only has read access for the `contents` and `packages` scopes. If you create a new repository in an organization, the setting is inherited from what is configured in the organization settings.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Workflow permissions", choose whether you want the `GITHUB_TOKEN` to have read and write access for all permissions (the permissive setting), or just read access for the `contents` and `packages` permissions (the restricted setting).

1. Click **Save** to apply the settings.

### Preventing GitHub Actions from creating or approving pull requests

You can choose to allow or prevent GitHub Actions workflows from creating or approving pull requests.


By default, when you create a new repository in your personal account, workflows are not allowed to create or approve pull requests. If you create a new repository in an organization, the setting is inherited from what is configured in the organization settings.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under "Workflow permissions", use the **Allow GitHub Actions to create and approve pull requests** setting to configure whether `GITHUB_TOKEN` can create and approve pull requests.
1. Click **Save** to apply the settings.



## Allowing access to components in an internal repository

{% ifversion internal-actions %}Actions and reusable workflows in your internal repositories can be shared with internal and private repositories in the same organization or enterprise. For information about internal repositories, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).

You can use the steps below to configure whether actions and reusable workflows in an internal repository can be accessed from outside the repository. For more information, see [Share With Your Enterprise](https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-enterprise). Alternatively, you can use the REST API to set, or get details of the level of access. For more information, see [Permissions](https://docs.github.com/en/rest/actions/permissions#get-the-level-of-access-for-workflows-outside-of-the-repository) and [Permissions](https://docs.github.com/en/rest/actions/permissions#set-the-level-of-access-for-workflows-outside-of-the-repository).

1. On GitHub, navigate to the main page of the internal repository.
1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Access**, choose one of the access settings:

   * **Not accessible** - Workflows in other repositories cannot access this repository.
   * **Accessible from repositories in the 'ORGANIZATION NAME' organization** - Workflows in other repositories that are part of the 'ORGANIZATION NAME' organization can access the actions and reusable workflows in this repository. Access is allowed only from private or internal repositories.
   * **Accessible from repositories in the 'ENTERPRISE NAME' enterprise** - Workflows in other repositories that are part of the 'ENTERPRISE NAME' enterprise can access the actions and reusable workflows in this repository. Access is allowed only from private or internal repositories.
1. Click **Save** to apply the settings.
{% endif %}

## Allowing access to components in a private repository

Actions and reusable workflows in your private repositories can be shared with other private repositories owned by the same user or organization. For information about private repositories, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

You can use the steps below to configure whether actions and reusable workflows in a private repository can be accessed from outside the repository. For more information, see [Share Across Private Repositories](https://docs.github.com/en/actions/how-tos/reuse-automations/share-across-private-repositories) and [Share With Your Organization](https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization). Alternatively, you can use the REST API to set, or get details of the level of access. For more information, see [Permissions](https://docs.github.com/en/rest/actions/permissions#get-the-level-of-access-for-workflows-outside-of-the-repository) and [Permissions](https://docs.github.com/en/rest/actions/permissions#set-the-level-of-access-for-workflows-outside-of-the-repository).



### Managing access for a private repository

1. On GitHub, navigate to the main page of the private repository.
1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Access**, choose one of the access settings:

   * **Not accessible** - Workflows in other repositories cannot access this repository.
   * **Accessible from repositories owned by 'USER NAME' user** - Workflows in other repositories that are owned by the same user can access the actions and reusable workflows in this repository. Access is allowed only from private repositories.
1. Click **Save** to apply the settings.





### Managing access for a private repository in an organization

1. On GitHub, navigate to the main page of the private repository.
1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Access**, choose one of the access settings:

   * **Not accessible** - Workflows in other repositories cannot access this repository.
   * **Accessible from repositories in the 'ORGANIZATION NAME' organization** - Workflows in other repositories that are part of the 'ORGANIZATION NAME' organization can access the actions and reusable workflows in this repository. Access is allowed only from private repositories.
1. Click **Save** to apply the settings.







## Configuring cache settings for your repository

You can configure cache retention and size settings for your repository. This feature is opt-in and available to users with a payment method on file, GitHub Pro, GitHub Team, or GitHub Enterprise Cloud plans.

If your repository is owned by an organization that has configured cache settings, you can configure limits up to the maximum set by the organization. If your repository is user-owned, you can configure up to the global maximums.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.



1. In the "Cache settings" section, configure the following settings:
   * **Cache retention**: The number of days to retain caches before automatic deletion. The default is 7 days. You can configure up to 90 days for public repositories or 365 days for private and internal repositories (or up to the limit set by your organization).
   * **Cache size eviction limit**: The maximum total size of all caches in your repository. The default is 10 GB. You can configure up to 10,000 GB per repository (or up to the limit set by your organization). When this limit is exceeded, older caches will be evicted to make room for new caches.
1. Click **Save** to apply the settings.

For more information about cache eviction, see [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#usage-limits-and-eviction-policy).



## Configuring the retention period for GitHub Actions artifacts and logs in your repository

You can configure the retention period for GitHub Actions artifacts and logs in your repository.

By default, the artifacts and log files generated by workflows are retained for 90 days before they are automatically deleted.


You can adjust the retention period, depending on the type of repository:

* For public repositories: you can change this retention period to anywhere between 1 day or 90 days.
* For private and internal repositories: you can change this retention period to anywhere between 1 day or 400 days.


When you customize the retention period, it only applies to new artifacts and log files, and does not retroactively apply to existing objects. For managed repositories and organizations, the maximum retention period cannot exceed the limit set by the managing organization or enterprise.


You can also define a custom retention period for a specific artifact created by a workflow. For more information, see [Remove Workflow Artifacts](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts#setting-the-retention-period-for-an-artifact).

## Setting the Artifact and Log retention period for a repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. In the "Artifact, log, and cache settings" section, under **Artifact and log retention**, enter a new value.
1. Click **Save** to apply the change.




## Configuring cache storage for a repository

By default, the total cache storage that GitHub Actions uses on the external storage for GitHub is limited to a maximum of 10 GB per repository, and the maximum allowed size that can be set for a repository is 25 GB.
 However, these default sizes might be different if an enterprise owner has changed them. If you exceed the limit, GitHub will save the new cache but will begin evicting caches until the total size is less than the repository limit.


You can set a total cache storage size for your repository up to the maximum size allowed by the organization or enterprise policy settings.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. Under **Cache size limit**, enter a new value.
1. Click **Save** to apply the change.
