# Managing your passkeys

> [!NOTE] You may not be able to use passkeys, if a site administrator has disabled them for your instance.




## About managing your passkeys

If you are connecting to GitHub from an eligible device and browser, GitHub may prompt you to register the device as a passkey during sign-in. You can also add passkeys to your account from your account settings. For more information, see [Adding a passkey to your account](#adding-a-passkey-to-your-account).

If you use two-factor authentication (2FA), GitHub may prompt you to upgrade existing eligible security keys (such as Mac TouchID, or Windows Hello) into passkeys after authenticating to GitHub. You can also upgrade eligible security keys from your account settings. For more information, see [Upgrading an existing security key to a passkey](#upgrading-an-existing-security-key-to-a-passkey).

For information on how to remove a passkey from your account, see [Removing a passkey from your account](#removing-a-passkey-from-your-account).

## Adding a passkey to your account

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. Under “Passkeys”, click **Add a passkey**.

1. If prompted, authenticate with your password, or use another existing authentication method.
1. Under “Configure passwordless authentication”, review the prompt, then click **Add passkey**.
1. At the prompt, follow the steps outlined by the passkey provider.
1. On the next page, review the information confirming that a passkey was successfully registered, then click **Done**.



## Upgrading an existing security key to a passkey

> [!NOTE]
> * Platform support for upgrading security keys is inconsistent, so if you're seeing failures from your operating system or browser when trying to register an existing credential, we suggest that you remove and re-register the security key.
> * If you have used a security key recently and it's eligible for an upgrade, an upgrade button will be shown next to the security key in the settings menu. You can use the button to trigger the upgrade flow. You can also attempt to upgrade other keys by registering them as a passkey, even if the upgrade button isn't shown.

Before starting the upgrade procedure, make sure that you are using the device that's linked to the existing security key. Then, when you click **Add a passkey** in your account settings, GitHub will automatically bump you into the "Upgrade to a passkey" flow.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. Under “Passkeys”, click **Add a passkey**.

1. If prompted, authenticate with your password, or use another existing authentication method.
1. Under “Configure passwordless authentication”, under "Upgrade your security key registration to a passkey," review the information that confirms the name of the security key to be upgraded, then click **Upgrade to passkey**.
1. At the prompt, follow the steps outlined by the passkey provider.
1. On the next page, review the information confirming that a passkey was successfully registered, then click **Done**.


## Removing a passkey from your account

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. To the right of the passkey that you want to remove, click **{% octicon "trash" aria-label="Delete passkey" %}**.
1. Review the information in the “Delete confirmation” pop-up window, then click **Delete**.

## Recovering a passkey

Many passkeys support syncing, where your passkey is backed up by the provider's account system (iCloud, Google account, password manager, etc.). If you ever lose your device, you can recover your synced passkeys by signing in to your passkey provider.

In some cases, your passkey may be "device-bound," which means the passkey cannot be synced and is not backed up to the cloud. For example, you can register FIDO2 hardware security keys (such as a YubiKey) as a passkey, but that passkey will not be synced. If your passkey is device-bound, and you lose or wipe the device, the passkey cannot be recovered. If you are only using device-bound passkeys, it is a best practice to register passkeys on at least two different devices, in case you lose access to one.

You can see which of your passkeys are synced, and which are device-bound, under "Passkeys" in your account security settings. Synced passkeys will include a blue `Synced` label next to their name.

## Further reading

* [About Passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys)
* [Signing In With A Passkey](https://docs.github.com/en/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey)
