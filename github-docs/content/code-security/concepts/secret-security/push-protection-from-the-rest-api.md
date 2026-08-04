# Working with push protection from the REST API

## About push protection from the REST API

Push protection prevents you from accidentally committing secrets to a repository by blocking pushes containing supported secrets.

The "Create a blob" and "Create or update file contents" endpoints in the REST API include push protection. See [Blobs?Apiversion=2022 11 28](https://docs.github.com/en/rest/git/blobs?apiVersion=2022-11-28#create-a-blob) and [Contents?Apiversion=2022 11 28](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents).

If you make a request with these endpoints whose content includes a supported secret, the REST API will return a 409 error, indicating that a secret has been detected.

To resolve the error, you can either:

* **Remove** the secret from the content of your API request before trying again.
* **Create a push protection bypass:** You can bypass push protection using the "Create a push protection bypass" endpoint. For more information, see [Secret Scanning?Apiversion=2022 11 28](https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#create-a-push-protection-bypass).

## Further reading

* [Push Protection On The Command Line](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-on-the-command-line)
* [Push Protection In The GitHub UI](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-in-the-github-ui)
