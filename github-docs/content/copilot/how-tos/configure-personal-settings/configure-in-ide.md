# Configuring GitHub Copilot in your environment

{% jetbrains %}

## About GitHub Copilot in JetBrains IDEs

If you use a JetBrains IDE, GitHub Copilot can help you with a variety of tasks, including generating code suggestions, explaining how the code in your editor works, and suggesting code fixes. After installation, you can enable or disable GitHub Copilot, and you can configure advanced settings within your IDE or on GitHub. This article describes how to configure GitHub Copilot in the IntelliJ IDE, but the user interfaces of other JetBrains IDEs may differ.

## Prerequisites

To configure GitHub Copilot in a JetBrains IDE, you must install the GitHub Copilot plugin. For more information, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains).

## Enabling or disabling GitHub Copilot

You can enable or disable GitHub Copilot from within your JetBrains IDE. The GitHub Copilot status icon in the bottom panel of the JetBrains window indicates whether GitHub Copilot is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable GitHub Copilot, click the status icon in the bottom panel on the right of the JetBrains window.

    ![Screenshot of the bottom panel in a JetBrains IDE. The GitHub Copilot status icon is outlined in dark orange.](/assets/images/help/copilot/status-icon-jetbrains.png)

1. If you are disabling GitHub Copilot, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click **Disable Completions**. Alternatively, click the language-specific button to disable GitHub Copilot for the specified language.

    ![Screenshot of the menu to disable GitHub Copilot globally or for the current language in a JetBrains IDE.](/assets/images/help/copilot/disable-copilot-global-or-language-jetbrains.png)

## Rebinding keyboard shortcuts

You can use the default keyboard shortcuts for inline suggestions in your JetBrains IDE when using GitHub Copilot. For a list of default keyboard shortcuts, see [Keyboard Shortcuts](https://docs.github.com/en/copilot/reference/keyboard-shortcuts).

Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command. For more information on rebinding keyboard shortcuts in your JetBrains IDE, see the JetBrains documentation. For example, you can view the [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) documentation.

## Configuring advanced settings for GitHub Copilot

You can manage advanced settings for GitHub Copilot in your JetBrains IDE, such as how your IDE displays inline suggestions, and which languages you want to enable or disable for GitHub Copilot.

1. In your JetBrains IDE, click the **File** menu (Windows), or the name of the application in the menu bar (macOS), then click **Settings**.

1. In the left sidebar click **Tools**, click **GitHub Copilot**
, and review the **General** and **Completions** settings.
1. Edit the settings according to your personal preferences.
   * To adjust the behavior and appearance of code suggestions, and whether to automatically check for updates, select or deselect the corresponding checkboxes.
   * If you have selected to receive automatic updates, you can choose whether to receive stable, but less frequent updates, or nightly updates, which may be less stable. Click the **Update channel** dropdown and select **Stable** for stable updates, or **Nightly** for nightly updates.

## Configuring language settings for GitHub Copilot

You can specify which languages you want to activate or deactivate GitHub Copilot for either in the IDE or by editing your `github-copilot.xml` file. If you make changes to language settings in your IDE, you can individually select and deselect the languages you want to activate or deactivate.

If you make changes to the language settings in your `github-copilot.xml` file, you can specify individual languages, or you can use a wildcard to activate or deactivate GitHub Copilot for all languages. You can also specify exceptions, which will override the wild card setting for the specified languages. For example, you can deactivate GitHub Copilot for all languages, except for Python and YAML. By default, when you install the GitHub Copilot extension, GitHub Copilot is activated for all languages.

### Configuring language settings in the IDE

1. In your JetBrains IDE, click the **File** menu (Windows), or the name of the application in the menu bar (macOS), then click **Settings**.

1. In the left sidebar click **Tools**, click **GitHub Copilot**
, then click **Completions**.
1. Under "Languages," select or deselect the checkboxes for the languages you want to activate or deactivate GitHub Copilot for.
1. Click **Apply**, and then click **OK**.
1. Restart your JetBrains IDE for the changes to take effect.

### Editing your `github-copilot.xml` file

To configure language settings in the `github-copilot.xml` file, you must edit the `languageAllowList`. Every line you add to the `languageAllowList` must contain an entry key and a value. The entry key is the name of the language, or (`*`) for a wildcard. The value is either `true` or `false`. If the value is `true`, GitHub Copilot is activated for the specified language. If the value is `false`, GitHub Copilot is deactivated for the specified language.

The file is located in the following directory:

* **macOS:** `~/Library/Application Support/JetBrains/<product><version>/options/github-copilot.xml`
* **Windows:** `%APPDATA%\JetBrains\<product><version>\options\github-copilot.xml`
* **Linux:** `~/.config/JetBrains/<product><version>/options/github-copilot.xml`

For example, if you are using IntelliJ IDEA 2021.1 on macOS, the file is located at `~/Library/Application Support/JetBrains/IdeaIC2021.1/options/github-copilot.xml`.

The `github-copilot.xml` file might not be generated until you make a change to your default language configuration in the IDE's settings. If you cannot locate the file, you should try modifying the default language settings in the IDE. For more information, see [Configuring language settings in the IDE](#configuring-language-settings-in-the-ide).

Alternatively, you can create the file manually and save it in the location for your operating system listed above. For more information, see [Example language configurations](#example-language-configurations).

1. Open the `github-copilot.xml` file in a text editor.
1. Between the `<map>` tags, add the line or lines for the languages you want to activate or deactivate GitHub Copilot for. For example, to deactivate GitHub Copilot for all languages:

    ```xml copy
    <entry key="*" value="false" />
    ```

1. Save the changes to the `github-copilot.xml` file.
1. Restart your JetBrains IDE for the changes to take effect.

### Example language configurations

The default configuration of the `github-copilot.xml` file, which enables GitHub Copilot for all languages is as follows:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

To deactivate GitHub Copilot for all languages, the wildcard (`*`) value is changed to `false`:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="false" />
      </map>
    </languageAllowList>
  </component>
</application>
```

To specify languages individually, add an entry for each language you want to activate or deactivate GitHub Copilot for. Specific language settings will override the wildcard. For example, to activate GitHub Copilot for Python and YAML, and deactivate GitHub Copilot for all other languages, add the following entries:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="false" />
        <entry key="Python" value="true" />
        <entry key="YAML" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

You can also add a configuration to make the `languageAllowList` readonly in the IDE's settings. This will prevent you from changing the language settings in the IDE. For example:

```xml copy
<application>
  <component name="github-copilot">
    <option name="languageAllowListReadOnly" value="true" />
    <languageAllowList>
      <map>
        <entry key="*" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

## Configuring Copilot settings on GitHub.com

If you are using a Copilot Pro, Copilot Pro+, or Copilot Max plan, you can choose to allow or block inline suggestions that match publicly available code. You can also allow or block the collection and retention of the prompts you enter and Copilot's suggestions. You configure this in your personal settings on GitHub.com. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies).

## Authenticating to an account on GHE.com

If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).


## Further reading

* [GitHub Copilot FAQ](https://github.com/features/copilot/#faq)

{% endjetbrains %}

{% visualstudio %}

## About GitHub Copilot in Visual Studio

If you use Visual Studio, GitHub Copilot can help you with a variety of tasks, including generating code suggestions, explaining how the code in your editor works, and suggesting code fixes. After installation, you can enable or disable GitHub Copilot, and you can configure advanced settings within Visual Studio or on GitHub.

## Prerequisites

To configure GitHub Copilot in Visual Studio, you must install the GitHub Copilot plugin. For more information, see [Install Copilot Extension?Tool=Visualstudio](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=visualstudio).

## Rebinding keyboard shortcuts

You can use the default keyboard shortcuts for inline suggestions in Visual Studio when using GitHub Copilot. For a list of default keyboard shortcuts, see [Keyboard Shortcuts](https://docs.github.com/en/copilot/reference/keyboard-shortcuts).

If you don't want to use the default keyboard shortcuts in Visual Studio when using GitHub Copilot, you can rebind the shortcuts in the Keyboard editor using your preferred keyboard shortcuts for each specific command.

1. In the Visual Studio menu bar, under **Tools**, click **Options**.

   ![Screenshot of the Visual Studio menu bar. The "Tools" menu is expanded, and the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, under **Environment**, click **Keyboard**.
1. Under "Show commands containing:", search for the command you want to rebind.

   ![Screenshot of the "Show commands containing" search bar. The string "tools.next" is entered in the search field.](/assets/images/help/copilot/vs-show-commands-containing.png)

1. Under "Press shortcut keys," type the shortcut you want to assign to the command, then click **Assign**.

   ![Screenshot of the fields for entering a new keyboard shortcut assignment.](/assets/images/help/copilot/vs-rebind-shortcut.png)

## Enabling or disabling GitHub Copilot

The GitHub Copilot status icon in the bottom panel of the Visual Studio window indicates whether GitHub Copilot is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, it will have a diagonal line through it.

1. To enable or disable GitHub Copilot, click the GitHub Copilot icon in the bottom panel of the Visual Studio window.

   ![Screenshot of editor margin in Visual Studio with the GitHub Copilot icon emphasized.](/assets/images/help/copilot/editor-margin-visual-studio.png)

1. If you are disabling GitHub Copilot, you will be asked whether you want to disable suggestions globally, or for the language of the file you are currently editing.

   * To disable suggestions from GitHub Copilot globally, click **Enable Globally**.
   * To disable suggestions from GitHub Copilot for the specified language, click **Enable for LANGUAGE**.


## Configuring ReSharper for GitHub Copilot

If you use ReSharper, GitHub Copilot may work best when you configure ReSharper to use GitHub Copilot's native IntelliSense. For more information about ReSharper, see the [ReSharper documentation](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. In the Visual Studio menu bar, under **Extensions**, click **ReSharper**, then click **Options**.
1. In the "Options" dialog, under **Environment**, click **IntelliSense** and then click **General**.
1. Under "General" select **Visual Studio** and then click **Save**.

## Configuring Copilot settings on GitHub.com

If you are using a Copilot Pro, Copilot Pro+, or Copilot Max plan, you can choose to allow or block inline suggestions that match publicly available code. You can also allow or block the collection and retention of the prompts you enter and Copilot's suggestions. You configure this in your personal settings on GitHub.com. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies).

## Authenticating to an account on GHE.com

If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).


## Enabling next edit suggestions

To use next edit suggestions in Visual Studio, you need to enable the feature first.

1. In the Visual Studio menu bar, under **Tools**, click **Options**.
1. In the "Options" dialog, under **GitHub**, click **Copilot** and then click **Copilot Completions**.
1. Check **Enable next edit suggestions**.

## Further reading

* [GitHub Copilot FAQ](https://github.com/features/copilot/#faq)

{% endvisualstudio %}

{% vscode %}

## About GitHub Copilot in Visual Studio Code

If you use Visual Studio Code, GitHub Copilot can help you with a variety of tasks, including generating code suggestions, explaining how the code in your editor works, and suggesting edits based on your instructions. You can enable or disable GitHub Copilot, and configure advanced settings within Visual Studio Code or on GitHub.

You can learn more about scenarios and setup in the [VS Code documentation](https://code.visualstudio.com/docs/copilot/overview#_use-cases-for-github-copilot-in-vs-code).

## Rebinding keyboard shortcuts

You can use the default keyboard shortcuts for inline suggestions in VS Code when using GitHub Copilot. Search keyboard shortcuts by command name in the Keyboard Shortcuts editor. For a list of default keyboard shortcuts, see [Keyboard Shortcuts](https://docs.github.com/en/copilot/reference/keyboard-shortcuts).

Alternatively, you can rebind the shortcut for each command in the Keyboard Shortcuts editor. For more information, see the [Visual Studio Code documentation on editing shortcuts](https://code.visualstudio.com/Docs/editor/keybindings).

## Enabling or disabling GitHub Copilot inline suggestions

You can enable or disable GitHub Copilot from within Visual Studio Code.

1. To configure inline suggestions, click the arrow next to the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the title bar of Visual Studio Code, then select **Configure Inline Suggestions**.

    ![Screenshot of the option in the GitHub Copilot dropdown. "Configure inline suggestions" is highlighted in orange.](/assets/images/help/copilot/configure-code-completions-option-vscode.png)

1. In the "Configure Copilot Completions" dialog, select **Enable Completions** or **Disable Completions**.

    ![Screenshot of the "Configure Copilot Completions" dialog. Enable Completions and Disable Completions options are highlighted in orange.](/assets/images/help/copilot/disable-completions-dialog.png)


## Enabling or disabling inline suggestions

You can choose to enable or disable inline suggestions for GitHub Copilot in Visual Studio Code.

1. In the **File** menu, navigate to **Preferences** and click **Settings**.

    ![Screenshot of Visual Studio Code settings.](/assets/images/help/copilot/vsc-settings.png)

1. In the left-side panel of the settings tab, click **Extensions** and then select **Copilot**.
1. Under "Inline Suggest:Enable," select or deselect the checkbox to enable or disable inline suggestions.

## Enabling next edit suggestions

You can enable next edit suggestions via the VS Code setting `github.copilot.nextEditSuggestions.enabled`. For more detailed instructions, see [Enabling edit suggestions](https://code.visualstudio.com/docs/copilot/ai-powered-suggestions#_enabling-edit-suggestions) in the VS Code documentation.

If you're using a Copilot Business or Copilot Enterprise plan, the organization or enterprise that provides your plan must enable the **Editor preview features** setting. See [Manage Policies](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization) or [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).


## Enabling or disabling GitHub Copilot for specific languages

You can specify which languages you want to enable or disable GitHub Copilot for.

1. From the Visual Studio Code, click the **Extensions** tab, then navigate to the **Copilot** section. For more information, see [Enabling or disabling inline suggestions](#enabling-or-disabling-inline-suggestions).
1. Under "Enable or disable Copilot for specified languages," click **Edit in settings.json**.
1. In the _settings.json_ file, add or remove the languages you want to enable or disable GitHub Copilot for. For example, to enable Python in GitHub Copilot, add `"python": true` to the list, ensuring there is a trailing comma after all but the last list item.

   ```json
{
    "editor.inlineSuggest.enabled": true,
    "github.copilot.enable": {
        "*": true,
        "yaml": false,
        "plaintext": false,
        "markdown": true,
        "javascript": true,
        "python": true
    }
}
```


## Revoking GitHub Copilot authorization

Visual Studio Code retains authorization to use GitHub Copilot through a particular GitHub account. If you want to prevent your GitHub account being used for GitHub Copilot on a device you no longer have access to, you can revoke authorization and then go through the authorization process again. The device you previously used will not have the new authorization.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Integrations" section of the sidebar, click **{% octicon "apps" aria-hidden="true" aria-label="apps" %} Applications**.

1. Click the **Authorized OAuth Apps** tab.

   ![Screenshot of the "Applications" page. A tab, labeled "Authorized OAuth Apps," is highlighted with an orange outline.](/assets/images/help/settings/settings-authorized-oauth-apps-tab.png)

1. Click the **...** next to **GitHub for VS Code** and click **Revoke**.
1. Click the **Authorized GitHub Apps** tab.

1. If the **GitHub Copilot** extension is listed, click **Revoke**.

After revoking authorization, Visual Studio Code will be able to continue using GitHub Copilot in a current session for a maximum of 30 minutes. After that time, you will need to reauthorize GitHub Copilot for use in Visual Studio Code again.

## Re-authorizing GitHub Copilot

After you have revoked authorization, if you want to continue using GitHub Copilot, you will need to complete the reauthorization process.

1. In the bottom left corner of Visual Studio Code, click the **Accounts** icon, hover over your username, and click **Sign out**.

   ![Screenshot of the menu in Visual Studio Code. The "Sign out" option is outlined in dark orange.](/assets/images/help/copilot/vsc-sign-out.png)

1. In the "Visual Studio Code" pop-up, click **Sign Out**.

1. In the bottom left corner of Visual Studio Code, click the **Accounts** icon, hover over your username, and click **Sign in with GitHub to use GitHub Copilot**.

   ![Screenshot of the accounts menu in Visual Studio Code. The "Sign in with GitHub to use GitHub Copilot (1)" option is outlined in dark orange.](/assets/images/help/copilot/vsc-sign-in.png)

1. In your browser, GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Continue**.
1. In the "Open Visual Studio Code?" pop-up, click **Open Visual Studio Code**.

## Configuring Copilot settings on GitHub.com

If you are using a Copilot Pro, Copilot Pro+, or Copilot Max plan, you can choose to allow or block inline suggestions that match publicly available code. You can also allow or block the collection and retention of the prompts you enter and Copilot's suggestions. You configure this in your personal settings on GitHub.com. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies).

## Authenticating to an account on GHE.com

If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).


## Further reading

* [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview)
* [GitHub Copilot FAQ](https://github.com/features/copilot/#faq)

{% endvscode %}

{% vimneovim %}

## Configuring GitHub Copilot in Vim/Neovim

For guidance on configuring GitHub Copilot in Vim/Neovim, invoke the GitHub Copilot documentation in Vim/Neovim by running the following command:

    :help copilot

## Rebinding keyboard shortcuts

You can rebind the keyboard shortcuts in Vim/Neovim when using GitHub Copilot to use your preferred keyboard shortcuts for each specific command. For more information, see the [Map](https://neovim.io/doc/user/map.html) article in the Neovim documentation.

## Configuring Copilot settings on GitHub.com

If you are using a Copilot Pro, Copilot Pro+, or Copilot Max plan, you can choose to allow or block inline suggestions that match publicly available code. You can also allow or block the collection and retention of the prompts you enter and Copilot's suggestions. You configure this in your personal settings on GitHub.com. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies).

## Authenticating to an account on GHE.com

If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).


## Further reading

* [GitHub Copilot FAQ](https://github.com/features/copilot/#faq)

{% endvimneovim %}

{% xcode %}

## About GitHub Copilot in Xcode

If you use Xcode, GitHub Copilot can help you with a variety of tasks, including generating code suggestions, explaining how the code in your editor works, and suggesting code fixes. After installation, you can enable or disable GitHub Copilot, and you can configure advanced settings within Xcode or on GitHub.

## Prerequisites

To configure GitHub Copilot for Xcode, you must install the GitHub Copilot extension. See [Install Copilot Extension?Tool=Xcode](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=xcode).

## Rebinding keyboard shortcuts

You can use the default keyboard shortcuts for inline suggestions in Xcode when using GitHub Copilot. For a list of default keyboard shortcuts, see [Keyboard Shortcuts](https://docs.github.com/en/copilot/reference/keyboard-shortcuts).

If you don't want to use the default keyboard shortcuts for GitHub Copilot, you can rebind the shortcuts in the Key Bindings editor and use your preferred keyboard shortcuts.

If you want to use something besides <kbd>Tab</kbd> to accept the first line of a suggestion, you need to disable the "Accept suggestions with Tab" option in the advanced settings in the GitHub Copilot for Xcode application. Additionally, we currently only support the <kbd>Option</kbd> key for the "View full suggestion" action.

1. In the Xcode menu, click **Xcode** then **Settings**.
1. Click **Key Bindings** and search for "Copilot" to find the commands you want to rebind.

## Enabling or disabling GitHub Copilot

You can enable or disable the GitHub Copilot extension from within the application.

1. Open the GitHub Copilot for Xcode application.
1. At the top of the application window, click **Advanced**.
1. In the "Suggestion Settings" section, use the "Request suggestions while typing" toggle to enable or disable the extension.

## Automatically updating GitHub Copilot for Xcode

You can configure the GitHub Copilot extension to automatically check for updates.

1. Open the GitHub Copilot for Xcode application.
1. Select **Automatically check for updates**.

After updating the extension, Xcode must be restarted for the changes to take effect.

## Disabling next edit suggestions

Next edit suggestions are enabled by default. To disable next edit suggestions, go to the "Advanced" tab in the GitHub Copilot for Xcode extension settings. You can also choose to disable the option to "Accept suggestions with Tab".

If you're using a Copilot Business or Copilot Enterprise plan, the organization or enterprise that provides your plan must enable the **Editor preview features** setting. See [Manage Policies](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization) or [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).


## Configuring Copilot settings on GitHub.com

If you are using a Copilot Pro, Copilot Pro+, or Copilot Max plan, you can choose to allow or block inline suggestions that match publicly available code. You can also allow or block the collection and retention of the prompts you enter and Copilot's suggestions. You configure this in your personal settings on GitHub.com. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies).

## Authenticating to an account on GHE.com

If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).


{% endxcode %}

{% eclipse %}

## About GitHub Copilot in Eclipse

If you use Eclipse, GitHub Copilot can provide code suggestions as you work in the IDE. You can also use the Copilot Chat panel to work with Copilot as your AI pair programmer.

After you install GitHub Copilot in Eclipse, you can enable or disable it, and you can configure advanced settings within the IDE.

## Prerequisites

To configure GitHub Copilot in Eclipse, you must install the GitHub Copilot extension. See [Install Copilot Extension?Tool=Eclipse](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=eclipse).

## Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts for GitHub Copilot, you can rebind the shortcuts in the Key Bindings editor and use your preferred keyboard shortcuts. For a list of default keyboard shortcuts, see [Keyboard Shortcuts](https://docs.github.com/en/copilot/reference/keyboard-shortcuts).

1. In the IDE, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** to open the menu.
1. Click **Edit Keyboard Shortcuts...** to rebind the shortcuts.

## Settings and configurations

For advanced settings, you can set auto-completion behavior, configure proxy, and assign a GitHub Enterprise authentication endpoint.

## Enabling next edit suggestions

You can enable next edit suggestions under "Completions" in the GitHub Copilot extension settings in Eclipse.

If you're using a Copilot Business or Copilot Enterprise plan, the organization or enterprise that provides your plan must enable the **Editor preview features** setting. See [Manage Policies](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization) or [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).


## Configuring Copilot settings on GitHub.com

If you are using a Copilot Pro, Copilot Pro+, or Copilot Max plan, you can choose to allow or block inline suggestions that match publicly available code. You can also allow or block the collection and retention of the prompts you enter and Copilot's suggestions. You configure this in your personal settings on GitHub.com. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies).

## Authenticating to an account on GHE.com

If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).


{% endeclipse %}
