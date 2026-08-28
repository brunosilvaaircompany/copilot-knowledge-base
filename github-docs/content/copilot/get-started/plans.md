# Plans for GitHub Copilot

## GitHub Copilot plans

GitHub offers a variety of plans for Copilot. Choose between them depending on your needs and whether you're using Copilot as an individual or as part of an organization or enterprise.

**Copilot Free**: [Start using Copilot Free](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=free).

* This plan includes limited access to a selection of Copilot features allowing you to try AI-powered coding assistance at no cost.

**Copilot Student**: [Get access to Copilot Student](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students).

* Available to verified students. Get access to Copilot's features for free. 

**GitHub Copilot Pro**: [Subscribe to Copilot Pro](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro).

* Designed for individuals who want more flexibility with access to a selection of models and a monthly allowance of AI credits. 

**GitHub Copilot Pro+**: [Subscribe to Copilot Pro+](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro-plus).

* Ideal for AI power users who want access to the most advanced capabilities. This paid plan includes everything in GitHub Copilot Pro and a higher monthly allowance of AI credits. 

**GitHub Copilot Max**: [Upgrade to Copilot Max](https://github.com/settings/billing/licensing?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=max).

* Ideal for sustained, high-volume AI power users who want access to the most AI credits available to them. This paid plan includes everything in Copilot Pro+, plus our highest individual monthly allowance of AI credits. 

> [!IMPORTANT] 
> 

On April 22, 2026, new self-serve purchases of Copilot Business and Copilot Enterprise were temporarily paused. 

Self-serve sign-ups **are reopening soon** for customers paying by credit card or PayPal. You might be charged prorated seat costs at sign-up. Additional usage beyond your included amount requires payment as you go. Self-serve trials remain paused.




**GitHub Copilot Business**: To get started, [contact sales](https://github.com/enterprise/contact?ref_product=copilot&ref_type=purchase&ref_style=text).

* Made for organizations an enterprises, this plan offers centralized management and Copilot policy control for organization members.

**GitHub Copilot Enterprise**: [Contact sales](https://github.com/enterprise/contact?ref_product=copilot&ref_type=purchase&ref_style=text) to get started.

* Designed for enterprises using GitHub Enterprise Cloud. This plan includes all the features of Copilot Business, offers a larger monthly pool of AI credits, plus additional enterprise-grade capabilities. 

> [!NOTE]
> Copilot is not currently available for GitHub Enterprise Server.

## Copilot plans overview

The table below provides an overview of differences between plans. All plans include Copilot CLI and Copilot app. 

{% rowheaders %}

| Plan                                                  | Pricing                                                                             | GitHub AI Credits | Agents                                                                     | Models                            |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------- | --------------------------------- |
| Copilot Free       | Free                                                                                | An allowance of GitHub AI Credits                | Limited                                                                    | Auto model selection only         |
| Copilot Student    | Free                                                                                | An allowance of GitHub AI Credits                | {% octicon "check" aria-label="Included" %}<br>Excludes third-party agents | Auto model selection only         |
| Copilot Pro        | $10 USD per month<br>(free for some users) | Base: 1,000                | {% octicon "check" aria-label="Included" %}                                | A selection of models             |
| Copilot Pro+   | $39 USD per month.                         | Base: 3,900                | {% octicon "check" aria-label="Included" %}                                | Access to premium models          |
| Copilot Max        | $100 USD per month                           | Base: 10,000                | {% octicon "check" aria-label="Included" %}                                | Priority access to premium models |
| Copilot Business   | $19 USD per granted seat per month         | Total per user per month: 1,900                | {% octicon "check" aria-label="Included" %}                                | Access to premium models          |
| Copilot Enterprise | $39 USD per granted seat per month          | Total per user per month: 3,900                | {% octicon "check" aria-label="Included" %}                                | Priority access to premium models |

{% endrowheaders %}

Each plan comes with an allowance of GitHub AI Credits. For more information, including how GitHub AI Credits work, see [Usage Based Billing For Individuals](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals) and [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

For more detail on what's uniquely available in each plan, see the following sections: 
* [Individual plans](#individual-plans)
* [Organization and enterprise plans](#organization-and-enterprise-plans)

## Individual plans

The individual plans available are: 
* Free plans including Copilot Free and Copilot Student.
* Paid plans including Copilot Pro, Copilot Pro+, and Copilot Max.

With these plans you'll receive access to the following features and capabilities. 

> [!NOTE] 
> * Copilot Free plans are only available to individual developers who don't have access to Copilot through an organization or enterprise.
> * Verified teachers, and maintainers of popular open source projects may be eligible for free access to Copilot Pro. 

### GitHub AI Credits allowance by plan

The following table shows what's included with each paid plan.

| Plan | Price per month | Base credits | Flex allotment | Total monthly AI credits |
| --- | --- | --- | --- | --- |
| Copilot Pro | $10 USD | 1,000 | 500 | 1,500 |
| Copilot Pro+ | $39 USD | 3,900 | 3,100 | 7,000 |
| Copilot Max | $100 USD | 10,000 | 10,000 | 20,000 |


Copilot Free and Copilot Student both have an allowance of AI credits.

For more information on how GitHub AI Credits work, see [Usage Based Billing For Individuals](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals)

### Inline suggestions and Copilot Chat

Inline suggestions are real-time code suggestions with included models in IDEs and Next edit suggestions. 
* Limited to 2000 completions per month on Copilot Free. 

**Copilot Chat** features available include:
* Copilot Chat in IDEs
* Inline chat
* Slash commands
* Copilot Chat in GitHub Mobile
* Copilot Chat in GitHub
* Copilot Chat in Windows Terminal
* Copilot Chat skills in IDEs.[^1] (Not available in Copilot Free).

### Models

On Copilot Free and Copilot Student plans, access to models is available through auto model selection only.

{% rowheaders %}

| Available models                               | Copilot Pro  | Copilot Pro+ | Copilot Max |
|---------------------------------------------------------|-------------------------------------------------|-----------------------------------------------------|------------------------------------------------|
| {% for model in tables.copilot.model-supported-plans %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'Claude Fable 5' %}[^claude-fable-5]{% endif %} | {% if model.pro == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.pro_plus == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.max == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                            |

{% endrowheaders %}

### Agents

{% rowheaders %}

| Agents                                                                  | Copilot Free                                   | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| Copilot cloud agent                        | {% octicon "x" aria-label="Not included" %}                                       | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Agent mode                                                              | {% octicon "check" aria-label="Included" %}                                       | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Copilot code review         | Only "Review selection" in VS Code | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Model Context Protocol (MCP)                                            | {% octicon "check" aria-label="Included" %}                                       | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Third-party Agents (public preview) | {% octicon "x" aria-label="Not included" %}                                       | {% octicon "x" aria-label="Not included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |

{% endrowheaders %}

### Customization

{% rowheaders %}

| Customization                                                                    | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max |
| -------------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| Repository and personal custom instructions                                      | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Organization custom instructions                                                 | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "x" aria-label="Not included" %}         | {% octicon "x" aria-label="Not included" %}    |
| Prompt files                                                                     | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Model Context Protocol (MCP)                                                     | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Block suggestions matching public code                                           | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Exclude specified files from Copilot | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "x" aria-label="Not included" %}         | {% octicon "x" aria-label="Not included" %}    |
| Organization-wide policy management                                              | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "x" aria-label="Not included" %}         | {% octicon "x" aria-label="Not included" %}    |

{% endrowheaders %}

### Other features

{% rowheaders %}

|                                                                                                  | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| Copilot pull request summaries                                                     | {% octicon "x" aria-label="Not included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Audit logs                                                                                       | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Content exclusion                                                                                | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "x" aria-label="Not included" %}         | {% octicon "x" aria-label="Not included" %}    |
| Copilot CLI                                                   | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Copilot app                                                   | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| GitHub Spark (public preview) | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "x" aria-label="Not included" %}    |

{% endrowheaders %}

## Organization and enterprise plans

The Copilot plans available for organizations and enterprises are: 
* Copilot Business
* Copilot Enterprise

With these plans you'll receive access to the following features and capabilities. 

> [!NOTE] With GitHub Enterprise Cloud, an enterprise owner chooses the plan for each organization in the enterprise. For guidance on choosing a plan, see [Choose Enterprise Plan](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/choose-enterprise-plan).

### GitHub AI Credits allowance by plan

| Plan | Price per granted seat per month | GitHub AI Credits per user per month | 
| --- | --- | --- | 
| Copilot Business | $19 USD  | 1,900 | 
| Copilot Enterprise| $39 USD  | 3,900 | 

Copilot usage is measured in AI credits under usage-based billing. Each license contributes AI credits to a shared enterprise pool, and usage beyond the pool is charged at $0.01 USD per AI credit. Code completions and next edit suggestions are not billed in AI credits and remain unlimited for all paid plans.

For a full explanation of how AI credits work, including pooling, additional usage, and what happens when credits run out, see [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

### Inline suggestions and Copilot Chat

**Inline suggestions**: Inline suggestion features are available in all plans:

* Real-time code suggestions with included models
* Next edit suggestions

**Copilot Chat** features are available in all plans: 

* Copilot Chat in IDEs
* Inline chat
* Slash commands
* Copilot Chat in GitHub Mobile
* Copilot Chat in GitHub
* Copilot Chat in Windows Terminal
* Copilot Chat skills in IDEs[^1]

### Models

{% rowheaders %}

| Available models                               | Copilot Business | Copilot Enterprise |
|---------------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------|
| {% for model in tables.copilot.model-supported-plans %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'Claude Fable 5' %}[^claude-fable-5]{% endif %} | {% if model.business == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.enterprise == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                            |

{% endrowheaders %}

[^gpt54nano]: GPT-5.4 nano is currently only available in the Codex Visual Studio Code extension (Copilot Pro+ only) and is not available in Copilot Chat.

### Agents

{% rowheaders %}

| Agents                                                                  | Copilot Business | Copilot Enterprise |
| ----------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Copilot cloud agent                        | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Agent mode                                                              | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Copilot code review         | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Model Context Protocol (MCP)                                            | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Third-party Agents (public preview) | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |

{% endrowheaders %}

### Customization

{% rowheaders %}

| Customization                                                                    | Copilot Business | Copilot Enterprise |
| -------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Repository and personal custom instructions                                      | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Organization custom instructions                                                 | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Prompt files                                                                     | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Model Context Protocol (MCP)                                                     | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Block suggestions matching public code                                           | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Exclude specified files from Copilot | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Organization-wide policy management                                              | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |

{% endrowheaders %}

### Other features

{% rowheaders %}

|                                                                                                  | Copilot Business | Copilot Enterprise |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------- | ----------------------------------------------------- |
| Copilot pull request summaries                                                     | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Audit logs                                                                                       | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Content exclusion                                                                                | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Copilot CLI                                                   | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Copilot app                                                  | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| GitHub Spark (public preview) | {% octicon "x" aria-label="Not included" %}         | {% octicon "check" aria-label="Included" %}           |

{% endrowheaders %}

## Further reading

* To compare feature support across IDEs, see [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).
* To compare models supported across plans, features, and IDEs, see [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models).

[^1]: Copilot Chat skills in IDEs is available in Visual Studio Code and Visual Studio.
[^claude-fable-5]: When Claude Fable 5 is used, Anthropic retains data, including prompts and outputs, to operate safety classifiers that detect harmful use. Other Claude models in GitHub Copilot remain covered by GitHub's existing data retention agreements, as documented at [Model Hosting](https://docs.github.com/en/copilot/reference/ai-models/model-hosting#anthropic-models). Enterprise and business users need to enable the Claude Fable 5 model to make it available for your organization. You can read more about Anthropic's data handling practices for this model under section F of their [Service Specific Terms](https://www.anthropic.com/legal/service-specific-terms). To enable Claude Fable 5, see [Configure Access To Ai Models](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
