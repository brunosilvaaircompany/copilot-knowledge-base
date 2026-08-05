# Push protection from the command line

Push protection prevents you from accidentally committing secrets to a repository by blocking pushes containing supported secrets.

When you attempt to push a supported secret from the command line to a repository secured by push protection, GitHub will block the push.

You should either:

* **Remove** the secret from your branch. For more information, see [Resolving a blocked push](/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-on-the-command-line#resolving-a-blocked-push).
* **Follow a provided URL** to see what options are available to you to allow the push. For more information, see [Bypassing push protection](/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-on-the-command-line#bypassing-push-protection) and [Requesting bypass privileges](/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-on-the-command-line#requesting-bypass-privileges).

Up to five detected secrets will be displayed at a time on the command line. If a particular secret has already been detected in the repository and an alert already exists, GitHub will not block that secret.

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For example, you might revoke the secret and remove the secret from the repository's commit history. Real secrets that have been exposed must be revoked to avoid unauthorized access. You might consider first rotating the secret before revoking it. For more information, see [Removing Sensitive Data From A Repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

> [!NOTE]
> * If your Git configuration supports pushes to multiple branches, and not only to the current branch, your push may be blocked due to additional and unintended refs being pushed. For more information, see the [`push.default` options](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) in the Git documentation.
> * If secret scanning upon a push times out, GitHub will still scan your commits for secrets after the push.
