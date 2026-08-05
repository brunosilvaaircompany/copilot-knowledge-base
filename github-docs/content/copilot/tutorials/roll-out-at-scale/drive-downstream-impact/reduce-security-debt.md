# Reducing security debt in your company with GitHub Copilot

The guide is inspired by GitHub's [Engineering System Success Playbook](https://resources.github.com/engineering-system-success-playbook/) (ESSP), which recommends strategies and metrics for driving improvements in engineering systems.

If you're starting a rollout of Copilot, we recommend defining your goals, planning your rollout accordingly, and communicating the goals clearly to staff. See [Achieve Company Goals](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/drive-downstream-impact/achieve-company-goals).


## 1. Identify barriers to success

The first step recommended by the ESSP is to develop a clear understanding of the obstacles preventing improvements in your company. By understanding your current baseline, your desired future state, and the barriers preventing you from making progress, you can ensure changes are targeted and effective.


Development teams often focus on speed and functionality to deliver new features and keep applications running smoothly. Over time, small issues can accumulate, such as:

* Known security weaknesses that remain unfixed
* Reliance on older software components with potential flaws
* Delays in addressing discovered problems

This creates a **security debt**, a significant backlog of issues.

Security debt carries real risks. The longer it goes unaddressed, the larger and more costly it becomes. Large security debt leaves systems vulnerable to attacks, exposes sensitive data, and erodes customer trust.

The challenge is balancing rapid development with maintaining a secure and stable software environment.

## 2. Evaluate your options

The next step is to evaluate and agree on solutions to address the barriers you identified in step one. In this guide, we'll focus on the impact GitHub Copilot can have on the goal you've identified. Successful rollouts of a new tool also require changes to culture and processes.

Run trials of new tools and processes with pilot groups to gather feedback and measure success. For training resources and metrics to use during trials, see [3. Implement changes](#3-implement-changes) and [Metrics to watch](#metrics-to-watch) sections.


<a href="https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Contact Sales</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### How Copilot can help

Copilot integrates security considerations directly into the development lifecycle. This helps developers proactively identify and address potential vulnerabilities while keeping projects up-to-date.

Copilot reduces security vulnerabilities throughout the software development lifecycle.

#### During development

Copilot reviews code as you write it. It uses its understanding of common security flaws to flag areas that might be vulnerable to exploitation. This real-time analysis surfaces hidden vulnerabilities that might be missed during standard development or initial security reviews.

When Copilot identifies issues, it suggests code changes to fix vulnerabilities. This empowers you to address weaknesses early and prevent security debt from accumulating.

#### Ongoing maintenance

Copilot integrates with GitHub's code scanning capabilities to keep your existing codebase secure. When code scanning identifies a security alert, Copilot Autofix analyzes it and provides targeted recommendations to resolve it.

These suggested fixes reduce the time you spend researching vulnerabilities and determining how to address them. This helps you resolve security alerts more efficiently and prevents ongoing security debt.

### Cultural considerations

Alongside your rollout of GitHub Copilot, address any social or cultural factors that could prevent you from achieving your goals.

The following examples are drawn from the "Anti-Patterns" section in the ESSP.


* Teams might **ignore or defer security debt**. This allows inefficient and vulnerable systems to persist. This could be caused by a deadline-driven focus on features or a lack of education about the long-term impact of security debt.
* Teams might **build overly complex solutions** for simple problems. This makes code harder to maintain and security issues harder to detect. This could be caused by a desire to future-proof unnecessarily or by pressure to add value through complexity.

## 3. Implement changes

When you've identified the right approach to overcome your barriers, scale the solutions you identified. For a successful rollout of a new tool or process, assign ownership to each part of the rollout, communicate transparently about your goals, provide effective training, and measure your outcomes.

This section provides example scenarios, best practices, and resources for developers. Use this section to **plan communications and training sessions** to help employees use Copilot in a way that aligns with your goal.


* [Analyze your code for security vulnerabilities](#analyze-your-code-for-security-vulnerabilities)
* [Use Copilot Autofix for code scanning alerts](#use-copilot-autofix-for-code-scanning-alerts)
* [Best practices for developers](#best-practices-for-developers)
* [Resources for developers](#resources-for-developers)

### Analyze your code for security vulnerabilities

Depending on the size of your codebase, Copilot may not be able to analyze your entire project while you are writing code. This is due to context constraints. However, you can ask it to analyze specific files for insecure code practices.

1. Open the files to analyze in Visual Studio Code.
1. In Copilot Chat, ask: `Analyze this code for potential security vulnerabilities and suggest fixes`

   Use the `#file` chat variable to specifically include a file's content in the prompt. You can also use prompt files and custom instructions to guide Copilot's responses.

1. Copilot Chat analyzes the code, identifies security vulnerabilities, and suggests fixes.
1. Review the suggested changes and apply them as appropriate.

Other examples of prompts:
* `Are there any security vulnerabilities in my code? If so, can you explain them and suggest fixes?`
* `Does this code follow secure code best practices? If not, what specific improvements can I make?`
* `What are the potential security risks in this code if it were deployed to production? How can I mitigate them?`

### Use Copilot Autofix for code scanning alerts

Copilot Autofix is a part of GitHub Code Security that suggests potential fixes to code scanning alerts. It is available in public repositories and repositories with a license for GitHub Code Security.

When you run a code scan on a repository, potential issues are raised as code scanning alerts. Resolve the alerts by following these steps:

1. Open an alert on GitHub.
1. Click **Generate fix**. This displays when Copilot can resolve the alert.
1. Copilot Autofix generates a potential fix and shows you the code changes in the alert. You can commit this code change to a new branch or an existing branch.
1. Test the code. Then open a pull request to move the changes to the main branch.
1. After you move the changes to the main branch and code scanning verifies the fix, the alert closes automatically.

### Best practices for developers

Developers **should**:

* **Use Copilot Chat regularly to analyze code snippets for vulnerabilities**. Make it a habit to check code for security issues before committing changes.
* **Use Copilot Autofix for code scanning alerts**. When alerts appear, use Copilot Autofix as a first step to quickly address them.
* **Provide clear and specific prompts to Copilot Chat**. The more detailed your request, the better Copilot can analyze the code and suggest relevant fixes. For example, include the programming language and specific areas of concern.
* **Combine Copilot with existing security tools**. Use Copilot as an additional layer of security analysis, not as a replacement for dedicated security scanners and practices.

Developers **should not**:

* **Automatically accept Copilot's security suggestions**. Always review and test the suggested code changes to ensure they are appropriate and effective.
* **Rely solely on Copilot for comprehensive security audits**. Copilot is a helpful tool, but it should not replace thorough security reviews and penetration testing.
* **Ignore code scanning alerts**. Address all alerts promptly, even if they seem minor, to prevent the accumulation of security debt.
* **Use Copilot as an excuse to avoid learning secure coding practices**. Continue to educate yourself and your team on security best practices.
* **Assume Copilot will catch every vulnerability**. Security is an ongoing process, and vigilance is always necessary.
* **Use Copilot to bypass security policies**. Adhere to your organization's security protocols. Use Copilot as a tool to enhance them, not circumvent them.

### Resources for developers

* [Copilot Chat in GitHub](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [Find Vulnerabilities](https://docs.github.com/en/copilot/tutorials/copilot-cookbook/analyze-security/find-vulnerabilities)
* [GitHub Skills - Getting Started with GitHub Copilot](https://github.com/skills/getting-started-with-github-copilot)

## Metrics to watch

To assess trials of new tools and make sure your full rollouts are delivering consistent improvements, monitor results and make adjustments when needed. We recommend considering the key zones of **quality, velocity, and developer happiness**, and how these zones come together to contribute to business outcomes.

Here are some metrics to assess Copilot's impact on this specific goal.


* **Security debt ratio**. Use security overview to see if the number of alerts falls over time.
* **Time to remediate security issues**. Use security overview to see if the time to remediate security issues falls over time.

See [Assessing Code Security Risk](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/assessing-code-security-risk).
