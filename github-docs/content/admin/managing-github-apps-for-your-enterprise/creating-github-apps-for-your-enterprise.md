# Creating GitHub Apps for your enterprise

You can create a GitHub App under your enterprise account. The app can only be installed on your enterprise or organizations within your enterprise, and can only be authorized by members of your enterprise. The app can't be installed on user accounts.

## Step 1: Registering a GitHub App

To create a GitHub App, you must first register the app. See [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app).

Apps can also be transferred to an enterprise from a member or organization. To transfer an app, see [Transferring Ownership Of A GitHub App](https://docs.github.com/en/apps/maintaining-github-apps/transferring-ownership-of-a-github-app).


### Step 1a: Adding an enterprise app manager

Enterprise owners can add enterprise members to an app as an app manager. App managers can manage the app's settings and credentials, but cannot install the app. For more information, see [About GitHub App Managers](https://docs.github.com/en/apps/maintaining-github-apps/about-github-app-managers).

## Step 2: Building a GitHub App

After registering a GitHub App, you will want to write code to make your GitHub App do something. For examples of how to write code, see:

* [Quickstart](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/quickstart)
* [Building A GitHub App That Responds To Webhook Events](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-github-app-that-responds-to-webhook-events)
* [Building A Login With GitHub Button With A GitHub App](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-login-with-github-button-with-a-github-app)
* [Building A CLI With A GitHub App](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-cli-with-a-github-app)
* [Making Authenticated API Requests With A GitHub App In A GitHub Actions Workflow](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)

You should aim to follow best practices. See [Best Practices For Creating A GitHub App](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app).

## Step 3: Authorizing or installing your GitHub App

Once your GitHub App is registered, you'll need to make it available for use, either through **authorization** or **installation**, depending on the app’s purpose.

Enterprise owners and app managers can modify the permissions for apps owned by their enterprise at any time. Permissions changes will be automatically accepted by organizations in the enterprise if the change was made by the enterprise owner. Otherwise, the changes will be accepted only where the app manager is also an organization owner, and an organization owner must accept the update request for all other organizations.

### Step 3a: Authorizing your GitHub App

Some GitHub Apps, like Copilot extensions, require **authorization** but do not need to be installed on an organization. Users in your enterprise can authorize the app to access resources within organizations. However, the app will only have access to GitHub resources where it is installed. See [Authorizing GitHub Apps](https://docs.github.com/en/apps/using-github-apps/authorizing-github-apps).

### Step 3b: Sharing your GitHub App via an installation link

For apps that require installation to function, you can provide organization owners with an installation link. Once the app is installed, it will have access to the organization's resources. See [Sharing Your GitHub App](https://docs.github.com/en/apps/sharing-github-apps/sharing-your-github-app#sharing-your-github-app-via-an-install-link).

## Step 4: Installing your GitHub App (if required)

If your GitHub App requires installation (not just authorization), organization owners can use the install link to install the app on their organization. See [Installing A GitHub App From A Third Party](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party).



If you need to install the same app in many organizations, you can automate this with an API. See [Automate Installations](https://docs.github.com/en/admin/managing-github-apps-for-your-enterprise/automate-installations).

If your app uses enterprise permissions, you can install it on your enterprise. To find the installation link, go to the app's settings page in your enterprise account. See [Installing A GitHub App On Your Enterprise](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-on-your-enterprise).
