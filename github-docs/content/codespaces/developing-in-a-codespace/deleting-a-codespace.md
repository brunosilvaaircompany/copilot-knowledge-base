# Deleting a codespace

## Overview

GitHub Codespaces are automatically deleted after they have been stopped and have remained inactive for a defined number of days. The retention period for each codespace is set when the codespace is created and does not change. The default retention period is 30 days.
 See [Configuring Automatic Deletion Of Your Codespaces?Tool=Webui](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces?tool=webui).

You can manually delete a codespace in a variety of ways:
* In the terminal by using GitHub CLI
* In Visual Studio Code
* In your web browser

Use the tabs at the top of this article to display instructions for each of these ways of deleting a codespace.

> [!NOTE]
> You can't delete a codespace from within JupyterLab.

## Why you should delete unused codespaces

There are costs associated with storing codespaces. You should therefore delete any codespaces you no longer need. See [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).

There are limits to the number of codespaces you can create, and the number of codespaces you can run at the same time. These limits vary based on a number of factors. If you reach the maximum number of codespaces and try to create another, a message is displayed telling you that you must remove an existing codespace before you can create a new one.


## Deleting a codespace

{% webui %}

1. In the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces** to take you to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).

1. To the right of the codespace you want to delete, click {% octicon "kebab-horizontal" aria-label="Codespace configuration" %}, then click **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete**.

   ![Screenshot of a list of codespaces with the dropdown menu for one of them displayed, showing the "Delete" option.](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

> [!NOTE]
> You may have prebuild codespaces that are consuming additional storage which are not displayed on this dashboard. To delete them, follow the steps for “[Deleting a prebuild configuration](/codespaces/prebuilding-your-codespaces/managing-prebuilds#deleting-a-prebuild-configuration).”

{% vscode %}

You can delete codespaces from within VS Code when you are not currently working in a codespace.

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}

1. Under "GitHub Codespaces," right-click the codespace you want to delete.
1. Click **Delete Codespace**.


{% endvscode %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To delete a codespace use the `gh codespace delete` subcommand and then choose a codespace from the list that's displayed.

```shell
gh codespace delete
```

If you have unsaved changes, you'll be prompted to confirm deletion. You can use the `--force` flag to force deletion, avoiding this prompt.

For more information about this command, see [the GitHub CLI manual](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Bulk deleting codespaces

{% webui %}

You can use GitHub CLI to delete several or all of your codespaces with a single command. For more information, click the "GitHub CLI" tab near the top of this page.

{% endwebui %}

{% vscode %}

You can use GitHub CLI to delete several or all of your codespaces with a single command. For more information, click the "GitHub CLI" tab near the top of this page.

{% endvscode %}

{% cli %}

You can delete several or all of your codespaces with a single command, using `gh codespace delete` followed by one of these flags:

`--all` - Delete all of your codespaces.

`--repo REPOSITORY` - Delete all of your codespaces for this repository. Or use together with the `--days` flag to filter by age of the codespace.

`--days NUMBER` - Delete all of your codespaces that are older than the specified number of days. Can be used together with the `--repo` flag.

By default you are prompted to confirm deletion of any codespaces that contain unsaved changes. You can use the `--force` flag to skip this confirmation.

### Example

Delete all of the codespaces for the `octo-org/octo-repo` repository that you created more than 7 days ago.

```shell
gh codespace delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## Deleting codespaces in your organization

As an organization owner, you can use GitHub CLI to delete any codespace in your organization.

{% webui %}

For more information, click the "GitHub CLI" tab near the top of this page.

{% endwebui %}

{% vscode %}

For more information, click the "GitHub CLI" tab near the top of this page.

{% endvscode %}

{% cli %}

1. Enter one of these commands to display a list of codespaces.
   * `gh codespace delete --org ORGANIZATION` - Lists the current codespaces in the specified organization.
   * `gh codespace delete --org ORGANIZATION --user USER` - Lists only those codespaces created by the specified user.
   You must be an owner of the specified organization.
1. In the list of codespaces, navigate to the codespace you want to delete.
1. To delete the selected codespace press <kbd>Enter</kbd>.

   If the codespace contains unsaved changes you will be prompted to confirm deletion.

{% endcli %}

You can also use the REST API to delete codespaces for your organization. See [Organizations](https://docs.github.com/en/rest/codespaces/organizations#delete-a-codespace-from-the-organization).

## Further reading

* [Understanding The Codespace Lifecycle](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle)
* [Configuring Automatic Deletion Of Your Codespaces](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces)
* [Restricting The Retention Period For Codespaces](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
