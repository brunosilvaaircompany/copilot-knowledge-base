# Troubleshooting live migrations from GitHub Enterprise Server to GHE.com

If your migration encounters a problem, check the migration status with `gh elm migration status --migration-id MIGRATION-ID` and review the error information.

## Statuses and recommended actions

| Status | Meaning | Recommended action |
|---|---|---|
| **Created** | The migration has been created but not yet started | Run `gh elm migration start` |
| **Queued** | The migration is waiting to start | Wait |
| **Exporting** | Data is being exported from the source | Monitor with `gh elm migration status` |
| **Processing** | Exported data is being imported to the destination | Monitor with `gh elm migration status` |
| **Ready for cutover** | The initial migration is complete and the migration is ready for cutover | When ready, run `gh elm migration cutover` |
| **Cutting over** | The source repository is archived and remaining changes are being applied to the destination | Monitor; the status will transition to **Completed** |
| **Completed** | The migration has finished successfully | Verify the destination repository and reclaim mannequins |
| **Failed** | The migration encountered an unrecoverable failure | Investigate the error (see below) |
| **Paused** | The migration is paused | Check the pause reason and resolve (see below) |
| **Terminated** | The migration was cancelled | N/A |
| **Degraded** | The destination is unreachable | Check network connectivity between the GitHub Enterprise Server appliance and GHE.com (see below) |

## Migration status is "Failed"

A migration enters the **Failed** status when an unrecoverable error prevents it from continuing. This is distinct from individual resources failing to import—a failed migration means the migration itself cannot proceed.

To investigate, run `gh elm migration status --migration-id MIGRATION-ID` and review the error details in the response. Each failure includes a correlation ID in the format `(Correlation ID for Support: UUID)`. If you contact GitHub Support, provide this ID so the support team can investigate.

After resolving the underlying issue, abort the failed migration with `gh elm migration cancel --migration-id MIGRATION-ID` and start a new migration.

## Migration status is "Paused"

A migration enters the **Paused** status when an issue requires your intervention before it can continue. Run `gh elm migration status --migration-id MIGRATION-ID` and check the pause reason.

Common pause reasons:

* **Credential expiry**: One of the personal access tokens (classic) has expired. Create a new token with the required scopes and update it with `gh elm credential update`. Then restart the migration.
* **Rate limiting**: The migration hit API rate limits. Wait a few minutes, then restart.

To restart a paused migration after resolving the underlying issue:

```shell
gh elm migration start --migration-id MIGRATION-ID
```

## Migration status is "Degraded"

A **Degraded** status means the migration service on the GitHub Enterprise Server appliance cannot reach the destination enterprise. The migration continues on the source side, but the destination status is unknown.

Check network connectivity between the GitHub Enterprise Server appliance and your subdomain of GHE.com, then run `gh elm migration status --migration-id MIGRATION-ID` again. The status response includes a timestamp for the last successful contact with the destination, which can help you assess how long the connectivity issue has been occurring.

## Migration stuck in "Exporting"

If your migration remains in the **Exporting** status with no progress change for 30 minutes or more, the exporter may be stuck.

1. Run `gh elm migration status --migration-id MIGRATION-ID` and note whether resource counts are changing.
1. If counts are static, check the appliance's network connectivity to the destination.
1. Review exporter logs on the GitHub Enterprise Server appliance (requires SSH admin access):

   ```shell copy
   journalctl -t elm-exporter-backfiller --since "1 hour ago" | tail -50
   journalctl -t elm-exporter-sender --since "1 hour ago" | tail -50
   ```

1. If the exporter task has crashed, it should recover automatically. If it does not, contact GitHub Support.

## Git synchronization not completing

If `gh elm migration status` shows that the initial Git push has not completed after an extended period, check the Git syncer logs:

```shell copy
journalctl -t elm-exporter-git-syncer --since "2 hours ago"
```

Look for:

* **`connection refused`**: A network issue between the GitHub Enterprise Server appliance and the destination. Check firewall rules and DNS resolution.
* **`authentication failed`**: The personal access token (classic) may lack the required scopes or may have expired.
* **`remote: error`**: The destination may be rejecting the push. Contact GitHub Support with the error details.

## Some resources failed to import

Individual resources can fail to import without causing the overall migration to fail. You can see a count of failed resources in the output of `gh elm migration status --migration-id MIGRATION-ID`.

Failed resources are only shown after all automatic retries have been exhausted, so any failures you see are confirmed as unresolvable without intervention. Review the error details in the status response: each failed resource in backfill or live updates will display `"state": "failed"`.

If the number and types of failed resources are acceptable, you can proceed with cutover. If not, abort the migration, resolve the underlying issue, then start a new migration.

## Cutover failed and the source repository is unavailable

If a cutover fails after the source repository has been archived, the ELM service will attempt to unarchive the repository. If this fails, a repository administrator can unarchive the repository. See [Archiving Repositories](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories#unarchiving-a-repository).

Be aware that unarchiving a repository will cause additional load on the instance, as all issues and pull requests in the repository will be reindexed in Elasticsearch. 

After the source repository is unarchived, you can either retry cutover using `gh elm migration cutover --migration-id MIGRATION-ID`, or abort the migration with `gh elm migration cancel --migration-id MIGRATION-ID` and start a new migration when you're ready.


## Migration must be restarted due to a force push

If someone force-pushes to the default branch of the source repository while a migration is in progress, the Git synchronization between the source and destination breaks. Force pushes rewrite commit history in a way that cannot be reconciled incrementally.

If this happens, abort the migration with `gh elm migration cancel --migration-id MIGRATION-ID` and start a new migration. Before restarting, communicate to your team that force pushes to the default branch are not permitted while a migration is active.

## Migration access token was rejected

If your migration fails with an authentication error, check that:

* Both the source and destination tokens are personal access tokens (classic). Fine-grained personal access tokens are not supported.
* If the destination organization enforces SAML single sign-on, the token must be authorized for SSO.
* Both tokens have the scopes specified in [Migrate Your Repository](https://docs.github.com/en/migrations/elm/migrate-your-repository#4-configure-the-live-migration-secrets).

If you recently rotated a token, the migration picks up new credentials automatically. You do not need to run `ghe-config-apply` or restart the migration service.

## GitHub CLI access token was rejected

Enterprise Live Migrations uses two sets of credentials. This section applies to the **operator tokens** created in step 2 and stored locally by `gh elm configure`.

The operator must use a personal access token (classic) for each endpoint:

* The **source operator token** must be created on GitHub Enterprise Server.
* The **target operator token** must be created on GHE.com.
* Both tokens have the scopes specified in [Migrate Your Repository](https://docs.github.com/en/migrations/elm/migrate-your-repository#2-create-the-tokens-used-by-the-operator-who-will-perform-the-migration).
* The token owner must be an administrator of the corresponding enterprise. Selecting a scope does not grant the user administrative access.
* Fine-grained personal access tokens are not supported.

### Common responses

| Response | Meaning | Remedy |
| --- | --- | --- |
| `401 Bad credentials` | The endpoint could not authenticate the token. Authorization scopes have not been evaluated yet. | Check that the token has not expired or been revoked, that it was copied completely, and that the source and target tokens were not exchanged. Confirm that each token was created on the host where it is being used. |
| `403 Forbidden` | The token was authenticated, but its user or scopes do not authorize the operation. | Use a personal access token (classic) with `admin:enterprise`. Confirm that the token owner is an administrator of the enterprise. If SAML SSO applies, authorize the token for SSO. |
| `Resource not accessible by personal access token` | The token type or permissions are unsupported. This commonly occurs with a fine-grained personal access token. | Replace it with a personal access token (classic) that has `admin:enterprise`. |
| `404 Not Found` | The request may be using the wrong API URL, or Enterprise Live Migrations may not be enabled for the destination enterprise. | For GHE.com, use the tenant API URL, such as `https://api.SUBDOMAIN.ghe.com`, without a trailing slash. Verify the source API URL as well. If both URLs are correct, contact GitHub Support to confirm that Enterprise Live Migrations is enabled. |

### Validate the tokens independently

Test each token against the `/user` endpoint before using it with Enterprise Live Migrations. These commands print response headers but discard the response body.

For the source (GitHub Enterprise Server) token:

```shell
curl --silent --show-error --output /dev/null --dump-header - \
  --header "Authorization: Bearer $SOURCE_OPERATOR_TOKEN" \
  "$SOURCE_API_URL/user"
```

For the target token:

```shell
curl --silent --show-error --output /dev/null --dump-header - \
  --header "Authorization: Bearer $TARGET_OPERATOR_TOKEN" \
  "$TARGET_API_URL/user"
```

Each request should return `200 OK`. The `X-OAuth-Scopes` response header should include `admin:enterprise`.

If `/user` returns `200 OK` but an Enterprise Live Migrations command returns `401 Bad credentials`, the CLI may have a different token or URL stored. Run `gh elm configure` again and carefully associate each token with its corresponding endpoint.

Operator tokens are stored locally by the Enterprise Live Migrations CLI. After rotating an operator token, run `gh elm configure` again or supply the replacement credentials using the appropriate command-line options.

This differs from the migration service tokens configured in step 4. Updated migration service credentials are picked up automatically and do not require `ghe-config-apply` or a migration-service restart.

Do not include access tokens in logs, screenshots, support bundles, or support requests. If the problem continues, provide GitHub Support with the HTTP status, endpoint hostname, migration ID, timestamp with timezone, and any correlation ID—but not the token.

## The source GHES URL was rejected

Enterprise Live Migrations requires the GitHub Enterprise Server URL to use HTTPS. If the URL is configured with HTTP, the migration will fail preflight validation.

## Collecting logs for support

When contacting GitHub Support, the most useful artifacts are:

1. **A support bundle** (preferred): Run `ghe-support-bundle -u` on the GitHub Enterprise Server appliance. This captures all Enterprise Live Migrations logs automatically.
1. **Migration status output**: `gh elm migration status --migration-id MIGRATION-ID`
1. **The migration ID** and approximate time of failure (with timezone)
1. **Any correlation IDs** from error messages

If a support bundle is not possible, you can collect logs manually:

```shell copy
journalctl -t elm-exporter-migration-manager --since "24 hours ago" > migration-manager.log
journalctl -t elm-exporter-backfiller --since "24 hours ago" > backfiller.log
journalctl -t elm-exporter-sender --since "24 hours ago" > sender.log
journalctl -t elm-exporter-git-syncer --since "24 hours ago" > git-syncer.log
```
