# REST API endpoints for deployment statuses

## About deployment statuses

Deployment statuses allow external services to mark deployments with an `error`, `failure`, `inactive`, `in_progress`, `queued`, `pending`, or `success` state. Systems listening to [`deployment_status` events](/webhooks/webhook-events-and-payloads#deployment_status) can consume and respond to these statuses. A deployment status can also include an optional `description` and `log_url`.

A deployment can accumulate multiple statuses over time as it progresses, for example from `pending` to `in_progress` to `success`. GitHub tracks the most recent status for each deployment and uses it to display the deployment's current state.

### Data retention

GitHub retains records of previous deployment statuses for **90 days**. Previous statuses older than 90 days are automatically deleted and are no longer returned by the REST API or GraphQL API.

This retention policy applies to all deployment status endpoints, including [List deployment statuses](#list-deployment-statuses) and [Get a deployment status](#get-a-deployment-status). The current status of a deployment is not affected, because it is stored on the deployment itself and remains available regardless of the deployment's age.
