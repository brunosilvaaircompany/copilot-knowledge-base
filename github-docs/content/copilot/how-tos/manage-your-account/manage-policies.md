# Managing GitHub Copilot policies as an individual subscriber

## About GitHub Copilot settings on GitHub

In addition to the configuration for the GitHub Copilot plugin in your supported IDE, you can configure settings for GitHub Copilot on GitHub. The settings apply wherever you use GitHub Copilot.

## Enabling or disabling suggestions matching public code

> [!NOTE] If you are a member of an organization on GitHub Enterprise Cloud who has been assigned a GitHub Copilot seat through your organization, you will not be able to configure suggestions matching public code in your personal account settings. Your setting for suggestions matching public code will be inherited from your organization or enterprise.

Your personal settings for GitHub Copilot include an option to either allow or block code suggestions that match publicly available code.

If you choose to block suggestions matching public code, in most GitHub Copilot products, GitHub Copilot checks code suggestions with their surrounding code of about 150 characters against public code on GitHub. If there is a match, or a near match, the suggestion is not shown to you.

If you choose to allow suggestions matching public code or use a product that does not support "Block" mode, when Copilot suggests matching code you can display details of the matches and click through to the relevant repositories on GitHub. For more information, see [Find Matching Code](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/find-matching-code).

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. To the right of **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.

## Disabling or enabling Copilot cloud agent in your repositories

Copilot cloud agent allows you to assign Copilot to GitHub issues, or prompt Copilot to undertake a task autonomously, such as deep research of a repository, planning, or code changes, with the option to create a pull request when you're ready.

> [!NOTE]
> * Copilot cloud agent is available for all paid Copilot plans.

The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.


Copilot cloud agent is enabled in all repositories by default, but you can block it from being used in repositories owned by your own personal account by changing your account settings.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. In the sidebar, under **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, click **Cloud agent**.
1. On the Copilot cloud agent page, under "Policies," click the dropdown button for "Repository access," then choose either **No repositories**, **All repositories**, or **Only selected repositories**.
1. If you choose **Only selected repositories**, click **Select repositories** and choose the repositories where you want to enable Copilot cloud agent.

For GitHub Copilot Business and GitHub Copilot Enterprise subscribers, the ability to use Copilot cloud agent is controlled by policy settings defined at the organization level. See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

If the organization is owned by an enterprise, enablement may be controlled at the enterprise level. See [Enable Copilot Cloud Agent](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/enable-copilot-cloud-agent).




## Enabling or disabling third-party coding agents in your repositories

> [!NOTE]
> Available for all paid [Copilot plans](/copilot/get-started/plans).

You can choose whether to allow the following coding agents to be enabled in your personal account:

* Anthropic Claude
* OpenAI Codex

Installed agent apps also appear under "Partner agents" and are enabled in the same way. For more information, see [Agent Apps](https://docs.github.com/en/copilot/concepts/agents/agent-apps).

Coding agents have access to the same repositories that Copilot cloud agent has been enabled in.

To enable coding agents:

1. Navigate to your account's [cloud agent settings](https://github.com/settings/copilot/coding_agent?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-3p-agents-cca-settings-cta&utm_medium=docs&utm_campaign=agent-3p-platform-feb-2026).
1. On the Copilot cloud agent page, under "Partner agents", click the toggle to enable the third-party agent you want to use.

## Enabling or disabling web search for GitHub Copilot Chat

You can enable web search for GitHub Copilot Chat. This setting is disabled by default. If you enable this setting, Copilot Chat will use Bing to search the internet for information related to a question. Bing search is particularly helpful when discussing new technologies or highly specific subjects.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. To the right of **Copilot access to Bing**, select the dropdown menu, and then click **Enabled** or **Disabled**.

## Model training and improvements

> [!NOTE]
> GitHub does not use Copilot Business or Copilot Enterprise customer data to train AI models. Copilot Business and Copilot Enterprise customers' data is protected under GitHub's Data Protection Agreement, which prohibits such use without customer authorization.

Starting on April 24, 2026, if you have a **Copilot Free**, **Copilot Pro**, **Copilot Pro+**, or **Copilot Max** plan, GitHub may use your interactions with GitHub features and services—including inputs, outputs, code snippets, and associated context—to train and improve AI models. This change allows us to build more intelligent, context-aware coding assistance based on real-world development patterns. You can opt-out from allowing your data to be used for training in your personal settings for GitHub Copilot. For information about how we use and share data, see our [Privacy Statement](/site-policy/privacy-policies/github-general-privacy-statement).


1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.


1. Select the "Allow GitHub to use my data for AI model training" dropdown menu and click **Disabled**.

    If you don't see "Allow GitHub to use my data for AI model training", verify that you are not signed in with an account that has a Copilot Business or Copilot Enterprise license. Copilot Business and Copilot Enterprise customers' data is protected under GitHub's Data Protection Agreement, so the setting is not displayed for these plans.

    1. To verify your account type, see [View And Change Your Copilot Plan](https://docs.github.com/en/copilot/how-tos/manage-your-account/view-and-change-your-copilot-plan).
