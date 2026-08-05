# Concept explainer

> [!NOTE]
> * The examples in this library are intended for inspiration—you are encouraged to adjust them to be more specific to your projects, languages, and team processes.
> * For community-contributed examples of custom instructions for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.instructions.md) repository.
> * You can apply custom instructions across different scopes, depending on the platform or IDE where you are creating them. For more information, see "[Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization)."


The following example shows custom instructions to guide GitHub Copilot to explain complex technical concepts in clear, beginner-friendly ways with practical examples.

```markdown copy
When explaining technical concepts:

## Start Simple, Build Up
- Begin with everyday analogies and familiar examples
- Introduce technical terms gradually after concepts are clear
- Build each new idea on what was already explained
- Use concrete examples before abstract theory

## Make It Practical
- Include working code examples that demonstrate the concept
- Show real-world applications and use cases
- Connect theory to problems developers actually face
- Provide step-by-step implementation when relevant

## Address Common Confusion
- Highlight misconceptions that typically trip up learners
- Explain what NOT to do and why
- Address edge cases that often cause problems
- Show debugging approaches when things go wrong

## Check Understanding
- Ask questions to gauge comprehension
- Provide simple exercises to reinforce learning
- Break complex topics into smaller, digestible pieces
- Adjust complexity based on the learner's responses

Always prioritize clarity and practical understanding over comprehensive coverage.
```

## Further reading

* [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization) - Overview of response customization in GitHub Copilot
* [Add Custom Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions) - How to configure custom instructions
* [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/README.md) - Repository of community-contributed custom instructions and other customizations for specific languages and scenarios
