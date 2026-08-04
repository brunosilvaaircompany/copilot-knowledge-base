# About upgrades to new releases

GitHub Enterprise Server is constantly improving, with new functionality and bug fixes introduced through feature and patch releases.


## Feature releases

Feature releases include new functionality and feature upgrades and typically occur quarterly.

All feature releases begin with at least one release candidate.

## Release candidates

Release candidates are _proposed_ feature releases, with a complete feature set. There may be problems that can only be found by customers actually using the release.

For performance, stability, and security reasons:
* **Do not install a release candidate in a production environment.** Release candidate builds are intended solely for test and staging environments.
* **Do not upgrade to a release candidate from a supported, earlier version.** Instead, install a release candidate in a new, test environment.
* **Do not upgrade from the release candidate to later versions**, including generally available releases. Instead, destroy the release candidate environment.

As you test a release candidate, please provide feedback by contacting support. See [Support](https://docs.github.com/en/support).

Each new release candidate adds bug fixes for issues found in prior versions. When the release is ready for widespread adoption, GitHub publishes a stable feature release.

## Patch releases

Between feature releases, you can benefit from patch releases, which:

* Consist of hot patches and bug fixes
* Happen more frequently than feature releases
* Are generally available when first released, with no release candidates
* Typically require less than five minutes of downtime

## Upgrading GitHub Enterprise Server

There are two ways to upgrade GitHub Enterprise Server:

* To set up a **completely new GitHub Enterprise Server instance** and configure the instance however you like, see [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance) and [Configuring Settings](https://docs.github.com/en/admin/configuring-settings).
* To upgrade your **existing instance** to a new release, see [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).

## Further reading

* [GitHub public roadmap](https://github.com/github/roadmap#github-public-roadmap) in the `github/roadmap` repository
