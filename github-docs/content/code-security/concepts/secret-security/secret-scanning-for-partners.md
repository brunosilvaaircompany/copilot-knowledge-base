# Secret scanning for partners

## About secret scanning alerts for partners

GitHub scans public repositories and public npm packages for secrets issued by specific service providers who joined our partnership program, and alerts the relevant service provider whenever a secret is detected in a commit. The service provider validates the string and then decides whether they should revoke the secret, issue a new secret, or contact you directly. Their action will depend on the associated risks to you or them. 
To find out about our partner program, see [Secret Scanning Partner Program](https://docs.github.com/en/code-security/tutorials/secret-scanning-partner-program).



> [!NOTE]You cannot change the configuration of secret scanning for partner patterns on public repositories.

Secret scanning alerts for partners scans:

* Descriptions and comments in issues
* Titles, descriptions, and comments, in open and closed _historical_ issues
* Titles, descriptions, and comments in pull requests
* Titles, descriptions, and comments in GitHub Discussions
* Wikis
* Secret gists



The reason partner alerts are directly sent to the secret providers whenever a leak is detected for one of their secrets is that this enables the provider to take immediate action to protect you and protect their resources. The notification process for regular alerts is different. Regular alerts are displayed on the repository's **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab on GitHub for you to resolve.

If access to a resource requires paired credentials, then secret scanning will create an alert only when both parts of the pair are detected in the same file. This ensures that the most critical leaks are not hidden behind information about partial leaks. Pair matching also helps reduce false positives since both elements of a pair must be used together to access the provider's resource.


## What are the supported secrets

For information about the secrets and service providers supported by push protection, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).

## Further reading

* [Secret Scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning)
* [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns)
* [Secret Scanning Partner Program](https://docs.github.com/en/code-security/tutorials/secret-scanning-partner-program)
