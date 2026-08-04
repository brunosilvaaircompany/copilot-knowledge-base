# About versions of GitHub Docs

## About versions of GitHub Docs

GitHub offers different plans for storing and collaborating on code. The plan you use determines which features are available to you. For more information, see [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans).

This website, GitHub Docs, provides documentation for all of GitHub's plans. If the content you're reading applies to more than one plan, you can choose the version of the documentation that's relevant to you by selecting the plan you're currently using.

At the top of a page on GitHub Docs, select the dropdown menu and click a plan. If your browser window is not wide enough to display the full navigation bar, you may need to click {% octicon "kebab-horizontal" aria-label="Open Menu Bar" %} first.

![Screenshot of the header of GitHub Docs. The "Version" dropdown menu is expanded and highlighted with an orange outline.](/assets/images/help/docs/version-picker.png)

> [!NOTE]
> You can try changing the version now. You're viewing a **Free, Pro, & Team{% elsif ghec %}GitHub Enterprise Cloud{% elsif ghes %}GitHub Enterprise Server** version of this article.

## Determining which GitHub product you use

You can determine which GitHub plan you're currently using by reviewing the URL in the address bar of your browser and the heading for the GitHub website you're on.

You may use more than one GitHub plan. For example, you might contribute to open source on GitHub.com and collaborate on code on your employer's GitHub Enterprise Server instance. You may need to view different versions of the same article at different times, depending on the problem you're currently trying to solve.

### GitHub.com plans or GitHub Enterprise Cloud

If you access GitHub at https://github.com, you're either using the features of a Free, Pro, or Team plan, or you're using GitHub Enterprise Cloud.

On GitHub.com, each account has its own plan. Each personal account has an associated plan that provides access to certain features, and each organization has a different associated plan. If your personal account is a member of an organization on GitHub, you may have access to different features when you use resources owned by that organization than when you use resources owned by your personal account. For more information, see [Types Of GitHub Accounts](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts).

If you don't know whether an organization uses GitHub Enterprise Cloud, ask an organization owner. For more information, see [Viewing Peoples Roles In An Organization](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/viewing-peoples-roles-in-an-organization).

### GHE.com

If you access GitHub at a subdomain of GHE.com, such as `octocorp.ghe.com`, you're part of an enterprise that uses GitHub Enterprise Cloud with data residency. You should use the "GitHub Enterprise Cloud" version of GitHub Docs.

Because you're using a managed user account, certain parts of the documentation may not apply to you. See [Abilities And Restrictions Of Managed User Accounts](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts).

If you see references to "github.com" in the documentation, you may need to substitute these references for your enterprise's subdomain on GHE.com. For example, you will make API calls to `https://api.SUBDOMAIN.ghe.com`, rather than `https://api.github.com`.

### GitHub Enterprise Server

If you access GitHub at a URL **other than** https://github.com, `https://*.github.us`, or `https://*.ghe.com`, you're using GitHub Enterprise Server. For example, you may access GitHub Enterprise Server at `https://github.YOUR-COMPANY-NAME.com`. Your administrators may choose a URL that doesn't include the word "GitHub."

In a wide browser window, the word "Enterprise" immediately follows the GitHub logo on the left side of the header.

![Screenshot of the header of any page on GitHub. The GitHub logo and "Enterprise" are highlighted with an orange outline.](/assets/images/help/docs/header-ghes.png)

You can view the version of GitHub Enterprise Server that you're using in the footer of any page.

![Screenshot of the footer of GitHub Enterprise Server. "GitHub Enterprise Server 3.7.5" is highlighted with an orange outline.](/assets/images/help/docs/ghes-version-in-footer.png)
