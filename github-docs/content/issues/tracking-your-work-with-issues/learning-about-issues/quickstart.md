# Quickstart for GitHub Issues

## Introduction

This guide demonstrates how to use GitHub Issues to plan and track a piece of work. In this guide, you will create a new issue and break it down into sub-issues. You'll also learn how to add labels, issue types, milestones, assignees, and projects to communicate metadata about your issue.

## Prerequisites

To create an issue, you need a repository. You can use an existing repository that you have write access to, or you can create a new repository.  Members of an enterprise with managed users can only make changes in repositories that are part of their enterprise. 
 The repository must have issues enabled. For more information about creating a repository, see [Creating A New Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository). For more information about enabling issues if they are disabled in your repository, see [Disabling Issues](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-issues).

## Opening a blank issue

First, create an issue. There are multiple ways to create an issue; you can choose the most convenient method for your workflow. This example will use the GitHub UI. For more information about other ways to create an issue, see [Creating An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Issues," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-issues-global-nav-update.png)

1. Click **New issue**.

1. In this example, we will start with a blank issue. Your repository may use issue templates and issue forms to encourage contributors to provide specific information. If your repository uses issue templates, click **Open a blank issue**.

## Filling in information

Give your issue a descriptive title. The title should convey at a glance what the issue is about.

Add a description that explains the purpose of the issue, including any details that might help resolve the issue. For example, if this is a bug report, describe the steps to reproduce the bug, the expected result, and the actual result.

You can use markdown to add formatting, links, emojis, and more. For more information, see [Writing On GitHub](https://docs.github.com/en/get-started/writing-on-github).

![Screenshot of the new issue form, with a title and body filled in.](/assets/images/help/issues/issue-title-body.png)



## Adding a task list

You can also use plain text to track tasks that don't have a corresponding issue and convert them to issues later. For more information, see [About Tasklists](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists).

![Screenshot of the new issue form, with the title and body filled in. The body includes the Markdown for a task list.](/assets/images/help/issues/issue-task-list-raw.png)

## Assigning the issue

To communicate responsibility, you can assign the issue to a member of your organization. See [Assigning Issues And Pull Requests To Other GitHub Users](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users).

![Screenshot of the new issue form. In the right sidebar, the "Assignees" section is outlined in a dark orange.](/assets/images/help/issues/issue-assignees.png)

## Adding labels

Add a label to categorize your issue. For example, you might use a `question` label and a `good first issue` label to indicate that an issue is a question that a first-time contributor could pick up. Users can filter issues by label to find all issues that have a specific label.

You can use the default labels, or you can create a new label. For more information, see [Managing Labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels).

![Screenshot of the new issue form. In the right sidebar, the "Labels" section is outlined in dark orange.](/assets/images/help/issues/issue-with-label.png)

{% ifversion issue-types %}

## Adding issue types

You can add an issue type to classify work across the organization. See [Managing Issue Types In An Organization](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/managing-issue-types-in-an-organization).

![Screenshot of the new issue form. In the right sidebar, the "Type" section is outlined in dark orange.](/assets/images/help/issues/issue-type.png)



## Adding the issue to a project

You can add the issue to an existing project and populate metadata for the project. For more information about projects, see [About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

![Screenshot of the new issue form. In the right sidebar, the "Projects" section is outlined in dark orange.](/assets/images/help/issues/issue-project.png)

## Adding milestones

You can add a milestone to track the issue as part of a date based target. A milestone shows the progress of the issues as the target date approaches. See [About Milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones).

![Screenshot of the new issue form. In the right sidebar, the "Milestone" section is outlined in dark orange.](/assets/images/help/issues/issue-milestone.png)

## Submitting your issue

Click **Submit new issue** to create your issue. You can edit any of the above fields after creating the issue. Your issue has a unique URL that you can share with team members, or reference in other issues or pull requests.

## Adding sub-issues

You can add sub-issues to an issue to quickly break down larger pieces of work into smaller issues. Sub-issues add support for hierarchies of issues on GitHub by creating relationships between your issues. You can create multiple levels of sub-issues that accurately represent your project by breaking down tasks into exactly the amount of detail that you and your team require.
 See [Adding Sub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues) and [Browsing Sub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/browsing-sub-issues).

   ![Screenshot of the sub-issues section below the issue description. The "View more sub-issue options" button is highlighted with an orange rectangle.](/assets/images/help/issues/sub-issue-drop-down.png)

{% endif %}

## Adding issue dependencies

You can define blocking relationships between issues using issue dependencies. Issue dependencies let you identify issues that are blocked by, or blocking, other work. See [Creating Issue Dependencies](https://docs.github.com/en/free-pro-team@latest/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies).

## Communicating

After your issue is created, continue the conversation by adding comments to the issue. You can @mention collaborators or teams to draw their attention to a comment. To link related issues in the same repository, you can type `#` followed by part of the issue title and then clicking the issue that you want to link. For more information, see [Writing On GitHub](https://docs.github.com/en/get-started/writing-on-github).

![Screenshot of an issue comment. The header says "octocat commented now" and the body says "@hubot Do we also need to update the rocket logic?"](/assets/images/help/issues/issue-comment.png)

## Next steps

You can use issues for a wide range of purposes. For example:

* Tracking ideas
* Collecting feedback
* Planning tasks
* Reporting bugs



To break your issue down into more manageable tasks, you can add multiple levels of sub-issues. See [Adding Sub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues).



Here are some helpful resources for taking your next steps with GitHub Issues:

* To learn more about issues, see [About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues).
* To learn about the essentials for using GitHub's planning and tracking tools, see [Planning And Tracking Work For Your Team Or Project](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/planning-and-tracking-work-for-your-team-or-project).
* To learn more about how projects can help you with planning and tracking, see [Learning About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects).
* To learn more about using issue templates and issue forms to encourage contributors to provide specific information, see [Using Templates To Encourage Useful Issues And Pull Requests](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests).
