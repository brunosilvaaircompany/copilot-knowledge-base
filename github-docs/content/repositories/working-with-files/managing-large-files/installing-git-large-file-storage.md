# Installing Git Large File Storage

{% mac %}

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**. Alternatively, you can install Git LFS using a package manager:
   * To use [Homebrew](https://brew.sh/), run `brew install git-lfs`.
   * To use [MacPorts](https://www.macports.org/), run `port install git-lfs`.

   If you install Git LFS with Homebrew or MacPorts, skip to step six.

1. On your computer, locate and unzip the downloaded file.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Change the current working directory into the folder you downloaded and unzipped.

   ```shell
   cd ~/Downloads/git-lfs-X.X.X
   ```

   > [!NOTE]
   > The file path you use after `cd` depends on your operating system, Git LFS version you downloaded, and where you saved the Git LFS download.

1. To install the file, run this command:

   ```shell
   $ ./install.sh
   > Git LFS initialized.
   ```

   > [!NOTE]
   > You may have to use `sudo ./install.sh` to install the file.

1. Next, make required changes to your global Git config:

   ```shell
   $ git lfs install
   > Git LFS initialized.
   ```

1. If you don't see a message indicating that `git lfs install` was successful, please contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator. Be sure to include the name of your operating system.

{% endmac %}

{% windows %}

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**.

   > [!TIP]
   > For more information about alternative ways to install Git LFS for Windows, see this [Getting started guide](https://github.com/github/git-lfs#getting-started).

1. On your computer, locate the downloaded file.
1. Double click on the file called _git-lfs-windows-1.X.X.exe_, where 1.X.X is replaced with the Git LFS version you downloaded. When you open this file Windows will run a setup wizard to install Git LFS.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.
 As the setup wizard may have modified your system `PATH`, opening a new session will ensure Git can locate Git LFS.
1. Verify that the installation was successful:

   ```shell
   $ git lfs install
   > Git LFS initialized.
   ```

1. If you don't see a message indicating that `git lfs install` was successful, please contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator. Be sure to include the name of your operating system.

{% endwindows %}

{% linux %}

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**.

   > [!TIP]
   > For more information about alternative ways to install Git LFS for Linux, see this [Getting started guide](https://github.com/github/git-lfs#getting-started).

1. On your computer, locate and unzip the downloaded file.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Change the current working directory into the folder you downloaded and unzipped.

   ```shell
   cd ~/Downloads/git-lfs-1.X.X
   ```

   > [!NOTE]
   > The file path you use after `cd` depends on your operating system, Git LFS version you downloaded, and where you saved the Git LFS download.

1. To install the file, run this command:

   ```shell
   $ ./install.sh
   > Git LFS initialized.
   ```

   > [!NOTE]
   > You may have to use `sudo ./install.sh` to install the file.

1. Next, make required changes to your global Git config:

   ```shell
   $ git lfs install
   > Git LFS initialized.
   ```

1. If you don't see a message indicating that `git lfs install` was successful, please contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator. Be sure to include the name of your operating system.

{% endlinux %}

## Further reading

* [Configuring Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/configuring-git-large-file-storage)
