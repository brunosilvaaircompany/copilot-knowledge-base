# Sharing contributions from GitHub Enterprise Server

> [!IMPORTANT]
> The connection between your accounts is governed by [GitHub's Privacy Statement](/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement) and users enabling the connection must agree to the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service).

## Sending your enterprise contributions to your profile

Before you can connect your GitHub Enterprise Server profile to your GitHub.com or GHE.com profile, your enterprise owner must enable GitHub Connect and enable contribution sharing between the environments. For more information, contact your enterprise owner.



To share contributions from GitHub Enterprise Server, switch to the [GitHub Enterprise Server version of this article](/enterprise-server@latest/account-and-profile/how-tos/contribution-settings/sharing-contributions-from-github-enterprise-server).

{% elsif ghes %}

1. Sign in to both your user account on GitHub Enterprise Cloud **and** your user account on GitHub Enterprise Cloud (GitHub.com{% ifversion ghecom-github-connect %} or GHE.com).
1. On GitHub Enterprise Server, in the upper-right corner of any page, click your profile picture, then click **Settings**.

   ![Screenshot of a user's account menu on GitHub. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings-global-nav-update.png)

1. In the left sidebar, click **GitHub Connect**.

1. Click **Connect to GitHub.com**.

1. Review the resources that GitHub Enterprise Server will access from your GitHub.com or GHE.com account, then click **Authorize**.
1. Under "Contributions", select **Send my contribution counts to PLATFORM**, then click **Update contributions.**


{% endif %}
