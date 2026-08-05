# Using a verified email address in your GPG key

If you need to verify your GitHub email address, see [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).  If you need to update or add an email address to your GPG key, see [Associating An Email With Your Gpg Key](https://docs.github.com/en/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key).

Commits and tags may contain several email addresses. For commits, there is the author — the person who wrote the code — and the committer — the person who added the commit to the tree. When signing a commit with Git, whether it be during a merge, cherry-pick, or normal `git commit`, the committer email address will be yours, even if the author email address isn't. Tags are more simple: The tagger email address is always the user who created the tag.

If you need to change your committer or tagger email address, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

## Further reading

* [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
