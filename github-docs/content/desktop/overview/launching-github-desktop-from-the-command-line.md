# Launching GitHub Desktop from the command line

{% mac %}

1. In the menu bar, select the **GitHub Desktop** menu, then click **Install Command Line Tool**.
![Screenshot of the menu bar on a Mac. Under the "GitHub Desktop" dropdown menu, the option "Install command line tool" is highlighted in blue.](/assets/images/help/desktop/mac-install-command-line-tool.png)
1. Open Terminal.
1. To launch GitHub Desktop to the last opened repository, type `github`. To launch GitHub Desktop for a particular repository, type `github` followed by the path to the repository.


   ```shell
   github /PATH/TO/REPO
   ```

   You can also change to your repository path and then type `github .` to open that repository.

   ```shell
   $ cd /PATH/TO/REPO
   [repo]$ github .
   ```

{% endmac %}

{% windows %}

1. Open a command prompt.
1. To launch GitHub Desktop to the last opened repository, type `github`. To launch GitHub Desktop for a particular repository, type `github` followed by the path to the repository.


   ```shell
   C:\Users\octocat> github PATH\TO\REPO
   ```

   You can also change to your repository path and then type `github .` to open that repository.

   ```shell
   C:\Users\octocat> cd REPO\MY-REPO
   C:\Users\octocat\repo\myrepo> github .
   ```

{% endwindows %}
