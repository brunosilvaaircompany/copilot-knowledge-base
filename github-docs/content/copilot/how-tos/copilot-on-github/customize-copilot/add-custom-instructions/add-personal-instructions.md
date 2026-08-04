# Adding personal custom instructions for GitHub Copilot

> [!NOTE] Personal custom instructions are only supported for GitHub Copilot Chat in GitHub.


You can layer multiple types of custom instructions to shape GitHub Copilot Chat responses. For an overview, see [Response Customization?Tool=Webui](https://docs.github.com/en/copilot/concepts/prompting/response-customization?tool=webui).

## About personal custom instructions for Copilot Chat

Personal custom instructions apply to every conversation you have on the GitHub website, so Copilot always responds in your preferred language, tone, and style.

Examples of instructions you can add:

* `Always respond in Spanish.`
* `Use a helpful, collegial tone. Keep explanations brief, but provide enough context to understand the code.`
* `Always provide examples in TypeScript.`

Multiple types of custom instructions can apply to a request sent to Copilot. Personal instructions take the highest priority. Repository instructions come next, and then organization instructions are prioritized last. However, all sets of relevant instructions are provided to Copilot.


Whenever possible, try to avoid providing conflicting sets of instructions. If you are concerned about response quality, you can temporarily disable repository instructions. See [Add Repository Instructions?Tool=Webui](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions?tool=webui#enabling-or-disabling-custom-instructions-for-copilot-code-review).


## Adding personal custom instructions

To add personal custom instructions on GitHub:

1. Open [Copilot Chat](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).
1. In the bottom left corner, click your profile picture. Then click **{% octicon "note" aria-hidden="true" aria-label="note" %} Personal instructions**.
1. Add natural language instructions to the text box.
  
   Use any format. For example, a single block of text, each instruction on a new line, or instructions separated by blank lines.

1. Optionally, use a template for common instructions. Click {% octicon "light-bulb" aria-label="The light-bulb icon" %} and select a template. 

   When you select a template, placeholder text appears. Replace placeholders like `{format}` with your preferences.
1. Click **Save**.

Your instructions are now active and remain active until you change or remove them.

> **Nota:**

Did you successfully add personal custom instructions?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>



## Further reading

* [Custom Instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
