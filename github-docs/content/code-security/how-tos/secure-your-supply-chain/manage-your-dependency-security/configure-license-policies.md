# Configuring open source license policies

> [!NOTE]
> Open source license compliance is in public preview and subject to change.


## Prerequisites

Before you configure license policies, ensure that:

* Your organization has GitHub Code Security
* You have access to manage enterprise policy and rulesets
* Dependency graph is enabled for repositories you want to evaluate

## About license compliance

Open source license compliance lets you define a policy that specifies which licenses your dependencies are allowed to use.

When the policy is enforced with rulesets, GitHub evaluates pull requests that change package manifests, checks direct and transitive dependencies, and compares detected licenses to your policy. Pull requests with noncompliant dependencies remain blocked until violations are resolved.

Violations are typically resolved by:

* Updating the pull request to use compliant dependencies
* Approving an exception for a package
* Updating policy to allow a license where appropriate

## Create a license policy


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. In the sidebar, click **License compliance**.
1. Click **Default policy**.
1. On the **Edit license policy** page, click **Add licenses** and choose **Select from list**.
1. From the license picker, select the licenses you want to permit. The licenses in this list are categorized based on their general risk level for use in corporate environments, but this is purely informational and does not constitute legal advice. **Always check with your organization's legal team for policy guidance**.
1. Save your changes.

Alternately, if you have an existing license policy from another tool, you can import it as a list of SPDX expressions.
1. On the **Edit license policy** page, click **Add licenses** and choose **Manual input**.
1. Enter one or more SPDX license identifiers, each on a new line.
1. Save your changes.

The licenses you add form your baseline policy. You can later add package-level exceptions when handling alerts.

## Configure access for Enterprise Open Source License Managers


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. In the left sidebar, click **{% octicon "globe" aria-hidden="true" aria-label="globe" %} Enterprise roles**.
1. Click **Role assignments**.
1. Click **Assign role**.
1. Select the **Enterprise Open Source License Manager** role.
1. Choose a user or team to assign the role to.
1. Click **Assign role**.

Assigning this role also subscribes reviewers to request notifications so they can respond to dismissal requests quickly.

## Optionally use custom properties to control rollout per repository

If you want a gradual rollout, use a repository custom property to control whether each repository is in inactive, evaluate, or active enforcement mode.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Custom properties**.

    ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Custom properties" is outlined in orange.](/assets/images/help/organizations/custom-properties.png)

1. Create a single-select repository custom property, for example `open_source_license_compliance`.
1. Add values for `inactive`, `evaluate`, and `active`.
1. Set the default value to `inactive`.
1. Decide who can change the property value.
1. Assign property values to repositories based on their rollout stage.

## Enforce policy in pull requests with rulesets

We suggest making two rulesets, one for **Evaluate** mode and one for **Active** mode. If you created custom properties to control the rollout, you can target those properties here.

1. Go to the rulesets page for the scope where you want enforcement.
1. Create a branch ruleset.
1. Under the ruleset name, set **Enforcement status**:

    * For your first ruleset, select **Evaluate**.
    * For your second ruleset, select **Active**.
1. Choose how to target repositories:

    * If you use custom properties, target by `open_source_license_compliance`:
      * For the evaluate-mode ruleset, target repositories where the property value is `evaluate`.
      * For the active-mode ruleset, target repositories where the property value is `active`.
    * If you do not use custom properties, target repositories by repository pattern or explicit repository selection.
1. Enable **Require license compliance results before merging**.
1. Save your changes.

For more information about rulesets, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) and [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#targeting-repositories-by-properties-in-your-organization).

## Test policy enforcement

1. In a targeted repository, open a pull request that changes dependency manifests.
1. Confirm that pull request annotations show license compliance results.
1. If a dependency violates policy, review the generated alert and request dismissal if an exception is needed.

When violations are unresolved, the pull request remains blocked.

## Review and handle exception requests

1. As an Enterprise Open Source License Manager, open the list of pending license alert requests in your enterprise security views.
1. Review each request and decide whether to deny or approve it.
1. If you approve, choose whether the exception should apply to a package, a license, or a package pattern.
1. Choose whether to apply the exception at repository scope or enterprise scope.
1. Save the exception.

After a request is approved, the alert is closed and the pull request is unblocked, as long as no other required checks are failing.

## Review effective policy for a repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Security", click **License policy**.
1. Review the combined policy and exception set in effect for that repository.
1. Update enterprise-level or repository-level policy as needed.

## Further reading

* [Open Source License Compliance](https://docs.github.com/en/code-security/concepts/supply-chain-security/open-source-license-compliance)
