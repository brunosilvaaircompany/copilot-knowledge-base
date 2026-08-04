# Contexts

## About contexts

Contexts are a way to access information about workflow runs, variables, runner environments, jobs, and steps.
 Each context is an object that contains properties, which can be strings or other objects.

Contexts, objects, and properties will vary significantly under different workflow run conditions.
 For example, the `matrix` context is only populated for jobs in a [matrix](/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategymatrix).

You can access contexts using the expression syntax. For more information, see [Expressions](https://docs.github.com/en/actions/reference/workflows-and-actions/expressions).

{% raw %}
`${{ <context> }}`
{% endraw %}

> [!WARNING]
> When creating workflows and actions, you should always consider whether your code might execute untrusted input from possible attackers. Certain contexts should be treated as untrusted input, as an attacker could insert their own malicious content. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#good-practices-for-mitigating-script-injection-attacks).


## Determining when to use contexts

GitHub Actions includes a collection of variables called _contexts_ and a similar collection of variables called _default variables_. These variables are intended for use at different points in the workflow:

* **Default environment variables:** These environment variables exist only on the runner that is executing your job. For more information, see [Variables](https://docs.github.com/en/actions/reference/workflows-and-actions/variables#default-environment-variables).
* **Contexts:** You can use most contexts at any point in your workflow, including when _default variables_ would be unavailable. For example, you can use contexts with expressions to perform initial processing before the job is routed to a runner for execution; this allows you to use a context with the conditional `if` keyword to determine whether a step should run. Once the job is running, you can also retrieve context variables from the runner that is executing the job, such as `runner.os`. For details of where you can use various contexts within a workflow, see [Contexts](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#context-availability).

The following example demonstrates how these different types of variables can be used together in a job:

{% raw %}

```yaml copy
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```

{% endraw %}

In this example, the `if` statement checks the [`github.ref`](/actions/reference/workflows-and-actions/contexts#github-context) context to determine the current branch name; if the name is `refs/heads/main`, then the subsequent steps are executed. The `if` check is processed by GitHub Actions, and the job is only sent to the runner if the result is `true`. Once the job is sent to the runner, the step is executed and refers to the [`$GITHUB_REF`](/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables) variable from the runner.
