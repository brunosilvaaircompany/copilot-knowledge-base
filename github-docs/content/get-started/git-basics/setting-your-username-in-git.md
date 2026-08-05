# Setting your username in Git

## About Git usernames

You can change the name that is associated with your Git commits using the `git config` command. The new name you set will be visible in any future commits you push to GitHub from the command line. If you'd like to keep your real name private, you can use any text as your Git username.

Changing the name associated with your Git commits using `git config` will only affect future commits and will not change the name used for past commits.

## Setting your Git username for every repository on your computer

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.


1. Set a Git username:


   ```shell
   git config --global user.name "Mona Lisa"
   ```

1. Confirm that you have set the Git username correctly:


   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

## Setting your Git username for a single repository

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.


1. Change the current working directory to the local repository where you want to configure the name that is associated with your Git commits.

1. Set a Git username:


   ```shell
   git config user.name "Mona Lisa"
   ```

1. Confirm that you have set the Git username correctly:


   ```shell
   $ git config user.name
   > Mona Lisa
   ```

## Further reading

* [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
* ["Git Configuration" from the _Pro Git_ book](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
