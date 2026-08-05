# About custom actions

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## About custom actions

You can create actions by writing custom code that interacts with your repository in any way you'd like, including integrating with GitHub's APIs and any publicly available third-party API. For example, an action can publish npm modules, send SMS alerts when urgent issues are created, or deploy production-ready code.


You can write your own actions to use in your workflow or share the actions you build with the GitHub community. To share actions you've built with everyone, your repository must be public. {% ifversion ghec %}To share actions only within your enterprise, your repository must be internal.
{% endif %}

Actions can run directly on a machine or in a Docker container. You can define an action's inputs, outputs, and environment variables.

## Types of actions

>[!NOTE]
> You can build Docker container, JavaScript, and composite actions. Actions require a metadata file to define the inputs, outputs, and runs configuration for your action. Action metadata files use YAML syntax, and the metadata filename must be either `action.yml` or `action.yaml`. The preferred format is `action.yml`.


{% rowheaders %}

| Type | Linux | macOS | Windows |
| ---- | ----- | ----- | -------- |
| Docker container | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| JavaScript | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Composite Actions | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Docker container actions

Docker containers package the environment with the GitHub Actions code. This creates a more consistent and reliable unit of work because the consumer of the action does not need to worry about the tools or dependencies.

A Docker container allows you to use specific versions of an operating system, dependencies, tools, and code. For actions that must run in a specific environment configuration, Docker is an ideal option because you can customize the operating system and tools. Because of the latency to build and retrieve the container, Docker container actions are slower than JavaScript actions.

Docker container actions can only execute on runners with a Linux operating system. Self-hosted runners must use a Linux operating system and have Docker installed to run Docker container actions. For more information about the requirements of self-hosted runners, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners#requirements-for-self-hosted-runner-machines).


### JavaScript actions

JavaScript actions can run directly on a runner machine, and separate the action code from the environment used to run the code. Using a JavaScript action simplifies the action code and executes faster than a Docker container action.

To ensure your JavaScript actions are compatible with all GitHub-hosted runners (Ubuntu, Windows, and macOS), the packaged JavaScript code you write should be pure JavaScript and not rely on other binaries. JavaScript actions run directly on the runner and use binaries that already exist in the runner image.


If you're developing a Node.js project, the GitHub Actions Toolkit provides packages that you can use in your project to speed up development. For more information, see the [actions/toolkit](https://github.com/actions/toolkit) repository.

### Composite Actions

A _composite_ action allows you to combine multiple workflow steps within one action. For example, you can use this feature to bundle together multiple run commands into an action, and then have a workflow that executes the bundled commands as a single step using that action. To see an example, check out [Create A Composite Action](https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action).

## Next steps

To learn about how to manage your custom actions, see [Manage Custom Actions](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/manage-custom-actions).
