# Verifying the integrity of a release

{% cli %}

## Prerequisites

Before you can validate the authenticity of a release and its assets on the command line, you need to [install the GitHub CLI](https://github.com/cli/cli?tab=readme-ov-file&ref_product=supply-chain-security&ref_type=engagement&ref_style=text#installation).

## Verifying immutable releases and local artifacts

1. On the command line, open the repository containing the release you want to verify.
1. To verify a release exists and is immutable, run the following command:

    ```bash copy
    gh release verify RELEASE-TAG
    ```

1. To verify a local artifact is an exact match for a release asset, run the following command:

    ```bash copy
    gh release verify-asset RELEASE-TAG ARTIFACT-PATH
    ```

    > [!NOTE]
    > This command cannot be used to verify the source code zip file or tarball for a release, since these assets are only created when a download is requested.

{% endcli %}
{% webui %}

1. On GitHub, navigate to the main page of the repository.

1. To the right of the list of files, click **Releases**.

   ![Screenshot of the main page of a repository. A link, labeled "Releases", is highlighted with an orange outline.](/assets/images/help/releases/release-link.png)

1. To the left of the release you want to verify, below the release author, confirm that "{% octicon "lock" aria-hidden="true" %} Immutable" is present.

{% endwebui %}
