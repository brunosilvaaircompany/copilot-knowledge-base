# Changing the URL for your enterprise

## About changes to enterprise slugs

When you create an enterprise, you choose a "slug" for the enterprise, which is a string used in the URL for your enterprise. For example, if you chose `octo-enterprise` as the slug, the URL for your enterprise on GitHub.com would be `https://github.com/enterprises/octo-enterprise`.

If your company pays for GitHub Enterprise Cloud by credit card or PayPal, you can change the slug in the settings for your enterprise. When you change the slug, GitHub does not set up any redirects from the old URL. Your old enterprise slug will immediately become available for another customer to use.

> [!NOTE]
> If you pay for GitHub Enterprise Cloud via invoice, or if your enterprise uses Enterprise Managed Users, you must contact [GitHub's Sales team](https://github.com/enterprise/contact) to change your enterprise slug.
> For enterprises hosted on GHE.com, changing the enterprise slug is not currently supported.

## Considerations when changing your enterprise slug

Before changing the slug for an enterprise, ensure you have considered any parts of your enterprise's configuration, automations, or processes that may depend on the old enterprise slug. To minimize disruption, you should address these points either immediately before or immediately after changing the slug.

Parts of your system that may be affected by changing the slug include, but are not limited to, the following.

### SAML single sign-on (SSO)

If you have enabled SAML single sign-on (SSO) at the enterprise level, you will need to reconfigure the settings in your identity provider (IdP) to use the new enterprise slug. When you change your slug, existing IdP sessions are not revoked, but your members won't be able to use SSO to access resources in your enterprise until you update the IdP settings. If you have enabled SAML or SCIM at the organization level, changing the slug will not affect SSO. For more information, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

Before changing the slug, to ensure you will have access to your enterprise even if SSO is not working, we recommend you download the recovery codes for your enterprise. For more information, see [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

### API endpoints

Many GitHub API endpoints for managing an enterprise take the enterprise slug as a parameter. If you use these endpoints in automations, you will need to update the API calls to use the new slug. API calls that use the old slug will stop working immediately. The enterprise ID, which can be used as an alternative to the slug in many cases, is not affected by a slug change.

### OpenID Connect with GitHub Actions workflows

If you use OpenID Connect (OIDC) in GitHub Actions workflows, and have configured your cloud provider to only accept tokens from a unique URL that includes your enterprise slug, you will need to update the settings in your cloud provider. To prevent workflows from failing, the most robust option is to configure your provider to accept tokens from both the old and new slug just before you change the slug. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#customizing-the-issuer-value-for-an-enterprise).

### GitHub Connect

If your enterprise is linked to one or more GitHub Enterprise Server instances via GitHub Connect, after changing the slug, you'll need to reset the connection by disabling and then reenabling GitHub Connect. For more information, see [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/enterprise-server@latest/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom) in the GitHub Enterprise Server documentation.

## Changing the enterprise slug

> [!NOTE]
> Before changing the slug for an enterprise, make sure you have understood the potential consequences. For more information, see [Considerations when changing your enterprise slug](#considerations-when-changing-your-enterprise-slug).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.


1. At the bottom of the page, in the "Danger zone" section, click **Change enterprise URL slug**.
1. In the "Change enterprise URL slug" dialog, follow the instructions, then click **Change enterprise slug URL**.
