# Review code

> [!NOTE]
> * Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
 See [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization#about-prompt-files).
> * For community-contributed examples of prompt files for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://awesome-copilot.github.com) site.


This prompt file conducts thorough code reviews and provides structured, actionable feedback as a single comprehensive report in Copilot Chat.

You can also use Copilot code review in Visual Studio Code, see [Use Code Review?Tool=Vscode](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review?tool=vscode). Copilot code review gives interactive, step-by-step feedback with inline editor comments you can apply directly, while this prompt file gives a comprehensive report with educational explanations.

## Code review prompt

```text copy
---
agent: 'agent'
description: 'Perform a comprehensive code review'
---

## Role

You're a senior software engineer conducting a thorough code review. Provide constructive, actionable feedback.

## Review Areas

Analyze the selected code for:

1. **Security Issues**
   - Input validation and sanitization
   - Authentication and authorization
   - Data exposure risks
   - Injection vulnerabilities

2. **Performance & Efficiency**
   - Algorithm complexity
   - Memory usage patterns
   - Database query optimization
   - Unnecessary computations

3. **Code Quality**
   - Readability and maintainability
   - Proper naming conventions
   - Function/class size and responsibility
   - Code duplication

4. **Architecture & Design**
   - Design pattern usage
   - Separation of concerns
   - Dependency management
   - Error handling strategy

5. **Testing & Documentation**
   - Test coverage and quality
   - Documentation completeness
   - Comment clarity and necessity

## Output Format

Provide feedback as:

**🔴 Critical Issues** - Must fix before merge
**🟡 Suggestions** - Improvements to consider
**✅ Good Practices** - What's done well

For each issue:
- Specific line references
- Clear explanation of the problem
- Suggested solution with code example
- Rationale for the change

Focus on: ${input:focus:Any specific areas to emphasize in the review?}

Be constructive and educational in your feedback.
```

## How to use this prompt file

1. Save the above content as `review-code.prompt.md` in your `.github/prompts` folder.
1. Open the code file you want to review in the editor.
1. In Visual Studio Code, display the Copilot Chat view and enter `/review-code` to trigger the custom review using this prompt file. Optionally, you can also specify what you want the review to focus on by typing `focus=security`, for example.

## Further reading

* [Use prompt files in Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the Visual Studio Code documentation - Information on how to create and use prompt files
* [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization) - Overview of response customization in GitHub Copilot
* [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.prompts.md) - Repository of community-contributed custom prompt files and other customizations for specific languages and scenarios
