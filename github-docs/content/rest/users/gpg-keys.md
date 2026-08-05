# REST API endpoints for GPG keys

## About user GPG key administration

The data returned in the `public_key` response field is not a GPG formatted key. When a user uploads a GPG key, it is parsed and the cryptographic public key is extracted and stored. This cryptographic key is what the endpoints in this category will return. This key is not suitable for direct use in programs such as GPG.

If a request URL does not include a `{username}` parameter then the response will be for the signed-in user (and you must pass [authentication information](/rest/authentication/authenticating-to-the-rest-api) with your request). Additional private information, such as whether a user has two-factor authentication enabled, is included when authenticated through Basic Authentication or OAuth with the `user` scope.
