# Making a GitHub App public or private

## About visibility for GitHub Apps

A GitHub App can be public or private{% elsif enterprise-apps-public-beta %}public, private, or internal. If you set your GitHub App registration to public, any user on GitHub can install it and authorize it. If you set your GitHub App registration to private, it can only be installed on the account that owns the app. Only members of the organization that owns it can authorize it.

{% elsif ghes %} If you set your GitHub App registration to public, anyone on your GitHub Enterprise Server instance can install it, but the app is not available outside of your instance. If you set your GitHub App registration to private, it can only be installed on the account that owns the app. 


GitHub Apps owned by an enterprise account{% ifversion ghec %}, or by a managed user account in an enterprise, have "internal" visibility. Internal apps can only be installed by that enterprise and organizations within the enterprise and can only be authorized by users within the enterprise. Members of the enterprise and unaffiliated users can authorize these apps, but outside collaborators cannot.
{% endif %}

If you want your organization-owned application to be installed on your enterprise, transfer it to the enterprise or make it `public` or `internal`. If it is `private` it can only be installed on the organization.

If you want your GitHub App to be available to organizations in a GitHub Enterprise Server instance that you are not part of, then you need to take additional steps. For more information, see [Making Your GitHub App Available For GitHub Enterprise Server](https://docs.github.com/en/apps/sharing-github-apps/making-your-github-app-available-for-github-enterprise-server).

If it is important for other GitHub Enterprise Server users to be able to use your tool, consider using GitHub Actions instead of a GitHub App. Public actions are available on GitHub Enterprise Server instances with GitHub Connect. For more information, see [Enabling Automatic Access To Githubcom Actions Using GitHub Connect](https://docs.github.com/en/enterprise-server@latest/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) and [About GitHub Actions For Enterprises](https://docs.github.com/en/enterprise-server@latest/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

For information about changing the visibility of a GitHub App registration, see [Modifying A GitHub App Registration](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration).

### Public installation flow

Public GitHub Apps have a landing page with an **Install** button, so that other people can install the app on their accounts. If your GitHub App is public to all users on GitHub, you can also choose to publish it to GitHub Marketplace. For more information, see [About GitHub Marketplace For Apps](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-github-marketplace-for-apps).

### Private installation flow

Private GitHub Apps can only be installed on the user or organization account of the app owner. Limited information about the app will exist on a landing page for the app, and the **Install** button will only be available to organization owners and app managers for the organization that owns the app, or the personal account if the GitHub App is owned by an individual account.



### "Internal" installation flow

Enterprise-owned GitHub Apps{% ifversion ghec %} and apps owned by managed user accounts can only be installed on that enterprise and organizations within the enterprise by using the installation URL. The app can not be installed on user accounts.

{% endif %}
