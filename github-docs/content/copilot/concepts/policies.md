# GitHub Copilot policies for enterprises and organizations

## How do policies work?

You will find policies for GitHub Copilot on your enterprise's **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls** tab or in your organization's settings. Policies control which GitHub Copilot features, agents, and models your users can access, and how they can use those features. For example, a policy controls whether users can use Copilot CLI.

In an enterprise, policies are set at the enterprise level first. For most policies, enterprise administrators can either explicitly enable or disable a policy, or let organizations decide. As an exception, for Copilot cloud agent, enterprises can select exactly which organizations receive access.

Users who receive access to Copilot directly from the enterprise, rather than through an organization, are not covered by the "Let organizations decide" option. A separate **Policies for enterprise-assigned users** setting determines whether "Let organizations decide" policies default to enabled or disabled for these users.

## Who do policies apply to?

Generally, policies only apply to users on your Copilot plan. A user is governed by the policies of the enterprise or organization where they receive a Copilot Business or Copilot Enterprise license.

A small number of policies work differently and govern a setting for everyone. For example, you can block Copilot cloud agent for all users in your enterprise's repositories. If this is the case, you will see this highlighted in the policy description.

## What about users with multiple licenses?

A user can receive access to Copilot from multiple organizations in the same enterprise. If these organizations have configured the same policy differently, the **least restrictive** policy usually applies, but there are some exceptions.

More rarely, if a user receives a license from multiple different enterprises, the **most restrictive** policy across enterprises almost always applies. For example, if any enterprise disables Copilot Chat in GitHub, that feature is disabled for the user.

A user's individual plan is cancelled when they are added to a Copilot Business or Copilot Enterprise plan, so a user's personal policies cannot conflict with an enterprise's or organization's.

To see details for each policy, see [Policy Conflicts](https://docs.github.com/en/copilot/reference/policy-conflicts).

## Where do policies apply?

Policies can apply to any surface where users authenticate to Copilot, including IDEs, the GitHub website, and Copilot CLI.

However, not all policies apply to every surface. See [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies).

The GitHub Copilot app and Copilot CLI are governed by separate, independent client policies, so you can allow one without allowing the other.

## How can I prevent policy drift?

If too many people have access to policy settings and your enterprise's governance posture isn't clearly communicated, policy settings can drift over time. This is a risk for enterprises with strict compliance requirements.

* Regularly review the people with access to policies:

   * In enterprises, enterprise owners or users with the "Manage enterprise AI controls" custom role permission
   * In organizations, organization owners or users with various granular custom permissions

* Use your audit log to monitor changes to policy settings or organization enablement.

## Setting policies

To set policies, see:

* [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies)
* [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies)
