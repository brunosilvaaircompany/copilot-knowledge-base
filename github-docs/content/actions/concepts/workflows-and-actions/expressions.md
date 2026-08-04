# Expressions

## About expressions

You can use expressions to programmatically set environment variables in workflow files and access contexts. An expression can be any combination of literal values, references to a context, or functions. You can combine literals, context references, and functions using operators. For more information about contexts, see [Contexts](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts).

Expressions are commonly used with the conditional `if` keyword in a workflow file to determine whether a step should run. When an `if` conditional is `true`, the step will run.

You need to use specific syntax to tell GitHub to evaluate an expression rather than treat it as a string.


{% raw %}
`${{ <expression> }}`
{% endraw %}

> [!NOTE]
> The exception to this rule is when you are using expressions in an `if` clause, where, optionally, you can usually omit {% raw %}`${{`{% endraw %} and {% raw %}`}}`{% endraw %}. For more information about `if` conditionals, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idif).

> [!WARNING]
> When creating workflows and actions, you should always consider whether your code might execute untrusted input from possible attackers. Certain contexts should be treated as untrusted input, as an attacker could insert their own malicious content. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#good-practices-for-mitigating-script-injection-attacks).


### Example setting an environment variable

{% raw %}

```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```

{% endraw %}

## Further reading

For technical reference information about expressions you can use in workflows and actions, see [Expressions](https://docs.github.com/en/actions/reference/workflows-and-actions/expressions).
