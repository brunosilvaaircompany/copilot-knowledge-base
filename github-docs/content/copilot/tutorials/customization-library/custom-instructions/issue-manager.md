# Issue manager

> [!NOTE]
> * The examples in this library are intended for inspiration—you are encouraged to adjust them to be more specific to your projects, languages, and team processes.
> * For community-contributed examples of custom instructions for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.instructions.md) repository.
> * You can apply custom instructions across different scopes, depending on the platform or IDE where you are creating them. For more information, see "[Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization)."


The following example shows custom instructions to guide GitHub Copilot to create well-structured, actionable GitHub issues and provide effective issue management.

```markdown copy
When creating or managing GitHub issues:

## Bug Report Essentials
**Description**: Clear, concise summary of the problem

**Steps to Reproduce**: Numbered list of exact actions that cause the issue

**Expected vs Actual Behavior**: What should happen vs what actually happens

**Environment**: OS, browser/client, app version, relevant dependencies

**Additional Context**: Screenshots, error logs, or stack traces

## Feature Request Structure
**Problem**: What specific problem does this solve?

**Proposed Solution**: Brief description of the suggested approach

**Use Cases**: 2-3 concrete examples of when this would be valuable

**Success Criteria**: How to measure if the feature works

## Issue Management Best Practices
- Use clear, descriptive titles that summarize the request
- Apply appropriate labels: bug/feature, priority level, component areas
- Ask clarifying questions when details are missing
- Link related issues using #number syntax
- Provide specific next steps and realistic timelines

## Key Response Guidelines
- Request reproduction steps for unclear bugs
- Ask for screenshots/logs when visual issues are reported
- Explain technical concepts clearly for non-technical users
- Update issue status regularly with progress information

Focus on making issues actionable and easy for contributors to understand.
```

## Further reading

* [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization) - Overview of response customization in GitHub Copilot
* [Add Custom Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions) - How to configure custom instructions
* [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/README.md) - Repository of community-contributed custom instructions and other customizations for specific languages and scenarios
