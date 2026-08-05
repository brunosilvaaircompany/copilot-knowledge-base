# Configuring visibility for organization membership

You can also enforce your default setting on all current organization members in your instance using a command-line utility. For example, if you'd like to require every organization member's visibility to be public, you can set the default to public and enforce the default for all new members in the admin settings, and then use the command-line utility to enforce the public setting on existing members.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Default organization membership visibility", select the drop-down menu, and click **Private** or **Public**.
1. Optionally, to prevent members from changing their membership visibility from the default, select **Enforce for all enterprise members**.
   ![Screenshot of the "Default organization membership visibility" section. The "Enforce for all enterprise members" checkbox is outlined.](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png)
1. If you'd like to enforce your new visibility setting on all existing members, use the `ghe-org-membership-update` command-line utility. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-org-membership-update).
