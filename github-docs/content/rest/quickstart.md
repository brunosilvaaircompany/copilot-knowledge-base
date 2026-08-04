# Quickstart for GitHub REST API

## Introduction

This article describes how to quickly get started with the GitHub REST API using GitHub CLI, `curl`, or JavaScript. For a more detailed guide, see [Getting Started With The Rest API](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api).

{% cli %}

## Using GitHub CLI in the command line

GitHub CLI is the easiest way to use the GitHub REST API from the command line.

1. Install GitHub CLI on macOS, Windows, or Linux. For more information, see [Installation](https://github.com/cli/cli?ref_product=cli&ref_type=engagement&ref_style=text#installation) in the GitHub CLI repository.
1. To authenticate to GitHub, run the following command from your terminal.

   ```shell
   gh auth login
   ```

1. Select where you want to authenticate to:

   * If you access GitHub at GitHub.com, select **GitHub.com**.
   * If you access GitHub at a different domain, select **Other**, then enter your hostname (for example: `octocorp.ghe.com`).
1. Follow the rest of the on-screen prompts.

   GitHub CLI automatically stores your Git credentials for you when you choose HTTPS as your preferred protocol for Git operations and answer "yes" to the prompt asking if you would like to authenticate to Git with your GitHub credentials. This can be useful as it allows you to use Git commands like `git push` and `git pull` without needing to set up a separate credential manager or use SSH.


1. Make a request using the GitHub CLI `api` subcommand, followed by the path. Use the `--method` or `-X` flag to specify the method. For more information, see the [GitHub CLI `api` documentation](https://cli.github.com/manual/gh_api).

   This example makes a request to the "Get Octocat" endpoint, which uses the method `GET` and the path `/octocat`. For the full reference documentation for this endpoint, see [Meta](https://docs.github.com/en/rest/meta/meta#get-octocat).

   ```shell copy
   gh api /octocat --method GET
   ```

## Using GitHub CLI in GitHub Actions

You can also use GitHub CLI in your GitHub Actions workflows. For more information, see [Use GitHub CLI](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-github-cli).

### Authenticating with an access token

Instead of using the `gh auth login` command, pass an access token as an environment variable called `GH_TOKEN`. GitHub recommends that you use the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token). For more information about secrets, see [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

The following example workflow uses the [List repository issues](/rest/issues/issues#list-repository-issues) endpoint, and requests a list of issues in a repository you specify. Replace `HOSTNAME` with the name of {% ifversion ghes %}your GitHub Enterprise Server instance. Replace `REPO-OWNER` with the name of the account that owns the repository. Replace `REPO-NAME` with the name of the repository.{% endif %}

```yaml copy
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/repos/REPO-OWNER/REPO-NAME/issues
```

### Authenticating with a GitHub App

If you are authenticating with a GitHub App, you can create an installation access token within your workflow:

1. Store your GitHub App's client ID as a configuration variable. In the following example, replace `APP_CLIENT_ID` with the name of the configuration variable. You can find your client ID on the settings page for your app or through the API. For more information, see [Apps](https://docs.github.com/en/rest/apps/apps#get-an-app). For more information about configuration variables, see [Use Variables](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#defining-configuration-variables-for-multiple-workflows).
1. Generate a private key for your app. Store the contents of the resulting file as a secret. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) In the following example, replace `APP_PRIVATE_KEY` with the name of the secret. For more information, see [Managing Private Keys For GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps). For more information about secrets, see [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).
1. Add a step to generate a token, and use that token instead of `GITHUB_TOKEN`. Note that this token will expire after 60 minutes. For example:. Replace `REPO-OWNER` with the name of the account that owns the repository. Replace `REPO-NAME` with the name of the repository.{% endif %}

   ```yaml copy
   on:
     workflow_dispatch:
   jobs:
     track_pr:
       runs-on: ubuntu-latest
       steps:
         - name: Generate token
           id: generate-token
           uses: actions/create-github-app-token@v3
           with:
             client-id: {% raw %}${{ vars.APP_CLIENT_ID }}{% endraw %}
             private-key: {% raw %}${{ secrets.APP_PRIVATE_KEY }}{% endraw %}
         - name: Use API
           env:
             GH_TOKEN: {% raw %}${{ steps.generate-token.outputs.token }}{% endraw %}
           run: |
             gh api https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/repos/REPO-OWNER/REPO-NAME/issues
   ```

{% endcli %}

{% javascript %}

## Using Octokit.js

You can use Octokit.js to interact with the GitHub REST API in your JavaScript scripts. For more information, see [Scripting with the REST API and JavaScript](/rest/guides/scripting-with-the-rest-api-and-javascript).

1. Create an access token. For example, create a personal access token or a GitHub App user access token. You will use this token to authenticate your request, so you should give it any scopes or permissions that are required to access that endpoint. For more information, see [Authenticating To The Rest API](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api) or [Identifying and authorizing users for GitHub Apps](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user).

   > [!WARNING]
   > Treat your access token like a password.
   >
   > To keep your token secure, you can store your token as a secret and run your script through GitHub Actions. For more information, see the [Using Octokit.js in GitHub Actions](#using-octokitjs-in-github-actions) section.
   
   >
   You can also store your token as a Codespaces secret and run your script in Codespaces. For more information, see [Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces).
   
   >
   > If these options are not possible, consider using another CLI service to store your token securely.

1. Install `octokit`. For example, `npm install octokit`. For other ways to install or load `octokit`, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Import `octokit` in your script. For example, `import { Octokit } from "octokit";`. For other ways to import `octokit`, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Create an instance of `Octokit` with your token. Replace `HOSTNAME` with the name of {% ifversion ghes %}your GitHub Enterprise Server instance.{% endif %} Replace `YOUR-TOKEN` with your token.

   ```javascript copy
   const octokit = new Octokit({ 
     baseUrl: "{% ifversion fpt or ghec %}https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3",{% endif %}
     auth: 'YOUR-TOKEN'
   });
   ```

1. Use `octokit.request` to execute your request. Send the HTTP method and path as the first argument. Specify any path, query, and body parameters in an object as the second argument. For more information about parameters, see [Getting Started With The Rest API](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api#parameters).

   For example, in the following request the HTTP method is `GET`, the path is `/repos/{owner}/{repo}/issues`, and the parameters are `owner: "REPO-OWNER"` and `repo: "REPO-NAME"`. Replace `REPO-OWNER` with the name of the account that owns the repository, and `REPO-NAME` with the name of the repository.

   ```javascript copy
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "REPO-OWNER",
     repo: "REPO-NAME",
   });
   ```

## Using Octokit.js in GitHub Actions

You can also execute your JavaScript scripts in your GitHub Actions workflows. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstepsrun).

### Authenticating with an access token

GitHub recommends that you use the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token). For more information about secrets, see [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

The following example workflow:

1. Checks out the repository content
1. Sets up Node.js
1. Installs `octokit`
1. Stores the value of `GITHUB_TOKEN` as an environment variable called `TOKEN` and runs `.github/actions-scripts/use-the-api.mjs`, which can access that environment variable as `process.env.TOKEN`

```yaml
on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - name: Check out repo content
        uses: actions/checkout@v6


      - name: Setup Node
        uses: actions/setup-node@v7

        with:
          node-version: '16.17.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

The following is an example JavaScript script with the file path `.github/actions-scripts/use-the-api.mjs`. Replace `HOSTNAME` with the name of {% ifversion ghes %}your GitHub Enterprise Server instance. Replace `REPO-OWNER` with the name of the account that owns the repository. Replace `REPO-NAME` with the name of the repository.{% endif %}

```javascript
import { Octokit } from "octokit"

const octokit = new Octokit({ 
  baseUrl: "{% ifversion fpt or ghec %}https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3",{% endif %}
  auth: process.env.TOKEN
});

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "REPO-OWNER",
      repo: "REPO-NAME",
    });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

### Authenticating with a GitHub App

If you are authenticating with a GitHub App, you can create an installation access token within your workflow:

1. Store your GitHub App's client ID as a configuration variable. In the following example, replace `APP_CLIENT_ID` with the name of the configuration variable. You can find your client ID on the settings page for your app or through the App API. For more information, see [Apps](https://docs.github.com/en/rest/apps/apps#get-an-app). For more information about configuration variables, see [Use Variables](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#defining-configuration-variables-for-multiple-workflows).
1. Generate a private key for your app. Store the contents of the resulting file as a secret. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) In the following example, replace `APP_PRIVATE_KEY` with the name of the secret. For more information, see [Managing Private Keys For GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps). For more information about secrets, see [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).
1. Add a step to generate a token, and use that token instead of `GITHUB_TOKEN`. Note that this token will expire after 60 minutes. For example:

   ```yaml
   on:
     workflow_dispatch:
   jobs:
     use_api_via_script:
       runs-on: ubuntu-latest
       steps:
         - name: Check out repo content
           uses: actions/checkout@v6


         - name: Setup Node
           uses: actions/setup-node@v7

           with:
             node-version: '16.17.0'
             cache: npm

         - name: Install dependencies
           run: npm install octokit

         - name: Generate token
           id: generate-token
           uses: actions/create-github-app-token@v3
           with:
             client-id: {% raw %}${{ vars.APP_CLIENT_ID }}{% endraw %}
             private-key: {% raw %}${{ secrets.APP_PRIVATE_KEY }}{% endraw %}

         - name: Run script
           run: |
             node .github/actions-scripts/use-the-api.mjs
           env:
             TOKEN: {% raw %}${{ steps.generate-token.outputs.token }}{% endraw %}

   ```

{% endjavascript %}

{% curl %}

## Using `curl` in the command line

> [!NOTE]
> If you want to make API requests from the command line, GitHub recommends that you use GitHub CLI, which simplifies authentication and requests. For more information about getting started with the REST API using GitHub CLI, see the GitHub CLI version of this article.

1. Install `curl` if it isn't already installed on your machine. To check if `curl` is installed, execute `curl --version` in the command line. If the output provides information about the version of `curl`, that means `curl` is installed. If you get a message similar to `command not found: curl`, you need to download and install `curl`. For more information, see [the curl project download page](https://curl.se/download.html).

1. Create an access token. For example, create a personal access token or a GitHub App user access token. You will use this token to authenticate your request, so you should give it any scopes or permissions that are required to access the endpoint. For more information, see [Authenticating To The Rest API](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api).

   > [!WARNING]
   > Treat your access token like a password.
   
   >
   > To keep your token secure, you can store your token as a Codespaces secret and use the command line through Codespaces. For more information, see [Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces).
   
   >
   > You can also use GitHub CLI instead of `curl`. GitHub CLI will take care of authentication for you. For more information, see the GitHub CLI version of this page.
   >
   > If these options are not possible, consider using another CLI service to store your token securely.

1. Use the `curl` command to make your request. Pass your token in an `Authorization` header. Replace `HOSTNAME` with the name of {% ifversion ghes %}your GitHub Enterprise Server instance. Replace `REPO-OWNER` with the name of the account that owns the repository. Replace `REPO-NAME` with the name of the repository.{% endif %} Replace `YOUR-TOKEN` with your token.

   ```shell copy
   curl --request GET \
   --url "https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/repos/REPO-OWNER/REPO-NAME/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   > [!NOTE]
   > In most cases, you can use `Authorization: Bearer` or `Authorization: token` to pass a token. However, if you are passing a JSON web token (JWT), you must use `Authorization: Bearer`.


## Using `curl` commands in GitHub Actions

You can also use `curl` commands in your GitHub Actions workflows.

### Authenticating with an access token

GitHub recommends that you use the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token). For more information about secrets, see [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

In the following example, replace `HOSTNAME` with the name of {% ifversion ghes %}your GitHub Enterprise Server instance. Replace `REPO-OWNER` with the name of the account that owns the repository. Replace `REPO-NAME` with the name of the repository.{% endif %}

```yaml copy
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/repos/REPO-OWNER/REPO-NAME/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

### Authenticating with a GitHub App

If you are authenticating with a GitHub App, you can create an installation access token within your workflow:

1. Store your GitHub App's client ID as a configuration variable. In the following example, replace `APP_CLIENT_ID` with the name of the configuration variable. You can find your client ID on the settings page for your app or through the App API. For more information, see [Apps](https://docs.github.com/en/rest/apps/apps#get-an-app). For more information about configuration variables, see [Use Variables](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#defining-configuration-variables-for-multiple-workflows).
1. Generate a private key for your app. Store the contents of the resulting file as a secret. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) In the following example, replace `APP_PRIVATE_KEY` with the name of the secret. For more information, see [Managing Private Keys For GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps). For more information about storing secrets, see [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).
1. Add a step to generate a token, and use that token instead of `GITHUB_TOKEN`. Note that this token will expire after 60 minutes. For example:. Replace `REPO-OWNER` with the name of the account that owns the repository. Replace `REPO-NAME` with the name of the repository.{% endif %}

   ```yaml copy
   on:
     workflow_dispatch:
   jobs:
     use_api:
       runs-on: ubuntu-latest
       steps:
         - name: Generate token
           id: generate-token
           uses: actions/create-github-app-token@v3
           with:
             client-id: {% raw %}${{ vars.APP_CLIENT_ID }}{% endraw %}
             private-key: {% raw %}${{ secrets.APP_PRIVATE_KEY }}{% endraw %}

         - name: Use API
           env:
             GH_TOKEN: {% raw %}${{ steps.generate-token.outputs.token }}{% endraw %}
           run: |
             curl --request GET \
             --url "https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/repos/REPO-OWNER/REPO-NAME/issues" \
             --header "Accept: application/vnd.github+json" \
             --header "Authorization: Bearer $GH_TOKEN"

   ```

{% endcurl %}

## Next steps

For a more detailed guide, see [Getting started with the REST API](/rest/using-the-rest-api/getting-started-with-the-rest-api).
