# Monitor students' progress with the assignment overview page

> [!WARNING]
> **Closing down:** The GitHub Classroom application is closing down and will be retired on August 28, 2026.
> For more information, see the [GitHub Classroom closing down notice](https://gh.io/classroom-sunset).

## About the assignment overview page

Each assignment you create on GitHub Classroom has an assignment overview page. The assignment overview page provides an overview of your assignment acceptances and student progress. You may see different summary information on an assignment overview page based on the configurations of your assignments.

For individual assignments, you can view the following information at the top of the assignment overview page:

* **Rostered students:** The number of students on the classroom's roster.
* **Added students:** The number of GitHub accounts that have accepted the assignment and are not associated with a roster identifier.
* **Accepted students:** The number of accounts that have accepted this assignment.
* **Assignment submissions:** The number of students that have submitted the assignment. Submission is triggered at the assignment deadline.
* **Passing students:** The number of students currently passing the autograding tests for this assignment.

For group assignments, you can view the following information at the top of the assignment overview page:

* **Total teams:** The number of teams that have been created.
* **Rostered students:** The number of students on the classroom's roster.
* **Students not on a team:** The number of students on the classroom roster who have not yet joined a team.
* **Accepted teams:** The number of teams who have accepted this assignment.
* **Assignment submissions:** The number of teams that have submitted the assignment. Submission is triggered at the assignment deadline.
* **Passing teams:** The number of teams that are currently passing the autograding tests for this assignment.

## Viewing the assignment overview page for an assignment

The assignment overview page displays information for a specific assignment. You can view general information at a glance, or apply searches, sorts, and filters to find students or teams that meet specific criteria.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).

1. Navigate to a classroom.
1. To open the assignment overview page for an assignment, in the "Assignments" section, click the name of that assignment.

## Searching and sorting the assignment overview page

You can search and sort the assignment overview page to find specific students or teams.

1. To find a specific student or team on the assignment overview page, in the search bar, type the student's GitHub handle, the student's identifier, or the team's name, then press <kbd>Enter</kbd> or <kbd>Return</kbd>.

   If the search term you enter matches multiple students or teams, each student or team will be shown in the search results. For example, if you have two students with the GitHub handles "@octocat" and "@monacat", and you search for "cat", both "@octocat" and "@monacat" will appear in the search results.
1. To sort the students or teams displayed on an assignment overview page, select **Sort by:** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %}, then click **Alphabetical A-Z**, **Alphabetical Z-A**, **Newest**, or **Oldest**.

   The **Newest** sort orders the results from the most recently updated assignment to the least recently updated assignment, while the **Oldest** sort does the opposite.
1. Optionally, to remove all filters, searches, and sorts, click **{% octicon "x" aria-hidden="true" aria-label="x" %} Clear current search query, filters, and sorts**.


## Filtering the assignment overview page

Using a series of dropdown menus, you can apply multiple filters to the assignment overview page to search for students or teams based on specific criteria. You can even apply multiple filters from a single dropdown menu to include all students or teams that match the criteria.

1. To filter for students with unlinked accounts, select the **Unlinked accounts** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **Student identifiers** or **GitHub accounts**.
1. To filter by which students have or haven't accepted the assignment, select the **Accepted** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **Accepted** or **Unaccepted**.
1. To filter by the submission status for each student's assignment repository, select the **Submitted** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **Submitted**, **On-time**, **Late**, or **Not submitted**.
1. To filter for students by passing or failing grades, select the **Passing** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **Passing** or **Failing**.
1. To unapply a filter, select the associated dropdown menu, then click the filter once more. A {% octicon "check" aria-hidden="true" aria-label="check" %} is displayed alongside the name of an applied filter, while unapplied filters only display their names.
1. Optionally, to remove all filters, searches, and sorts, click **{% octicon "x" aria-hidden="true" aria-label="x" %} Clear current search query, filters, and sorts**.


## Downloading assignment details

You can download a CSV with details of your students' assignments using the "Download" button on the overview page. This will generate and download a CSV containing a link to the student's repository, their GitHub handle, roster identifier, submission timestamp, and autograding score.
