# Ruby CodeQL queries for Code Quality

Code Quality uses the following CodeQL queries to analyze Ruby code and detect code quality issues on:

* Your **default branch**, with results shown on the repository's "Standard findings" dashboard
* **Pull requests**, with findings shown as comments made by `github-code-quality[bot]`

Copilot Autofix suggestions are provided for findings where possible.

{% rowheaders %}

| Query name | Category | Severity |
| --- | --- | --- |
| [Useless assignment to local variable](https://codeql.github.com/codeql-query-help/ruby/rb-useless-assignment-to-local/) | Maintainability | Warning |
| [Database query in a loop](https://codeql.github.com/codeql-query-help/ruby/rb-database-query-in-loop/) | Reliability | Info |
| [Potentially uninitialized local variable](https://codeql.github.com/codeql-query-help/ruby/rb-uninitialized-local-variable/) | Reliability | Error |

{% endrowheaders %}
