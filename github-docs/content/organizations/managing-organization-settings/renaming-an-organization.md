# Renaming an organization

> [!TIP]
> Only organization owners can rename an organization. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).


## What happens when I change my organization's name?

After changing your organization's name, your old organization name becomes available for someone else to claim. When you change your organization's name, most references to your repositories under the old organization name automatically change to the new name. However, some links to your profile won't automatically redirect.

### Changes that occur automatically

* GitHub automatically redirects references to your repositories. Web links to your organization's existing **repositories** will continue to work. This can take a few minutes to complete after you initiate the change.
* You can continue pushing your local repositories to the old remote tracking URL without updating it. However, we recommend you update all existing remote repository URLs after changing your organization name. Because your old organization name is available for use by anyone else after you change it, the new organization owner can create repositories that override the redirect entries to your repository. For more information, see [Managing Remote Repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories).
* Previous Git commits will also be correctly attributed to users within your organization.
* If the account namespace includes any public repositories that contain an action listed on GitHub Marketplace, or that had more than 100 clones or more than 100 uses of GitHub Actions in the week prior to you renaming your account, GitHub permanently retires the old owner name and repository name combination (`OLD-OWNER/REPOSITORY-NAME`) when you rename your account.

* If the account namespace includes any packages or container images stored in a GitHub Packages registry, GitHub transfers the packages and container images to the new namespace. By renaming your account, you may break projects that depend on these packages. If the namespace includes any container images that are public and have more than 5,000 downloads, the full former name of these container images (`OLD-NAMESPACE/IMAGE-NAME`) is permanently retired when you rename the account to ensure the container image name cannot be reused in the future.


### Changes that aren't automatic

After changing your organization's name:
* Links to your previous organization profile page, such as `https://github.com/previousorgname`, will return a 404 error. We recommend you update links to your organization from other sites, such as your LinkedIn or X (formerly Twitter) profiles.
* API requests that use the old organization's name will return a 404 error. We recommend you update the old organization name in your API requests.
* There are no automatic [@mention](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) redirects for teams that use the old organization's name.
* If SAML single sign-on (SSO) and/or is enabled for the organization, you must update the organization name in the application for GitHub Enterprise Cloud on your identity provider (IdP). If you don't update the organization name on your IdP, members of the organization will no longer be able to authenticate with your IdP to access the organization's resources. For more information, see [Connecting Your Identity Provider To Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).
* If SCIM is enabled for the organization, you must update the organization name in the application for GitHub Enterprise Cloud on your identity provider (IdP). If you don't update the organization name within the SCIM settings on your IdP, you will not be able to provision or deprovision users.

## Changing your organization's name

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. Near the bottom of the settings page, under "Danger zone", click **Rename organization**.
1. Read the warning messages, then, if you want to go ahead, click **I understand, let's rename my organization**.
1. Type a new name for your organization, then click **Change organization's name**.

## Further reading

* [Troubleshooting Commits](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/troubleshooting-commits#commits-are-linked-to-the-wrong-user)
