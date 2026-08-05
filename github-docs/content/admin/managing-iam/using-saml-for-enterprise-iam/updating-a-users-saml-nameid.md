# Updating a user's SAML NameID

## About updates to users' SAML `NameID`

In some situations, you may need to update values associated with a person's account on your SAML IdP. If that identifier is also the `NameID` that you use for authentication on GitHub, you must update the `NameID` mapping on your instance so the person can continue to authenticate successfully. For more information, see [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).

To update user SAML `NameID` mappings in bulk, you can use the `ghe-saml-mapping-csv` command. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-saml-mapping-csv).

When SCIM is enabled on your GitHub Enterprise Server instance, you cannot update user SAML `NameID` mappings.

## Updating a user's SAML `NameID`

Enterprise owners can update a user's SAML `NameID` on a GitHub instance.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the left sidebar, click **All users**.
1. In the list of users, click the username you'd like to update the `NameID` mapping for.
1. In the upper-right corner of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. To the right of "Update SAML NameID", click **Edit** .
1. In the "NameID" field, type the new `NameID` for the user.
1. Click **Update NameID**.
