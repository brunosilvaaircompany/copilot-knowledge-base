# REST API endpoints for Git LFS

## About Git LFS

You can use Git LFS to store large files in a Git repository. The REST API allows you to enable or disable the feature for an individual repository. For more information about Git LFS, see [About Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage).

People with admin access to a repository can use these endpoints.



Usage of Git LFS is subject to billing. For more information, see [Git Lfs](https://docs.github.com/en/billing/concepts/product-billing/git-lfs).

If you want to use these endpoints for a repository that belongs to an organization, you must have admin access to the repository (which can be inherited as an organization owner), and your role must also provide you with access to the organization's billing.

* If repository is owned by an organization on GitHub Team, you must be an organization owner or billing manager. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners).
* If repository is owned by an organization that is on GitHub Enterprise Cloud and is not owned by an enterprise account, you must be an organization owner or billing manager. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners).
* If repository is owned by an organization that is owned by an enterprise account, you must be an enterprise owner or billing manager. For more information, see [Abilities Of Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles#enterprise-owners).
