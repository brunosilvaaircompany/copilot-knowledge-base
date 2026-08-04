# About GitHub Actions for enterprises

## About GitHub Actions for enterprises

GitHub Actions allows users in your enterprise to improve productivity by automating every phase of the software development workflow.


| Task | More information |
| ---- | ---------------- |
| Automatically test and build your application | [Continuous Integration](https://docs.github.com/en/actions/get-started/continuous-integration) |
| Deploy your application | [Continuous Deployment](https://docs.github.com/en/actions/get-started/continuous-deployment) |
| Automatically and securely package code into artifacts and containers | [About GitHub Packages And GitHub Actions](https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/about-github-packages-and-github-actions) |

GitHub Actions helps your team work faster at scale. When large repositories start using GitHub Actions, pull requests are typically merged faster, allowing teams to merge more pull requests per day.

You can create your own unique automations, or you can use and adapt workflows from our ecosystem of over 10,000 actions built by industry leaders and the open source community. For more information, see [Find And Customize Actions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/find-and-customize-actions)., or you can allow your developers to access actions on GitHub.com. For more information, see [About Using Actions In Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).{% endif %}

GitHub Actions is developer friendly, because it's integrated directly into the familiar GitHub experience.

You can enjoy the convenience of GitHub-hosted runners, which are maintained and upgraded by GitHub, or you can control your own private CI/CD infrastructure by using self-hosted runners. Self-hosted runners allow you to determine the exact environment and resources that complete your builds, testing, and deployments, without exposing your software development cycle to the internet. For more information, see [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners) and [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners).

GitHub Actions provides greater control over deployments. For example, you can use environments to require approval for a job to proceed, restrict which branches can trigger a workflow, or limit access to secrets. If your workflows need to access resources from a cloud provider that supports OpenID Connect (OIDC), you can configure your workflows to authenticate directly to the cloud provider. OIDC provides security benefits such as eliminating the need to store credentials as long-lived secrets. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect).

GitHub Actions also includes tools to govern your enterprise's software development cycle and meet compliance obligations. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

## About getting started with GitHub Actions

Before you get started, you should make a plan for how you'll introduce GitHub Actions to your enterprise. For more information, see [Introducing GitHub Actions To Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise).


If you're migrating your enterprise to GitHub Actions from another provider, there are additional considerations. For more information, see [Migrating Your Enterprise To GitHub Actions](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/migrating-your-enterprise-to-github-actions).



GitHub Actions is not enabled for GitHub Enterprise Server by default.
 After you finish planning, you can follow the instructions for enabling GitHub Actions. For example, you may need to upgrade the CPU and memory resources for {% ifversion ghes %}your GitHub Enterprise Server instance. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

{% else %}
After you finish planning, you can follow the instructions for getting started with GitHub Actions. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Cloud](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud).
{% endif %}

## Further reading

* [Understand GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
* [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions)
