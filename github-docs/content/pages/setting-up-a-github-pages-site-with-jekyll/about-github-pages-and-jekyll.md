# About GitHub Pages and Jekyll

> [!NOTE] While the `github-pages` gem remains supported for some workflows, GitHub Actions is now the recommended approach for deploying and automating GitHub Pages sites.


## About Jekyll

Jekyll is a static site generator with built-in support for GitHub Pages and a simplified build process. Jekyll takes Markdown and HTML files and creates a complete static website based on your choice of layouts. Jekyll supports Markdown and Liquid, a templating language that loads dynamic content on your site. For more information, see [Jekyll](https://jekyllrb.com/).

Jekyll is not officially supported for Windows. For more information, see [Jekyll on Windows](https://jekyllrb.com/docs/windows/#installation) in the Jekyll documentation.

We recommend using Jekyll with GitHub Pages. If you prefer, you can use other static site generators or customize your own build process locally or on another server. For more information, see [Creating A GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#static-site-generators).

## Configuring Jekyll in your GitHub Pages site

You can configure most Jekyll settings, such as your site's theme and plugins, by editing your `_config.yml` file. For more information, see [Configuration](https://jekyllrb.com/docs/configuration/) in the Jekyll documentation.

Some configuration settings cannot be changed for GitHub Pages sites.

```yaml
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

By default, Jekyll doesn't build files or folders that:
* Are located in a folder called `/node_modules` or `/vendor`
* Start with `_`, `.`, or `#`
* End with `~`
* Are excluded by the `exclude` setting in your configuration file

If you want Jekyll to process any of these files, you can use the `include` setting in your configuration file.

## Front matter

To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see [Front Matter](https://jekyllrb.com/docs/front-matter/) in the Jekyll documentation.


You can add `site.github` to a post or page to add any repository references metadata to your site. For more information, see [Using `site.github`](https://jekyll.github.io/github-metadata/site.github/) in the Jekyll Metadata documentation.

## Themes

You can add a Jekyll theme to your GitHub Pages site to customize the look and feel of your site.
 For more information, see [Themes](https://jekyllrb.com/docs/themes/) in the Jekyll documentation.


You can add a supported theme to your site on GitHub. For more information, see [Supported themes](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#supported-themes) on the GitHub Pages site and [Adding a theme to your GitHub Pages site using Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).

To use any other open source Jekyll theme hosted on GitHub, you can add the theme manually. For more information, see [themes hosted on GitHub](https://github.com/topics/jekyll-theme) and [Adding A Theme To Your GitHub Pages Site Using Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).

You can override any of your theme's defaults by editing the theme's files. For more information, see your theme's documentation and [Overriding your theme's defaults](https://jekyllrb.com/docs/themes/#overriding-theme-defaults) in the Jekyll documentation.

## Plugins

You can download or create Jekyll plugins to extend the functionality of Jekyll for your site. For example, the [jemoji](https://github.com/jekyll/jemoji) plugin lets you use GitHub-flavored emoji in any page on your site the same way you would on GitHub. For more information, see [Plugins](https://jekyllrb.com/docs/plugins/) in the Jekyll documentation.

GitHub Pages uses plugins that are enabled by default and cannot be disabled:
* [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
* [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
* [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
* [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
* [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
* [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
* [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
* [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
* [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

You can enable additional plugins by adding the plugin's gem to the `plugins` setting in your `_config.yml` file. For more information, see [Configuration](https://jekyllrb.com/docs/configuration/) in the Jekyll documentation.

For a list of supported plugins, see [Dependency versions](https://pages.github.com/versions.json) on the GitHub Pages site. For usage information for a specific plugin, see the plugin's documentation.

> [!TIP]
> You can make sure you're using the latest version of all plugins by keeping the GitHub Pages gem updated. For more information, see [Testing Your GitHub Pages Site Locally With Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem) and [Dependency versions](https://pages.github.com/versions.json) on the GitHub Pages site.

GitHub Pages cannot build sites using unsupported plugins. If you want to use unsupported plugins, generate your site locally and then push your site's static files to GitHub.

## Syntax highlighting

To make your site easier to read, code snippets are highlighted on GitHub Pages sites the same way they're highlighted on GitHub. For more information about syntax highlighting, see [Creating And Highlighting Code Blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks).

By default, code blocks on your site will be highlighted by Jekyll. Jekyll uses the [Rouge](https://github.com/rouge-ruby/rouge) highlighter (which is compatible with [Pygments](https://pygments.org/)). If you specify Pygments in your `_config.yml` file, Rouge will be used as the fallback instead. Jekyll cannot use any other syntax highlighter, and you'll get a page build warning if you specify another syntax highlighter in your `_config.yml` file. For more information, see [About Jekyll Build Errors For GitHub Pages Sites](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites).

> [!NOTE]
> Rouge only recognizes lower-case language identifiers for fenced code blocks. For a list of supported languages, see [Languages](https://rouge-ruby.github.io/docs/file.Languages.html).

If you want to use another highlighter, such as [highlight.js](https://github.com/highlightjs/highlight.js), you must disable Jekyll's syntax highlighting by updating your project's `_config.yml` file.

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

If your theme doesn't include CSS for syntax highlighting, you can generate GitHub's syntax highlighting CSS and add it to your project's `style.css` file.

```shell
rougify style github > style.css
```

## Building your site locally

If you are publishing from a branch, changes to your site are published automatically when the changes are merged into your site's publishing source. If you are publishing from a custom GitHub Actions workflow, changes are published whenever your workflow is triggered (typically by a push to the default branch). If you want to preview your changes first, you can make the changes locally instead of on GitHub. Then, test your site locally. For more information, see [Testing Your GitHub Pages Site Locally With Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).
