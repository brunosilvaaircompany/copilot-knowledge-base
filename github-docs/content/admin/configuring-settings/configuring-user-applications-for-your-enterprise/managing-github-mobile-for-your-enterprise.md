# Managing GitHub Mobile for your enterprise

## About GitHub Mobile

GitHub Mobile allows people to triage, collaborate, and manage work on your GitHub Enterprise Server instance from a mobile device after successful authentication. GitHub Mobile is available as an Android and iOS app.
 For more information, see [GitHub Mobile](https://docs.github.com/en/get-started/using-github/github-mobile).

You can allow or disallow people from using GitHub Mobile to authenticate to your GitHub Enterprise Server instance and access your instance's data. By default, GitHub Mobile is enabled for people who use your GitHub Enterprise Server instance.

## Enabling or disabling GitHub Mobile

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. If you have created multiple Management Console user accounts, select **Root site admin** or **Management Console user**. For more information about Management Console user accounts see, [Managing Access To The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/managing-access-to-the-management-console).
1. Type your Management Console credentials. Then click **Continue**.

1. In the "Settings" sidebar, click **Mobile**.
1. Under "GitHub Mobile", select or deselect **Enable GitHub Mobile Apps**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.
