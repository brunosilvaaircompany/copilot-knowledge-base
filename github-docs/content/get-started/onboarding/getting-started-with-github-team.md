# Getting started with GitHub Team

This guide will walk you through setting up, configuring and managing your GitHub Team account as an organization owner.

## Part 1: Configuring your account on your GitHub Enterprise Server instance

As the first steps in starting with GitHub Team, you will need to create a personal account or log into your existing account on GitHub, create an organization, and set up billing.

### 1. About organizations

Organizations are shared accounts where businesses and open-source projects can collaborate across many projects at once. Owners and administrators can manage member access to the organization's data and projects with sophisticated security and administrative features. For more information on the features of organizations, see [About Organizations](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations).

### 2. Creating an organization and signing up for GitHub Team

Before creating an organization, you will need to create a personal account or log in to your existing account on your GitHub Enterprise Server instance. For more information, see [Creating An Account On GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github).

Once your personal account is set up, you can create an organization and pick a plan. This is where you can choose a GitHub Team subscription for your organization. For more information, see [Creating A New Organization From Scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

### 3. Managing billing for an organization

You must manage billing settings, payment method, and paid features and products for each of your personal accounts and organizations separately. You can switch between settings for your different accounts using the context switcher in your settings. For more information, see [How Billing Works](https://docs.github.com/en/billing/get-started/how-billing-works).

Your organization's billing settings page allows you to manage settings like your payment method, billing cycle and billing email, or view information such as your subscription, billing date and payment history. You can also view and upgrade your storage and GitHub Actions minutes. For more information on managing your billing settings, see [Get Started](https://docs.github.com/en/billing/get-started).

Only organization members with the _owner_ or _billing manager_ role can access or change billing settings for your organization. A billing manager is someone who manages the billing settings for your organization and does not use a paid license in your organization's subscription. For more information on adding a billing manager to your organization, see [Adding A Billing Manager To Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).

## Part 2: Adding members and setting up teams

After creating your organization, you can invite members and set permissions and roles. You can also create different levels of teams and set customized levels of permissions for your organization's repositories, projects, and apps.

### 1. Managing members of your organization

You can invite anyone to be a member of your organization, as long as they have a personal account on GitHub. You can also remove members and reinstate former members. For more information, see [Managing Membership In Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization).


### 2. Organization permissions and roles

Each person in your organization has a role that defines their level of access to the organization. The member role is the default, and you can assign owner and billing manager roles as well as "team maintainer" permissions. For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).


### 3. About and creating teams

Teams are groups of organization members that you can create to reflect your company or group's structure with cascading access permissions and mentions. Organization members can send notifications to a team or request reviews, and teams can be visible or secret. For more information, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams).

You can create independent teams or have multiple levels of nested teams to reflect your group or company's hierarchy. For more information, see [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team).


### 4. Managing team settings

You can designate a "team maintainer" to manage team settings and discussions, among other privileges. For more information, see [Assigning The Team Maintainer Role To A Team Member](https://docs.github.com/en/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).

You can manage code review assignments for your team, change team visibility, manage scheduled reminders for your team, and more in your team's settings. For more information, see [Organizing Members Into Teams](https://docs.github.com/en/organizations/organizing-members-into-teams).


### 5. Giving people and teams access to repositories, projects, and apps

You can give organization members, teams, and outside collaborators different levels of access to repositories owned by your organization with repository roles. For more information, see [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

You can also customize access to your organization's projects and allow individual organization members to manage your organization's GitHub Apps. For more information, see [Managing Access To Your Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects), [Planning And Tracking With Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects), and [Managing Programmatic Access To Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization).


## Part 3: Managing security for your organization

You can help to make your organization more secure by recommending or requiring two-factor authentication for your organization members, configuring security features, and reviewing your organization's audit log and integrations.

### 1. Requiring two-factor authentication

You can view whether your organization members have two-factor authentication enabled and choose to require two-factor authentication in your organization. For more information, see [Requiring Two Factor Authentication In Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization).


### 2. Configuring security features for your organization

To keep the organizations in your GitHub Enterprise Server instance secure, you can use a variety of GitHub security features, including security policies, dependency graphs, secret scanning and Dependabot security and version updates. For more information, see [Configure Organization Security](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security).


### 3. Reviewing your organization's audit log and integrations

The audit log for your organization allows you, as an organization owner, to review the actions performed by members of the organization within the last 180 days. For more information, see [Reviewing The Audit Log For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).

You can also review and configure the permission levels for your organization's installed integrations. For more information, see [Reviewing GitHub Apps Installed In Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-github-apps-installed-in-your-organization).


## Part 4: Setting organization level policies

### 1. Managing organization policies

You can manage permissions and policies for a number of different actions and features in your organization.

For example, to protect your organization's data, you can restrict repository creation in your organization. You can also choose to allow or prevent the forking of private repositories owned by your organization. For more information, see [Restricting Repository Creation In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) and [Managing The Forking Policy For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization).

For the full list of settings you can configure for your organization, see [Managing Organization Settings](https://docs.github.com/en/organizations/managing-organization-settings).


### 2. Managing repository changes

You can configure permissions for creating, transferring and deleting repositories in your organization, including which types members can create. For more information, see [Restricting Repository Creation In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) and [Setting Permissions For Deleting Or Transferring Repositories](https://docs.github.com/en/organizations/managing-organization-settings/setting-permissions-for-deleting-or-transferring-repositories).

You can also restrict or grant the ability to change repository visibility. For more information, see [Restricting Repository Visibility Changes In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization).


### 3. Using organization-level community health files and moderation tools

You can create default community health files, such as a CONTRIBUTING.md file, a CODE_OF_CONDUCT.md file, or even issue and pull request templates, for your organization. These default files will be used for any repository owned by your organization that does not contain its own file of that type. For more information, see [Creating A Default Community Health File](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

GitHub offers multiple tools for moderating and managing your community. For more information, see [About Community Management And Moderation](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation#tools-for-moderating-your-community).


## Part 5: Customizing and automating your work

You can use tools from the GitHub Marketplace, the GitHub API, and existing GitHub features to customize and automate your work.


### 1. Using GitHub Marketplace

GitHub Marketplace contains integrations that add functionality and improve your workflow. You can discover, browse, and install free and paid tools, including GitHub Apps, OAuth apps, and GitHub Actions, in [GitHub Marketplace](https://github.com/marketplace).


### 2. Using the GitHub API

There are two versions of the GitHub API: the REST API and the GraphQL API. You can use the GitHub APIs to automate common tasks, [back up your data](/repositories/archiving-a-github-repository/backing-up-a-repository), or [create integrations](/integrations/concepts/about-integrations) that extend GitHub. For more information, see [Comparing Githubs Rest API And GraphQL API](https://docs.github.com/en/rest/about-the-rest-api/comparing-githubs-rest-api-and-graphql-api).


### 3. Building GitHub Actions

With GitHub Actions, you can automate and customize your enterprise's development workflow on GitHub. You can create your own actions, and use and customize actions shared by the GitHub community. For more information, see [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows).


### 4. Publishing and managing GitHub Packages

GitHub Packages is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. For more information, see [Introduction To GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages).


## Part 6: Participating in GitHub's community

There are many ways to participate in the GitHub community. You can contribute to open source projects, interact with people in the GitHub Community Support, or learn with GitHub Skills.


### 1. Contributing to open source projects

Contributing to open source projects on GitHub can be a rewarding way to learn, teach, and build experience in just about any skill you can imagine. For more information, see [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/) in the Open Source Guides.

You can find personalized recommendations for projects and good first issues based on your past contributions, stars, and other activities in [Explore GitHub](https://github.com/explore). For more information, see [Finding Ways To Contribute To Open Source On GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github).



### 2. Interacting with the GitHub Community Support

You can connect with developers around the world to ask and answer questions, learn, and interact directly with GitHub staff. To get the conversation started, see [GitHub Community Support](https://github.com/orgs/community/discussions/).


### 3. Reading about GitHub Team on GitHub Docs

You can read documentation that reflects the features available with GitHub Team. For more information, see [About Versions Of GitHub Docs](https://docs.github.com/en/get-started/using-github-docs/about-versions-of-github-docs).

### 4. Learning with GitHub Skills

You can learn new skills by completing fun, realistic projects in your very own GitHub repository with [GitHub Skills](https://skills.github.com/). Each course is a hands-on lesson created by the GitHub community and taught by a friendly bot.

For more information, see [Git And GitHub Learning Resources](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).


### 5. Supporting the open source community

GitHub Sponsors allows you to make a monthly recurring payment to a developer or organization who designs, creates, or maintains open source projects you depend on. For more information, see [About GitHub Sponsors](https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors).


### 6. Contacting GitHub Support

GitHub Support can help you troubleshoot issues you run into while using GitHub. For more information, see [About GitHub Support](https://docs.github.com/en/support/learning-about-github-support/about-github-support).


## Further reading

* [Getting Started With Your GitHub Account](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account)
