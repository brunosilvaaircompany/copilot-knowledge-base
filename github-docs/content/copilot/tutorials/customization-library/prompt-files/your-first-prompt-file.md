# Your first prompt file

> [!NOTE]
> * Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
 See [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization#about-prompt-files).
> * For community-contributed examples of prompt files for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://awesome-copilot.github.com) site.


## About customizations

You can customize GitHub Copilot's responses using two types of files:

* **Custom instructions** provide ongoing guidance for how GitHub Copilot should behave across all your interactions. For an introductory example, see [Your First Custom Instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions).
* **Prompt files (public preview)** define reusable prompts for specific tasks that you can invoke when needed. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.


## Your first prompt file

Start with this simple prompt file that helps you write clear, well-documented code explanations.

### Code explanation prompt

```text copy
---
agent: 'agent'
description: 'Generate a clear code explanation with examples'
---

Explain the following code in a clear, beginner-friendly way:

Code to explain: ${input:code:Paste your code here}
Target audience: ${input:audience:Who is this explanation for? (e.g., beginners, intermediate developers, etc.)}

Please provide:

* A brief overview of what the code does
* A step-by-step breakdown of the main parts
* Explanation of any key concepts or terminology
* A simple example showing how it works
* Common use cases or when you might use this approach

Use clear, simple language and avoid unnecessary jargon.
```

## Test it out

1. Save the prompt file above as `explain-code.prompt.md` in your `.github/prompts` folder.
1. In Visual Studio Code, display the Copilot Chat view and enter `/explain-code`.

   Copilot will switch to agent mode, if this is not already selected, and will prompt you to enter some code and an audience type.

1. Enter:

   ```text copy
   The code is `function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }`. The audience is beginners.
   ```

## Further reading

* [Use prompt files in Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the Visual Studio Code documentation - Information on how to create and use prompt files
* [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization) - Overview of response customization in GitHub Copilot
* [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.prompts.md) - Repository of community-contributed custom prompt files and other customizations for specific languages and scenarios
