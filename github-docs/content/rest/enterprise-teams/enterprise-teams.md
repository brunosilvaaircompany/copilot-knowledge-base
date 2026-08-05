# REST API endpoints for enterprise teams

## About enterprise teams

These endpoints are only available to authenticated members of the enterprise team's enterprise with classic personal access tokens with the `read:enterprise` [scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) for `GET` APIs and `admin:enterprise` for other APIs.

These endpoints are not compatible with fine-grained personal access tokens or GitHub App access tokens.

GitHub generates the enterprise team's `slug` from the team `name` and adds the `ent:` prefix.
