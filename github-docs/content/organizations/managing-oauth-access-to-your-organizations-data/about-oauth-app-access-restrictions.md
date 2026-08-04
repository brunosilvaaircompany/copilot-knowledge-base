# About OAuth app access restrictions

## About OAuth app access restrictions

When OAuth app access restrictions are enabled, organization members and outside collaborators cannot authorize OAuth app access to organization resources. Users can request owner approval for OAuth apps they'd like to use, and organization owners receive a notification of pending requests.


Organization owners can choose whether to allow outside collaborators to request access for unapproved OAuth apps and GitHub Apps. For more information, see [Limiting OAUTH App And GitHub App Access Requests And Installations](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests-and-installations).


Even if you restrict OAuth apps access in your organization, users can still authorize privileged OAuth apps and use them to access data from the organization. For more information, see [Privileged OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/privileged-oauth-apps).

When you create a new organization, OAuth app access restrictions are enabled by default. Organization owners can [disable OAuth app access restrictions](/organizations/managing-oauth-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization) at any time.


> [!WARNING]
> When an organization has not set up OAuth app access restrictions, any OAuth app authorized by an organization member can also access the organization's private resources.


To further protect your organization's resources, you can upgrade to GitHub Enterprise Cloud, which includes security features like SAML single sign-on. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).



## Setting up OAuth app access restrictions

When an organization owner sets up OAuth app access restrictions for the first time:

* **Applications that are owned by the organization** are automatically given access to the organization's resources.
* **OAuth apps** immediately lose access to the organization's resources.
* **SSH keys created before February 2014** immediately lose access to the organization's resources (this includes user and deploy keys).
* **SSH keys created by OAuth apps during or after February 2014** immediately lose access to the organization's resources.
* **Hook deliveries from private organization repositories** will no longer be sent to unapproved OAuth apps.
* **API access** to private organization resources is not available for unapproved OAuth apps. In addition, there are no privileged create, update, or delete actions on public organization resources.
* **Hooks created by users and hooks created before May 2014** will not be affected.
* **Private forks of organization-owned repositories** are subject to the organization's access restrictions.

## Resolving SSH access failures

When an SSH key created before February 2014 loses access to an organization with OAuth app access restrictions enabled, subsequent SSH access attempts will fail. Users will encounter an error message directing them to a URL where they can approve the key or upload a trusted key in its place.

## Webhooks

When an OAuth app is granted access to the organization after restrictions are enabled, any pre-existing webhooks created by that OAuth app will resume dispatching.

When an organization removes access from a previously-approved OAuth app, any pre-existing webhooks created by that application will no longer be dispatched (these hooks will be disabled, but not deleted).

## Re-enabling access restrictions

If an organization disables OAuth app access application restrictions, and later re-enables them, previously approved OAuth app are automatically granted access to the organization's resources.

## Further reading

* [Enabling OAUTH App Access Restrictions For Your Organization](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)
* [Approving OAUTH Apps For Your Organization](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization)
* [Reviewing GitHub Apps Installed In Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-github-apps-installed-in-your-organization)
* [Denying Access To A Previously Approved OAUTH App For Your Organization](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization)
* [Disabling OAUTH App Access Restrictions For Your Organization](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)
* [Requesting Organization Approval For OAUTH Apps](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/requesting-organization-approval-for-oauth-apps)
* [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)
