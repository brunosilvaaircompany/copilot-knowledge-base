# Unlinking your email address from a locked account

> [!WARNING]
> Following these steps will not disable 2FA or provide access to a locked account, but will instead unlink the associated email address so it may be used for a different account. If you cannot regain access to the 2FA locked account, these steps will permanently break the link between the account and the linked email address. Before continuing, be sure you have lost all access to your account. See [Recovering Your Account If You Lose Your 2Fa Credentials](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials).

### Unlinking with your password

If you know your password, you can sign in with your password to unlink your email address.

1. Navigate to  [`https://github.com/login`](https://github.com/login) {%- elsif ghes %} `http(s)://HOSTNAME/login` .
1. To prompt two-factor authentication, type your username and password, then click **Sign in**.


   > [!NOTE]
   > If you have linked a social account to your GitHub account, you can sign-in with your social login instead of using your password.


1. Under "More options", click **2FA recovery code**.

1. Under "More options", click **Begin account or email recovery**.
1. In the modal that appears, click **I understand, get started**.
1. You may be required to verify an email address. To send an email containing a one-time password to each email address associated with your account, click **Send one-time password**.
   > [!NOTE]
   > The one-time password will be sent to your primary and backup email addresses. Unless you have previously chosen a specific backup email address, all verified emails are considered backup email addresses.
1. Type the one-time password from your email in the "One-time password" text field, then click **Verify email address**.

1. To begin unlinking, click **Start unlinking email**.
1. On the "Email unlink" screen, click **Continue**. GitHub will send a verification link to each email on the account.
1. In the inbox of each email account that you want to unlink, open the email with the subject "[GitHub] Unlink this email."
1. In the email, click **Unlink this email**.

   ![Screenshot of an email from GitHub to unlink an email address from a GitHub account. A link with the text "Unlink this email" is outlined in orange.](/assets/images/help/2fa/unlink-this-email.png)

1. To finish unlinking your email, click **Unlink**.
1. Optionally, to create a new account and link your newly unlinked email, click **Create a new account**.
   > [!NOTE]
   > You can also link your unlinked email to an existing GitHub account. See [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).

1. Optionally, if you have any form of payment set up on the locked account, please contact us through the [GitHub Support portal](https://support.github.com/) to cancel future payments. For example, you might have a paid subscription or sponsor developers through GitHub Sponsors. If you are sponsored through GitHub Sponsors, please mention this so that the team can help you migrate your sponsorships.


### Unlinking without your password

If you do not know your account password, you can request a password reset link to unlink your email address.

1. To request a new password, visit https://github.com/password_reset.
1. Enter the email address associated with your account, then click **Send password reset email.**
   > [!NOTE]
   > Only primary and backup email addresses can be used to request a new password. Unless you have previously chosen a specific backup email address, all verified emails are considered backup email addresses.
1. GitHub will email you a link that will allow you to reset your password. You must click on this link within 3 hours of receiving the email. If you didn't receive an email from us, make sure to check your spam folder.

1. You will be prompted for your 2FA credentials. Under "More options", click **Begin account or email recovery**.
1. In the modal that appears, click **I understand, get started**.

1. To begin unlinking, click **Start unlinking email**.
1. On the "Email unlink" screen, click **Continue**. GitHub will send a verification link to each email on the account.
1. In the inbox of each email account that you want to unlink, open the email with the subject "[GitHub] Unlink this email."
1. In the email, click **Unlink this email**.

   ![Screenshot of an email from GitHub to unlink an email address from a GitHub account. A link with the text "Unlink this email" is outlined in orange.](/assets/images/help/2fa/unlink-this-email.png)

1. To finish unlinking your email, click **Unlink**.
1. Optionally, to create a new account and link your newly unlinked email, click **Create a new account**.
   > [!NOTE]
   > You can also link your unlinked email to an existing GitHub account. See [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).

1. Optionally, if you have any form of payment set up on the locked account, please contact us through the [GitHub Support portal](https://support.github.com/) to cancel future payments. For example, you might have a paid subscription or sponsor developers through GitHub Sponsors. If you are sponsored through GitHub Sponsors, please mention this so that the team can help you migrate your sponsorships.
