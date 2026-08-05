# A repository is using advanced setup for code scanning

## About the problem

You cannot successfully apply a security configuration with code scanning default setup set to "Enabled" to a target repository that has an active configuration of advanced setup for code scanning. Advanced setups are tailored to the specific security needs of the repositories they are applied to, so they are not intended to be overridden at scale.

### Active advanced setup

If you try to attach a security configuration with code scanning set to "Enabled" to a repository that already uses advanced setup, security settings will be applied as follows:

* **Code scanning default setup will not be enabled**, and advanced setup will continue to run as normal.
* **All other security features enabled in the configuration will be enabled.**
* **The security configuration will not be attached** to the repository, since only some features from the configuration are enabled.

### Inactive or absent advanced setup

Advanced setup is considered **inactive** for a repository if the repository meets any of the following criteria:

* The latest CodeQL analysis is more than 90 days old.
* All CodeQL configurations have been deleted.
* The workflow file has been deleted or disabled (exclusively for advanced setup run using actions).


If there is no advanced setup or the advanced setup is inactive, then default setup is enabled and the security configuration applied as expected.

## Solving the problem

There are three ways you could solve this problem:

1. **Change the Default setup option from "Enabled" to "Enabled with advanced setup allowed"** in the security configuration. _Option available from GitHub Enterprise Server 3.19._ After editing your security configuration, reapply it to the repositories. For more information, see [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).
1. **Update the affected repositories to use default setup** for code scanning at the repository level and then reapply your security configuration to the repositories. For more information, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).
1. **Create a new custom security configuration** that does not include a setting for code scanning and apply this security configuration to repositories that use advanced setup. For more information, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).
