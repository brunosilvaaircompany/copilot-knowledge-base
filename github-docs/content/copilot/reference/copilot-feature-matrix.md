# Copilot feature matrix

> [!NOTE]
> The GitHub Copilot feature matrix is currently in public preview and is subject to change.

GitHub recommends using the latest stable IDE and Copilot extension versions to get the best Copilot experience. 

**Key:**

* ✓ = supported
* ✗ = not supported
* P = under preview
* C = closing down



{% ides %}

## Features by IDE

The following table shows supported Copilot features in the latest version of each IDE.

{%- comment %}
This loop generates the "Features by IDE" comparison table:
- Outer loop: Iterates through each feature from VS Code's feature list (using VS Code as the canonical source)
- Inner loop: For each feature, iterates through all IDEs to check support in their latest versions
  - Gets the latest version using ideEntry[1].versions | first
  - Looks up the support level for that feature in that version
  - Outputs ✓ (supported), P (preview), or ✗ (not supported)
Example row: | Agent mode | ✓ | ✓ | P | ✗ | ... |
{%- endcomment %}

| Feature{%- for entry in tables.copilot.copilot-matrix.ides %} | {{ entry[0] }}{%- endfor %} |
|:----{%- for entry in tables.copilot.copilot-matrix.ides %}|:----:{%- endfor %}|
{%- for featureEntry in tables.copilot.copilot-matrix.ides["VS Code"].features %}
| {{ featureEntry[0] }}{%- for ideEntry in tables.copilot.copilot-matrix.ides %}{%- assign latestVersion = ideEntry[1].versions | first %}{%- assign supportLevel = ideEntry[1].features[featureEntry[0]][latestVersion] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{% endides %}

{% vscode %}

{% assign ideEntry = tables.copilot.copilot-matrix.ides["VS Code"] %}

## Features by VS Code version

The following table shows supported Copilot features across recent versions of the IDE.

{%- comment %} Use the predefined versionGroups from JSON data {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## VS Code {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endvscode %}

{% visualstudio %}

{% assign ideEntry = tables.copilot.copilot-matrix.ides["Visual Studio"] %}

## Features by Visual Studio version

The following table shows supported Copilot features across recent versions of the IDE.

{%- comment %} Use the predefined versionGroups from JSON data {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## Visual Studio {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endvisualstudio %}

{% jetbrains %}

{% assign ideEntry = tables.copilot.copilot-matrix.ides["JetBrains"] %}

## Features by JetBrains version

The following table shows supported Copilot features across recent versions of the GitHub Copilot Extension for the IDE.

{%- comment %} Use the predefined versionGroups from JSON data {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## JetBrains {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endjetbrains %}

{% eclipse %}

{% assign ideEntry = tables.copilot.copilot-matrix.ides["Eclipse"] %}

## Features by Eclipse version

The following table shows supported Copilot features across recent versions of the GitHub Copilot Extension for the IDE.

{%- comment %} Use the predefined versionGroups from JSON data {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## Eclipse {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endeclipse %}

{% xcode %}

{% assign ideEntry = tables.copilot.copilot-matrix.ides["Xcode"] %}

## Features by Xcode version

The following table shows supported Copilot features across recent versions of the GitHub Copilot Extension for the IDE.

{%- comment %} Use the predefined versionGroups from JSON data {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## Xcode {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endxcode %}

{% vimneovim %}

{% assign ideEntry = tables.copilot.copilot-matrix.ides["NeoVim"] %}

## Features by NeoVim version

The following table shows supported Copilot features across recent versions of the GitHub Copilot Extension for the IDE.

{%- comment %} Use the predefined versionGroups from JSON data {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## NeoVim {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endvimneovim %}
