# Warning: "1 issue was detected with this workflow: git checkout HEAD^2 is no longer necessary"

## About this warning

```text
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer
necessary. Please remove this step as Code Scanning recommends analyzing the merge
commit for best results.
```

If you're using an old CodeQL workflow you may receive this warning from the "Initialize CodeQL" action.

## Confirm the cause of the problem

Check for the following lines from the CodeQL workflow. These lines were included in the `steps` section of the `Analyze` job in initial versions of the CodeQL workflow.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

## Fixing the problem

Remove the lines from the CodeQL workflow. The revised `steps` section of the workflow should now look like this:

```yaml
    steps:
      - name: Checkout repository
        uses: actions/checkout@v6


      # Initializes the CodeQL tools for scanning.
      - name: Initialize CodeQL
        uses: github/codeql-action/init@v4


      # ...
```
