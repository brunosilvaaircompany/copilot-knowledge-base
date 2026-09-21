# Controlling who can execute GitHub Actions workflows

With workflow execution protections, you can define an allowlist that controls who can trigger GitHub Actions workflows and which events are permitted to run them.
 For more information, see [About Actions Policies](https://docs.github.com/en/actions/concepts/about-actions-policies).





> [!NOTE] GitHub has added a default policy that will block the `pull_request_target` event in public repositories. This policy will be enforced on November 2, 2026. See [Securely Using Pull_Request_Target](https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target#default-policy-for-pull_request_target).






## Preparing to add protections

Like rulesets, workflow execution protections layer with other protections in the same repository, organization, or enterprise.

Rather than creating one large policy per account, we recommend creating multiple clearly defined policies and layering protections across account levels. Enterprise owners can create protections at the enterprise level for broad, non-negotiable policies. Organization owners and repository administrators can then add to these restrictions.

For each policy you define, think about:

1. **Which organizations or repositories** your protection will target. For example, open source repositories may need tighter restrictions on who can trigger workflows. You can target repositories by factors like visibility, deployment status, or custom property.

   * Deployment status comes from an organization's linked artifacts page. If this is an important factor, make sure you're uploading deployment records when an artifact is deployed. See [Linked Artifacts](https://docs.github.com/en/code-security/concepts/supply-chain-security/linked-artifacts).
   * To create and assign custom properties, see [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

1. **Which workflows** will be protected. For example, workflows that deploy production code might need a certain level of protection, but less sensitive automations may not need the same level of protection. You can scope policies to specific workflow paths or required workflows.
1. **Who should be able to run these workflows** in the repositories you're targeting. This might be users with a certain role, selected bot accounts, or a specific team. Consider grouping these users in an organization or enterprise team so they can be easily contacted and referenced across multiple rulesets. See [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team) or [Create Enterprise Teams](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

## Creating a workflow execution policy

First, create a new Actions policy for the account level you're working at.

In a repository or organization:

1. Click the **Settings** tab.
1. In the left sidebar, under **Actions**, click **Policies**.

In an enterprise:

1. Click the **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies** tab.
1. In the left sidebar, click **Actions**, then **Policies**.

> [!TIP] To manage policies programmatically, see [Policies](https://docs.github.com/en/rest/actions/policies).

### Configuring the policy

Next, create a new policy.

1. Choose a name for the policy.
1. Choose an enforcement status. If you select **Evaluate** (GitHub Enterprise Cloud only), you will be able to monitor when users would hit the restriction in policy insights.
1. Target your desired workflows, organizations, or repositories.
1. Configure the following workflow execution protections.

### Restrict actors

By default, every user with write access to a repository can trigger workflows. Actor rules let you separate who contributes code from who runs your CI, so you can grant a contributor write access without granting them the ability to execute workflows.

Only the allowed actors will be able to run the specified workflows in the targeted repository. If you also restrict events, these users will only be able to trigger workflows with the allowed events. Non-allowed actors will not be able to run the specified workflows at all.

GitHub features are exempt from these restrictions for the built-in processes that they run on GitHub Actions. However, if you have created workflows that need to be run by the identity associated with a GitHub feature, such as `dependabot[bot]`, then this identity must be added as an allowed actor.

### Restrict events

Event rules control which events are permitted, such as `push`, `pull_request`, `pull_request_target`, and `workflow_dispatch`.

## Evaluating policies

You can view policy insights to see workflow runs that have been blocked (for active policies) or would have been blocked (for "evaluate" policies). This is a good way to check that policies are working as intended and not causing unnecessary friction.

To view insights, click the **Policy insights** page. You'll find this directly under the page for GitHub Actions policies in your repository, organization, or enterprise sidebar.
