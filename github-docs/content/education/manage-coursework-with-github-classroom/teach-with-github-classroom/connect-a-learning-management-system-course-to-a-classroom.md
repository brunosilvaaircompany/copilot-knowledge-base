# Connect a learning management system course to a classroom

> [!WARNING]
> **Closing down:** The GitHub Classroom application is closing down and will be retired on August 28, 2026.
> For more information, see the [GitHub Classroom closing down notice](https://gh.io/classroom-sunset).

## About connecting an LMS to your classroom

You can connect a learning management system (LMS) to GitHub Classroom and import a roster of student identifiers from the LMS.

## Prerequisites

Before you can connect your LMS to a classroom, an administrator for your LMS instance needs to register your LMS with GitHub Classroom to initiate the OAuth handshake. An admin only needs to do this registration process once, then any teacher who uses their LMS instance may sync their LMS courses to classrooms. For more information, see [Register A Learning Management System With GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom).

> [!NOTE]
> Google Classroom does not use the LTI protocol, so does not need to be connected to GitHub Classroom before importing the roster. For more information, see [Connect A Learning Management System Course To A Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom#importing-a-roster-from-google-classroom).


To configure an LMS to connect to GitHub Classroom, you must first create a classroom. For more information, see [Manage Classrooms](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#creating-a-classroom).

## Supported LMSes

GitHub Classroom supports connecting with LMSes that implement Learning Tools Interoperability (LTI) standards.

* LTI version 1.3
* LTI Advantage

Using LTI helps keep your information safe and secure. LTI is an industry-standard protocol and GitHub Classroom's use of LTI is certified by the Instructional Management System (IMS) Global Learning Consortium. For more information, see [Learning Tools Interoperability](https://www.imsglobal.org/activity/learning-tools-interoperability) and [About IMS Global Learning Consortium](https://www.imsglobal.org/aboutims.html) on the IMS Global Learning Consortium website.

GitHub has tested and verified registration, connection and the import of roster data from the following LMSes into GitHub Classroom.

* Blackboard (This is a community supported option)
* Canvas
* Moodle
* Sakai
* Google Classroom

> [!NOTE]
> Other LMSes that implement LTI 1.3 may also work with GitHub Classroom, but have not yet been verified. LMS admins may need to configure custom settings around privacy and button placement and may need to provide teachers with documentation on how to launch into GitHub Classroom from the LMS.

Google Classroom does not use the LTI protocol, so does not need to be connected to GitHub Classroom before importing the roster. For more information, see [Connect A Learning Management System Course To A Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom#importing-a-roster-from-google-classroom).



## Linking a Blackboard course with a classroom

You can link your Blackboard course with a classroom in GitHub Classroom. For more information about Blackboard, see the [Blackboard website](https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see [Register A Learning Management System With GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-blackboard-for-github-classroom).

1. Sign into your **Blackboard** instance.
1. Select the Blackboard course or organization to integrate with GitHub Classroom.
1. In the right sidebar on the course page, click **Books & Tools**, then click **GitHub Classroom**. Note that the name may be different if your LMS administrator named it something else when registering your LMS.
1. Click **GitHub Classroom**.
1. In GitHub Classroom, select a classroom to link with your LMS course.

    > [!NOTE] This step might give you an error message, "Unable to launch link. The Tool Provider has been disabled by the System Administrator: GitHub Classroom". To resolve this error, ensure that the status of the “GitHub Classroom” tool is set to `Approved`. In the "Admin Panel," click **LTI Tool Providers**. Hover on the name next to GitHub Classroom and click **Approve**.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see [Importing a roster from your LMS](#importing-a-roster-from-your-lms).

## Linking a Canvas course with a classroom

You can link your Canvas course with a classroom in GitHub Classroom. For more information about Canvas, see the [Canvas website](https://www.instructure.com/canvas/).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see [Register A Learning Management System With GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-canvas-for-github-classroom).

1. Sign into [Canvas](https://www.instructure.com/canvas/#login).
1. Select the Canvas course to integrate with GitHub Classroom.
1. Click **Setting** in the left sidebar, then click the **Apps** tab.
1. Click the **+ App** button.
1. Under "Configuration Type", select **By Client ID** from the dropdown menu.
1. Under "Client ID", input the Client ID that your LMS administrator created when registering your LMS instance with GitHub Classroom.
1. Click **Submit**, then click **Install**.
1. Refresh the page, and you should see a **GitHub Classroom** link in the course sub-navigation menu on the right hand side of the course details page. Note that the name may be different if your LMS admin named it something else when registering your LMS.
1. Clicking the **GitHub Classroom** link will launch you into GitHub Classroom, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see [Importing a roster from your LMS](#importing-a-roster-from-your-lms).

## Linking a Moodle course with a classroom

You can link your Moodle course with a classroom in GitHub Classroom. For more information about Moodle, see the [Moodle website](https://moodle.org).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see [Register A Learning Management System With GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom).

You must be using Moodle version 3.0 or greater.

1. Sign into [Moodle](https://moodle.org/login/).
1. Select the Moodle course to integrate with GitHub Classroom.
1. Under "External Tools, under "General", you should see a button with the name "GitHub Classroom". Note that the name may be different if your LMS admin named it something else when registering your LMS.
1. Clicking the **GitHub Classroom** button will launch you into GitHub Classroom, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see [Importing a roster from your LMS](#importing-a-roster-from-your-lms).

## Linking a Sakai course with a classroom

You can link your Sakai course with a classroom in GitHub Classroom. For more information about Sakai, see the [Sakai website](https://www.sakailms.org/).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see [Register A Learning Management System With GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom).

1. Sign into your Sakai instance.
1. Select the Sakai course to integrate with GitHub Classroom.
1. Click on **External Tools**.
1. Click on **Tool Links**.
1. Clicking the "GitHub Classroom" link will launch you into GitHub Classroom, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see [Importing a roster from your LMS](#importing-a-roster-from-your-lms).

## Importing a roster from your LMS

To import your roster from your LMS:
1. Open your linked classroom in GitHub Classroom and select the "Students" tab.
1. Click the **Import from...** button containing the name of your LMS (Canvas, Sakai, or Moodle).
1. Select which identifier you'd like to use for your students, then click **Import roster entries**, and your roster will be imported.

To update an existing roster:
1. Open your linked classroom in GitHub Classroom and select the "Students" tab.
1. Click the **Sync from...** button containing the name of your LMS (Canvas, Sakai, or Moodle).

## Importing a roster from Google Classroom

Google Classroom does not use the LTI protocol so does not need to be connected to GitHub Classroom before importing the roster.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).

1. In the list of classrooms, click the classroom you want to view.

1. Under the classroom name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Students**.

   ![Screenshot of the tabs in a classroom. The "Students" tab is outlined in dark orange.](/assets/images/help/classroom/click-students.png)

1. If your classroom already has a roster, you can either update the roster or delete the roster and create a new roster.
    * For more information about deleting and creating a roster, see [Manage Classrooms](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom) and [Manage Classrooms](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom).
    * For more information about updating a roster, see [Manage Classrooms](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom).
1. In the list of LMSes, click **Google Classroom**.
1. Sign in to Google, then select the Classroom to link to.

## Disconnecting your LMS

You can disconnect your classroom from your LMS in GitHub Classroom settings.

1. Sign into [GitHub Classroom](https://classroom.github.com/login).

1. In the list of classrooms, click the classroom you want to view.

1. Under the classroom name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

   ![Screenshot of the tabs in a classroom. The "Settings" tab is outlined in dark orange.](/assets/images/help/classroom/click-settings.png)

1. Under "Connect to a learning management system (LMS)", click **Connection Settings**.
1. Under "Delete Connection to your learning management system", click **Disconnect from your learning management system**.
