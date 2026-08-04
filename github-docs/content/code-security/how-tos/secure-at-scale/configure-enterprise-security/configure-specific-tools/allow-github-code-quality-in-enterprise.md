# Allowing use of GitHub Code Quality in your enterprise

> [!NOTE]
> * GitHub Code Quality is currently in public preview and subject to change. During public preview, Code Quality will not be billed, although Code Quality scans will consume GitHub Actions minutes.
> * Previously, Advanced Security policies also controlled access to Code Quality. Those existing policy settings are automatically applied to the standalone Code Quality policies.

1. Navigate to your enterprise. For example, from [https://github.com/settings/enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text).
1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. In the sidebar, click {% octicon "code-square" aria-hidden="true" aria-label="code-square" %} **Code Quality**.
1. Select the "Organization access" dropdown menu, then click **Allow for all organizations** or **Allow for selected organizations**.
1. If you choose "Allow for selected organizations", select the dropdown menu for each organization where you want to enable Code Quality, then click **Available**.
1. To allow repository administrators to enable Code Quality on their repositories, select the "Repository admin policy" dropdown menu, then click **Allowed**.

## Next steps

To see Code Quality in action, turn the feature on for one or more repositories. See [Enable Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/enable-code-quality).
