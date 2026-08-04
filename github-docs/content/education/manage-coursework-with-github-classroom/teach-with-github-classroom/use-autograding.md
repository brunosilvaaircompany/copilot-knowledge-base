# Use autograding

> [!WARNING]
> **Closing down:** The GitHub Classroom application is closing down and will be retired on August 28, 2026.
> For more information, see the [GitHub Classroom closing down notice](https://gh.io/classroom-sunset).

## About autograding

You can use autograding to automatically check a student's work for an assignment on GitHub Classroom. You configure tests for an assignment, and the tests run immediately every time a student pushes to an assignment repository on your GitHub Enterprise Server instance. The student can view the test results, make changes, and push to see new results.


After a student accepts an assignment, on every push to the assignment repository (or on a teacher-defined schedule), GitHub Actions runs the commands for your autograding test in a Linux environment containing the student's newest code. GitHub Classroom creates the necessary workflows for GitHub Actions. You don't need experience with GitHub Actions to use autograding, but you can optionally modify the workflow configurations to suit your needs. For more information on workflows and GitHub Actions, see [Continuous Integration](https://docs.github.com/en/actions/get-started/continuous-integration).

You can use a testing framework, run a custom command, write input/output tests, or combine different testing methods. The Linux environment for autograding contains many popular software tools. For more information, see the details for the latest version of Ubuntu in [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners#preinstalled-software-for-github-owned-images).

You can see an overview of which students are passing autograding tests by navigating to the assignment in GitHub Classroom. A green checkmark means that all tests are passing for the student, and a red X means that some or all tests are failing for the student. If you award points for one or more tests, then a bubble shows the score for the tests out of the maximum possible score for the assignment.

## Grading methods

GitHub Classroom provides different autograding test presets that can be used if you do not wish to configure GitHub Actions workflows yourself. You can also choose to use custom GitHub Actions YAML to define your own autograding workflow.

### Using GitHub presets

You can use presets without any knowledge of GitHub Actions. You can enter information about your autograding tests and GitHub Classroom will automatically add the required files to student assignment repositories.

There are three types of presets: input/output tests, python tests, and run command tests.

#### Input/output test

An input/output test optionally runs a setup command, then provides standard input to a test command. GitHub Classroom evaluates the test command's output against an expected result.

| Setting | Description |
| :- | :- |
| **Test name** | The name of the test, to identify the test in logs |
| **Setup command** | _Optional_. A command to run before tests, such as compilation or installation |
| **Run command** | The command to run the test and generate standard output for evaluation |
| **Inputs** | Standard input for run command |
| **Expected output** | The output that you want to see as standard output from the run command |
| **Comparison** | The type of comparison between the run command's output and the expected output<br/><br/><ul><li>**Included:** Passes when the expected output appears<br/>anywhere in the standard output from the run command</li><li>**Exact:** Passes when the expected output is completely identical<br/>to the standard output from the run command</li><li>**Regex:** Passes if the regular expression in expected<br/>output matches against the standard output from the run command</li></ul> |
| **Timeout** | In minutes, how long a test should run before resulting in failure |
| **Points** | _Optional_. The number of points the test is worth toward a total score |

#### Python test

A Python test runs a setup command, then runs `pytest`. The number of points awarded will depend on how many tests in the `pytest` test suite the student passes. Each test is worth the same number of points; you can change how many points the entire test suite is worth by changing the `Points` setting.

| Setting | Description |
| :- | :- |
| **Test name** | The name of the test, to identify the test in logs |
| **Setup command** | _Optional_. A command to run before tests, such as compilation or installation. [Some dependencies are already installed](https://github.com/classroom-resources/autograding-python-grader/blob/main/requirements.txt), but you can install more if needed. You do not need to use `sudo`, and should use `pip` instead of `pip3`. |
| **Run command** | The command to run the test and generate an exit code for evaluation |
| **Timeout** | In minutes, how long a test should run before resulting in failure |
| **Points** | _Optional_. The total number of points the entire `pytest` suite is worth. Each test will be worth `Points / number_of_tests` |

#### Run command test

A run command test runs a setup command, then runs a test command. GitHub Classroom checks the exit status of the test command. An exit code of `0` results in success, and any other exit code results in failure.

GitHub Classroom provides presets for language-specific run command tests for a variety of programming languages. For example, the **Run node** test prefills the setup command with `npm install` and the test command with `npm test`.

| Setting | Description |
| :- | :- |
| **Test name** | The name of the test, to identify the test in logs |
| **Setup command** | _Optional_. A command to run before tests, such as compilation or installation |
| **Run command** | The command to run the test and generate an exit code for evaluation |
| **Timeout** | In minutes, how long a test should run before resulting in failure |
| **Points** | _Optional_. The number of points the test is worth toward a total score |

### Using a custom GitHub Actions workflow

Instead of using presets, you can also add any GitHub Actions workflow to the `.github/workflows/classroom.yml` file in your starter code repository.

You can edit the `.github/workflows/classroom.yml` file directly from the assignment edit page by selecting **Custom YAML** instead of **GitHub presets**. Clicking **Convert to workflow file** will prompt you to commit your changes to your starter code repository. This synchronization will only work if your starter code repository is in the same organization as your classroom. If your starter code repository is in another organization, you must edit the `.github/workflows/classroom.yml` file manually.

## Configuring autograding tests for an assignment

You can add autograding tests during the creation of a new assignment. For more information, see [Create An Individual Assignment](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment) or [Create A Group Assignment](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment).


You can add, edit, or delete autograding tests for an existing assignment. All changes made via the Classroom UI will be pushed to the existing student repositories, so use caution when editing your tests.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).

1. In the list of classrooms, click the classroom you want to view.

1. To the right of the assignment you want to edit, click {% octicon "pencil" aria-label="The settings link for the assignment" %}.

1. In the left sidebar, click **Grading and feedback**.
1. Add, edit, or delete an autograding test.
    * To add a test, under "Add autograding tests", select the **Add test** dropdown menu, then click the grading method you want to use.
      Configure the test, then click **Save test case**.

    * To edit a test, to the right of the test name, click {% octicon "pencil" aria-label="The pencil icon" %}.
      Configure the test, then click **Save test case**.

    * To delete a test, to the right of the test name, click {% octicon "trash" aria-label="The trash icon" %}.

1. At the bottom of the page, click **Update assignment**.

## Configuring when autograding tests are run

By default, autograding tests will automatically run whenever a student pushes to an assignment repository on your GitHub Enterprise Server instance. However, if you want to manage your GitHub Actions minutes, you can change this behavior.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).

1. In the list of classrooms, click the classroom you want to view.

1. To the right of the assignment you want to edit, click {% octicon "pencil" aria-label="The settings link for the assignment" %}.

1. In the left sidebar, click **Grading and feedback**.
1. Below your list of autograding tests, you can configure when autograding tests are run.
    * **Every time a student submits an assignment:** This is the default behavior.
    * **On a schedule:** You can set a time every day or every week for autograding tests to be run.
    * **Manually:** Autograding test runs will be manually triggered by you from the assignment dashboard.

## Viewing and downloading results from autograding tests

### Download autograding results

You can download a CSV with details of your students' assignments using the "Download" button on the overview page. This will generate and download a CSV containing a link to the student's repository, their GitHub handle, roster identifier, submission timestamp, and autograding score.


### View individual logs

1. Sign into [GitHub Classroom](https://classroom.github.com/login).

1. In the list of classrooms, click the classroom you want to view.

1. In the list of assignments, click the assignment you want to view.

1. To the right of a submission, click {% octicon "checklist" aria-label="The checklist icon" %}.
1. Review the test output. For more information, see [Use Workflow Run Logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs).

## Further reading

* [GitHub Actions documentation](/actions)
