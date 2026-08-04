# Telemetry in CodeQL for Visual Studio Code

This data will not be shared with any parties outside of GitHub. IP addresses and installation IDs will be retained for a maximum of 30 days. Anonymous data will be retained for a maximum of 180 days.

> [!NOTE]
> Telemetry collection in CodeQL for Visual Studio Code follows the VS Code telemetry settings. When telemetry collection is disabled, no data will be sent to GitHub servers.

## Why we collect data

GitHub collects aggregated, anonymous usage data and metrics to help us improve CodeQL for VS Code. IP addresses and installation IDs are collected only to ensure that anonymous data is not duplicated during aggregation.

## What data is collected

If telemetry is enabled, GitHub collects the following information related to the usage of the extension. The data collected are:

* The identifiers of any CodeQL-related VS Code commands that are run. For each command, these are: the timestamp, time taken, and whether or not the command completed successfully.

* Interactions with UI elements, including buttons, links, and other inputs. Interacts that are not recorded are: link targets, text inputs, mouse movement, and mouse hovering.

* Occurrence of exceptions and errors. All sensitive information such as file paths and non-static exception message content are removed before uploading.

* The VS Code extension version.

* Randomly generated GUID that uniquely identifies a CodeQL extension installation. This is discarded before aggregation.

* IP address of the client sending the telemetry data. This is discarded before aggregation.

* Whether any CodeQL for VS Code extension settings are configured. For more information about customizing settings, see [Customize Settings](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/customize-settings).

## How long data is retained

IP addresses and GUIDs will be retained for a maximum of 30 days. Anonymous, aggregated data that includes command identifiers, run times, and timestamps will be retained for a maximum of 180 days.

## Access to the data

IP addresses and GUIDs will only be available to the core developers of CodeQL. Aggregated data will be available to GitHub employees.

## What data is not collected

We only collect the minimal amount of data we need to answer the questions about how our users are experiencing this product. To that end, we do not collect the following information:

* GitHub user ID

* CodeQL database names or contents

* Contents of CodeQL queries

* File system paths

* User-input text

* Mouse interactions, such as movement or hovers

## Disabling telemetry reporting

You can disable telemetry collection by setting the global `telemetry.telemetryLevel` setting to `off`. For more information, see the [Visual Studio Code Telemetry page](https://code.visualstudio.com/docs/configure/telemetry) in the Visual Studio Code documentation.

## Further reading

* [GitHub General Privacy Statement](https://docs.github.com/en/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement)
* [GitHub Terms Of Service](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-terms-of-service)
