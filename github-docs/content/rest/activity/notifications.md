# REST API endpoints for notifications

## About GitHub notifications

> [!NOTE]
> These endpoints only support authentication using a personal access token (classic). For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


You can use the REST API to manage GitHub notifications. For more information about notifications, see [About Notifications](https://docs.github.com/en/subscriptions-and-notifications/concepts/about-notifications).

All calls to these endpoints require the `notifications` or `repo` scopes. You will need the `repo` scope to access issues and commits from their respective endpoints.

Notifications are returned as "threads". A thread contains information about the current discussion of an issue, pull request, or commit.

Notifications are optimized for polling with the `Last-Modified` header. If there are no new notifications, you will see a `304 Not Modified` response, leaving your current rate limit untouched. There is an `X-Poll-Interval` header that specifies how often (in seconds) you are allowed to poll. In times of high server load, the time may increase. Please obey the header.

``` shell
# Add authentication to your requests
$ curl -I https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### About notification reasons

These GET endpoints return a `reason` key. These `reason`s correspond to events that trigger a notification.

There are a few potential `reason`s for receiving a notification.

Reason Name | Description
------------|------------
`approval_requested` | You were requested to review and approve a deployment. For more information, see [Review Deployments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments).
`assign` | You were assigned to the issue.
`author` | You created the thread.
`ci_activity` | A GitHub Actions workflow run that you triggered was completed.
`comment` | You commented on the thread.
`invitation` | You accepted an invitation to contribute to the repository.
`manual` | You subscribed to the thread (via an issue or pull request).
`member_feature_requested` | Organization members have requested to enable a feature such as Copilot.
`mention` | You were specifically **@mentioned** in the content.
`review_requested` | You, or a team you're a member of, were requested to review a pull request.
`security_advisory_credit` | You were credited for contributing to a security advisory.
`security_alert` | GitHub discovered a [security vulnerability](/code-security/concepts/supply-chain-security/dependabot-alerts) in your repository.
`state_change` | You changed the thread state (for example, closing an issue or merging a pull request).
`subscribed` | You're watching the repository.
`team_mention` | You were on a team that was mentioned.

Note that the `reason` is modified on a per-thread basis, and can change, if the `reason` on a later notification is different.

For example, if you are the author of an issue, subsequent notifications on that issue will have a `reason` of `author`. If you're then **@mentioned** on the same issue, the notifications you fetch thereafter will have a `reason` of `mention`. The `reason` remains as `mention`, regardless of whether you're ever mentioned again.
