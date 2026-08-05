# REST API endpoints for SSH signing keys

## About SSH signing key administration

If a request URL does not include a `{username}` parameter then the response will be for the signed-in user (and you must pass [authentication information](/rest/authentication/authenticating-to-the-rest-api) with your request). Additional private information, such as whether a user has two-factor authentication enabled, is included when authenticated through Basic Authentication or OAuth with the `user` scope.
