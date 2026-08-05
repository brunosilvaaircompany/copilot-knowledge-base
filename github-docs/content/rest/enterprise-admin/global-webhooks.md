# REST API endpoints for global webhooks

## About global webhooks

These endpoints are only available to [authenticated](/rest/authentication/authenticating-to-the-rest-api) site administrators Normal users will receive a `404` response. To learn how to configure global webhooks, see [About global webhooks](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity-in-your-enterprise/managing-global-webhooks).

Global webhooks are automatically installed on your enterprise. You can use global webhooks to automatically monitor, respond to, or enforce rules for users, organizations, teams, and repositories on your enterprise.

Global webhooks can subscribe to the [organization](/webhooks/webhook-events-and-payloads#organization), [user](/webhooks/webhook-events-and-payloads#user), [repository](/webhooks/webhook-events-and-payloads#repository), [team](/webhooks/webhook-events-and-payloads#team), [member](/webhooks/webhook-events-and-payloads#member), [membership](/webhooks/webhook-events-and-payloads#membership), [fork](/webhooks/webhook-events-and-payloads#fork), and [ping](/webhooks/about-webhooks#ping-event) event types.

> [!NOTE]
> These endpoints only support authentication using a personal access token (classic). For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).
