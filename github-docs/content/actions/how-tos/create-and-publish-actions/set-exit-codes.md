# Setting exit codes for actions

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## About exit codes

GitHub uses the exit code to set the action's check run status, which can be `success` or `failure`.

Exit status | Check run status | Description
------------|------------------|------------
`0` | `success` | The action completed successfully and other tasks that depend on it can begin.
Nonzero value (any integer but 0)| `failure` | Any other exit code indicates the action failed. When an action fails, all concurrent actions are canceled and future actions are skipped. The check run and check suite both get a `failure` status.

## Setting a failure exit code in a JavaScript action

If you are creating a JavaScript action, you can use the actions toolkit [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) package to log a message and set a failure exit code. For example:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

For more information, see [Create A JavaScript Action](https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action).

## Setting a failure exit code in a Docker container action

If you are creating a Docker container action, you can set a failure exit code in your `entrypoint.sh` script. For example:

```shell
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

For more information, see [Create A Docker Container Action](https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action).
