# Supported surfaces for GitHub Copilot policies

GitHub Copilot is available across various surfaces: in IDEs, in the CLI, and as multiple agents and chat interfaces on the GitHub website.

A dedicated policy exists to enable or disable each supported feature or surface. Additionally, you can set various policies to customize or control the Copilot experience. However, not every policy applies to every available surface.

## Supported surfaces

{% rowheaders %}

| Policy name | IDEs | Copilot in the cloud (sandbox) | Copilot in the cloud (GitHub Actions) | Copilot CLI | The GitHub Copilot app | Copilot code review |
| --- | --- | --- | --- | --- | --- | --- |
| Editor preview features | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Copilot can search the web | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Configure custom models | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Suggestions matching public code | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %}[^1] | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| MCP servers in Copilot | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Restrict MCP access to registry servers | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Content exclusion | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Configure models | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Copilot Memory | {% octicon "check" aria-label="Supported" %}[^2] | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}[^3] | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

[^1]: Only supported in annotate mode. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents#7-limitations).

[^2]: Supported in Copilot sessions that run in Visual Studio Code's **Local Agent Host**. The application also requires its own Copilot Memory setting to be enabled. See [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-visual-studio-code).

[^3]: In the GitHub Copilot app, this policy applies where Copilot Memory is available for the user's account. The app's separate project **Memory** setting is not the same feature. See [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory#where-copilot-memory-is-available).

## More information on Copilot in the cloud

"Copilot in the cloud" refers to cloud sessions running on cloud sandboxes or GitHub Actions. Users can start cloud sessions from local clients. The columns for local clients in the table refer to local sessions in those clients.

Coverage of policies and enterprise managed settings currently varies between environments. Where users can choose between these environments, cloud sandboxes are the default. However, currently, some interfaces can only run on GitHub Actions (such as assigning an issue to Copilot or mentioning `@Copilot` in a pull request).
