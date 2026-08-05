# Managing the lifecycle of artifact attestations

Attestations are only meaningful when they are linked to artifacts that people consume. To keep your attestations relevant and manageable, you should delete attestations that are no longer needed, such as:

* Attestations created by accident
* Attestations linked to artifacts that no longer exist
* Attestations linked to artifacts that consumers should no longer trust

When consumers have a verification process in place, deleting an attestation can prevent the associated artifact from being used. Consider setting up automations to ensure that attestations are deleted when the associated artifact is removed from an external service (for example, an image is deleted from a container registry).


## Finding attestations

1. Navigate to the repository where the attestation was produced.
1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, under "Management," click **{% octicon "verified" aria-hidden="true" aria-label="verified" %} Attestations**.
1. The attestations are sorted by creation date, newest first. Use the "Search or filter" bar to search for an attestation or filter the results.

### Searching and filtering

Enter **free text** to search by subject name. This returns all attestations with subject names that partially match your search string. Multiple attestations can have the same subject name.

Use the `created` filter to filter by creation date. To enter a custom date range, click today's date then edit the default query.

* For example: `created:<2025-04-03`.
* Supported operators: `> <`.

Use the `predicate` filter to filter by the kind of attestation. A predicate is the type of claim that an attestation makes about an artifact, such as "this artifact was built during a particular workflow run and originates from this repository."

* Provenance attestations were created with the `attest` action.
* SBOM attestations were created with the `attest` action using the `sbom-path` input.
* Custom predicate type patterns are **not** supported in the search field, but are supported by the API.

## Deleting attestations

Before deleting an attestation, we recommend downloading a copy of it. Once the attestation is deleted, consumers with a verification process in place will **no longer be able to use the associated artifact**, and you will no longer be able to find the attestation on GitHub.

1. In the list of attestations, select the checkbox next to the attestations you want to delete. You can select multiple attestations at a time.
1. Click **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete**.
1. Read the message, then confirm by clicking **Delete attestations**.

## Managing attestations with the API

To manage attestations in bulk with the REST API, see [Attestations](https://docs.github.com/en/rest/users/attestations).
