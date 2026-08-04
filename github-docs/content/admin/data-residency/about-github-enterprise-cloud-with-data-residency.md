# About GitHub Enterprise Cloud with data residency

By default, GitHub stores data for GitHub.com in the USA. When you adopt GitHub Enterprise Cloud with data residency, you can choose where your company's code and data are stored. Your enterprise will be hosted on a dedicated subdomain of GHE.com.

Data residency makes it easy to separate open source and enterprise work, and helps you meet specific data residency compliance requirements.

The available regions are:

* EU (includes Azure regions in EFTA countries, currently Norway and Switzerland)
* Australia
* US
* Japan

In the future, GitHub plans to offer data residency in more regions.
 To learn how GitHub handles data storage, see [About Storage Of Your Data With Data Residency](https://docs.github.com/en/admin/data-residency/about-storage-of-your-data-with-data-residency).

You can **get started with data residency** by setting up a trial of GitHub Enterprise Cloud.

<a href="https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of GitHub Enterprise Cloud</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## What is GitHub Enterprise Cloud?

GitHub is a complete developer platform for building, scaling, and delivering secure software. In addition to these capabilities, GitHub Enterprise Cloud offers several key features designed to further optimize and secure your use of the platform:

* Includes an **enterprise account:** a dedicated, shared space for your company to store code, collaborate, and access GitHub features
* Centralizes billing, administration, governance, and audit of your company’s resources and activity
* Is accessible only to authorized users, isolated from the wider GitHub.com community
* Includes management of authentication and user lifecycles from an external identity management system:

  * **SCIM** for provisioning
  * **SAML** or **OIDC** for authentication

With data residency, managed user accounts access your resources through a dedicated subdomain of GHE.com, and can only interact with resources that belong to your enterprise.

## Why move data to the cloud?

If you currently use a self-hosted service like GitHub Enterprise Server, GitHub Enterprise Cloud with data residency will help you to have more control over your data while benefiting from a cloud-based, managed product.

* Your users will have access to the latest features from GitHub.com, such as GitHub Copilot, without needing to wait for features to be available in GitHub Enterprise Server releases.
* You'll have a simplified administrative experience, and won't need to schedule downtime for maintenance or upgrades.

## How does billing work?

To adopt GitHub Enterprise Cloud with data residency, you'll sign up for the **GitHub Enterprise plan**, which covers your enterprise on GHE.com and, if you need it, GitHub Enterprise Server. For pricing details, see our [Pricing](https://github.com/pricing) page.

To pay for user licenses and services, you can:
* Add a credit card or PayPal account to your enterprise and bill directly through GitHub
* Connect your enterprise to a Microsoft Azure subscription

You will be on our latest billing platform, which allows you to estimate spending, create cost centers to manage expenses, and pay flexibly for the services you use.

You can also sign up for usage-based billing for GitHub Enterprise and GitHub Advanced Security products, meaning you won't need to purchase a pre-defined number of licenses in advance.

## Developer experience

The developer experience on GHE.com differs in some ways from GitHub.com and GitHub Enterprise Server.

* [Identity and access](#identity-and-access)
* [Functionality for managed user accounts](#functionality-for-managed-user-accounts)
* [Repository visibility](#repository-visibility)
* [API access](#api-access)
* [GitHub Copilot](#github-copilot)
* [Documentation](#documentation)

### Identity and access

Enterprises on GHE.com use **Enterprise Managed Users**. In an enterprise with managed users, your company manages the user accounts that people use to access your resources. These accounts can only access your enterprise's resources, and are isolated from the wider open source community on GitHub.com.

People access your enterprise via the GHE.com URL that you choose during onboarding. To access your enterprise's resources, people must authenticate through the identity management system that your company uses.

### Network access

Network details such as IP ranges and SSH key fingerprints differ between GHE.com and GitHub.com. You must give client systems such as storage accounts or identity provider integrations access to your enterprise. See [Network Details For Ghecom](https://docs.github.com/en/admin/data-residency/network-details-for-ghecom).

### Functionality for managed user accounts

Administrators and developers with access to your enterprise can take advantage of the full GitHub platform, with the exception of some features that are currently unavailable.

Developers may have experience using a personal account on GitHub.com, or a user account on a GitHub Enterprise Server instance. The experience of using a managed user account on GHE.com differs in some ways. See [Abilities And Restrictions Of Managed User Accounts](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts).

### Repository visibility

Public repositories are not available in an enterprise with managed users. To practice innersource, users can create internal repositories that are visible to all enterprise members. See [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).

### API access

Integrators with the REST and GraphQL APIs must send requests to your enterprise's dedicated URL on GHE.com.
 For example, if your enterprise's subdomain is `octocorp`, users should send requests to `https://api.octocorp.ghe.com`.

Users can simplify API requests by using the GitHub CLI. However, if they also need to access resources on GitHub.com or GitHub Enterprise Server, they will need to authenticate to multiple accounts and specify a target platform for most requests. See [Using Multiple Accounts](https://docs.github.com/en/github-cli/github-cli/using-multiple-accounts).

Rate limits apply for requests to the REST API. See [Rate Limits For The Rest API](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api).

### GitHub Copilot

Your developers can access GitHub Copilot if you grant them access to a Copilot Business or Copilot Enterprise subscription. Managed user accounts cannot sign up for Copilot Individual.

* Users must perform some additional setup to authenticate to their account from their development environment. See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).
* Certain GitHub Copilot features are currently unavailable on GHE.com. See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).

### Documentation

In general, the content on [GitHub Docs](/enterprise-cloud@latest/) reflects the user experience on GHE.com. Readers should use the "GitHub Enterprise Cloud" version of the site. See [About Versions Of GitHub Docs](https://docs.github.com/en/get-started/using-github-docs/about-versions-of-github-docs#about-versions-of-github-docs).

When reading the documentation, readers may need to substitute references to GitHub.com with your enterprise's dedicated URL on GHE.com.

## Feature overview

The features available with data residency on GHE.com are similar to the features available to managed user accounts on GitHub.com, with some additions and exceptions.
 See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency).

## Getting started

Once you have signed up for the trial to create a new enterprise account and choose a subdomain on GHE.com, you can get started with your new enterprise.

You will:

* Create accounts for your company's administrators and developers
* Add your billing details
* Optionally, migrate data from another platform

To get started, see [Getting Started With Data Residency For GitHub Enterprise Cloud](https://docs.github.com/en/admin/data-residency/getting-started-with-data-residency-for-github-enterprise-cloud).
