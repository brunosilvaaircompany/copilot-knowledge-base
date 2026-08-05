# About Actions policies

> [!NOTE]
> Actions policies are in public preview and subject to change.


## About Actions policies

Actions policies let you govern how GitHub Actions workflows run across your organizations and repositories. You configure Actions policies in a new **Policies** section of your GitHub Actions settings, separate from your existing **General** settings.

Actions policies are available at the enterprise, organization, and repository levels.

Actions policies currently contain one type of policy: workflow execution protections. GitHub plans to add more policies over time.

## About workflow execution protections

Workflow execution protections let you define an allow list that controls who can trigger GitHub Actions workflows and which events are permitted to run them. Workflow execution protections come with two rule types: event and actor. GitHub plans to add more rules over time.

Workflow execution protections are built on the GitHub rulesets framework, so the targeting you already know from rulesets works here too. You can apply protections with rulesets and scope them to specific repositories using repository custom properties. For more information about rulesets, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).


## Next steps

To configure workflow execution protections for your enterprise, including setting up event and actor rules, see [Workflow Execution Protections](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/actions-policies/workflow-execution-protections).
