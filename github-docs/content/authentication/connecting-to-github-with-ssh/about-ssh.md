# About SSH

You can access and write data in repositories on GitHub using SSH (Secure Shell Protocol). When you connect via SSH, you authenticate using a private key file on your local machine.
 For more information about SSH, see [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) on Wikipedia.

When you set up SSH, you will need to generate a new private SSH key and add it to the SSH agent. You must also add the public SSH key to your account on GitHub before you use the key to authenticate or sign commits. For more information, see [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) and [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).

You can further secure your SSH key by using a hardware security key, which requires the physical hardware security key to be attached to your computer when the key pair is used to authenticate with SSH. You can also secure your SSH key by adding your key to the ssh-agent and using a passphrase. For more information, see [Working With SSH Key Passphrases](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases).

To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you must authorize the key. For more information, see [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on){% ifversion fpt %} in the GitHub Enterprise Cloud documentation.{% endif %}

To maintain account security, you can regularly review your SSH keys list and revoke any keys that are invalid or have been compromised. For more information, see [Reviewing Your SSH Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys).


If you haven't used your SSH key for a year, then GitHub will automatically delete your inactive SSH key as a security precaution. For more information, see [Deleted Or Missing SSH Keys](https://docs.github.com/en/authentication/troubleshooting-ssh/deleted-or-missing-ssh-keys).



Organizations that use GitHub Enterprise Cloud can provide SSH certificates, which members can use to access that organization's repositories without adding the certificate to their account on GitHub. If you're using an SSH certificate, you cannot use the certificate to access forks of the organization's repositories, if the fork is owned by your personal account. For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities) in the GitHub Enterprise Cloud documentation.

{% else ghec or ghes %}
Organizations that use GitHub Enterprise Cloud can provide SSH certificates, which members can use to access that organization's repositories without adding the certificate to their account on GitHub.

{% ifversion ghec %}Members cannot use the certificate to access forks of the organization's repositories, unless the enterprise has allowed SSH CAs to access user owned repositories. For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).

{% endif %}

## Further reading

* [Troubleshooting SSH](https://docs.github.com/en/authentication/troubleshooting-ssh)
