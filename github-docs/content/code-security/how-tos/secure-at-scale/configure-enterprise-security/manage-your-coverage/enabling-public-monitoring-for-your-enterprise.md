# Enabling public monitoring for your enterprise

## Prerequisites

Before enabling public monitoring, ensure your enterprise has:

* GitHub Advanced Security or GitHub Secret Protection enabled
* For GitHub Enterprise Cloud with data residency enterprises, we strongly recommend at least one verified domain configured, since it's the only method available to receive attributed alerts. See [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

> [!NOTE]
> A verified domain isn't required to enable public monitoring. For enterprises not using GitHub Enterprise Cloud with data residency, configuring one is optional, but it provides full attribution coverage. See [Public Monitoring](https://docs.github.com/en/code-security/concepts/secret-security/public-monitoring#attribution-methods).

## Enabling public monitoring


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Additional Settings," toggle **Public monitoring**.
