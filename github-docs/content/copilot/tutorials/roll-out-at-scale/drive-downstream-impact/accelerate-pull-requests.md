# Accelerating pull requests in your company with GitHub Copilot

The guide is inspired by GitHub's [Engineering System Success Playbook](https://resources.github.com/engineering-system-success-playbook/) (ESSP), which recommends strategies and metrics for driving improvements in engineering systems.

If you're starting a rollout of Copilot, we recommend defining your goals, planning your rollout accordingly, and communicating the goals clearly to staff. See [Achieve Company Goals](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/drive-downstream-impact/achieve-company-goals).


## 1. Identify barriers to success

The first step recommended by the ESSP is to develop a clear understanding of the obstacles preventing improvements in your company. By understanding your current baseline, your desired future state, and the barriers preventing you from making progress, you can ensure changes are targeted and effective.


Teams often experience delays in merging pull requests due to lengthy review cycles. These delays often stem from:

* Complex code changes that are difficult to understand
* Inconsistent code formatting that makes reviews challenging
* A general lack of context provided with the changes
* Social factors that contribute to slow or hard-to-address reviews

Reviewers can also easily miss small errors that may lead to production issues.

This leads to bottlenecks in the development process and slows down the overall delivery and quality of features.

## 2. Evaluate your options

The next step is to evaluate and agree on solutions to address the barriers you identified in step one. In this guide, we'll focus on the impact GitHub Copilot can have on the goal you've identified. Successful rollouts of a new tool also require changes to culture and processes.

Run trials of new tools and processes with pilot groups to gather feedback and measure success. For training resources and metrics to use during trials, see [3. Implement changes](#3-implement-changes) and [Metrics to watch](#metrics-to-watch) sections.


<a href="https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Contact Sales</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### How Copilot can help

GitHub Copilot offers a suite of features designed to accelerate the pull request review process, enhance code quality, and improve collaboration, ultimately leading to faster merge times.

By leveraging Copilot's capabilities, teams can streamline their workflows, reduce friction, and ensure consistent, high-quality code.

#### Generates complete and helpful PR summaries

Copilot can automatically generate clear and concise PR summaries, saving developers time and ensuring that the purpose and changes of the PR are easily understood by reviewers. This reduces the likelihood of misunderstandings and speeds up the review process.

#### Assists reviewers during their review process

GitHub Copilot can be used as a powerful PR review companion.

* Copilot can help explain complex code changes so that reviewers more quickly understand what the PR is contributing.
* Copilot can provide repository-wide, context-aware suggestions and potential code improvements directly within the pull request review interface on GitHub, helping reviewers catch potential issues and offer constructive feedback more efficiently.
* Copilot can help reviewers draft and write clear, consistent, and effective review comments.

#### Reviews based on organization guidelines

* Copilot can review code changes in your IDE before opening a pull request, or be assigned as reviewer to a pull request.
* With rulesets, you can set up Copilot to systematically review pull requests based on custom criteria.
* With custom instructions for reviews, Copilot can enforce organizational coding standards and best practices, automatically flagging potential violations and suggesting fixes.

These features ensure consistency across the codebase and help you catch errors early in the development process, reducing the need for manual code reviews and saving time for developers and reviewers.

#### Suggests code fixes

Based on a pull request review comment, Copilot can help pull request authors quickly implement the required code changes to resolve the review.

### Cultural considerations

Alongside your rollout of GitHub Copilot, address any social or cultural factors that could prevent you from achieving your goals.

The following examples are drawn from the "Anti-Patterns" section in the ESSP.


* Teams might **wait too long to release**, deploying large batches of code at once. This could be caused by a fear of destabilization with frequent releases, a lack of CI/CD pipeline maturity, or strict compliance requirements.
* Developers might **spend too long perfecting code** or adding unnecessary features. This could be caused by a culture of perfectionism or a lack of effective prioritization.
* Developers might **build overly complex solutions** for simple problems. This could be caused by a desire to future-proof unnecessarily, or pressure to add value through complexity.

## 3. Implement changes

When you've identified the right approach to overcome your barriers, scale the solutions you identified. For a successful rollout of a new tool or process, assign ownership to each part of the rollout, communicate transparently about your goals, provide effective training, and measure your outcomes.

This section provides example scenarios, best practices, and resources for developers. Use this section to **plan communications and training sessions** to help employees use Copilot in a way that aligns with your goal.


* [Create helpful pull request summaries](#create-helpful-pull-request-summaries)
* [Use Copilot as a review assistant](#use-copilot-as-a-review-assistant)
* [Add Copilot as a reviewer](#add-copilot-as-a-reviewer)
* [Get help implementing review comments](#get-help-implementing-review-comments)
* [Best practices for developers](#best-practices-for-developers)
* [Resources](#resources)

### Create helpful pull request summaries

1. When creating a pull request, click the Copilot icon in the "Add a description" field, then click **Summary**.
1. Copilot will scan through the pull request and provide an overview of the changes made in prose, as well as a bulleted list of changes with the files that they impact.
1. Check you're happy with Copilot's description.
1. When reviewers come to your pull request, they'll have all the context they need to leave a review.

### Use Copilot as a review assistant

When jumping into a pull request as a reviewer, you can use Copilot to speed up your review.

1. Use Copilot to **understand the changes in the pull request**.

   * Ask Copilot to summarize the changes made to a file, particularly helpful for longer diffs. You can pick a specific file from the diff by clicking {% octicon "kebab-horizontal" aria-label="Show options" %} on the top-right corner of the file.

     ![Screenshot of a pull request "files changed" tab. The "Ask Copilot about this diff" option is highlighted in red.](/assets/images/help/copilot/ask-to-explain.png)

   * For changes in specific lines, highlight the lines you want to better understand and ask Copilot to explain the changes to you. You can highlight a set of lines by clicking on the uppermost line number first, holding your SHIFT key, and then clicking on the lowermost line of the diff.

     ![Screenshot of a pull request "files changed" tab. A selection of lines is highlighted and an "Explain" option is displayed in a dropdown.](/assets/images/help/copilot/highlight-lines.png)

1. **Collaborate on your PR review** with Copilot. Don't forget to attach the specific file diffs to the conversation before prompting Copilot.

   * You can ask Copilot for its own opinion on the PR changes by asking: `Provide your judgement as a PR Reviewer, both for functional and non-functional aspects that these changes bring`. Note how this prompt asks Copilot to consider both functional and non-functional aspects of the code.

   * For your own PR review comments, ask Copilot for a second opinion: `As my peer reviewer on this pull request, give me your feedback on my own review: YOUR-REVIEW-COMMENT. Do you think it's pertinent? Am I missing something?`

1. Collaborate with Copilot to **draft and refine your review comments**.

   * After planning the review with Copilot, you can ask to list the comments that you should provide: `Make a list of review comments to add to the PR and tell me exactly in which file diff and lines each comment should be added`.
   * You can also ask Copilot to create a first draft of a review comment you have in mind or refine a comment before you post it: `Help me draft review comments as discussed` or `Refine this review comment to make it clear, concise, and actionable`.

### Add Copilot as a reviewer

To reduce review times and merge pull requests faster, use Copilot code reviews systematically: first in the IDE before opening the pull request, then on the PR in GitHub.

Using Copilot code review does not replace the need for human code review. However, following the steps above can help humans complete their reviews faster.

* **Developers** should request a review of all their changes using Copilot code review before opening a pull request.
* **Administrators** should set up repository or organization rulesets to automatically add Copilot as a reviewer on any pull request targeting protected branches.
* **Team leads** should capture their team's standard style and rules and set them as custom instructions for the organization so that Copilot can leverage them in reviews.
  * Ensure your custom instructions capture a minimum set of styling recommendations that make code more readable, which will help during the pull request review process.
  * To reduce the amount of PR review comments due to styling issues, set the same recommendations in Copilot instructions at the repository and organization level. This way, the code generated by Copilot will conform to these guidelines.

### Get help implementing review comments

Pull request authors can speed up resolution of PR review comments by quickly implementing fixes with Copilot's assistance.

* For any review comments left by Copilot itself, either commit the proposed fix directly, or edit it in Copilot Workspace before committing.
* For any review comments left by peers, navigate to the file diff related to the PR review comment and attach the diff to a Copilot Chat conversation. Then, copy paste the review comment with a prompt like this: `Suggest a fix for this review comment:`
* If you are using VS Code, ask GitHub Copilot in agent mode to implement the required changes from the review comment.

### Best practices for developers

Developers **should**:

* Request Copilot's review in your IDE before pushing to catch and resolve issues early.
* Use Copilot to plan and refine your own PR review comments to help PR authors understand and resolve issues.
* Attach relevant diff context, including specific lines of code, to your conversations with Copilot.

Developers **should not**:

* Apply Copilot's suggestions without testing.
* Rely solely on Copilot for reviews.
* Neglect code readability.

### Resources

* [Create A Pr Summary](https://docs.github.com/en/copilot/how-tos/copilot-on-github/copilot-for-github-tasks/create-a-pr-summary)
* [Use Code Review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
* [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions)
* [Configure Automatic Review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review)
* [Add Organization Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions)

## Metrics to watch

To assess trials of new tools and make sure your full rollouts are delivering consistent improvements, monitor results and make adjustments when needed. We recommend considering the key zones of **quality, velocity, and developer happiness**, and how these zones come together to contribute to business outcomes.

Here are some metrics to assess Copilot's impact on this specific goal.


* **Developer satisfaction**: Use developer surveys to measure satisfaction with engineering tooling.
* **Pull requests merged per developer**: You can use the `pull request` webhook, ensuring `action` is `closed` and the `merged` property inside `pull request` object is `true`.
* **Pull requests lead time**: Measure the average length of time between PR creation and merge.
* **Pull request defect escape rate**: Measure the rate of deployment problems caused by poorly reviewed PRs.
* **Pull request review comment type**: Download PR review comments, categorize using AI-based topic classification, and track the comments made by human reviewers on design, scalability, and strategy.
