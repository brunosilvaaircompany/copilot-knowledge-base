# GitHub language support



## About supported languages

Most GitHub features work regardless of which languages your code is written in. You can search for code or enable syntax highlighting based on any language known to GitHub. For more information, see [Understanding GitHub Code Search Syntax](https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax#language-qualifier) or [Creating And Highlighting Code Blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting).

Some GitHub products have features that are currently only supported for a subset of programming languages.

Core languages for GitHub features include C, C++, C#, Go, Java, JavaScript, Kotlin, PHP, Python, Ruby, Rust, Scala, and TypeScript. For features that support package managers, the currently supported package managers are included in the table with their relevant languages.

Some features are supported for additional languages or package managers. If you want to know whether another language is supported for a feature or to request support for a language, visit [GitHub Community discussions](https://github.com/orgs/community/discussions).





## Core languages supported in GitHub.com and GitHub Enterprise Cloud

| Language{%- for featureEntry in tables.supported-code-languages.features %}{%- assign featureKey = featureEntry[0] %}{%- assign featureData = featureEntry[1] %}{%- if featureData.fptAndGhec %} | [{{ featureData.name }}]({{ featureData.link }}){%- endfor %} |
|:----{%- for featureEntry in tables.supported-code-languages.features %}{%- assign featureData = featureEntry[1] %}{%- if featureData.fptAndGhec %}|:----:{%- endif %}{%- endfor %}|
{%- for languageEntry in tables.supported-code-languages.languages %}
{%- assign language = languageEntry[0] %}
{%- assign languageData = languageEntry[1] %}
| {{ language }}{%- for featureEntry in tables.supported-code-languages.features -%}{%- assign featureKey = featureEntry[0] -%}{%- assign featureData = featureEntry[1] -%}{%- if featureData.fptAndGhec -%}{%- assign supportLevel = languageData[featureKey] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "not-supported" %}✗{%- else %}{{ supportLevel }}{%- endcase -%}{%- endif -%}{%- endfor %} |
{%- endfor %}
{% endif %}



## Core languages supported in GitHub Enterprise Server

| Language{%- for featureEntry in tables.supported-code-languages.features %}{%- assign featureKey = featureEntry[0] %}{%- assign featureData = featureEntry[1] %}{%- if featureData.ghes %} | [{{ featureData.name }}]({{ featureData.link }}){%- endfor %} |
|:----{%- for featureEntry in tables.supported-code-languages.features %}{%- assign featureData = featureEntry[1] %}{%- if featureData.ghes %}|:----:{%- endif %}{%- endfor %}|
{%- for languageEntry in tables.supported-code-languages.languages %}
{%- assign language = languageEntry[0] %}
{%- assign languageData = languageEntry[1] %}
| {{ language }}{%- for featureEntry in tables.supported-code-languages.features -%}{%- assign featureKey = featureEntry[0] -%}{%- assign featureData = featureEntry[1] -%}{%- if featureData.ghes -%}{%- assign supportLevel = languageData[featureKey] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "not-supported" %}✗{%- else %}{{ supportLevel }}{%- endcase -%}{%- endif -%}{%- endfor %} |
{%- endfor %}
{% endif %}

> [!NOTE]
> The language support for GitHub Copilot varies depending on the volume and diversity of training data for that language.
> The support of Gradle for the dependency graph and Dependabot alerts is limited to the upload of data obtained using the dependency submission API.

[^1]: PHP and Scala {% elsif codeql-rust-public-preview %}PHP and Scala are supported for code scanning by third-party actions, but not by CodeQL.
