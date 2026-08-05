# Testing your GitHub Pages site locally with Jekyll

Anyone with read permissions for a repository can test a GitHub Pages site locally.

## Prerequisites

Before you can use Jekyll to test a site, you must:
* Install [Jekyll](https://jekyllrb.com/docs/installation/).
* Create a Jekyll site. For more information, see [Creating A GitHub Pages Site With Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll).

We recommend using [Bundler](https://bundler.io/) to install and run Jekyll. Bundler manages Ruby gem dependencies, reduces Jekyll build errors, and prevents environment-related bugs. To install Bundler:

 1. Install Ruby. For more information, see [Installing Ruby](https://www.ruby-lang.org/en/documentation/installation/) in the Ruby documentation.
 1. Install Bundler. For more information, see [Bundler](https://bundler.io/).


{% mac %}

> [!TIP]
> If you see a Ruby error when you try to install Jekyll using Bundler, you may need to use a package manager, such as [RVM](https://rvm.io/) or [Homebrew](https://brew.sh/), to manage your Ruby installation. For more information, see [Troubleshooting](https://jekyllrb.com/docs/troubleshooting/#jekyll--macos) in the Jekyll documentation.

{% endmac %}


## Building your site locally

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Navigate to the publishing source for your site. For more information, see [Configuring A Publishing Source For Your GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

1. Run `bundle install`.
1. Run your Jekyll site locally.

   ```shell
   $ bundle exec jekyll serve
   > Configuration file: /Users/octocat/my-site/_config.yml
   >            Source: /Users/octocat/my-site
   >       Destination: /Users/octocat/my-site/_site
   > Incremental build: disabled. Enable with --incremental
   >      Generating...
   >                    done in 0.309 seconds.
   > Auto-regeneration: enabled for '/Users/octocat/my-site'
   > Configuration file: /Users/octocat/my-site/_config.yml
   >    Server address: http://127.0.0.1:4000/
   >  Server running... press ctrl-c to stop.
   ```

   > [!NOTE]
   > * If you've installed Ruby 3.0 or later (which you may have if you installed the default version via Homebrew), you might get an error at this step. That's because these versions of Ruby no longer come with `webrick` installed.
   >
   >   To fix the error, try running `bundle add webrick`, then re-running `bundle exec jekyll serve`.
   >
   > * If your `_config.yml` file's `baseurl` field contains your GitHub repository's link, you can use the following command when building locally to ignore that value and serve the site on `localhost:4000/`:
   >
   >   ```shell
   >   bundle exec jekyll serve --baseurl=""
   >   ```

1. To preview your site, in your web browser, navigate to `http://localhost:4000`.

## Updating the GitHub Pages gem

> [!NOTE] While the `github-pages` gem remains supported for some workflows, GitHub Actions is now the recommended approach for deploying and automating GitHub Pages sites.


Jekyll is an active open source project that is updated frequently. If the `github-pages` gem on your computer is out of date with the `github-pages` gem on the GitHub Pages server, your site may look different when built locally than when published on GitHub. To avoid this, regularly update the `github-pages` gem on your computer.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Update the `github-pages` gem.
    * If you installed Bundler, run `bundle update github-pages`.
    * If you don't have Bundler installed, run `gem update github-pages`.

## Further reading

* [GitHub Pages](https://jekyllrb.com/docs/github-pages/) in the Jekyll documentation
