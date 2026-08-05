# Setting up GitHub Copilot for your organization

## Enable GitHub Copilot for your organization through an enterprise account

To enable Copilot Business for your organization, your organization needs to be part of an enterprise account with a Copilot subscription. If you don't already have an enterprise account, you can create one specifically for managing Copilot Business licenses. See [About Enterprise Accounts For Copilot Business](https://docs.github.com/en/copilot/concepts/about-enterprise-accounts-for-copilot-business).

If your organization already belongs to an enterprise with a Copilot Enterprise or Copilot Business plan, your enterprise owner can enable Copilot for your organization. Request access from your enterprise owner at [GitHub Copilot settings](https://github.com/settings/copilot?ref_product=copilot&ref_type=engagement&ref_style=text), under "Get Copilot from an organization."

## Set policies

Control which Copilot features are available in your organization. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).

## Configure networking

If your organization members connect through an HTTP proxy server or firewall, add the required URLs to the allowlist. See [Copilot Allowlist Reference](https://docs.github.com/en/copilot/reference/copilot-allowlist-reference).

If your environment uses custom SSL certificates, install them on your members' machines. See [Configure Network Settings](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-network-settings#installing-custom-certificates).

## Grant access to members

Enable Copilot for some or all members of your organization. Consider starting with teams most likely to benefit, to discover potential blockers and demonstrate early success. See [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

> [!TIP] If your organization belongs to an enterprise on GHE.com, users need additional setup to authenticate from their development environment. See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).

## Next steps

* **Set a governance posture that supports adoption**. Avoid over-restricting Copilot by delegating administration, enabling vetted features promptly, and aligning spend controls with your goals. See [Govern For Adoption](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/govern-at-scale/govern-for-adoption).
* **Explore self-service license management options**. Many successful rollouts use a self-service model where developers can claim a license without approval. See [Set Up Self Serve Licenses](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/set-up-self-serve-licenses).
* **Learn how to plan and implement an effective enablement process to drive Copilot adoption**. See [Drive Adoption](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption).
* **Enhance the development experience by enabling and training developers on the latest features**. For example, share context with Copilot Spaces and enable Copilot code review on pull requests. For an example showing how these features fit together, see [Integrate Ai Agents](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/enable-developers/integrate-ai-agents).
* **Add Copilot cloud agent as a team member for asynchronous issue work**. See [Pilot Cloud Agent](https://docs.github.com/en/copilot/tutorials/cloud-agent/pilot-cloud-agent).
