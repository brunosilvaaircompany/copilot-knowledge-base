# Associating text editors with Git

## Using Visual Studio Code as your editor

{% mac %}

1. Install [Visual Studio Code](https://code.visualstudio.com/) (VS Code). For more information, see [Setting up VS Code](https://code.visualstudio.com/Docs/setup/setup-overview) in the VS Code documentation.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Type this command:

   ```shell
   git config --global core.editor "code --wait"
   ```

{% endmac %}

{% windows %}

1. Install [Visual Studio Code](https://code.visualstudio.com/) (VS Code). For more information, see [Setting up VS Code](https://code.visualstudio.com/Docs/setup/setup-overview) in the VS Code documentation.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Type this command:

   ```shell
   git config --global core.editor "code --wait"
   ```

{% endwindows %}

{% linux %}

1. Install [Visual Studio Code](https://code.visualstudio.com/) (VS Code). For more information, see [Setting up VS Code](https://code.visualstudio.com/Docs/setup/setup-overview) in the VS Code documentation.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Type this command:

   ```shell
   git config --global core.editor "code --wait"
   ```

{% endlinux %}

## Using Sublime Text as your editor

{% mac %}

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html) in the Sublime Text documentation.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Type this command:

   ```shell
   git config --global core.editor "subl -n -w"
   ```

{% endmac %}

{% windows %}

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html) in the Sublime Text documentation.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Type this command:

   ```shell
   git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
   ```

{% endwindows %}

{% linux %}

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html) in the Sublime Text documentation.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Type this command:

   ```shell
   git config --global core.editor "subl -n -w"
   ```

{% endlinux %}

{% windows %}

## Using Notepad++ as your editor

1. Install Notepad++ from https://notepad-plus-plus.org/. For more information, see [Getting started](https://github.com/notepad-plus-plus/npp-usermanual/blob/master/content/docs/getting-started.md) in the Notepad++ documentation.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Type this command:

   ```shell
   git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
   ```

{% endwindows %}
