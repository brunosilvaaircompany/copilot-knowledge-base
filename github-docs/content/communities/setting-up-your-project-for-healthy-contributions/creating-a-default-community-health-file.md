# Creating a default community health file

## About default community health files

Default community health files are a set of predefined files that provide guidance and templates for maintaining a healthy and collaborative open source project. These files help you automate and standardize various aspects of your project's development and community interaction, promoting transparency, good practices, and collaboration.

You can add default community health files to a repository called `.github`. For an organization with managed users, the `.github` repository must be **internal**. For all other accounts, the `.github` repository must be **public**.

GitHub will use and display default files for any repository owned by the account, regardless of the destination repository's visibility, that does not have its own file of that type. For supported files that can be stored in more than one location, GitHub uses the following order of precedence:

* The `.github` folder
* The root of the repository
* The `docs` folder

If no corresponding file is found in the current repository, GitHub will use the default file from the `.github` repository. For files that can be stored in more than one location, GitHub follows the same order of precedence in the `.github` repository.

For example, anyone who creates an issue or pull request in a repository that does not have its own `CONTRIBUTING.md` file will see a link to the default `CONTRIBUTING.md` from the `.github` repository. However, if a repository defines valid issue templates or issue template configuration in its own `.github/ISSUE_TEMPLATE` folder, none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used. This allows repository maintainers to override the default files with specific templates or content on a per-repository basis.

Storing the files in `.github` repository allows making changes to the defaults just in one place. Additionally, they won’t appear in the file browser or Git history of the individual repositories, and are not included in their clones, packages, or downloads.



As a repository maintainer, you can use the community standards checklist to see if your project meets the recommended community standards to help people use and contribute to your project. For more information, see [About Community Profiles For Public Repositories](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories).



## About security policies


After someone reports a security vulnerability in your project, you can use GitHub Security Advisories to disclose, fix, and publish information about the vulnerability. For more information about the process of reporting and disclosing vulnerabilities in GitHub, see [Coordinated Disclosure](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/coordinated-disclosure#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github). For more information about repository security advisories, see [Repository Security Advisories](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/repository-security-advisories).




By making security reporting instructions clearly available, you make it easy for your users to report any security vulnerabilities they find in your repository using your preferred communication channel.


For an example of a real `SECURITY.md` file, see [https://github.com/electron/electron/blob/main/SECURITY.md](https://github.com/electron/electron/blob/main/SECURITY.md).

## Supported file types

You can create defaults in your organization or personal account for the following community health files:

| Community health file | Description |
| --- | --- |
| _CODE_OF_CONDUCT.md_ | A CODE_OF_CONDUCT file defines standards for how to engage in a community. For more information, see [Adding A Code Of Conduct To Your Project](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project). |
| _CONTRIBUTING.md_ | A CONTRIBUTING file communicates how people should contribute to your project. For more information, see [Setting Guidelines For Repository Contributors](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors). |
| Discussion category forms | Discussion category forms customize the templates that are available for community members to use when they open new discussions in your repository. For more information, see [Creating Discussion Category Forms](https://docs.github.com/en/discussions/managing-discussions-for-your-community/creating-discussion-category-forms). |
|   |
| _FUNDING.yml_ | A FUNDING file displays a sponsor button in your repository to increase the visibility of funding options for your open source project. For more information, see [Displaying A Sponsor Button In Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository). |
|   |
| Issue and pull request templates and _config.yml_ | Issue and pull request templates customize and standardize the information you'd like contributors to include when they open issues and pull requests in your repository. For more information, see [About Issue And Pull Request Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates).<br /><br />If an issue template sets a label, that label must be created in your `.github` repository and any repositories where the template will be used. |
| _SECURITY.md_ | A SECURITY file gives instructions on how to report a security vulnerability in your project and description that hyperlinks the file. For more information, see [Add Security Policy](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/add-security-policy). |
| _SUPPORT.md_ | A SUPPORT file lets people know about ways to get help with your project. For more information, see [Adding Support Resources To Your Project](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-support-resources-to-your-project). |

You cannot create a default license file. License files must be added to individual repositories so the file will be included when a project is cloned, packaged, or downloaded.

## Creating a repository for default files

1. In the upper-right corner of any page, select {% octicon "plus" aria-label="Create something new" %}, then click **New repository**.

   ![Screenshot of a GitHub dropdown menu showing options to create new items. The menu item "New repository" is outlined in dark orange.](/assets/images/help/repository/repo-create-global-nav-update.png)

1. Use the **Owner** drop-down menu, and select the organization or personal account you want to create default files for.
   ![Screenshot of the owner menu for a new GitHub repository. The menu shows two options, octocat and github.](/assets/images/help/repository/create-repository-owner.png)
1. In the "Repository name" field, type **.github**.
1. Optionally, in the "Description" field, type a description.
1. If you are creating the repository for an organization with managed users, set the repository status to **Internal**. For any other account, set the status to **Public**. A repository for default files cannot be private.
1. Toggle **Add README** to **On**.

1. Click **Create repository**.

1. In the repository, create one of the supported community health files. Discussion category forms must be in a folder called `.github/DISCUSSION_TEMPLATE`. Issue templates and their configuration file must be in a folder called `.github/ISSUE_TEMPLATE`. A `FUNDING.yml` file must be in the `.github` folder. All other supported files may be in the root of the repository, the `.github` folder, or the `docs` folder. For more information, see [Creating New Files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files).
