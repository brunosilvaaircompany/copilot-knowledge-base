# Preparing to use custom agents in your organization

> [!NOTE]
> Copilot custom agents are in public preview and subject to change.


## Prerequisites

You should understand what Copilot custom agents are and how they work. See [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents).

> [!NOTE]
> If your organization is part of an enterprise, enterprise owners can configure a ruleset that restricts custom agents. Contact your enterprise owners to check whether you can create and manage organization-level custom agents.

## Preparing your organization for custom agents

Organization-level custom agents are stored in the `/agents` directory of your organization's `.github` or `.github-private` repository. Both work the same way and make the custom agents available to all members of the organization, regardless of whether they have access to the repository itself.

For more information on `.github` and `.github-private` repositories, see [Customizing Your Organizations Profile](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile).

If you don't already have a suitable repository, follow the steps below to create one. These steps describe creating a `.github-private` repository, but you can also create a `.github` repository by naming it `.github` instead.

1. Create your custom agent repository using [GitHub's template repository](https://github.com/docs/custom-agents-template?ref_product=copilot&ref_type=engagement&ref_style=text). The template includes a README and the file structure you need.
1. In the **Choose an owner** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, choose your organization.
1. Name the repository `.github-private` and write a brief description.
1. In the visibility dropdown menu, click {% octicon "lock" aria-hidden="true" aria-label="lock" %} **Private**.
     * Organization members will still be able to use custom agents stored in this repository, regardless of whether they have direct access to the repository itself. Keeping the repository private also avoids conflicts with other features that require `.github-private` to be private, such as the organization member-only profile README.
    * If you want organization members to view and collaborate on the agent profiles directly, consider using a `.github` repository with {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Internal** visibility. If you are an open source organization and want to share the custom agents publicly, select {% octicon "globe" aria-hidden="true" aria-label="globe" %} **Public** visibility.

1. Click **Create repository**.

1. Update the template README. Include any creation guidelines for custom agents or compliance considerations specific to your organization.

## Next steps

To trial custom agents, see [Test Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/test-custom-agents).
