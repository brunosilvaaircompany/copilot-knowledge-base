# Model multipliers for annual plans on request-based billing (legacy)

> [!IMPORTANT] On June 1, 2026, GitHub moved to usage-based billing. The model multipliers in this article apply only to Copilot Pro and Copilot Pro+ subscribers on an existing **annual plan** who remained on the legacy **premium request-based billing** model after June 1, 2026.
>
> To learn more about these billing changes, including what your options are as an existing Copilot Pro and Copilot Pro+ subscriber on an annual plan, see [What Changed With Billing](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/what-changed-with-billing).

Under the legacy premium request-based billing model, each model has a premium request multiplier, based on its complexity and resource usage. Your premium request allowance is deducted according to this multiplier.

Model multipliers are a concept specific to the legacy premium request-based billing system, and **do not apply** to GitHub's new usage-based billing model.

The models included with Copilot plans are subject to change.

Model multipliers and costs are subject to change.

> [!NOTE] Users on legacy annual Copilot plans will not receive access to new models and features. 

## Model multipliers

The following table shows the model multipliers per supported model.

> [!NOTE]
> The multiplier for these models are subject to change.
>
> * Claude Sonnet 4.6
> * GPT-5.4 mini
> * The multiplier for MAI-Code-1-Flash is a promotional rate.
> 
> If you use auto model selection in Copilot Chat, Copilot CLI, GitHub Copilot app, or Copilot cloud agent, you qualify for a 10% discount. For example, if a model has a multiplier of 1x you'll be billed at 0.9x instead.

| Model | Multiplier |
| --- | ---: |
| {% for entry in tables.copilot.annual-subscriber-model-multipliers %} |
| {{ entry.model }} | {{ entry.new_multiplier }} |
| {% endfor %} |

### Model multiplier for Copilot code review

Copilot code review has a model multiplier of 13. This means each time Copilot reviews a pull request or reviews code in your IDE, your monthly quota of Copilot premium requests is reduced by 13.

## Further reading

* To learn more about premium requests, see [Copilot Requests](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/copilot-requests).
* To understand more about how the new usage-based billing model works, see [Usage Based Billing For Individuals](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals).
