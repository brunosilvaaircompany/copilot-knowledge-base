# Stacked pull requests APIs and webhooks

> [!NOTE] This feature is in public preview and subject to change.

The GitHub REST and GraphQL APIs both expose stacked pull requests. The REST API supports reading and managing stacks, while the GraphQL API supports read-only queries.

Use the API to read a pull request's stack membership or to build your own automation and integrations for stacked pull requests.

## REST API

The REST API exposes stacked pull requests in two ways:

* **The `stack` object on pull request resources.** When a pull request belongs to a stack, its REST resource includes a `stack` object. This lets you read the pull request's stack membership, including the stack's number and size and the pull request's position and base, directly from the pull request.
* **The Stacks API.** A dedicated set of endpoints to list, read, create, extend, and dissolve stacks. This is the surface for creating and modifying stacks.

For endpoints, parameters, and schemas, see [Pulls](https://docs.github.com/en/rest/pulls/pulls).

> [!IMPORTANT]
> If you merge via the API and want to use stacked pull requests, you must use the new asynchronous merge API.

### Merge API

When you merge a stacked pull request via the API, you must use the asynchronous merge endpoint.

A stack cannot be merged with the legacy synchronous merge endpoints or mutations. When you merge a stacked pull request, every pull request in the stack up to and including the one you request is merged or queued to merge into the base branch. Merging a pull request stack may involve several pull requests that may take a few minutes to merge. Because of this, the merge runs in the background when you submit a merge request and then you can poll for the result.

Only the basic pull request state is checked when you submit an open PR. Branch protection and repository rules are evaluated later, when the merge actually runs, and a rule failure is reported as a failed result while polling. A stack merge request is atomic, meaning either the whole group of pull requests merges, or is added to the merge queue, or none of it is.

For details, see [Pulls?Apiversion=2026 03 10](https://docs.github.com/en/rest/pulls/pulls?apiVersion=2026-03-10#merge-a-pull-request-asynchronously).

## GraphQL API

The GraphQL API exposes a pull request's stack membership through read-only `stack` and `stackEntry` fields on the `PullRequest` type. Use these fields to query the stack a pull request belongs to and its position within it.

The GraphQL API is read-only for stacks; there are no stack mutations. To create or modify stacks, use the REST API.

For fields, objects, and schemas, see [Pulls](https://docs.github.com/en/graphql/reference/pulls#object-pullrequeststack).

## Webhooks

When a pull request belongs to a stack, GitHub adds a `stack` property to the `pull_request` object in webhook event payloads. This lets apps and integrations inspect the stack's target branch, not just the direct parent branch of the pull request.

The `stack` object is included in the `pull_request` webhook payload for pull request lifecycle events that happen while the pull request is part of a stack.

See [Webhook Events And Payloads?Actiontype=Stacked](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=stacked#pull_request).

## Further reading

* [Stacked Prs CLI Commands](https://docs.github.com/en/pull-requests/reference/stacked-prs-cli-commands)
* [About Stacked Prs](https://docs.github.com/en/pull-requests/get-started/about-stacked-prs)
