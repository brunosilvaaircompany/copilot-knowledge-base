# GitHub Copilot code referencing

{% jetbrains %}

## About Copilot code referencing in JetBrains IDEs

Copilot code referencing identifies and attributes code suggestions by linking them to their original public sources, helping you understand where the code originates.

If you, or your organization, have allowed suggestions that match public code, GitHub Copilot can provide you with details of the code that a suggestion matches. This happens:

* When you accept a Copilot inline suggestion in the editor.
* When a response in Copilot Chat includes matching code.


### Code referencing for Copilot inline suggestions

When you accept a Copilot inline suggestion that matches code in a public GitHub repository, information about the matching code is logged. The log entry includes the URLs of files containing matching code, and the name of the license that applies to that code, if any was found. This allows you to review these references and decide how to proceed. For example, you can decide what attribution to use, or whether you want to remove this code from your project.

> [!NOTE]
> * Code referencing for inline suggestions only occurs for matches of accepted Copilot suggestions. Code you have written, and Copilot suggestions you have altered, are not checked for matches to public code.
> * Typically, matches to public code occur in less than one percent of Copilot suggestions, so you should not expect to see code references for many suggestions.


### Code referencing for Copilot Chat

When Copilot Chat provides a response that includes code that matches code in a public GitHub repository, this is indicated at the end of the response with a link to display details of the matched code in the editor.


{% endjetbrains %}

{% vscode %}

## About Copilot code referencing in Visual Studio Code

Copilot code referencing identifies and attributes code suggestions by linking them to their original public sources, helping you understand where the code originates.

If you, or your organization, have allowed suggestions that match public code, GitHub Copilot can provide you with details of the code that a suggestion matches. This happens:

* When you accept a Copilot inline suggestion in the editor.
* When a response in Copilot Chat includes matching code.


### Code referencing for Copilot inline suggestions

When you accept a Copilot inline suggestion that matches code in a public GitHub repository, information about the matching code is logged. The log entry includes the URLs of files containing matching code, and the name of the license that applies to that code, if any was found. This allows you to review these references and decide how to proceed. For example, you can decide what attribution to use, or whether you want to remove this code from your project.

> [!NOTE]
> * Code referencing for inline suggestions only occurs for matches of accepted Copilot suggestions. Code you have written, and Copilot suggestions you have altered, are not checked for matches to public code.
> * Typically, matches to public code occur in less than one percent of Copilot suggestions, so you should not expect to see code references for many suggestions.


### Code referencing for Copilot Chat

When Copilot Chat provides a response that includes code that matches code in a public GitHub repository, this is indicated at the end of the response with a link to display details of the matched code in the editor.


{% endvscode %}

{% webui %}

## About Copilot code referencing on GitHub.com

### Code referencing for Copilot Chat

If you, or your organization, have allowed suggestions that match public code, then whenever a response from Copilot Chat includes matching code, details of the matches will be included in the response.

> [!NOTE]
> Typically, matches to public code occur infrequently, so you should not expect to see code references in many Copilot Chat responses.

### Code referencing for Copilot cloud agent

When Copilot generates code that matches code in a public GitHub repository, this is indicated in the agent session logs with a link to display details of the matched code. For more information, see [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).

{% endwebui %}

{% visualstudio %}

## About Copilot code referencing in Visual Studio

Copilot code referencing identifies and attributes code suggestions by linking them to their original public sources, helping you understand where the code originates.

If you, or your organization, have allowed suggestions that match public code, GitHub Copilot can provide you with details of the code that a suggestion matches. This happens:

* When you accept a Copilot inline suggestion in the editor.
* When a response in Copilot Chat includes matching code.


### Code referencing for Copilot inline suggestions

When you accept a Copilot inline suggestion that matches code in a public GitHub repository, information about the matching code is logged. The log entry includes the URLs of files containing matching code, and the name of the license that applies to that code, if any was found. This allows you to review these references and decide how to proceed. For example, you can decide what attribution to use, or whether you want to remove this code from your project.

> [!NOTE]
> * Code referencing for inline suggestions only occurs for matches of accepted Copilot suggestions. Code you have written, and Copilot suggestions you have altered, are not checked for matches to public code.
> * Typically, matches to public code occur in less than one percent of Copilot suggestions, so you should not expect to see code references for many suggestions.


### Code referencing for Copilot Chat

When Copilot Chat provides a response that includes code that matches code in a public GitHub repository, this is indicated below the suggested code, with a link to display details of the matched code in the output log.

{% endvisualstudio %}

## How code referencing finds matching code

Copilot code referencing compares potential code suggestions and the surrounding code of about 150 characters against an index of all public repositories on GitHub.com.

Code in private GitHub repositories, or code outside of GitHub, is not included in the search process.

## Limitations

The search index is refreshed every few months. As a result, newly committed code, and code from public repositories deleted before the index was created, may not be included in the search. For the same reason, the search may return matches to code that has been deleted or moved since the index was created.

References to matching code are currently available in JetBrains IDEs, Visual Studio, Visual Studio Code, Copilot cloud agent, and on the GitHub website.

## Further reading

* [Find Matching Code](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/find-matching-code)
* [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies)
* [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies)
