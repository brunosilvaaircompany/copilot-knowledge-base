# Displaying a sponsor button in your repository

## About FUNDING files

You can configure your sponsor button by editing a `FUNDING.yml` file in your repository's `.github` folder, on the default branch. You can configure the button to include sponsored developers in GitHub Sponsors, external funding platforms, or a custom funding URL. For more information about GitHub Sponsors, see [About GitHub Sponsors](https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors).

You can add one username, package name, or project name per external funding platform and up to four custom URLs. You can add one organization and up to four sponsored developers in GitHub Sponsors. Add each platform on a new line, using the following syntax.

Platform | Syntax
-------- | -----
[LFX Mentorship (formerly CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[GitHub Sponsors](https://github.com/sponsors) | `github: USERNAME` or `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
[Polar](https://www.polar.sh/) | `polar: USERNAME`
[Buy Me a Coffee](https://www.buymeacoffee.com/) | `buy_me_a_coffee: USERNAME`
[thanks.dev](https://thanks.dev/) | `thanks_dev: u/gh/USERNAME`
Custom URL | `custom: LINK1` or `custom: [LINK1, LINK2, LINK3, LINK4]`

For Tidelift, use the `platform-name/package-name` syntax with the following platform names.

Language | Platform name
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

Here's an example `FUNDING.yml` file:

```yaml
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

> [!NOTE]
> If a custom URL in an array includes `:`, you must wrap the URL in quotes. For example, `"https://www.paypal.me/octocat"`.

You can create a default sponsor button for your organization or personal account. For more information, see [Creating A Default Community Health File](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

> [!NOTE]
> Funding links provide a way for open source projects to receive direct financial support from their community. We don’t support the use of funding links for other purposes, such as for advertising, or supporting political, community, or charity groups. If you have questions about whether your intended use is supported, please visit [GitHub Support](https://support.github.com).

## Displaying a sponsor button in your repository

Anyone with admin permissions can enable a sponsor button in a repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. On the "General" settings page, in the "Features" section, select **Sponsorships**.
1. In the "Sponsorships" box, click **Set up sponsor button** or **Override funding links**.
1. In the file editor, follow the instructions in the `FUNDING.yml` file to add links to your funding locations.
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).

1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.


## Further reading

* [About GitHub Sponsors For Open Source Contributors](https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)
* [FAQ with the GitHub Sponsors team](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/) on the GitHub Blog
