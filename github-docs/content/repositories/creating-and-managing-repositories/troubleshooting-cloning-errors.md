# Troubleshooting cloning errors

## HTTPS cloning errors

There are a few common errors when using HTTPS with Git. These errors usually indicate you have an old version of Git, or you don't have access to the repository.

Here's an example of an HTTPS error you might receive:

```shell
> error: The requested URL returned error: 401 while accessing
> https://github.com/USER/REPO.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://github.com/USER/REPO.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://github.com/USER/REPO.git/info/refs not found: did you run git
> update-server-info on the server?
```

### Check your Git version

There's no minimum Git version necessary to interact with GitHub, but we've found version 1.7.10 to be a comfortable stable version that's available on many platforms. You can always [download the latest version on the Git website](https://git-scm.com/downloads).

### Ensure the remote is correct

The repository you're trying to fetch must exist on your GitHub Enterprise Server instance.

You can find the URL of the local repository by opening the command line and
typing `git remote -v`:

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/cocoareactive.git (fetch)
> origin  https://github.com/ghost/cocoareactive.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Alternatively, you can change the URL through our
[GitHub Desktop](https://desktop.github.com/) application.

### Provide an access token

To access GitHub, you must authenticate with a personal access token instead of your password. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

If you are accessing an organization that uses SAML SSO and you are using a personal access token (classic), you must also authorize your personal access token to access the organization before you authenticate. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on) and [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on).


### Check your permissions

When prompted for a username and password, make sure you use an account that has access to the repository.

> [!TIP]
> If you don't want to enter your credentials every time you interact with the remote repository, you can turn on [credential caching](/get-started/git-basics/caching-your-github-credentials-in-git). If you are already using credential caching, please make sure that your computer has the correct credentials cached. Incorrect or out of date credentials will cause authentication to fail.

### Use SSH instead

If you've previously set up SSH keys, you can use the SSH clone URL instead of HTTPS. For more information, see [About Remote Repositories](https://docs.github.com/en/get-started/git-basics/about-remote-repositories).

## Error: Repository not found

If you see this error when cloning a repository, it means that the repository does not exist or you do not have permission to access it. is in private mode.{% endif %} There are a few solutions to this error, depending on the cause.

### Check your spelling

Typos happen. If you try to clone `git@github.com:owner/repotile.git`, but the repository is really named `owner/repoti1e` you will receive this error.

To avoid this error, when cloning, always copy and paste the clone URL from the repository's page. For more information, see [Cloning A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

To update the remote on an existing repository, see [Managing Remote Repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories).

### Checking your permissions

If you are trying to clone a private repository but do not have permission to view the repository, you will receive this error.

Make sure that you have access to the repository in one of these ways:

* The owner of the repository
* A [collaborator](/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository) on the repository
* A [member of a team](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team) that has access to the repository (if the repository belongs to an organization)

### Check your SSH access

In rare circumstances, you may not have the proper SSH access to a repository.

You should ensure that the SSH key you are using is attached to your personal account on GitHub. You can check this by typing
the following into the command line:

```shell
$ ssh -T git@github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```


If the repository belongs to an organization and you're using an SSH key generated by an OAuth app, OAuth app access may have been restricted by an organization owner. For more information, see [About OAUTH App Access Restrictions](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions).


For more information, see [Adding a new SSH key to your GitHub account](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).



### Check if your instance is in private mode

If your site administrator has enabled private mode on your GitHub Enterprise instance, anonymous clones over `git://` will be disabled. If you are unable to clone a repository, contact your site administrator.


### Check that the repository really exists

If all else fails, make sure that the repository really exists on your GitHub Enterprise Server instance!
If you're trying to push to a repository that doesn't exist, you'll get this error.

## Error: Remote HEAD refers to nonexistent ref, unable to checkout

This error occurs if the default branch of a repository has been deleted on your GitHub Enterprise Server instance.

Detecting this error is simple; Git will warn you when you try to clone the repository:

```shell
$ git clone https://github.com/USER/REPO.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

To fix the error, you'll need to be an administrator of the repository on your GitHub Enterprise Server instance.
You'll want to [change the default branch](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch) of the repository.

After that, you can get a list of all the available branches from the command line:

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

Then, you can just switch to your new branch:

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
