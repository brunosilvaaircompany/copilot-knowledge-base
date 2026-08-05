# Using GitHub Codespaces with GitHub Classroom

> [!WARNING]
> **Closing down:** The GitHub Classroom application is closing down and will be retired on August 28, 2026.
> For more information, see the [GitHub Classroom closing down notice](https://gh.io/classroom-sunset).

## About GitHub Codespaces

GitHub Codespaces is an instant, cloud-based development environment that uses a container to provide you with common languages, tools, and utilities for development. GitHub Codespaces is also configurable, allowing you to create a customized development environment that is the same for all users of your project. See [Quickstart](https://docs.github.com/en/codespaces/quickstart).

Once GitHub Codespaces is enabled in an organization or enterprise, users can create a codespace from any branch or commit in an organization or enterprise repository and begin developing using cloud-based compute resources. You can connect to a codespace from the browser or locally using Visual Studio Code.

To get started with GitHub Codespaces, see [Quickstart](https://docs.github.com/en/codespaces/quickstart). For more information on creating a codespace, see [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository) or [Creating A Codespace From A Template](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template). If you want to return to a codespace you've already created, see [Opening An Existing Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace). To learn more about how GitHub Codespaces works, see [Deep Dive](https://docs.github.com/en/codespaces/about-codespaces/deep-dive).


Setting GitHub Codespaces as the preferred editor for an assignment in GitHub Classroom assignments, is beneficial for both students and teachers. GitHub Codespaces is a good option for students using loaned devices or without access to a local IDE setup, since each codespace is cloud-based and requires no local setup. Students can launch a codespace for an assignment repository in Visual Studio Code directly in their browser, and begin developing right away without needing any further configuration.

For assignments with complex setup environments, teachers can customize the dev container configuration for a repository's codespaces. This ensures that when a student creates a codespace, it automatically opens with the development environment configured by the teacher. For more information on dev containers, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

> [!NOTE]
> Individual codespaces are automatically deleted if they are stopped and left unused for a prolonged period. See [Configuring Automatic Deletion Of Your Codespaces](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces).

Verified students get free use of GitHub Codespaces, up to 180 core hours per month, for their personal accounts. The monthly amount of storage and core hours of usage available to students is equivalent to the amount included with GitHub Pro accounts. For more information, see [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).


> [!NOTE]
> If students use GitHub Codespaces in their assignment repositories for GitHub Classroom, the usage will be charged to the organization that owns the classroom, and will not affect the usage for a student's personal account.


## About the Codespaces Education benefit for verified teachers

The Codespaces Education benefit gives verified teachers a free monthly allowance of GitHub Codespaces hours to use in GitHub Classroom. The free allowance is estimated to be enough for a class of 50 with 5 assignments per month, on a 2 core machine with 1 codespace stored per student.

> [!NOTE]
> The Codespaces Education benefit is currently in public preview and subject to change. During the public preview release, your organization will not be charged if you exceed the free allowance.


To become a verified teacher, you need to be approved for an educator or teacher benefit. See [Apply To GitHub Education As A Teacher](https://docs.github.com/en/education/about-github-education/github-education-for-teachers/apply-to-github-education-as-a-teacher).

After you have confirmation that you are a verified teacher, visit [GitHub Education for Teachers](https://education.github.com/globalcampus/teacher) to upgrade the organization to GitHub Team. See [GitHub's products](/get-started/learning-about-github/githubs-plans#github-team).

If you are eligible for the Codespaces Education benefit, when you enable GitHub Codespaces in GitHub Classroom for your organization, GitHub automatically adds a Codespace policy to restrict machine types for all codespaces in the organization to 2 core machines. This helps you make the most of the free GitHub Codespaces usage. However, you can change or remove these policies in your organization settings. See [Restricting Access To Machine Types](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

When the Codespaces Education benefit moves out of public preview, if your organization exceeds their free allowance for GitHub Codespaces usage, your organization will be billed for additional usage. See [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).

## Enabling Codespaces for your organization

GitHub Codespaces is available to use with GitHub Classroom for organizations that use GitHub Team. If you are eligible for the Codespaces Education benefit, you must enable GitHub Codespaces through GitHub Classroom, instead of enabling it directly in your organization settings. Otherwise, your organization will be billed directly for all usage of GitHub Codespaces.

### Enabling Codespaces for an organization when creating a new classroom

1. Sign into [GitHub Classroom](https://classroom.github.com/login).

1. On the right side of the page, click **New classroom**.
1. In the list of organizations, click the organization you'd like to use for your classroom. Organizations that are eligible for GitHub Codespaces will have a note showing that they are eligible. Optionally, you can create a new organization. See [Creating A New Organization From Scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
1. In the "Name your classroom" page, under "Codespaces in your Classroom", click **Enable**. Note that this will enable GitHub Codespaces for all repositories and users in the organization.
1. When you are ready to create the new classroom, click **Create classroom**.

### Enabling Codespaces for an organization via an existing classroom

1. Sign into [GitHub Classroom](https://classroom.github.com/login).

1. In the list of classrooms, click the classroom you want to view.

1. Under the classroom name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

   ![Screenshot of the tabs in a classroom. The "Settings" tab is outlined in dark orange.](/assets/images/help/classroom/click-settings.png)

1. Under "GitHub Codespaces", click **Enable**. This will enable GitHub Codespaces for all repositories and users in the organization. A new Codespace policy is also added to restrict machine types for all codespaces in the organization to 2 core machines.

You can use the same methods as above to disable GitHub Codespaces for your organization as well. Note that this will disable GitHub Codespaces for all users and repositories in the organization.

## Configuring an assignment to use Codespaces

To make GitHub Codespaces available to students for an assignment, you can choose GitHub Codespaces as the supported editor for the assignment. When creating a new assignment, in the "Add your starter code and choose your optional online IDE" page, under "Add a supported editor", select **GitHub Codespaces** from the dropdown menu.

If you use a template repository for an assignment, you can define a dev container in the repository to customize the tools and runtimes available to students when they launch a codespace to work on the assignment. If you do not define a dev container, GitHub Codespaces will use a default configuration, which contains many of the common tools that your students might need for development. For more information on defining a dev container, see [Adding A Dev Container Configuration](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration).

## Launching an assignment using GitHub Codespaces

When a student opens an assignment, the repository's README file includes their teacher's recommendation of the IDE they should use for the work.

Students can launch a new or existing codespace by clicking the **Open in GitHub Codespace** button in the README, or by clicking the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** button on the main page of the assignment repository, then selecting the **Codespaces** tab. From the **Codespaces** tab you can select an existing codespace or create a new one. See [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

![Screenshot of the assignment repository. The "Code" dropdown menu to launch a new codespace is expanded.](/assets/images/help/classroom/student-launch-new-codespace.png)

Teachers can view each student's codespace for an assignment in the assignment overview page. You can click on the Codespaces icon on the right side of each student row to launch the codespace.

![Screenshot of the assignment overview. The Codespaces icon is outlined in dark orange.](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

When you connect to a codespace through a browser, auto-save is enabled automatically. If you want to save changes to the repository, you will need to commit the changes and push them to a remote branch. If you leave your codespace running without interaction for 30 minutes by default, the codespace will timeout and stop running. Your data will be preserved from the last time you made a change. For more information on the lifecycle of a codespace, see [Understanding The Codespace Lifecycle](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle).
