# Deployments and environments

## Deployment protection rules

Deployment protection rules require specific conditions to pass before a job referencing the environment can proceed. You can use deployment protection rules to require a manual approval, delay a job, or restrict the environment to certain branches. You can also create and implement custom protection rules powered by GitHub Apps to use third-party systems to control deployments referencing environments configured on GitHub.

Third-party systems can be observability systems, change management systems, code quality systems, or other manual configurations that you use to assess readiness before deployments are safely rolled out to environments.

> [!NOTE]
> Any number of GitHub Apps-based deployment protection rules can be installed on a repository. However, a maximum of 6 deployment protection rules can be enabled on any environment at the same time.


### Required reviewers

Use required reviewers to require a specific person or team to approve workflow jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

You also have the option to prevent self-reviews for deployments to protected environments. If you enable this setting, users who initiate a deployment cannot approve the deployment job, even if they are a required reviewer. This ensures that deployments to protected environments are always reviewed by more than one person.

For more information on reviewing jobs that reference an environment with required reviewers, see [Review Deployments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments).



> [!NOTE]
> If you are on a GitHub Free, GitHub Pro, or GitHub Team plan, required reviewers are only available for public repositories.



### Wait timer

Use a wait timer to delay a job for a specific amount of time after the job is initially triggered. The time (in minutes) must be an integer between 1 and 43,200 (30 days). Wait time will not count towards your billable time.



> [!NOTE]
> If you are on a GitHub Free, GitHub Pro, or GitHub Team plan, wait timers are only available for public repositories.



### Deployment branches and tags

Use deployment branches and tags to restrict which branches and tags can deploy to the environment. Below are the options for deployment branches and tags for an environment:

* **No restriction:** No restriction on which branch or tag can deploy to the environment.
* **Protected branches only:** Only branches with branch protection rules enabled can deploy to the environment. If no branch protection rules are defined for any branch in the repository, then all branches can deploy. For more information about branch protection rules, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

  > [!NOTE]
  > Deployment workflow runs triggered by tags with the same name as a protected branch and forks with branches that match the protected branch name cannot deploy to the environment.

* **Selected branches and tags:** Only branches and tags that match your specified name patterns can deploy to the environment.

  The deployment branch or tag rule is matched against the `GITHUB_REF` of the workflow run. For values of `GITHUB_REF` for each workflow trigger, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows). If you specify `releases/*` as a deployment branch or tag rule, only a `GITHUB_REF` whose name begins with `releases/` can deploy to the environment. Adding another branch rule for `refs/pull/*/merge` would also allow workflows triggered by `pull_request` events to deploy to the environment. Wildcard characters will not match `/`, to match branches or tags that begin with `release/` and contain an additional single slash, use `release/*/*`. For more information about syntax options for deployment branches, see the [Ruby `File.fnmatch` documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

  > [!NOTE]
> Name patterns must be configured for branches or tags individually.




> [!NOTE]
> Deployment branches and tags are available for all public repositories. For users on GitHub Pro or GitHub Team plans, deployment branches and tags are also available for private repositories.



### Allow administrators to bypass configured protection rules

By default, administrators can bypass the protection rules and force deployments to specific environments. For more information, see [Review Deployments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments#bypassing-deployment-protection-rules).

Alternatively, you can configure environments to disallow bypassing the protection rules for all deployments to the environment.



> [!NOTE]
> Allowing administrators to bypass protection rules is only available for public repositories for users on GitHub Free, GitHub Pro, and GitHub Team plans.



### Custom deployment protection rules

> [!NOTE]
> Custom deployment protection rules are currently in public preview and subject to change.


You can enable your own custom protection rules to gate deployments with third-party services. For example, you can use services such as Datadog, Honeycomb, and ServiceNow to provide automated approvals for deployments to GitHub.
 For more information, see [Create Custom Protection Rules](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/create-custom-protection-rules).

Once custom deployment protection rules have been created and installed on a repository, you can enable the custom deployment protection rule for any environment in the repository. For more information about configuring and enabling custom deployment protection rules, see [Configure Custom Protection Rules](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/configure-custom-protection-rules).



> [!NOTE]
> Custom deployment protection rules are only available for public repositories for users on GitHub Free, GitHub Pro, and GitHub Team plans.



## Environment secrets

Secrets stored in an environment are only available to workflow jobs that reference the environment. If the environment requires approval, a job cannot access environment secrets until one of the required reviewers approves it. For more information about secrets, see [Secrets](https://docs.github.com/en/actions/concepts/security/secrets).


> [!NOTE]
> * Workflows that run on self-hosted runners are not run in an isolated container, even if they use environments. Environment secrets should be treated with the same level of security as repository and organization secrets. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#hardening-for-self-hosted-runners).
> * If you are using GitHub Free, environment secrets are only available in public repositories. For access to environment secrets in private or internal repositories, you must use GitHub Pro, GitHub Team, or GitHub Enterprise. For more information on switching your plan, see [Upgrade Plan](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/upgrade-plan).



## Environment variables

Variables stored in an environment are only available to workflow jobs that reference the environment. These variables are only accessible using the [`vars`](/actions/reference/workflows-and-actions/contexts#vars-context) context. For more information, see [Use Variables](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables).



> [!NOTE]
> Environment variables are available for all public repositories. For users on GitHub Pro or GitHub Team plans, environment variables are also available for private repositories.
