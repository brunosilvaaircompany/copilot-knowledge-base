# Editing wiki content

## Adding links

You can create links in wikis using one of the following formats. For example:

* If your pages are rendered with Markdown, the link syntax is `[Link Text](full-URL-of-wiki-page)`.
* With MediaWiki syntax, the link syntax is `[[Nameofwikipage|Link Text]]`.

## Adding images

Wikis can display PNG, JPEG, and GIF images.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "book" aria-hidden="true" aria-label="book" %} Wiki**.

   ![Screenshot of the menu in a repository. The "Wiki" option is outlined in dark orange.](/assets/images/help/wiki/wiki-menu-link.png)

1. Using the wiki sidebar, navigate to the page you want to change, and then click **Edit**.
1. In the wiki toolbar, click {% octicon "image" aria-hidden="true" aria-label="image" %}.

   ![Screenshot of the toolbar on the edit page of the wiki. The icon to add an image is outlined in dark orange.](/assets/images/help/wiki/wiki-add-image.png)

1. In the "Insert Image" dialog box, type the image URL and the alt text (which is used by search engines and screen readers).
1. Click **OK**.

### Linking to images in a repository

You can link to an image in a repository on GitHub by copying the URL in your browser and using that as the path to the image. For example, embedding an image in your wiki using Markdown might look like this:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

## Adding mathematical expressions and diagrams

You can use Markdown to add rendered math expressions, diagrams, maps, and 3D models to your wiki. For more information on creating rendered math expressions, see [Writing Mathematical Expressions](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions). For more information on creating diagrams, maps and 3D models, see [Creating Diagrams](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams).


## Supported MediaWiki formats

No matter which markup language your wiki page is written in, certain MediaWiki syntax will always be available to you.
* Horizontal rules via `---`
* Shorthand symbol entities (such as `&delta;` or `&euro;`)

For security and performance reasons, some syntaxes are unsupported.
* [Transclusion](https://www.mediawiki.org/wiki/Transclusion)
* Definition lists
* Indentation
* Table of contents
