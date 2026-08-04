# Preparing to use custom agents in your enterprise

Enterprise-level custom agents are defined in a `.github-private` repository within an organization in your enterprise. Preparing your enterprise involves creating that repository, configuring it as your source of governance, protecting your agent files, and deciding who can manage custom agents.

Work through the following steps to set up your enterprise.

## Set up your governance repository

1. **Create a `.github-private` repository** to house your enterprise's agent profiles, client permissions, and plugin settings.
1. **Select the repository as your source of governance** so that your enterprise reads its settings from the repository.

For both steps, see [Create GitHub Private Repo](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).

## Protecting your agent files using rulesets

To automatically configure a ruleset that allows only enterprise owners to edit agent profiles across your enterprise:


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. On the "Agents" tab, in the "Protect agent files using rulesets" section, click **Create ruleset**.

> [!NOTE]
> * Members of your enterprise with write access to the custom agent repository can still create pull requests proposing changes to your agent profiles. Enterprise members with bypass access to the ruleset can then merge those pull requests as they see fit.
> * Creating this ruleset will also block organization owners in your enterprise from creating or editing organization-level custom agents. To prevent this, you can edit the ruleset to target only the organization containing your enterprise-level custom agents.

## Decide who manages your custom agents

To reduce your administrative burden and empower your SMEs, you can delegate the creation and management of custom agents in your enterprise by creating a team of AI managers. See [Establish Ai Managers](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/govern-at-scale/establish-ai-managers).

If you prefer to maintain full control over your enterprise's tooling to ensure security and compliance, you can create and manage custom agents yourself. See [Test Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/test-custom-agents).

## Next steps

To centrally control Copilot client behavior across your enterprise, configure enterprise managed settings. See [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).
