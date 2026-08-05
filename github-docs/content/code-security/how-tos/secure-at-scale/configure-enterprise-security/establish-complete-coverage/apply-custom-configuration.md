# Applying a custom security configuration to your enterprise

## About applying a custom security configuration

After you create a custom security configuration, you need to apply it to repositories in your enterprise to enable the configuration's settings on those repositories.

The repository list displays each repository's configuration status. For the full list of statuses and recommended actions, see [Configuration Statuses](https://docs.github.com/en/code-security/reference/security-at-scale/configuration-statuses).



>[!NOTE] Some features enabled in security configurations may require Actions minutes to work. GitHub will let you know if that's the case when you apply the configuration to a repository. For more information about billing for GitHub Actions, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).



## Applying your custom security configuration to repositories in your enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security Code security**.

1. To the right of the configuration you want to apply, select the **Apply to** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **All repositories** or **All repositories without configurations**.

1. Optionally, in the confirmation dialog, you can choose to automatically apply the security configuration to newly created repositories depending on their visibility. Select the **None** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **Public**, or **Private and internal**, or both.


1. Review the detailed information about how your changes will affect GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security license consumption. To apply the security configuration, click **Apply**.

The security configuration is applied to both active and archived repositories because some security features run on archived repositories, for example, secret scanning. In addition, if a repository is later unarchived you can be confident that it is protected by the chosen security configuration.



If security configurations fail to apply to some organizations in your enterprise, GitHub will display a banner on the UI to let you know. You can click the links on the banner to get more information about the organizations and repositories involved.


## Next steps

To learn how to edit your custom security configuration, see [Edit Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/manage-your-coverage/edit-custom-configuration).
