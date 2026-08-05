# Making authenticated API requests with a GitHub App in a GitHub Actions workflow

## About GitHub Actions authentication

If you need to make authenticated API requests in a GitHub Actions workflow or need to execute a custom action that requires a token, you should use the built-in `GITHUB_TOKEN` if possible. However, the `GITHUB_TOKEN` can only access resources within the workflow's repository. If you need to access additional resources, such as resources in an organization or in another repository, you can use a GitHub App.

## Authenticating with a GitHub App

In order to use a GitHub App to make authenticated API requests, you must register a GitHub App, store your app's credentials, and install your app. Once this is done, you can use your app to create an installation access token, which can be used to make authenticated API requests in a GitHub Actions workflow. You can also pass the installation access token to a custom action that requires a token.

1. Register a GitHub App. Give your GitHub App registration the necessary permissions to access the desired resources. For more information, see [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app) and [Choosing Permissions For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).
1. Store the client ID of your GitHub App as a GitHub Actions configuration variable. You can find the client ID on the settings page for your app. The client ID is different from the app ID. For more information about navigating to the settings page for your GitHub App, see [Modifying A GitHub App Registration](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration#navigating-to-your-github-app-settings). For more information about storing configuration variables, see [Use Variables](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#defining-configuration-variables-for-multiple-workflows).
1. Generate a private key for your app. Store the contents of the resulting file as a secret. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) For more information, see [Managing Private Keys For GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps). For more information about storing secrets, see [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).
1. Install the GitHub App on the right account and grant it permissions and access to any repositories that you want your workflow to access. For more information, see [Installing Your Own GitHub App](https://docs.github.com/en/apps/using-github-apps/installing-your-own-github-app).
1. In your GitHub Actions workflow, create an installation access token, which you can use to make API requests.

   To do this, you can use a GitHub-owned action as demonstrated in the following example. If you prefer to not use this action, you can fork and modify the [`actions/create-github-app-token` action](https://github.com/actions/create-github-app-token), or you can write a script to make your workflow create an installation token manually. For more information, see [Authenticating As A GitHub App Installation](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation).

   The following example workflow uses the `actions/create-github-app-token` action to generate an installation access token. Then, the workflow uses the token to make an API request via the GitHub CLI.

   In the following workflow, replace `APP_CLIENT_ID` with the name of the configuration variable where you stored your client ID. Replace `APP_PRIVATE_KEY` with the name of the secret where you stored your app private key.

```yaml copy
on:
  workflow_dispatch:
jobs:
  demo_app_authentication:
    runs-on: ubuntu-latest
    steps:
      - name: Generate a token
        id: generate-token
        uses: actions/create-github-app-token@v3
        with:
          client-id: {% raw %}${{ vars.APP_CLIENT_ID }}{% endraw %}
          private-key: {% raw %}${{ secrets.APP_PRIVATE_KEY }}{% endraw %}

      - name: Use the token
        env:
          GH_TOKEN: {% raw %}${{ steps.generate-token.outputs.token }}{% endraw %}
        run: |
          gh api octocat
```
