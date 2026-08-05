# Displaying verification statuses for all of your commits

## About vigilant mode

When you work locally on your computer, Git allows you to set the author of your changes and the identity of the committer. This, potentially, makes it difficult for other people to be confident that commits and tags you create were actually created by you. To help solve this problem you can sign your commits and tags. For more information, see [Signing Commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) and [Signing Tags](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-tags). GitHub marks signed commits and tags with a verification status.

By default commits and tags are marked "Verified" if they are signed with a GPG, SSH, or S/MIME key that was successfully verified. If a commit or tag has a signature that can't be verified by GitHub, we mark the commit or tag "Unverified." In all other cases no verification status is displayed.

However, you can give other users increased confidence in the identity attributed to your commits and tags by enabling vigilant mode in your GitHub settings. With vigilant mode enabled, all of your commits and tags are marked with one of three verification statuses:

| Status         | Description |
| -------------- | ----------- |
| **Verified**   | The commit is signed, the signature was successfully verified, and the committer is the only author who has enabled vigilant mode.
| **Partially&nbsp;verified** | The commit is signed, and the signature was successfully verified, but the commit has an author who: a) is not the committer and b) has enabled vigilant mode. In this case, the commit signature doesn't guarantee the consent of the author, so the commit is only partially verified.
| **Unverified** | Any of the following is true:<br>- The commit is signed but the signature could not be verified.<br>- The commit is not signed and the committer has enabled vigilant mode.<br>- The commit is not signed and an author has enabled vigilant mode.<br>


You should only enable vigilant mode if you sign all of your commits and tags and use an email address that is verified for your GitHub account as your committer email address. After enabling this mode, any unsigned commits or tags that you generate locally and push to GitHub will be marked "Unverified."

You can check the verification status of your signed commits or tags on GitHub and view why your commit signatures might be unverified. For more information, see [Checking Your Commit And Tag Signature Verification Status](https://docs.github.com/en/authentication/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status).


## Enabling vigilant mode

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.

1. Under "Vigilant mode," select **Flag unsigned commits as unverified**.
