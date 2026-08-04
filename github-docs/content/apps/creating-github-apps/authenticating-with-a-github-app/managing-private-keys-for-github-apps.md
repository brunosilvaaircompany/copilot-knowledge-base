# Managing private keys for GitHub Apps

## About private keys for GitHub Apps

After you create a GitHub App, you'll need to generate a private key in order to make requests to the GitHub API as the application itself. For example, you need a private key to sign a JSON Web Token (JWT) in order to request an installation access token. For more information, see [Generating A Json Web Token JWT For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app)

You can create up to 25 private keys for an app. You should use multiple keys in order to rotate keys without downtime in the event of a key compromise. If your application has 25 or more keys, you must delete some before you can create more.

Private keys do not expire and instead need to be manually revoked. For more information about how to revoke or delete a private key, see [Deleting private keys](#deleting-private-keys).

You must keep private keys for GitHub Apps secure. For more information, see [Storing private keys](#storing-private-keys).

To verify that a private key matches a public key, see [Verifying private keys](#verifying-private-keys).

## Generating private keys

To generate a private key:

1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
   * For an app owned by an enterprise:
     1. If you use Enterprise Managed Users, click **Your enterprise** to go directly to the enterprise account settings.
     1. If you use personal accounts, click **Your enterprises** and then to the right of the enterprise, click **Settings**.{% elsif ghes %}
     1. Click **Enterprise settings**.



1. Navigate to the GitHub App settings.
   * For an app owned by a personal account or organization:
     1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**, then click **GitHub Apps**.
   * For an app owned by an enterprise:
     1. In the left sidebar, under "Settings",{% elsif ghes %} click **Settings**, then click **GitHub Apps**.

1. Next to the GitHub App that you want to generate a private key for, click **Edit**.
1. Under "Private keys", click **Generate a private key**.
1. You will see a private key in PEM format downloaded to your computer. Make sure to store this file because GitHub only stores the public portion of the key. For more information about securely storing your key, see [Storing private keys](#storing-private-keys).

> [!NOTE]
> If you're using a library that requires a specific file format, the PEM file you download will be in `PKCS#1 RSAPrivateKey` format.

## Verifying private keys

GitHub generates a fingerprint for each private and public key pair using the SHA-256 hash function. You can verify that your private key matches the public key stored on GitHub by generating the fingerprint of your private key and comparing it to the fingerprint shown on GitHub.

To verify a private key:

1. Find the fingerprint for the private and public key pair you want to verify in the "Private keys" section of the settings page for your GitHub App. For more information, see [Generating private keys](#generating-private-keys).

   ![Screenshot of a private key in a GitHub App settings page. The fingerprint, the part of the private key after the colon, is outlined in dark orange.](/assets/images/github-apps/github-apps-private-key-fingerprint.png)
1. Generate the fingerprint of your private key (PEM) locally by using the following command:

    ```shell
    openssl rsa -in PATH_TO_PEM_FILE -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```

1. Compare the results of the locally generated fingerprint to the fingerprint you see in GitHub.

## Deleting private keys

You can remove a lost or compromised private key by deleting it, but you must regenerate a new key before you can delete the existing key.

1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
   * For an app owned by an enterprise:
     1. If you use Enterprise Managed Users, click **Your enterprise** to go directly to the enterprise account settings.
     1. If you use personal accounts, click **Your enterprises** and then to the right of the enterprise, click **Settings**.{% elsif ghes %}
     1. Click **Enterprise settings**.


1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**.

1. In the left sidebar, click **GitHub Apps**.

1. Next to the GitHub App that you want to delete a private key for, click **Edit**.
1. Under "Private keys", to the right of the private key you want to delete, click **Delete**.
1. When prompted, confirm you want to delete the private key by clicking **Delete**. If your GitHub App has only one key, you will need to generate a new key before deleting the old key. For more information, see [Generating private keys](#generating-private-keys).

## Storing private keys

The private key is the single most valuable secret for a GitHub App. Consider storing the key in a key vault, such as [Azure Key Vault](https://azure.microsoft.com/en-gb/products/key-vault), and making it sign-only. This helps ensure that you can't lose the private key. Once the private key is uploaded to the key vault, it can never be read from there. It can only be used to sign things, and access to the private key is determined by your infrastructure rules.

Alternatively, you can store the key as an environment variable. This is not as strong as storing the key in a key vault. If an attacker gains access to the environment, they can read the private key and gain persistent authentication as the GitHub App.

You should not hard-code your private key in your app, even if your code is stored in a private repository.

For more information, see [Best Practices For Creating A GitHub App](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app).
