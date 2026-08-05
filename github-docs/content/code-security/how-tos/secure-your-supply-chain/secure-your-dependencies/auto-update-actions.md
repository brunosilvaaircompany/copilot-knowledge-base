# Keeping your actions up to date with Dependabot

> [!NOTE]
> Your site administrator must set up Dependabot updates for your GitHub Enterprise Server instance before you can use this feature. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).
>
> You may not be able to enable or disable Dependabot updates if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).





When you enable Dependabot version updates for GitHub Actions, Dependabot will help ensure that references to actions in a repository's _workflow.yml_ file and reusable workflows used inside workflows are kept up to date. For more information, see [Dependabot Version Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates).

## Enabling Dependabot version updates for actions

1. If you have already enabled Dependabot version updates for other ecosystems or package managers, simply open the existing `dependabot.yml` file. Otherwise, create a `dependabot.yml` configuration file in the `.github` directory of your repository. For more information, see [Configure Version Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates#enabling-dependabot-version-updates).
1. Specify `"github-actions"` as a `package-ecosystem` to monitor.
1. Set the `directory` to `"/"` to check for workflow files in `.github/workflows`.
1. Set a `schedule.interval` to specify how often to check for new versions.
1. Check the `dependabot.yml` configuration file in to the `.github` directory of the repository.
 If you have edited an existing file, save your changes.

You can also enable Dependabot version updates on forks. For more information, see [Configure Version Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates#enabling-version-updates-on-forks).

## Example `dependabot.yml` file for GitHub Actions

The example `dependabot.yml` file below configures version updates for GitHub Actions. The `directory` must be set to `"/"` to check for workflow files in `.github/workflows`. The `schedule.interval` is set to `"weekly"`. After this file has been checked in or updated, Dependabot checks for new versions of your actions. Dependabot will raise pull requests for version updates for any outdated actions that it finds. After the initial version updates, Dependabot will continue to check for outdated versions of actions once a week.

```yaml copy
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## Configuring Dependabot version updates for actions

When enabling Dependabot version updates for actions, you must specify values for `package-ecosystem`, `directory`, and `schedule.interval`. There are many more optional properties that you can set to further customize your version updates. For more information, see [Dependabot Options Reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference).

## Further reading

* [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows)
