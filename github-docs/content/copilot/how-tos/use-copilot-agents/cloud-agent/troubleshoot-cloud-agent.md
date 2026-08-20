# Troubleshooting GitHub Copilot cloud agent

## Copilot is not available in the "Assignees" list on my issue

You can only assign issues to Copilot if you have access to Copilot through a paid Copilot plan.

If you do not already have a subscription for one of these plans, click this button for more information:<br>
<a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for Copilot</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

If you _do_ have a paid Copilot plan, check that Copilot cloud agent is enabled and has not been manually disabled for the repository:



* If you are on the GitHub Copilot Business or Copilot Enterprise plan, your ability to use Copilot cloud agent is controlled by your enterprise and/or organization administrator. See [Enable Copilot Cloud Agent](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/enable-copilot-cloud-agent).



* For organization-owned repositories, the availability of Copilot cloud agent in the repository is managed by the organization and/or enterprise administrators. See [Add Copilot Cloud Agent](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

* For personal repositories, the availability of Copilot cloud agent in the repository is configured in your account settings. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#disabling-or-enabling-copilot-cloud-agent-in-your-repositories).

> [!NOTE]
> You can check whether Copilot cloud agent has been enabled for you in the features page of your Copilot settings: [github.com/settings/copilot/features](https://github.com/settings/copilot/features).

## I have an Enterprise Managed User account and Copilot won't work in my personal repository

Copilot cloud agent is not available in personal repositories owned by managed user accounts. This is because Copilot cloud agent runs on GitHub-hosted runners, which are not available to personal repositories owned by managed user accounts. For more information, see [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners).




If you have an managed user account and try to assign Copilot to an issue in a personal repository, you may see an error message reporting that GitHub Actions are not available for your repository.

To use Copilot cloud agent, you'll need to work with repositories owned by your organization instead of personal repositories.

## Copilot can't create a pull request from Copilot Chat

If you asked Copilot to create a pull request and it responds that it cannot directly create a pull request, check that Copilot cloud agent is available.

> [!IMPORTANT]
> In VS Code, Visual Studio, and JetBrains IDEs, you must mention the `@github` chat participant in your prompt. You can omit this in Copilot Chat on GitHub.com.


## I assigned an issue to Copilot, but nothing is happening

Wait a while, then refresh the page. You should see Copilot leave an 👀 reaction on the issue. Shortly after this, Copilot will open a draft pull request linked to the issue, which will be shown in the issue timeline.

## Copilot has opened a pull request, but nothing is happening

If there is a "Copilot started work" event in the pull request timeline, click **View session** to see the session logs. These will stream live, and you will be able to see what Copilot is doing.

## Copilot won't respond to my pull request comments

Copilot only responds to comments from people who have write access to the repository.


If you do have write access, and you mention `@copilot` on a pull request that is assigned to Copilot, the comment is passed to Copilot cloud agent. An eyes emoji (👀) is added to your comment to indicate that Copilot cloud agent has seen your comment. Shortly after, a "Copilot started work" event is added to the pull request timeline.

If this doesn't happen, Copilot may have been unassigned from the pull request, or you may not have write access. Note that Copilot only responds to mentions in open pull requests. Once a pull request is merged or closed, Copilot cloud agent will not respond to new mentions or comments to better focus on active development work.

## Based on the agent session logs, Copilot appears to be stuck

Copilot can appear to be stuck for a while, and then get moving again.

If the session remains stuck, it will time out after an hour. You can retry by unassigning the issue and then reassigning it to Copilot.

If Copilot got stuck while responding to a comment, try adding the same comment to the pull request again.

## My GitHub Actions workflows are not running when Copilot pushes

GitHub Actions workflows will not run automatically when Copilot pushes changes to a pull request.

To allow GitHub Actions workflows to run, click the **Approve and run workflows** button in the pull request's merge box. See [Review Copilot Output](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output).

## Copilot is pushing changes which don't pass my CI checks

While working on an issue, Copilot has access to its own ephemeral development environment, powered by GitHub Actions, where it can execute automated tests and linters to validate its work before it pushes.

It is most likely to do this if given clear instructions on what to do. The best way to do this is with a `.github/copilot-instructions.md` file. See [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results#adding-custom-instructions-to-your-repository).

## There is a warning from GitHub Copilot about the firewall

By default, Copilot's access to the internet is limited by a firewall.

Limiting access to the internet helps to manage data exfiltration risks, where surprising behavior from Copilot or malicious instructions given to it could lead to code or other sensitive information being leaked to remote locations.

If Copilot tries to make a request which is blocked by the firewall, a warning is added to the pull request body (if Copilot is responding to an issue assignment) or to a comment (if Copilot is responding to a comment). The warning shows the blocked address and the command that tried to make the request.

![Screenshot of a warning from Copilot about being blocked by the firewall.](/assets/images/help/copilot/cloud-agent/firewall-warning.png)

For more information, see [Customize The Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

## Copilot is not picking up attached screenshots

The maximum image size allowed by Copilot cloud agent is 3.00 MiB. Images larger than this will be removed from the request.

## Further reading

* [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)
* [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
