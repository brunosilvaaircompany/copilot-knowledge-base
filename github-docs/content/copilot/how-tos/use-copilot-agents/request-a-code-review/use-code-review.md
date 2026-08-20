# Using GitHub Copilot code review

## Introduction

GitHub Copilot can review your code and provide feedback. Where possible, Copilot's feedback includes suggested changes which you can apply with a couple of clicks.

For a full introduction to GitHub Copilot code review, see [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review).

Copilot code review uses GitHub Actions to run agentic capabilities. For more information, see [Agentic capabilities for Copilot code review](/copilot/concepts/agents/code-review#usage-of-github-actions-runners-for-agentic-capabilities-in-code-review).

{% webui %}

Copilot code review is also available for organization members without a Copilot license, when enabled by an enterprise administrator or organization owner. See [Copilot code review for organization members without a Copilot license](/copilot/concepts/agents/code-review#copilot-code-review-without-a-copilot-license).

## Using Copilot code review

These instructions explain how to use Copilot code review in the GitHub website. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1. On GitHub.com, create a pull request or navigate to an existing pull request.
1. Under "Reviewers" in the right sidebar, next to **Copilot**, click **Request**.

   ![Screenshot of Copilot with 'Request' button under 'Reviewers'.](/assets/images/help/copilot/code-review/request-review@2x.png)

1. Wait for Copilot to review your pull request. This usually takes less than 30 seconds.

1. Scroll down and read through Copilot's comments.

   ![Screenshot of a code review left by Copilot.](/assets/images/help/copilot/code-review/review-comment@2x.png)

   Copilot always leaves a "Comment" review, not an "Approve" review or a "Request changes" review. This means that Copilot's reviews do not count toward required approvals for the pull request, and Copilot's reviews will not block merging changes. For more details, see [Approving A Pull Request With Required Reviews](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/approving-a-pull-request-with-required-reviews).

1. Copilot's review comments behave like review comments from humans. You can add reactions to them, comment on them, resolve them and hide them.

   Any comments you add to Copilot's review comments will be visible to humans, but they won't be visible to Copilot, and Copilot won't reply.

You can also request a review from Copilot through the GitHub REST API by requesting `copilot-pull-request-reviewer[bot]` as a reviewer. For more information, see [Review Requests](https://docs.github.com/en/rest/pulls/review-requests#request-reviewers-for-a-pull-request).

## Enabling automatic reviews

By default, you manually request a review from Copilot on each pull request, in the same way you would request a review from a human. However, you can set up Copilot to automatically review all pull requests. See [Configure Automatic Review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review).

## Choosing a review effort level

Copilot code review supports multiple review effort levels, so you can choose the level of thoroughness that matches the criticality of your code.

* **Lite**: Standard review that provides fast, targeted feedback on common issues such as bugs, security vulnerabilities, and style inconsistencies (default).
* **Balanced**: Deeper analysis of complex logic, security-sensitive code, and cross-service changes, using a higher-reasoning model.

You can select the review effort level in the pull request, under the **Reviewers** section where Copilot appears as a reviewer. Organization owners and repository administrators can also set a default effort level for automatic reviews.

For more information, see [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review#review-effort-level).

## Working with suggested changes provided by Copilot

Where possible, Copilot's feedback includes suggested changes which you can apply with a couple of clicks.

If you're happy with the changes, you can accept a single suggestion from Copilot and commit it, or accept a group of suggestions together in a single commit. For more information, see [Incorporating Feedback In Your Pull Request](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/incorporating-feedback-in-your-pull-request).

You can also invoke Copilot cloud agent to implement suggested changes. To do this, you must:

* Enable GitHub Copilot code review and Copilot cloud agent.
* On review comments from GitHub Copilot code review, click **Fix with Copilot**. This creates a draft comment on the pull request, where you can instruct Copilot to address specific feedback. You can then select whether Copilot will create a new pull request against your branch or a commit to the same pull request with the suggestions applied.

## Requesting a re-review from Copilot

When you push changes to a pull request that Copilot has reviewed, it won't automatically re-review your changes unless you've configured it to review new pushes after enabling automatic reviews.

To manually request a re-review from Copilot, click the {% octicon "sync" aria-label="Re-request review" %} button next to Copilot's name in the **Reviewers** menu. For more information, see [Requesting A Pull Request Review](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/requesting-a-pull-request-review).

To automatically request re-reviews from Copilot on every push, enable automatic code review for the repository and select **Review new pushes** in the ruleset settings. For more information, see [Configure Automatic Review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review#configuring-automatic-code-review-for-repositories-in-an-organization).

> [!NOTE] When re-reviewing a pull request, Copilot may repeat the same comments again, even if they have been dismissed with the "Resolve conversation" button or downvoted with the thumbs down (:-1:) button.

## Customizing Copilot's reviews with custom instructions

You can customize Copilot code review by adding custom instructions to your repository. Repository custom instructions can either be repository wide or path specific.

Use `.github/copilot-instructions.md` for repository-wide review guidance that should apply across the entire codebase. This is a good place to describe organization-wide expectations, such as coding standards, review criteria, or general practices that Copilot should consider in every review.

Use an `AGENTS.md` file in the root of your repository to provide additional repository context that helps Copilot better understand how your project works. For example, you can explain which patterns are intentional, which parts of the codebase need closer scrutiny, and what your team considers good architecture, testing, and implementation practices. This helps make reviews more relevant and aligned with the way your team builds software.

Use `.github/instructions/**/*.instructions.md` files for path-specific instructions that only apply when reviewing matching files. This is useful when different parts of the repository follow different conventions, require specialized checks, or need review guidance tailored to a particular language, framework, or subsystem.

For more information, see [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

> [!NOTE]
> When reviewing a pull request, Copilot reads repository custom instructions, agent instructions, and agent skills from the head branch (the branch with your changes), not the base branch. For example, when merging `my-feature-branch` into `main`, Copilot uses the instructions and skills in `my-feature-branch`, so you can test changes to them in the same pull request without merging them first.



### Example

This example of a `.github/copilot-instructions.md` file contains three instructions that will be applied to all Copilot code reviews in the repository.

```text
When performing a code review, respond in Spanish.

When performing a code review, apply the checks in the `/security/security-checklist.md` file.

When performing a code review, focus on readability and avoid nested ternary operators.
```


## MCP servers and agent skills

Copilot code review can use agent skills and MCP servers configured in the repository, when they are relevant to the code being reviewed.

To make these available for Copilot code review on GitHub, configure:

* **Agent skills** in your repository (in `.github/skills`). If you want a skill to target review tasks, use a review-focused skill directory name such as `code-review`. For setup details, see [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).
* **MCP servers** in repository Copilot settings. The GitHub MCP server and Playwright MCP server are enabled by default. For setup details, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

Copilot code review is more likely to use this context when:

* Agent skills directories have review-focused names and descriptions, such as `code-review`, that indicate they are intended for pull request review.
* Your agent skills or custom instructions explicitly tell Copilot code review to use specific MCP context.
* Pull request descriptions reference items available through configured MCP servers, such as issue keys or incident IDs.

To verify which MCP context Copilot code review used for a specific review, check if there are attributions at the bottom of each review comment. These attributions reference the specific agent skill or MCP server that Copilot code review used to generate that comment. You can also open the linked review session from the pull request timeline, then check the session logs to see which MCP servers and tools were called.


In repository settings, **Allow Copilot to use MCP tools when reviewing pull requests** is enabled by default. Disable this setting if you want MCP servers available only for Copilot cloud agent, and not for Copilot code review. For step-by-step instructions, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers#disabling-mcp-tools-for-code-review).

## Customizing Copilot code review's environment

Copilot code review runs in an ephemeral development environment, similar to Copilot cloud agent. You can customize this environment using a GitHub Actions workflow file, in the same way you would for Copilot cloud agent, for example, to preinstall tools or dependencies, or to switch to a different operating system. For more information on how to structure this file, see [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).

You can use either of the following files to configure Copilot code review's environment:

* `.github/workflows/copilot-setup-steps.yml`: If you have already configured this file for Copilot cloud agent, Copilot code review will use the same configuration by default.
* `.github/workflows/copilot-code-review.yml`: We recommend creating this file if you want to configure Copilot code review's environment independently of Copilot cloud agent. If this file is present in your repository, it is used for Copilot code review instead of `copilot-setup-steps.yml`.

You can also configure firewall rules to control the domains and URLs that Copilot code review can access, at both the organization and repository level. These settings are configured separately from Copilot cloud agent's firewall settings, in their own section of the same "Internet access" tab. See [Customize The Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

## Providing feedback on Copilot's reviews

You can provide feedback on Copilot's comments directly within each comment. We use this information to improve the product and the quality of Copilot's suggestions.

To provide feedback on a review comment from Copilot, click the thumbs up (:+1:) or thumbs down (:-1:) button.

![Screenshot showing a Copilot code review comment with the thumbs up and thumbs down buttons.](/assets/images/help/copilot/code-review/feedback-controls@2x.png)

{% endwebui %}

{% vscode %}

### Reviewing a selection of code

You can request an initial review of a highlighted selection of code in Visual Studio Code.

1. In Visual Studio Code, select the code you want to review.
1. Right-click the selected code and choose **Generate Code** > **Review**.
1. VS Code creates review comments in the **Comments** panel and also shows them inline in the editor.

### Reviewing all uncommitted changes

If you have uncommitted changes, you can request a review in Visual Studio Code.

1. In VS Code, click the **Source Control** button in the Activity Bar.
1. At the top of the **Source Control** view, hover over **CHANGES**, then click the 
<svg class="octicon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.5 2H1.5L1 2.5V11.5L1.5 12H4V14.5L4.854 14.854L7.707 12H14.5L15 11.5V2.5L14.5 2ZM14 11H7.5L7.146 11.146L5 13.293V11.5L4.5 11H2V3H14V11Z"/><path d="M7.079 5.205L5.262 7.033L7.078 8.853L6.371 9.56L4.2 7.386V6.679L6.37 4.5L7.079 5.205ZM9.7 4.505L9 5.214L10.826 7.033L8.995 8.853L9.7 9.562L11.889 7.389V6.68L9.7 4.505Z"/></svg>
 **Copilot Code Review - Uncommitted Changes** button.

   ![Screenshot of the "Source Control" view. The code review button is outlined in dark orange.](/assets/images/help/copilot/code-review/vscode-review-button.png)

1. Wait for Copilot to review your changes. This usually takes less than 30 seconds.
1. If Copilot has any comments, they will be shown inline in your file(s), and in the **Problems** tab.

## Working with suggested changes provided by Copilot

Where possible, Copilot's feedback includes suggested changes which you can apply with a single click.

![Screenshot of a comment from Copilot in Visual Studio Code with a suggested change.](/assets/images/help/copilot/code-review/vscode-comment@2x.png)

If you're happy with the change, you can accept a suggestion from Copilot by clicking the **Apply and Go To Next** button. Any changes you apply will not be automatically committed.

If you don't want to apply Copilot's suggested change, click the **Discard and Go to Next** button.

## Providing feedback on Copilot's reviews

You can provide feedback on Copilot's comments directly within each comment. We use this information to improve the product and the quality of Copilot's suggestions.

To provide feedback, hover over the comment and click the thumbs up or thumbs down button.

![Screenshot of a comment from Copilot in Visual Studio Code with feedback buttons displayed. The buttons are outlined in dark orange.](/assets/images/help/copilot/code-review/vscode-comment-feedback@2x.png)

## Customizing Copilot's reviews with custom instructions

You can customize Copilot code review by adding custom instructions to your repository. Repository custom instructions can either be repository wide or path specific.

Use `.github/copilot-instructions.md` for repository-wide review guidance that should apply across the entire codebase. This is a good place to describe organization-wide expectations, such as coding standards, review criteria, or general practices that Copilot should consider in every review.

Use an `AGENTS.md` file in the root of your repository to provide additional repository context that helps Copilot better understand how your project works. For example, you can explain which patterns are intentional, which parts of the codebase need closer scrutiny, and what your team considers good architecture, testing, and implementation practices. This helps make reviews more relevant and aligned with the way your team builds software.

Use `.github/instructions/**/*.instructions.md` files for path-specific instructions that only apply when reviewing matching files. This is useful when different parts of the repository follow different conventions, require specialized checks, or need review guidance tailored to a particular language, framework, or subsystem.

For more information, see [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

> [!NOTE]
> When reviewing a pull request, Copilot reads repository custom instructions, agent instructions, and agent skills from the head branch (the branch with your changes), not the base branch. For example, when merging `my-feature-branch` into `main`, Copilot uses the instructions and skills in `my-feature-branch`, so you can test changes to them in the same pull request without merging them first.



### Example

This example of a `.github/copilot-instructions.md` file contains three instructions that will be applied to all Copilot code reviews in the repository.

```text
When performing a code review, respond in Spanish.

When performing a code review, apply the checks in the `/security/security-checklist.md` file.

When performing a code review, focus on readability and avoid nested ternary operators.
```


{% endvscode %}

{% visualstudio %}

## Prerequisite

To use Copilot code review, you must use Visual Studio version 17.14 or later. See the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/).

## Using Copilot code review

These instructions explain how to use Copilot code review in Visual Studio. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1. In the Git Changes window, click **Review changes with Copilot**.
   This button appears as a comment icon with a sparkle.
1. Copilot will begin reviewing your changes. After a few moments, a link showing the number of code review comments appears in the Git Changes window.
1. Click the link to view and navigate the comments. If no issues are found, you'll see the message:
   Copilot did not comment on any files.
1. Copilot displays comments in your code with a summary of each potential issue. You can:

   * Review and make changes based on the suggestions.
   * Dismiss a comment using the downward arrow in the top-right corner of the comment box.

1. To remove all review comments, click {% octicon "x" aria-label="The X icon" %} next to the code review link in the Git Changes window.

For more information on enabling and configuring Copilot code review in Visual Studio, see [Review local changes with Copilot Chat](https://learn.microsoft.com/en-us/visualstudio/version-control/git-make-commit?view=vs-2022#review-local-changes-with-copilot-chat) in the Visual Studio documentation.

{% endvisualstudio %}

{% mobile %}

## Using Copilot code review

These instructions explain how to use Copilot code review in GitHub Mobile. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1. In GitHub Mobile, open a pull request.
1. Scroll down to the **Reviews** section and expand it.
1. Click **Request Reviews**.
1. Add Copilot as a reviewer, then click **Done**.

Copilot will review the changes and provide feedback.

{% endmobile %}

{% xcode %}

## Prerequisite

To use Copilot code review in Xcode, you must use version 0.41.0 or later of the GitHub Copilot Chat extension. Download the latest release from the [`github/CopilotForXcode` repository](https://github.com/github/CopilotForXcode/releases/latest).

## Using Copilot code review

These instructions explain how to use Copilot code review in Xcode. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1. In Xcode, make some changes to one or more files.
1. Open the Copilot chat window by clicking **Editor** in the menu bar, clicking **GitHub Copilot** then **Open Chat**.
1. Near the bottom right of the prompt box in the Copilot chat window, click the **Code Review** button (a speech bubble icon).

   ![Screenshot of the Copilot chat window in Xcode, with the 'Code Review' button outlined in dark orange.](/assets/images/help/copilot/code-review/xcode-ccr-button.png)

1. Click either **Review Staged Changes** or **Review Unstaged Changes**.
1. A list of files containing changes is displayed in the chat window. Click the check boxes to deselect any files you don't want Copilot to review.
1. Click **Continue** to start the review process.
1. If Copilot finds things to comment on, it displays a **Reviewed Changes** list in the chat window, listing the files it has commented on. Click a file in this list to see the comments.

   Each comment is shown in a popup, overlaid over the editor.

   ![Screenshot of a Copilot code review review comment.](/assets/images/help/copilot/code-review/xcode-review-popup.png)

1. If there is more than one comment in the file, use the up and down arrows, at the top right of the popup, to navigate between comments.
1. Copilot may suggest replacement code. You can apply the suggested change by clicking **Accept** or reject it by clicking **Dismiss**.
1. Click another file in the **Reviewed Changes** list in the chat window, to see the review comments for another file.

{% endxcode %}

{% jetbrains %}

## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).


* **Compatible JetBrains IDE**. To use GitHub Copilot in JetBrains, you must have a compatible JetBrains IDE installed. GitHub Copilot is compatible with the following IDEs:

  * IntelliJ IDEA (Ultimate, Community, Educational)
* Android Studio
* CLion
* Code With Me Guest
* DataGrip
* DataSpell
* GoLand
* JetBrains Client
* MPS
* PhpStorm
* PyCharm (Professional, Community, Educational)
* Rider
* RubyMine
* RustRover
* WebStorm

See the [JetBrains IDEs](https://www.jetbrains.com/products/?ref_product=copilot&ref_type=engagement&ref_style=button) tool finder to download.


* **Latest version of the GitHub Copilot extension**. See the [GitHub Copilot plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot?ref_product=copilot&ref_type=engagement&ref_style=text) in the JetBrains Marketplace. For installation instructions, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains).
* **Sign in to GitHub in your JetBrains IDE**. For authentication instructions, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains#installing-the-github-copilot-plugin-in-your-jetbrains-ide).


## Using Copilot code review

These instructions explain how to use Copilot code review in JetBrains IDEs. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1. In a JetBrains IDE, make some changes to one or more files.
1. Open the "Commit" tool window on the left-hand side.
1. Above the commit message input field, click **Copilot: Review Code Changes**. This button appears as a magnifying glass icon with a sparkle.
1. Copilot will begin reviewing your changes.
1. Copilot displays comments in your code with a summary of each potential issue. You can:

   * Review and make changes based on the suggestions.
   * Dismiss a comment by clicking **Discard**.
1. If there is more than one comment, use the up and down arrows, at the top right of the popup, to navigate between comments.

{% endjetbrains %}

{% cli %}

## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **GitHub CLI**. You must have the GitHub CLI installed and authenticated. See [Quickstart](https://docs.github.com/en/github-cli/github-cli/quickstart).

## Using Copilot code review

These instructions explain how to use Copilot code review with the GitHub CLI. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

### Requesting a review when creating a pull request

You can request a review from Copilot when creating a new pull request using `gh pr create`:

```shell copy
gh pr create --reviewer @copilot
```

You can also select Copilot interactively from the searchable reviewer prompt during `gh pr create`.

```text
? Reviewers  [Use arrows to move, space to select, <right> to all, <left> to none, type to filter]
  [ ]  Search (7472 more)
  [x]  monalisa (Mona Lisa)
> [x]  Copilot (AI)
```

### Requesting a review on an existing pull request

To request a review from Copilot on an existing pull request, use `gh pr edit`. If you are not on the pull request's branch, specify the pull request number:

```shell copy
gh pr edit PR-NUMBER --add-reviewer @copilot
```

Replace `PR-NUMBER` with the number of the pull request you want reviewed. If you have the pull request's branch checked out, you can omit the number.

{% endcli %}
