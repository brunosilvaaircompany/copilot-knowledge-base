# Setting your timeout period for GitHub Codespaces

## About the idle timeout

A codespace will stop running after a period of inactivity. By default this period is 30 minutes, but you can specify a longer or shorter default timeout period in your personal settings on GitHub. The updated setting will apply to any new codespaces you create. You can also specify a timeout when you use GitHub CLI to create a codespace.

> [!WARNING]
> Codespaces compute usage is billed for the duration for which a codespace is active. If you're not using a codespace but it remains running, and hasn't yet timed out, you are billed for the total time that the codespace was active, irrespective of whether you were using it. For more information, see [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces#pricing).

### Inactivity defined

In the context of the Codespaces idle timeout, inactivity is defined as the absence of activity indicative of a user's presence. Personal interaction with a codespace, such as typing or using the mouse, resets the idle timeout period. Terminal activity, either input or output, also resets the idle timeout period. For example, if you publish a web app on a port from a codespace and page requests generate output in a terminal on the codespace, then each time terminal output occurs the timeout will be reset. However, if you share a port, and then don't interact with the codespace, and no terminal output is generated, the codespace will time out after the configured period.


### Timeout periods for organization-owned repositories

Organizations can set a maximum idle timeout policy for codespaces created from some or all of their repositories. If an organization policy sets a maximum timeout which is less than the default timeout you have set, the organization's timeout will be used instead of your setting. You will be notified of this after the codespace is created. For more information, see [Restricting The Idle Timeout Period](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

{% webui %}

## Setting your default timeout period

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**.

1. Under "Default idle timeout", enter the time that you want, then click **Save**. The time must be between 5 minutes and 240 minutes (4 hours).

   ![Screenshot of the "Default idle timeout" section of the Codespaces settings, with "90 minutes" entered.](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Setting the timeout period for a codespace

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To set the timeout period when you create a codespace, use the `idle-timeout` argument with the `codespace create` subcommand. Specify the time in minutes, followed by `m`. The time must be between 5 minutes and 240 minutes (4 hours).

```shell
gh codespace create --idle-timeout 90m
```

If you don't specify a timeout period when you create a codespace, then the default timeout period will be used. For information about setting a default timeout period, click the "Web browser" tab on this page. You can't currently specify a default timeout period through GitHub CLI.

{% endcli %}

{% vscode %}

## Setting a timeout period

You can set your default timeout period in your web browser, on GitHub. Alternatively, if you use GitHub CLI to create a codespace you can set a timeout period for that particular codespace. For more information, click the appropriate tab above.

{% endvscode %}

## Further reading

* [Customizing Your Codespace](https://docs.github.com/en/codespaces/customizing-your-codespace)
* [Managing Your Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces)
