# Remembering your GitHub username or email

## GitHub Desktop users

{% mac %}

1. In the **GitHub Desktop** menu, click **Preferences**.
1. In the Preferences window, verify the following:
    * To view your GitHub username, click **Accounts**.
    * To view your Git email, click **Git**. Note that this email is not guaranteed to be [your primary email](/account-and-profile/how-tos/email-preferences/changing-your-primary-email-address).

{% endmac %}

{% windows %}

1. In the **File** menu, click **Options**.
1. In the Options window, verify the following:
    * To view your GitHub username, click **Accounts**.
    * To view your Git email, click **Git**. Note that this email is not guaranteed to be [your primary email](/account-and-profile/how-tos/email-preferences/changing-your-primary-email-address).

{% endwindows %}

## Finding your username in your `user.name` configuration

During set up, you may have [set your username in Git](/get-started/git-basics/setting-your-username-in-git). If so, you can review the value of this configuration setting:

```shell
$ git config user.name
# View the setting
YOUR-USERNAME
```

## Finding your username in the URL of remote repositories

If you have any local copies of personal repositories you have created or forked, you can check the URL of the remote repository.

> [!TIP]
> This method only works if you have an original repository or your own fork of someone else's repository. If you clone someone else's repository, their username will show instead of yours. Similarly, organization repositories will show the name of the organization instead of a particular user in the remote URL.

```shell
$ cd YOUR-REPOSITORY
# Change directories to the initialized Git repository
$ git remote -v
origin	https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git (fetch)
origin	https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git (push)
```

Your username is what immediately follows the `https://github.com/`.



## Further reading

* [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address)
