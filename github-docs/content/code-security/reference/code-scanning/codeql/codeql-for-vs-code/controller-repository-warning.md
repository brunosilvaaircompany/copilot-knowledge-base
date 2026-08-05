# Problem with controller repository

## About this warning

```text
Publicly visible controller repository can't be used to analyze private repositories. NUMBER private repositories were not analyzed.
```

If you run variant analysis on a custom list of repositories, you may receive this warning as a banner in Visual Studio Code, where NUMBER is the number of private repositories that have not been analyzed.

## Confirming the cause of the problem

When you run variant analysis, you'll see any errors and warnings displayed in the "Variant Analysis Results" view.

## Fixing the problem

To analyze private repositories, you should edit your settings to update your controller repository to a private repository. For information on how to edit the controller repository, see [Customize Settings](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/customize-settings#configuring-settings-for-variant-analysis).
