# Authenticating with Enterprise Managed Users

If you use a managed user account, you must authenticate through your identity provider (IdP) to access GitHub. The location where you can authenticate depends on whether your enterprise uses SAML or OIDC authentication.

## Supported authentication locations

Authentication location | SAML | OIDC
--- | --- | --- |
IdP application portal | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %}
Login page on GitHub |{% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}
The profile page for an organization or enterprise on GitHub | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}

## Authenticating via the login page

1. Navigate to [https://github.com/login](https://github.com/login).
1. In the "Username or email address" text box, enter your username including the underscore and short code.
1. To continue to your IdP, click **Sign in with your identity provider**.
