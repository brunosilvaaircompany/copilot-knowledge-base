# Choosing your enterprise's plan for GitHub Copilot

## Introduction

GitHub Copilot plans let enterprises grant access to users and meet security requirements with policies and audit logs. To choose a plan, compare the cost of access and expected usage alongside the capabilities your company needs.

To identify which plan is right for your company:

1. Define the overall goals you are hoping to achieve with your Copilot rollout. Think about downstream goals such as reducing security debt, as opposed to earlier success indicators such as developer satisfaction or feature adoption.
1. Compare plan capabilities, access charges, and included AI credits using the options below.
1. Estimate total monthly costs for your users and expected consumption, then choose a plan and spending controls that support your goals.

## Plans and AI credits

The plans differ in how they charge for access and metered usage:

* **Copilot Business** ($19 USD per user per month): includes 1,900 AI credits per user and most Copilot features in IDEs and on GitHub.
* **Copilot Enterprise** ($39 USD per user per month): includes 3,900 AI credits per user, and often allows earlier access to new features and models.
* **Copilot access** (eligible enterprises only): provides the same feature and model eligibility as Copilot Enterprise, subject to administrator policies and spending controls. Access is $0 incremental through GitHub Enterprise Cloud for licensed users, or $10 USD per user per month as Copilot Standalone without a GitHub Enterprise Cloud license. Neither option includes credits, so metered usage is billed from the first use.

To check eligibility for Copilot access, see [Whats Changing With GitHub Enterprise And Copilot](https://docs.github.com/en/copilot/get-started/whats-changing-with-github-enterprise-and-copilot).

With Copilot Business and Copilot Enterprise, an enterprise owner can choose a plan for each organization. You can pilot Copilot Enterprise or enable it in organizations where its capabilities will have the most impact.

AI credits are consumed by metered features and models, including AI agents. On plans with an included allowance, credits are pooled across your enterprise so heavier users can draw from lighter users' unused portions. By default, usage can continue beyond that pool with additional charges. On every plan, budget controls let you govern consumption and metered spending. See [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing).

## How does Copilot Enterprise support business goals?

The following table shows examples of goals your company might set for a Copilot rollout, and how AI credits and other Copilot Enterprise features can help you achieve those goals.

The Copilot access plan provides the same feature eligibility, but all credit consumption is metered rather than drawing from an included pool.

| Goal | Problem to solve | How Copilot Enterprise helps |
| ---- | ---------------- | --------------------------------------------------------------- |
| **Reduce your backlog** | Teams may not have capacity to work on backlog issues or non-essential issues that come up during development. This can lead to a gradual degradation in feature quality. | With more included AI credits, users can assign more issues to **Copilot cloud agent**, which can complete tasks like fixing bugs or adding feature enhancements in the background. |
| **Accelerate pull requests** | Teams often experience delays in merging pull requests due to lengthy review cycles. This can lead to bottlenecks in the development process and slow down the delivery and improvement of features. | With more included AI credits, users can receive more reviews on pull requests from **Copilot code review**, often flagging bugs or possible improvements before a human reviewer is available. |
| **Reduce technical debt** | Inefficient or hard-to-read code can accumulate over time, making it harder for team members to onboard and understand new areas of the code. | With more included AI credits and access to the latest models, users can use agent mode in their IDE to refactor code, choosing models with **greater contextual awareness** that are more suited to tasks like complex refactoring. |

## Is Copilot Enterprise the most cost effective choice?

We recommend considering the included AI credits in the Copilot Business plan as a baseline, not a limit. Developers using agentic workflows including features like agent mode, Copilot cloud agent, and Copilot code review are likely to consume beyond the included amount.

If your company is gaining value from agentic workflows, you will likely want to make more AI credits available to developers. Depending on consumption patterns, the most cost effective approach is either to upgrade users to Copilot Enterprise or to allow additional usage beyond the included pool with appropriate budget controls.

If your enterprise is eligible for Copilot access, also compare its access and metered usage costs with the full cost of your current plan. Include usage currently covered by your pool, not just overage charges.

To review your enterprise's consumption, see the AI usage dashboard in your enterprise billing settings. For guidance on managing spend, see [Optimizing Your Budget Configuration](https://docs.github.com/en/copilot/tutorials/budgets/optimizing-your-budget-configuration).
