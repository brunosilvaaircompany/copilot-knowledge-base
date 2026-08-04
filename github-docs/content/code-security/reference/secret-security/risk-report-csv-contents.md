# Contents of the secret risk assessment report CSV

The secret risk assessment report CSV file includes the following information:

| CSV column | Name                   | Description                                               |
| ---------- | ---------------------- | --------------------------------------------------------- |
| A          | `Organization Name`    | The name of the organization the secret was detected in |
| B          | `Name`                 | The token name for the type of secret |
| C          | `Slug`                 | The normalized string for the token. This corresponds to `Token` in the table of supported secrets. See [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns#supported-provider-patterns). |
| D          | `Push Protected`       | A `boolean` to indicate whether the secret would be detected and blocked by push protection if it were enabled |
| E          | `Generic Pattern` | A `boolean` to indicate whether the secret matched a generic pattern and would generate an alert if secret scanning with generic patterns were enabled |
| F          | `Secret Count`         | An aggregate count of the active and inactive secrets found for the token type |
| G          | `Repository Count`         | An aggregate count of distinct repositories in which the secret type was found, including public, private, internal, and archived repositories |

## Next steps

To learn which secrets you should prioritize for remediation, see [Interpret Secret Risk Assessment](https://docs.github.com/en/code-security/tutorials/secure-your-organization/interpret-secret-risk-assessment#step-5-prioritize-remediation-and-related-actions).
