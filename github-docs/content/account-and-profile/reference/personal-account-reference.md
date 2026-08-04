# Personal account reference

## Side effects of account deletion

*  All repositories, forks of private repositories, wikis, issues, pull requests and GitHub Pages sites owned by your account will be deleted. Your billing will end immediately. Your username will be available for anyone to use after 90 days.
* If you're the only owner in the organization, you must transfer ownership to another person or delete your organization.
* If there are other organization owners in the organization, you must remove yourself from the organization.



If the account namespace includes any public repositories that contain an action listed on GitHub Marketplace, or that had more than 100 clones or more than 100 uses of GitHub Actions in the week prior to deletion, GitHub permanently retires the owner name and repository name combination (`OWNER/REPOSITORY-NAME`) when you delete your account.




If the account namespace includes any packages or container images stored in a GitHub Packages registry, GitHub deletes the packages and container images when you delete your account. By deleting your account, you may break projects that depend on these packages and images.


If the account namespace includes any public container images with more than 5,000 downloads, the full name of these container images (`NAMESPACE/IMAGE-NAME`) is permanently retired when you delete the account to ensure the container image name cannot be reused in the future.



## Side effects of converting an account to an organization

* You will **no longer** be able to sign into the converted personal account.
* You will **no longer** be able to create or modify gists owned by the converted personal account.
* An organization **cannot** be converted back to a user.
* The SSH keys, OAuth tokens, job profile, reactions, and associated user information, **will not** be transferred to the organization. This is only true for the personal account that's being converted, not any of the personal account's collaborators.
* Any GitHub Apps installed on the converted personal account will be uninstalled.
* Any commits made with the converted personal account **will no longer be linked** to that account. The commits themselves **will** remain intact.
* Any existing comments made by the converted personal account **will no longer be linked** to that account. The comments themselves **will** remain intact, but will be associated with the `ghost` user.
* Any forks of private repositories made with the converted personal account will be deleted.
* Since organizations cannot star repositories, you will no longer have access to your original list of starred repositories.
* You will no longer have access to the list of users you were following from your user account.
* Any followers of your user account will not automatically follow the new organization.
* Any existing collaborators on your projects will still have access to those projects in the new organization.
* GitHub Actions is not automatically enabled on the account after converting it to an organization, and will have to be re-enabled. To re-enable GitHub Actions, create a new workflow file in the `.github/workflows` directory of your repository.

## Side effects of merging accounts

* Organization and repository access permissions aren't transferable between accounts. If the account you want to delete has an existing access permission, an organization owner or repository administrator will need to invite the account that you want to keep.
* Any commits authored with a GitHub-provided `noreply` email address cannot be transferred from one account to another. If the account you want to delete used the **Keep my email address private** option, it won't be possible to transfer the commits authored by the account you are deleting to the account you want to keep.
* Issues, pull requests, and discussions will not be attributed to the new account.
* Achievements are not able to be transferred between accounts.

## Security and analysis features settings



You can't disable some security and analysis features that are enabled by default for public repositories.





If you enable security and analysis features, GitHub performs read-only analysis on your repository.



When you enable one or more security and analysis features for existing repositories, you will see any results displayed on GitHub within minutes:

* All the existing repositories will have the selected configuration.
* New repositories will follow the selected configuration if you've enabled the checkbox for new repositories.
* We use the permissions to scan for manifest files to apply the relevant services.
* If enabled, you'll see dependency information in the dependency graph.
* If enabled, GitHub will generate Dependabot alerts for vulnerable dependencies or malware.
* If enabled, Dependabot security updates will create pull requests to upgrade vulnerable dependencies when Dependabot alerts are triggered.


## Available for hire

When you select that you are **Available for hire** and someone uses the REST API to get public and private information about authenticated users, the `hireable` field returns `true`. For more information, see [Users](https://docs.github.com/en/rest/users/users) in the REST API documentation.
