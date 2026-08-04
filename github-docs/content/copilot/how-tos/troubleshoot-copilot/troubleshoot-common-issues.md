# Troubleshooting common issues with GitHub Copilot

For questions about the general use of GitHub Copilot, product impact, human oversight, and privacy, see the comprehensive list of [GitHub Copilot FAQs](https://github.com/features/copilot#:~:text=Frequently%20asked%C2%A0questions).

If GitHub Copilot stops working, check GitHub's [Status page](https://githubstatus.com) for any active incidents affecting GitHub Copilot or model availability.

## Unable to use the GitHub Copilot extension in the IDE

We recommend you follow the quickstart guide for GitHub Copilot while setting up GitHub Copilot on your machine. For more information, see [Quickstart](https://docs.github.com/en/copilot/get-started/quickstart).

The GitHub Copilot extension is frequently updated to fix bugs and add new features. It's important to keep your extension up to date because older clients cannot communicate with the GitHub Copilot servers. Update your GitHub Copilot extension on all the machines you have it installed.

If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).

For more information about configuring GitHub Copilot in a supported IDE, see [Configure In Ide](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide).

## GitHub Copilot not working in some files

If you're using GitHub Copilot with a Copilot Business or Copilot Enterprise license, you may not see inline suggestions in your editor for some files. This happens when a file is excluded from being used by GitHub Copilot. Content exclusion can be configured by a repository administrator, or by an organization owner.

When a file is affected by a content exclusion setting, GitHub Copilot will not suggest inline suggestions in that file, and the content of that file will not be used to inform inline suggestions in other files.

If a file has been configured as excluded content for GitHub Copilot, the icon in the status bar will have a diagonal line through it. Hover over the icon to see a tooltip that tells you which settings have applied this restriction.

![Screenshot of the Copilot icon in VS Code with a tooltip for a content exclusion.](/assets/images/help/copilot/copilot-disabled-for-repo.png)

For more information, see [Exclude Content From Copilot](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot).


## GitHub Copilot content exclusions are not being applied

Content exclusion can be configured at the repository, organization, and enterprise level. The scope of the exclusion is determined by the level at which the rule is set:

* **Repository administrators** can exclude content for their own repositories. This affects any Copilot users in the enterprise working within those specific repositories.
* **Organization owners** can exclude content for users assigned a Copilot seat through their organization.



* **Enterprise owners** can apply exclusion rules to all Copilot users in the enterprise.




After you add or change content exclusions, it can take up to 30 minutes to take effect in IDEs where the settings are already loaded. You can apply changes to your own IDE, forcing it to reload the content exclusion settings.
 For more information, see [Exclude Content From Copilot](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot#propagate-content-exclusion-changes-to-your-ide).

> [!NOTE]
> It's possible that Copilot may use semantic information from an excluded file if the information is provided by the IDE indirectly. Examples of such content include type information and hover-over definitions for symbols used in code, as well as general project properties such as build configuration information.


## Error: "GitHub Copilot could not connect to server. Extension activation failed"

This error indicates that you do not have a Copilot plan, or there was an error connecting to the GitHub API to request a token to use GitHub Copilot.

To request another token from api.github.com, try signing in and out of Copilot from your IDE. Once you've logged out, Copilot will prompt you to sign back in.

If you cannot connect to the server, you can create a discussion in our [discussion forum](https://github.com/orgs/community/discussions/categories/copilot). You can include log files from your IDE to help us troubleshoot the issue. For more information on obtaining log files from your specific IDE, see [View Logs](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/view-logs).

## Copilot not suggesting multiple lines of code

This is a known issue and our team is working towards a fix. For more information, see this comment on a [GitHub Community discussion](https://github.com/orgs/community/discussions/40522#discussioncomment-4701470).

## Error: You've hit a rate limit

This error suggests that you have exceeded the rate limit for Copilot requests. GitHub uses rate limits to ensure everyone has fair access to the Copilot  service and to protect against abuse.

Most people see rate limiting for select models, due to limited capacity.

Service-level request rate limits ensure high service quality for all Copilot  users and should not affect typical or even deeply engaged Copilot usage. We are aware of some use cases that are affected by it. GitHub is iterating on Copilot’s rate-limiting heuristics to ensure it doesn’t block legitimate use cases.

If you are rate limited, the error message may tell you to wait for your limit to reset, suggest a retry time, or prompt you to upgrade your plan for additional usage. For more information about what to do while your limit resets, see [Usage Limits](https://docs.github.com/en/copilot/concepts/usage-limits#what-to-do-if-you-hit-a-limit).

In case you experience repeated rate limiting in Copilot contact [GitHub Support](https://support.github.com).

## Can't find Copilot Chat in my IDE

If you can't find Copilot Chat in your editor, make sure you have checked the "Prerequisites" section of [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

> [!NOTE]
> The linked article has tabs for various IDEs.

## Latest Copilot Chat does not work in Visual Studio Code

Changes to Copilot Chat coincide with Visual Studio Code releases, due to Copilot Chat's deep UI integration. As a result, every new version of Copilot Chat is only compatible with the latest release of Visual Studio Code. This means that if you are using an older version of Visual Studio Code, you will not be able to use the latest Copilot Chat.

Only the latest Copilot Chat versions will use the latest large language model provided by the Copilot service, as even minor model upgrades require prompt changes and fixes in the extension. An older version of Copilot Chat will still use the latest version of Copilot inline suggestions.


To use Copilot Chat, make sure you are using the [latest version of Visual Studio Code](https://code.visualstudio.com/updates).

## Authentication problems with managed user account accounts

If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).

## Authentication problems in Visual Studio Code

If you are signed in to GitHub but Copilot is unavailable in Visual Studio Code, it may be due to an authentication problem. Try the following steps to resolve the issue:

1. In the bottom left corner of the Visual Studio Code window, click the **Accounts** icon, hover over your GitHub username, and click the **Sign out** button.
1. To reload Visual Studio Code, press <kbd>F1</kbd> to open the command palette, and select **Developer: Reload Window**.
1. After Visual Studio Code reloads, sign back in to your GitHub account.

## Authentication problems in Visual Studio

If you experience authentication issues when you try to use Copilot Chat in Visual Studio, you can try the following steps to resolve the issue.

1. Check that the GitHub ID you are signed into Visual Studio with is the same as the one you have been granted access to Copilot Chat with.
1. Check whether your GitHub ID/credentials need refreshing in Visual Studio. For more information, see [Work with GitHub accounts in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?view=vs-2022&ref_product=copilot&ref_type=engagement&ref_style=text) in the Visual Studio documentation.
1. Try removing and re-adding your GitHub ID to Visual Studio and restarting Visual Studio.
1. If the above steps don't work, click the **Share feedback** button and select **Report a problem** to report the issue to the Visual Studio team.

    ![Screenshot of the share feedback button in Visual Studio.](/assets/images/help/copilot/vs-share-feedback-button.png)

## Interrupted chat responses on GitHub.com

If a chat response terminates unexpectedly, before the response is complete, try resubmitting the question.

In Copilot Chat ([github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)), you can resubmit your question by clicking the {% octicon "sync" aria-label="Retry" %} button under the chat response.

## Further reading

* [GitHub And Trade Controls](https://docs.github.com/en/free-pro-team@latest/site-policy/other-site-policies/github-and-trade-controls)
