# Configuring additional secret scanning settings for your enterprise

## About additional settings for secret scanning

There are some additional secret scanning settings that cannot be applied to repositories using security configurations, so you must configure these settings separately:

* [Configuring a resource link for push protection](#configuring-a-resource-link-for-push-protection)
* [Controlling features for new repositories created in a user namespace](#controlling-features-for-new-repositories-created-in-a-user-namespace)
* [Specifying patterns to include in push protection for your enterprise](#specifying-patterns-to-include-in-push-protection-for-your-enterprise)

These additional settings apply only to repositories with secret scanning and GitHub Advanced Security both enabled, or with GitHub Secret Protection enabled.

## Accessing the additional settings for secret scanning


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security Code security**.

1. Scroll down the page to the "Additional settings" section.

### Configuring a resource link for push protection

To provide context for developers when secret scanning blocks a commit, you can display a link with more information on why the commit was blocked.

1. Under "Additional settings", in the "Secret Protection" section and to the right of "Resource link for push protection", click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %}**.
1. In the text box, type the link to the desired resource, then click **{% octicon "check" aria-label="Save" %}**.

### Controlling features for new repositories created in a user namespace

To ensure that any repositories created by users outside of an organization are protected by the same security features as repositories created within an organization, you can enable or disable secret scanning features for new repositories created in a user namespace.

Under "Additional settings", use the options in the "User namespace repositories" section to enable or disable features for new repositories.



### Specifying patterns to include in push protection for your enterprise

> [!NOTE]
> The configuration of patterns for push protection at enterprise and organization level is currently in public preview and subject to change.


You can customize which secret patterns are included in push protection, giving security teams greater control over what types of secrets are blocked in the repositories in your enterprise.

1. Under "Additional settings", in the "Secret Protection" section, click anywhere inside the "Pattern configurations for push protection" row.
1. In the page that gets displayed, make the desired changes in the "Enterprise setting" column.

   You can enable or disable push protection for individual patterns by using the toggle in the relevant column: "Enterprise setting" at the enterprise level, and "Organization setting" at the organization level.

   The data is limited to the scope, therefore the alert volume, false positives, bypass rate, or availability of custom patterns is reflective of user / alert activity within the _enterprise_ or _organization_.

   The GitHub default may change over time as we increase precision and promote patterns.

   > [!NOTE] Organization administrators and security teams can override settings configured at the enterprise level.



For more information on how to read data on the secret scanning pattern configuration page, see [Secret Pattern Data](https://docs.github.com/en/code-security/reference/secret-security/secret-pattern-data).
