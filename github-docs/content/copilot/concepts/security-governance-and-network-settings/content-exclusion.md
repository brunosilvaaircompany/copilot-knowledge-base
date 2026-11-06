# Content exclusion for GitHub Copilot

## About content exclusion for Copilot

You can configure content exclusion to make Copilot ignore certain files. When you exclude content from Copilot:

* Inline suggestions will not be available in the affected files.
* The content in affected files will not inform inline suggestions in other files.
* The content in affected files will not inform Copilot's responses.
* Affected files will not be reviewed in a Copilot code review.

### Who can configure content exclusion

Repository administrators, organization owners, and enterprise owners can configure content exclusion.

* **Repository administrators** can exclude content for their own repositories. This affects any Copilot users in the enterprise working within those specific repositories.
* **Organization owners** can exclude content for users assigned a Copilot seat through their organization.



* **Enterprise owners** can apply exclusion rules to all Copilot users in the enterprise.




### Availability of content exclusion

The Copilot Business and Copilot Enterprise plans provide the following level of support for content exclusion.

| Tool                                            | Inline suggestions support                    | Chat and agent support                         |
|-------------------------------------------------|:---------------------------------------------:|:----------------------------------------------:|
| Visual Studio        | {% octicon "check" aria-label="Supported" %}  | {% octicon "check" aria-label="Supported" %}   |
| Visual Studio Code    | {% octicon "check" aria-label="Supported" %}  | {% octicon "check" aria-label="Supported" %}   |
| JetBrains IDEs                                  | {% octicon "check" aria-label="Supported" %}  | {% octicon "check" aria-label="Supported" %}   |
| Vim/Neovim                                      | {% octicon "check" aria-label="Supported" %}  | Not applicable                                 |
| Xcode                                           | {% octicon "check" aria-label="Supported" %}  | {% octicon "x" aria-label="Not supported" %}   |
| Eclipse                                         | {% octicon "check" aria-label="Supported" %}  | {% octicon "x" aria-label="Not supported" %}   |
| Azure Data Studio                               | {% octicon "x" aria-label="Not supported" %}  | Not applicable                                 |
| The GitHub Copilot app | Not applicable                                | {% octicon "check" aria-label="Supported" %}   |
| GitHub Copilot CLI        | Not applicable                                | {% octicon "check" aria-label="Supported" %}   |
| Copilot in the cloud | Not applicable | {% octicon "check" aria-label="Supported" %} |
| Copilot code review | Not applicable | {% octicon "check" aria-label="Supported" %} |

Copilot in the cloud includes chat and agent sessions started on the GitHub website, GitHub Mobile, or cloud sandboxes.

### Limitations of content exclusion

Content exclusion is not a filesystem security boundary and cannot guarantee prevention of every form of file access. It is a guardrail for the tools that GitHub controls, and is not guaranteed to be respected by third-party MCP servers or clients.

It's also possible that Copilot may use semantic information from an excluded file if the information is provided by the IDE indirectly. Examples of such content include type information and hover-over definitions for symbols used in code, as well as general project properties such as build configuration information.


> [!NOTE]
> When you use a Copilot agent in an IDE, GitHub Copilot CLI, or the GitHub Copilot app, content exclusion prevents the agent from accessing excluded files through Copilot tools and checks identifiable file paths in commands and scripts before running them, but might not detect indirect file access. Content exclusion is not a substitute for operating-system permissions or other access controls.


Currently, content exclusions do not apply to symbolic links (symlinks) and repositories located on remote filesystems.

### Data sent to GitHub

After you configure content exclusion, the client (for example, the Copilot extension for VS Code) sends the current repository URL to the GitHub server so that the server can return the correct policy to the client. These URLs are not logged anywhere.

## Further reading

* [Exclude Content From Copilot](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)
* [Review Changes](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/review-changes)
