# Protecting branches in your enterprise with rulesets

You can create rulesets to control how users can interact with code in repositories across your enterprise. You can:

* Create a **branch or tag ruleset** to control things like who can push commits to a certain branch, how commits must be formatted, or who can delete or rename a tag.
* Create a **push ruleset** to block pushes to a private or internal repository and the repository's entire fork network. Push rulesets allow you to block pushes based on file extensions, file path lengths, file and folder paths, and file sizes.


## Using ruleset enforcement statuses

While creating or editing your ruleset, you can use enforcement statuses to configure how your ruleset will be enforced.

You can select any of the following enforcement statuses for your ruleset.

   * **{% octicon "play" aria-hidden="true" aria-label="play" %} Active:** your ruleset will be enforced upon creation.
   * **{% octicon "meter" aria-hidden="true" aria-label="meter" %} Evaluate:** your ruleset will not be enforced, but you will be able to monitor which actions would or would not violate rules on the "Rule Insights" page.
   * **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled:** your ruleset will not be enforced or evaluated.



Using "Evaluate" mode is a great option for testing your ruleset without enforcing it. You can use the "Rule Insights" page to see if the contribution would have violated the rule.




## Creating a branch or tag ruleset


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "Policies", click **Code**.
1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**. Alternatively, to create a ruleset targeting tags, click **New tag ruleset**.

1. Under "Ruleset name," type a name for the ruleset.
1. Optionally, to change the default enforcement status, click **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} and select an enforcement status.


For a more detailed explanation of the available options, see [Enforcing Policies For Code Governance](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance).

## Next steps

Learn how to monitor and audit activity in your enterprise. See [Using The Audit Log For Your Enterprise](https://docs.github.com/en/enterprise-onboarding/govern-people-and-repositories/using-the-audit-log-for-your-enterprise).
