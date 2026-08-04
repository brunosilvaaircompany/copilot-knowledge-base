# Setting up GitHub Copilot for your enterprise

## Enable GitHub Copilot

To purchase GitHub Copilot for your enterprise, [contact GitHub's Sales team](https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=text).

A member of the Sales team will work with you to set up Copilot for your enterprise.

## Set policies

You will use enterprise policies to manage two aspects of governance:

* **Availability**: Which Copilot features, models, and MCP servers are available in your enterprise?
* **Controls**: What restrictions apply to these features? For example, will you exclude certain files or block suggestions matching public code?

Generally, enterprise owners can either set each policy for the whole enterprise or "let organizations decide." With the latter option, users are subject to the policy of the organization where they receive their Copilot license or to the default defined in your "Policies for enterprise-assigned users" setting.

To manage policies, see [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Configure networking

If your corporate network restricts users' traffic, add the required URLs to the allowlist for your firewall or proxy. See [Copilot Allowlist Reference](https://docs.github.com/en/copilot/reference/copilot-allowlist-reference).

If you route traffic via a proxy server, you may need to ask users to configure proxy settings in their environment. You may also need to install custom certificates on your users' machines. For more information, see [Network Settings](https://docs.github.com/en/copilot/concepts/network-settings).

If your enterprise is on GHE.com, users will also need to configure their environment to authenticate from their development environment. See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).

## Assign licenses

There are two main ways to grant access to Copilot in an enterprise:

* **Assign licenses directly to users or teams** in the enterprise. This approach simplifies license management at scale and provides the option of granting Copilot licenses to users who don't consume a GitHub Enterprise license. This approach is currently only available for **Copilot Business** licenses.
* **Enable Copilot for organizations**. This approach allows you to choose Copilot Business or Copilot Enterprise for individual organizations and give organization owners control to grant licenses to the users who need them most.


For instructions, see [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access).
