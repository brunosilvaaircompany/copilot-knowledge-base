# Participating in a code security campaign

## What is a code security campaign?

A code security campaign is a focused effort to remediate a defined group of code scanning alerts across one or more repositories.

Campaigns are created by organization owners or security managers and typically target alerts detected in the default branches of repositories. If you’re participating in a campaign, you’ve been asked to help resolve some of these alerts.

## What are the benefits of participating in a campaign?

In addition to reducing risk in your organization’s codebase, alerts in a security campaign have several other benefits compared with fixing another alert in your repository.

* You have a campaign manager on the security team to collaborate with and a specific contact link for discussing campaign activities.
* You know that you are fixing a security alert that is important to the company.
* Potentially, you may have access to targeted training materials.
* If agentic autofix is enabled, you can assign alerts to Copilot, which can resolve them in a pull request. Otherwise, you can use a GitHub Copilot Autofix suggestion as a starting point where supported.
* If you have access to GitHub Copilot Chat, you can ask questions about the alert and the suggested fix.
* You are improving and demonstrating your knowledge of secure coding.

Participating in a campaign helps reduce risk in your organization’s codebase while strengthening your secure coding skills.

## 1. Learn about campaigns

Start by reviewing campaign updates and deadlines so you can plan your work effectively.

### Notification settings

You'll automatically receive email updates about security campaigns for any repositories you have **write** access to, so you can stay informed about relevant updates.



In addition, you will receive a notification if someone assigns a code scanning or a secret scanning alert to you. See [Assigning alerts](/code-security/concepts/security-at-scale/about-security-campaigns#about-assigning-alerts).




### View campaign details

When you open the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab for a repository with one or more campaign alerts, you can see the campaign name in the sidebar of the view. Click the campaign name to see the list of alerts included in the campaign and summary information on how the campaign is progressing.

### Campaign-generated GitHub Issues

Some campaigns automatically create GitHub Issues for each repository that detail the campaign managers, contact URL, and due date.

Use this issue to coordinate work, track progress, and keep stakeholders aligned. For example, you might use the issue to:

* Add the issue to project boards
* Add assignees
* Create sub-issues or tasklists

## 2. Build context before applying fixes

Your security team may provide you with specific training ahead of participating in a campaign, so that you feel equipped to address the alerts included in the campaign.

If no formal training program is available, you can request that the campaign manager shares information on:

* Types of security vulnerabilities included in the campaign
* Examples of how to fix them
* How to test the fixes

In addition, there are external resources for understanding common security issues:

* The **OWASP Foundation** provides many resources for learning about the most common vulnerabilities, see [About the OWASP Foundation](https://owasp.org/about/).
* The **MITRE Corporation** maintains a detailed list of common weaknesses, see [About CWE](https://cwe.mitre.org/about/index.html).

## 3. Collaborate early and often

A security campaign will generally include a contact URL, which might link you to the campaign manager, an open forum (such as a GitHub Discussion), or a website of resources. You should use this space to ask questions about the campaign or specific alerts, find useful resources, and share knowledge.

To find the contact URL:

1. Open the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab for your repository.
1. On the left sidebar, click the name of the campaign you are participating in.
1. On the campaign tracking page, to the right of the campaign manager's name, click **{% octicon "comment" aria-hidden="true" aria-label="comment" %}**.

## 4. Group alerts strategically

Tackle similar alerts together to build momentum, reduce context switching, and develop a deeper understanding of the underlying issue. As you gain confidence and efficiency in resolving a specific type of alert, it makes it easier and faster for you to resolve subsequent alerts.



## 5. Resolve alerts with the help of Copilot

You can leverage Copilot to help resolve alerts in a security campaign. Depending on the features enabled in your repository, you may have access to Copilot Autofix suggestions and Copilot Chat.

{% ifversion code-scanning-autofix %}

### Autofix for code scanning alerts

If agentic autofix is enabled, you can assign up to 25 alerts from the campaign view to Copilot. One assignment starts one agent session and opens one pull request for the selected alerts. See [Fixing Alerts In Security Campaign](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/fixing-alerts-in-security-campaign#assigning-alerts-to-copilot).

If agentic autofix isn't enabled, use a Copilot Autofix suggestion where available, or fix the alert manually. After you commit the fix, verify that continuous integration checks still pass. See [Fixing Alerts In Security Campaign](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/fixing-alerts-in-security-campaign).

### Copilot Chat

You can ask Copilot Chat for help in understanding the vulnerability, the suggested fix, and how to test that the fix is comprehensive. To access Copilot Chat, navigate to [https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).

Alternatively, when viewing a specific alert, in the top right corner of the page, click the Copilot Chat icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) to open a chat window, and ask Copilot questions about the alert.

For example:

   ```text copy

   Explain how this alert introduces a vulnerability into the code.

   ```

If you don't already have access to Copilot Chat through your organization or enterprise, you can sign up to GitHub Copilot Free. See [Get Started With A Copilot Plan](https://docs.github.com/en/copilot/how-tos/manage-your-account/get-started-with-a-copilot-plan).

{% endif %}

## Next steps

* [Fixing Alerts In Security Campaign](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/fixing-alerts-in-security-campaign)
