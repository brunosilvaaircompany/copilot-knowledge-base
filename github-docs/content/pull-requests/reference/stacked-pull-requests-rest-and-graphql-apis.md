# Stacked pull requests in the REST and GraphQL APIs

> [!NOTE] This feature is in public preview and subject to change.

The GitHub REST and GraphQL APIs both expose stacked pull requests. The REST API supports reading and managing stacks, while the GraphQL API supports read-only queries.

Use the API to read a pull request's stack membership or to build your own automation and integrations for stacked pull requests.

## REST API

The REST API exposes stacked pull requests in two ways:

* **The `stack` object on pull request resources.** When a pull request belongs to a stack, its REST resource includes a `stack` object. This lets you read the pull request's stack membership, including the stack's number and size and the pull request's position and base, directly from the pull request.
* **The Stacks API.** A dedicated set of endpoints to list, read, create, extend, and dissolve stacks. This is the surface for creating and modifying stacks.

> [!NOTE]
> If you merge via the API and want to use stacked pull requests, you'll need to update your code to use the new merge API for stacks. See [Pulls?Apiversion=2026 03 10](https://docs.github.com/en/rest/pulls/pulls?apiVersion=2026-03-10#merge-a-pull-request-asynchronously).

For endpoints, parameters, and schemas, see [Pulls](https://docs.github.com/en/rest/pulls/pulls).

## GraphQL API

The GraphQL API exposes a pull request's stack membership through read-only `stack` and `stackEntry` fields on the `PullRequest` type. Use these fields to query the stack a pull request belongs to and its position within it.

The GraphQL API is read-only for stacks; there are no stack mutations. To create or modify stacks, use the REST API.

For fields, objects, and schemas, see [Pulls](https://docs.github.com/en/graphql/reference/pulls#object-pullrequeststack).

## Further reading

* [Stacked Prs CLI Commands](https://docs.github.com/en/pull-requests/reference/stacked-prs-cli-commands)
* [About Stacked Prs](https://docs.github.com/en/pull-requests/get-started/about-stacked-prs)
