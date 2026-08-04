# Username considerations for external authentication

> [!NOTE]
> This article only applies to Enterprise Managed Users. If you use GitHub Enterprise Cloud without Enterprise Managed Users, usernames are created by users, not GitHub.



## About usernames with external authentication



You can configure external authentication for GitHub Enterprise Server using CAS, LDAP, or SAML. For more information, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals#which-authentication-method-are-available-to-me).

When you use external authentication, {% ifversion ghes %}your GitHub Enterprise Server instance automatically creates a username for each person when the person signs into your GitHub Enterprise Server instance through your external authentication system for the first time.

{% elsif ghec %}

If you use an enterprise with Enterprise Managed Users, members of your enterprise authenticate to access GitHub through your SAML identity provider (IdP). For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users) and [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals#which-authentication-method-are-available-to-me).

GitHub automatically creates a username for each person when their user account is provisioned via SCIM.

* To create the username, GitHub normalizes an identifier provided by your IdP.
* On GitHub.com, GitHub also adds an underscore and your enterprise's shortcode to the end of each username.

If multiple identifiers are normalized into the same username, a username conflict occurs, and only the first user account is created. You can resolve username problems by making a change in your IdP so that the normalized usernames will be unique and within the 39-character limit.

> [!NOTE] Conflicts can only occur between users within the same enterprise. Managed user accounts can share IdP identifiers or email addresses with other user accounts on GitHub.com that are outside the enterprise.


{% endif %}



## About shortcodes for managed user accounts

Each enterprise that uses managed user accounts is associated with a shortcode, which is an alphanumeric string between three and eight characters.

### Shortcodes on GitHub.com

When you create an enterprise with managed users on GitHub.com, you choose a shortcode that will be used as the suffix for all your enterprise members' usernames.

* The short code must be unique to your enterprise and contain no special characters.
* Choose carefully, because it is **not possible** to modify the shortcode after your enterprise with managed users has been created.

The setup user who configures SAML SSO has a username in the format of **SHORT-CODE_admin**. For example, if your enterprise's shortcode is "octo", the setup user will be "octo_admin."

When you provision a new user from your identity provider, the new managed user account will have a GitHub username in the format of **@IDP-USERNAME_SHORT-CODE** (for example, "mona-cat_octo").

### Shortcodes on GHE.com

If you use GitHub Enterprise Cloud with data residency, when you create an enterprise with managed users on GHE.com, your enterprise's shortcode is randomly generated.

* For managed user accounts with data residency, the shortcode is hidden, but it is still appended as a suffix to the usernames of provisioned users.
* The only place you are likely to see the shortcode is in the username of the setup admin, which will look like `2abvd19d_admin`.

> [!NOTE]
> Due to the inclusion of the hidden shortcode, the character limit for usernames is reduced from 39 characters to 30 characters for GitHub Enterprise Cloud with data residency.

## About normalized usernames

Usernames are formed by normalizing the SCIM `userName` attribute value sent from the IdP.

| Identity provider                 | GitHub username  |
|-----------------------------------|----------------------|
| Microsoft Entra ID (previously known as Azure AD) | IDP-USERNAME is formed by normalizing the characters preceding the `@` character in the UPN (User Principal Name), which does not include the `#EXT#` for guest accounts. |
| Okta                              | IDP-USERNAME is the normalized username attribute provided by the IdP.               |

These rules may result in your IdP providing the same IDP-USERNAME for multiple users. For example, for Entra ID, the following UPNs will result in the same username:

* `bob@contoso.com`
* `bob@fabrikam.com`
* `bob#EXT#fabrikamcom@contoso.com`
* `bob_example#EXT#fabrikamcom@contoso.com`
* `bob_example.com#EXT#fabrikamcom@contoso.com`

This will cause a username conflict, and only the first user will be provisioned. For more information, see [Resolving username problems](#resolving-username-problems).


Usernames, including underscore and short code, must not exceed 39 characters.


> [!NOTE]
> If you use SAML with SCIM provisioning, users must be SCIM provisioned before using SAML single sign-on. If a user hasn't been provisioned, they won't be able to complete authentication on your GitHub Enterprise Server instance. For more information, see [User Provisioning With Scim On Ghes](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes#how-will-i-manage-user-lifecycles-with-scim).


## About username normalization

Usernames for user accounts on GitHub can only contain alphanumeric characters and dashes (`-`).


When you configure SAML authentication, GitHub uses the SCIM `userName` attribute value sent from the IdP to determine the username for the corresponding user account on GitHub. If this value includes unsupported characters, GitHub will normalize the username per the following rules.
{% elsif ghes %}
When you configure CAS, LDAP, or SAML authentication (without SCIM), GitHub Enterprise Server uses an identifier from the user account on your external authentication provider to determine the username for the corresponding user account on your GitHub Enterprise Server instance. When SAML authentication is configured with SCIM, GitHub uses the SCIM `userName` attribute value sent from the IdP to determine the username for the corresponding user account. If the identifier includes unsupported characters, GitHub will normalize the username per the following rules.


1. GitHub will normalize any non-alphanumeric character in your account's username into a dash. For example, a username of `mona.the.octocat` will be normalized to `mona-the-octocat`. Note that normalized usernames also can't start or end with a dash. They also can't contain two consecutive dashes.

1. The letter casing in the value provided by the IdP is preserved in the normalized username.

1. Usernames created from email addresses are created from the normalized characters that precede the `@` character.

1. Usernames created from domain accounts are created from the normalized characters after the `\\` separator.

1. If multiple accounts are normalized into the same username, only the first user account is created. Subsequent users with the same username won't be able to sign in. For more information, see [Resolving username problems](#resolving-username-problems).

### Examples of username normalization

| Identifier on provider | Normalized username on GitHub.com | Result |
| :- | :- | :- |
| The.Octocat | `The-Octocat_SHORT-CODE` | This username is created successfully. |
| !The.Octocat | `-The-Octocat_SHORT-CODE` | This username is not created, because it starts with a dash. |
| The!!Octocat | `The--Octocat_SHORT-CODE` | This username is not created, because it contains two consecutive dashes. |
| The!Octocat | `The-Octocat_SHORT-CODE` | This username is not created. Although the normalized username is valid, it already exists. |
| `The.Octocat@example.com` | `The-Octocat_SHORT-CODE` | This username is not created. Although the normalized username is valid, it already exists. |
| `internal\\The.Octocat` | `The-Octocat_SHORT-CODE` | This username is not created. Although the normalized username is valid, it already exists. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states_SHORT-CODE` | This username is not created, because it exceeds the 39-character limit. |



### About username normalization with SAML

If you configure SAML authentication for {% ifversion ghes %}your GitHub Enterprise Server instance, GitHub determines each person's username by one of the following assertions in the SAML response, ordered by descending priority.

1. The custom `username` attribute, if defined and present
1. An `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` assertion, if present
1. An `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` assertion, if present
1. The `NameID` element

GitHub requires the `NameID` element even if other attributes are present. For more information, see [Saml Configuration Reference](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/saml-configuration-reference#saml-attributes).

GitHub creates a mapping between the `NameID` from the IdP and the username on your GitHub Enterprise Server instance, so the `NameID` should be persistent, unique, and not subject to change for the lifecycle of the user.

> [!NOTE]
> If the `NameID` for a user does change on the IdP, the person will see an error message when signing in to your GitHub Enterprise Server instance. To restore the person's access, you'll need to update the user account's `NameID` mapping. For more information, see [Updating A Users Saml Nameid](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/updating-a-users-saml-nameid).

{% endif %}



## Resolving username problems

When a new user is being provisioned, if the username conflicts with an existing user in the enterprise, the provisioning attempt will fail with a `409` error. If the username is longer than 39 characters (including underscore and short code), the provisioning attempt will fail with a `400` error. For a full list of possible user provisioning status codes, see [Scim?Apiversion=2022 11 28](https://docs.github.com/en/rest/enterprise-admin/scim?apiVersion=2022-11-28#provision-a-scim-enterprise-user--status-codes).

To resolve this problem, you must make one of the following changes in your IdP so that all normalized usernames will be within the character limit and unique.

* Change the `userName` attribute value for individual users that are causing problems
* Change the `userName` attribute mapping for all users
* Configure a custom `userName` attribute for all users

When you change the attribute mapping, usernames of existing managed user accounts will be updated, but nothing else about the accounts will change, including activity history.

> [!NOTE]
> GitHub Support cannot provide assistance with customizing attribute mappings or configuring custom expressions. You can contact your IdP with any questions.

### Resolving username problems with Entra ID

To resolve username problems in Entra ID, either modify the User Principal Name value for the conflicting user or modify the attribute mapping for the `userName` attribute. If you modify the attribute mapping, you can choose an existing attribute or use an expression to ensure that all provisioned users have a unique normalized alias.

1. In Entra ID, open the GitHub Enterprise Managed User application.
1. In the left sidebar, click **Provisioning**.
1. Click **Edit Provisioning**.
1. Expand **Mappings**, then click **Provision Entra ID Users**.
1. Click the GitHub `userName` attribute mapping.
1. Change the attribute mapping.
   * To map an existing attribute in Entra ID to the `userName` attribute in GitHub, click your desired attribute field. Then, save and wait for a provisioning cycle to occur within about 40 minutes.
   * To use an expression instead of an existing attribute, change the Mapping type to "Expression", then add a custom expression that will make this value unique for all users. For example, you could use `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`. For more information, see [Reference for writing expressions for attribute mappings in Microsoft Entra ID](https://learn.microsoft.com/entra/identity/app-provisioning/functions-for-customizing-application-data) on Microsoft Learn.

### Resolving username problems with Okta

To resolve username problems in Okta, update the attribute mapping settings for the GitHub Enterprise Managed User application.

1. In Okta, open the GitHub Enterprise Managed User application.
1. Click **Sign On**.
1. In the "Settings" section, click **Edit**.
1. Update the "Application username format."
