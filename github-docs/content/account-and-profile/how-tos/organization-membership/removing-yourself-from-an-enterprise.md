# Removing yourself from an enterprise

If your personal GitHub account is a member of an enterprise, you can leave the enterprise at any time.

After leaving an enterprise, you will no longer be a member of any organization in the enterprise, and you will lose GitHub Copilot licenses and other privileges granted through the enterprise.

>[!NOTE] If you use a managed user account provided by your enterprise, only administrators can remove you from the enterprise. You're using a managed user account if all usernames in your enterprise end with a pattern like `_CODE`, or if you access the enterprise at a domain like `octocorp.ghe.com`.

## Leaving an enterprise

To leave an enterprise, you must remove yourself from every organization in the enterprise, then leave the enterprise itself.

1. Leave every organization in the enterprise.
   1. Go to the [Enterprises](https://github.com/settings/enterprises) page in your settings.
   1. Click the enterprise you want to leave, then click the **Organizations** tab.
   1. Use the **Your role** dropdown to see the organizations that you're a member of.
   1. Leave each organization by following the instructions in [Removing Yourself From An Organization](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/removing-yourself-from-an-organization).
1. Go back to the [Enterprises](https://github.com/settings/enterprises) page and check if the enterprise is still listed. If it is **not** listed, you have left the enterprise.
1. If the enterprise **is** still listed, check your role for the enterprise and take the appropriate action to leave:

   * If you're an **unaffiliated member**, next to the enterprise name, click **Leave**.
   * If you're an **owner**, you must go to the enterprise settings and remove yourself. See [Inviting People To Manage Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account).
   * If you're a **billing manager**, you must ask an enterprise owner to remove you using the instructions in [Inviting People To Manage Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account).

   ![Screenshot of the enterprises page. Next to "unaffilated member", the "Leave" button is highlighted with an orange outline.](/assets/images/help/enterprises/enterprise-self-removal.png)
