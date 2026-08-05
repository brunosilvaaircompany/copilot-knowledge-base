# Supported secret scanning patterns

## About secret scanning patterns

There are three types of secret scanning alerts:

* **User alerts:** Reported to users in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of the repository, when a supported secret is detected in the repository.
* **Push protection alerts:** Reported to users in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of the repository, when a contributor bypasses push protection. 
* **Partner alerts:** Reported directly to secret providers that are part of secret scanning's partner program. These alerts are not reported in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of the repository.


For in-depth information about each alert type, see [About Alerts](https://docs.github.com/en/code-security/concepts/secret-security/about-alerts).

If you use the REST API for secret scanning, you can use the `Secret type` to report on secrets from specific issuers. For more information, see [Secret Scanning](https://docs.github.com/en/enterprise-cloud@latest/rest/secret-scanning).

### Pattern categories

| Category | Description | Detection approach | Example |
|----------|-------------|-------------------|---------|
| **Generic** | Secrets not tied to a specific provider, such as private keys and database connection strings | Regex-based | `rsa_private_key` |
| **AI-detected** | Passwords and other unstructured secrets detected using AI models | AI-based | `password` |
| **Provider** | Secrets tied to a specific service provider (such as AWS, Azure, Stripe) | Regex-based | `aws_access_key_id` |

### Capabilities by category

| Capability | Generic patterns | AI-detected | Provider patterns |
|------------|:-:|:-:|:-:|
| User alerts | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Partner notifications | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} (if partner) |
| Push protection (default) | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} (most) |
| Push protection (configurable) | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | Some |
| Validity checks | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | Some |
| Extended metadata | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | Some |
| Base64 format support | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | Some |

> [!NOTE]
> Validity and extended metadata checks are only available to users with GitHub Team or GitHub Enterprise who enable the feature as part of GitHub Secret Protection.

## Supported generic patterns



Precision levels are estimated based on the pattern type's typical false positive rates.




| Provider | Token | Description | Precision |
|:---------|:--------------------------------------|:------------|:----------|
| Generic | ec_private_key | Elliptic Curve (EC) private keys used for cryptographic operations | High |
| Generic | generic_private_key | Cryptographic private keys with `-----BEGIN PRIVATE KEY-----` header | High |
| Generic | http_basic_authentication_header | HTTP Basic Authentication credentials in request headers | Medium |
| Generic | http_bearer_authentication_header | HTTP Bearer tokens used for API authentication | Medium |
| Generic | mongodb_connection_string | Connection strings for MongoDB databases containing credentials | High |
| Generic | mysql_connection_url | Connection strings for MySQL databases containing credentials | High |
| Generic | openssh_private_key | OpenSSH format private keys used for SSH authentication | High |
| Generic | pgp_private_key | PGP (Pretty Good Privacy) private keys used for encryption and signing | High |
| Generic | postgres_connection_string | Connection strings for PostgreSQL databases containing credentials | High |
| Generic | rsa_private_key | RSA private keys used for cryptographic operations | High |






| Provider | Token | Description | Precision |
|:---------|:--------------------------------------|:------------|:----------|
| {% ifversion ghes > 3.18 %} |
| Generic | ec_private_key | Elliptic Curve (EC) private keys used for cryptographic operations | High |
|  |
|  |
| Generic | generic_private_key | Cryptographic private keys with `-----BEGIN PRIVATE KEY-----` header | High |
|  |
| Generic | http_basic_authentication_header | HTTP Basic Authentication credentials in request headers | Medium |
| Generic | http_bearer_authentication_header | HTTP Bearer tokens used for API authentication | Medium |
| Generic | mongodb_connection_string | Connection strings for MongoDB databases containing credentials | High |
| Generic | mysql_connection_url | Connection strings for MySQL databases containing credentials | High |
| Generic | openssh_private_key | OpenSSH format private keys used for SSH authentication | High |
| Generic | pgp_private_key | PGP (Pretty Good Privacy) private keys used for encryption and signing | High |
| Generic | postgres_connection_string | Connection strings for PostgreSQL databases containing credentials | High |
| Generic | rsa_private_key | RSA private keys used for cryptographic operations | High |

{% endif %}

>[!NOTE]
> Validity checks are **not supported** for generic patterns.



## Supported AI-detected patterns

Secret scanning uses Copilot to detect generic secrets using AI. See [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features).

| Provider | Token |
|----------|:--------------------|
|  Generic | password |

>[!NOTE] Push protection and validity checks are not supported for passwords.


## Supported provider patterns

Use the table below to search, filter, and browse all supported patterns. You can filter by provider name, push protection support, validity checks, and more.

<a name="token-versions"></a>

> [!NOTE] Service providers update the patterns used to generate tokens periodically and may support more than one version of a token. Push protection only supports the most recent token versions that secret scanning can identify with confidence. This avoids push protection blocking commits unnecessarily when a result may be a false positive, which is more likely to happen with legacy tokens.
