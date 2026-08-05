# Fixing code quality findings in recently merged files

> [!TIP]
> If you're new to Code Quality, see [Raise Your Quality Rating?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Fix Recent Merges Walkthrough Tip](https://docs.github.com/en/code-security/tutorials/improve-code-quality/raise-your-quality-rating?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-recent-merges-walkthrough-tip) for a guided walkthrough of reviewing and improving your repository's quality scores.

## How Code Quality analyzes recently merged files

Code Quality runs an AI-powered scan on recently changed files after code is merged to your default branch. This scan uses a large language model to report up to 5 findings per file in up to 5 files—across all languages, without being limited to predefined rules.

> [!NOTE] 
> The "AI findings" page for recently changed files is currently in public preview and subject to change.


## Viewing recent suggestions

1. Navigate to the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of your repository.

1. Click to expand **{% octicon "code-review" aria-hidden="true" aria-label="code review" %} Code quality**, then click **AI findings**.


   On the **AI findings** page, each file is listed with the number of quality problems identified and when the file was pushed to the default branch. Click a file name to view the quality problems and their suggested fixes.

   ![Screenshot of the "AI findings" view for code quality.](/assets/images/help/code-quality/ai-suggestions-repo.png)

> [!NOTE]
> This view is empty if the repository is inactive or if LLM analysis could not suggest ways to improve code quality in recent pushes to the default branch.

## Resolving a finding

You can delegate remediation work to Copilot or open a pull request yourself.

### Delegate to Copilot

You need a Copilot license to assign work to Copilot cloud agent.
<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-findings-merge-copilot-signup" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for Copilot</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

1. Select the file or files you want to include for the fix, then click **Assign to Copilot**.
1. There is a delay while Copilot sets up the work. When the pull request is open and work is in progress, a banner is displayed with a link to the pull request.
1. Track Copilot's work:
   * In the pull request, the summary is updated as work progresses.
   * Using the [agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-findings-merge-agent-page) or session logs. See [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).

### Open a pull request

1. Click the file name to view details of the quality problems detected.
1. Review the problems and suggested fixes.
1. Expand the drop-down and then click {% octicon "git-pull-request" aria-hidden="true" aria-label="Pull request" %} **Open pull request**.

   ![Screenshot of the "AI findings" view for code quality.](/assets/images/help/code-quality/ai-suggestions-repo-fixes.png)

1. Click **Open pull request** to open a dialog of commit options.
1. Click **Commit change** to create a pull request with the fixes.

> [!NOTE]
> When you open a pull request yourself, you can only commit fixes to one file at a time. To fix multiple files at once, you must delegate the work to Copilot.

## Further reading

* [Fix Backlog Findings](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/fix-backlog-findings)
