# Enterprise policies

## What are enterprise policies and why are they important?

To help you enforce business rules and regulatory compliance, policies provide a single point of management for all the organizations owned by an enterprise account.

Each enterprise policy controls the options available for a policy at the organization level. You can choose to not enforce a policy, which allows organization owners to configure the policy for the organization, or you can choose from a set of options to enforce for all organizations owned by your enterprise.


For example, with the "Base permissions" policy, you can allow organization owners to configure the "Base permissions" policy for their organization, or you can enforce a specific base permissions level, such as "Read", for all organizations within the enterprise.

## What are the steps to enforce enterprise policies?

By default, no enterprise policies are enforced. To identify policies that should be enforced to meet the unique requirements of your business, we recommend reviewing all the available policies in your enterprise account, starting with repository management policies.

While you're configuring enterprise policies, to help you understand the impact of changing each policy, you can view the current configurations for the organizations owned by your enterprise.


We recommend creating a **repository policy** to govern the lifecycle of repositories in your enterprise, such as who can create or delete repositories. Repository policies give you flexibility over which users are affected and which organizations and repositories are targeted. See [Governing How People Use Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise).



For a full list of repository management policies, see [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).


Another way to enforce standards within your enterprise is to use pre-receive hooks, which are scripts that run on {% ifversion ghes %}your GitHub Enterprise Server instance to implement quality checks. For more information, see [Enforcing Policy With Pre Receive Hooks](https://docs.github.com/en/admin/enforcing-policies/enforcing-policy-with-pre-receive-hooks).
{% endif %}

## Further reading

* [Enterprise Accounts](https://docs.github.com/en/admin/concepts/enterprise-fundamentals/enterprise-accounts)
