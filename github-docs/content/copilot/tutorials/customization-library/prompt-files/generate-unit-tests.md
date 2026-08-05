# Generate unit tests

> [!NOTE]
> * Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
 See [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization#about-prompt-files).
> * For community-contributed examples of prompt files for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://awesome-copilot.github.com) site.


This prompt file generates focused unit tests for specific functions or methods, emphasizing practical test cases and maintainable code.

## Unit test generation prompt

```text copy
---
agent: 'agent'
description: 'Generate unit tests for selected functions or methods'
---

## Task

Analyze the selected function/method and generate focused unit tests that thoroughly validate its behavior.

## Test Generation Strategy

1. **Core Functionality Tests**
   - Test the main purpose/expected behavior
   - Verify return values with typical inputs
   - Test with realistic data scenarios

2. **Input Validation Tests**
   - Test with invalid input types
   - Test with null/undefined values
   - Test with empty strings/arrays/objects
   - Test boundary values (min/max, zero, negative numbers)

3. **Error Handling Tests**
   - Test expected exceptions are thrown
   - Verify error messages are meaningful
   - Test graceful handling of edge cases

4. **Side Effects Tests** (if applicable)
   - Verify external calls are made correctly
   - Test state changes
   - Validate interactions with dependencies

## Test Structure Requirements

- Use existing project testing framework and patterns
- Follow AAA pattern: Arrange, Act, Assert
- Write descriptive test names that explain the scenario
- Group related tests in describe/context blocks
- Mock external dependencies cleanly

Target function: ${input:function_name:Which function or method should be tested?}
Testing framework: ${input:framework:Which framework? (jest/vitest/mocha/pytest/rspec/etc)}

## Guidelines

- Generate 5-8 focused test cases covering the most important scenarios
- Include realistic test data, not just simple examples
- Add comments for complex test setup or assertions
- Ensure tests are independent and can run in any order
- Focus on testing behavior, not implementation details

Create tests that give confidence the function works correctly and help catch regressions.
```

## How to use this prompt file

1. Save the above content as `generate-unit-tests.prompt.md` in your `.github/prompts` folder.
1. Open the code file containing the function(s) you want tests for. Optionally, you can highlight a specific function.
1. In Visual Studio Code, display the Copilot Chat view and enter `/generate-unit-tests`. Optionally, you can also specify the target function and testing framework by typing `function_name=fetchActivities` and `framework=pytest`, for example.

## Further reading

* [Use prompt files in Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the Visual Studio Code documentation - Information on how to create and use prompt files
* [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization) - Overview of response customization in GitHub Copilot
* [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.prompts.md) - Repository of community-contributed custom prompt files and other customizations for specific languages and scenarios
