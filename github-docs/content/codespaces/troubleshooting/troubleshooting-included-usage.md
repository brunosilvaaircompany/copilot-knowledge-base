# Getting the most out of your included usage

Personal GitHub accounts include a quota of free use of GitHub Codespaces every month.

> [!NOTE]
> Free use of GitHub Codespaces is included in personal accounts only. It is not included in organization or enterprise accounts.

There are two types of Codespaces usage: compute and storage. During your monthly billing period, as you use Codespaces, your compute and storage usage is deducted from the quota of free usage that's included in your personal GitHub account, until either compute or storage is consumed. Once one of those limits is reached, your use of GitHub Codespaces will be restricted, unless you've set up a spending limit and a payment method. You will not be able to create new codespaces or open existing codespaces, that you would be billed for, until your quota renews. If you have access to repositories owned by an organization that pays for use of GitHub Codespaces, you may still be able to create codespaces for those repositories.

The amount of free usage provided on your personal account every month is designed to allow you to make open source contributions, or to work on side projects, free of charge. It is not intended to be enough for you to do everyday work free of charge.

## About Codespaces compute

Codespaces compute is counted in core hours, which is the sum of the time a codespace is active, multiplied by the multiplier for the codespace's machine type: for example, a multiplier of 2 for a 2-core machine, or a multiplier of 8 for an 8-core machine. A codespace becomes active when you create it or start it. A codespace stops being active when you stop it or delete it, or when it is stopped or deleted automatically.

The default idle timeout, which stops a codespace after a period of inactivity, is 30 minutes. You can reduce this if required. See [Restricting The Idle Timeout Period](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)

## About Codespaces storage

You can see the storage usage for each of your codespaces on the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).

![Screenshot of a list of three codespaces on the https://github.com/codespaces page."](/assets/images/help/codespaces/your-codespaces-list.png)

> [!NOTE]
> If the dev container for a codespace was built from the default image, the size of the codespace shown on this page does not include the size of the base dev container. Storage for the base dev container is provided free of charge. See [Storage usage for your base dev container](#storage-usage-for-your-base-dev-container).

For billing purposes, Codespaces storage is counted in GB-hours. See [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).

### Where did my monthly storage go?

Deleting codespaces you're not using will avoid using up the free storage included in your personal account unnecessarily. However, if you have set up prebuild configurations, your included storage may continue to diminish during your monthly billing cycle.

Although prebuilds are not listed on the "Your codespaces" page, prebuilds created for a repository consume storage even if you do not currently have any codespaces for that repository. To avoid this, you can delete the prebuilds configurations you set up. See [About GitHub Codespaces Prebuilds](https://docs.github.com/en/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds) and [Managing Prebuilds](https://docs.github.com/en/codespaces/prebuilding-your-codespaces/managing-prebuilds#deleting-a-prebuild-configuration).

## Understanding your Codespaces usage

You can check the cumulative GitHub Codespaces usage for your current monthly billing cycle in your GitHub settings. See [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use).

![Screenshot of the "Codespaces" section of the billing page showing figures for "Usage hours" and "Storage."](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

You can expand the "Usage hours" and "Storage" section for more information - for example, to see how much of the consumed storage was used by prebuilds.

For more specific information - for example, if you want to know which repositories have prebuilds that are consuming storage - you can generate a usage report. The usage report is a CSV file that's emailed to you. For more information on how to generate a usage report, see [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use).

To see your Codespaces usage, filter the report to show only rows that mention "Codespaces" in the `Product` column.

![Screenshot of a usage report in Microsoft Excel. All of the entries in the "Product" column read "Codespaces - Linux."](/assets/images/help/codespaces/usage-report-personal-account.png)

### Storage usage for your base dev container

If you don't add a dev container configuration to your repository, or if your configuration does not specify a dev container image to use, then GitHub creates a container from a default Linux image. Storage of base dev containers built from the default dev container image is free of charge and does not consume your included storage. Your storage usage will be based only on the files in your repository, and any files you subsequently add to the codespace, including VS Code extensions. If you use an alternative base image, then the resulting container and all of the files in the codespace will be counted as used storage. For information about what's included in the default Linux image, see the [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal) repository.


You can check which image was used to create a codespace's dev container. In the Terminal of your codespace, run this command.

```shell copy
devcontainer-info
```

If the dev container for the current codespace was built from the default image, the output of this command will contain the following information.

```shell
- Definition ID: universal
- Source code repository: https://github.com/devcontainers/images
```

## Tips for making your allowed usage go further

* Your codespaces consume compute usage while they are running. If you're not using a codespace, stopping the codespace prevents unnecessary compute usage. See [Stopping And Starting A Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace).
* You can reduce the idle timeout for Codespaces in your personal settings to less than the default 30 minutes. This will shorten the period of inactivity before your codespaces are automatically stopped. This can save on compute usage. See [Setting Your Timeout Period For GitHub Codespaces](https://docs.github.com/en/codespaces/setting-your-user-preferences/setting-your-timeout-period-for-github-codespaces).
* Your codespaces consume storage while they exist. You should delete a codespace you have finished using and know that you will not use again. See [Deleting A Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/deleting-a-codespace).

  > [!NOTE]
  > Deleting a codespace will not reduce your used storage amount for the billing current month as this is a cumulative figure.

* Configure your retention period to ensure codespaces you forget to delete are deleted automatically. The default retention period is 30 days. See [Configuring Automatic Deletion Of Your Codespaces](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces).
* Visual Studio Code extensions consume storage. Make sure you are only installing extensions that you need. You can find out how much space is being used by extensions by running this command in your codespace.

  ```shell copy
  du -h -s ~/.vscode-remote/extensions
  ```

* Monitor your compute and storage usage by going to your billing page on GitHub, https://github.com/settings/billing, and reviewing the figures in the "Codespaces" section.

  > [!NOTE]
  > Storage is calculated hourly and added to your existing storage usage. Consumed storage is therefore cumulative for the duration of your month-long billing cycle. This means that, during the billing period, the value you see on your billing page will only increase or remain the same. Usage will be reset to zero when a new billing cycle starts. Deleting a codespace, or a prebuild, will not reduce the usage figure for the current month, but it will reduce the rate at which storage usage accumulates.

* Ensure that you are using prebuilds for only as many versions and as many regions as you need. See [About GitHub Codespaces Prebuilds](https://docs.github.com/en/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).

  > [!NOTE]
  > If your included storage usage is exhausted, new prebuilds are disabled until you set up a budget or your included usage quota renews.

* If you have configured prebuilds in a repository's settings, but you're not using GitHub Codespaces for that repository, consider deleting the prebuild configuration to avoid prebuilds for that repository consuming your included storage allowance unnecessarily. When you delete a prebuild configuration all the associated prebuilds are deleted, reducing your storage consumption from that point onward. See [Managing Prebuilds](https://docs.github.com/en/codespaces/prebuilding-your-codespaces/managing-prebuilds#deleting-a-prebuild-configuration).

  You can check for prebuild configurations in the "Codespaces" page of a repository's settings. See [Configuring Prebuilds](https://docs.github.com/en/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

  Alternatively, you can check which repositories have prebuilds by reviewing a usage report. See [Understanding your Codespaces usage](#understanding-your-codespaces-usage) above.
* Storage of containers built from the default dev container image for codespaces is free of charge and does not reduce your included storage. You can therefore avoid your storage allowance being consumed by your dev container by using the default image in your dev container configuration, rather than specifying a more specialized image. See [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration) and [Storage usage for your base dev container](#storage-usage-for-your-base-dev-container) above.
