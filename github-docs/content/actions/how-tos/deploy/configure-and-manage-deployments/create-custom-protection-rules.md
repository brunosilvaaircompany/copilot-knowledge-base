# Creating custom deployment protection rules

## Prerequisites

> [!NOTE]
> Custom deployment protection rules are currently in public preview and subject to change.


For general information about deployment protection rules, see [Control Deployments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments#using-custom-deployment-protection-rules).

## Creating a custom deployment protection rule with GitHub Apps

1. Create a GitHub App. For more information, see [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app). Configure the GitHub App as follows.
   1. Optionally, in the **Callback URL** text field under "Identifying and authorizing users," enter the callback URL. For more information, see [About The User Authorization Callback URL](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/about-the-user-authorization-callback-url).
   1. Under "Permissions," select **Repository permissions**.
   1. To the right of "Actions," click the drop down menu and select **Access: Read-only**.
   ![Screenshot of the "Repository permissions" section for a new GitHub App. The Actions permission shows "Read-only" and is outlined in orange.](/assets/images/help/actions/actions-repo-permissions-read-only.png)
   1. To the right of "Deployments," click the drop down menu and select **Access: Read and write**.
   ![Screenshot of the "Repository permissions" section for a new GitHub App. The Deployments permission shows "Read and write" and is outlined in orange.](/assets/images/help/actions/actions-deployments-repo-permissions-read-and-write.png)
   1. Under "Subscribe to events," select **Deployment protection rule**.
   ![Screenshot of the "Subscribe to events section" section for a new GitHub App. The checkbox for the Deployment protection rule is outlined in orange.](/assets/images/help/actions/actions-subscribe-to-events-deployment-protection-rules.png)

1. Install the custom deployment protection rule in your repositories and enable it for use. For more information, see [Configure Custom Protection Rules](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/configure-custom-protection-rules).

## Approving or rejecting deployments

Once a workflow reaches a job that references an environment that has the custom deployment protection rule enabled, GitHub sends a `POST` request to a URL you configure containing the `deployment_protection_rule` payload. You can write your deployment protection rule to automatically send REST API requests that approve or reject the deployment based on the `deployment_protection_rule` payload. Configure your REST API requests as follows.



Custom deployment protection rules are not compatible when a workflow job's environment is set to `deployment: false`. For more information, see [Control Deployments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments#interaction-with-protection-rules).



1. Validate the incoming `POST` request. For more information, see [Validating Webhook Deliveries](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries#validating-webhook-deliveries).
1. Use a JSON Web Token to authenticate as a GitHub App. For more information, see [Authenticating As A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app#about-authentication-as-a-github-app).
1. Using the installation ID from the `deployment_protection_rule` webhook payload, generate an install token. For more information, see [About Authentication With A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app#authentication-as-a-github-app).

   ```shell
   curl --request POST \
   --url "https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/app/installations/INSTALLATION_ID/ACCESS_TOKENS" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer {jwt}" \
   --header "Content-Type: application/json" \
   --data \
   '{ \
      "repository_ids": [321], \
      "permissions": { \
         "deployments": "write" \
      } \
   }'
   ```

1. Optionally, to add a status report without taking any other action to GitHub, send a `POST` request to `/repos/OWNER/REPO/actions/runs/RUN_ID/deployment_protection_rule`. In the request body, omit the `state`. For more information, see [Workflow Runs](https://docs.github.com/en/rest/actions/workflow-runs#review-custom-deployment-protection-rules-for-a-workflow-run). You can post a status report on the same deployment up to 10 times. Status reports support Markdown formatting and can be up to 1024 characters long.

1. To approve or reject a request, send a `POST` request to `/repos/OWNER/REPO/actions/runs/RUN_ID/deployment_protection_rule`. In the request body, set the `state` property to either `approved` or `rejected`. For more information, see [Workflow Runs](https://docs.github.com/en/rest/actions/workflow-runs#review-custom-deployment-protection-rules-for-a-workflow-run).

1. Optionally, request the status of an approval for a workflow run by sending a `GET` request to `/repos/OWNER/REPOSITORY_ID/actions/runs/RUN_ID/approvals`. For more information, see [Workflow Runs](https://docs.github.com/en/rest/actions/workflow-runs#get-the-review-history-for-a-workflow-run).

1. Optionally, review the deployment on GitHub. For more information, see [Review Deployments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments).



## Publishing custom deployment protection rules in the GitHub Marketplace

You can publish your GitHub App to the GitHub Marketplace to allow developers to discover suitable protection rules and install it across their GitHub repositories. Or you can browse existing custom deployment protection rules to suit your needs. For more information, see [About GitHub Marketplace For Apps](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-github-marketplace-for-apps) and [Listing An App On GitHub Marketplace](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace).
