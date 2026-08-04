# Why is Git always asking for my credentials?

Using an HTTPS remote URL has some advantages compared with using SSH. It's easier to set up than SSH, and usually works through strict firewalls and proxies. However, it also prompts you to enter your GitHub credentials every time you pull or push a repository.

When Git prompts you for your password, enter your personal access token. Alternatively, you can use a credential helper like [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md). Password-based authentication for Git has been removed in favor of more secure authentication methods. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


You can avoid being prompted for your password by configuring Git to [cache your credentials](/get-started/git-basics/caching-your-github-credentials-in-git) for you. Once you've configured credential caching, Git automatically uses your cached personal access token when you pull or push a repository using HTTPS.


If you are an [Enterprise Managed User](/get-started/learning-about-github/types-of-github-accounts#managed-user-accounts), and your enterprise owners do not have [the SSO Redirect setting](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users) enabled for the enterprise, then credential caching may not work properly when using [Git Credential Manager (GCM)](https://github.com/git-ecosystem/git-credential-manager). You will need to disable GCM [account filtering](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/configuration.md#credentialgithubaccountfiltering) locally in this situation to prevent getting prompted for authentication each time you perform a Git operation. For more details, see [Caching Your GitHub Credentials In Git](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git).


## Further reading

* [About Remote Repositories](https://docs.github.com/en/get-started/git-basics/about-remote-repositories)
* [About Authentication To GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
* [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)
* [Caching Your GitHub Credentials In Git](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git)
