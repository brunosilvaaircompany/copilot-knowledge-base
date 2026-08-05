# About the repository README file

## About READMEs

You can add a README file to a repository to communicate important information about your project. A README, along with a repository license, citation file, contribution guidelines, and a code of conduct{% elsif ghes %} and contribution guidelines, communicates expectations for your project and helps you manage contributions.


For more information about providing guidelines for your project, see [Adding A Code Of Conduct To Your Project](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project) and [Setting Up Your Project For Healthy Contributions](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions).

A README is often the first item a visitor will see when visiting your repository. README files typically include information on:
* What the project does
* Why the project is useful
* How users can get started with the project
* Where users can get help with your project
* Who maintains and contributes to the project

If you put your README file in your repository's hidden `.github`, root, or `docs` directory, GitHub will recognize and automatically surface your README to repository visitors.

If a repository contains more than one README file, then the file shown is chosen from locations in the following order: the `.github` directory, then the repository's root directory, and finally the `docs` directory.

When your README is viewed on GitHub, any content beyond 500 KiB will be truncated.

If you add a README file to the root of a public repository with the same name as your username, that README will automatically appear on your profile page. You can edit your profile README with GitHub Flavored Markdown to create a personalized section on your profile. For more information, see [Managing Your Profile Readme](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme).


## Auto-generated table of contents for markdown files

For the rendered view of any Markdown file in a repository, including README files, GitHub will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the "Outline" menu icon {% octicon "list-unordered" aria-label="Table of Contents" %} in the top corner of the rendered page.

## Section links in markdown files and blob pages

You can link directly to any section that has a heading. To view the automatically generated anchor in a rendered file, hover over the section heading to expose the {% octicon "link" aria-label="the link" %} icon and click the icon to display the anchor in your browser.

![Screenshot of a README for a repository. To the left of a section heading, a link icon is outlined in dark orange.](/assets/images/help/repository/readme-links.png)


For more detailed information about section links, see [Section links](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#section-links).

## Relative links and image paths in markdown files

You can define relative links and image paths in your rendered files to help readers navigate to other files in your repository.

A relative link is a link that is relative to the current file. For example, if you have a README file in root of your repository, and you have another file in _docs/CONTRIBUTING.md_, the relative link to _CONTRIBUTING.md_ in your README might look like this:

```text
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

GitHub will automatically transform your relative link or image path based on whatever branch you're currently on, so that the link or path always works. The path of the link will be relative to the current file. Links starting with `/` will be relative to the repository root. You can use all relative link operands, such as `./` and `../`.

Your link text should be on a single line. The example below will not work.

```markdown
[Contribution
guidelines for this project](docs/CONTRIBUTING.md)
```

Relative links are easier for users who clone your repository. Absolute links may not work in clones of your repository - we recommend using relative links to refer to other files within your repository.


## Wikis

A README should only contain information necessary for developers to get started using and contributing to your project. Longer documentation is best suited for wikis. For more information, see [About Wikis](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis).

## Further reading

* [Adding A File To A Repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
* [5 tips for making your GitHub profile page accessible](https://github.blog/2023-10-26-5-tips-for-making-your-github-profile-page-accessible/) in the GitHub blog

* [Facilitating Quick Creation And Resumption Of Codespaces](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/facilitating-quick-creation-and-resumption-of-codespaces)
