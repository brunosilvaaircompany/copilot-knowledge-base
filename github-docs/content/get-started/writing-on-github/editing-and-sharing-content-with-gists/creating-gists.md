# Creating gists

## About gists

Gists provide a simple way to share code snippets with others. Every gist is a Git repository, which means that it can be forked and cloned. If you are signed in to GitHub when you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your [gist home page](https://gist.github.com/).

Gists can be public or secret. Public gists show up in [Discover](https://gist.github.com/discover), where people can browse new gists as they're created. They're also searchable, so you can use them if you'd like other people to find and see your work.

Secret gists don't show up in [Discover](https://gist.github.com/discover) and are not searchable unless you are logged in and are the author of the secret gist. Secret gists aren't private. If you send the URL of a secret gist to a friend, they'll be able to see it. However, if someone you don't know discovers the URL, they'll also be able to see your gist. If you need to keep your code away from prying eyes, you may want to [create a private repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) instead.

For GitHub.com and GitHub Enterprise Cloud, GitHub automatically scans _secret gists_ for partner secrets and informs the relevant partner whenever one of their secrets is leaked. See [Secret Scanning For Partners](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning-for-partners).

After creating a gist, you cannot convert it from public to secret.
 However, a secret gist can be made public by editing the gist and updating the visibility to public.



If your site administrator has disabled private mode, you can also use anonymous gists, which can be public or secret.



> [!WARNING]
> Anonymous gists cannot be deleted from the web browser. To have an anonymous gist deleted, contact {% ifversion fpt or ghec %}us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator. Please provide the URL of the gist you wish to delete.




{% endif %}

You'll receive a notification when:
* You are the author of a gist.
* Someone mentions you in a gist.
* You subscribe to a gist, by clicking **Subscribe** at the top of any gist.

You can pin gists to your profile so other people can see them easily. For more information, see [Pinning Items To Your Profile](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile).

You can discover public gists others have created by going to the [gist home page](https://gist.github.com/) and clicking **All Gists**. This will take you to a page of all gists sorted and displayed by time of creation or update. You can also search gists by language with [Gist Search](https://gist.github.com/search). Gist search uses the same search syntax as [code search](/search-github/searching-on-github/searching-code).

Since gists are Git repositories, you can view their full commit history, complete with diffs. You can also fork or clone gists. For more information, see [Forking And Cloning Gists](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/forking-and-cloning-gists).

You can download a ZIP file of a gist by clicking the **Download ZIP** button at the top of the gist. You can embed a gist in any text field that supports JavaScript, such as a blog post. To get the embed code, click the clipboard icon next to the **Embed** URL of a gist. To embed a specific gist file, append the **Embed** URL with `?file=FILENAME`.



Gist supports mapping GeoJSON files. These maps are displayed in embedded gists, so you can easily share and embed maps. For more information, see [Working With Non Code Files](https://docs.github.com/en/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojsontopojson-files-on-github).



## Creating a gist

Follow the steps below to create a gist.

> [!NOTE]
> You can also create a gist using the GitHub CLI. For more information, see [`gh gist create`](https://cli.github.com/manual/gh_gist_create) in the GitHub CLI documentation.
>
> Alternatively, you can drag and drop a text file from your desktop directly into the editor.

1. Sign in to GitHub.
1. Navigate to your [gist home page](https://gist.github.com/).
1. On the top right, click on the "+" icon to create new gist.
1. Optionally, in the "Gist description" field, type a description for your gist.
1. In the "Filename including extension" field, type a file name for your gist, including the file extensions.
1. In the file contents field, type the text of your gist.
1. Optionally, to create a public gist, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, then click **Create public gist**.

   ![Screenshot of the visibility dropdown menu for a new gist. Next to a button labeled "Create secret gist", a dropdown icon is outlined in dark orange.](/assets/images/help/gist/gist-visibility-drop-down.png)
1. Click **Create secret Gist** or **Create public gist**.
