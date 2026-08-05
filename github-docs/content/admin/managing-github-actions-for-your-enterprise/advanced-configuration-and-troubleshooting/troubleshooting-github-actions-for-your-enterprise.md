# Troubleshooting GitHub Actions for your enterprise

## Checking the health of GitHub Actions

You can check the health of GitHub Actions on your GitHub Enterprise Server instance with the `ghe-actions-check` command-line utility. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-actions-check) and [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

## Configuring self-hosted runners when using a self-signed certificate for GitHub Enterprise Server

We strongly recommend that you configure TLS on GitHub Enterprise Server with a certificate signed by a trusted authority. Although a self-signed certificate can work, extra configuration is required for your self-hosted runners, and it is not recommended for production environments.
 For more information, see [Configuring Tls](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls).

### Installing the certificate on the runner machine

For a self-hosted runner to connect to a GitHub Enterprise Server using a self-signed certificate, you must install the certificate on the runner machine so that the connection is security hardened.

For the steps required to install a certificate, refer to the documentation for your runner's operating system.

### Configuring Node.JS to use the certificate

Most actions are written in JavaScript and run using Node.js, which does not use the operating system certificate store. For the self-hosted runner application to use the certificate, you must set the `NODE_EXTRA_CA_CERTS` environment variable on the runner machine.

You can set the environment variable as a system environment variable, or declare it in a file called `.env` in the self-hosted runner application directory (that is, the directory into which you downloaded and unpacked the runner software).

For example:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

Environment variables are read when the self-hosted runner application starts, so you must set the environment variable before configuring or starting the self-hosted runner application. If your certificate configuration changes, you must restart the self-hosted runner application.

### Configuring Docker containers to use the certificate

If you use Docker container actions or service containers in your workflows, you might also need to install the certificate in your Docker image in addition to setting the above environment variable.

## Configuring HTTP proxy settings for GitHub Actions

If you have an **HTTP Proxy Server** configured on GitHub:

* You must add `.localhost`, `127.0.0.1`, and `::1` to the **HTTP Proxy Exclusion** list (in this order).
* If your external storage location is not routable, then you must also add your external storage URL to the exclusion list.

For more information on changing your proxy settings, see [Configuring An Outbound Web Proxy Server](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-an-outbound-web-proxy-server).


If these settings aren't correctly configured, you might receive errors like `Resource unexpectedly moved to https://IP-ADDRESS` when setting or changing your GitHub Actions configuration.

## Runners not connecting to GitHub Enterprise Server with a new hostname

> [!WARNING]
> Do not change the hostname for GitHub Enterprise Server after initial setup. Changing the hostname will cause unexpected behavior, up to and including instance outages and invalidation of users' security keys. If you have changed the hostname for your instance and are experiencing problems, contact GitHub Enterprise Support or GitHub Premium Support.


If you deploy GitHub Enterprise Server in your environment with a new hostname and the old hostname no longer resolves to your instance, self-hosted runners will be unable to connect to the old hostname, and will not execute any jobs.

You will need to update the configuration of your self-hosted runners to use the new hostname for your GitHub Enterprise Server instance. Each self-hosted runner will require one of the following procedures:

* In the self-hosted runner application directory, edit the `.runner` and `.credentials` files to replace all mentions of the old hostname with the new hostname, then restart the self-hosted runner application.
* Remove the runner from GitHub Enterprise Server using the UI, and re-add it. For more information, see [Remove Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/remove-runners) and [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).

## Troubleshooting failures when Dependabot triggers existing workflows

After you set up Dependabot updates for your GitHub Enterprise Server instance, you may see failures when existing workflows are triggered by Dependabot events.

By default, GitHub Actions workflow runs that are triggered by Dependabot from `push`, `pull_request`, `pull_request_review`, or `pull_request_review_comment` events are treated as if they were opened from a repository fork. Unlike workflows triggered by other actors, this means they receive a read-only `GITHUB_TOKEN` and do not have access to any secrets that are normally available. This will cause any workflows that attempt to write to the repository to fail when they are triggered by Dependabot.

There are three ways to resolve this problem:

1. You can update your workflows so that they are no longer triggered by Dependabot using an expression like: `if: github.actor != 'dependabot[bot]'`. For more information, see [Expressions](https://docs.github.com/en/actions/reference/workflows-and-actions/expressions).
1. You can modify your workflows to use a two-step process that includes `pull_request_target` which does not have these limitations. For more information, see [Dependabot On Actions](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-on-actions).
1. You can provide workflows triggered by Dependabot access to secrets and allow the `permissions` term to increase the default scope of the `GITHUB_TOKEN`.
 For more information, see [Providing workflows triggered by Dependabot access to secrets and increased permissions](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions) below.

### Providing workflows triggered by Dependabot access to secrets and increased permissions

1. Log in to the administrative shell using SSH. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. To remove the limitations on workflows triggered by Dependabot on your GitHub Enterprise Server instance, use the following command.

    ``` shell
    ghe-config app.actions.disable-dependabot-enforcement true
    ```

1. Apply the configuration.

    ```shell
    ghe-config-apply
    ```

1. Return to GitHub Enterprise Server.

<a name="bundled-actions"></a>

## Troubleshooting bundled actions in GitHub Actions

If you receive the following error when installing GitHub Actions in GitHub Enterprise Server, you can resolve the problem by installing the official bundled actions and workflow templates.

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

To install the official bundled actions and workflow templates within a designated organization in GitHub Enterprise Server, follow this procedure.

1. Identify an organization that will store the official bundled actions and workflow templates. You can create a new organization or reuse an existing one, as long as that organization is active and hasn't been deleted.
    * To create a new organization, see [Creating A New Organization From Scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
    * For assistance with choosing a name for this organization, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names).

1. Log in to the administrative shell using SSH. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. To designate your organization as the location to store the bundled actions, use the `ghe-config` command, replacing `ORGANIZATION` with the name of your organization.

    ```shell
    ghe-config app.actions.actions-org ORGANIZATION
    ```

    and:

    ```shell
    ghe-config app.actions.github-org ORGANIZATION
    ```

1. To add the bundled actions to your organization, unset the SHA.

    ```shell
    ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```

1. Apply the configuration.

    ```shell
    ghe-config-apply
    ```

After you've completed these steps, you can resume configuring GitHub Actions at [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise).
