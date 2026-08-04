# Stopping and starting a codespace

## About stopping and starting a codespace

You can stop a codespace at any time. When you stop a codespace, any running processes are stopped. Any saved changes in your codespace will still be available when you next start it. The terminal history is preserved, but the visible contents of the terminal window are not preserved between codespace sessions.

If you do not explicitly stop a codespace, it will continue to run until it times out from inactivity. Closing a codespace does not stop the codespace. For example, if you're using a codespace in the VS Code web client and you close the browser tab, the codespace remains running on the remote machine. For information about timeouts, see [Understanding The Codespace Lifecycle](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle#timeouts-for-github-codespaces).

Only running codespaces incur CPU charges. A stopped codespace incurs only storage costs.

You may want to stop and restart a codespace to apply changes to it. For example, if you change the machine type used for your codespace, you will need to stop and restart it for the change to take effect. You can also stop your codespace and choose to restart or delete it if you encounter an error or something unexpected.


Regardless of where you created or access your codespaces, you can view and manage them in your browser at https://github.com/codespaces.

## Stopping a codespace

{% webui %}

1. Navigate to the "Your Codespaces" page at [https://github.com/codespaces](https://github.com/codespaces).

 1. To the right of the codespace you want to stop, click the ellipsis (**...**).
 1. Click **Stop codespace**.

   ![Screenshot of a list of codespaces with the dropdown menu for one of them displayed, showing the "Stop codespace" option.](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To stop a codespace use the `gh codespace stop` subcommand and then choose the codespace you want to stop from the list that's displayed.

```shell copy
gh codespace stop
```

{% endcli %}

{% vscode %}

 1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)).

1. Type `stop` and select **Codespaces: Stop Codespace** from the list of options.
1. In the list of codespaces, select the codespace you want to stop.

{% endvscode %}

## Restarting a codespace

{% webui %}

1. Navigate to the "Your Codespaces" page at [https://github.com/codespaces](https://github.com/codespaces).

1. Click the name of the codespace you want to restart.

   ![Screenshot of a list of two codespaces on GitHub. The names of the codespaces are highlighted with dark orange outlines.](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

When you restart a codespace you can choose to open it in Visual Studio Code or in your browser.

* To restart a codespace and open it in Visual Studio Code, use the `gh codespace code` subcommand and then choose the codespace you want to restart from the list that's displayed.

  ```shell copy
  gh codespace code
  ```

* To restart a codespace and open it in your browser, use the `gh codespace open --web` subcommand and then choose the codespace you want to restart from the list that's displayed.

  ```shell copy
  gh codespace open --web
  ```

{% endcli %}

{% vscode %}

 1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)).

1. Type `connect` and select **Codespaces: Connect to Codespace** from the list of options.
1. In the list of codespaces, select the codespace you want to restart.

{% endvscode %}

## Further reading

* [Understanding The Codespace Lifecycle](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle)
