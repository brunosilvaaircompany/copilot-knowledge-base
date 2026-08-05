# Indexing repositories for GitHub Copilot

## Benefit of indexing repositories

Copilot's ability to answer natural language questions and complete tasks in a repository context is optimized when the semantic code search index for the repository is up to date.

**Copilot will not use your indexed repository for model training.**

## Semantic code search in Copilot Chat

When you start a conversation with Copilot Chat that has a repository context, the repository is automatically indexed to improve context-enriched answers to your questions about the code's structure and logic in GitHub and Visual Studio Code. For example, you can ask **“How does this repo manage HTTP requests and responses?”** and Copilot Chat will reference relevant sections of your code to deliver an informed answer.

For more information on how to ask questions, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).

## Semantic code search in Copilot cloud agent

Copilot cloud agent uses semantic code search to find relevant code based on meaning, rather than relying solely on exact text matches with tools like `grep`. When the agent doesn't know the precise names or patterns to search for, semantic code search helps it locate the right code faster. No configuration is required—the agent automatically uses semantic code search when appropriate.

For more information about Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## About index creation and use

Indexing runs in the background and initial indexing can take up to 60 seconds for a large repository. Once a repository has been indexed for the first time, re-indexing is much quicker and the index will typically be automatically updated to include the latest changes within seconds of you starting a new conversation.

Once an index has been created for a repository, it can be used by:

* Copilot Chat in GitHub and Visual Studio Code
* Copilot cloud agent

> [!TIP] There is no limit to how many repositories you can index.

## Semantic indexing for non-GitHub repositories

Copilot in Visual Studio Code can use semantic indexing for workspace files from repositories hosted outside GitHub, such as GitLab and local repositories. This feature uploads your data to GitHub to make it searchable.

> [!NOTE] This feature is only available on GitHub.com. It is not available on GitHub Enterprise Server.

This feature is controlled by policy and is disabled by default. For organizations and enterprises with Copilot Business or Copilot Enterprise, an enterprise owner or organization owner must explicitly set the `Semantic indexing for non-GitHub repositories` policy to **Enabled** before members can use it. If the policy remains **Unconfigured**, the feature stays unavailable. See:

* [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies)
* [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies)

## Excluding content from Copilot Chat answers

Enterprise or organization owners with a Copilot Enterprise or Copilot Business plan can define content exclusions to control the behavior of GitHub Copilot for the Copilot seats they manage. For more information, see [Exclude Content From Copilot](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot).

If a semantic code search index is created for a repository that is included in a content exclusion policy, data is filtered according to the policy before being passed to Copilot Chat.
