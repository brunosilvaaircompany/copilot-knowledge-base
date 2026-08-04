# Managing the commit signoff policy for your repository

## About commit signoffs

Commit signoffs enable users to affirm that a commit complies with the rules and licensing governing a repository. You can enable compulsory commit signoffs on individual repositories for users committing through your GitHub Enterprise Server instance's web interface, making signing off on a commit a seamless part of the commit process. Once compulsory commit signoffs are enabled for a repository, every commit made to that repository through your GitHub Enterprise Server instance's web interface will automatically be signed off on by the commit author.

Organization owners can also enable compulsory commit signoffs at the organization level. For more information, see [Managing The Commit Signoff Policy For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization).

Compulsory commit signoffs only apply to commits made via the web interface. For commits made via the Git command line interface, the commit author must sign off on the commit using the `--signoff` option. For more information, see the [Git documentation](https://git-scm.com/docs/git-commit).

You can determine whether a repository you are contributing to has compulsory commit signoffs enabled by checking the header of the commit form at the bottom of the file you are editing. After compulsory commit signoff has been enabled, the header will read "Sign off and commit changes."

![Screenshot of the commit form in a repository. The title of the form is "Sign off and commit changes."](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

Before signing off on a commit, you should ensure that your commit is in compliance with the rules and licensing governing the repository you're committing to. The repository may use a sign off agreement, such as the Developer Certificate of Origin from the Linux Foundation. For more information, see the [Developer Certificate of Origin](https://developercertificate.org/).

Signing off on a commit differs from signing a commit. For more information about signing a commit, see [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).


## Enabling or disabling compulsory commit signoffs for your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. Select **Require contributors to sign off on web-based commits**.
