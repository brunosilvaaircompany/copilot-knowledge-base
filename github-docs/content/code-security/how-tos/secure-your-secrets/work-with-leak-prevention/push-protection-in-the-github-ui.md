# Working with push protection in the GitHub UI

## About push protection in the GitHub UI

When you upload, create, or edit files from the GitHub UI, push protection prevents you from accidentally committing secrets to a repository by blocking commits containing supported secrets.

GitHub will also block the commit if you attempt to upload files containing supported secrets.

>[!NOTE] Push protection for file uploads in the web UI is currently in public preview and subject to change.


You should either:

* **Remove** the secret from the commit. For more information, see [Resolving a blocked commit](#resolving-a-blocked-commit).
* **Review** the instructions in the dialog box to see what options are available to you to allow the push. For more information, see [Bypassing push protection](#bypassing-push-protection) and [Requesting bypass privileges](#requesting-bypass-privileges).

GitHub will only display one detected secret at a time in the web UI. If a particular secret has already been detected in the repository and an alert already exists, GitHub will not block that secret.

Organization owners can provide a custom link that will be displayed when a push is blocked. This custom link can contain resources and advice specific to your organization. For example, the custom link can point to a README file with information about the organization's secret vault, which teams and individuals to escalate questions to, or the organization's approved policy for working with secrets and rewriting commit history.

## Resolving a blocked commit

When you use the web UI to attempt to commit a supported secret to a repository secured by push protection, GitHub will block the commit.

You will see a dialog box with information about the secret's location, as well as options allowing you to push the secret. The secret will also be underlined in the file so you can easily find it.


To resolve a blocked commit in the web UI, you need to remove the secret from the file. Once you remove the secret, you will be able to commit your changes.

> [!NOTE] To learn how to resolved a blocked push on the command line, see [Push Protection On The Command Line](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-on-the-command-line#resolving-a-blocked-push).

## Bypassing push protection

If GitHub blocks a secret that you believe is safe to commit, you may be able to bypass the block by specifying a reason for allowing the secret.

When you allow a secret to be pushed, an alert is created in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. GitHub closes the alert and doesn't send a notification if you specify that the secret is a false positive or used only in tests. If you specify that the secret is real and that you will fix it later, GitHub keeps the security alert open and sends notifications to the author of the commit, as well as to repository administrators. For more information, see [Manage Secret Scanning Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts).


When a contributor bypasses a push protection block for a secret, GitHub also sends an email alert to the organization owners, security managers, and repository administrators who have opted in for email notifications.


1. In dialog box that appeared when GitHub blocked your commit, review the name and location of the secret.
1. Choose the option that best describes why you should be able to push the secret.
    * If the secret is only used in tests and poses no threat, click **It's used in tests**.
    * If the detected string is not a secret, click **It's a false positive**.
    * If the secret is real but you intend to fix it later, click **I'll fix it later**.



   > [!NOTE]
   > You are required to specify a reason for bypassing push protection if the repository has secret scanning enabled.
   >
   > When pushing to a _public_ repository that doesn't have secret scanning enabled, you are still protected from accidentally pushing secrets thanks to _push protection for users_, which is on by default for your user account.
   >
   > With push protection for users, GitHub will automatically block pushes to public repositories if these pushes contain supported secrets, but you won't need to specify a reason for allowing the secret, and GitHub won't generate an alert. For more information, see [Manage User Push Protection](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/prevent-future-leaks/manage-user-push-protection).



1. Click **Allow secret**.

If you don't see the option to bypass the block, the repository administrator or organization owner has configured tighter controls around push protection. Instead, you should remove the secret from the commit, or submit a request for "bypass privileges" in order to push the blocked secret. For more information, see [Requesting bypass privileges](/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-in-the-github-ui#requesting-bypass-privileges).

## Requesting bypass privileges

If your commit has been blocked by push protection, you can request permission to bypass the block. The request is sent to a designated group of reviewers, who will either approve or deny the request.

Requests expire after 7 days.

1. In dialog box that appeared when GitHub blocked your commit, review the name and location of the secret.
1. Click **Start request**. The request will open in a new tab.
1. Under "Or request bypass privileges", add a comment. For example, you might explain why you believe the secret is safe to push, or provide context about the request to bypass the block.

1. Click **Submit request**.

1. Check your email notifications for a response to your request.


Once your request has been reviewed, you will receive an email notifying you of the decision.


If your request is approved, you can commit the changes containing the secret to the file. You can also commit any future changes that contain the same secret.

If your request is denied, you will need to remove the secret from the file before you can commit your changes.

## Further reading

* [Push Protection On The Command Line](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-on-the-command-line)
* [Push Protection From The Rest API](https://docs.github.com/en/code-security/concepts/secret-security/push-protection-from-the-rest-api)
