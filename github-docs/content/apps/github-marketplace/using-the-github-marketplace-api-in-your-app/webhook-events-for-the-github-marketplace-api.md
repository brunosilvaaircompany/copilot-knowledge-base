# Webhook events for the GitHub Marketplace API

> [!NOTE]
> This article applies to publishing apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see [Publish In GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace).


For more information about the GitHub Marketplace webhook payload, see [Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads#marketplace_purchase).

Webhooks `POST` requests have special headers. See [Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads#delivery-headers) for more details. GitHub doesn't resend failed delivery attempts. Ensure your app can receive all webhook payloads sent by GitHub. For information about how to create and disable GitHub Marketplace webhooks, see [Creating Webhooks](https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks) and [Disabling Webhooks](https://docs.github.com/en/webhooks/using-webhooks/disabling-webhooks).

Cancellations and downgrades take effect on the first day of the next billing cycle. Events for downgrades and cancellations are sent when the new plan takes effect at the beginning of the next billing cycle. Events for new purchases and upgrades begin immediately. Use the `effective_date` in the webhook payload to determine when a change will begin.

> [!NOTE]
> If you notice any spammy GitHub Marketplace purchases or other malicious behavior, please complete the [report abuse](https://github.com/contact/report-abuse) form with more information on the user.
