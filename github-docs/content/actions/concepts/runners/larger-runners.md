# Larger runners

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




To learn about larger runners, see [the GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/actions/concepts/runners/larger-runners).


## Billing

> [!NOTE]
> Larger runners are not eligible for the use of included minutes on private repositories. For both private and public repositories, when larger runners are in use, they will always be billed at the per-minute rate.

Compared to standard GitHub-hosted runners, larger runners are billed differently. Larger runners are only billed at the per-minute rate for the amount of time workflows are executed on them. There is no cost associated with creating a larger runner that is not being used by a workflow.
 For more information, see [Actions Runner Pricing](https://docs.github.com/en/billing/reference/actions-runner-pricing).

## Next steps

To start using larger runners, see [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners).

To find reference information about using larger runners, see [Larger Runners](https://docs.github.com/en/actions/reference/runners/larger-runners).

{% endif %}
