# Choosing the right AI tool for your task

## Overview

The use of AI tools is increasingly becoming a standard part of a software developer's daily workflow. To be competitive in the job market, it's important to know which AI tools to use for each task you face as a developer.

GitHub's AI tools assist with every phase of the software development lifecycle (SDLC):

* **Planning**:
  * **Copilot Chat** can help you brainstorm and identify the best technologies for your project.
  * **Copilot Chat** can create issues to help track your ideas.
  * **Copilot cloud agent** can help you research a repository and create a detailed implementation plan for your task.
* **Code creation**:
  * **Copilot inline suggestions** help add code as you type.
  * **Next edit suggestions** (public preview) predicts the next edit you are likely to make and suggests a completion for it.
  * **Copilot Chat** can answer questions and offer suggestions in a conversational environment.
  * You can assign **Copilot cloud agent** to an open issue and it will automatically raise a pull request to address the necessary changes. Alternatively, Copilot cloud agent can open a branch and iterate on code changes before opening a pull request.
* **Reviews**:
  * **Copilot code review** gives you feedback in your favorite IDE, or as a pull request review on GitHub.
* **Testing**:
  * **Copilot Chat** can help you write and debug tests.
* **Deployment**:
  * **Copilot Chat** can help you configure continuous integration and continuous deployment (CI/CD) pipelines.
* **Operation**:
  * **Copilot cloud agent** can raise pull requests for open issues.
  * **Copilot Chat** can help with tasks you're working on yourself.

## Planning

During the planning phase, you define the goals, scope, and requirements of your project, setting the direction for development by outlining what needs to be built and how it will be achieved.

On GitHub, use **Copilot-powered issue creation** (public preview) to streamline the tracking of your ideas. Provide a short natural language prompt (or upload an image), and Copilot will generate a structured issue for you.

Once you've chosen an issue to address, **Copilot Chat** can help you brainstorm ideas for your project and learn about the various tools, libraries, and resources you might need. You can ask Copilot Chat generalized questions about the project you're envisioning to get suggestions on a path forward. For example:

`I'd like to build an web app that helps users track their daily habits and provides personalized recommendations. Can you suggest features and technologies I could use?`

## Creation

During the creation phase, you'll write and refine the code for your application. This is where you can bring the project to life by implementing features, fixing bugs, and iterating on the codebase.

Copilot provides auto-complete style **coding suggestions** as you code in your favorite IDE or on GitHub, helping you draft and refine your code faster. You can write code directly or describe your intent in natural language using comments in your IDE, and Copilot will generate relevant suggestions.

With **next edit suggestions** (public preview), Copilot predicts related edits based on the changes you’re actively making. For example, if you rename a variable or update a function’s parameters, it suggests corresponding updates throughout your code. This helps maintain consistency and reduces the chance of errors.

### Using Copilot Chat in ask mode

Use Copilot Chat in **ask mode** as your pair programmer to get help with coding tasks, understand tricky concepts, and improve your code. You can ask it questions, get explanations, or request suggestions in real time.

* `Can you explain what this JavaScript function does? I'm not sure why it uses a forEach loop instead of a for loop.`

* `What’s the difference between let, const, and var in JavaScript? When should I use each one?`

### Using Copilot Chat in edit mode

Use Copilot Chat in **edit mode** when you want more granular control over the edits that Copilot proposes. In edit mode, you choose which files Copilot can make changes to, provide context to Copilot with each iteration, and decide whether or not to accept the suggested edits.

* `Refactor the calculateTotal function to improve readability and efficiency.`

* `The login function is not working as expected. Can you debug it?`

* `Format this code to follow Python’s PEP 8 style guide.`

### Using Copilot Chat in agent mode

In **agent mode**, Copilot Chat can assist with automating repetitive tasks and managing your workflow directly within your project. Use it to create pull requests after you make code changes. You can also use it to run tests and linters in the background while you're working on your project.

* `Create a pull request for the recent changes in the user-auth module and include a summary of the updates.`

* `Run all tests and linters for the payment-processing module and provide a summary of any issues or errors found.`

## Reviews

The **review** phase ensures the quality and reliability of your code. It involves analyzing changes, identifying potential issues, and improving the overall structure and functionality of the codebase.

While you're coding in your IDE, ask Copilot to:

* **Review a selection of changes:** Highlight specific parts of your code and ask Copilot for an initial review. This is great for quick feedback on smaller edits.
* **Review all changes:** Request a deeper review of all your changes in a file or a project. Copilot will analyze your work and provide suggestions for improvements.

When you're ready to get feedback from others on the GitHub website, first **assign Copilot as a reviewer** on your pull request. It will automatically add comments to highlight areas where you can improve code quality or identify potential bugs before human review.

## Testing

The testing phase validates that your application works as intended. This phase involves writing and running tests to catch bugs, ensure functionality, and maintain code quality before deployment.

**Copilot Chat** can assist by generating unit and integration tests, debugging failures, and suggesting additional test cases to ensure comprehensive coverage. Here are some example prompts:

* `Write unit tests for this function to calculate the factorial of a number. Include edge cases like 0 and negative numbers.`

* `How do I run these tests using Python's unittest framework?`

* `Write integration tests for the deposit function in the BankAccount class. Use mocks to simulate the NotificationSystem.`

* `What additional tests should I include to ensure full coverage for this module?`

## Deployment

The deployment phase involves preparing your code for production and ensuring a smooth release.

**Copilot Chat** can help you configure deployment scripts, set up CI/CD pipelines, and troubleshoot issues. Here are some example prompts:

* `Write a deployment script for a Node.js application using GitHub Actions to deploy to an AWS EC2 instance.`

* `Set up a GitHub Actions workflow to build, test, and deploy a Python application to Heroku.`

* `Analyze this deployment log and suggest why the deployment failed.`

## Operation

During the operation phase, the focus is on maintaining and monitoring your application in production to ensure it runs smoothly and meets user expectations. This phase often involves tasks like debugging production issues, optimizing performance, and ensuring system reliability.

You can use the **Copilot cloud agent** as an autonomous agent that can help maintain and improve your application in production. Assign a GitHub issue to Copilot, and it will autonomously explore the repository, identify potential fixes, and create a pull request with the proposed changes. Then it will automatically request a review from you.

For issues you're tackling yourself, use **Copilot Chat** for help analyzing logs, debugging issues, and suggesting optimizations. For example:

* `Analyze this error log and suggest possible causes for the issue.`

* `Write a script to monitor the memory usage of this application and alert when it exceeds a threshold.`

* `How can I optimize the database queries in this code to improve performance?`

## Next steps

Before you start your next task, take a moment to identify the right tool to make your work faster and more efficient.

> **Nota:**

Do you feel prepared to identify the right AI tool for your next task?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>
