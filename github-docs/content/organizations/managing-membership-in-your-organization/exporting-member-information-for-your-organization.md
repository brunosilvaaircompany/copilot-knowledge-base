# Exporting member information for your organization

## About export of membership information

You can export aggregated information about your organization's members as a report. For example, you may want to perform an audit of your organization's current members. You can generate a file containing the report from GitHub's web UI.

The membership information report includes the following information.

* Username and display name details
* Whether the user has two-factor authentication enabled
* Whether the membership is public or private
* Whether the user is an organization owner or member

* Optionally, additional information that depends on the organization's configuration:
  * The user's SAML `NameID`
  * Username and primary email addresses on any GitHub Enterprise Server instances where GitHub Connect is configured
  * User, subscription email address, and license status for Visual Studio subscriptions with GitHub Enterprise


You can also use GitHub's APIs to retrieve information about your organization's members. For more information, see the [GraphQL API](/graphql/reference/users#object-user) and [REST API](/rest/users) documentation.



Enterprise owners can also export membership information for an enterprise. For more information, see [Exporting Membership Information For Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise).



## Exporting a membership information report

You can download a CSV or JSON file containing the membership information report for your organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. To the right of the search bar, select the **Export** dropdown menu and click the desired export format.




## Viewing members' email addresses

You may be able to view the email addresses for members of your organization on either GitHub or an external identity system. The visibility of the email addresses depends on the organization's authentication configuration, domains, and potentially the member's user profile configuration.

* If SAML single sign-on (SSO) is configured for your organization and the `NameID` for your SAML configuration is an email address, you can view the `NameID` for each of your organization members.

* If you verify a domain for your organization, you can view members' email addresses for the verified domain.

* If you don't configure SAML SSO, members access your organization's resources on GitHub solely using a personal account. The owner of a personal account can choose whether or not to publicly display an email address. If a user chooses not to display the email address, you cannot view the email address. Without SAML, GitHub cannot display external identity information, like the `NameID`, which is typically an email address.


If SAML SSO is configured for your organization, or if you have verified a domain, you may be able to view the email addresses in one or more of the following ways.

1. On your SAML Identity Provider (IdP), review the email addresses of users with access to GitHub. For more information, see [About Saml For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/about-saml-for-enterprise-iam).
1. Export the membership report for your organization. The report may contain the user's email address, stored as the following values.

   * `saml_name_id`: The `NameID` from the user's linked SAML identity, which is typically the user's email address (for more information, see [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on))
   * `GitHub com verified domain emails`: Email addresses for any verified domains (for more information, see [Verifying Or Approving A Domain For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization))

   For more information, see [Exporting membership information](#exporting-a-membership-information-report).

1. Use the GraphQL API to retrieve the `ExternalIdentity` for each member. For more information, see [About The GraphQL API](https://docs.github.com/en/graphql/overview/about-the-graphql-api) and [Reference](https://docs.github.com/en/graphql/reference#externalidentity) in the GraphQL API documentation.

   > [!NOTE]
   > Access to external identities depends on whether SAML is configured at the organization or enterprise level. Organization-level external identities are available to organization owners, organization owner personal access tokens with the `read:org` or `admin:org` scope, and GitHub App installation tokens with read or write access to members when the app is installed on the organization. Enterprise-level external identities require an enterprise owner personal access token with the `read:enterprise` or `admin:enterprise` scope. GitHub Apps cannot access enterprise-level external identities, including enterprise-level SAML identities for GitHub Enterprise Cloud with personal user accounts.
