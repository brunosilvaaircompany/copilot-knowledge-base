# GitHub Code Quality billing

## How GitHub Code Quality billing is measured

Use of Code Quality incurs three types of costs for an organization:

* [GitHub Actions minutes](#github-actions-minutes)
* [GitHub AI Credits](#github-ai-credits)
* [Active and unique committers](#active-and-unique-committers)

### GitHub Actions minutes

Code Quality scans run as GitHub Actions workflows and consume GitHub Actions minutes, unless you use self-hosted runners. See [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).

### GitHub AI Credits

Code Quality features that use AI models consume AI credits from your shared AI credits pool, rather than a separate Code Quality allowance. Each interaction is priced based on the number of tokens consumed, where 1 AI credit = $0.01 USD. 

Code Quality is a purpose-built product that uses a carefully tuned mix of models, prompts, and system behaviors to deliver consistent, high-quality analysis across a wide range of codebases. Model switching is not supported, as changing the model is likely to compromise the reliability and accuracy of analysis results. 

For more information about how AI credits work, see [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

### Active and unique committers

Code Quality is a standalone product with its own license, and does not consume GitHub Advanced Security or any other product's licenses. GitHub App bots are ignored. For information about differences between bot and machine accounts, see [Differences Between GitHub Apps And OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts).

* Your license usage is calculated based on the number of unique, active committers to repositories with Code Quality enabled. 
* Each **active committer** uses **one Code Quality license**. 
* A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.
* A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

To understand your license usage, and which licenses you can free up, it helps to distinguish between active and unique committers. You can see the number of licenses you're using on the **Licensing** page for your organization or enterprise, shown as **"Consumed licenses"**:
* **Active committers** are committers who contributed to at least one repository and have a GitHub Team or GitHub Enterprise license with your organization or enterprise. This includes members, enterprise-managed users, external collaborators, and people with a pending invitation to join your organization or enterprise.
* **Unique committers** is the number of active committers who contributed only to one repository, or only to repositories in one organization. You can free up this number of licenses by disabling Code Quality for that repository or organization.

Users can contribute to multiple repositories or organizations. Usage is measured across the whole organization or enterprise to ensure that each member uses one license regardless of how many repositories or organizations the user contributes to.

## Further reading

* [Catch Issues Before Merge](https://docs.github.com/en/code-security/tutorials/improve-code-quality/catch-issues-before-merge)
* [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions)
* [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises)
