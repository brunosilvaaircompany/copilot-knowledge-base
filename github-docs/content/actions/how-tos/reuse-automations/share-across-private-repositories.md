# Sharing actions and workflows from your private repository

> [!WARNING]
> * If you make a private repository accessible to GitHub Actions workflows in other repositories, outside collaborators on the other repositories can indirectly access the private repository, even though they do not have direct access to these repositories. The outside collaborators can view logs for workflow runs when actions or workflows from the private repository are used.

> * To allow runners to download these actions, GitHub passes a scoped installation token to the runner. This token has read access to the repository, and automatically expires after one hour.


## Sharing actions and workflows from your private repository

1. Store the action or reusable workflow in a private repository. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).
1. On GitHub, navigate to the main page of the private repository.
1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **General**.


1. To grant access to other private repositories, in the **Access** section at the bottom of the page, select **Accessible from repositories owned by 'USERNAME' user**.
1. Click **Save** to apply the settings.

## Next steps

To reuse your shared workflows, see [Reuse Workflows](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows).
