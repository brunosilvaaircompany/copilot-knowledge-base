# About privately published GitHub Pages sites

## About access control for GitHub Pages sites

With access control for GitHub Pages, you can restrict access to your project site by publishing the site privately. A privately published site can only be accessed by people with read access to the repository the site is published from. You can use privately published sites to share your internal documentation or knowledge base with members of your enterprise.

> [!NOTE]
> To publish a GitHub Pages site privately, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).



If your enterprise uses Enterprise Managed Users, GitHub Pages sites can only be published as private, and all GitHub Pages sites are only accessible to other enterprise members. For more information about Enterprise Managed Users, see [GitHub Pages Limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#limits-for-enterprise-managed-users).

If your organization uses GitHub Enterprise Cloud without Enterprise Managed Users, you can choose to publish your project sites privately or publicly to anyone on the internet.

Access control is available for project sites published from a private or internal repository that the organization owns. You cannot manage access control for an organization site. For more information about the types of GitHub Pages sites, see [What Is GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites).

## About subdomains for privately published sites

Privately published sites are available at a different subdomain than publicly published sites. This ensures that your GitHub Pages site is secure from the moment it's published:

* Every subdomain of `*.pages.github.io` is automatically secured with a TLS certificate, and HSTS is enforced so that browsers always serve the page over HTTPS.
* Each privately published site uses a unique subdomain, so other repositories in your organization cannot publish content on the same origin as the site. This protects your site from [cookie tossing](https://github.blog/2013-04-09-yummy-cookies-across-domains/). This is also why GitHub Pages sites are not hosted on the `github.com` domain.

You can see your site's unique subdomain in the "Pages" tab of your repository settings. If you're using a static site generator configured to build the site with the repository name as a path, you may need to update the settings for the static site generator when changing the site to private. For more information, see [Managing A Custom Domain For Your GitHub Pages Site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) or the documentation for your static site generator.

If you change a privately published site to public, the site's URL changes, unless the site uses a custom domain.

To use a shorter and more memorable domain for your privately published site, you can configure a custom domain. For more information, see [Configuring A Custom Domain For Your GitHub Pages Site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Privately published sites after a plan change

If your organization stops using GitHub Enterprise Cloud, for example because the organization is removed from your enterprise, GitHub keeps existing privately published sites private. A plan change never changes the visibility of a site. However, if a privately published site is deleted, a new site created from the same repository can be public.

After the change:

* Existing privately published sites stay published privately, at their current URL.
* While a site exists, pushing to its publishing source or running a GitHub Pages workflow doesn't publish it publicly.
* Each site keeps its unique subdomain. The subdomain is only released if the site is deleted.
* Organization policies for publishing GitHub Pages sites stay in effect. See [Managing The Publication Of GitHub Pages Sites For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
* New sites can't be published privately.
* You can't change the visibility of an existing privately published site to public.

To publish the content publicly, delete the site, then create it again. The new site is public because the organization can no longer publish privately. See [Deleting A GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/deleting-a-github-pages-site) and [Creating A GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

You can only create the new site if your organization's plan supports GitHub Pages for the repository and your organization's policy allows publicly published sites. With GitHub Free for organizations, GitHub Pages is only available for public repositories.

After a site is deleted, a push to a branch named `gh-pages` in the repository can also create a new site from that branch automatically, as long as the same plan and policy conditions are met. That new site is public too.

> [!WARNING]
> Before you delete a privately published site, check whether the repository has a `gh-pages` branch that a person or an automated process might push to.

## Further reading

* [Changing The Visibility Of Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)
* [Managing The Publication Of GitHub Pages Sites For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)
