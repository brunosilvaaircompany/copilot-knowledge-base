## Overview

When you create a codespace, a development container is automatically created on a remote virtual machine. This dev container is created from a Docker image. The image is effectively a template for Docker containers and it determines many aspects of the resulting environment provided by the codespace. For more information, see [Quickstart](https://docs.github.com/en/codespaces/quickstart#introduction).

You can choose which image you want to use for your codespaces by specifying it in the dev container configuration for a repository. You can do this, for example, by using the `image` property in the `devcontainer.json` file.

```json copy
"image": "mcr.microsoft.com/devcontainers/javascript-node:18",
```

For more information, see the [dev containers specification](https://containers.dev/implementors/json_reference/#image-specific) on the Development Containers website.

Alternatively, you can specify the base image in a Dockerfile. For more information, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#dockerfile).

If you don't specify an image in the dev container configuration for a repository, the default dev container image is used. The default image contains a number of runtime versions for popular languages and commonly used tools. For more information, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration).

As an organization owner, you can add a policy to restrict which dev container images can be used for codespaces created within your organization.

If you attempt to create a codespace using a `devcontainer.json` that specifies an image that is not allowed by the policy, the following message is displayed in GitHub:

> The codespace cannot be created because the image specified in your dev container configuration is not allowed. You may need to select a different branch, modify your container configuration, or adjust your organization's policy setting.

Using the CLI, the error message is:

> error creating codespace: HTTP 400: Base image 'IMAGE-REFERENCE' is not allowed based on an organization policy set by your organization administrator.

If the image for a codespace is specified in a Dockerfile, and does not match the policy, a codespace is created in recovery mode, using the default recovery container rather than the specified image. A message to this effect is included at the end of the creation log. For more information about the creation log, see [GitHub Codespaces Logs](https://docs.github.com/en/codespaces/troubleshooting/github-codespaces-logs#creation-logs).

> [!NOTE]
> * The dev container base image should not be confused with the host image. The host image is the image used to build the virtual machine on which the dev container runs. For more information, see [Choosing The Stable Or Beta Host Image](https://docs.github.com/en/codespaces/setting-your-user-preferences/choosing-the-stable-or-beta-host-image).
> * The base image policy is applied when a codespace is created, and when you perform a full container rebuild. For more information, see [Understanding The Codespace Lifecycle](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle#rebuilding-a-codespace).
> * The base image policy does not apply to the default image, or the image that's used to recover a codespace if an error is introduced into a dev container configuration which prevents the container from being rebuilt.

### Setting organization-wide and repository-specific policies

When you create a policy you choose whether it applies to all repositories in your organization, or only to specified repositories. If you set an organization-wide policy then any policies you set for individual repositories must fall within the restriction set at the organization level. Adding policies makes the choice of image more, not less, restrictive.

For example, you could create an organization-wide policy that restricts the base image to any of ten specified images. You can then set a policy for Repository A that restricts the image to a subset of just two of the images specified at the organization level. Specifying additional images for Repository A will have no effect because these images are not specified in the organization-level policy. If you add an organization-wide policy, you should set it to the largest choice of images that will be available for any repository in your organization. You can then add repository-specific policies to further restrict the choice.

> [!NOTE]
> Codespaces policies only apply to codespaces that your organizations pays for. If someone creates a codespace for a repository in your organization at their own expense, then the codespace will not be bound by these policies. For more information, see [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).


## Adding a policy to define the allowed images

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 select **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces** then click **Policies**.
1. On the "Codespaces policies" page, click **Create Policy**.
1. Enter a name for your new policy.

1. Click **Add constraint** and choose **Base images**.
1. Click {% octicon "pencil" aria-label="Edit policy" %} to edit the constraint.
1. In the "Allowed values" field, enter the image reference of the Docker image you want to allow.

   ![Screenshot of the image reference "mcr.microsoft.com/devcontainers/java" entered in the "Allowed values" field.](/assets/images/help/codespaces/image-allowed-values.png)

   You can use the `*` wildcard as the last character of the image reference to match all images that start with the same reference to the left of the wildcard. For example, `mcr.microsoft.com/devcontainers/*`.

1. Click {% octicon "plus" aria-label="Add button" %} to add the value.
1. If required, repeat the previous two steps to add more image references.

   When you add multiple image references, if an image reference specified in the dev container configuration of a repository does not match any of the references in a policy that applies to the repository, you will not be able to create codespaces for that repository.

1. Click outside of the dialog box to close it.
1. By default the policy is set to apply to all repositories, if you want it to apply only to some of the repositories in your organization, click **All repositories** and then click **Selected repositories** in the dropdown menu.

   ![Screenshot of the repository selection dropdown, showing the options "All repositories" and "Selected repositories."](/assets/images/help/codespaces/selected-repositories.png)

   > [!NOTE]
   > If you're adding a constraint to an existing policy that already contains the "Maximum codespaces per user" constraint, you won't be able to apply the policy to selected repositories. This is because the "Maximum codespaces per user" constraint always applies to all repositories in the organization.

   With **Selected repositories** selected:
   1. Click {% octicon "gear" aria-label="The settings icon" %}.

      ![Screenshot of the settings icon (a gear symbol) to the left of a button labeled "Selected repositories."](/assets/images/help/codespaces/policy-edit.png)

   1. Select the repositories you want this policy to apply to.
   1. At the bottom of the repository list, click **Select repositories**.

      ![Screenshot of a list of repositories, each with a checkbox. Three repositories are selected.](/assets/images/help/codespaces/policy-select-repos.png)

1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see:
   * [Restricting Access To Machine Types](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
   * [Restricting The Number Of Organization Billed Codespaces A User Can Create](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-number-of-organization-billed-codespaces-a-user-can-create)
   * [Restricting The Visibility Of Forwarded Ports](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [Restricting The Idle Timeout Period](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [Restricting The Retention Period For Codespaces](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)

1. After you've finished adding constraints to your policy, click **Save**.

The policy is applied when anyone attempts to create a new codespace that is billable to your organization. The base image constraint does not affect existing codespaces, either active or stopped.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

1. Display the "Codespaces policies" page. For more information, see [Adding a policy to define the allowed images](#adding-a-policy-to-define-the-allowed-images).
1. Click the name of the policy you want to edit.
1. Beside the "Base images" constraint, click {% octicon "pencil" aria-label="Edit policy" %}.
1. Add or remove image references.
1. Click **Save**.

## Deleting a policy

1. Display the "Codespaces policies" page. For more information, see [Adding a policy to define the allowed images](#adding-a-policy-to-define-the-allowed-images).
1. Click {% octicon "trash" aria-label="Delete YOUR-POLICY-NAME" %} to the right of the policy you want to delete.

   ![Screenshot of a policy with the delete button (a trash can icon) highlighted with a dark orange outline.](/assets/images/help/codespaces/policy-delete.png)
