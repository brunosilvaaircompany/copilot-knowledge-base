# Resources for getting approval of GitHub Copilot

Before you can roll out a tool like GitHub Copilot in your company, you will likely need signoff from legal, compliance, and cybersecurity teams.

Your company's requirements depend on your industry and location, but common queries include:

* How does Copilot use my company's data?
* Which compliance standards does Copilot meet?
* Will I need to adjust my corporate network for Copilot?

This article collects resources that you can send to teams in your company to accelerate the signoff process. These resources apply to the Copilot Business and Copilot Enterprise plans.

## Legal and privacy teams

These teams need to know the terms that will govern your company's purchase of Copilot.

* If you purchase directly from GitHub, you'll be governed by the [GitHub Generative AI Services Terms](https://github.com/customer-terms/github-generative-ai-services-terms).
* If you purchase through Microsoft, you'll be governed by [Microsoft's Product Terms](https://www.microsoft.com/licensing/terms). This includes both the [Microsoft Generative AI Service terms](https://www.microsoft.com/licensing/terms/product/ForOnlineServices/all), and terms specifically for [GitHub Offerings](https://www.microsoft.com/licensing/terms/productoffering/GitHubOfferings/allprograms).
* Copilot also falls under the [GitHub Data Protection Agreement](https://gh.io/dpa). This applies to all generally available (GA) Copilot features and to the preview features listed in [GitHub DPA-Covered Previews](https://gh.io/dpa-previews).

## Compliance teams

These teams need to know that Copilot meets your company's regulatory requirements.

The [GitHub Enterprise Trust Center](https://ghec.github.trust.page) answers common compliance questions in its FAQ, and lists attestations for compliance standards in the "Resources" section.

Compliance teams may also want to know about the administrative features available to govern Copilot, such as:

* Policies for managing access to features and models
* Audit logs for monitoring changes to access and settings
* The ability to exclude sensitive content from Copilot's view

For an overview of these features, see [Features](https://docs.github.com/en/copilot/get-started/features#features-for-administrators).

### For new GitHub Enterprise customers

If your company is not already using GitHub Enterprise, compliance teams may also want an overview of GitHub's general governance features for things like protecting branches or preventing leaked secrets. See [Establishing A Governance Framework For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/establishing-a-governance-framework-for-your-enterprise).

## Cybersecurity and IT teams

These teams need to know how Copilot will work with your company's corporate network, authentication systems, and software distribution processes. They may need to learn about:

* The allowlist required for a firewall or proxy to ensure Copilot works as expected. See [Copilot Allowlist Reference](https://docs.github.com/en/copilot/reference/copilot-allowlist-reference).
* The network protocol that Copilot operates on by default, and your company's options for routing traffic through a proxy server and intercepting traffic. See [Network Settings](https://docs.github.com/en/copilot/concepts/network-settings).
* The option to use Copilot in air-gapped environments by configuring API keys locally. See [Bring Your Own Key](https://docs.github.com/en/copilot/concepts/models/bring-your-own-key#local-byok).
* The clients where users will be using Copilot.
  * Your enterprise can enable or disable Copilot in IDEs, on GitHub Mobile, in the CLI, and on the GitHub website.
  * If your company distributes approved software for users, IT teams may need to approve the supported versions of IDEs. See [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).

### For new GitHub Enterprise customers

If your company is not already using GitHub Enterprise, cybersecurity teams may also need to learn about networking and authentication options on GitHub as a whole:

* The full list of IP addresses that will need to be allowed by your network. You can get a list of these from a public API. See [About Githubs Ip Addresses](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).
* Options for integrating with an identity provider and enforcing single sign-on for users. See [Identity And Access Management Fundamentals](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals).
* Enterprise network features. Enterprises can enforce IP allow lists and, for Enterprise Managed Users, prevent developers from using their personal account on your corporate network. See [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) and [Restricting Access To Githubcom Using A Corporate Proxy](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-access-to-githubcom-using-a-corporate-proxy).

Even if you're only using GitHub to grant access to Copilot, developers will need to authenticate to GitHub to use their Copilot license.

## Further questions

If teams have questions that aren't addressed by these resources, contact your account manager or [GitHub's Sales team](https://github.com/enterprise/contact).
