# Create a group assignment

> [!WARNING]
> **Closing down:** The GitHub Classroom application is closing down and will be retired on August 28, 2026.
> For more information, see the [GitHub Classroom closing down notice](https://gh.io/classroom-sunset).

## About group assignments

A group assignment is collaborative coursework for groups of students on GitHub Classroom.
 Students can work together on a group assignment in a shared repository, like a team of professional developers.

When a student accepts a group assignment, the student can create a new team or join an existing team. GitHub Classroom saves the teams for an assignment as a set. You can name the set of teams for a specific assignment when you create the assignment, and you can reuse that set of teams for a later assignment.


For each group assignment, GitHub Classroom automatically creates a single shared repository for the team to access. The repository can be empty, or you can create the repository from a template repository with starter code, documentation, tests, and other resources. The repository belongs to your organization account on GitHub, and GitHub Classroom grants access to teams that students create or join when accepting the assignment.


Each assignment has a title and an optional deadline. You can choose the visibility of repositories that GitHub Classroom creates and choose access permissions. You can also automatically grade assignments and create a dedicated space to discuss the assignment with the student.


You can decide how many teams one assignment can have, and how many members each team can have. Each team that a student creates for an assignment is a team within your organization on GitHub. The visibility of the team is secret. Teams that you create on GitHub will not appear in GitHub Classroom. For more information, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams).

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

Name your assignment, decide whether to assign a deadline, define teams, and choose the visibility of assignment repositories.

* [Naming an assignment](#naming-an-assignment)
* [Assigning a deadline for an assignment](#assigning-a-deadline-for-an-assignment)
* [Choosing an assignment type](#choosing-an-assignment-type)
* [Defining teams for an assignment](#defining-teams-for-an-assignment)
* [Choosing a visibility for assignment repositories](#choosing-a-visibility-for-assignment-repositories)

### Naming an assignment

For a group assignment, GitHub Classroom names repositories by the repository prefix and the name of the team. By default, the repository prefix is the assignment title. For example, if you name an assignment "assignment-1" and the team's name on GitHub is "student-team", the name of the assignment repository for members of the team will be `assignment-1-student-team`.

Under "Assignment title", type a title for the assignment. Optionally, click {% octicon "pencil" aria-label="The pencil icon" %} to edit the prefix.


### Assigning a deadline for an assignment

Optionally, you can assign a deadline to the assignment. Under "Deadline (optional)", click in the text field, then use the date picker to assign a deadline.


Optionally, to make the deadline a cutoff date, select **This is a cutoff date**. If you use a cutoff date, students will lose write access to their assignment repositories after the cutoff date has passed unless they receive an extension. For more information on extending assignment deadlines, see [Extending An Assignments Deadline For An Individual Or Group](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/extending-an-assignments-deadline-for-an-individual-or-group).


### Choosing an assignment type

Under "Individual or group assignment", select the drop-down menu, then click **Group assignment**. You can't change the assignment type after you create the assignment. If you'd rather create an individual assignment, see [Create An Individual Assignment](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment).

### Defining teams for an assignment

If you've already created a group assignment for the classroom, you can reuse a set of teams for the new assignment. To create a new set with the teams that your students create for the assignment, type the name for the set. Optionally, type the maximum number of team members and total teams.

> [!NOTE]
> * We recommend including details about the set of teams in the name for the set. For example, if you want to use the set of teams for one assignment, name the set after the assignment. If you want to reuse the set throughout a semester or course, name the set after the semester or course.
> * If you'd like to assign students to a specific team, give your students a name for the team and provide a list of members.

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

By default, a new assignment will create an empty repository for each team that a student creates. You can optionally choose a template repository as starter code for the assignment. For more information, see [Create An Assignment From A Template Repository](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-assignment-from-a-template-repository).

> [!NOTE]
> The template repository must belong to your organization or be a public repository on GitHub.


Under "Add a template repository to give students starter code", select the **Select a repository** drop-down, then type a search query. In the list of results, click the template repository you'd like to use for starter code.


### Choosing an integrated development environment (IDE)

You can optionally configure an assignment to use an integrated development environment (IDE). IDEs allow your students to write code, run programs, and collaborate without installing Git and a full development toolchain on the student's computer. If you choose an IDE for an assignment, students can still check out and run code locally on a computer with the necessary software.
 For more information, see [Integrate GitHub Classroom With An Ide](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide).

You can choose to configure an assignment with GitHub Codespaces to give students access to a browser-based Visual Studio Code environment with one-click setup. For more information, see [Using GitHub Codespaces With GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom).


To choose an IDE for the assignment, select the Add an editor drop-down menu and click the IDE you'd like your students to use.


When you're done, click **Continue** to configure automatic grading and feedback for the project.


## Providing feedback

Optionally, you can automatically grade assignments and create a space for discussing each submission with the team.

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

You can automatically create a pull request where you can provide feedback and answer a student's questions about an assignment. For more information about the review of changes in a pull request, see [Review Pull Requests](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests).
 For more information on leaving feedback in a pull request, see [Leave Feedback With Pull Requests](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/leave-feedback-with-pull-requests).

To create pull requests for the discussion of feedback, select **Enable feedback pull requests**.


To create the assignment, click **Create assignment**.


## Inviting students to an assignment

By default, GitHub Classroom enables an invitation URL for each assignment you create. Students can accept and submit the assignment while the invitation URL is enabled. You can share the URL with your students on your LMS, course homepage, or wherever you post assignments. Students can also navigate to the assignment on GitHub Classroom if the student has already accepted an assignment for the classroom.


> [!WARNING]
> Be careful where you share invitation URLs. Anyone with an invitation URL for an assignment can accept the invitation and associate a personal account on GitHub with an identifier in your roster.



You can see the teams that are working on or have submitted an assignment in the **Teams** tab for the assignment. To prevent acceptance or submission of an assignment by students, you can change the "Assignment Status" within the "Edit assignment" view. When an assignment is Active, students will be able to accept it using the invitation link. When it is Inactive, this link will no longer be valid.


## Monitoring students' progress

The assignment overview page provides an overview of your assignment acceptances and student progress. For more information on viewing and using the assignment overview page, see [Monitor Students Progress With The Assignment Overview Page](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/monitor-students-progress-with-the-assignment-overview-page).


## Next steps

* After you create the assignment and your students form teams, team members can start work on the assignment using Git and GitHub's features. Students can clone the repository, push commits, manage branches, create and review pull requests, address merge conflicts, and discuss changes with issues. Both you and the team can review the commit history for the repository. For more information, see [Get Started](https://docs.github.com/en/get-started), [Repositories](https://docs.github.com/en/repositories), [Using Git](https://docs.github.com/en/get-started/using-git), and [Collaborating With Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests), and the free course on [resolving merge conflicts](https://github.com/skills/resolve-merge-conflicts) from GitHub Skills.

* When a team finishes an assignment, you can review the files in the repository, or you can review the history and visualizations for the repository to better understand how the team collaborated. For more information, see [Viewing Activity And Data For Your Repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository).

* You can provide feedback for an assignment by commenting on individual commits or lines in a pull request. For more information, see [Commenting On A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) and [Creating An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue). For more information about creating saved replies to provide feedback for common errors, see [About Saved Replies](https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/about-saved-replies).

## Further reading

* [GitHub Education for teachers](/education/about-github-education/github-education-for-teachers)
* [Connect A Learning Management System Course To A Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)
* [Using GitHub Classroom With GitHub CLI](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)
