# Editing a custom security configuration

## About editing a custom security configuration

After creating and applying a custom security configuration, you may need to edit the enablement settings for that configuration to better secure your repositories. Any changes you make to the enablement settings of a security configuration will automatically populate to all linked repositories.

## Modifying your custom security configuration


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security Code security**.

1. In the "Configurations" section, click the name of the custom security configuration you want to edit.
1. Edit the name and description of your custom security configuration as desired.
1. Edit the enablement settings of your custom security configuration as desired.
1. In the "Policy" section, you can modify the configuration's enforcement status. Enforcing a configuration will block repository owners from changing features that are enabled or disabled by the configuration, but features that are not set aren't enforced. Next to "Enforce configuration", select **Enforce** or **Don't enforce** from the dropdown menu.

    > [!NOTE] Some situations can break the enforcement of security configurations. See [Configuration Enforcement](https://docs.github.com/en/code-security/reference/security-at-scale/configuration-enforcement).


1. To apply your changes, click **Update configuration**.
