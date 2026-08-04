# Programmatically importing repositories

## About programmatic import of repositories

In the following guide, you can learn how to programmatically run "source and history" migrations of Git repositories to GitHub. Different options are available depending on where the repository is stored.

To learn more about "source and history" and other types of migrations, see [Planning Your Migration To GitHub](https://docs.github.com/en/migrations/overview/planning-your-migration-to-github).

The term "source repository" refers to the repository you're importing, and "imported repository" refers to the new repository you're creating.

## Using forks

If the source repository is on GitHub, you may be able to use a fork instead of importing the repository. Forks let you make changes to a project without affecting the original repository, also known as the "upstream" repository.

After you fork a repository, you can:

* Fetch updates from the upstream repository to keep your fork up to date
* Contribute back to the original project by creating pull requests from your fork
For more information, see [About Forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

You can programmatically fork a repository using the REST API. For more information, see [Forks](https://docs.github.com/en/rest/repos/forks).

If your use case meets any of the following criteria, you can't use forking instead of directly importing your repository.

* You want the imported repository to be owned by the same user or organization as the source repository.
* You want one user or organization to be able to import the same source repository multiple times.

## Using repository templates

If the source repository is on GitHub, you may be able to use repository templates. You can create a template from an existing repository. Anyone with access to the template repository can create a new repository based on the template with the same directory structure, branches, and files.
 For more details, see [Creating A Template Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository).

To use repository templates, you must either have read access to an existing repository that's a template, or you must have access to create a template.

You can programmatically create a repository from a repository template using the REST API. For more information, see [Repos](https://docs.github.com/en/rest/repos/repos).

## Using GitHub Enterprise Importer

If the source repository is hosted on GitHub, GitHub Enterprise Server, Azure DevOps Services, Bitbucket Server, or Bitbucket Data Center, you can import the repository using GitHub Enterprise Importer. For more information, see [About GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer).

In addition to your source and version control history, GitHub Enterprise Importer also migrates issues, pull requests, settings, and more.

To use GitHub Enterprise Importer, you must have admin access to the source repository.

You can programmatically import repositories with GitHub Enterprise Importer using the GraphQL API.

## Using the Git CLI

If the source repository is a Git repository, you can call the Git CLI programmatically from your code. You can programmatically create a repository using GitHub's REST API, then use commands like `git clone` and `git push` to import the repository to GitHub.

How you call the Git CLI differs depending on your code's language. For example, in Node.js, you can use the `child_process` module, or in Ruby, you can use the `open3` module. For more information, see [Child process](https://nodejs.org/api/child_process.html) in the Node.js documentation or the [ruby/open3 repository](https://github.com/ruby/open3) on GitHub.

To use the Git CLI, you must have access to install Git on the system that hosts your application. For more information, see [Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) in the Git documentation.

## Using GitHub CLI

If the source repository is a Git repository, you can call the GitHub CLI programmatically from your code. You can use `gh repo create` to create a repository. For more information, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).

## Further reading

* [Repos](https://docs.github.com/en/rest/repos/repos)
