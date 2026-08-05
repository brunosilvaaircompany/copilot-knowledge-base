# About Jekyll build errors for GitHub Pages sites

> [!NOTE] While the `github-pages` gem remains supported for some workflows, GitHub Actions is now the recommended approach for deploying and automating GitHub Pages sites.


## About Jekyll build errors

If you are publishing from a branch, sometimes GitHub Pages will not attempt to build your site after you push changes to your site's publishing source.
* The person who pushed the changes hasn't verified their email address. For more information, see [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).
* You're pushing with a deploy key. If you want to automate pushes to your site's repository, you can set up a machine user instead. For more information, see [Managing Deploy Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#machine-users).
* You're using a CI service that isn't configured to build your publishing source. For example, Travis CI won't build the `gh-pages` branch unless you add the branch to a safe list. For more information, see [Customizing the build](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches) on Travis CI, or your CI service's documentation.

> [!NOTE]
> It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub.


If Jekyll does attempt to build your site and encounters an error, you will receive a build error message.


For more information about troubleshooting build errors, see [Troubleshooting Jekyll Build Errors For GitHub Pages Sites](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites).



## Viewing Jekyll build error messages with GitHub Actions

By default, your GitHub Pages site is built and deployed with a GitHub Actions workflow run unless you've configured your GitHub Pages site to use a different CI tool. To find potential build errors, you can check the workflow run for your GitHub Pages site by reviewing your repository's workflow runs. For more information, see [View Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history). For more information about how to re-run the workflow in case of an error, see [Re Run Workflows And Jobs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs).




## Viewing Jekyll build error messages locally

We recommend testing your site locally, which allows you to see build error messages on the command line, and addressing any build failures before pushing changes to GitHub. For more information, see [Testing Your GitHub Pages Site Locally With Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

## Viewing Jekyll build error messages in your pull request

If you are publishing from a branch, when you create a pull request to update your publishing source on GitHub, you can see build error messages on the **Checks** tab of the pull request. For more information, see [About Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

If you are publishing with a custom GitHub Actions workflow, in order to see build error messages in your pull request, you must configure your workflow to run on the `pull_request` trigger. When you do this, we recommend that you skip any deploy steps if the workflow was triggered by the `pull_request` event. This will allow you to see any build errors without deploying the changes from your pull request to your site. For more information, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) and [Expressions](https://docs.github.com/en/actions/reference/workflows-and-actions/expressions).

## Viewing Jekyll build errors by email

If you are publishing from a branch, when you push changes to your publishing source on GitHub, GitHub Pages will attempt to build your site. If the build fails, you'll receive an email at your primary email address. 

> [!TIP]
> You will only receive an email if outbound email support is enabled on your GitHub Enterprise Server instance. For more information, contact your site administrator.




If you are publishing with a custom GitHub Actions workflow, in order to receive emails about build errors in your pull request, you must configure your workflow to run on the `pull_request` trigger. When you do this, we recommend that you skip any deploy steps if the workflow was triggered by the `pull_request` event. This will allow you to see any build errors without deploying the changes from your pull request to your site. For more information, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) and [Expressions](https://docs.github.com/en/actions/reference/workflows-and-actions/expressions).

## Viewing Jekyll build error messages in your pull request with a third-party CI service

You can configure a third-party service, such as [Travis CI](https://travis-ci.com/), to display error messages after each commit.

1. If you haven't already, add a file called _Gemfile_ in the root of your publishing source, with the following content:

   ```ruby
   source `https://rubygems.org`
   gem `github-pages`
   ```

1. Configure your site's repository for the testing service of your choice. For example, to use [Travis CI](https://travis-ci.com/), add a file named _.travis.yml_ in the root of your publishing source, with the following content:

   ```yaml
   language: ruby
   rvm:
     - 2.3
   script: "bundle exec jekyll build"
   ```

1. You may need to activate your repository with the third-party testing service. For more information, see your testing service's documentation.
