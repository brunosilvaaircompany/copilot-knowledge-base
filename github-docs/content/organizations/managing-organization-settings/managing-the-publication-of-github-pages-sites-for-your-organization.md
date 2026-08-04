# Managing the publication of GitHub Pages sites for your organization

You can choose to allow or disallow organization members from publishing GitHub Pages sites. Organizations that use GitHub Enterprise Cloud can also choose to allow publicly published sites, privately published sites, both, or neither. For more information, see [the GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% elsif ghec %}
You can choose to allow organization members to create publicly published sites, privately published sites, both, or neither. For more information about access control for GitHub Pages sites, see [Changing The Visibility Of Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).


If you disallow publication of GitHub Pages sites, any sites that are already published will remain published. You can manually unpublish the site. For more information, see [Unpublishing A GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Member privileges**.


1. Under "Pages creation, select or deselect **Public**.
{% elsif ghec %}
1. Under "Pages creation", select the visibilities you want to allow and deselect the visibilities you want to disallow.



   > [!NOTE]
> To publish a GitHub Pages site privately, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).



1. Click **Save**.

## Further reading

* [What Is GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
