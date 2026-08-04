# Managing your organization's SSH certificate authorities

You can allow members to access your organization's repositories using SSH certificates you provide by adding an SSH CA to your organization. You can require that members use SSH certificates to access organization resources, unless SSH is disabled in your repository.
 For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).



> [!NOTE]
> To use SSH certificate authorities, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).





When you issue each client certificate, you must include an extension that specifies which GitHub user the certificate is for. For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).


## Adding an SSH certificate authority

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates).

Each certificate authority can only be uploaded to one account on GitHub. If an SSH certificate authority has been added to an organization or enterprise account, you cannot add the same certificate authority to another organization or enterprise account on GitHub.

If you add one certificate authority to an enterprise and another certificate authority to an organization in the enterprise, either certificate authority can be used to access the organization's repositories.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. To the right of "SSH Certificate Authorities", click **New CA**.
1. Under "Key," paste your public SSH key.
1. Click **Add CA**.

1. Optionally, to require members to use SSH certificates, select **Require SSH Certificates**, then click **Save**.

   > [!NOTE]
   > When you require SSH certificates, users will not be able to authenticate to access the organization's repositories over HTTPS or with an unsigned SSH key.{% elsif ghec %}, regardless of whether the SSH key is authorized for an organization that requires authentication through an external identity system.
   >
   > The requirement does not apply to authorized GitHub Apps (including user-to-server tokens), deploy keys, or to GitHub features such as GitHub Actions and Codespaces, which are trusted environments within the GitHub ecosystem.


## Deleting an SSH certificate authority

Deleting an SSH CA from your organization immediately prevents GitHub from accepting SSH certificates signed by that CA, including certificates that have not yet expired. For CA rotation guidance, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#certificate-revocation-and-ca-rotation).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "SSH Certificate Authorities", to the right of the CA you want to delete, click **Delete**.
1. Read the warning, then click **I understand, please delete this CA**.



## Upgrading an SSH certificate authority

CAs uploaded to your organization {% ifversion ghec %}prior to March 27th, 2024,{% elsif ghes %}before GitHub Enterprise Server version 3.13 allow the use of non-expiring certificates. To learn more about why expirations are now required for new CAs, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#issuing-certificates). You can upgrade an existing CA to prevent it from issuing non-expiring certificates. For best security, we strongly recommend upgrading all your CAs once you validate you're not reliant on non-expiring certificates.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "SSH Certificate Authorities", to the right of the CA you want to upgrade, click **Upgrade**.
1. Read the warning, then click **Upgrade**.

After upgrading the CA, non-expiring certificates signed by that CA will be rejected.
{% endif %}
