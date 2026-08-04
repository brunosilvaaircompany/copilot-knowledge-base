# Support for different types of custom instructions

This reference article provides details of which types of custom instructions are supported in various environments. For more information about the various types of custom instructions for GitHub Copilot, see [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization).

## GitHub.com

{% comment %}
WRITING NOTE: The following tables have been written using HTML rather than Markdown due to the poor column width rendering of Markdown tables. In Markdown the columns have equal width, resulting in the first column being too wide, and the second column being too narrow for the text it contains.
{% endcomment %}

<table>
  <thead>
    <tr>
      <th style="width: 25%">Copilot feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Copilot Chat </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">👤</span> &nbsp;<strong>Personal</strong> instructions.</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🏢</span> &nbsp;<strong>Organization</strong> instructions.</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot cloud agent</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🤖</span> &nbsp;<strong>Agent</strong> instructions (using <code>AGENTS.md</code>, <code>CLAUDE.md</code> or <code>GEMINI.md</code> files).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🏢</span> &nbsp;<strong>Organization</strong> instructions.</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot code review</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🤖</span> &nbsp;<strong>Agent</strong> instructions (using an <code>AGENTS.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🏢</span> &nbsp;<strong>Organization</strong> instructions.</li>

        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Visual Studio Code

<table>
  <thead>
    <tr>
      <th style="width: 25%">Copilot feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Copilot Chat </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🤖</span> &nbsp;<strong>Agent</strong> instructions (using an <code>AGENTS.md</code> file).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot cloud agent</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🤖</span> &nbsp;<strong>Agent</strong> instructions (using <code>AGENTS.md</code>, <code>CLAUDE.md</code> or <code>GEMINI.md</code> files).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot code review</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

        </ul>
      </td>
    </tr>
  </tbody>
</table>



## Visual Studio

<table>
  <thead>
    <tr>
      <th style="width: 25%">Copilot feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Copilot Chat </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot code review</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

        </ul>
      </td>
    </tr>
  </tbody>
</table>

## JetBrains IDEs

In JetBrains IDEs, you can manage supported customizations from the Agent Customizations editor. In the GitHub Copilot Chat panel, click the settings icon in the top-right, then click **Customizations**.

The editor lets you work with workspace customizations for the current project or personal customizations that follow you across projects. You can use it to view and edit custom agents, manage reusable skills and prompt files, and configure instructions. For more information, see [Add Repository Instructions In Your Ide](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide) and [Create Custom Agents In Your Ide](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents-in-your-ide).

<table>
  <thead>
    <tr>
      <th style="width: 25%">Copilot feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Copilot Chat </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">👤</span> &nbsp;<strong>Personal</strong> instructions.</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot cloud agent</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🤖</span> &nbsp;<strong>Agent</strong> instructions (using <code>AGENTS.md</code>, <code>CLAUDE.md</code> or <code>GEMINI.md</code> files).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot code review</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eclipse

<table>
  <thead>
    <tr>
      <th style="width: 25%">Copilot feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Copilot Chat </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot cloud agent</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🤖</span> &nbsp;<strong>Agent</strong> instructions (using <code>AGENTS.md</code>, <code>CLAUDE.md</code> or <code>GEMINI.md</code> files).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot code review</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;">Custom instructions are currently not supported.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Xcode

<table>
  <thead>
    <tr>
      <th style="width: 25%">Copilot feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Copilot Chat </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot cloud agent</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">🤖</span> &nbsp;<strong>Agent</strong> instructions (using <code>AGENTS.md</code>, <code>CLAUDE.md</code> or <code>GEMINI.md</code> files).</li>

        </ul>
      </td>
    </tr>
    <tr>
      <td>Copilot code review</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

          <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Copilot CLI

<ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
  <li style="text-indent: -1.6em;"><span aria-hidden="true">📦</span> &nbsp;<strong>Repository-wide</strong> instructions (using the <code>.github/copilot-instructions.md</code> file).</li>

  <li style="text-indent: -1.6em;"><span aria-hidden="true">📂</span> &nbsp;<strong>Path-specific</strong> instructions (using <code>.github/instructions/**/*.instructions.md</code> files).</li>

  <li style="text-indent: -1.6em;"><span aria-hidden="true">🤖</span> &nbsp;<strong>Agent</strong> instructions (using <code>AGENTS.md</code>, <code>CLAUDE.md</code> or <code>GEMINI.md</code> files).</li>

  <li style="text-indent: -1.6em;"><span aria-hidden="true">👤</span> &nbsp;<strong>Personal</strong> instructions (using <code>~/.copilot/copilot-instructions.md</code> or <code>~/.copilot/instructions/**/*.instructions.md</code> files).</li>
</ul>

## Further reading

* [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions)
* [Add Personal Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-personal-instructions)
* [Add Organization Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions)
