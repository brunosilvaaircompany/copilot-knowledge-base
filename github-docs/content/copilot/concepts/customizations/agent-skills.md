## About agent skills

Agent skills are folders of instructions, scripts, and resources that Copilot can load when relevant to improve its performance in specialized tasks. The Agent Skills specification is an [open standard](https://github.com/agentskills/agentskills), used by a range of different AI systems.

You can create your own skills to teach Copilot to perform tasks in a specific, repeatable way—or use skills shared online, for example in the [`anthropics/skills`](https://github.com/anthropics/skills) repository or GitHub's community-created [`github/awesome-copilot`](https://github.com/github/awesome-copilot) collection. 

For example, a skill for writing release notes can include your team's template, a script for gathering changes, and instructions for grouping them. The agent loads those resources when working on release notes, rather than including the whole workflow in every conversation.

## Where you can use agent skills

You can use agent skills with:

* The GitHub Copilot app.
* GitHub Copilot CLI.
* Copilot cloud agent and Copilot code review on GitHub.com.
* Agent mode in Visual Studio Code, Visual Studio, and JetBrains IDEs.

IDE support depends on the version you use. See [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).

## Finding and storing skills

You can also use `gh skill` in GitHub CLI to discover and install skills from GitHub repositories. For more information, see [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills#managing-skills-with-github-cli).

Copilot supports:

* Project skills, stored in your repository (`.github/skills`, `.claude/skills`, or `.agents/skills`)
* Personal skills, stored in your home directory and shared across projects (`~/.copilot/skills` or `~/.agents/skills`)

Supported locations depend on the surface. Use its setup guide to choose a location rather than assuming that a personal skill is available to an agent running in the cloud.

## Next steps

To create or add agent skills, see:

* [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills)
* [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills)
* [Customize GitHub Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app)
* [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
