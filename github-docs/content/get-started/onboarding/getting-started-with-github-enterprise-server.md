# Getting started with GitHub Enterprise Server

This guide will walk you through setting up, configuring and managing your GitHub Enterprise Server instance as an enterprise administrator.

GitHub provides two ways to deploy GitHub Enterprise.

* **GitHub Enterprise Cloud**
* **GitHub Enterprise Server**

GitHub hosts GitHub Enterprise Cloud. You can deploy and host GitHub Enterprise Server in your own datacenter or a supported cloud provider.

For more information about GitHub Enterprise Server, see [About GitHub Enterprise Server](https://docs.github.com/en/admin/overview/about-github-enterprise-server).

## Part 1: Installing GitHub Enterprise Server

To get started, you will need to create your enterprise account, install the instance, use the Management Console for initial setup, configure your instance, and manage billing.

### 1. Creating your enterprise account

Before you install GitHub Enterprise Server, you can create an enterprise account on GitHub.com by contacting [GitHub's Sales team](https://enterprise.github.com/contact). An enterprise account on GitHub.com is useful for billing and for shared features with GitHub.com via GitHub Connect. For more information, see [Enterprise Accounts](https://docs.github.com/en/admin/concepts/enterprise-fundamentals/enterprise-accounts).

### 2. Installing GitHub Enterprise Server

To get started, you will need to install the appliance on a virtualization platform of your choice. For more information, see [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance).

### 3. Using the Management Console

You will use the Management Console to walk through the initial setup process when first launching your GitHub Enterprise Server instance. You can also use the Management Console to manage instance settings such as the license, domain, authentication, and TLS. For more information, see [Administering Your Instance From The Web UI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui).

### 4. Configuring your GitHub Enterprise Server instance

In addition to the Management Console, you can use the site admin dashboard and the administrative shell (SSH) to manage your GitHub Enterprise Server instance. For example, you can configure applications and rate limits, view reports, use command-line utilities. For more information, see [Configuring Settings](https://docs.github.com/en/admin/configuring-settings).

You can use the default network settings used by GitHub Enterprise Server via the dynamic host configuration protocol (DHCP), or you can also configure the network settings using the virtual machine console. You can also configure a proxy server or firewall rules. For more information, see [Configuring Network Settings](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings).

### 5. Configuring high availability

You can configure your GitHub Enterprise Server instance for high availability to minimize the impact of hardware failures and network outages. For more information, see [Configuring High Availability](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability).

### 6. Setting up a staging instance

You can set up a staging instance to test modifications, plan for disaster recovery, and try out updates before applying them to your GitHub Enterprise Server instance. For more information, see [Setting Up A Staging Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

### 7. Designating backups and disaster recovery

To protect your production data, you can configure automated backups of your GitHub Enterprise Server instance with GitHub Enterprise Server Backup Service. For more information, see [About The Backup Service For GitHub Enterprise Server](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/about-the-backup-service-for-github-enterprise-server).

### 8. Managing billing for your enterprise

Billing for all the organizations and  GitHub Enterprise Server instances connected to your enterprise account is aggregated into a single bill charge for all of your paid GitHub.com services. Enterprise owners and billing managers can access and manage billing settings for enterprise accounts. For more information, see [Billing For Enterprises](https://docs.github.com/en/billing/concepts/enterprise-billing/billing-for-enterprises).

## Part 2: Organizing and managing your team

As an enterprise owner or administrator, you can manage settings on user, repository, team and organization levels. You can manage members of your enterprise, create and manage organizations, set policies for repository management, and create and manage teams.

### 1. Managing members of your GitHub Enterprise Server instance

You can manage settings and audit activity for the members of your GitHub Enterprise Server instance. You can promote an enterprise member to be a site administrator, manage dormant users, view the audit log for user activity, and customize messages that enterprise members will see. For more information, see [Managing Users In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise).


### 2. Creating organizations

You can create new organizations in your GitHub Enterprise Server instance to reflect your company or group's structure. For more information, see [Creating A New Organization From Scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).


### 3. Adding members to organizations

You can add members to organizations in your GitHub Enterprise Server instance as long as you are an organization owner in the organizations you want to manage. You can also configure visibility of organization membership. For more information, see [Adding People To Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/adding-people-to-your-organization) and [Configuring Visibility For Organization Membership](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/configuring-visibility-for-organization-membership).


### 4. Creating teams

Teams are groups of organization members that can be granted permissions to specific repositories as a group. You can create individual teams or multiple levels of nested teams in each of your organizations. For more information, see [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team) and [Adding Organization Members To A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/adding-organization-members-to-a-team).


### 5. Setting organization and repository permission levels

We recommend giving a limited number of members in each organization an organization owner role, which provides complete administrative access for that organization. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

For organizations where you have admin permissions, you can also customize access to each repository with granular permission levels. For more information, see [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).


### 6. Enforcing repository management policies

As an enterprise owner, you can set repository management policies for all organizations in your GitHub Enterprise Server instance, or allow policies to be set separately in each organization. For more information, see [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).




### 7. Creating a README for the enterprise

To help people understand what is happening in your enterprise, you should create a README. For example, you can use a README to help members learn about different organizations in the enterprise, to share links to important resources, or to communicate information about the settings and policies of your enterprise.
 For more information, see [Creating A Readme For An Enterprise](https://docs.github.com/en/admin/managing-your-enterprise-account/creating-a-readme-for-an-enterprise).



## Part 3: Building securely

To increase the security of your GitHub Enterprise Server instance, you can configure authentication for enterprise members, use tools and audit logging to stay in compliance, configure security and analysis features for your organizations, and optionally enable GitHub Advanced Security features.

### 1. Authenticating enterprise members

You can use  GitHub Enterprise Server's built-in authentication method, or you can choose between an external authentication provider, such as CAS, LDAP, or SAML, to integrate your existing accounts and centrally manage user access to your GitHub Enterprise Server instance. For more information, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals).

You can also require two-factor authentication for each of your organizations. For more information, see [Requiring Two Factor Authentication For An Organization](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization).

### 2. Staying in compliance

You can implement required status checks and commit verifications to enforce your organization's compliance standards and automate compliance workflows. You can also use the audit log for your organization to review actions performed by your team. For more information, see [Enforcing Policy With Pre Receive Hooks](https://docs.github.com/en/admin/enforcing-policies/enforcing-policy-with-pre-receive-hooks) and [Audit Log For An Enterprise](https://docs.github.com/en/admin/concepts/security-and-compliance/audit-log-for-an-enterprise).

### 3. Configuring security features for your organizations

To keep the organizations in your GitHub Enterprise Server instance secure, you can use a variety of GitHub security features, including security policies, dependency graphs, secret scanning and Dependabot security and version updates. For more information, see [Configure Organization Security](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security).


### 4. Enabling GitHub Advanced Security features

You can upgrade your GitHub Enterprise Server license to include GitHub Code Security or GitHub Secret Protection. Upgrading will provide extra features that help users find and fix security problems in their code, such as code and secret scanning. For more information, see [Enabling GitHub Advanced Security For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/enabling-github-advanced-security-for-your-enterprise).

## Part 4: Customizing and automating your enterprise's work on GitHub

You can customize and automate work in organizations in your enterprise with GitHub and OAuth apps, GitHub Enterprise Server API, GitHub Actions, GitHub Packages , and GitHub Pages.

### 1. Building GitHub Apps and OAuth apps

You can build integrations with the GitHub Enterprise Server API, such as GitHub Apps or OAuth apps, for use in organizations in your enterprise to complement and extend your workflows. For more information, see [About Creating GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps).

### 2. Using the GitHub Enterprise Server API

There are two versions of the GitHub API: the REST API and the GraphQL API. You can use the GitHub APIs to automate common tasks, [back up your data](/repositories/archiving-a-github-repository/backing-up-a-repository), or [create integrations](/integrations/concepts/about-integrations) that extend GitHub. For more information, see [Comparing Githubs Rest API And GraphQL API](https://docs.github.com/en/rest/about-the-rest-api/comparing-githubs-rest-api-and-graphql-api).


### 3. Building GitHub Actions

With GitHub Actions, you can automate and customize your enterprise's development workflow on GitHub. You can create your own actions, and use and customize actions shared by the GitHub community. For more information, see [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows).


For more information on enabling and configuring GitHub Actions on  GitHub Enterprise Server, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

### 4. Publishing and managing GitHub Packages

GitHub Packages is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. For more information, see [Introduction To GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages).


For more information on enabling and configuring GitHub Packages for your GitHub Enterprise Server instance, see [Getting Started With GitHub Packages For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/getting-started-with-github-packages-for-your-enterprise).

### 5. Using GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository and publishes a website. You can enable or disable GitHub Pages for your enterprise members at the organization level. For more information, see [Configuring GitHub Pages For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-github-pages-for-your-enterprise) and [What Is GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).


## Part 5: Connecting with other GitHub resources

You can use GitHub Connect to share resources.

If you are the owner of both a GitHub Enterprise Server instance and a GitHub Enterprise Cloud organization or enterprise account, you can enable GitHub Connect. GitHub Connect allows you to share specific workflows and features between your GitHub Enterprise Server instance and GitHub Enterprise Cloud, such as unified search and contributions. For more information, see [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).

## Part 6: Using GitHub's learning and support resources

Your enterprise members can learn more about Git and GitHub with our learning resources, and you can get the support you need when setting up and managing your GitHub Enterprise Server instance with GitHub Enterprise Support.

### 1. Reading about  GitHub Enterprise Server on GitHub Docs

You can read documentation that reflects the features available with GitHub Enterprise Server. For more information, see [About Versions Of GitHub Docs](https://docs.github.com/en/get-started/using-github-docs/about-versions-of-github-docs).

To learn how your enterprise can use GitHub most effectively, see [Organize Work](https://docs.github.com/en/admin/concepts/enterprise-best-practices/organize-work).


### 2. Learning with GitHub Skills

Your enterprise members can learn new skills by completing fun, realistic projects in their very own GitHub repository with [GitHub Skills](https://skills.github.com/). Each course is a hands-on lesson created by the GitHub community and taught by a friendly bot.

For more information, see [Git And GitHub Learning Resources](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).


### 3. Working with GitHub Enterprise Support

GitHub Enterprise includes access to GitHub Enterprise Support. GitHub Enterprise Support can help you troubleshoot issues. You can also choose to sign up for GitHub Premium Support for additional features. For more information, see [About GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-github-support).
