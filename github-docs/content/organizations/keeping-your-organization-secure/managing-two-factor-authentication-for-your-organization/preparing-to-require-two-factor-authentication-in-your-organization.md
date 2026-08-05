# Preparing to require two-factor authentication in your organization

When requiring two-factor authentication in your organization, consider if you also want to enforce usage of only secure methods among your users (secure 2FA methods are passkeys, security keys, authenticator apps, and the GitHub mobile app).


We recommend that you notify organization members, outside collaborators, and billing managers at least one week before you require 2FA in your organization.

When you require use of 2FA for your organization, outside collaborators (including bot accounts) who do not use 2FA will be removed from the organization and lose access to its repositories. If you require secure methods of 2FA, outside collaborators who have SMS 2FA configured will be removed. They will also lose access to their forks of the organization's private repositories.
Members and billing managers will retain membership but not be able to access your organization resources until they meet your 2FA requirement and 2FA security level.

Before requiring 2FA in your organization, we recommend that you:

* Enable 2FA on your personal account with a secure method. For more information, see [Securing Your Account With Two Factor Authentication 2Fa](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa).
* Ask the people in your organization to set up 2FA for their accounts with secure methods.

* View the 2FA security levels of users in your organization, to judge the impact of adding a 2FA requirement. For more information, see [Viewing Whether Users In Your Organization Have 2Fa Enabled](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled).

* Enable 2FA for unattended or shared access accounts, such as bots and service accounts. For more information, see [Managing Bots And Service Accounts With Two Factor Authentication](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/managing-bots-and-service-accounts-with-two-factor-authentication).
* Warn users that once 2FA is required, outside collaborators without 2FA are automatically removed from the organization, and members and billing managers will not be able to access your organization resources until they enable 2FA.
