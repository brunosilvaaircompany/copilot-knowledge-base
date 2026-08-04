# Configuring a default editor in GitHub Desktop

## Introduction

GitHub Desktop provides support for a number of editors, and also allows you to select a custom editor if your preferred editor is not supported. If you installed an editor while GitHub Desktop was open you will need to quit and reopen GitHub Desktop in order for the editor to be detected.

## Supported editors

{% mac %}

* [MacVim](https://macvim-dev.github.io/macvim/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Visual Studio Codium](https://vscodium.com/)
* [Sublime Text](https://www.sublimetext.com/)
* [BBEdit](http://www.barebones.com/products/bbedit/)
* [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)
* [JetBrains PhpStorm](https://www.jetbrains.com/phpstorm/)
* [JetBrains Rider](https://www.jetbrains.com/rider/)
* [JetBrains PyCharm](https://www.jetbrains.com/pycharm/)
* [JetBrains RubyMine](https://www.jetbrains.com/rubymine/)
* [JetBrains IntelliJ IDEA](https://www.jetbrains.com/idea/)
* [JetBrains GoLand](https://www.jetbrains.com/go/)
* [JetBrains Fleet](https://www.jetbrains.com/fleet/)
* [JetBrains DataSpell](https://www.jetbrains.com/dataspell/)
* [Brackets](http://brackets.io/)
  * To use Brackets with GitHub Desktop, you must install the Command Line shortcut. To install the shortcut, open Brackets, click **File** in the menu bar, then click **Install Command Line Shortcut**.
* [Typora](https://typora.io/)
* [CodeRunner](https://coderunnerapp.com/)
* [SlickEdit](https://www.slickedit.com/)
* [Xcode](https://developer.apple.com/xcode/)
* [RStudio](https://rstudio.com/)
* [Nova](https://nova.app/)
* [Android Studio](https://developer.android.com/studio)
* [Aptana Studio](http://www.aptana.com/)
* [Neovide](https://neovide.dev/)
* [Emacs](https://www.gnu.org/software/emacs/)
* [Lite XL](https://lite-xl.com/)
* [Pulsar](https://pulsar-edit.dev/)
* [Zed](https://zed.dev/)

{% endmac %}

{% windows %}

* [Visual Studio Code](https://code.visualstudio.com/)
* [Visual Studio Codium](https://vscodium.com/)
* [Sublime Text](https://www.sublimetext.com/)
* [ColdFusion Builder](https://www.adobe.com/products/coldfusion-builder.html)
* [Typora](https://typora.io/)
* [SlickEdit](https://www.slickedit.com/)
* [JetBrains IntelliJ Idea](https://www.jetbrains.com/idea/)
* [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)
* [JetBrains PhpStorm](https://www.jetbrains.com/phpstorm/)
* [JetBrains Rider](https://www.jetbrains.com/rider/)
* [JetBrains CLion](https://www.jetbrains.com/clion/)
* [JetBrains PyCharm](https://www.jetbrains.com/pycharm/)
* [JetBrains RubyMine](https://www.jetbrains.com/rubymine/)
* [JetBrains GoLand](https://www.jetbrains.com/go/)
* [JetBrains Fleet](https://www.jetbrains.com/fleet/)
* [JetBrains DataSpell](https://www.jetbrains.com/dataspell/)
* [Android Studio](https://developer.android.com/studio)
* [Brackets](http://brackets.io/)
* [Notepad++](https://notepad-plus-plus.org/)
* [RStudio](https://rstudio.com/)
* [Aptana Studio](http://www.aptana.com/)

{% endwindows %}

## Configuring a default editor

{% mac %}

1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)

1. In the Settings window, select **Integrations**.
   ![Screenshot of the "Settings" window. In the left sidebar, the "Integrations" option is highlighted in blue and outlined in orange.](/assets/images/help/desktop/mac-select-integrations-pane.png)
1. Under "External Editor", use the dropdown menu to select the editor you want to set as your default.
1. Click **Save**.

{% endmac %}

{% windows %}

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is outlined in orange.](/assets/images/help/desktop/windows-choose-options.png)

1. In the Options window, select **Integrations**.
   ![Screenshot of the "Options" window. In the left sidebar, the "Integrations" option is highlighted in blue and outlined in orange.](/assets/images/help/desktop/windows-select-integrations-pane.png)
1. Under "External Editor", use the dropdown menu to select the editor you want to set as your default.
1. Click **Save**.

{% endwindows %}

## Configuring a custom editor

1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)

1. In the Settings window, select **Integrations**.
   ![Screenshot of the "Settings" window. In the left sidebar, the "Integrations" option is highlighted in blue and outlined in orange.](/assets/images/help/desktop/mac-select-integrations-pane.png)
1. Under "External Editor", use the dropdown menu to select **Configure Custom Editor**.
1. Click **Choose** to open the system dialog to navigate to the path of your custom editor.
1. Under "Arguments", enter any arguments you would like to use after the "%TARGET_PATH%" variable. Reference supporting documentation for your custom editor to ensure you have the arguments set correctly, as invalid arguments can prevent the editor from launching in GitHub Desktop.
1. Click **Save**.

## Opening a repository in the default editor

To open the current repository in the default editor, you can use the menu bar:

1. In the menu bar, select **Repository**.
1. Click **Open in default editor**

If you want to open another repository in the default editor, you can use the repository list.

1. In the upper-left corner of GitHub Desktop, to the right of the current repository name, click {% octicon "triangle-down" aria-label="The triangle-down icon" %}.
1. Right-click the repository, then click **Open in default editor**.

{% mac %}

> [!TIP]
> You can use the <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>A</kbd> keyboard shortcut to open a repository in the default editor.

{% endmac %}

{% windows %}

> [!TIP]
> You can use the <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> keyboard shortcut to open a repository in the default editor.

{% endwindows %}

## Opening a file in the default editor

1. Navigate to the "Changes" tab in the left sidebar.
1. Double-click on the file, or right-click on the file and select **Open in default editor**.
