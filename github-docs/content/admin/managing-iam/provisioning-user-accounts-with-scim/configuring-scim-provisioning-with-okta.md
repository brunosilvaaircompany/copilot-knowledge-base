# Configuring SCIM provisioning with Okta

## About provisioning with Okta

If you use Okta as an IdP, you can use Okta's application to provision user accounts, manage enterprise membership, and manage team memberships for organizations in your enterprise. Okta is a partner IdP, so you can simplify your authentication and provisioning configuration by using the Okta application for Enterprise Managed Users. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users#about-authentication-and-user-provisioning).

Alternatively, if you only intend to use Okta for SAML authentication and you want to use a different IdP for provisioning, you can integrate with GitHub's REST API for SCIM. For more information, see [Provisioning Users And Groups With Scim Using The Rest API](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api).

## Supported features

Enterprise Managed Users supports the following provisioning features for Okta.

| Feature | Description |
| --- | --- |
| Push New Users | Users that are assigned to the GitHub Enterprise Managed User application in Okta are automatically created in the enterprise on GitHub. |
| Push Profile Update | Updates made to the user's profile in Okta will be pushed to GitHub. |
| Push Groups | Groups in Okta that are assigned to the GitHub Enterprise Managed User application as Push Groups are automatically created in the enterprise on GitHub. |
| Push User Deactivation | Unassigning the user from the GitHub Enterprise Managed User application in Okta will disable the user on GitHub. The user will not be able to sign in, but the user's information is maintained. |
| Reactivate Users | Users in Okta whose Okta accounts are reactivated and who are assigned back to the GitHub Enterprise Managed User application on Okta will be enabled. |



> [!NOTE]
> Enterprise Managed Users does not support modifications to usernames.



## Prerequisites


The general prerequisites for using SCIM on GitHub Enterprise Server apply. See the "Prerequisites" section in [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#prerequisites).

In addition:

* To configure SCIM, you must have completed **steps 1 to 4** in [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).
  * You will need the personal access token (classic) created for the setup user to authenticate requests from Okta.

* You must use Okta's application for both authentication and provisioning.
* Your Okta product must support System for Cross-domain Identity Management (SCIM). For more information, review Okta's documentation or contact Okta's support team.




## 1. Configure SAML

Before starting this section, ensure you have followed steps **1 and 2** in [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).

### In Okta

1. Go to the [GitHub Enterprise Server](https://www.okta.com/integrations/github-enterprise-server/) application in Okta.
1. Click **Add integration**.
1. In the general settings, for the base URL, enter your GitHub Enterprise Server host URL (`https://HOSTNAME.com`).
1. Click the **Sign On** tab.
1. Ensure the "Credential Details" match the following.

   * "Application username format": Okta username
   * "Update application username on": Create and update
   * "Password reveal": Deselected
1. In the "SAML Signing Certificates" section, download your certificate by selecting **Actions**, then clicking **Download certificate**.
1. On the right side of the page, click **View SAML setup instructions**.
1. Make a note of the "Sign on URL" and the "Issuer" URL.

### On GitHub Enterprise Server

1. Sign in to {% ifversion ghes %}your GitHub Enterprise Server instance as a user with access to the Management Console.
1. Configure SAML using the information you have gathered. See [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).

## 2. Configure SCIM

After configuring your SAML settings, you can proceed to configure provisioning settings.

{% elsif ghec %}

## Configuring SCIM

After you have configured your SAML settings in Okta's app, you can proceed to configure provisioning settings. If you haven't already configured SAML settings, see [Configuring Saml Single Sign On With Okta For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-with-okta-for-enterprise-managed-users).

{% endif %}


To configure provisioning, the setup user {% ifversion ghec %}with the **@<em>SHORT-CODE</em>_admin** username will need to provide a personal access token (classic) with the **scim:enterprise** scope. See [Getting Started With Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users#create-a-personal-access-token).
{% else %}
Before starting this section, ensure you have followed steps **1 to 4** in [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).
{% endif %}

1. Navigate to your GitHub Enterprise Managed User application on Okta.
1. Click the **Provisioning** tab.
1. In the settings menu, click **Integration**.
1. To make changes, click **Edit**.
1. Click **Configure API integration**.
1. In the "API Token" field, enter the personal access token (classic) belonging to the setup user.

    >[!NOTE] "Import Groups" is **not** supported by GitHub. Selecting or deselecting the checkbox has no impact on your configuration.


    

    > [!IMPORTANT]
    > For an enterprise on GitHub Enterprise Cloud with data residency (GHE.com), please enter the following URL in the **Base URL** field: {% raw %}`https://api.{subdomain}.ghe.com/scim/v2/enterprises/{subdomain}`{% endraw %} (ensuring to replace {% raw %}`{subdomain}`{% endraw %} with your enterprise's subdomain).
    >
    > **For example**: if your enterprise's subdomain is {% raw %}`acme`{% endraw %}, the base URL would be {% raw %}`https://api.acme.ghe.com/scim/v2/enterprises/acme`{% endraw %}.

    

1. Click **Test API Credentials**. If the test is successful, a verification message will appear at the top of the screen.
1. To save the token, click **Save**.
1. In the settings menu, click **To App**.
1. To the right of "Provisioning to App", to allow changes to be made, click **Edit**.
1. Select **Enable** to the right of **Create Users**, **Update User Attributes**, and **Deactivate Users**.
1. To finish configuring provisioning, click **Save**.



When you have finished configuring SCIM, you may want to disable some SAML settings you enabled for the configuration process. See [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#6-disable-optional-settings).



## How do I assign users and groups?

After you have configured authentication and provisioning, you will be able to provision new users on GitHub by assigning users or groups to the GitHub Enterprise Managed User application.


> [!NOTE]
> 
To avoid exceeding GitHub's rate limit, do not assign more than 1,000 users per hour to the SCIM integration on your IdP. If you use groups to assign users to the IdP application, do not add more than 1,000 users to each group per hour. If you exceed these thresholds, attempts to provision users may fail with a "rate limit" error. You can review your IdP logs to confirm if attempted SCIM provisioning or push operations failed due to a rate limit error. The response to a failed provisioning attempt will depend on the IdP.
{% elsif ghes %}
A site administrator may have enabled API rate limits on your instance. If you exceed these thresholds, attempts to provision users may fail with a "rate limit" error. You can review your IdP logs to confirm if attempted SCIM provisioning or push operations failed due to a rate limit error. The response to a failed provisioning attempt will depend on the IdP.

 For more information, see [Troubleshooting Identity And Access Management For Your Enterprise](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/troubleshooting-identity-and-access-management-for-your-enterprise#scim-provisioning-errors).


You can also automatically manage organization membership by adding groups to the "Push Groups" tab in Okta. When the group is provisioned successfully, it will be available to connect to teams in the enterprise's organizations. For more information about managing teams, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).

When assigning users, you can use the "Roles" attribute in the application on your IdP to set a user's role in your enterprise. For more information about the roles available to assign, see [Abilities Of Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles).


> [!NOTE]
> You can only set the "Roles" attribute for an individual user, not a group. If you want to set roles for everyone in a group that is assigned to the application in Okta, you must use the "Roles" attribute for each group member, individually.

## How do I deprovision users and groups?

To remove a user or group from GitHub, remove the user or group from both the "Assignments" tab and the "Push groups" tab in Okta. For users, make sure the user is removed from all groups in the "Push Groups" tab.
