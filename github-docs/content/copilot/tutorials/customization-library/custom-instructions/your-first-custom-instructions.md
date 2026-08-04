# Your first custom instructions

> [!NOTE]
> * The examples in this library are intended for inspiration—you are encouraged to adjust them to be more specific to your projects, languages, and team processes.
> * For community-contributed examples of custom instructions for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.instructions.md) repository.
> * You can apply custom instructions across different scopes, depending on the platform or IDE where you are creating them. For more information, see "[Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization)."


## About customizations

You can customize GitHub Copilot's responses using two types of files:

* **Custom instructions** provide ongoing guidance for how GitHub Copilot should behave across all your interactions.
* **Prompt files (public preview)** define reusable prompts for specific tasks that you can invoke when needed. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
 For an introductory example, see [Your First Prompt File](https://docs.github.com/en/copilot/tutorials/customization-library/prompt-files/your-first-prompt-file).

While custom instructions help to add context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

Repository custom instructions are the most commonly used and supported, but you can also define personal and organization custom instructions, only for GitHub Copilot Chat in GitHub. You can create repository custom instructions in two ways:

* **Repository-wide instructions**: Create a single `copilot-instructions.md` file at the repository root that applies to all files in the repository.
* **Path-specific instructions**: Create one or more `.instructions.md` files with an `applyTo` field that apply only to specific files or directories. Path-specific instructions are currently supported for **Copilot Chat** in Visual Studio Code, Visual Studio, and **Copilot cloud agent**.


## Your first instructions

Start with these core custom instructions that helps GitHub Copilot understand your coding preferences.

### Instructions on writing functions

```markdown copy
When writing functions, always:
- Add descriptive JSDoc comments
- Include input validation
- Use early returns for error conditions
- Add meaningful variable names
- Include at least one example usage in comments
```

These instructions will change how GitHub Copilot generates functions.

## Test it out

To quickly test out the difference that custom instructions can make, you can use personal custom instructions in Copilot Chat.

1. First, go to [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=trial&ref_style=text) and enter this prompt:

    `Create a JavaScript function that calculates the area of a circle`

    **Without custom instructions**, you might get:

    ```javascript
    function areaOfCircle(radius) {
        if (typeof radius !== 'number' || radius < 0) {
            throw new Error('Radius must be a non-negative number');
        }
        return Math.PI * radius * radius;
    }
    ```

1. Now access your personal custom instructions by clicking on your profile picture in the bottom left of the page, then click **Personal instructions**. Paste the above instructions into the text box, then click **Save**.

    Now enter the same prompt that you entered previously.

    **With custom instructions**, you'll get something like:

    ```javascript
    /**
     * Calculates the area of a circle given its radius.
     *
     * @param {number} radius - The radius of the circle. Must be a positive number.
     * @returns {number|null} The area of the circle, or null if the input is invalid.
     *
     * @example
     * // returns 78.53981633974483
     * areaOfCircle(5);
     *
     * @example
     * // returns null (invalid input)
     * areaOfCircle(-2);
     */
    function areaOfCircle(radius) {
      if (typeof radius !== "number" || isNaN(radius) || radius <= 0) {
        // Invalid input: radius must be a positive number
        return null;
      }

      const area = Math.PI * Math.pow(radius, 2);
      return area;
    }

    // Example usage:
    console.log(areaOfCircle(5));   // 78.53981633974483
    console.log(areaOfCircle(-2));  // null
    ```

## Further reading

* [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization) - Overview of response customization in GitHub Copilot
* [Add Custom Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions) - How to configure custom instructions
* [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/README.md) - Repository of community-contributed custom instructions and other customizations for specific languages and scenarios
