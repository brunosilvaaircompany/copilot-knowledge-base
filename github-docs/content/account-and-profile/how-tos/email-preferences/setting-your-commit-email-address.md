# Setting your commit email address

## Setting your commit email address on GitHub


If you haven't enabled email address privacy, you can choose which verified email address to author changes with when you edit, delete, or create files or merge a pull request in the user interface. If you enabled email address privacy, then the commit author email address cannot be changed and will be a no-reply by default. For more information about the exact form the no-reply email address can take, see [Email Addresses Reference](https://docs.github.com/en/account-and-profile/reference/email-addresses-reference#your-noreply-email-address).



1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "mail" aria-hidden="true" aria-label="mail" %} Emails**.

1. In "Add email address", type your email address and click **Add**.
1. [Verify your email address](/account-and-profile/how-tos/email-preferences/verifying-your-email-address).

1. In the "Primary email address" dropdown menu, select the email address you'd like to associate with your web-based Git operations.

   ![Screenshot of the "Email" settings page. Under "Primary email address," a dropdown menu, labeled with Octocat's email address, is outlined in orange.](/assets/images/help/settings/email-primary.png)

1. To keep your email address private when performing web-based Git operations, select **Keep my email addresses private**.


## Setting your commit email address in Git

You can use the `git config` command to change the email address you associate with your Git commits. The new email address you set will be visible in any future commits you push to GitHub from the command line. Any commits you made prior to changing your commit email address are still associated with your previous email address.

### Setting your email address for every repository on your computer

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.


1. Set an email address in Git. You can use your [GitHub-provided `noreply` email address](/account-and-profile/reference/email-addresses-reference#your-noreply-email-address) or any email address.


   ```shell
   git config --global user.email "YOUR_EMAIL"
   ```

1. Confirm that you have set the email address correctly in Git:


   ```shell
   $ git config --global user.email
   email@example.com
   ```

1. Add the email address to your account on GitHub, so that your commits are attributed to you and appear in your contributions graph. For more information, see [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).


### Setting your email address for a single repository

GitHub uses the email address set in your local Git configuration to associate commits pushed from the command line with your account on GitHub.

You can change the email address associated with commits you make in a single repository. This will override your global Git configuration settings in this one repository, but will not affect any other repositories.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.


1. Change the current working directory to the local repository where you want to configure the email address that you associate with your Git commits.
1. Set an email address in Git. You can use your [GitHub-provided `noreply` email address](/account-and-profile/reference/email-addresses-reference#your-noreply-email-address) or any email address.


   ```shell
   git config user.email "YOUR_EMAIL"
   ```

1. Confirm that you have set the email address correctly in Git:


   ```shell
   $ git config user.email
   email@example.com
   ```

1. Add the email address to your account on GitHub, so that your commits are attributed to you and appear in your contributions graph. For more information, see [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).


## Next steps

For reference information, see [Email Addresses Reference](https://docs.github.com/en/account-and-profile/reference/email-addresses-reference).

For more information about setting your Git username, see [Setting Your Username In Git](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git).
