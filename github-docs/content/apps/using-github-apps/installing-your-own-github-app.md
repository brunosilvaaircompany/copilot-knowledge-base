# Installing your own GitHub App

## About installing your own GitHub App

After creating a GitHub App, you can install it based on its visibility.

* **Only on this account:** The GitHub App can only be installed on the account that created it. This visibility is not available for apps{% ifversion ghec %} created by a managed user account or registered by an enterprise.{% endif %}
* **Any account:** You can install this GitHub App on any account you control. This visibility is not available for apps registered by an enterprise.
* **Only enterprise organizations:** If the GitHub App is owned by an enterprise, you can only install the app on{% ifversion enterprise-installed-apps %} that enterprise or organizations within the enterprise. Organizations where you are an organization owner will appear in the installation options.{% endif %}

If you are an Enterprise Managed User, you cannot install a GitHub App on your user account.

## Installing your own GitHub App

1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.

1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**.

1. In the left sidebar, click **GitHub Apps**.

1. Next to the GitHub App that you want to install, click **Edit**.
1. Click **Install App**.
1. Click **Install** next to the location where you want to install the GitHub App.
1. If the app requires repository permissions, select **All repositories** or **Only select repositories**. The app will always have at least read-only access to all public repositories on GitHub.

   If the app does not require repository permissions, these options will be omitted.
1. If you selected **Only select repositories** in the previous step, under the **Select repositories** dropdown, select the repositories that you want the app to access.

   If the app creates any repositories, the app will automatically be granted access to those repositories as well.
1. Click **Install**.
