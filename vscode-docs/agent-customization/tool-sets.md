# Tool sets (deprecated)

User-defined tool sets group existing tools under a reusable name. They are deprecated and are not supported in the Copilot harness. Tool-set files remain available only for Local harness compatibility.

To move an existing workflow to the Copilot harness, follow [Replace tool sets](migrate-customizations.md#replace-tool-sets).

## Choose a replacement

* For a recurring role, specify supported tools directly in a [custom agent](custom-agents.md).
* For personal tool availability, use the [Tools tab in the Agent Customizations editor](../agents/run/tools.md#manage-available-tools).
* To distribute a workflow with external tools, package skills and MCP servers in an [agent plugin](agent-plugins.md).

The tool groups displayed by the Copilot harness and its supported built-in tool aliases are not user-defined tool-set files. A plugin or skill does not recreate a named tool-set alias.

## Related resources

* [Migrate existing customizations](migrate-customizations.md)
* [Tools and context reference](../agents/reference/tools-reference.md)
