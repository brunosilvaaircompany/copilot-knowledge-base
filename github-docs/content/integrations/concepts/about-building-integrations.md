# About building integrations

Integrations are tools that extend GitHub's functionality. Integrations can do things on GitHub like open issues, comment on pull requests, and manage projects. They can also do things outside of GitHub based on events that happen on GitHub. For example, an integration can post on Slack when an issue is opened on GitHub.

Many integrations are GitHub Apps, GitHub Actions workflows, or custom actions for GitHub Actions workflows.

* GitHub Apps are integrations that run on the app owner's server or on a user device. For more information, see [About Creating GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps).
* GitHub Actions workflows are workflows that run when specific events occur on GitHub. For more information, see [Understand GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions).
* Custom actions are code that can be executed by a GitHub Actions workflow. For more information, see [Custom Actions](https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions).

Your integration can use GitHub's API to fetch data and make changes to data on GitHub. GitHub has a REST API and a GraphQL API. For more information, see:

* [Comparing Githubs Rest API And GraphQL API](https://docs.github.com/en/rest/about-the-rest-api/comparing-githubs-rest-api-and-graphql-api)
* [Rest](https://docs.github.com/en/rest)
* [GraphQL](https://docs.github.com/en/graphql)

Your integration can use webhooks to learn when specific events happen on GitHub. For more information, see [About Webhooks](https://docs.github.com/en/webhooks/about-webhooks).

 If your integration is a GitHub App or custom action, you can publish your integration on GitHub Marketplace. For more information, see [About GitHub Marketplace For Apps](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-github-marketplace-for-apps) and [Publish In GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace).


If your integration uses generative AI, you can build AI-powered workflows on GitHub with GitHub Copilot. See [Copilot](https://docs.github.com/en/copilot).
