# Dependabot update pull requests no longer generated

* When maintainers of a repository stop interacting with Dependabot pull requests, Dependabot temporarily pauses its updates and lets you know.

* Dependabot stops rebasing pull requests for version and security updates after 30 days, reducing notifications for inactive Dependabot pull requests.

## About automatic deactivation of Dependabot updates

Dependabot pauses updates on your repositories, based on your interaction with pull requests from Dependabot updates. When Dependabot automatically deactivates Dependabot updates, there is:

* No creation of pull requests for version and security updates.
* No rebasing of Dependabot pull requests for inactive repositories.

>[!NOTE] The automatic deactivation of Dependabot updates only applies to repositories where Dependabot has opened pull requests but the pull requests remain untouched. If Dependabot hasn't opened any pull requests, Dependabot will never become paused.

An active repository is a repository where a user (**not** Dependabot) has taken **any** of the following actions in the last 90 days:

* Merged or closed a Dependabot pull request on the repository.
* Made a change to the `dependabot.yml` file for the repository.
* Manually triggered a security update or a version update.
* Enabled Dependabot security updates for the repository.
* Used `@dependabot` commands on pull requests.

An inactive repository is a repository:

* That has at least one Dependabot pull request open for more than 90 days,
* That has been enabled for the full period, and
* Where none of the actions listed above has been taken by a user.

## How to know if Dependabot updates are paused

When Dependabot is paused, GitHub adds a banner notice:
* To all open Dependabot pull requests.
* To the UI of the **Settings** tab of the repository (under **Advanced Security**, then **Dependabot**).
* To the list of Dependabot alerts (if Dependabot security updates are affected).

 Additionally, you will be able to see whether Dependabot is paused at the organization level in the security overview. The `paused` status will also be visible via the API. For more information, see [Repos](https://docs.github.com/en/rest/repos#enable-automated-security-fixes).

## About automatic reactivation of Dependabot updates

As soon as someone interacts with a Dependabot pull request again, Dependabot will unpause itself:
* Security updates are automatically resumed for Dependabot alerts.
* Version updates are automatically resumed with the schedule specified in the `dependabot.yml` file.
