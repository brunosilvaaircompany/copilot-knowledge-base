# Using GitHub Copilot with an account on GHE.com

To use GitHub Copilot in an IDE or the command line, you must authenticate to an account on GitHub that has a Copilot license.

If you receive access to Copilot through a managed user account owned by an enterprise on GHE.com, you may need to adjust some settings in your IDE before you can authenticate to your account.

Use the **tabs at the top of this article** to see instructions for your environment.

{% vscode %}

## Authenticating from VS Code

1. To open your VS Code settings, press <kbd>Command</kbd>+<kbd>,</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>,</kbd> (Windows).
1. In the search bar, search for `enterprise`.
1. For the `Github-enterprise: Uri` setting, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.
1. In the VS Code settings, search for `copilot`.
1. Under "GitHub > Copilot: Advanced," click **Edit in settings.json**.
1. Inside the `github.copilot.advanced` property, add `"authProvider": "github-enterprise"`. For example:

   ```json copy
   "github.copilot.advanced": {
        "authProvider": "github-enterprise"
   },
   ```

1. Save the `settings.json` file.
1. You will be shown a prompt asking you to sign in to use GitHub Copilot. Click **Sign in to GitHub**, then follow the prompts to authorize your account.

   If you **don't see the prompt**, try restarting VS Code.

If you ever need to switch to an account on GitHub.com, remove the `authProvider` setting from `settings.json`.

{% endvscode %}

{% jetbrains %}

## Authenticating from JetBrains IDEs

To authenticate to GHE.com in a JetBrains editor, you must install version 1.4.11 or later of the Copilot extension. You must then configure the extension to work with GHE.com.

1. To open the editor preferences or settings dialog, press <kbd>Command</kbd>+<kbd>,</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd> (Windows).
1. In the left sidebar, expand the "Tools" section, then click **GitHub Copilot**.
1. In the "General" section, look for the "Authentication Provider" field and enter the hostname where you access GitHub. For example: `octocorp.ghe.com`.
1. To save your changes, click **OK**.
1. Follow the prompts to sign in to use GitHub Copilot.

To sign in and out of GitHub at any time, click the **Copilot Chat** icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar, then click **Login to GitHub**. Follow the prompts to sign in.

If you ever need to switch to an account on GitHub.com, remove the value you entered in the "Authentication Provider" field.

{% endjetbrains %}

{% xcode %}

## Authenticating from Xcode

1. Open the "GitHub Copilot for Xcode" application.
1. Click the **Advanced** tab.
1. In the "Auth provider URL" field, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.
1. Authorize the extension by following the instructions in [Signing in to GitHub Copilot](/copilot/how-tos/set-up/install-copilot-extension?tool=xcode#signing-in-to-github-copilot).

{% endxcode %}

{% copilotcli %}

## Authenticating from the command line

To use Copilot CLI, you must:

1. Download and install Copilot CLI. See [Install Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).
1. Authenticate to the account on GHE.com where you receive your Copilot license with `copilot login --host SUBDOMAIN.ghe.com`.


For general information on using Copilot CLI, see [Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli).

{% endcopilotcli %}

{% visualstudio %}

## Authenticating from Visual Studio

To authenticate from Visual Studio, follow the steps in [Add your GitHub accounts to your Visual Studio keychain](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?view=vs-2022&ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise#enabling-github-enterprise-accounts) on Microsoft Learn.

For the "GitHub Enterprise URL" field, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.

{% endvisualstudio %}

{% eclipse %}

## Authenticating from Eclipse

1. In the IDE, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** to open the menu.
1. Click **Edit Preferences...**.
1. In the **GitHub Enterprise Authentication Endpoint** field, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.
1. Click **Apply**.
1. Open the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** menu again then click **Sign In to GitHub**.

{% endeclipse %}
