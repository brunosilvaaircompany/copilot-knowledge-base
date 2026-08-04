# Enabling GitHub Advanced Security products for your enterprise

## About enabling GitHub Advanced Security products

GitHub Advanced Security features help developers improve and maintain the security and quality of code. For more information, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).


When you enable GitHub Advanced Security for your enterprise, repository administrators in all organizations can enable the features unless you set up a policy to restrict access. See [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).

You can also enable or disable GitHub Secret Protection or GitHub Code Security features via the API. For more information, see [Secret Scanning](https://docs.github.com/en/rest/secret-scanning#enable-or-disable-security-features-for-an-enterprise) in the REST API documentation.


For guidance on a phased deployment of GitHub Advanced Security, see [Introduction To Adopting GitHub Advanced Security At Scale](https://docs.github.com/en/code-security/tutorials/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale).

## Checking whether your license includes Advanced Security


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Licensing{% elsif ghes %}License**.

1. If your license includes GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security, the license page includes a section showing details of current usage.

## Prerequisites for enabling Secret Protection and Code Security

1. Upgrade your GitHub Enterprise license to include Secret Protection and Code Security. For information about licensing, see [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security).
1. Download the new license file. See [Download Your License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/download-your-license).
1. Upload the new license file to GitHub Enterprise Server. See [Upload New License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/upload-new-license).
1. Review the prerequisites for the features you plan to enable.

    * Code scanning, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning).
    * Secret scanning, see [Configure Secret Scanning](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configure-secret-scanning#prerequisites-for-secret-scanning).
    * Dependabot, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

## Enabling and disabling Advanced Security features

> [!WARNING]
> * Changing this setting will cause user-facing services on GitHub Enterprise Server to restart. You should time this change carefully, to minimize downtime for users.
> * You should communicate any changes you plan to make to feature enablement settings to organization owners before making them, so as not to impact existing security configurations that have been rolled out by organizations in your enterprise.


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Security**.

1. Under "Security," select the features that you want to enable and deselect any features you want to disable.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



When GitHub Enterprise Server has finished restarting, you're ready to set up any additional resources required for newly enabled features. See [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).

## Enabling or disabling Advanced Security features via the administrative shell (SSH)

You can enable or disable features programmatically on GitHub Enterprise Server. For more information about the administrative shell and command-line utilities for GitHub Enterprise Server, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh) and [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config).

For example, you can enable any Advanced Security feature with your infrastructure-as-code tooling when you deploy an instance for staging or disaster recovery.

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Enable features for Advanced Security.

    * To enable code scanning, enter the following commands.

      ```shell copy
      ghe-config app.minio.enabled true
      ghe-config app.code-scanning.enabled true
      ```

    * To enable secret scanning, enter the following command.

      ```shell copy
      ghe-config app.secret-scanning.enabled true
      ```



    * Optionally, to enable validity checks for secret scanning:
        * Enter the following command:

           ```shell copy
           ghe-config app.secret-scanning.validity-checks-available-on-instance true`
           ```

         * To check whether outbound connection is possible, use:

           ```shell copy
           /usr/local/share/enterprise/ghe-secret-scanning-validity-checks-connection-test
           ```


    * To enable the dependency graph, enter the following command.

      ```shell copy
      ghe-config app.dependency-graph.enabled true
      ```

1. Optionally, disable features for Advanced Security.

    * To disable code scanning, enter the following commands.

      ```shell copy
      ghe-config app.code-scanning.enabled false
      ```

      * Optionally, if you disable code scanning, you can also disable the internal MinIO service for Advanced Security. If Dependabot updates are enabled for the instance and you want to disable this service, you must also disable Dependabot updates. Disabling the service does not affect MinIO storage for GitHub Actions or GitHub Packages. For more information about Dependabot updates, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

        * To disable Dependabot updates, enter the following command.

          ```shell copy
          ghe-config app.dependabot.enabled false
          ```

        * To disable MinIO, enter the following command.

          ```shell copy
          ghe-config app.minio.enabled false
          ```

    * To disable secret scanning, enter the following command.

      ```shell copy
      ghe-config app.secret-scanning.enabled false
      ```

    * To disable the dependency graph, enter the following command.

      ```shell
      ghe-config app.dependency-graph.enabled false
      ```

1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.
