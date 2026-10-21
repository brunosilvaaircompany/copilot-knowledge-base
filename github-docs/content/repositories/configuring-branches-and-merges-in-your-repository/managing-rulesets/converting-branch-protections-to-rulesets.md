# Converting branch protections to rulesets

## About converting branch protections to rulesets

Rulesets give you clearer visibility and control over how protections apply to a repository. Unlike branch protection rules, multiple rulesets can apply to the same branch at the same time, and people with read access can view the active rulesets. This helps developers understand the rules that affect them and lets auditors review repository protections without administrator access.

You can import eligible branch protection rules together from the repository's ruleset settings, or convert one rule at a time.

GitHub proposes one or more rulesets for each branch protection rule. Before creating the rulesets, you can review their names and any warnings about changes in behavior. One branch protection rule can produce multiple rulesets when its protections cannot be represented in a single ruleset.

For more information about rulesets, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).



## Converting branch protection rules for a repository

You can convert multiple eligible branch protection rules. Before creating the rulesets, you can review and configure which protections will be imported and how the new rulesets will be enforced.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code, planning, and automation"{% elsif ghes %} "Code and automation", click **Rulesets**, then click **Rulesets**.

1. At the top of the "Rulesets" page, click **Import branch protection rules**.
1. In the "Review import" dialog, review the proposed rulesets:
   * If a protection is labeled **Already covered by an existing ruleset**, the import will not create another ruleset for it.
   * Review any warnings about new behavior. A branch protection rule can result in multiple proposed rulesets.
1. From the **Enforcement status** dropdown, choose a status for the new rulesets.
   * **Active**: Enforces the rulesets as soon as they are created.
   * **Evaluate**: Records how the rulesets would behave without enforcing them.
   * **Disabled**: Creates the rulesets without evaluating or enforcing them.
1. Select the checkbox for each proposed ruleset that you want to create.
1. Click **Create rulesets**.
1. In the "Creating ruleset" dialog that follows, choose what to do with the original branch protection rules.
   * To retain the original protections, click **Keep rule**. The original rules continue to protect matching branches. An **Active** ruleset is enforced alongside them, so changes must satisfy both.
   * To remove the original protections, click **Delete branch protection rule**. Only delete the original rules if the new rulesets are **Active** and you have confirmed that they cover the intended branches and behave as expected. **Evaluate** and **Disabled** rulesets do not provide active protection.



## Converting a single branch protection rule to a ruleset

Use the single-rule flow when you want to review and configure the conversion for one branch protection rule at a time.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code, planning, and automation"{% elsif ghes %} "Code and automation" section of the sidebar, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Branches**.

1. Under "Branch protection rules", find the rule you want to convert, then click **Convert to ruleset**.
1. Set the ruleset name for each ruleset that will be created in this conversion.
1. Review the "New behavior" section to understand what will change when you create the ruleset or rulesets.
1. Under "Enforcement status", choose how the new ruleset is enforced. For more information, see [Choosing an enforcement status](#choosing-an-enforcement-status).
1. If you chose **Active**, you can optionally remove the original branch protection rule as part of the conversion by selecting **Delete branch protection rule once migration is done**.
1. Click **Create ruleset**. If the conversion produces more than one ruleset, the button includes the number of rulesets, for example, **Create 2 rulesets**.

If you keep the original branch protection rule, it continues to protect matching branches. An **Active** ruleset is enforced alongside it, so changes must satisfy both. An **Evaluate** ruleset records how it would behave without enforcing its rules.



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
