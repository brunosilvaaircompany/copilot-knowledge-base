# REST API endpoints for check suites

> [!NOTE]
> Write permission for the REST API to interact with checks is only available to GitHub Apps. OAuth apps and authenticated users can view check runs and check suites, but they are not able to create them. If you aren't building a GitHub App, you might be interested in using the REST API to interact with [commit statuses](/rest/commits#commit-statuses).


> [!NOTE]
> A GitHub App usually only receives one [`check_suite`](/webhooks/webhook-events-and-payloads#check_suite) event per commit SHA, even if you push the commit SHA to more than one branch. To find out when a commit SHA is pushed to a branch, you can subscribe to branch [`create`](/webhooks/webhook-events-and-payloads#create) events.
