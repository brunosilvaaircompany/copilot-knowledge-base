# Plans for GitHub Copilot

> [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

GitHub offers several plans for GitHub Copilot, depending on your needs and whether you're using Copilot as an individual or as part of an organization or enterprise.

* **GitHub Copilot Free** is available to individual developers who don't have access to Copilot through an organization or enterprise. This free plan includes limited access to a selection of Copilot features and models available through auto model selection only, allowing you to try AI-powered coding assistance at no cost.

* **GitHub Copilot Student** is available to verified students. The plan includes unlimited code completions and an allowance of GitHub AI Credits, plus limited chat and agent usage with models available through auto model selection only.

* **GitHub Copilot Pro** is designed for individuals who want more flexibility. This paid plan includes unlimited completions, access to a selection of models, Copilot cloud agent, and a monthly allowance of AI credits. Verified teachers, and maintainers of popular open source projects may be eligible for free access.

* **GitHub Copilot Pro+** includes, in addition to everything in Copilot Pro, a higher monthly allowance of AI credits, and access to premium models. Ideal for AI power users who want access to the most advanced capabilities.

* **GitHub Copilot Max** is designed for high-volume Copilot users. This paid plan includes, in addition to everything in Copilot Pro+, our highest individual monthly allowance of AI credits, and priority access to new models and features. Ideal for sustained, high-volume AI power users who want access to the most AI credits available to them.

* **GitHub Copilot Business** is for organizations on GitHub Free or GitHub Team plan, or enterprises on GitHub Enterprise Cloud. This plan includes Copilot cloud agent, access to a broad model catalog, a monthly pool of AI credits, and enables centralized management and Copilot policy control for organization members.

* **GitHub Copilot Enterprise** is for enterprises using GitHub Enterprise Cloud. It includes all the features of Copilot Business, priority access to new models and features, a larger monthly pool of AI credits, plus additional enterprise-grade capabilities. Enterprise owners can assign Copilot Enterprise or Copilot Business to individual organizations, or assign Copilot Business directly to users and teams.

Copilot is not currently available for GitHub Enterprise Server.

## Comparing Copilot plans

The tables below show the features available in each Copilot plan.

### Pricing

{% rowheaders %}

| | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pricing | Not applicable | Free | $10 USD per month<br>(free for some users) | $39 USD per month<br> | $100 USD per month | $19 USD per granted seat per month | $39 USD per granted seat per month |

{% endrowheaders %}

Each plan comes with an allowance of GitHub AI Credits. For more information, including how GitHub AI Credits work, see [Usage Based Billing For Individuals](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals) and [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

### Agents

{% rowheaders %}

| Agents | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  Copilot cloud agent | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Agent mode | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Copilot code review | Only "Review selection" in VS Code | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Model Context Protocol (MCP) | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Third-party Agents (public preview) | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

### Chat

{% rowheaders %}

| Chat | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copilot Chat in IDEs[^2] [^3] | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Inline chat | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Slash commands | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Copilot Chat in GitHub Mobile | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Copilot Chat in GitHub | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Copilot Chat in Windows Terminal | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |{% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Copilot Chat skills in IDEs[^5] | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

### Models

> [!NOTE] Copilot Student and Copilot Free users have access to models through auto model selection only.

{% rowheaders %}

| Available models                               | Copilot Pro  | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
|---------------------------------------------------------|-------------------------------------------------|-----------------------------------------------------|------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------|
| {% for model in tables.copilot.model-supported-plans %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'Claude Fable 5' %}[^claude-fable-5]{% endif %} | {% if model.pro == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.pro_plus == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.max == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.business == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.enterprise == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                            |

{% endrowheaders %}

[^gpt54nano]: GPT-5.4 nano is currently only available in the Codex Visual Studio Code extension (Copilot Pro+ only) and is not available in Copilot Chat.


### Inline suggestions

{% rowheaders %}

| Inline suggestions | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Real-time code suggestions with included models[^6] | 2000 completions per month | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Next edit suggestions | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

### Customization

{% rowheaders %}

| Customization | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Repository and personal custom instructions | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Organization custom instructions | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Prompt files | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Model Context Protocol (MCP) | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Block suggestions matching public code | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Exclude specified files from Copilot | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Organization-wide policy management         | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

### Other features

{% rowheaders %}

| | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copilot pull request summaries | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Audit logs | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} |{% octicon "check" aria-label="Included" %}  | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Content exclusion | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Copilot CLI | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| GitHub Spark (public preview) | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

[^1]: Includes base credits and flex allotment. See [Usage Based Billing For Individuals](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals#how-do-ai-credits-work).
[^2]: Copilot Chat in IDEs is available in Visual Studio Code, Visual Studio, JetBrains IDEs, Eclipse, and Xcode.
[^3]: Response times may vary during periods of high usage.
[^5]: Copilot Chat skills in IDEs is available in Visual Studio Code and Visual Studio.
[^6]: Inline suggestions in IDEs is available in Visual Studio Code, Visual Studio, JetBrains IDEs, Azure Data Studio, Xcode, Vim/Neovim, and Eclipse.


For more information, see [Features](https://docs.github.com/en/copilot/get-started/features).

## Ready to choose a plan?

Start using Copilot by signing up for the plan that best fits your needs.

> [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

* **Copilot Free** — Try Copilot with limited features and usage. [Start using Copilot Free](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=free).

* **GitHub Copilot Student** — Get access to Copilot's features for free. [Access GitHub Copilot Student](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students).

* **Copilot Pro** — Get unlimited completions and access to select models. [Subscribe to Copilot Pro](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro).

* **Copilot Pro+** — Unlock premium AI models and extra capabilities. [Subscribe to Copilot Pro+](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro-plus).

* **Copilot Max** — Unlock priority access to new AI models and our highest individual monthly allowance of AI credits. [Upgrade to Copilot Max](https://github.com/settings/billing/licensing?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=max).

* **Copilot Business** — For teams and organizations. [Contact Sales](https://github.com/enterprise/contact?ref_product=copilot&ref_type=purchase&ref_style=text).

* **Copilot Enterprise** — For enterprises that need advanced features and centralized management. [Contact Sales](https://github.com/enterprise/contact?ref_product=copilot&ref_type=purchase&ref_style=text).
