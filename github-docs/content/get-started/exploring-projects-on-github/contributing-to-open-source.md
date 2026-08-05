# Contributing to open source

In this article, you'll learn how to contribute to an open source project by working through an example. We'll guide you through making a contribution to the `github/docs` repository: familiarizing yourself with the repository, finding an area to contribute, making and submitting a pull request, and working with maintainers to get your changes accepted.

## Orienting yourself with the project guidelines

Before you start, it's important to understand the project's guidelines and requirements.  

### Why are guidelines important?

Every project has its own conventions, coding standards, and contribution processes that you'll need to follow:

* **Code style and formatting requirements:** How code should be formatted, naming conventions, and linting rules
* **Testing guidelines:** How to run tests, what tests are required for new features, and testing conventions
* **Pull request process:** How to structure your pull request, what information to include, and review expectations
* **Development setup:** How to set up your local development environment, required dependencies, and build processes
* **Issue reporting:** How to report bugs, request features, or ask questions
* **Communication channels:** Where to ask questions, discuss changes, or get help from maintainers

Taking time to read through these will save time, for both you and the maintainers, and make it more likely that your contribution will be accepted.

### Finding the guidelines

To access these guidelines and requirements, navigate to the **Community Standards** checklist in the **Insights** tab. For our example, we'll use the [`github/docs` Community Standards](https://github.com/github/docs/community).

* **README:** Provides an overview of the project. The content can vary, but the README helps users and contributors quickly understand what the project is and how to use it, along with links to other documentation.
* **Code of Conduct:** Defines acceptable behavior standards for project contributors and community members, and establishes expectations and procedures for addressing violations.
* **Contributing:** Provides guidelines and instructions for contributors to the project. It helps streamline the contribution process by setting clear expectations and encouraging consistent collaboration.
* **License:** Legally defines how others can use, modify, and distribute the code, protecting both the maintainers and users by setting clear terms for copyright and permissions.

  * For example, the `github/docs` repository uses the Creative Commons License for the documentation, which is a license type that is specifically for creative works. The software code in `github/docs` is under the MIT license, which is a permissive license that allows anyone to use the code contained in it.
  * You can learn about other common license types with the [Choose a license](https://choosealicense.com/licenses/) tool.

* **Security policy:** Provides instructions for reporting security vulnerabilities to maintainers of the repository.

Review each of the resources that are available for the `github/docs` repository.

## Finding an area to contribute

When first contributing to a project, starting with minor fixes like documentation improvements or small bug reports can help you familiarize yourself with the codebase and contributor workflow. In this example, you'll be looking for issues using the `help wanted` and `good first issue` labels to surface specific issues that are open for external contributors. Then you'll use Copilot to help provide context about the issue.

1. Navigate to the **Issues** tab of the `github/docs` repository, then use the **Labels** filter and select "help wanted" to view open issues that maintainers have specifically marked as needing community help.
1. Look through the list of issues and find one you would be interested in working on.
1. Navigate to [https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).

1. In the prompt box, enter the following prompt:

      ```text copy
      Can you summarize the key points and next steps from this issue?
      ```

1. Read through the context Copilot provided, along with the comments from other contributors and maintainers to see if the issue is one you want to work on. If you have specific questions you can ask directly in the issue or in the project's Discord, IRC, or Slack, if applicable.

> [!TIP] If you ever work on an issue **without** the `help wanted` or `good first issue` labels, it's a good idea to ask the maintainers in the issue if you can open a pull request, to confirm your planned contribution aligns with the project's goals.

## Creating your own copy of a project

Now you're ready to get started contributing. Because you don't have access to edit the repository, you first need to create a **fork**: your own copy of the repository where you can safely make changes and submit them back for maintainer review. In this example, we'll walk through creating a fork of the `github/docs` repository.

1. Navigate to the `GitHub Docs` project at https://github.com/github/docs.
1. In the top-right corner of the page, click **Fork**.
1. Under "Owner," select the dropdown menu and click an owner for the forked repository.
1. By default, forks are named the same as their upstream repositories. Optionally, to further distinguish your fork, in the "Repository name" field, type a name.
1. Optionally, in the "Description" field, type a description of your fork.
1. Optionally, select **Copy the DEFAULT branch only**.

    For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. If you do not select this option, all branches will be copied into the new fork.

1. Click **Create fork**.

## Cloning a fork of a project

Now you have a fork of the `github/docs` repository under your account, but you need to get it to your local machine to get started working on your changes.

1. On GitHub, navigate to **your fork** of the `github/docs` repository.
1. Above the list of files, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Code**.

   ![Screenshot of the list of files on the landing page of a repository. The "Code" button is highlighted with a dark orange outline.](/assets/images/help/repository/code-button.png)

1. Copy the URL for the repository.

   * To clone the repository using HTTPS, under "HTTPS", click {% octicon "copy" aria-label="Copy to clipboard" %}.
   * To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click {% octicon "copy" aria-label="Copy to clipboard" %}.
   * To clone a repository using GitHub CLI, click **GitHub CLI**, then click {% octicon "copy" aria-label="Copy to clipboard" %}.
  
     ![Screenshot of the "Code" dropdown menu. To the right of the HTTPS URL for the repository, a copy icon is outlined in dark orange.](/assets/images/help/repository/https-url-clone-cli.png)

1. On Mac or Linux, open Terminal. On Windows, open Git Bash.
1. Change the current working directory to the location where you want the cloned directory.

1. Type `git clone`, and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of `YOUR-USERNAME`:

    ```shell copy
    git clone https://github.com/YOUR-USERNAME/docs
    ```

1. Press **Enter**. Your local clone will be created.

## Making changes in a topic branch

Now it's time to make changes! Before you start, it's a good idea to create a **topic branch** with a **descriptive name** in your fork. Using a topic branch lets you keep your work separate from the default branch of the repository.

```shell copy
git checkout -b YOUR_TOPIC_BRANCH
```

After switching to your topic branch, open your favorite text editor or IDE and start coding. Follow these best practices:

* Use Copilot to provide code suggestions, giving you confidence in your changes.
* Document your code and write tests. These are often overlooked, and can help ensure your contribution gets merged.
* Ask Copilot questions about the issue to help you further understand the requirements for implementation.
* Use Copilot to review your changes to ensure they meet the project’s coding style and documentation requirements.
* Use Copilot to help with instructions for building and testing the project on your local machine.

## Committing and pushing your changes

When your changes are ready, you can stage and commit them in your repository. When writing a commit message, use a clear, concise commit title under 50 characters that summarizes what the commit does. Group related changes into single commits when possible, but keep unrelated changes in separate commits.

```shell copy
git add .
git commit -m "a short description of the change"
```

Try to keep commit description lines under 72 characters for better readability. When you've finished committing your local changes and are ready to push them to GitHub, push your changes to the remote.

```shell copy
git push
```

## Submitting a pull request

Now that you've pushed your changes to GitHub, you're ready to open a pull request. You can open a pull request for review even if you have not finalized the changes you've made in your branch. Opening a pull request early on in the contribution process gives awareness to the maintainers, and allows them to give initial feedback about your changes.

1. Go to your forked repository on GitHub. For example, `https://github.com/YOUR-USERNAME/docs`.
1. You should see a prompt to "Compare & pull request" for your recently pushed branch. Click it.
1. If not, go to the "Pull requests" tab and click "New pull request".
1. Ensure the **base** repository is `github/docs` and the base branch is their main branch (e.g., `main`).
1. Ensure the **head** repository is your fork (`YOUR-USERNAME/docs`) and the compare branch is your branch.
1. Type a title and description for your pull request. In the description, reference the issue that your pull request will close. For example, `Closes: #15`. This will provide context for your pull request and automatically close the issue out once the pull request is merged.

  > [!TIP] Avoid force pushing once a pull request has been submitted for review. This makes it more difficult for maintainers to see that you are addressing their feedback.

## Working with project maintainers

Once your pull request has been submitted, the next step is for a project maintainer to review and provide feedback. Project maintainers may request changes to match the codebase's style or architecture, sometimes requiring you to refactor substantial portions of your work.

* When feedback arrives about your pull request, respond promptly and professionally even if criticism feels harsh. Maintainers are typically focused on code quality.
* If changes are requested for your pull request, don't open a new pull request to address the changes. Keeping the existing pull request open and making changes there helps prevent the maintainers from losing context.
* If your pull request remains unaddressed for weeks, politely follow up with a comment requesting feedback. Do **not** directly mention the handles of maintainers. Maintainers often balance open source work with full-time responsibilities, and understanding their time constraints fosters better collaboration.
* If your contribution does not get accepted, ask the maintainers for feedback so that you can have that context for the next time you want to make a contribution.

## Next steps

You now know how to identify the right issues to work on, craft contributions that maintainers want to merge, and how to navigate the pull request review process. The open source community on GitHub is ready for your unique perspective and skills. Find a new project that excites you, identify an issue to work on, and start contributing.
