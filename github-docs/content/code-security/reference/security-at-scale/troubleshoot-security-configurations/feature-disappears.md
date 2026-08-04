# A feature has disappeared from a security configuration

## About the problem

Security configurations only include features that have been installed by a site administrator on your GitHub Enterprise Server instance.

If a site administrator changes the installation settings for a feature on your GitHub Enterprise Server instance, your configuration may be impacted.

After you have created and applied a security configuration to repositories across your organization:
* If a site administrator then **installs a new security feature** on the GitHub Enterprise Server instance, the feature appears in the configuration, but the enablement status for the feature displays as "Not set".
* If a site administrator **uninstalls an entire feature** from the GitHub Enterprise Server instance, the feature (and any sub-features) disappear from the configuration. The configuration doesn't detach from the repositories it's been applied to, and all other functionality continues as normal.
* If a site administrator **uninstalls GitHub Actions** from the GitHub Enterprise Server instance, features that are dependent on GitHub Actions (that is, Dependabot security updates and code scanning) disappear from the configuration. The configuration doesn't detach from the repositories it's been applied to, and all other functionality continues as normal.
* If a site administrator **uninstalls and then reinstalls** a feature on the GitHub Enterprise Server instance, the configuration remembers the pre-existing enablement status of the feature (either "Enabled", "Disabled", or "Not set") and reverts back to this original enablement status.

## Solving the problem

If you are concerned that a feature has disappeared from a configuration you've created, you should contact the site administrator for your GitHub Enterprise Server instance and check whether the feature, or its prerequisite feature, has been uninstalled from the instance, and if the change was intentional.
