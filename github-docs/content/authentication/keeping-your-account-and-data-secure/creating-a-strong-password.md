# Creating a strong password

You must choose or generate a password for your account on GitHub that is at least:
* Eight characters long, if it includes a number and a lowercase letter, or
* 15 characters long with any combination of characters

To keep your account secure, we recommend you follow these best practices:
* Use a password manager to generate a password of at least 15 characters.
* Generate a unique password for GitHub. If you use your GitHub password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your account.
* Configure two-factor authentication for your personal account. For more information, see [About Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication).
* Optionally, add a passkey to your account to enable a secure, passwordless login. See [About Passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys).

* Never share your password, even with a potential collaborator. Each person should use their own personal account on GitHub. For more information on ways to collaborate, see: [Inviting Collaborators To A Personal Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository), [About Collaborative Development Models](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models), or [Collaborating With Groups In Organizations](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations).


When you type a password to sign in, create an account, or change your password, GitHub will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be identified as weak even if you have never used that password before.

GitHub only inspects the password at the time you type it, and never stores the password you entered in plaintext. For more information, see [HaveIBeenPwned](https://haveibeenpwned.com/).



You can only use your password to log on to GitHub using your browser. When you authenticate to GitHub with other means, such as the command line or API, you should use other credentials. For more information, see [About Authentication To GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).

When Git prompts you for your password, enter your personal access token. Alternatively, you can use a credential helper like [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md). Password-based authentication for Git has been removed in favor of more secure authentication methods. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


## Further reading

* [Caching Your GitHub Credentials In Git](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git)
* [Keeping Your Account And Data Secure](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure)
