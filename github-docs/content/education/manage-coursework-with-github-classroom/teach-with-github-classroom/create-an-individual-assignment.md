# Create an individual assignment

> [!WARNING]
> **Closing down:** The GitHub Classroom application is closing down and will be retired on August 28, 2026.
> For more information, see the [GitHub Classroom closing down notice](https://gh.io/classroom-sunset).

## About individual assignments

An individual assignment is coursework for each student who participates in a course on GitHub Classroom. The student is intended to complete an individual assignment without help from other students.


When a student accepts an assignment, GitHub Classroom automatically creates a new repository for the student. The repositories can be empty, or you can create the repositories from a template repository with starter code, documentation, tests, and other resources. Each assignment repository belongs to your organization account on GitHub.


Each assignment has a title and an optional deadline. You can choose the visibility of repositories that GitHub Classroom creates and choose access permissions. You can also automatically grade assignments and create a dedicated space to discuss the assignment with the student.


You can reuse existing assignments in any other classroom you have admin access to, including classrooms in a different organization. For more information, see [Reuse An Assignment](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment).


## Prerequisites

You must create a classroom before you can create an assignment. For more information, see [Manage Classrooms](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms).


## Creating an assignment

1. Sign into [GitHub Classroom](https://classroom.github.com/login).
1. Navigate to a classroom.
1. In the **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Assignments** tab, create the assignment.
   * If this your first assignment, click **Create an assignment**.
   * Otherwise, click **New assignment** on the right side.


## Setting up the basics for an assignment

Name your assignment, decide whether to assign a deadline, and choose the visibility of assignment repositories.

* [Naming an assignment](#naming-an-assignment)
* [Assigning a deadline for an assignment](#assigning-a-deadline-for-an-assignment)
* [Choosing an assignment type](#choosing-an-assignment-type)
* [Choosing a visibility for assignment repositories](#choosing-a-visibility-for-assignment-repositories)

### Naming an assignment

For an individual assignment, GitHub Classroom names repositories by the repository prefix and the student's GitHub username. By default, the repository prefix is the assignment title. For example, if you name an assignment "assignment-1" and the student's username on GitHub is @octocat, the name of the assignment repository for @octocat will be `assignment-1-octocat`.

Under "Assignment title", type a title for the assignment. Optionally, click {% octicon "pencil" aria-label="The pencil icon" %} to edit the prefix.


### Assigning a deadline for an assignment

Optionally, you can assign a deadline to the assignment. Under "Deadline (optional)", click in the text field, then use the date picker to assign a deadline.


Optionally, to make the deadline a cutoff date, select **This is a cutoff date**. If you use a cutoff date, students will lose write access to their assignment repositories after the cutoff date has passed unless they receive an extension. For more information on extending assignment deadlines, see [Extending An Assignments Deadline For An Individual Or Group](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/extending-an-assignments-deadline-for-an-individual-or-group).


### Choosing an assignment type

Under "Individual or group assignment", select the drop-down menu, and click **Individual assignment**. You can't change the assignment type after you create the assignment. If you'd rather create a group assignment, see [Create A Group Assignment](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment).

### Choosing a visibility for assignment repositories

The repositories for an assignment can be public or private. If you use private repositories, only the student or team can see the feedback you provide.

You can also decide whether to grant students admin permissions to the repository for an assignment. Grant admin permissions if the student should be able to perform administrative tasks for the assignment repository. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) and [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).


Under "Repository visibility", select a visibility. Optionally, select **Grant students admin access to their repository**.


When you're done, click **Continue** to configure starter code and a development environment for the assignment.


## Adding starter code and configuring a development environment

Optionally, decide whether to provide empty repositories or starter code, and preconfigure a development environment for your students.


* [Choosing a template repository](#choosing-a-template-repository)
* [Choosing an integrated development environment (IDE)](#choosing-an-integrated-development-environment-ide)

### Choosing a template repository

By default, a new assignment will create an empty repository for each student on the roster for the classroom. You can optionally choose a template repository as starter code for the assignment. For more information, see [Create An Assignment From A Template Repository](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-assignment-from-a-template-repository).

> [!NOTE]
> The template repository must belong to your organization or be a public repository on GitHub.


Under "Add a template repository to give students starter code", select the **Select a repository** drop-down, then type a search query. In the list of results, click the template repository you'd like to use for starter code.


When you're done, click **Continue** to configure automatic grading and feedback for the project.


### Choosing an integrated development environment (IDE)

You can optionally configure an assignment to use an integrated development environment (IDE). IDEs allow your students to write code, run programs, and collaborate without installing Git and a full development toolchain on the student's computer. If you choose an IDE for an assignment, students can still check out and run code locally on a computer with the necessary software.
 For more information, see [Integrate GitHub Classroom With An Ide](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide).

You can choose to configure an assignment with GitHub Codespaces to give students access to a browser-based Visual Studio Code environment with one-click setup. For more information, see [Using GitHub Codespaces With GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom).


To choose an IDE for the assignment, select the Add an editor drop-down menu and click the IDE you'd like your students to use.


## Providing feedback for an assignment

Optionally, you can automatically grade assignments and create a space for discussing each submission with the student.

* [Testing assignments automatically](#testing-assignments-automatically)
* [Creating a pull request for feedback](#creating-a-pull-request-for-feedback)

### Testing assignments automatically

You can use autograding to automatically check a student's work for an assignment on GitHub Classroom. You configure tests for an assignment, and the tests run immediately every time a student pushes to an assignment repository on your GitHub Enterprise Server instance. The student can view the test results, make changes, and push to see new results.
 For more information, see [Use Autograding](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-autograding).

Under "Add autograding tests", select the **Add test** drop-down menu, then click the grading method you want to use.
 For more information, see [Use Autograding](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-autograding#grading-methods).

Define the parameters of your test case, like the name, commands, inputs, outputs, timeout, and points. When you're done, click **Save test case**.

You can add more tests with the **Add test** drop-down menu, and you can edit or delete existing tests with {% octicon "pencil" aria-label="The pencil icon" %} or {% octicon "trash" aria-label="The trash icon" %}.


### Designating protected file paths

If your assignment has files or directories that are used in the grading process or otherwise shouldn't be edited by students, you can designate them as protected file paths. If a student edits a protected file, a label will be applied to their submission on the assignment overview page for you to investigate. For more information, see [Monitor Students Progress With The Assignment Overview Page](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/monitor-students-progress-with-the-assignment-overview-page).

The patterns for protected paths follow rules similar to shell filename globs. It may contain the following meta-characters:

* `*`: Matches any file. For example, `*` matches all regular files, `foo*` matches all files beginning with `foo`, `*foo` matches all files ending with `foo`, and `*foo*` matches all files whose names contain `foo` (including at the beginning or end)
* `**`: Matches directories recursively or files expansively. For example, `.github/**/*` will match all files in `.github` and any of its subdirectories
* `?`: Matches any one character
* `[set]`: Matches any one character in `set`(including sets like `a-z`)
* `\`: Escapes the next meta-character


### Creating a pull request for feedback

You can automatically create a pull request where you can provide feedback and answer a student's questions about an assignment. For more information about the review of changes in a pull request, see [Reviewing Changes In Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests).
 For more information on leaving feedback in a pull request, see [Leave Feedback With Pull Requests](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/leave-feedback-with-pull-requests).

To create pull requests for the discussion of feedback, select **Enable feedback pull requests**.


To create the assignment, click **Create assignment**.


## Inviting students to an assignment

By default, GitHub Classroom enables an invitation URL for each assignment you create. Students can accept and submit the assignment while the invitation URL is enabled. You can share the URL with your students on your LMS, course homepage, or wherever you post assignments. Students can also navigate to the assignment on GitHub Classroom if the student has already accepted an assignment for the classroom.


> [!WARNING]
> Be careful where you share invitation URLs. Anyone with an invitation URL for an assignment can accept the invitation and associate a personal account on GitHub with an identifier in your roster.



You can see whether a student has joined the classroom and accepted or submitted an assignment in the **Classroom roster** tab for the assignment. You can also link students' GitHub aliases to their associated roster identifier and vice versa in this tab. To prevent acceptance or submission of an assignment by students, you can change the "Assignment Status" within the "Edit assignment" view. When an assignment is Active, students will be able to accept it using the invitation link. When it is Inactive, this link will no longer be valid.


## Monitoring students' progress

The assignment overview page provides an overview of your assignment acceptances and student progress. For more information on viewing and using the assignment overview page, see [Monitor Students Progress With The Assignment Overview Page](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/monitor-students-progress-with-the-assignment-overview-page).


## Next steps

* Once you create the assignment, students can start work on the assignment using Git and GitHub's features. Students can clone the repository, push commits, manage branches, create and review pull requests, address merge conflicts, and discuss changes with issues. Both you and student can review the commit history for the repository. For more information, see [Get Started](https://docs.github.com/en/get-started), [Repositories](https://docs.github.com/en/repositories), and [Collaborating With Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests).

* When a student finishes an assignment, you can review the files in the repository, or you can review the history and visualizations for the repository to better understand the student's work. For more information, see [Viewing Activity And Data For Your Repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository).

* You can provide feedback for an assignment by commenting on individual commits or lines in a pull request. For more information, see [Commenting On A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) and [Creating An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue). For more information about creating saved replies to provide feedback for common errors, see [About Saved Replies](https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/about-saved-replies).

## Further reading

* [GitHub Education For Teachers](https://docs.github.com/en/education/about-github-education/github-education-for-teachers)
* [Connect A Learning Management System Course To A Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)
* [Using GitHub Classroom With GitHub CLI](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)
