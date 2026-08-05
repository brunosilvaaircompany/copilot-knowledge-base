# About authentication with single sign-on

## About authentication with SSO

Single sign-on (SSO) gives organization owners and enterprise owners a way to control and secure access to organization resources like repositories, issues, and pull requests.
 Organization owners can invite your personal account on GitHub to join their organization that uses SSO, which allows you to contribute to the organization and retain your existing identity and contributions on GitHub.

Access to SSO protected `internal` resources in an enterprise, such as repositories, projects, and packages, requires an SSO session for any organization in the enterprise. This allows code and work to be shared across organizations in an enterprise without requiring users to join each organization.

If you're a member of an enterprise with managed users, you will instead use a new account that is provisioned for you and controlled by your enterprise. For more information, see [Types Of GitHub Accounts](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts#managed-user-accounts).


When you attempt to access most resources within an organization that uses SSO, GitHub will redirect you to the organization's SSO identity provider (IdP) to authenticate. After you successfully authenticate with your account on the IdP, the IdP redirects you back to GitHub, where you can access the organization's resources.

IdP authentication is not required for accessing public repositories in certain ways:

* Viewing the repository's overview page and file contents on GitHub
* Forking the repository
* Performing read operations via Git, such as cloning the repository

Authentication is required for other access to public repositories, such as viewing issues, pull requests, projects, and releases.


> [!NOTE]
> SSO authentication is not required for outside collaborators. For more information about outside collaborators, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).


If you have recently authenticated with your organization's SAML IdP in your browser, you are automatically authorized when you access a GitHub organization that uses SAML SSO. If you haven't recently authenticated with your organization's SAML IdP in your browser, you must authenticate at the SAML IdP before you can access the organization.

You must periodically authenticate with your IdP to authenticate and gain access to the organization's resources on GitHub. The duration of this login period is 24 hours unless specified otherwise by your IdP. This periodic login requirement limits the length of access and requires you to re-identify yourself to continue. You can view and manage your active SSO sessions in your security settings. For more information, see [Viewing And Managing Your Active Sso Sessions](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/viewing-and-managing-your-active-sso-sessions).


## Linked external identities

When you authenticate with your IdP account and return to GitHub, GitHub will record a link in the organization or enterprise between your GitHub personal account and the external identity you signed into. This linked identity is used to validate your membership in that organization, and depending on your organization or enterprise setup, is also used to determine which organizations and teams you're a member of as well. Each GitHub account can be linked to exactly one external identity per organization. Likewise, each external identity can be linked to exactly one GitHub account in an organization.

If you sign in with an external identity that is already linked to another GitHub account, you will receive an error message indicating that you cannot sign in with that identity. This situation can occur if you are attempting to use a new GitHub account to work inside of your organization. If you didn't intend to use that external identity with that GitHub account, then you'll need to sign out of that external identity and then repeat the SSO login. If you do want to use that external identity with your GitHub account, you'll need to ask your administrator to unlink your external identity from your old account, so that you can link it to your new account. Depending on the setup of your organization or enterprise, your admin may also need to reassign your identity within your identity provider. For more information, see [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).

If the external identity you sign in with does not match the external identity that is currently linked to your GitHub account, you'll receive a warning that you are about to relink your account. As your external identity is used to govern access and team membership, continuing with the new external identity can cause you to lose access to teams and organizations inside of GitHub. Only continue if you know that you're supposed to use that new external identity for authentication in the future.

## Authorizing personal access tokens and SSH keys with SSO

To use the API or Git on the command line to access protected content in an organization that uses SSO, you will need to use an authorized personal access token over HTTPS or an authorized SSH key.

If you don't have a personal access token or an SSH key, you can create a personal access token for the command line or generate a new SSH key. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) or [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

To use a new or existing personal access token or SSH key with an organization that uses or enforces SSO, you will need to authorize the token or authorize the SSH key for use with the organization. For more information, see [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on) or [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).

## About OAuth apps, GitHub Apps, and SSO

You must have an active SSO session each time you authorize an OAuth app or GitHub App in order to access an organization that uses or enforces SSO. If you do not have an active session for an organization that requires SSO when you sign into the app, the app will be unable to access that organization. You can create an active SSO session by navigating to `https://github.com/orgs/ORGANIZATION-NAME/sso` or `https://github.com/enterprises/ENTERPRISE-NAME/sso` in your browser.

After an enterprise or organization owner enables or enforces SSO for an organization, and after you authenticate via SSO for the first time, you must reauthorize any OAuth apps or GitHub Apps that you previously authorized to access the organization.

To see the OAuth apps you've authorized, visit your [OAuth apps page](https://github.com/settings/applications). To see the GitHub Apps you've authorized, visit your [GitHub Apps page](https://github.com/settings/apps/authorizations).

For more information, see [Saml And GitHub Apps](https://docs.github.com/en/apps/using-github-apps/saml-and-github-apps).

## Further reading

* [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)
