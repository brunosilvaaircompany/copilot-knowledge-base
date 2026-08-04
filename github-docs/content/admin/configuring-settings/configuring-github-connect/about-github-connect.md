# About GitHub Connect

GitHub Connect allows your GitHub Enterprise Server instance to connect to your enterprise on GitHub Enterprise Cloud in limited ways.

After you enable GitHub Connect, you can choose which features to enable. For example, you can:

* Automatically sync license usage between environments
* Unify search results and user contribution data
* Enable features that rely on GitHub.com, such as Dependabot alerts for security vulnerabilities that are tracked in the GitHub Advisory Database

## About the connection

To enable GitHub Connect, you configure a connection between your GitHub Enterprise Server instance and an enterprise account on **GitHub.com** or **GHE.com**. The connection uses HTTPS over ports 443 or 80 and is secured by TLS.


* GitHub Connect does not open your GitHub Enterprise Server instance to the public internet.
* None of your enterprise's private data is exposed to GitHub Enterprise Cloud users.
* GitHub Connect transmits only the limited data needed for the features you enable. Unless you enable license sync, no personal data is transmitted. For more information, see [Data transmission](#data-transmission).
* Enabling GitHub Connect will not allow GitHub Enterprise Cloud users to make changes to GitHub Enterprise Server.

## GitHub Connect features

After you configure the connection between your GitHub Enterprise Server instance and GitHub Enterprise Cloud, you can enable individual features of GitHub Connect.


If you're connecting to an enterprise on **GHE.com**:
* Server Statistics is not available.
* GitHub.com actions are not available.




| Feature | Description | More information |
| ----------- | ----------- | ----------- |
| Automatic user license sync | Manage license usage across your GitHub Enterprise deployments by automatically syncing user licenses from your GitHub Enterprise Server instance to GitHub Enterprise Cloud. | [Enabling Automatic User License Sync For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise) |

| Dependabot | Allow users to find and fix vulnerabilities in code dependencies. | [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise) |
| GitHub.com actions | Allow users to use actions from GitHub.com in public workflow files. | [Enabling Automatic Access To Githubcom Actions Using GitHub Connect](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) |
| Server Statistics | Analyze your own aggregate data from GitHub Enterprise Server, and help us improve GitHub products. | [Enabling Server Statistics For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-server-statistics-for-your-enterprise) |
| Unified search | Allow users to include repositories on GitHub Enterprise Cloud in their search results when searching from your GitHub Enterprise Server instance. | [Enabling Unified Search For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-unified-search-for-your-enterprise) |

| Unified contributions | Allow users to include anonymized contribution counts for their work on your GitHub Enterprise Server instance in their contribution graphs on GitHub Enterprise Cloud. | [Enabling Unified Contributions For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-unified-contributions-for-your-enterprise) |


## Data transmission

When GitHub Connect is enabled, a record on GitHub Enterprise Cloud stores information about the connection. If you enable individual features of GitHub Connect, additional data is transmitted.

> [!NOTE]
> No repositories, issues, or pull requests are ever transmitted from GitHub Enterprise Server to GitHub Enterprise Cloud by GitHub Connect.

### Data transmitted when GitHub Connect is enabled

When you enable GitHub Connect or specific GitHub Connect features, a record on GitHub Enterprise Cloud stores the following information about the connection.
* The public key portion of your GitHub Enterprise Server license
* A hash of your GitHub Enterprise Server license
* The customer name on your GitHub Enterprise Server license
* The version of your GitHub Enterprise Server instance
* The hostname of your GitHub Enterprise Server instance
* The enterprise account on GitHub Enterprise Cloud that's connected to your GitHub Enterprise Server instance
* The authentication token that's used by your GitHub Enterprise Server instance to make requests to GitHub Enterprise Cloud
* If Transport Layer Security (TLS) is enabled and configured on your GitHub Enterprise Server instance
* The GitHub Connect features that are enabled on your GitHub Enterprise Server instance, and the date and time of enablement
* The dormancy threshold for your enterprise
* The number of dormant users for your enterprise
* A count of consumed licenses, which does not include suspended users

GitHub Connect syncs the above connection data between your GitHub Enterprise Server instance and GitHub Enterprise Cloud weekly, starting from the day and approximate time that GitHub Connect was enabled.

### Data transmitted by individual features of GitHub Connect

Additional data is transmitted if you enable individual features of GitHub Connect.

| Feature | Data | Which way does the data flow? | Where is the data used? |
| ------- | ---- | --------- | ------ |
| Automatic user license sync | Each GitHub Enterprise Server user's user ID and email addresses, and whether the user consumes a license for GitHub Advanced Security, GitHub Code Security, or GitHub Secret Protection. | From GitHub Enterprise Server to GitHub Enterprise Cloud | GitHub Enterprise Cloud |
| Dependabot alerts | Vulnerability alerts | From GitHub.com to GitHub Enterprise Server | GitHub Enterprise Server |
| Dependabot updates | Dependencies and the metadata for each dependency's repository<br><br>If a dependency is stored in a private repository on GitHub.com, data will only be transmitted if Dependabot is configured and authorized to access that repository. | From GitHub.com to GitHub Enterprise Server | GitHub Enterprise Server |
| GitHub.com actions | Name of action, action (YAML file from GitHub Marketplace) | From GitHub.com to GitHub Enterprise Server<br><br>From GitHub Enterprise Server to GitHub.com | GitHub Enterprise Server |
| Server Statistics | Aggregate metrics about your usage of GitHub Enterprise Server. For the complete list of metrics, see [About Server Statistics](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected). | From GitHub Enterprise Server to GitHub Enterprise Cloud | GitHub Enterprise Cloud |
| Unified search | Search terms, search results | From GitHub Enterprise Cloud to GitHub Enterprise Server<br><br>From GitHub Enterprise Server to GitHub Enterprise Cloud | GitHub Enterprise Server |
| Unified contributions | Contribution counts | From GitHub Enterprise Server to GitHub Enterprise Cloud | GitHub Enterprise Cloud |

## Enabling GitHub Connect

To enable GitHub Connect, see the article for your GitHub Enterprise Cloud environment.

* [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom)
* [Enabling GitHub Connect For Ghecom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom)
