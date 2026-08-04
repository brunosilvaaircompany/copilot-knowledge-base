# Setting up a self-serve process for GitHub Copilot licenses

When you've enabled GitHub Copilot in an organization or enterprise, you can set up a self-serve workflow to allow users to request licenses. This allows you to allocate licenses to people who want them, and means people can get started with Copilot quickly.

GitHub has found that many successful rollouts offer a fully self-service model where developers can claim a license without approval.

This article outlines two approaches your company can take:

* GitHub's **request access** feature for Copilot Business, which requires no setup but does require explicit approvals from an administrator
* Your own integration with **GitHub's API**, which allows you to create your own process with instant access

## Approach 1: Use GitHub's "request access" feature

If you have a Copilot Business plan, members of an organization can request access to Copilot on their settings page. Then, an organization owner must review and approve each request.

The process, which you should **communicate with users**, is as follows.

1. An organization or enterprise owner ensures Copilot Business is enabled in the organization where you want to manage access.
1. Members of the organization go to their personal settings page at https://github.com/settings/copilot and click **Ask admin for access**.
1. An organization owner reviews and approves requests on the "Requests from members" page in the organization. See [Manage Requests For Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/manage-requests-for-access).

You should set up a process where requests are reviewed regularly, so that interested users can get access to Copilot quickly.

Users can also request access from organizations where Copilot Business is not enabled. In this case, organization owners will be prompted to ask an enterprise owner to enable Copilot for the organization.

## Approach 2: Integrate with the API

For a more streamlined approach, you can set up a self-serve process by integrating with GitHub's API. The benefits of this approach are that it allows you to build the process into your existing tooling, and it gives you the option to allow users to receive access instantly, without a manual approval process.

Depending on how your enterprise manages Copilot licenses, you can use either of the following endpoints:

* For **organization-level assignments**, use the [Add users to the Copilot subscription for an organization](/rest/copilot/copilot-user-management#add-users-to-the-copilot-subscription-for-an-organization) endpoint.
* For **direct user assignment** at the enterprise level (available for Copilot Business only), use the [Add users to the Copilot subscription for an enterprise](/rest/copilot/copilot-user-management#add-users-to-the-copilot-subscription-for-an-enterprise) endpoint.

For example, the API call in a GitHub Actions workflow might look as follows, where the organization and selected usernames are provided by the context of the workflow trigger:

``` javascript
const { Octokit } = require("@octokit/action");
const octokit = new Octokit();
const response = await octokit.request('POST /orgs/{org}/copilot/billing/selected_users', {
  org: context.repo.owner,
  selected_usernames: [context.payload.sender.login],
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
```

### Example implementations

* You could create the process entirely within GitHub, having users create issues to request access, then using a GitHub Actions workflow to call the API. For a demo of this approach, see the [microsoft/GitHubCopilotLicenseAssignment](https://github.com/microsoft/GitHubCopilotLicenseAssignment) repository. Note that this is **an external example that isn't covered by GitHub Support**.
* You could add a "Request access" button to users' profiles on your company's internal website, which will pass the user's GitHub username to the API. You could grant access instantly or validate the user first, such as checking for their membership of a certain team.

## Further reading

* [Drive Adoption](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption)
* [Remind Inactive Users](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/remind-inactive-users)
* [Track Usage And Adoption](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/track-usage-and-adoption)
* [Managing Requests For Copilot Business](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-requests-for-copilot-business) in the GitHub Enterprise Cloud documentation
