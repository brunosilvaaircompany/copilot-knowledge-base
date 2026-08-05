# Accessing the Management Console

## About access to the Management Console

From the Management Console, you can initialize, configure, and monitor your GitHub Enterprise Server instance.
 For more information, see [About The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/about-the-management-console).

You can access the Management Console as the root site administrator or a Management Console user. An administrator created the root site administrator password during the initial setup process for your GitHub Enterprise Server instance.


## Accessing the Management Console

The first time that you access the Management Console for your GitHub Enterprise Server instance, you must upload your license file. For more information, see [Download Your License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/download-your-license).

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. If you have created multiple Management Console user accounts, select **Root site admin** or **Management Console user**. For more information about Management Console user accounts see, [Managing Access To The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/managing-access-to-the-management-console).
1. Type your Management Console credentials. Then click **Continue**.

1. Click **Continue**.


## Accessing the Management Console as an unauthenticated user

1. Visit this URL in your browser, replacing `hostname` with your actual GitHub Enterprise Server hostname or IP address:

   ```shell
   http(s)://HOSTNAME/setup
   ```

1. If you have created multiple Management Console user accounts, select **Root site admin** or **Management Console user**. For more information about Management Console user accounts see, [Managing Access To The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/managing-access-to-the-management-console).
1. Type your Management Console credentials. Then click **Continue**.

1. Click **Continue**.
