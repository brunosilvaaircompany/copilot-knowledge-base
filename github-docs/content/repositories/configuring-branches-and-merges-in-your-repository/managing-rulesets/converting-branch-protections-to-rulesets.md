# Converting branch protections to rulesets

## About converting branch protections to rulesets

Rulesets give you clearer visibility and control over how protections apply to a repository. Unlike branch protection rules, multiple rulesets can apply to the same branch at the same time, and people with read access can view the active rulesets. This helps developers understand the rules that affect them and lets auditors review repository protections without administrator access.

To move your existing protections to this model, convert one branch protection rule at a time in a guided flow. GitHub generates one or more rulesets that preserve the original rule's behavior. You can preview the rulesets, choose how each one is enforced, and verify the result before you remove the original branch protection rule.

For more information about rulesets, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Converting a branch protection rule to a ruleset

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Branches**.

1. Under "Branch protection rules", find the rule you want to convert, then click **Convert to ruleset**.
1. Set the ruleset name for each ruleset that will be created in this conversion.
1. Review the "New behavior" section to understand what will change when you create the ruleset or rulesets.
1. Under "Enforcement status", choose how the new ruleset is enforced. For more information, see [Choosing an enforcement status](#choosing-an-enforcement-status).
1. If you chose **Active**, you can optionally remove the original branch protection rule as part of the conversion by selecting **Delete branch protection rule once migration is done**.
1. Click **Create ruleset**. If the conversion produces more than one ruleset, the button includes the number of rulesets, for example, **Create 2 rulesets**.

If you keep the original branch protection rule, it continues to protect matching branches. An **Active** ruleset is enforced alongside it, so changes must satisfy both. An **Evaluate** ruleset records how it would behave without enforcing its rules.

> [!NOTE]
> The conversion covers all branch protection types with the exception of the "Require conversation resolution before merging" setting. In branch protections, this setting exists on its own. In rulesets, conversation resolution is part of the pull request rule and only applies when that rule is enabled. As a result, this setting does not map one to one during conversion. See [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).



### Choosing an enforcement status

When you convert a branch protection rule, you choose an enforcement status for the new ruleset.

* **Active**: the ruleset is enforced as soon as it is created.
* **Evaluate**: the ruleset runs without enforcing its rules, so you can review how it would behave before it takes effect.

Although **Active** is selected by default, consider which status fits your situation:

* If you have created or migrated similar rules before and are confident in the outcome, you can use **Active**.
* If this is your first migration, consider starting in **Evaluate** mode. You can confirm that the new ruleset behaves as expected, then delete the original branch protection rule once you have finished testing.



### Deleting the original branch protection rule

After you convert a rule, return to the **Branches** settings page. If you did not opt to delete the branch protection rule during the conversion process and the new ruleset fully covers it, the listed rule displays the message "This rule is fully covered by rulesets and can be safely deleted", and a **Delete** button appears in place of the **Convert to ruleset** button.

Before you delete the original rule, we recommend confirming that the new ruleset behaves as you expect, especially if you created it in **Evaluate** mode. When you are ready, click **Delete** to remove the branch protection rule.

## Further reading

* [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
